/**
 * Aura Exports - Product Catalog & Information Architecture Types
 * Scalable schema supporting multi-category international commodity export
 */

export type ProductAvailabilityStatus = 
  | 'available' 
  | 'made-to-order' 
  | 'sourcing-on-request' 
  | 'seasonal' 
  | 'to-be-confirmed' 
  | 'on-request' 
  | 'to-be-verified';

export interface FreshProduceDetails {
  seasonality: string;
  harvestCycle: string;
  temperatureRequirements: string;
  shelfLife: string;
  packagingTypes: string[];
  coldChainNotes: string;
}

export interface TextileDetails {
  composition?: string;
  gsm?: string;
  width?: string;
  weaveOrKnit?: string;
  finish?: string;
  sizes?: string[];
  customization?: string[];
}

export interface CatalogProduct {
  id: string;
  name: string;
  slug: string;
  botanicalOrMaterialName?: string;
  category: 'Agro Products' | 'Fashion & Lifestyle' | 'Sustainable Textiles' | 'Apparel & Textiles';
  categorySlug: 'agro-products' | 'fashion-lifestyle' | 'sustainable-textiles' | 'spices' | 'jewelry' | 'textiles' | 'apparel-textiles';
  subcategory: string;
  subcategoryId: 
    | 'spices' 
    | 'turmeric' 
    | 'chillies' 
    | 'fresh-produce' 
    | 'moringa' 
    | 'grains-pulses' 
    | 'other-agro' 
    | 'jewelry-artisanal' 
    | 'temple-traditional'
    | 'kundan-meenakari'
    | 'oxidized-tribal'
    | 'contemporary-fashion'
    | 'handcrafted-accessories'
    | 'indian-lifestyle'
    | 'textiles-sustainable'
    | 'silk-sarees'
    | 'handloom-regional'
    | 'cotton-linen-fabrics'
    | 'block-printed-textiles'
    | 'fabrics-materials'
    | 'apparel-garments'
    | 'home-textiles'
    | 'handloom-traditional'
    | 'yarns-components'
    | 'textile-accessories'
    | string;
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
  textileDetails?: TextileDetails;
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

export interface TextileCategoryItem {
  id: string;
  categoryNumber: string;
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
  productCountText: string;
  productExamples: string[];
  highlights: string[];
}

export interface FashionCategoryItem {
  id: string;
  categoryNumber: string;
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
  productCountText: string;
  productExamples: string[];
  highlights: string[];
}
