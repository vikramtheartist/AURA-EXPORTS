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
export const LEGAL_ENTITY_NAME = 'AURA ENTERPRISE EXPORTS (OPC) PRIVATE LIMITED';
export const BRAND_NAME = 'AURA Global Trade';

/**
 * Enterprise Corporation Schema
 */
export const corporationJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Corporation', 'Organization'],
  name: BRAND_NAME,
  legalName: LEGAL_ENTITY_NAME,
  alternateName: ['Aura Global Trade', 'Aura Exports', 'Aura Enterprise Exports'],
  url: SITE_BASE_URL,
  logo: `${SITE_BASE_URL}/favicon.svg`,
  image: DEFAULT_OG_IMAGE,
  description: 'Premier Chennai-based Indian export company and wholesale sourcing partner connecting international B2B buyers with vetted agricultural commodities, South Indian spices, handcrafted artisanal jewellery, and heritage handloom textiles.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'No 11/1A, VOC Street, Pattukottai Muthu Kumaraswamy Street, Baby Nagar, Velachery',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    postalCode: '600042',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '12.9815',
    longitude: '80.2180',
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
    {
      '@type': 'ContactPoint',
      telephone: '+919361990229',
      contactType: 'customer support',
      contactOption: 'TollFree',
      availableLanguage: ['English'],
    },
  ],
  knowsAbout: [
    'Indian Export Company',
    'South India Exporters',
    'Chennai Export Company',
    'Tamil Nadu Exporters',
    'India Wholesale Suppliers',
    'Indian Agricultural Exporters',
    'Turmeric Exporter India',
    'Salem Turmeric Exporter',
    'Erode Turmeric Supplier',
    'Indian Turmeric Fingers Wholesale',
    'Kerala Cardamom Exporter',
    'Malabar Black Pepper Supplier',
    'Indian Cumin Seeds Exporter',
    'Indian Red Chilli Exporter',
    'Moringa Powder Exporter India',
    'Indian Fashion Jewellery Exporter',
    'South Indian Temple Jewellery Wholesale',
    'Indian Kundan Jewellery Supplier',
    'Meenakari Jewellery Exporter',
    'Indian CZ Fashion Jewellery Wholesale',
    'Indian Textile Exporter',
    'Kanchipuram Silk Saree Exporter',
    'Indian Handloom Fabric Supplier',
    'Indian Cotton Fabric Exporter',
    'Organic Cotton Fabric Supplier India',
    'Indian Linen Fabric Exporter',
  ],
  areaServed: ['US', 'CA', 'GB', 'AE', 'SA', 'DE', 'FR', 'AU', 'SG', 'MY', 'JP'],
  sameAs: [
    'https://www.linkedin.com/company/aura-global-trade',
    'https://twitter.com/auraglobaltrade',
  ],
};

/**
 * WebSite Schema with Sitelinks Search
 */
