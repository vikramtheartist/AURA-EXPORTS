/**
 * AURA Global Trade - Product Catalog & Information Architecture Types
 * Scalable schema supporting multi-category international commodity export
 */

export type ProductAvailabilityStatus = 'available' | 'on-request' | 'to-be-verified';

export interface FreshProduceDetails {
  seasonality: string;
  harvestCycle: string;
  temperatureRequirements: string;
  shelfLife: string;
  packagingTypes: string[];
  coldChainNotes: string;
}

export interface CatalogProduct {
  id: string;
  name: string;
  slug: string;
  botanicalOrMaterialName?: string;
  category: 'Agro Products' | 'Fashion & Lifestyle' | 'Sustainable Textiles';
  categorySlug: 'agro-products' | 'fashion-lifestyle' | 'sustainable-textiles' | 'spices' | 'jewelry' | 'textiles';
  subcategory: string;
  subcategoryId: 'spices' | 'turmeric' | 'chillies' | 'fresh-produce' | 'moringa' | 'grains-pulses' | 'other-agro' | 'jewelry-artisanal' | 'textiles-sustainable';
  tagline: string;
  description: string;
  detailedOverview: string;
  image: string;
  gallery?: string[];
  formats: string[];
  origin: string;
  specifications: Record<string, string>;
  packaging: string[];
  availability: ProductAvailabilityStatus;
  featured: boolean;
  enquiryEnabled: boolean;
  primaryApplications: string[];
  exportGateways: string[];
  freshProduceDetails?: FreshProduceDetails;
  supportedIncoterms?: string[];
}

export interface AgroCategoryItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
  productCountText: string;
  highlights: string[];
  featuredProducts: string[];
}
