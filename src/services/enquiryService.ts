/**
 * AURA EXPORTS — Centralized Client Enquiry Service
 * Standardizes submission, client validation, idempotency, error resilience,
 * and strictly non-PII GA4 tracking for all forms across the entire website.
 */

import { StandardEnquiryPayload, EnquirySubmissionResult } from '../types/enquiry';
import { trackContactEvent } from '../utils/analytics';

// Storage key for client-side audit preservation
const AUDIT_STORAGE_KEY = 'aura_enquiry_client_audit_v1';

// In-flight request lock map to block simultaneous duplicate requests
const inFlightRequests = new Set<string>();

/**
 * Generate a client-side idempotency key to prevent accidental duplicate submissions
 */
export function generateIdempotencyKey(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return `idemp_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}

/**
 * Central submission function for ALL forms on the website
 */
export async function submitEnquiry(payload: Partial<StandardEnquiryPayload>): Promise<EnquirySubmissionResult> {
  // 1. Client-Side Field Validation
  const fullName = (payload.customer?.full_name || '').trim();
  const email = (payload.customer?.business_email || '').trim();
  const phone = (payload.customer?.phone || payload.customer?.whatsapp || '').trim();

  if (!fullName || fullName.length < 2) {
    throw new Error('Please enter your full name or representative title.');
  }

  const hasEmail = Boolean(email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
  const hasPhone = Boolean(phone && phone.replace(/\D/g, '').length >= 6);

  if (!hasEmail && !hasPhone) {
    throw new Error('Please provide at least a valid business email address or direct WhatsApp/telephone number.');
  }

  // 2. Prevent Duplicate In-Flight Submissions
  const lockKey = `${fullName.toLowerCase()}_${email.toLowerCase()}_${phone}_${payload.enquiry_type || 'quotation'}`;
  if (inFlightRequests.has(lockKey)) {
    throw new Error('Your enquiry is currently being transmitted. Please wait.');
  }
  inFlightRequests.add(lockKey);

  // 3. Track submission attempt (Non-PII)
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://auraexport.co';

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'enquiry_submit_attempt', {
      enquiry_type: payload.enquiry_type || 'quotation',
      product_category: payload.product_category || 'General',
      product_name: payload.product_name || 'N/A',
      source_component: payload.source_component || 'form',
      page_path: currentPath,
    });
  }

  // 4. Construct Normalized Payload
  const idempotencyKey = payload.idempotency_key || generateIdempotencyKey();
  const normalized: StandardEnquiryPayload = {
    idempotency_key: idempotencyKey,
    submitted_at: new Date().toISOString(),
    enquiry_type: payload.enquiry_type || 'quotation',
    source_page: payload.source_page || currentUrl,
    source_component: payload.source_component || 'Form Submission',
    product_category: payload.product_category || '',
    product_name: payload.product_name || '',
    product_variant: payload.product_variant || '',
    product_origin: payload.product_origin || 'India',
    customer: {
      full_name: fullName,
      company_name: (payload.customer?.company_name || '').trim(),
      business_email: hasEmail ? email : '',
      phone: phone,
      whatsapp: payload.customer?.whatsapp || phone,
      country: (payload.customer?.country || '').trim(),
    },
    requirements: {
      estimated_quantity: payload.requirements?.estimated_quantity || '',
      unit: payload.requirements?.unit || '',
      destination_country: payload.requirements?.destination_country || payload.customer?.country || '',
      destination_port: payload.requirements?.destination_port || '',
      grade_or_specification: payload.requirements?.grade_or_specification || '',
      packaging: payload.requirements?.packaging || '',
      incoterm: payload.requirements?.incoterm || '',
      target_timeline: payload.requirements?.target_timeline || '',
      message: payload.requirements?.message || '',
    },
    consent: {
      privacy_policy_accepted: true,
    },
    honeypot: payload.honeypot || '',
  };

  // Determine server endpoint
  // Supports VITE_ENQUIRY_API_URL if configured for external serverless / microservice deployment
  const apiUrl = (import.meta as any).env?.VITE_ENQUIRY_API_URL || '/api/enquiry';

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 20000); // 20s timeout

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Idempotency-Key': idempotencyKey,
      },
      body: JSON.stringify(normalized),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    const data = await response.json().catch(() => null);

    if (!response.ok || !data?.success) {
      const errMsg =
        data?.error ||
        "We couldn't submit your enquiry right now. Your information has not been confirmed as received. Please try again or contact us directly at contact@auraexport.co.";
      
      // Track error event in GA4 (Zero PII)
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'enquiry_submit_error', {
          enquiry_type: normalized.enquiry_type,
          status_code: response.status,
          page_path: currentPath,
        });
      }

      throw new Error(errMsg);
    }

    const confirmedEnquiryId = data.enquiry_id || `AURA-${Date.now().toString(36).toUpperCase()}`;

    // 5. Store audit record in client storage safely
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const stored = JSON.parse(window.localStorage.getItem(AUDIT_STORAGE_KEY) || '[]');
        stored.unshift({
          enquiry_id: confirmedEnquiryId,
          submitted_at: normalized.submitted_at,
          enquiry_type: normalized.enquiry_type,
          product_name: normalized.product_name,
          customer_name: fullName,
          delivered: Boolean(data.delivered),
        });
        window.localStorage.setItem(AUDIT_STORAGE_KEY, JSON.stringify(stored.slice(0, 30)));
      }
    } catch {
      // LocalStorage access errors are non-fatal
    }

    // 6. Trigger Confirmed Success GA4 Events (Strictly NON-PII)
    if (typeof window !== 'undefined' && window.gtag) {
      // Generic success event
      window.gtag('event', 'enquiry_submit_success', {
        enquiry_id: confirmedEnquiryId,
        enquiry_type: normalized.enquiry_type,
        product_category: normalized.product_category || undefined,
        product_name: normalized.product_name || undefined,
        source_component: normalized.source_component,
        page_path: currentPath,
      });

      // Specific business conversion events
      if (normalized.enquiry_type === 'quotation') {
        window.gtag('event', 'quotation_request', {
          reference_id: confirmedEnquiryId,
          product_name: normalized.product_name || undefined,
          product_category: normalized.product_category || undefined,
          page_path: currentPath,
        });
      } else if (normalized.enquiry_type === 'sample') {
        window.gtag('event', 'sample_request', {
          reference_id: confirmedEnquiryId,
          product_name: normalized.product_name || undefined,
          page_path: currentPath,
        });
      } else if (normalized.enquiry_type === 'callback') {
        window.gtag('event', 'callback_request', {
          reference_id: confirmedEnquiryId,
          page_path: currentPath,
        });
      } else if (normalized.enquiry_type === 'contact') {
        window.gtag('event', 'contact_form_submit_success', {
          reference_id: confirmedEnquiryId,
          page_path: currentPath,
        });
      }
    }

    // Legacy tracker compatibility
    trackContactEvent('enquiry_submitted', {
      productName: normalized.product_name,
      category: normalized.product_category,
      referenceId: confirmedEnquiryId,
      mode: normalized.enquiry_type,
    });

    return {
      success: true,
      enquiry_id: confirmedEnquiryId,
      message:
        data.message ||
        'Thank you for contacting AURA Exports. Your enquiry has been received successfully. Our team will review your requirements and get back to you.',
      delivered: Boolean(data.delivered),
      timestamp: normalized.submitted_at,
    };
  } catch (err: any) {
    if (err.name === 'AbortError') {
      throw new Error(
        "Request timed out. We couldn't confirm your enquiry delivery. Please check your network connection and try again, or email us at contact@auraexport.co."
      );
    }
    throw err;
  } finally {
    inFlightRequests.delete(lockKey);
  }
}