export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: BRAND_NAME,
  alternateName: LEGAL_ENTITY_NAME,
  url: SITE_BASE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_BASE_URL}/products?search={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

/**
 * Global Page SEO Configurations
 */
export const seoConfigs: Record<string, PageSEOConfig> = {
  home: {
    title: 'Indian Export Company | South India Wholesale Exporters & Sourcing Partner | AURA Global Trade',
    description: 'AURA Global Trade (OPC) Pvt Ltd is a premier Chennai-based Indian export company. Direct wholesale sourcing of certified agricultural commodities, Salem turmeric, Alleppey cardamom, artisanal fashion jewellery, and heritage handloom textiles.',
    canonical: `${SITE_BASE_URL}/`,
    keywords: [
      'Indian Export Company',
      'South India Exporters',
      'Chennai Export Company',
      'Tamil Nadu Exporters',
      'India Wholesale Suppliers',
      'Indian Sourcing Company',
      'Indian Agricultural Exporters',
    ],
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    robots: 'index, follow',
    jsonLd: [corporationJsonLd, websiteJsonLd],
  },

  about: {
    title: 'About AURA Global Trade | Chennai-Based Indian Export Company & Sourcing Mission',
    description: 'Discover AURA Global Trade, an international sourcing and export enterprise operating from Chennai, Tamil Nadu. Connecting international buyers with Indian agricultural, jewellery, and textile heritage.',
    canonical: `${SITE_BASE_URL}/about`,
    keywords: [
      'Chennai Export Company',
      'South India Exporters',
      'Indian Sourcing Partner',
      'Tamil Nadu Export Company',
    ],
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    robots: 'index, follow',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_BASE_URL}/` },
      { name: 'About AURA', item: `${SITE_BASE_URL}/about` },
    ],
    jsonLd: corporationJsonLd,
  },

  products: {
    title: 'Indian Products Catalogue | Agriculture, Jewellery & Textiles Wholesale Export | AURA',
    description: 'Explore AURA Global Trade\'s three export verticals: Indian agricultural commodities and spices, handcrafted artisanal jewellery, and heritage handloom textiles for global B2B procurement.',
    canonical: `${SITE_BASE_URL}/products`,
    keywords: [
      'Indian Wholesale Suppliers',
      'Indian Export Products',
      'South India Exporters Catalogue',
      'B2B Indian Sourcing',
    ],
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    robots: 'index, follow',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_BASE_URL}/` },
      { name: 'Products', item: `${SITE_BASE_URL}/products` },
    ],
  },

  agroProducts: {
    title: 'Indian Agricultural Exporters & Spices Wholesale | Tamil Nadu & Kerala Origins | AURA Global Trade',
    description: 'Leading South India agricultural export company in Chennai. Direct wholesale sourcing of Salem turmeric fingers, Alleppey green cardamom, Malabar black pepper, cumin seeds, chillies & moringa powder with lab-verified COA.',
    canonical: `${SITE_BASE_URL}/products/agro-products`,
    keywords: [
      'Indian Agricultural Exporters',
      'Tamil Nadu Agricultural Exporters',
      'Indian Spice Exporters',
      'Turmeric Exporter India',
      'Kerala Cardamom Exporter',
      'Malabar Black Pepper Supplier',
      'Indian Cumin Seeds Exporter',
      'Indian Red Chilli Exporter',
      'Moringa Powder Exporter India',
    ],
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    robots: 'index, follow',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_BASE_URL}/` },
      { name: 'Products', item: `${SITE_BASE_URL}/products` },
      { name: 'Agro Products', item: `${SITE_BASE_URL}/products/agro-products` },
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Indian Agricultural Commodities & Spices',
      description: 'Export-grade Indian agricultural commodities and spices sourced from Tamil Nadu, Kerala, and pan-India agricultural clusters.',
      numberOfItems: 6,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Salem Turmeric (Erode & Salem)',
          url: `${SITE_BASE_URL}/products/agro-products/turmeric`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Alleppey Green Cardamom',
          url: `${SITE_BASE_URL}/products/agro-products`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Malabar Black Pepper',
          url: `${SITE_BASE_URL}/products/agro-products`,
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Unjha Cumin Seeds',
          url: `${SITE_BASE_URL}/products/agro-products`,
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Guntur & Byadgi Red Chillies',
          url: `${SITE_BASE_URL}/products/agro-products`,
        },
        {
          '@type': 'ListItem',
          position: 6,
          name: 'Tamil Nadu Organic Moringa Leaf Powder',
          url: `${SITE_BASE_URL}/products/agro-products`,
        },
      ],
    },
  },

  turmeric: {
    title: 'Salem Turmeric Exporter India | Erode Turmeric Powder & Fingers Wholesale | AURA Global Trade',
    description: 'Direct Indian turmeric exporter sourcing Salem double-polished fingers, unpolished fingers, and high-curcumin (3.5%+) cold-milled powder from Erode and Salem farmer societies. Complete HPLC COA and phytosanitary clearance.',
    canonical: `${SITE_BASE_URL}/products/agro-products/turmeric`,
    keywords: [
      'Turmeric Exporter India',
      'Salem Turmeric Exporter',
      'Erode Turmeric Supplier',
      'Indian Turmeric Fingers Wholesale',
      'Curcumin Turmeric Powder India',
    ],
    ogType: 'product',
    ogImage: DEFAULT_OG_IMAGE,
    robots: 'index, follow',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_BASE_URL}/` },
      { name: 'Products', item: `${SITE_BASE_URL}/products` },
      { name: 'Agro Products', item: `${SITE_BASE_URL}/products/agro-products` },
      { name: 'Salem Turmeric', item: `${SITE_BASE_URL}/products/agro-products/turmeric` },
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Salem Turmeric (Whole Fingers & Powder)',
      image: `${SITE_BASE_URL}/og-image.png`,
      description: 'Export-grade Salem turmeric whole fingers and cold-milled powder sourced directly from Erode and Salem, Tamil Nadu, India. Guaranteed minimum 3.0% - 4.5% curcumin content.',
      sku: 'AURA-AGRO-TURMERIC-001',
      category: 'Agricultural Commodities / Spices',
      brand: {
        '@type': 'Brand',
        name: BRAND_NAME,
      },
      countryOfOrigin: {
        '@type': 'Country',
        name: 'India',
      },
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'USD',
        price: 'Contact for B2B Quotation',
        availability: 'https://schema.org/InStock',
        itemCondition: 'https://schema.org/NewCondition',
        seller: {
          '@type': 'Organization',
          name: LEGAL_ENTITY_NAME,
        },
      },
    },
  },

  fashionLifestyle: {
    title: 'Indian Fashion Jewellery Exporter | South Indian Temple & Kundan Jewellery Wholesale | AURA Global Trade',
    description: 'Premier Indian fashion jewellery exporter based in Chennai. Wholesale sourcing of handcrafted South Indian temple jewellery, Jaipur Jadau Kundan and Meenakari bridal suites, and minimalist CZ jewellery. Lead/cadmium compliant.',
    canonical: `${SITE_BASE_URL}/products/fashion-lifestyle`,
    keywords: [
      'Indian Fashion Jewellery Exporter',
      'South Indian Temple Jewellery Wholesale',
      'Indian Kundan Jewellery Supplier',
      'Meenakari Jewellery Exporter',
      'Indian CZ Fashion Jewellery Wholesale',
      'Indian Artisan Jewellery Export',
    ],
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    robots: 'index, follow',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_BASE_URL}/` },
      { name: 'Products', item: `${SITE_BASE_URL}/products` },
      { name: 'Fashion & Lifestyle', item: `${SITE_BASE_URL}/products/fashion-lifestyle` },
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Indian Artisanal Craft & Fashion Jewellery',
      description: 'Wholesale Indian artisanal craft and fashion jewellery curated for international retail and boutique buyers.',
      numberOfItems: 3,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'South Indian Temple & Heritage Jewellery',
          url: `${SITE_BASE_URL}/products/fashion-lifestyle`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Royal Jadau Kundan & Meenakari Bridal Sets',
          url: `${SITE_BASE_URL}/products/fashion-lifestyle`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Contemporary Minimalist & CZ Fashion Jewellery',
          url: `${SITE_BASE_URL}/products/fashion-lifestyle`,
        },
      ],
    },
  },

  jewelry: {
    title: 'Indian Fashion Jewellery Exporter | South Indian Temple & Kundan Jewellery Wholesale | AURA Global Trade',
    description: 'Premier Indian fashion jewellery exporter based in Chennai. Wholesale sourcing of handcrafted South Indian temple jewellery, Jaipur Jadau Kundan and Meenakari bridal suites, and minimalist CZ jewellery.',
    canonical: `${SITE_BASE_URL}/products/fashion-lifestyle`,
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
      { name: 'Products', item: `${SITE_BASE_URL}/products` },
      { name: 'Fashion & Lifestyle', item: `${SITE_BASE_URL}/products/fashion-lifestyle` },
    ],
  },

  apparelTextiles: {
    title: 'Indian Textile Exporter | Kanchipuram Silk, Handloom Fabrics & Organic Cotton | AURA Global Trade',
    description: 'Leading Indian textile export company connecting global buyers with authentic Kanchipuram pure silk sarees, Pochampally Ikat, Chanderi yardage, and GOTS-certified organic cotton & linen fabrics. Handloom artisan provenance.',
    canonical: `${SITE_BASE_URL}/products/apparel-textiles`,
    keywords: [
      'Indian Textile Exporter',
      'Kanchipuram Silk Saree Exporter',
      'Indian Handloom Fabric Supplier',
      'Indian Cotton Fabric Exporter',
      'Organic Cotton Fabric Supplier India',
      'Indian Linen Fabric Exporter',
    ],
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    robots: 'index, follow',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_BASE_URL}/` },
      { name: 'Products', item: `${SITE_BASE_URL}/products` },
      { name: 'Apparel & Textiles', item: `${SITE_BASE_URL}/products/apparel-textiles` },
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Indian Heritage Textiles, Handloom & Sustainable Fabrics',
      description: 'Handloom fabrics, pure mulberry silk sarees, and organic cotton yardage exported from certified Indian weaving clusters.',
      numberOfItems: 3,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Authentic Kanchipuram Pure Silk Sarees',
          url: `${SITE_BASE_URL}/products/apparel-textiles/kanjivaram-silk-saree`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Regional Handloom Running Fabrics & Artisan Yardage',
          url: `${SITE_BASE_URL}/products/apparel-textiles`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Organic Cotton & Handloom Linen Fabrics',
          url: `${SITE_BASE_URL}/products/apparel-textiles`,
        },
      ],
    },
  },

  textiles: {
    title: 'Indian Textile Exporter | Kanchipuram Silk, Handloom Fabrics & Organic Cotton | AURA Global Trade',
    description: 'Leading Indian textile export company connecting global buyers with authentic Kanchipuram pure silk sarees, Pochampally Ikat, Chanderi yardage, and GOTS-certified organic cotton & linen fabrics.',
    canonical: `${SITE_BASE_URL}/products/apparel-textiles`,
    keywords: [
      'Indian Textile Exporter',
      'Indian Handloom Fabric Supplier',
      'Organic Cotton Fabric Supplier India',
    ],
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    robots: 'index, follow',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_BASE_URL}/` },
      { name: 'Products', item: `${SITE_BASE_URL}/products` },
      { name: 'Apparel & Textiles', item: `${SITE_BASE_URL}/products/apparel-textiles` },
    ],
  },

  kanjivaramSaree: {
    title: 'Kanchipuram Silk Saree Exporter | Authentic Handloom Bridal Pure Silk Sarees India | AURA Global Trade',
    description: 'Direct exporter of authentic 100% pure mulberry silk Kanchipuram sarees with three-ply Murukku Pattu yarn, Korvai contrast borders, and tested zari. Sourced directly from certified master weaver societies in Kanchipuram, Tamil Nadu.',
    canonical: `${SITE_BASE_URL}/products/apparel-textiles/kanjivaram-silk-saree`,
    keywords: [
      'Kanchipuram Silk Saree Exporter',
      'Kanjivaram Saree Wholesale India',
      'Pure Silk Saree Exporter Tamil Nadu',
      'Bridal Silk Sarees Wholesale',
      'Korvai Silk Saree Supplier',
    ],
    ogType: 'product',
    ogImage: DEFAULT_OG_IMAGE,
    robots: 'index, follow',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_BASE_URL}/` },
      { name: 'Products', item: `${SITE_BASE_URL}/products` },
      { name: 'Apparel & Textiles', item: `${SITE_BASE_URL}/products/apparel-textiles` },
      { name: 'Kanchipuram Silk Saree', item: `${SITE_BASE_URL}/products/apparel-textiles/kanjivaram-silk-saree` },
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Authentic Kanchipuram Silk Saree',
      image: `${SITE_BASE_URL}/og-image.png`,
      description: 'Heritage handloom pure mulberry silk saree featuring three-shuttle Korvai interlock, Petni pallu join, and traditional temple gopuram motifs from Kanchipuram, Tamil Nadu.',
      sku: 'AURA-TEXTILE-KANJI-001',
      category: 'Apparel & Textiles / Silk Sarees',
      brand: {
        '@type': 'Brand',
        name: BRAND_NAME,
      },
      countryOfOrigin: {
        '@type': 'Country',
        name: 'India',
      },
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'USD',
        price: 'Contact for B2B Quotation',
        availability: 'https://schema.org/InStock',
        itemCondition: 'https://schema.org/NewCondition',
        seller: {
          '@type': 'Organization',
          name: LEGAL_ENTITY_NAME,
        },
      },
    },
  },

  quality: {
    title: 'Export Quality Assurance & Compliance | FSSAI, Spice Board & Lab Testing | AURA Global Trade',
    description: 'AURA Global Trade\'s multi-tier export quality assurance framework: NABL laboratory testing, HPLC curcumin assays, RoHS lead/cadmium compliance, cold-chain preservation, and pre-shipment SGS inspection protocols.',
    canonical: `${SITE_BASE_URL}/quality-compliance`,
    keywords: [
      'Indian Export Quality Testing',
      'FSSAI Certified Exporter',
      'Spice Board India Compliance',
      'Phytosanitary Certification India',
    ],
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    robots: 'index, follow',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_BASE_URL}/` },
      { name: 'Quality & Compliance', item: `${SITE_BASE_URL}/quality-compliance` },
    ],
  },

  exportProcess: {
    title: 'Indian Export Execution & Logistics Process | Incoterms FOB & CIF | AURA Global Trade',
    description: 'Understand AURA Global Trade\'s transparent 5-step international B2B export process: sample dispatch, quality verification, maritime container loading at Chennai port, and customs clearance.',
    canonical: `${SITE_BASE_URL}/export-process`,
    keywords: [
      'Indian Export Logistics',
      'Chennai Port Container Shipping',
      'FOB CIF Export India',
      'International B2B Procurement Process',
    ],
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    robots: 'index, follow',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_BASE_URL}/` },
      { name: 'Export Process', item: `${SITE_BASE_URL}/export-process` },
    ],
  },

  faqs: {
    title: 'B2B Procurement FAQs | Indian Export Trade Desk | AURA Global Trade',
    description: 'Frequently asked questions for international importers: minimum order quantities (MOQ), sample dispatch policies, lab testing certificates, payment terms (L/C, T/T), and export documentation.',
    canonical: `${SITE_BASE_URL}/faqs`,
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
      { name: 'FAQs', item: `${SITE_BASE_URL}/faqs` },
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What products does AURA Global Trade export from India?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AURA Global Trade specializes in three core verticals: Agricultural commodities and spices (Salem turmeric, Alleppey green cardamom, Malabar black pepper, cumin seeds, red chillies, moringa), handcrafted fashion jewellery (South Indian temple jewellery, Jadau Kundan, Meenakari), and heritage textiles (Kanchipuram pure silk sarees, handloom running fabrics, GOTS organic cotton).',
          },
        },
        {
          '@type': 'Question',
          name: 'Where is AURA Global Trade located and which ports do you ship through?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our corporate headquarters and trade desk are located in Chennai, Tamil Nadu, India. Maritime shipments originate primarily from Chennai Seaport (INMAA) and Tuticorin (INTUT), with air freight dispatched via Chennai International Airport (MAA).',
          },
        },
        {
          '@type': 'Question',
          name: 'Can international buyers request samples before placing volume orders?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We provide sample evaluation kits for agricultural commodities, curated sample boxes for fashion jewellery, and fabric swatches / lab dips for textile collections via DHL or FedEx international courier.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does AURA ensure product quality and international compliance?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Every shipment is verified against destination country regulations. We provide NABL/SGS Certificate of Analysis (COA), phytosanitary clearances, Certificates of Origin, and chemical compliance reports (RoHS/REACH lead/nickel limits for jewellery, azo-free dye reports for fabrics).',
          },
        },
      ],
    },
  },

  contact: {
    title: 'Contact AURA Global Trade Desk | Chennai Export Office & RFQ Support',
    description: 'Connect directly with AURA Global Trade officers in Chennai, Tamil Nadu, India. Immediate WhatsApp support (+91 9361990229), direct calls, corporate email, or commercial callback scheduling.',
    canonical: `${SITE_BASE_URL}/contact`,
    keywords: [
      'Contact Indian Exporter',
      'Chennai Trade Desk',
      'Indian Export Consultation',
      'AURA Global Trade Contact',
    ],
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    robots: 'index, follow',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_BASE_URL}/` },
      { name: 'Contact Us', item: `${SITE_BASE_URL}/contact` },
    ],
  },

  requestQuote: {
    title: 'Request B2B Export Quotation | Wholesale Sourcing Intake | AURA Global Trade',
    description: 'Submit an initial B2B export Request for Quote (RFQ) for Indian agricultural commodities, handcrafted jewellery, or handloom fabrics. Receive an itemised FOB/CIF commercial quotation within 24 hours.',
    canonical: `${SITE_BASE_URL}/request-quote`,
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
      { name: 'Request Quotation', item: `${SITE_BASE_URL}/request-quote` },
    ],
  },

  notFound: {
    title: '404 — Page Not Found | AURA Global Trade',
    description: 'The requested page could not be located in our international trade directory.',
    canonical: `${SITE_BASE_URL}/404`,
    robots: 'noindex, nofollow',
  },
};
