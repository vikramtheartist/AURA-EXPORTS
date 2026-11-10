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
export const BRAND_NAME = 'Aura Exports';

/**
 * Enterprise Organization / Corporation Schema.
 * Uses verified business details without invented coordinates, fabricated claims, or assumptions.
 */
export const corporationJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Corporation', 'Organization'],
  name: BRAND_NAME,
  alternateName: ['Aura Exports', 'AURA EXPORTS'],
  url: SITE_BASE_URL,
  logo: `${SITE_BASE_URL}/favicon.svg`,
  image: DEFAULT_OG_IMAGE,
  description: 'Chennai-based Indian export company and wholesale sourcing partner connecting international B2B buyers with agricultural commodities, South Indian spices, handcrafted artisanal jewellery, and regional handloom textiles.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'No 11/1A, VOC Street, Pattukottai Muthu Kumaraswamy Street, Baby Nagar, Velachery',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    postalCode: '600042',
    addressCountry: 'IN',
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
    'Indian Linen Fabric Exporter',
  ],
  areaServed: ['US', 'CA', 'GB', 'AE', 'SA', 'DE', 'FR', 'AU', 'SG', 'MY', 'JP'],
};

/**
 * WebSite Schema without retired SearchAction
 */
export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: BRAND_NAME,
  url: SITE_BASE_URL,
};

/**
 * Global Page SEO Configurations
 */
