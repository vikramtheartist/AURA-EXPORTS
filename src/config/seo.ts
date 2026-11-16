export interface PageSEOConfig {
  title: string;
  description: string;
  canonical: string;
  keywords?: string[];
  ogType?: 'website' | 'article' | 'product';
  ogImage?: string;
  robots?: string;
  breadcrumbs?: Array<{ name: string; item: string }>;
  jsonLd?: Record<string, any> | Array<Record<string, any>>;
}

export const SITE_BASE_URL = 'https://auraexport.co';
export const DEFAULT_OG_IMAGE = `${SITE_BASE_URL}/og-image.png`;
export const BRAND_NAME = 'AURA';
export const LEGAL_NAME = 'AURA ENTERPRISE EXPORTS (OPC) PRIVATE LIMITED';
export const BRAND_TAGLINE = 'PURE & ETHICAL SOURCES';
export const BUSINESS_POSITIONING = 'Premium Indian Sourcing, Export & Import Enterprise';

/**
 * Enterprise Organization / Corporation Schema.
 * Connected with stable @id https://auraexport.co/#organization.
 */
export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'Corporation'],
  '@id': `${SITE_BASE_URL}/#organization`,
  name: 'AURA Enterprise Exports',
  legalName: LEGAL_NAME,
  alternateName: [
    'AURA',
    'Aura Enterprise Exports',
    'AURA — PURE & ETHICAL SOURCES',
    'Aura Exports',
  ],
  url: `${SITE_BASE_URL}/`,
  logo: {
    '@type': 'ImageObject',
    '@id': `${SITE_BASE_URL}/#logo`,
    url: `${SITE_BASE_URL}/favicon.svg`,
    caption: 'AURA Enterprise Exports',
  },
  image: DEFAULT_OG_IMAGE,
  email: 'contact@auraexport.co',
  telephone: '+919361990229',
  description: 'AURA Enterprise Exports (OPC) Private Limited is an India-based B2B export and sourcing company connecting international buyers with certified Indian suppliers of agro commodities, spices, apparel and textiles.',
  slogan: BRAND_TAGLINE,
  identifier: 'U46411TN2026OPC194827',
  foundingDate: '2026-07-02',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    addressCountry: 'India',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+919361990229',
      contactType: 'trade desk',
      email: 'contact@auraexport.co',
      areaServed: ['Americas', 'Europe', 'Middle East', 'Asia-Pacific', 'Africa'],
      availableLanguage: ['English', 'Tamil', 'Hindi'],
    },
  ],
  knowsAbout: [
    'AURA Enterprise Exports',
    'Indian Export Company',
    'India B2B Sourcing Company',
    'Indian Agro Products Exporter',
    'Indian Spices Exporter',
    'Salem Turmeric Exporter',
    'Alleppey Green Cardamom Supplier',
    'Malabar Black Pepper Supplier',
    'Indian Textile Exporter',
    'Indian Apparel Sourcing Partner',
    'Handcrafted Fashion Jewellery Export',
  ],
  areaServed: ['US', 'CA', 'GB', 'AE', 'SA', 'DE', 'FR', 'AU', 'SG', 'MY', 'JP'],
};

// Corporation Schema backward-compatible alias
export const corporationJsonLd = organizationJsonLd;

/**
 * WebSite Schema with publisher link to #organization
 */
export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_BASE_URL}/#website`,
  name: 'AURA Enterprise Exports',
  alternateName: 'AURA',
  url: `${SITE_BASE_URL}/`,
  description: 'AURA Enterprise Exports (OPC) Private Limited is an India-based B2B export and sourcing company connecting global buyers with Indian agro products, spices, apparel and textiles.',
  publisher: {
    '@id': `${SITE_BASE_URL}/#organization`,
  },
  inLanguage: 'en-US',
};

/**
 * Unified Homepage Schema Graph
 * Combines Organization and WebSite into a single consistent JSON-LD graph.
 */
export const homeJsonLdGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    organizationJsonLd,
    websiteJsonLd,
  ],
};

/**
 * Global Page SEO Configurations
 */
