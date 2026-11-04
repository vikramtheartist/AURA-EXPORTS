/**
 * AURA EXPORTS — Standardized Enquiry Data Model
 * Unified structure across all website inquiry entry points
 */

export type EnquiryType = 'quotation' | 'product' | 'contact' | 'sample' | 'callback';

export interface CustomerDetails {
  full_name: string;
  company_name?: string;
  business_email?: string;
  phone?: string;
  whatsapp?: string;
  country?: string;
}

export interface ProcurementRequirements {
  estimated_quantity?: string;
  unit?: string;
  destination_country?: string;
  destination_port?: string;
  grade_or_specification?: string;
  packaging?: string;
  incoterm?: string;
  target_timeline?: string;
  message?: string;
}

export interface StandardEnquiryPayload {
  enquiry_id?: string;
  submitted_at?: string;
  enquiry_type: EnquiryType;
  source_page: string;
  source_component: string;
  product_category?: string;
  product_name?: string;
  product_variant?: string;
  product_origin?: string;
  customer: CustomerDetails;
  requirements?: ProcurementRequirements;
  consent?: {
    privacy_policy_accepted: boolean;
  };
  honeypot?: string;
  idempotency_key?: string;
}

export interface EnquirySubmissionResult {
  success: boolean;
  enquiry_id: string;
  message: string;
  delivered: boolean;
  timestamp: string;
}
