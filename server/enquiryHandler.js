/**
 * AURA EXPORTS — Server-side Enquiry Processing Engine
 * Security, sanitization, rate-limiting, and transactional email dispatch.
 */

import { generateEmailSubject, generateEmailHtml, generateEmailText } from './emailTemplate.js';
import fs from 'fs';
import path from 'path';

// Rate Limiting in-memory storage (IP -> timestamps array)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 10;

function isRateLimited(ip) {
  if (!ip) return false;
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const validTimestamps = timestamps.filter(t => t > windowStart);
  
  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }
  
  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return false;
}

// Idempotency cache to prevent duplicate submissions (key -> { response, expiresAt })
const idempotencyCache = new Map();
const IDEMPOTENCY_TTL_MS = 10 * 60 * 1000; // 10 minutes

const cleanupTimer = setInterval(() => {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  for (const [ip, timestamps] of rateLimitMap.entries()) {
    const valid = timestamps.filter(t => t > windowStart);
    if (valid.length === 0) {
      rateLimitMap.delete(ip);
    } else {
      rateLimitMap.set(ip, valid);
    }
  }
  for (const [key, item] of idempotencyCache.entries()) {
    if (now > item.expiresAt) {
      idempotencyCache.delete(key);
    }
  }
}, 5 * 60 * 1000);
if (cleanupTimer && typeof cleanupTimer.unref === 'function') {
  cleanupTimer.unref();
}

// Sanitize string to prevent email header injection (remove CRLF)
function sanitizeHeader(val) {
  if (!val) return '';
  return String(val).replace(/[\r\n]+/g, ' ').trim();
}

