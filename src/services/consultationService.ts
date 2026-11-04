/**
 * Aura Exports - Consultation Intake & Email Dispatch Service
 * Fully integrated with Centralized Enquiry Service & Backend API
 */

import { submitEnquiry } from './enquiryService';

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

export function validateEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

/**
 * Submits a consultation booking request through central backend
 */
export async function submitConsultationBooking(email: string, honeypot = ''): Promise<ConsultationResult> {
  const trimmed = email.trim();
  if (!validateEmail(trimmed)) {
    throw new Error('Please enter a valid business or corporate email address.');
  }

  const result = await submitEnquiry({
    enquiry_type: 'callback',
    source_component: 'Footer Consultation Booking',
    source_page: typeof window !== 'undefined' ? window.location.href : 'https://auraexport.co',
    customer: {
      full_name: 'Prospective Client',
      business_email: trimmed,
      company_name: '',
      phone: '',
      country: '',
    },
    requirements: {
      message: 'Client requested an executive commercial trade consultation callback.',
    },
    honeypot,
  });

  return {
    success: true,
    referenceId: result.enquiry_id,
    message: result.message,
  };
}

export interface GeneralCorrespondencePayload {
  fullName: string;
  email: string;
  organization?: string;
  country?: string;
  topic: string;
  message: string;
  honeypot?: string;
}

/**
 * Submits general correspondence from the Contact page through central backend
 */
export async function submitGeneralCorrespondence(payload: GeneralCorrespondencePayload): Promise<ConsultationResult> {
  const trimmedEmail = payload.email.trim();
  if (!validateEmail(trimmedEmail)) {
    throw new Error('Please enter a valid business or corporate email address.');
  }

  const result = await submitEnquiry({
    enquiry_type: 'contact',
    source_component: 'Contact Page Correspondence',
    source_page: typeof window !== 'undefined' ? window.location.href : 'https://auraexport.co/contact',
    customer: {
      full_name: payload.fullName,
      company_name: payload.organization || '',
      business_email: trimmedEmail,
      phone: '',
      country: payload.country || '',
    },
    requirements: {
      grade_or_specification: payload.topic,
      message: payload.message,
    },
    honeypot: payload.honeypot || '',
  });

  return {
    success: true,
    referenceId: result.enquiry_id,
    message: result.message,
  };
}
