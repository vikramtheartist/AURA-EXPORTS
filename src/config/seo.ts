export interface PageSEOConfig {
  title: string;
  description: string;
  canonical: string;
  ogType?: 'website' | 'article' | 'product';
  ogImage?: string;
  robots?: string;
  breadcrumbs?: Array<{ name: string; item: string }>;
  jsonLd?: Record<string, any>;
}

export const SITE_BASE_URL = 'https://auraexport.co';
export const DEFAULT_OG_IMAGE = `${SITE_BASE_URL}/og-image.png`;
export const ORGANIZATION_NAME = 'AURA ENTERPRISE EXPORTS (OPC) PRIVATE LIMITED';

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: ORGANIZATION_NAME,
  alternateName: 'Aura Global Trade',
  url: SITE_BASE_URL,
  logo: `${SITE_BASE_URL}/favicon.svg`,
  description: 'Premium Indian Sourcing, Export & Import Enterprise connecting international institutional buyers with vetted agricultural ecosystems, contemporary fashion jewelry, and sustainable textiles.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'No 11/1A, VOC Street, Pattukottai Muthu Kumaraswamy Street, Baby Nagar, Velachery',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    postalCode: '600042',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'trade desk',
    email: 'contact@auraexport.co',
    telephone: '+919361990229',
    availableLanguage: ['English', 'Tamil'],
  },
  areaServed: ['Americas', 'Europe', 'Asia-Pacific', 'Middle East', 'Africa'],
};