export const seoConfigs: Record<string, PageSEOConfig> = {
  home: {
    title: 'Indian Export Company | South India Wholesale Exporters & Sourcing Partner | Aura Exports',
    description: 'Aura Exports is an export and sourcing partner based in Chennai, Tamil Nadu, India. Sourcing Indian agricultural commodities, South Indian spices, handcrafted fashion jewellery, and regional handloom textiles for global B2B buyers.',
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
    title: 'About Aura Exports | Chennai-Based Indian Export Company & Sourcing Mission',
    description: 'Learn about Aura Exports, an international sourcing and export enterprise operating from Chennai, Tamil Nadu. Connecting international buyers with Indian agricultural, jewellery, and textile products.',
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
      { name: 'About Aura Exports', item: `${SITE_BASE_URL}/about` },
    ],
    jsonLd: corporationJsonLd,
  },

  products: {
    title: 'Indian Products Catalogue | Agriculture, Jewellery & Textiles Wholesale Export | Aura Exports',
    description: 'Explore Aura Exports\' three export verticals: Indian agricultural commodities and spices, handcrafted artisanal jewellery, and regional handloom textiles for global B2B procurement.',
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
    title: 'Indian Agricultural Exporters & Spices Wholesale | Tamil Nadu & Kerala Origins | Aura Exports',
    description: 'South India agricultural export and sourcing partner based in Chennai. Direct wholesale sourcing of Salem turmeric fingers, Alleppey green cardamom, Malabar black pepper, cumin seeds, chillies and moringa powder.',
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
      description: 'Export agricultural commodities and spices sourced from Tamil Nadu, Kerala, and Indian growing regions.',
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
          url: `${SITE_BASE_URL}/products/agro-products/green-cardamom`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Malabar Black Pepper',
          url: `${SITE_BASE_URL}/products/agro-products/black-pepper`,
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Unjha Cumin Seeds',
          url: `${SITE_BASE_URL}/products/agro-products/cumin-seeds`,
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Guntur & Byadgi Red Chillies',
          url: `${SITE_BASE_URL}/products/agro-products/dried-red-chillies`,
        },
        {
          '@type': 'ListItem',
          position: 6,
          name: 'Tamil Nadu Moringa Leaf Powder',
          url: `${SITE_BASE_URL}/products/agro-products/moringa-leaf-powder`,
        },
        {
          '@type': 'ListItem',
          position: 7,
          name: 'Rice & Specialty Grains (Basmati & Regional Varieties)',
          url: `${SITE_BASE_URL}/products/agro-products/rice-basmati-non-basmati`,
        },
      ],
    },
  },

  turmeric: {
    title: 'Salem Turmeric Exporter India | Erode Turmeric Powder & Fingers Wholesale | Aura Exports',
    description: 'Indian turmeric exporter sourcing Salem double-polished fingers, unpolished fingers, and cold-milled powder from Erode and Salem, Tamil Nadu growing regions. Product specifications and quotations available upon enquiry.',
    canonical: `${SITE_BASE_URL}/products/agro-products/turmeric`,
    keywords: [
      'Turmeric Exporter India',
      'Salem Turmeric Exporter',
      'Erode Turmeric Supplier',
      'Indian Turmeric Fingers Wholesale',
      'Turmeric Powder India',
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
      description: 'Export-grade Salem turmeric whole fingers and cold-milled powder sourced from Erode and Salem, Tamil Nadu, India. Available in customized packaging.',
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
    },
  },

  fashionLifestyle: {
    title: 'Indian Fashion Jewellery Exporter | South Indian Temple & Kundan Jewellery Wholesale | Aura Exports',
    description: 'Indian fashion jewellery exporter based in Chennai. Wholesale sourcing of handcrafted South Indian temple jewellery, Jaipur Jadau Kundan and Meenakari bridal suites, and contemporary CZ fashion jewellery.',
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
      description: 'Wholesale Indian craft and fashion jewellery curated for international retail and boutique buyers.',
      numberOfItems: 3,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'South Indian Temple & Heritage Jewellery',
          url: `${SITE_BASE_URL}/products/fashion-lifestyle/traditional-temple-necklace-set`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Jadau Kundan & Meenakari Bridal Sets',
          url: `${SITE_BASE_URL}/products/fashion-lifestyle/kundan-choker-collection`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Contemporary CZ Fashion Jewellery',
          url: `${SITE_BASE_URL}/products/fashion-lifestyle/contemporary-statement-necklace`,
        },
      ],
    },
  },

  jewelry: {
    title: 'Indian Fashion Jewellery Exporter | South Indian Temple & Kundan Jewellery Wholesale | Aura Exports',
    description: 'Indian fashion jewellery exporter based in Chennai. Wholesale sourcing of handcrafted South Indian temple jewellery, Jaipur Jadau Kundan and Meenakari bridal suites, and contemporary CZ fashion jewellery.',
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
    title: 'Indian Textile Exporter | Kanchipuram Silk, Handloom Fabrics & Cotton | Aura Exports',
    description: 'Indian textile export company connecting global buyers with Kanchipuram silk sarees, regional handloom fabrics, cotton and linen yardage sourced from established Indian weaving clusters.',
    canonical: `${SITE_BASE_URL}/products/apparel-textiles`,
    keywords: [
      'Indian Textile Exporter',
      'Kanchipuram Silk Saree Exporter',
      'Indian Handloom Fabric Supplier',
      'Indian Cotton Fabric Exporter',
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
      name: 'Indian Heritage Textiles & Handloom Fabrics',
      description: 'Handloom fabrics, silk sarees, and cotton yardage exported from Indian weaving clusters.',
      numberOfItems: 3,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Kanchipuram Silk Sarees',
          url: `${SITE_BASE_URL}/products/apparel-textiles/kanjivaram-silk-saree`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Regional Handloom Running Fabrics & Artisan Yardage',
          url: `${SITE_BASE_URL}/products/apparel-textiles/pochampally-ikat-fabric`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Cotton & Handloom Linen Fabrics',
          url: `${SITE_BASE_URL}/products/apparel-textiles/woven-cotton-linen-fabrics`,
        },
      ],
    },
  },

  textiles: {
    title: 'Indian Textile Exporter | Kanchipuram Silk, Handloom Fabrics & Cotton | Aura Exports',
    description: 'Indian textile export company connecting global buyers with Kanchipuram silk sarees, regional handloom fabrics, cotton and linen yardage sourced from established Indian weaving clusters.',
    canonical: `${SITE_BASE_URL}/products/apparel-textiles`,
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
      { name: 'Products', item: `${SITE_BASE_URL}/products` },
      { name: 'Apparel & Textiles', item: `${SITE_BASE_URL}/products/apparel-textiles` },
    ],
  },

  kanjivaramSaree: {
    title: 'Kanchipuram Silk Saree Exporter | Handloom Pure Silk Sarees India | Aura Exports',
    description: 'Direct exporter of traditional Kanchipuram silk sarees with three-ply Murukku Pattu yarn, Korvai contrast borders, and heritage motifs sourced from Kanchipuram, Tamil Nadu.',
    canonical: `${SITE_BASE_URL}/products/apparel-textiles/kanjivaram-silk-saree`,
    keywords: [
      'Kanchipuram Silk Saree Exporter',
      'Kanjivaram Saree Wholesale India',
      'Silk Saree Exporter Tamil Nadu',
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
      name: 'Kanchipuram Silk Saree',
      image: `${SITE_BASE_URL}/og-image.png`,
      description: 'Handloom silk saree featuring Korvai interlock, contrast borders, and traditional temple motifs from Kanchipuram, Tamil Nadu.',
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
    },
  },

  quality: {
    title: 'Export Quality Assurance & Inspection | Aura Exports',
    description: 'Overview of Aura Exports\'s export quality assurance and pre-shipment inspection processes for agricultural commodities, fashion jewellery, and textiles.',
    canonical: `${SITE_BASE_URL}/quality-compliance`,
    keywords: [
      'Indian Export Quality Testing',
      'Export Quality Assurance',
      'Pre-Shipment Inspection India',
      'Export Standards India',
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
    title: 'Indian Export Execution & Logistics Process | Incoterms FOB & CIF | Aura Exports',
    description: 'Understand Aura Exports\'s 5-step international B2B export process: enquiry review, specification confirmation, commercial terms, dispatch coordination, and shipping documentation.',
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
    title: 'B2B Procurement FAQs | Indian Export Trade Desk | Aura Exports',
    description: 'Frequently asked questions for international importers: minimum order quantities (MOQ), sample dispatch policies, export documentation, payment terms, and logistics coordination.',
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
          name: 'What products does Aura Exports export from India?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Aura Exports specializes in three core verticals: Agricultural commodities and spices (Salem turmeric, Alleppey green cardamom, Malabar black pepper, cumin seeds, red chillies, moringa), handcrafted fashion jewellery (South Indian temple jewellery, Jadau Kundan, Meenakari), and heritage textiles (Kanchipuram silk sarees, handloom fabrics, cotton and linen).',
          },
        },
        {
          '@type': 'Question',
          name: 'Where is Aura Exports located and which ports do you ship through?',
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
    title: 'Contact Aura Exports Desk | Chennai Export Office & RFQ Support',
    description: 'Connect directly with Aura Exports officers in Chennai, Tamil Nadu, India. WhatsApp support (+91 9361990229), direct phone calls, corporate email, or commercial quotation requests.',
    canonical: `${SITE_BASE_URL}/contact`,
    keywords: [
      'Contact Indian Exporter',
      'Chennai Trade Desk',
      'Indian Export Consultation',
      'Aura Exports Contact',
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
    title: 'Request B2B Export Quotation | Wholesale Sourcing Intake | Aura Exports',
    description: 'Submit an initial B2B export Request for Quote (RFQ) for Indian agricultural commodities, handcrafted jewellery, or handloom fabrics. Receive an itemised commercial quotation based on your target specifications.',
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
    title: '404 — Page Not Found | Aura Exports',
    description: 'The requested page could not be located in our international trade directory.',
    canonical: `${SITE_BASE_URL}/404`,
    robots: 'noindex, nofollow',
  },
};