export const seoConfigs: Record<string, PageSEOConfig> = {
  home: {
    title: 'AURA Enterprise Exports | Indian Export & Sourcing Company',
    description: 'AURA Enterprise Exports (OPC) Private Limited is an India-based B2B export and sourcing company connecting global buyers with Indian agro products, spices, apparel and textiles.',
    canonical: `${SITE_BASE_URL}/`,
    keywords: [
      'AURA Enterprise Exports',
      'AURA Exports India',
      'Indian Export Company',
      'India B2B Sourcing Company',
      'Indian Product Sourcing Partner',
      'Indian Agro Products Exporter',
      'Indian Spices Exporter',
      'Indian Textile Exporter',
    ],
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    robots: 'index, follow',
    jsonLd: homeJsonLdGraph,
  },

  about: {
    title: 'About AURA Enterprise Exports | Pure & Ethical Indian Sourcing',
    description: 'Discover AURA Enterprise Exports (OPC) Private Limited: our mission, ethical sourcing governance, export corridors, and commitment to global B2B trade excellence.',
    canonical: `${SITE_BASE_URL}/about/`,
    keywords: [
      'About AURA Enterprise Exports',
      'Indian Sourcing Partner',
      'Chennai Export Company',
      'Tamil Nadu Exporters',
    ],
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    robots: 'index, follow',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_BASE_URL}/` },
      { name: 'About AURA Enterprise Exports', item: `${SITE_BASE_URL}/about/` },
    ],
    jsonLd: organizationJsonLd,
  },

  products: {
    title: 'Export Products Catalogue | Agro Commodities, Textiles & Jewellery | AURA',
    description: 'Explore AURA Enterprise Exports\' institutional procurement portfolio: Indian agricultural commodities, South Indian spices, artisanal fashion jewellery, and regional handlooms.',
    canonical: `${SITE_BASE_URL}/products/`,
    keywords: [
      'Indian Wholesale Suppliers',
      'Indian Export Products',
      'B2B Indian Sourcing Catalogue',
    ],
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    robots: 'index, follow',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_BASE_URL}/` },
      { name: 'Products', item: `${SITE_BASE_URL}/products/` },
    ],
  },

  buyRetail: {
    title: 'Buy Retail Gourmet Spices Online | AURA Enterprise Exports',
    description: 'Shop pure single-origin Indian spices online. Direct Salem turmeric powder, Alleppey green cardamom, Guntur chillies, and gourmet tins. Pan-India and global doorstep delivery.',
    canonical: `${SITE_BASE_URL}/buy-retail/`,
    keywords: [
      'Buy Indian Spices Online',
      'Salem Turmeric Powder Retail',
      'Green Cardamom Online',
      'Gourmet Spices Delivery',
    ],
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    robots: 'index, follow',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_BASE_URL}/` },
      { name: 'Buy Retail', item: `${SITE_BASE_URL}/buy-retail/` },
    ],
  },

  agroProducts: {
    title: 'Indian Agro Products Exporter | Spices, Grains & Commodities | AURA',
    description: 'Direct-from-origin Indian agricultural commodities exporter. Bulk sourcing for Salem turmeric, Alleppey cardamom, Tellicherry pepper, Guntur chillies, and grains.',
    canonical: `${SITE_BASE_URL}/products/agro-products/`,
    keywords: [
      'Indian Agro Products Exporter',
      'Indian Spices Exporter',
      'Turmeric Exporter from India',
      'Cardamom Exporter from India',
      'Indian Agricultural Commodities Supplier',
    ],
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    robots: 'index, follow',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_BASE_URL}/` },
      { name: 'Products', item: `${SITE_BASE_URL}/products/` },
      { name: 'Agro Products', item: `${SITE_BASE_URL}/products/agro-products/` },
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Indian Agricultural Commodities & Spices',
      description: 'Export agricultural commodities and spices sourced from Tamil Nadu, Kerala, and Indian growing regions.',
      numberOfItems: 7,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Salem Turmeric (Erode & Salem)',
          url: `${SITE_BASE_URL}/products/agro-products/turmeric/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Alleppey Green Cardamom',
          url: `${SITE_BASE_URL}/products/agro-products/green-cardamom/`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Malabar Black Pepper',
          url: `${SITE_BASE_URL}/products/agro-products/black-pepper/`,
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Unjha Cumin Seeds',
          url: `${SITE_BASE_URL}/products/agro-products/cumin-seeds/`,
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Guntur & Byadgi Red Chillies',
          url: `${SITE_BASE_URL}/products/agro-products/dried-red-chillies/`,
        },
        {
          '@type': 'ListItem',
          position: 6,
          name: 'Tamil Nadu Moringa Leaf Powder',
          url: `${SITE_BASE_URL}/products/agro-products/moringa-leaf-powder/`,
        },
        {
          '@type': 'ListItem',
          position: 7,
          name: 'Rice & Specialty Grains (Basmati & Regional Varieties)',
          url: `${SITE_BASE_URL}/products/agro-products/rice-basmati-non-basmati/`,
        },
      ],
    },
  },

  turmeric: {
    title: 'Salem Turmeric Fingers Exporter India | High Curcumin Bulk Export | AURA',
    description: 'Export-grade Salem double-polished turmeric fingers with 3.5%–4.5% curcumin content. Direct origin sourcing from Tamil Nadu with certified lab parameters.',
    canonical: `${SITE_BASE_URL}/products/agro-products/turmeric/`,
    keywords: [
      'Turmeric Exporter from India',
      'Salem Turmeric Exporter',
      'Indian Turmeric Fingers Wholesale',
      'High Curcumin Turmeric India',
    ],
    ogType: 'website',
    ogImage: `${SITE_BASE_URL}/images/agro_turmeric_fingers_showcase.jpg`,
    robots: 'index, follow',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_BASE_URL}/` },
      { name: 'Products', item: `${SITE_BASE_URL}/products/` },
      { name: 'Agro Products', item: `${SITE_BASE_URL}/products/agro-products/` },
      { name: 'Salem Turmeric', item: `${SITE_BASE_URL}/products/agro-products/turmeric/` },
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ItemPage',
      '@id': `${SITE_BASE_URL}/products/agro-products/turmeric/#webpage`,
      url: `${SITE_BASE_URL}/products/agro-products/turmeric/`,
      name: 'Salem Turmeric (Whole Fingers & Powder) — Institutional B2B Export',
      description: 'Export-grade Salem turmeric whole fingers and cold-milled powder sourced from Erode and Salem, Tamil Nadu, India. Sourced for international B2B wholesale buyers via Request for Quotation (RFQ).',
      image: `${SITE_BASE_URL}/images/agro_turmeric_fingers_showcase.jpg`,
      isPartOf: {
        '@id': `${SITE_BASE_URL}/#website`,
      },
      inLanguage: 'en-US',
      mainEntity: {
        '@type': 'Thing',
        name: 'Salem Turmeric (Curcuma Longa)',
        description: 'Export-grade Salem turmeric whole fingers and cold-milled powder with 3.5%–4.5% curcumin content.',
        identifier: 'AURA-AGRO-TURMERIC-001',
      },
    },
  },

  fashionLifestyle: {
    title: 'Indian Fashion & Lifestyle Exporter | Artisanal Jewellery & Wellness | AURA',
    description: 'B2B export of Indian artisanal jewellery, temple jewelry, Kundan, contemporary CZ, and wellness products crafted for global luxury markets.',
    canonical: `${SITE_BASE_URL}/products/fashion-lifestyle/`,
    keywords: [
      'Indian Fashion Jewellery Exporter',
      'South Indian Temple Jewellery Wholesale',
      'Indian Kundan Jewellery Supplier',
      'Indian Artisanal Jewellery Export',
    ],
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    robots: 'index, follow',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_BASE_URL}/` },
      { name: 'Products', item: `${SITE_BASE_URL}/products/` },
      { name: 'Fashion & Lifestyle', item: `${SITE_BASE_URL}/products/fashion-lifestyle/` },
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Indian Artisanal Craft & Fashion Jewellery',
      description: 'Wholesale Indian craft and fashion jewellery curated for international retail and boutique buyers.',
      numberOfItems: 3,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'South Indian Temple & Heritage Jewellery',
          url: `${SITE_BASE_URL}/products/fashion-lifestyle/traditional-temple-necklace-set/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Jadau Kundan & Meenakari Bridal Sets',
          url: `${SITE_BASE_URL}/products/fashion-lifestyle/kundan-choker-collection/`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Contemporary CZ Fashion Jewellery',
          url: `${SITE_BASE_URL}/products/fashion-lifestyle/contemporary-statement-necklace/`,
        },
      ],
    },
  },

  jewelry: {
    title: 'Indian Fashion & Lifestyle Exporter | Artisanal Jewellery & Wellness | AURA',
    description: 'B2B export of Indian artisanal jewellery, temple jewelry, Kundan, contemporary CZ, and wellness products crafted for global luxury markets.',
    canonical: `${SITE_BASE_URL}/products/fashion-lifestyle/`,
    keywords: [
      'Indian Fashion Jewellery Exporter',
      'South Indian Temple Jewellery Wholesale',
      'Indian Kundan Jewellery Supplier',
    ],
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    robots: 'index, follow',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_BASE_URL}/` },
      { name: 'Products', item: `${SITE_BASE_URL}/products/` },
      { name: 'Fashion & Lifestyle', item: `${SITE_BASE_URL}/products/fashion-lifestyle/` },
    ],
  },

  apparelTextiles: {
    title: 'Indian Textile Exporter & Apparel Sourcing | Cotton, Silk & Handloom | AURA',
    description: 'Verified Indian textile exporter and apparel manufacturer sourcing partner. Organic cotton, heritage silk, regional handlooms, and custom private-label garment export.',
    canonical: `${SITE_BASE_URL}/products/apparel-textiles/`,
    keywords: [
      'Indian Textile Exporter',
      'Indian Apparel Manufacturer and Exporter',
      'Cotton Textile Sourcing India',
      'Indian Garment Sourcing Company',
    ],
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    robots: 'index, follow',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_BASE_URL}/` },
      { name: 'Products', item: `${SITE_BASE_URL}/products/` },
      { name: 'Apparel & Textiles', item: `${SITE_BASE_URL}/products/apparel-textiles/` },
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Indian Heritage Textiles & Handloom Fabrics',
      description: 'Handloom fabrics, silk sarees, and cotton yardage exported from Indian weaving clusters.',
      numberOfItems: 3,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Kanchipuram Silk Sarees',
          url: `${SITE_BASE_URL}/products/apparel-textiles/kanjivaram-silk-saree/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Regional Handloom Running Fabrics & Artisan Yardage',
          url: `${SITE_BASE_URL}/products/apparel-textiles/pochampally-ikat-fabric/`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Cotton & Handloom Linen Fabrics',
          url: `${SITE_BASE_URL}/products/apparel-textiles/woven-cotton-linen-fabrics/`,
        },
      ],
    },
  },

  textiles: {
    title: 'Indian Textile Exporter & Apparel Sourcing | Cotton, Silk & Handloom | AURA',
    description: 'Verified Indian textile exporter and apparel manufacturer sourcing partner. Organic cotton, heritage silk, regional handlooms, and custom private-label garment export.',
    canonical: `${SITE_BASE_URL}/products/apparel-textiles/`,
    keywords: [
      'Indian Textile Exporter',
      'Indian Handloom Fabric Supplier',
      'Cotton Fabric Supplier India',
    ],
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    robots: 'index, follow',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_BASE_URL}/` },
      { name: 'Products', item: `${SITE_BASE_URL}/products/` },
      { name: 'Apparel & Textiles', item: `${SITE_BASE_URL}/products/apparel-textiles/` },
    ],
  },

  kanjivaramSaree: {
    title: 'Kanchipuram Silk Saree Exporter | Handloom Pure Silk Sarees India | AURA',
    description: 'Direct exporter of traditional Kanchipuram silk sarees with three-ply Murukku Pattu yarn, Korvai contrast borders, and heritage motifs sourced from Kanchipuram, Tamil Nadu.',
    canonical: `${SITE_BASE_URL}/products/apparel-textiles/kanjivaram-silk-saree/`,
    keywords: [
      'Kanchipuram Silk Saree Exporter',
      'Kanjivaram Saree Wholesale India',
      'Silk Saree Exporter Tamil Nadu',
      'Bridal Silk Sarees Wholesale',
      'Korvai Silk Saree Supplier',
    ],
    ogType: 'website',
    ogImage: `${SITE_BASE_URL}/images/saree_kanjivaram_hero.jpg`,
    robots: 'index, follow',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_BASE_URL}/` },
      { name: 'Products', item: `${SITE_BASE_URL}/products/` },
      { name: 'Apparel & Textiles', item: `${SITE_BASE_URL}/products/apparel-textiles/` },
      { name: 'Kanchipuram Silk Saree', item: `${SITE_BASE_URL}/products/apparel-textiles/kanjivaram-silk-saree/` },
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ItemPage',
      '@id': `${SITE_BASE_URL}/products/apparel-textiles/kanjivaram-silk-saree/#webpage`,
      url: `${SITE_BASE_URL}/products/apparel-textiles/kanjivaram-silk-saree/`,
      name: 'Kanchipuram Silk Saree — Handloom Pure Silk Export',
      description: 'Handloom silk saree featuring Korvai interlock, contrast borders, and traditional temple motifs from Kanchipuram, Tamil Nadu. Wholesale supply for international boutiques and luxury retailers.',
      image: `${SITE_BASE_URL}/images/saree_kanjivaram_hero.jpg`,
      isPartOf: {
        '@id': `${SITE_BASE_URL}/#website`,
      },
      inLanguage: 'en-US',
      mainEntity: {
        '@type': 'Thing',
        name: 'Kanchipuram Silk Saree (Pure Mulberry Silk)',
        description: 'Traditional Kanchipuram pure silk saree with Korvai contrast borders and pure zari motifs.',
        identifier: 'AURA-TEXTILE-KANJI-001',
      },
    },
  },

  quality: {
    title: 'Export Quality Assurance & Laboratory Testing | AURA Enterprise Exports',
    description: 'Stringent export quality verification: NABL-accredited laboratory testing, phytosanitary compliance, multi-tier lot sampling, and container stuffing inspections.',
    canonical: `${SITE_BASE_URL}/quality-compliance/`,
    keywords: [
      'Export Quality Assurance',
      'Indian Export Quality Testing',
      'Pre-Shipment Inspection India',
      'Export Standards India',
    ],
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    robots: 'index, follow',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_BASE_URL}/` },
      { name: 'Quality & Compliance', item: `${SITE_BASE_URL}/quality-compliance/` },
    ],
  },

  exportProcess: {
    title: 'Export Process & Procurement Workflow | AURA Enterprise Exports',
    description: 'Structured international export procedure: from RFQ and sample analysis to LC terms, freight forwarding, customs clearance, and port-to-port logistics.',
    canonical: `${SITE_BASE_URL}/export-process/`,
    keywords: [
      'Export Process India',
      'B2B Procurement Workflow',
      'International Trade Logistics',
      'Chennai Port Container Shipping',
    ],
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    robots: 'index, follow',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_BASE_URL}/` },
      { name: 'Export Process', item: `${SITE_BASE_URL}/export-process/` },
    ],
  },

  faqs: {
    title: 'B2B Procurement FAQs | Indian Export Trade Desk | AURA Enterprise Exports',
    description: 'Frequently asked questions for international importers: minimum order quantities (MOQ), sample dispatch policies, export documentation, payment terms, and logistics coordination.',
    canonical: `${SITE_BASE_URL}/faqs/`,
    keywords: [
      'Indian Exporter FAQs',
      'Importing from India FAQ',
      'Export MOQ India',
      'Letter of Credit Indian Trade',
    ],
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    robots: 'index, follow',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_BASE_URL}/` },
      { name: 'FAQs', item: `${SITE_BASE_URL}/faqs/` },
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What products does AURA Enterprise Exports export from India?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AURA Enterprise Exports specializes in three core verticals: Agricultural commodities and spices (Salem turmeric, Alleppey green cardamom, Malabar black pepper, cumin seeds, red chillies, moringa), handcrafted fashion jewellery (South Indian temple jewellery, Jadau Kundan, Meenakari), and heritage textiles (Kanchipuram silk sarees, handloom fabrics, cotton and linen).',
          },
        },
        {
          '@type': 'Question',
          name: 'Where is AURA Enterprise Exports located and which ports do you ship through?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our corporate office and trade desk are located in Chennai, Tamil Nadu, India. Maritime shipments originate primarily from Chennai Seaport (INMAA) and Tuticorin (INTUT), with air freight dispatched via Chennai International Airport (MAA).',
          },
        },
        {
          '@type': 'Question',
          name: 'Can international buyers request samples before placing volume orders?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We provide sample evaluation options for agricultural commodities, curated sample selections for fashion jewellery, and fabric swatches for textile collections via international courier services.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does AURA handle export documentation and quality verification?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Shipments are processed with destination-specific export documentation, including Certificate of Origin, commercial invoices, packing lists, and pre-shipment inspection documentation as agreed in commercial procurement contracts.',
          },
        },
      ],
    },
  },

  contact: {
    title: 'Contact AURA Enterprise Exports Desk | Chennai Export Office & RFQ Support',
    description: 'Connect directly with AURA Enterprise Exports trade desk in Chennai, Tamil Nadu, India. WhatsApp support (+91 9361990229), direct phone calls, corporate email, or commercial quotation requests.',
    canonical: `${SITE_BASE_URL}/contact/`,
    keywords: [
      'Contact Indian Exporter',
      'Chennai Trade Desk',
      'Indian Export Consultation',
      'AURA Enterprise Exports Contact',
    ],
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    robots: 'index, follow',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_BASE_URL}/` },
      { name: 'Contact Us', item: `${SITE_BASE_URL}/contact/` },
    ],
  },

  requestQuote: {
    title: 'Request B2B Export Quotation | Wholesale Sourcing Intake | AURA Enterprise Exports',
    description: 'Submit an initial B2B export Request for Quote (RFQ) for Indian agricultural commodities, handcrafted jewellery, or handloom fabrics. Receive an itemised commercial quotation based on your target specifications.',
    canonical: `${SITE_BASE_URL}/request-quote/`,
    keywords: [
      'Request Quote Indian Exporter',
      'B2B Export Quotation India',
      'FOB Price India Sourcing',
    ],
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    robots: 'index, follow',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_BASE_URL}/` },
      { name: 'Request Quotation', item: `${SITE_BASE_URL}/request-quote/` },
    ],
  },

  termsOfTrade: {
    title: 'Terms of Trade & Commercial Export Policy | AURA Enterprise Exports',
    description: 'Commercial trading terms, Incoterms 2020 definitions (FOB, CIF, CFR), payment structures, quality inspection parameters, and shipment fulfillment policies for international buyers.',
    canonical: `${SITE_BASE_URL}/terms-of-trade/`,
    keywords: [
      'Terms of Trade',
      'Export IncoTerms 2020',
      'Commercial Export Policy',
      'International Sourcing Terms',
    ],
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    robots: 'index, follow',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_BASE_URL}/` },
      { name: 'Terms of Trade', item: `${SITE_BASE_URL}/terms-of-trade/` },
    ],
  },

  terms: {
    title: 'Terms of Service & Website Usage | AURA Enterprise Exports',
    description: 'Legal terms of service and website usage conditions governing the AURA Enterprise Exports B2B export portal.',
    canonical: `${SITE_BASE_URL}/terms/`,
    keywords: [
      'Terms of Service',
      'Website Terms',
      'AURA Export Platform Governance',
    ],
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    robots: 'index, follow',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_BASE_URL}/` },
      { name: 'Terms of Use', item: `${SITE_BASE_URL}/terms/` },
    ],
  },

  privacy: {
    title: 'Privacy Policy & Data Protection | AURA Enterprise Exports',
    description: 'Privacy policy detailing how AURA Enterprise Exports processes and protects corporate enquiry information and user data in accordance with international data protection standards.',
    canonical: `${SITE_BASE_URL}/privacy/`,
    keywords: [
      'Privacy Policy',
      'Data Protection',
      'Client Confidentiality',
    ],
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    robots: 'index, follow',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_BASE_URL}/` },
      { name: 'Privacy Policy', item: `${SITE_BASE_URL}/privacy/` },
    ],
  },

  card: {
    title: 'Vikram — Managing Director | AURA Enterprise Exports Digital Business Card',
    description: 'Official executive digital business card for Vikram, Managing Director at AURA Enterprise Exports. Save contact details directly to your mobile phone or call our trade desk.',
    canonical: `${SITE_BASE_URL}/card/`,
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    robots: 'noindex, follow',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_BASE_URL}/` },
      { name: 'Digital Business Card', item: `${SITE_BASE_URL}/card/` },
    ],
  },

  notFound: {
    title: '404 — Page Not Found | AURA Enterprise Exports',
    description: 'The requested page could not be located in our international trade directory.',
    canonical: `${SITE_BASE_URL}/404/`,
    robots: 'noindex, nofollow',
  },
};
