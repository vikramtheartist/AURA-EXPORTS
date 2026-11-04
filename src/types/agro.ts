/**
 * AURA Global Trade - Agro Products Origin-to-Market Export Types
 * Structured for international B2B importers, wholesalers, extractors, and food manufacturers
 */

export interface AgroOriginRegion {
  id: string;
  state: string;
  regions: string[];
  featuredProduct: string;
  category: string;
  headline: string;
  description: string;
  terroirAndCultivation: string;
  productForms: string[];
  targetMarkets: string[];
  image: string;
  coordinates: { x: number; y: number }; // Percentage position on India map (0-100)
  activeStatus: 'active-corridor' | 'potential-corridor' | 'established-cluster';
}

export interface TurmericFormDetail {
  id: string;
  formNumber: string;
  name: string;
  subtitle: string;
  headline: string;
  description: string;
  origin: {
    state: string;
    regions: string[];
    country: string;
  };
  varieties: string[];
  availableGrades: string[];
  specifications: Record<string, string>;
  packagingOptions: {
    type: 'bulk' | 'retail' | 'custom';
    sizes: string[];
    material: string;
    barrierProps: string;
  }[];
  applications: string[];
  processingMethod: string;
  storageAndShelfLife: string;
  exportDocumentation: string[];
  regulatoryAndSafetyNotes?: string;
  image: string;
  sampleAvailable: boolean;
  minOrderQuantity: string;
}

export interface AgroPackagingOption {
  id: string;
  tier: 'bulk' | 'retail' | 'private-label';
  title: string;
  subtitle: string;
  sizes: string[];
  materials: string[];
  recommendedProducts: string[];
  description: string;
  customizationDetails: string[];
}

export interface QualityStep {
  step: string;
  title: string;
  tagline: string;
  description: string;
  parameters: string[];
  documentation: string[];
}

export interface BuyerJourneyStep {
  stepNumber: string;
  name: string;
  buyerAction: string;
  auraSupport: string;
  deliverables: string[];
}