export const seoConfigs: Record<string, PageSEOConfig> = {
  home: {
    title: 'Aura Global Trade | Premium Indian Sourcing & Export',
    description: 'AURA Enterprise Exports (OPC) Private Limited — A trusted global trade partner providing vetted Indian sourcing ecosystems, structured quality verification, and compliant export logistics.',
    canonical: `${SITE_BASE_URL}/`,
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    robots: 'index, follow',
    jsonLd: organizationJsonLd,
  },
  about: {
    title: 'About Aura Global Trade | Indian Sourcing & Export Philosophy',
    description: 'Learn about Aura Global Trade\'s enterprise mission, operating base in Chennai, and trade philosophy rooted in Yaadhum Oore, Yaavarum Kelir.',
    canonical: `${SITE_BASE_URL}/about`,
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    robots: 'index, follow',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_BASE_URL}/` },
      { name: 'About Aura', item: `${SITE_BASE_URL}/about` },
    ],
  },
  products: {
    title: 'Products | Premium Indian Sourcing for Global Procurement | AURA Global Trade',
    description: 'Explore AURA\'s sourcing categories across botanical ingredients, contemporary fashion jewelry, and sustainable textiles, structured for international procurement.',
    canonical: `${SITE_BASE_URL}/products`,
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    robots: 'index, follow',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_BASE_URL}/` },
      { name: 'Products', item: `${SITE_BASE_URL}/products` },
    ],
  },
  agroProducts: {
    title: 'Indian Agro Products Exporter | Spices, Chillies, Turmeric & Fresh Produce | AURA Global Trade',
    description: "India's agricultural richness connected to global markets. Sourcing wholesale Indian spices, turmeric rhizomes, dried chillies, fresh drumsticks, moringa and basmati rice.",
    canonical: `${SITE_BASE_URL}/products/agro-products`,
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    robots: 'index, follow',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_BASE_URL}/` },
      { name: 'Products', item: `${SITE_BASE_URL}/products` },
      { name: 'Agro Products', item: `${SITE_BASE_URL}/products/agro-products` },
    ],
  },
  spices: {
    title: 'Indian Agro Products & Spices Sourcing | AURA Global Trade',
    description: 'Sourced for purity and structured for global supply. Explore Indian spices, turmeric rhizomes, chillies, fresh produce and botanical streams.',
    canonical: `${SITE_BASE_URL}/products/agro-products`,
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    robots: 'index, follow',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_BASE_URL}/` },
      { name: 'Products', item: `${SITE_BASE_URL}/products` },
      { name: 'Agro Products', item: `${SITE_BASE_URL}/products/agro-products` },
    ],
  },
  turmeric: {
    title: 'Premium Indian Turmeric | AURA Global Trade',
    description: 'Sourced from Indian agricultural ecosystems in Erode, Tamil Nadu and structured for specification-led international procurement. Whole fingers, cold-milled powder, and extracts.',
    canonical: `${SITE_BASE_URL}/products/spices/turmeric`,
    ogType: 'product',
    ogImage: DEFAULT_OG_IMAGE,
    robots: 'index, follow',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_BASE_URL}/` },
      { name: 'Products', item: `${SITE_BASE_URL}/products` },
      { name: 'Spices & Botanical Ingredients', item: `${SITE_BASE_URL}/products/spices` },
      { name: 'Premium Indian Turmeric', item: `${SITE_BASE_URL}/products/spices/turmeric` },
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Premium Indian Turmeric',
      description: 'Export-grade turmeric whole fingers, cold-milled powder, and concentrated curcumin extracts sourced from Erode, Tamil Nadu, India.',
      category: 'Spices & Botanical Ingredients',
      countryOfOrigin: {
        '@type': 'Country',
        name: 'India',
      },
      brand: {
        '@type': 'Brand',
        name: 'AURA Global Trade',
      },
    },
  },
  fashionLifestyle: {
    title: 'Indian Fashion Jewelry & Handcrafted Accessories Export | AURA Global Trade',
    description: "Explore India's rich jewelry craftsmanship reimagined for global markets. Temple jewelry, Kundan, Meenakari, oxidized tribal ornaments, contemporary accessories, and artisan lifestyle goods.",
    canonical: `${SITE_BASE_URL}/products/fashion-lifestyle`,
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    robots: 'index, follow',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_BASE_URL}/` },
      { name: 'Products', item: `${SITE_BASE_URL}/products` },
      { name: 'Fashion & Lifestyle', item: `${SITE_BASE_URL}/products/fashion-lifestyle` },
    ],
  },
  jewelry: {
    title: 'Indian Fashion Jewelry & Handcrafted Accessories Export | AURA Global Trade',
    description: "Explore India's rich jewelry craftsmanship reimagined for global markets. Temple jewelry, Kundan, Meenakari, oxidized tribal ornaments, contemporary accessories, and artisan lifestyle goods.",
    canonical: `${SITE_BASE_URL}/products/fashion-lifestyle`,
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    robots: 'index, follow',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_BASE_URL}/` },
      { name: 'Products', item: `${SITE_BASE_URL}/products` },
      { name: 'Fashion & Lifestyle', item: `${SITE_BASE_URL}/products/fashion-lifestyle` },
    ],
  },
  kanjivaramSaree: {
    title: 'Kanjivaram Silk Saree Exporter | South Indian Zari Brocade & Heritage Weaves | AURA Global Trade',
    description: 'Authentic Kanjivaram silk sarees sourced directly from Kanchipuram weaver societies. Pure silk, Korvai contrast borders, traditional temple motifs, and tested zari for international bridal and luxury fashion markets.',
    canonical: `${SITE_BASE_URL}/products/apparel-textiles/kanjivaram-silk-saree`,
    ogType: 'product',
    ogImage: DEFAULT_OG_IMAGE,
    robots: 'index, follow',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_BASE_URL}/` },
      { name: 'Products', item: `${SITE_BASE_URL}/products` },
      { name: 'Apparel & Textiles', item: `${SITE_BASE_URL}/products/apparel-textiles` },
      { name: 'Kanjivaram Silk Saree', item: `${SITE_BASE_URL}/products/apparel-textiles/kanjivaram-silk-saree` },
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Kanjivaram Silk Saree',
      description: 'Handcrafted South Indian silk saree featuring three-shuttle Korvai interlock, contrast borders, and traditional zari motifs from Kanchipuram, Tamil Nadu.',
      category: 'Apparel & Textiles / Silk Sarees',
      countryOfOrigin: {
        '@type': 'Country',
        name: 'India',
      },
      brand: {
        '@type': 'Brand',
        name: 'AURA Global Trade',
      },
    },
  },
  apparelTextiles: {
    title: 'Indian Textile Exporter | Silk Sarees, Handlooms, Fabrics & Apparel | AURA Global Trade',
    description: 'AURA Global Trade connects international buyers with Indian silk sarees, Kanjivaram drapes, regional handloom textiles, combed cotton fabrics, apparel, home furnishings, and spun yarns.',
    canonical: `${SITE_BASE_URL}/products/apparel-textiles`,
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    robots: 'index, follow',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_BASE_URL}/` },
      { name: 'Products', item: `${SITE_BASE_URL}/products` },
      { name: 'Apparel & Textiles', item: `${SITE_BASE_URL}/products/apparel-textiles` },
    ],
  },
  textiles: {
    title: 'Indian Textile Exporter | Silk Sarees, Handlooms, Fabrics & Apparel | AURA Global Trade',
    description: 'AURA Global Trade connects international buyers with Indian silk sarees, Kanjivaram drapes, regional handloom textiles, combed cotton fabrics, apparel, home furnishings, and spun yarns.',
    canonical: `${SITE_BASE_URL}/products/apparel-textiles`,
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    robots: 'index, follow',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_BASE_URL}/` },
      { name: 'Products', item: `${SITE_BASE_URL}/products` },
      { name: 'Apparel & Textiles', item: `${SITE_BASE_URL}/products/apparel-textiles` },
    ],
  },
  quality: {
    title: 'Quality & Compliance Architecture | AURA Global Trade',
    description: 'Explore Aura Global Trade\'s multi-tier quality assurance framework: supplier verification, laboratory assay testing, cold-chain integrity, and export documentation.',
    canonical: `${SITE_BASE_URL}/quality-compliance`,
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    robots: 'index, follow',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_BASE_URL}/` },
      { name: 'Quality & Compliance', item: `${SITE_BASE_URL}/quality-compliance` },
    ],
  },
  exportProcess: {
    title: 'Export Process & Procurement Workflow | AURA Global Trade',
    description: 'Understand Aura Global Trade\'s transparent 6-stage sourcing and export process: from requirement scoping and lab verification to freight dispatch.',
    canonical: `${SITE_BASE_URL}/export-process`,
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    robots: 'index, follow',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_BASE_URL}/` },
      { name: 'Export Process', item: `${SITE_BASE_URL}/export-process` },
    ],
  },
  faqs: {
    title: 'FAQ & Trade Desk | AURA Global Trade',
    description: 'Direct answers to international procurement questions: minimum order requirements, sample policies, phytosanitary clearances, and export documentation.',
    canonical: `${SITE_BASE_URL}/faqs`,
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    robots: 'index, follow',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_BASE_URL}/` },
      { name: 'FAQ & Trade Desk', item: `${SITE_BASE_URL}/faqs` },
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What products does Aura Global Trade export?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Aura Global Trade sources and exports premium spices and botanical ingredients (specifically high-curcumin Indian turmeric), contemporary artisanal fashion jewelry, and sustainable textiles.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does Aura verify product quality and compliance?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We mandate independent third-party laboratory assays (NABL/SGS/Eurofins on request), phytosanitary clearances, Certificates of Origin, and complete batch traceability before vessel dispatch.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where does Aura Global Trade operate from?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Aura Global Trade operates from Chennai, Tamil Nadu, India, leveraging deep regional grower collectives and maritime corridors through Chennai Seaport (INMAA) and Tuticorin (INTUT).',
          },
        },
      ],
    },
  },
  contact: {
    title: 'Contact Trade Desk | AURA Global Trade',
    description: 'Connect directly with Aura Global Trade officers in Chennai, India for corporate partnerships, trade inquiries, and procurement consultations.',
    canonical: `${SITE_BASE_URL}/contact`,
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    robots: 'index, follow',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_BASE_URL}/` },
      { name: 'Contact Trade Desk', item: `${SITE_BASE_URL}/contact` },
    ],
  },
  requestQuote: {
    title: 'Request a Trade Quote | B2B Procurement Intake | AURA Global Trade',
    description: 'Submit a structured B2B Request for Quote (RFQ) for agricultural commodities, contemporary jewelry, or sustainable textiles with our Chennai trade desk.',
    canonical: `${SITE_BASE_URL}/request-quote`,
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    robots: 'index, follow',
    breadcrumbs: [
      { name: 'Home', item: `${SITE_BASE_URL}/` },
      { name: 'Request a Quote', item: `${SITE_BASE_URL}/request-quote` },
    ],
  },
  notFound: {
    title: '404 — Route Not Found | AURA Global Trade',
    description: 'The requested route does not exist in our global trade directory.',
    canonical: `${SITE_BASE_URL}/404`,
    robots: 'noindex, nofollow',
  },
};
