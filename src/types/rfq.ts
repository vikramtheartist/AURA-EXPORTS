/**
 * Aura Exports - RFQ Architecture Types
 * Phase 4: Two-Stage B2B Trade Intake & Procurement Schemas
 */

export interface RFQRequest {
  // Step 1: Procurement Requirement
  productCategory: string;
  productRequirement: string;
  quantity?: string;
  destinationCountry?: string;
  destinationPort?: string;
  timeline?: string;

  // Step 2: Buyer & Commercial Credentials
  buyerName: string;
  companyName: string;
  businessEmail: string;
  phone?: string;
  website?: string;
  procurementType?: string;
  incoterm?: string;
  additionalRequirements?: string;

  // Metadata / Tracking
  submittedAt?: string;
  sourceUrl?: string;
}

export interface RFQSubmissionResult {
  success: boolean;
  referenceId?: string;
  message: string;
  timestamp: string;
  isLiveDelivery: boolean;
  deliveryMode: 'production' | 'preview_audit';
}

export type ProcurementRole =
  | 'Importer'
  | 'Distributor'
  | 'Brand'
  | 'Manufacturer'
  | 'Retailer'
  | 'Private Label'
  | 'Other';

export type SupportedIncoterm = 'FOB' | 'CIF' | 'CFR' | 'Flexible / Undecided';