// Basic email validation regex
function isValidEmail(email) {
  if (!email || typeof email !== 'string') return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

/**
 * Core handler that accepts a parsed body and environment variables,
 * validates the enquiry, dispatches it to the email provider, and returns a response object.
 */
export async function processEnquiry(rawBody, env = {}, clientIp = '127.0.0.1') {
  // 1. Bot & Honeypot Protection
  if (rawBody.honeypot && String(rawBody.honeypot).trim() !== '') {
    console.warn('[AURA Security] Honeypot triggered, silently dropping bot submission');
    return {
      status: 200,
      body: {
        success: true,
        enquiry_id: `AURA-BOT-${Date.now().toString(36).toUpperCase()}`,
        message: 'Enquiry received.',
        delivered: false,
      },
    };
  }

  // 2. Duplicate Submission / Idempotency Check
  const idempotencyKey = rawBody.idempotency_key || rawBody.idempotencyKey;
  if (idempotencyKey && idempotencyCache.has(idempotencyKey)) {
    const cached = idempotencyCache.get(idempotencyKey);
    console.info(`[AURA Security] Idempotent retry detected for key: ${idempotencyKey}, returning cached outcome.`);
    return cached.response;
  }

  // 3. Rate Limiting Protection
  if (isRateLimited(clientIp)) {
    return {
      status: 429,
      body: {
        success: false,
        error: 'Too many submissions from this connection. Please wait a minute before retrying.',
      },
    };
  }

  // 4. Payload Extraction & Normalization
  const customer = rawBody.customer || {};
  const fullName = (customer.full_name || rawBody.fullName || rawBody.buyerName || '').trim();
  const businessEmail = (customer.business_email || rawBody.businessEmail || rawBody.email || '').trim();
  const phone = (customer.phone || customer.whatsapp || rawBody.phone || '').trim();
  const companyName = (customer.company_name || rawBody.companyName || rawBody.organization || '').trim();
  const country = (customer.country || rawBody.country || rawBody.destinationCountry || '').trim();

  // Validate required customer contact (Full name + at least email or phone)
  if (!fullName || fullName.length < 2) {
    return {
      status: 400,
      body: {
        success: false,
        error: 'Please provide a valid full name or representative title.',
      },
    };
  }

  const hasEmail = isValidEmail(businessEmail);
  const hasPhone = phone.replace(/\D/g, '').length >= 6;

  if (!hasEmail && !hasPhone) {
    return {
      status: 400,
      body: {
        success: false,
        error: 'Please provide at least a valid corporate email address or direct telephone/WhatsApp number.',
      },
    };
  }

  // 4. Generate Authoritative Reference ID
  const prefixMap = {
    quotation: 'AURA-RFQ',
    product: 'AURA-ENQ',
    contact: 'AURA-CONT',
    sample: 'AURA-SMPL',
    callback: 'AURA-CALL',
  };
  const enquiryType = rawBody.enquiry_type || 'quotation';
  const prefix = prefixMap[enquiryType] || 'AURA-ENQ';
  const timestampCode = Date.now().toString(36).toUpperCase();
  const randomSuffix = Math.floor(100 + Math.random() * 899);
  const enquiryId = `${prefix}-${timestampCode}-${randomSuffix}`;

  const normalizedEnquiry = {
    enquiry_id: enquiryId,
    submitted_at: new Date().toISOString(),
    enquiry_type: enquiryType,
    source_page: rawBody.source_page || 'https://auraexport.co',
    source_component: rawBody.source_component || 'Website Form',
    product_category: rawBody.product_category || rawBody.productCategory || '',
    product_name: rawBody.product_name || rawBody.productOfInterest || rawBody.productTitle || '',
    product_variant: rawBody.product_variant || rawBody.productForm || rawBody.grade || '',
    product_origin: rawBody.product_origin || rawBody.origin || 'India',
    customer: {
      full_name: fullName,
      company_name: companyName,
      business_email: hasEmail ? businessEmail : '',
      phone: phone,
      whatsapp: customer.whatsapp || phone,
      country: country,
    },
    requirements: {
      estimated_quantity: rawBody.requirements?.estimated_quantity || rawBody.quantity || rawBody.estimatedQuantity || '',
      unit: rawBody.requirements?.unit || rawBody.quantityUnit || '',
      destination_country: rawBody.requirements?.destination_country || rawBody.destinationCountry || country,
      destination_port: rawBody.requirements?.destination_port || rawBody.destinationPort || '',
      grade_or_specification: rawBody.requirements?.grade_or_specification || rawBody.technicalRequirements || rawBody.productRequirement || '',
      packaging: rawBody.requirements?.packaging || rawBody.preferredPackaging || '',
      incoterm: rawBody.requirements?.incoterm || rawBody.incoterm || '',
      target_timeline: rawBody.requirements?.target_timeline || rawBody.timeline || rawBody.targetTimeline || '',
      message: rawBody.requirements?.message || rawBody.message || rawBody.additionalRequirements || '',
    },
    consent: {
      privacy_policy_accepted: true,
    },
  };

  // 5. Build Formatted Email
  const emailSubject = generateEmailSubject(normalizedEnquiry);
  const emailHtml = generateEmailHtml(normalizedEnquiry);
  const emailText = generateEmailText(normalizedEnquiry);

  // 6. Recipient & Sender Configuration
  const recipientEmail = env.ENQUIRY_TO_EMAIL || process.env.ENQUIRY_TO_EMAIL || 'contact@auraexport.co';
  const senderEmail = env.EMAIL_FROM || process.env.EMAIL_FROM || 'enquiries@auraexport.co';
  const replyTo = hasEmail ? sanitizeHeader(businessEmail) : recipientEmail;

  // 7. Transactional Email Provider Credentials
  const apiKey =
    env.EMAIL_PROVIDER_API_KEY ||
    process.env.EMAIL_PROVIDER_API_KEY ||
    env.RESEND_API_KEY ||
    process.env.RESEND_API_KEY ||
    env.SENDGRID_API_KEY ||
    process.env.SENDGRID_API_KEY;

  let deliverySuccess = false;
  let deliveryDetails = null;

  // Case A: RESEND API Integration
  if (apiKey && (apiKey.startsWith('re_') || (!env.SENDGRID_API_KEY && !process.env.SENDGRID_API_KEY))) {
    try {
      const resendResp = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: senderEmail,
          to: [recipientEmail],
          reply_to: replyTo,
          subject: emailSubject,
          html: emailHtml,
          text: emailText,
          tags: [
            { name: 'enquiry_id', value: enquiryId },
            { name: 'enquiry_type', value: enquiryType },
          ],
        }),
      });

      const resendData = await resendResp.json().catch(() => null);

      if (resendResp.ok && resendData?.id) {
        deliverySuccess = true;
        deliveryDetails = { provider: 'resend', messageId: resendData.id };
        console.info(`[AURA Email] Resend accepted enquiry ${enquiryId} with ID ${resendData.id}`);
      } else {
        console.error('[AURA Email] Resend delivery error:', resendData);
        return {
          status: 502,
          body: {
            success: false,
            error: resendData?.message || 'Email delivery provider failed to dispatch enquiry.',
            enquiry_id: enquiryId,
          },
        };
      }
    } catch (netErr) {
      console.error('[AURA Email] Network error connecting to Resend:', netErr);
      return {
        status: 503,
        body: {
          success: false,
          error: 'Network connectivity failure connecting to transactional email provider.',
          enquiry_id: enquiryId,
        },
      };
    }
  }
  // Case B: SENDGRID API Integration
  else if (apiKey && apiKey.startsWith('SG.')) {
    try {
      const sgResp = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          personalizations: [{ to: [{ email: recipientEmail }] }],
          from: { email: senderEmail, name: 'Aura Exports Portal' },
          reply_to: { email: replyTo, name: fullName },
          subject: emailSubject,
          content: [
            { type: 'text/plain', value: emailText },
            { type: 'text/html', value: emailHtml },
          ],
        }),
      });

      if (sgResp.ok || sgResp.status === 202) {
        deliverySuccess = true;
        deliveryDetails = { provider: 'sendgrid', status: sgResp.status };
        console.info(`[AURA Email] SendGrid accepted enquiry ${enquiryId}`);
      } else {
        const sgData = await sgResp.json().catch(() => null);
        console.error('[AURA Email] SendGrid delivery error:', sgData);
        return {
          status: 502,
          body: {
            success: false,
            error: 'SendGrid rejected the enquiry transmission.',
            enquiry_id: enquiryId,
          },
        };
      }
    } catch (netErr) {
      console.error('[AURA Email] Network error connecting to SendGrid:', netErr);
      return {
        status: 503,
        body: {
          success: false,
          error: 'Network failure connecting to SendGrid.',
          enquiry_id: enquiryId,
        },
      };
    }
  }
  // Case C: Development / Local Audit Log Mode
  else if (
    process.env.NODE_ENV !== 'production' ||
    env.ENABLE_DEV_AUDIT_LOGS === 'true' ||
    process.env.ENABLE_DEV_AUDIT_LOGS === 'true' ||
    !apiKey
  ) {
    // Record to local audit trail in development so work can be verified end-to-end
    try {
      const auditDir = path.resolve(process.cwd(), '.audit-logs');
      if (!fs.existsSync(auditDir)) {
        fs.mkdirSync(auditDir, { recursive: true });
      }
      const auditLogPath = path.join(auditDir, 'enquiries.jsonl');
      const auditRecord = JSON.stringify({
        ...normalizedEnquiry,
        subject: emailSubject,
        destination: recipientEmail,
        loggedAt: new Date().toISOString(),
      }) + '\n';
      fs.appendFileSync(auditLogPath, auditRecord);
      console.info(`[AURA Dev Audit] Successfully preserved enquiry ${enquiryId} to ${auditLogPath}`);
    } catch (auditErr) {
      console.warn('[AURA Dev Audit] Could not append to file log:', auditErr);
    }

    deliverySuccess = true;
    deliveryDetails = {
      provider: 'dev_audit_log',
      destination: recipientEmail,
      note: 'Saved to local audit log. In production, configure EMAIL_PROVIDER_API_KEY for live Resend/SendGrid delivery.',
    };
  }

  // 8. Return Standard Success Response
  const responseObj = {
    status: 200,
    body: {
      success: true,
      enquiry_id: enquiryId,
      message: 'Thank you for contacting AURA Exports. Your enquiry has been received successfully. Our team will review your requirements and get back to you.',
      delivered: deliverySuccess,
      timestamp: normalizedEnquiry.submitted_at,
      details: deliveryDetails,
    },
  };

  if (idempotencyKey) {
    idempotencyCache.set(idempotencyKey, {
      response: responseObj,
      expiresAt: Date.now() + IDEMPOTENCY_TTL_MS,
    });
  }

  return responseObj;
}
