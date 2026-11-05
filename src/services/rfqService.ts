/**
 * Aura Exports - RFQ Commercial Intake Adapter Service
 * Fully integrated with Centralized Enquiry Service & Backend API
 */

import { RFQRequest, RFQSubmissionResult } from '../types/rfq';
import { submitEnquiry } from './enquiryService';

export function validateRFQ(payload: RFQRequest): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!payload.productCategory?.trim()) {
    errors.push('Please select a product category.');
  }

  if (!payload.productRequirement?.trim() || payload.productRequirement.trim().length < 3) {
    errors.push('Please provide a specific product requirement description.');
  }

  if (!payload.buyerName?.trim()) {
    errors.push('Please enter your full name or representative title.');
  }

  const hasEmail = Boolean(
    payload.businessEmail?.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.businessEmail.trim())
  );
  const hasPhone = Boolean(payload.phone?.trim() && payload.phone.trim().replace(/\D/g, '').length >= 6);

  if (!hasEmail && !hasPhone) {
    errors.push('Please enter a valid business email address or WhatsApp/phone number.');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

export async function submitRFQ(payload: RFQRequest): Promise<RFQSubmissionResult> {
  const validation = validateRFQ(payload);
  if (!validation.valid) {
    throw new Error(validation.errors[0] || 'Invalid RFQ parameters');
  }

  // Map to StandardEnquiryPayload
  const result = await submitEnquiry({
    enquiry_type: 'quotation',
    source_page: typeof window !== 'undefined' ? window.location.href : 'https://auraexport.co',
    source_component: 'Request a Quote',
    product_category: payload.productCategory,
    product_name: payload.productRequirement,
    product_variant: payload.grade || '',
    product_origin: 'India',
    customer: {
      full_name: payload.buyerName,
      company_name: payload.companyName || '',
      business_email: payload.businessEmail || '',
      phone: payload.phone || '',
      country: payload.destinationCountry || '',
      website: (payload as any).website || '',
    },
    requirements: {
      estimated_quantity: payload.estimatedQuantity || '',
      unit: payload.quantityUnit || 'MT',
      destination_country: payload.destinationCountry || '',
      destination_port: payload.destinationPort || '',
      grade_or_specification: payload.grade || '',
      packaging: payload.preferredPackaging || '',
      incoterm: payload.incoterm || '',
      certifications: (payload as any).certifications || '',
      target_timeline: payload.targetTimeline || '',
      message: payload.additionalSpecifications || (payload as any).additionalRequirements || '',
    },
    honeypot: (payload as any).honeypot || '',
  });

  return {
    success: true,
    referenceId: result.enquiry_id,
    isLiveDelivery: result.delivered,
    deliveryMode: result.delivered ? 'production' : 'preview_audit',
    message: result.message,
    timestamp: new Date().toISOString(),
  };
}
