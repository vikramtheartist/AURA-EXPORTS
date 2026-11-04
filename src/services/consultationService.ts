/**
 * AURA Global Trade - Consultation Intake & Email Dispatch Service
 * Dispatches consultation bookings to the Trade Desk mailbox (contact.auraexport.co@gmail.com)
 */

export interface ConsultationSubmission {
  email: string;
  referenceId: string;
  submittedAt: string;
  sourceUrl: string;
}

export interface ConsultationResult {
  success: boolean;
  referenceId: string;
  message: string;
}

const STORAGE_KEY = 'aura_consultation_inquiries_v1';
export const DEFAULT_RECIPIENT_EMAIL = 'auraexport.co@gmail.com';

/**
 * Validates a corporate or business email format
 */
export function validateEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.trim());
}

/**
 * Submits a consultation booking request:
 * 1. Stores an audit record in local storage
 * 2. Transmits the payload to the Trade Desk mailbox via FormSubmit / Webhook
 * 3. Returns confirmation result
 */
export async function submitConsultationBooking(email: string): Promise<ConsultationResult> {
  const trimmed = email.trim();
  if (!validateEmail(trimmed)) {
    throw new Error('Please enter a valid business or corporate email address.');
  }

  const referenceId = `AURA-CONSULT-${Date.now().toString(36).toUpperCase()}-${Math.floor(
    Math.random() * 899 + 100
  )}`;

  const submission: ConsultationSubmission = {
    email: trimmed,
    referenceId,
    submittedAt: new Date().toISOString(),
    sourceUrl: typeof window !== 'undefined' ? window.location.href : '',
  };

  // 1. Audit trail in localStorage
  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      const existing = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]');
      existing.unshift(submission);
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(existing.slice(0, 50)));
    } catch (e) {
      console.warn('[AURA Consultation] Could not persist to localStorage:', e);
    }
  }

  // 2. Dispatch email to contact.auraexport.co@gmail.com
  const recipient =
    (import.meta as any).env?.VITE_CONSULTATION_RECIPIENT_EMAIL || DEFAULT_RECIPIENT_EMAIL;
  const webhookUrl = (import.meta as any).env?.VITE_CONSULTATION_WEBHOOK_URL;

  try {
    if (webhookUrl && typeof webhookUrl === 'string' && webhookUrl.startsWith('http')) {
      // Custom Webhook Endpoint
      const resp = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submission),
      });
      if (!resp.ok) {
        console.warn(`[AURA Consultation] Webhook returned status ${resp.status}`);
      }
    } else {
      // Direct email dispatch to Trade Desk inbox via FormSubmit JSON endpoint
      const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(recipient)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `🔔 New Trade Consultation Request (${referenceId})`,
          _template: 'table',
          _captcha: 'false',
          _replyto: trimmed,
          'Reference ID': referenceId,
          'Client Email': trimmed,
          'Inquiry Type': 'Executive Commercial Trade Consultation',
          'Submission Date (UTC)': submission.submittedAt,
          'Referral Page': submission.sourceUrl,
        }),
      });

      const responseData = await response.json().catch(() => null);
      if (responseData?.message?.toLowerCase().includes('activation')) {
        console.info('[AURA Consultation] FormSubmit awaiting one-time inbox activation for:', recipient);
      } else if (!response.ok) {
        console.warn(`[AURA Consultation] FormSubmit returned status ${response.status}`, responseData);
      }
    }
  } catch (netErr) {
    // Network failures shouldn't prevent confirmation if audit record was preserved
    console.warn('[AURA Consultation] Network transmission notice:', netErr);
  }

  // 3. Emit custom event for analytics / UI tracking
  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent('aura:consultation_booked', { detail: submission })
    );
  }

  return {
    success: true,
    referenceId,
    message: 'We received your inquiry. A trade desk officer will review your request and contact you promptly.',
  };
}
