/**
 * Aura Exports - Procurement & Catalog Data Types
 * Phase 4 Architecture: Strict Data States & Procurement Schema
 */

export type BusinessDataState =
  | 'VERIFIED'
  | 'AVAILABLE_ON_REQUEST'
  | 'SUBJECT_TO_CONFIRMATION'
  | 'NOT_CURRENTLY_PUBLISHED';

export type ProductAvailability = 'available' | 'on-request' | 'confirmation-required';

export interface DataPoint<T = string> {
  value: T;
  state: BusinessDataState;
  note?: string;
}

export interface SpecificationItem {
  parameter: string;
  requirement: string;
  state: BusinessDataState;
  testMethod?: string;
  notes?: string;
}

export interface ProductVariant {
  id: string;
  name: string;
  form: string;
  description: string;
  primaryApplication: string;
  suitability: string[];
  availability: ProductAvailability;
}

export interface TradeInformation {
  origin: DataPoint;
  exportGateways: DataPoint<string[]>;
  supportedIncoterms: DataPoint<string[]>;
  moqDescription: DataPoint;
  leadTimeDescription: DataPoint;
  customizationOptions: DataPoint<string[]>;
  packagingOptions: DataPoint<string[]>;
}

export interface VerificationInformation {
  originVerification: string;
  qualityTesting: string;
  inspectionScope: string;
  documentationAvailable: string[];
  samplePolicy: string;
}

export interface Product {
  slug: string;
  name: string;
  botanicalOrMaterialName?: string;
  categorySlug: 'spices' | 'jewelry' | 'textiles' | 'agro-products' | 'fashion-lifestyle' | 'sustainable-textiles' | string;
  categoryName: string;
  heroHeadline: string;
  positioningStatement: string;
  description: string;
  applications: string[];
  variants: ProductVariant[];
  specifications: SpecificationItem[];
  procurementDimensions: {
    dimension: string;
    description: string;
    options: string[];
  }[];
  trade: TradeInformation;
  verification: VerificationInformation;
  availabilityStatus: ProductAvailability;
  featuredImage: string;
}

export interface ProductCategory {
  slug: 'spices' | 'jewelry' | 'textiles' | 'agro-products' | 'fashion-lifestyle' | 'sustainable-textiles' | string;
  name: string;
  shortName: string;
  headline: string;
  description: string;
  sourcingPhilosophy: string;
  featuredImage: string;
  badge: string;
  procurementLens: {
    title: string;
    description: string;
    definableFields: string[];
  };
  productCount: number;
}
