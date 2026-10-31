/**
 * AURA Global Trade - RFQ Commercial Intake Adapter Service
 * Phase 4: Clean Integration Boundary for CRM / API / Email Dispatch
 */

import { RFQRequest, RFQSubmissionResult } from '../types/rfq';

const STORAGE_KEY = 'aura_rfq_submissions_v1';

/**
 * Validates an RFQ request before transmission
 */
export function validateRFQ(payload: RFQRequest): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!payload.productCategory?.trim()) {
    errors.push('Please select a product category.');
  }

  if (!payload.productRequirement?.trim() || payload.productRequirement.trim().length < 5) {
    errors.push('Please provide a specific product requirement description (minimum 5 characters).');
  }

  if (!payload.buyerName?.trim()) {
    errors.push('Please enter your full name or representative title.');
  }

  if (!payload.companyName?.trim()) {
    errors.push('Please provide your registered company or organization name.');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!payload.businessEmail?.trim() || !emailRegex.test(payload.businessEmail.trim())) {
    errors.push('Please enter an authentic corporate or business email address.');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Submits an RFQ through the enterprise integration boundary.
 *
 * In production with configured backend API/webhook endpoints,
 * this transmits directly to the AURA Trade Desk CRM / SMTP pipeline.
 *
 * In preview / development without live credentials, this captures the requirement
 * into the local institutional audit docket and explicitly reports preview mode,
 * preventing false claims of live transmission while ensuring no user data is lost.
 */
export async function submitRFQ(payload: RFQRequest): Promise<RFQSubmissionResult> {
  const validation = validateRFQ(payload);
  if (!validation.valid) {
    throw new Error(validation.errors[0] || 'Invalid RFQ parameters');
  }

  const referenceId = `AURA-RFQ-${Date.now().toString(36).toUpperCase()}-${Math.floor(Math.random() * 899 + 100)}`;
  const submissionRecord = {
    ...payload,
    referenceId,
    submittedAt: new Date().toISOString(),
    sourceUrl: typeof window !== 'undefined' ? window.location.href : '',
  };

  // Simulating network latency for enterprise feel
  await new Promise((resolve) => setTimeout(resolve, 800));

  const webhookUrl = (import.meta as any).env?.VITE_RFQ_WEBHOOK_URL || (import.meta as any).env?.VITE_RFQ_API_URL;
  const isConfiguredForLiveDelivery = Boolean(webhookUrl && typeof webhookUrl === 'string' && webhookUrl.startsWith('http'));

  try {
    // 1. Audit persistence: Ensure requirement data is safely recorded locally
    if (typeof window !== 'undefined' && window.localStorage) {
      const existing = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]');
      existing.unshift({
        ...submissionRecord,
        auditMode: isConfiguredForLiveDelivery ? 'production_dispatched' : 'preview_audit_only',
      });
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(existing.slice(0, 50)));
    }

    // 2. Production Transmission Boundary (if webhook/API configured)
    if (isConfiguredForLiveDelivery) {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(submissionRecord),
      });

      if (!response.ok) {
        throw new Error(`Production Trade Desk endpoint responded with status ${response.status}`);
      }

      if (typeof window !== 'undefined') {
        window.dispatchEvent(
          new CustomEvent('aura:rfq_submitted', { detail: { referenceId, payload, live: true } })
        );
      }

      return {
        success: true,
        referenceId,
        isLiveDelivery: true,
        deliveryMode: 'production',
        message: 'Your requirement has been transmitted directly to the AURA Trade Desk.',
        timestamp: submissionRecord.submittedAt,
      };
    }

    // 3. Preview / Development Mode
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('aura:rfq_submitted', { detail: { referenceId, payload, live: false } })
      );
    }

    return {
      success: true,
      referenceId,
      isLiveDelivery: false,
      deliveryMode: 'preview_audit',
      message: 'Requirement recorded in preview audit docket. Live delivery requires production backend credentials.',
      timestamp: submissionRecord.submittedAt,
    };
  } catch (err: any) {
    console.error('[AURA RFQ Adapter] Submission error:', err);
    throw new Error('We could not submit the request right now. Please try again or contact the AURA Trade Desk directly at contact@auraexport.co');
  }
}
