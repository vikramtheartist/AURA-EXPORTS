import heroTurmericBowlImg from '../assets/images/explorer/hero_turmeric_bowl.jpg';
import thumbCorianderImg from '../assets/images/explorer/thumb_coriander.jpg';
import thumbFennelImg from '../assets/images/explorer/thumb_fennel.jpg';
import prodTurmericPouchImg from '../assets/images/explorer/prod_turmeric_pouch.jpg';

import catThumbTurmeric from '../assets/images/retail/cat_thumb_turmeric.jpg';
import catThumbChilli from '../assets/images/retail/cat_thumb_chilli.jpg';
import catThumbCardamom from '../assets/images/retail/cat_thumb_cardamom.jpg';
import catThumbCumin from '../assets/images/retail/cat_thumb_cumin.jpg';
import catThumbCoriander from '../assets/images/retail/cat_thumb_coriander.jpg';
import catThumbFennel from '../assets/images/retail/cat_thumb_fennel.jpg';

import retailTurmericImg from '../assets/images/retail/retail_turmeric.jpg';
import retailBlackPepperImg from '../assets/images/retail/retail_black_pepper.jpg';
import retailCardamomImg from '../assets/images/retail/retail_cardamom.jpg';
import retailRedChilliImg from '../assets/images/retail/retail_red_chilli.jpg';
import retailGingerImg from '../assets/images/retail/retail_ginger.jpg';
import retailGaramMasalaImg from '../assets/images/retail/retail_garam_masala.jpg';

import turmericRootsImg from '../assets/images/turmeric_roots_banner_1780417444579.png';
import turmericPasteImg from '../assets/images/turmeric_food_processing_1_png_1780418493678.png';
import turmericCapsulesImg from '../assets/images/turmeric_nutraceuticals_1_png_1780418540074.png';
import turmericFacePackImg from '../assets/images/turmeric_personal_care_1_png_1780418510348.png';

import chilliesAgroImg from '../assets/images/agro_chillies.jpg';
import cardamomAgroImg from '../assets/images/agro_cardamom.jpg';
import cuminAgroImg from '../assets/images/agro_cumin.jpg';
import blackPepperAgroImg from '../assets/images/agro_black_pepper.jpg';
import grainsAgroImg from '../assets/images/agro_grains.jpg';
import moringaAgroImg from '../assets/images/agro_moringa.jpg';

export interface ProductPackVariant {
  id: string;
  sku: string;
  weightLabel: string; // e.g. "100g", "200g", "250g", "60 capsules"
  weightGrams?: number; // for per 100g price calculation
  unitCount?: number; // for capsules per unit calculation
  priceINR: number; // Base launch selling price
  mrpINR?: number; // MRP if applicable
  inStock: boolean;
}

export interface PackagedProductItem {
  id: string;
  name: string;
  category: 'Turmeric' | 'Chilli' | 'Cardamom' | 'Cumin' | 'Coriander' | 'Fennel';
  productType: 'whole' | 'powder' | 'paste' | 'seasoning' | 'capsules' | 'personal-care';
  origin: string;
  descriptor: string;
  image: string;
  sizes: string[]; // For backwards-compat: e.g. ["100g", "200g", "250g"]
  variants: ProductPackVariant[];
  priceINR: number; // Smallest available variant price ("From ₹119")
  priceUSD: number;
  priceAED: number;
  mrpINR?: number;
  productSlug?: string;
  bulkCommoditySlug?: string; // Route to raw agricultural commodity
  inStock: boolean;
  certifications?: string[];
  description?: string;
  rating?: {
    score: number;
    reviewCount: number;
  };
}

export interface AgroCommodityItem {
  id: string;
  name: string;
  form: string;
  origin: string;
  gradeSummary: string;
  packagingSummary: string;
  image: string;
  institutionalId?: string;
  specificationsSlug?: string;
}

export interface OriginAttribute {
  label: string;
  value: string;
  sublabel: string;
  icon: 'sparkles' | 'flask' | 'shield' | 'package' | 'sprout' | 'sliders';
}

export interface CategoryOriginData {
  title: string;
  location: string;
  state: string;
  country: string;
  subheading: string;
  description: string;
  heroImage: string;
  mapRegion: 'tamil-nadu' | 'andhra-pradesh' | 'kerala' | 'gujarat-rajasthan' | 'rajasthan' | 'gujarat' | 'pan-india';
  mapLabel: {
    state: string;
    hub: string;
  };
  attributes: OriginAttribute[];
  bulkSpecsLink: string;
}

export interface UnifiedProductCategory {
  id: 'turmeric' | 'chilli' | 'cardamom' | 'cumin' | 'coriander' | 'fennel' | 'all';
  name: string;
  thumbnail: string;
  origin: CategoryOriginData;
  packagedProducts: PackagedProductItem[];
  agriculturalProducts: AgroCommodityItem[];
}

// =========================================================================
// 1. TURMERIC PRODUCTS
// =========================================================================
export const TURMERIC_RETAIL_PRODUCTS: PackagedProductItem[] = [
  {
    id: 'pkg-turm-01',
    name: 'Organic Turmeric Powder',
    category: 'Turmeric',
    productType: 'powder',
    origin: 'Salem & Erode, Tamil Nadu',
    descriptor: 'Cryo-Milled Single-Origin · 5.2% High Curcumin',
    image: retailTurmericImg,
    sizes: ['100g', '200g', '250g'],
    priceINR: 119,
    priceUSD: 1.45,
    priceAED: 5.3,
    productSlug: 'salem-turmeric-powder',
    bulkCommoditySlug: '/products/agro-products/turmeric',
    inStock: true,
    certifications: ['FSSAI', 'APEDA', 'USDA Organic'],
    description: 'Cold-ground at -20°C to preserve volatile turmeric essential oils, aromatic turmerones, and natural deep golden color.',
    variants: [
      {
        id: 'var-turm-01-100',
        sku: 'AURA-TUR-ORG-100G',
        weightLabel: '100g',
        weightGrams: 100,
        priceINR: 119,
        inStock: true,
      },
      {
        id: 'var-turm-01-200',
        sku: 'AURA-TUR-ORG-200G',
        weightLabel: '200g',
        weightGrams: 200,
        priceINR: 219,
        inStock: true,
      },
      {
        id: 'var-turm-01-250',
        sku: 'AURA-TUR-ORG-250G',
        weightLabel: '250g',
        weightGrams: 250,
        priceINR: 269,
        inStock: true,
      },
    ],
  },
  {
    id: 'pkg-turm-02',
    name: 'Turmeric Powder Pouch',
    category: 'Turmeric',
    productType: 'powder',
    origin: 'Salem & Erode, Tamil Nadu',
    descriptor: 'Resealable Multi-Barrier Pouch · Everyday Culinary Grade',
    image: prodTurmericPouchImg,
    sizes: ['100g', '200g', '500g'],
    priceINR: 89,
    priceUSD: 1.1,
    priceAED: 4.0,
    productSlug: 'salem-turmeric-powder',
    bulkCommoditySlug: '/products/agro-products/turmeric',
    inStock: true,
    certifications: ['FSSAI', 'APEDA'],
    description: 'Kitchen pantry staple with guaranteed pure curcumin and zero synthetic anti-caking agents.',
    variants: [
      {
        id: 'var-turm-02-100',
        sku: 'AURA-TUR-PCH-100G',
        weightLabel: '100g',
        weightGrams: 100,
        priceINR: 89,
        inStock: true,
      },
      {
        id: 'var-turm-02-200',
        sku: 'AURA-TUR-PCH-200G',
        weightLabel: '200g',
        weightGrams: 200,
        priceINR: 159,
        inStock: true,
      },
      {
        id: 'var-turm-02-500',
        sku: 'AURA-TUR-PCH-500G',
        weightLabel: '500g',
        weightGrams: 500,
        priceINR: 349,
        inStock: true,
      },
    ],
  },
  {
    id: 'pkg-turm-03',
    name: 'Turmeric Paste',
    category: 'Turmeric',
    productType: 'paste',
    origin: 'Salem, Tamil Nadu',
    descriptor: 'Cold-Emulsified Pure Golden Paste · Culinary & Food Prep',
    image: turmericPasteImg,
    sizes: ['200g', '500g'],
    priceINR: 149,
    priceUSD: 1.8,
    priceAED: 6.6,
    productSlug: 'salem-turmeric-powder',
    bulkCommoditySlug: '/products/agro-products/turmeric',
    inStock: true,
    certifications: ['FSSAI', 'APEDA'],
    description: 'Fresh root emulsion prepared with cold-pressed oils for immediate golden milk, curries, and sauces.',
    variants: [
      {
        id: 'var-turm-03-200',
        sku: 'AURA-TUR-PST-200G',
        weightLabel: '200g',
        weightGrams: 200,
        priceINR: 149,
        inStock: true,
      },
      {
        id: 'var-turm-03-500',
        sku: 'AURA-TUR-PST-500G',
        weightLabel: '500g',
        weightGrams: 500,
        priceINR: 299,
        inStock: true,
      },
    ],
  },
  {
    id: 'pkg-turm-04',
    name: 'Turmeric Capsules',
    category: 'Turmeric',
    productType: 'capsules',
    origin: 'Tamil Nadu, India',
    descriptor: 'Standardized 95% Curcuminoid Extract with BioPerine',
    image: turmericCapsulesImg,
    sizes: ['60 capsules', '120 capsules'],
    priceINR: 349,
    priceUSD: 4.25,
    priceAED: 15.5,
    productSlug: 'salem-turmeric-powder',
    bulkCommoditySlug: '/products/agro-products/turmeric',
    inStock: true,
    certifications: ['FSSAI', 'GMP Certified'],
    description: 'Vegetarian daily dietary wellness capsules providing potent antioxidant cellular support.',
    variants: [
      {
        id: 'var-turm-04-60c',
        sku: 'AURA-TUR-CAP-60C',
        weightLabel: '60 capsules',
        unitCount: 60,
        priceINR: 349,
        inStock: true,
      },
      {
        id: 'var-turm-04-120c',
        sku: 'AURA-TUR-CAP-120C',
        weightLabel: '120 capsules',
        unitCount: 120,
        priceINR: 599,
        inStock: true,
      },
    ],
  },
  {
    id: 'pkg-turm-05',
    name: 'Turmeric Face Pack',
    category: 'Turmeric',
    productType: 'personal-care',
    origin: 'Western Ghats, India',
    descriptor: 'Wild Kasturi Manjal & Sandalwood Herbal Powder',
    image: turmericFacePackImg,
    sizes: ['100g', '200g'],
    priceINR: 149,
    priceUSD: 1.8,
    priceAED: 6.6,
    productSlug: 'salem-turmeric-powder',
    bulkCommoditySlug: '/products/agro-products/turmeric',
    inStock: true,
    certifications: ['FSSAI', 'Ayush Approved'],
    description: 'Aromatic non-staining wild turmeric formulation for gentle skin clarity and rejuvenation.',
    variants: [
      {
        id: 'var-turm-05-100',
        sku: 'AURA-TUR-FCP-100G',
        weightLabel: '100g',
        weightGrams: 100,
        priceINR: 149,
        inStock: true,
      },
      {
        id: 'var-turm-05-200',
        sku: 'AURA-TUR-FCP-200G',
        weightLabel: '200g',
        weightGrams: 200,
        priceINR: 249,
        inStock: true,
      },
    ],
  },
];

// =========================================================================
// 2. CHILLI PRODUCTS
// =========================================================================
export const CHILLI_RETAIL_PRODUCTS: PackagedProductItem[] = [
  {
    id: 'pkg-chill-01',
    name: 'Guntur Sannam Chilli Powder',
    category: 'Chilli',
    productType: 'powder',
    origin: 'Guntur, Andhra Pradesh',
    descriptor: '35,000 SHU Medium Heat · S334 Sannam Grade · Vivid Red',
    image: retailRedChilliImg,
    sizes: ['100g', '200g', '250g'],
    priceINR: 119,
    priceUSD: 1.45,
    priceAED: 5.3,
    productSlug: 'guntur-sannam-chilli',
    bulkCommoditySlug: '/products/agro-products#explore-agricultural-products',
    inStock: true,
    certifications: ['FSSAI', 'Spice Board of India'],
    description: 'Single-origin stemless Guntur Sannam chillies, cryo-milled to retain capsaicin clarity and deep natural carotenoid pigments.',
    variants: [
      {
        id: 'var-chill-01-100',
        sku: 'AURA-CHL-SAN-100G',
        weightLabel: '100g',
        weightGrams: 100,
        priceINR: 119,
        inStock: true,
      },
      {
        id: 'var-chill-01-200',
        sku: 'AURA-CHL-SAN-200G',
        weightLabel: '200g',
        weightGrams: 200,
        priceINR: 219,
        inStock: true,
      },
      {
        id: 'var-chill-01-250',
        sku: 'AURA-CHL-SAN-250G',
        weightLabel: '250g',
        weightGrams: 250,
        priceINR: 259,
        inStock: true,
      },
    ],
  },
  {
    id: 'pkg-chill-02',
    name: 'Whole Sun-Dried Chilli',
    category: 'Chilli',
    productType: 'whole',
    origin: 'Guntur & Byadgi, India',
    descriptor: 'Stemless Sun-Cured Whole Pods · High ASTA Color Value',
    image: chilliesAgroImg,
    sizes: ['100g', '250g', '500g'],
    priceINR: 99,
    priceUSD: 1.2,
    priceAED: 4.4,
    productSlug: 'guntur-sannam-chilli',
    bulkCommoditySlug: '/products/agro-products#explore-agricultural-products',
    inStock: true,
    certifications: ['FSSAI', 'Spice Board of India'],
    description: 'Naturally dried on raised beds under direct Deccan sunlight. Whole unbruised pods with high oil and seed content.',
    variants: [
      {
        id: 'var-chill-02-100',
        sku: 'AURA-CHL-SUN-100G',
        weightLabel: '100g',
        weightGrams: 100,
        priceINR: 99,
        inStock: true,
      },
      {
        id: 'var-chill-02-250',
        sku: 'AURA-CHL-SUN-250G',
        weightLabel: '250g',
        weightGrams: 250,
        priceINR: 199,
        inStock: true,
      },
      {
        id: 'var-chill-02-500',
        sku: 'AURA-CHL-SUN-500G',
        weightLabel: '500g',
        weightGrams: 500,
        priceINR: 349,
        inStock: true,
      },
    ],
  },
  {
    id: 'pkg-chill-03',
    name: 'Artisanal Crushed Chilli',
    category: 'Chilli',
    productType: 'seasoning',
    origin: 'Andhra Pradesh, India',
    descriptor: 'Coarse Flakes with Toasted Seeds · Artisan Finishing Flakes',
    image: retailRedChilliImg,
    sizes: ['100g', '200g'],
    priceINR: 129,
    priceUSD: 1.55,
    priceAED: 5.7,
    productSlug: 'guntur-sannam-chilli',
    bulkCommoditySlug: '/products/agro-products#explore-agricultural-products',
    inStock: true,
    certifications: ['FSSAI', 'APEDA'],
    description: 'Flaked coarse red chillies and roasted seeds designed for gourmet table finishing, pizzas, pasta, and grilled meats.',
    variants: [
      {
        id: 'var-chill-03-100',
        sku: 'AURA-CHL-CRS-100G',
        weightLabel: '100g',
        weightGrams: 100,
        priceINR: 129,
        inStock: true,
      },
      {
        id: 'var-chill-03-200',
        sku: 'AURA-CHL-CRS-200G',
        weightLabel: '200g',
        weightGrams: 200,
        priceINR: 229,
        inStock: true,
      },
    ],
  },
  {
    id: 'pkg-chill-04',
    name: 'Smoked Chilli Seasoning Jar',
    category: 'Chilli',
    productType: 'seasoning',
    origin: 'South India',
    descriptor: 'Slow Wood-Smoked Spicy Seasoning · Gourmet Glass Shaker',
    image: retailRedChilliImg,
    sizes: ['120g', '240g'],
    priceINR: 179,
    priceUSD: 2.15,
    priceAED: 7.9,
    productSlug: 'guntur-sannam-chilli',
    bulkCommoditySlug: '/products/agro-products#explore-agricultural-products',
    inStock: true,
    certifications: ['FSSAI', 'APEDA'],
    description: 'Handcrafted seasoning infused with natural wood smoke and mineral sea salt for rich depth in marinades and grills.',
    variants: [
      {
        id: 'var-chill-04-120',
        sku: 'AURA-CHL-SMK-120G',
        weightLabel: '120g',
        weightGrams: 120,
        priceINR: 179,
        inStock: true,
      },
      {
        id: 'var-chill-04-240',
        sku: 'AURA-CHL-SMK-240G',
        weightLabel: '240g',
        weightGrams: 240,
        priceINR: 299,
        inStock: true,
      },
    ],
  },
];

// =========================================================================
// 3. CARDAMOM PRODUCTS
// =========================================================================
export const CARDAMOM_RETAIL_PRODUCTS: PackagedProductItem[] = [
  {
    id: 'pkg-card-01',
    name: 'Alleppey Green Cardamom Powder',
    category: 'Cardamom',
    productType: 'powder',
    origin: 'Idukki Hills, Kerala',
    descriptor: 'Cryo-Milled 100% Pure Decorticated Seeds · 8% Volatile Oils',
    image: retailCardamomImg,
    sizes: ['75g', '150g'],
    priceINR: 299,
    priceUSD: 3.65,
    priceAED: 13.2,
    productSlug: 'alleppey-cardamom-powder',
    bulkCommoditySlug: '/products/agro-products#explore-agricultural-products',
    inStock: true,
    certifications: ['FSSAI', 'Spice Board of India', 'GI Tagged Origin'],
    description: 'Freshly pulverized inside airtight nitrogen atmosphere to safeguard ethereal terpinyl acetate notes without loss of freshness.',
    variants: [
      {
        id: 'var-card-01-75',
        sku: 'AURA-CRD-PWD-75G',
        weightLabel: '75g',
        weightGrams: 75,
        priceINR: 299,
        inStock: true,
      },
      {
        id: 'var-card-01-150',
        sku: 'AURA-CRD-PWD-150G',
        weightLabel: '150g',
        weightGrams: 150,
        priceINR: 549,
        inStock: true,
      },
    ],
  },
  {
    id: 'pkg-card-02',
    name: 'Extra Bold Whole Green Cardamom',
    category: 'Cardamom',
    productType: 'whole',
    origin: 'Vandanmedu & Munnar, Kerala',
    descriptor: 'Handpicked 8mm+ Extra Bold (AGEB) Grade Pods',
    image: cardamomAgroImg,
    sizes: ['100g', '250g'],
    priceINR: 599,
    priceUSD: 7.25,
    priceAED: 26.5,
    productSlug: 'alleppey-cardamom-powder',
    bulkCommoditySlug: '/products/agro-products#explore-agricultural-products',
    inStock: true,
    certifications: ['FSSAI', 'Spice Board of India', 'APEDA'],
    description: 'The pinnacle of Malabar cardamom grading. Hand-sorted 8mm+ pods displaying deep vibrant green hues and intensely sweet resinous aroma.',
    variants: [
      {
        id: 'var-card-02-100',
        sku: 'AURA-CRD-BLD-100G',
        weightLabel: '100g',
        weightGrams: 100,
        priceINR: 599,
        inStock: true,
      },
      {
        id: 'var-card-02-250',
        sku: 'AURA-CRD-BLD-250G',
        weightLabel: '250g',
        weightGrams: 250,
        priceINR: 1399,
        inStock: true,
      },
    ],
  },
  {
    id: 'pkg-card-03',
    name: 'Gourmet Cardamom Pouch',
    category: 'Cardamom',
    productType: 'whole',
    origin: 'Idukki, Kerala',
    descriptor: '7.5mm Whole Green Pods · Triple-Ply Foil Barrier Pouch',
    image: retailCardamomImg,
    sizes: ['100g', '200g'],
    priceINR: 499,
    priceUSD: 6.05,
    priceAED: 22.0,
    productSlug: 'alleppey-cardamom-powder',
    bulkCommoditySlug: '/products/agro-products#explore-agricultural-products',
    inStock: true,
    certifications: ['FSSAI', 'Spice Board of India'],
    description: 'Selected 7.5mm green pods sealed in airtight light-blocking foil packaging to preserve floral aromas for gourmet home cooking.',
    variants: [
      {
        id: 'var-card-03-100',
        sku: 'AURA-CRD-PCH-100G',
        weightLabel: '100g',
        weightGrams: 100,
        priceINR: 499,
        inStock: true,
      },
      {
        id: 'var-card-03-200',
        sku: 'AURA-CRD-PCH-200G',
        weightLabel: '200g',
        weightGrams: 200,
        priceINR: 949,
        inStock: true,
      },
    ],
  },
];

// =========================================================================
// 4. CUMIN PRODUCTS
// =========================================================================
export const CUMIN_RETAIL_PRODUCTS: PackagedProductItem[] = [
  {
    id: 'pkg-cum-01',
    name: 'Premium Whole Cumin',
    category: 'Cumin',
    productType: 'whole',
    origin: 'Unjha, Gujarat',
    descriptor: 'Machine Cleaned & Sortex 99.5% Pure Seeds · Earthy Warmth',
    image: cuminAgroImg,
    sizes: ['100g', '250g'],
    priceINR: 89,
    priceUSD: 1.1,
    priceAED: 4.0,
    productSlug: 'premium-whole-cumin',
    bulkCommoditySlug: '/products/agro-products#explore-agricultural-products',
    inStock: true,
    certifications: ['FSSAI', 'Spice Board of India'],
    description: 'Selected from the premier cumin producing belt of Unjha, Gujarat. Rigorously Sortex-cleaned to achieve flawless seed clarity and essential oil density.',
    variants: [
      {
        id: 'var-cum-01-100',
        sku: 'AURA-CUM-WHL-100G',
        weightLabel: '100g',
        weightGrams: 100,
        priceINR: 89,
        inStock: true,
      },
      {
        id: 'var-cum-01-250',
        sku: 'AURA-CUM-WHL-250G',
        weightLabel: '250g',
        weightGrams: 250,
        priceINR: 199,
        inStock: true,
      },
    ],
  },
  {
    id: 'pkg-cum-02',
    name: 'Cold-Ground Cumin Powder',
    category: 'Cumin',
    productType: 'powder',
    origin: 'Unjha, Gujarat',
    descriptor: 'Cryo Low-Temperature Milled · Rich Cuminaldehyde Retention',
    image: cuminAgroImg,
    sizes: ['150g', '300g'],
    priceINR: 149,
    priceUSD: 1.8,
    priceAED: 6.6,
    productSlug: 'cold-ground-cumin-powder',
    bulkCommoditySlug: '/products/agro-products#explore-agricultural-products',
    inStock: true,
    certifications: ['FSSAI', 'Spice Board of India'],
    description: 'Milled gently below 25°C to avoid volatile heat dissipation. Provides instant rich earthiness to gravies, dals, and marinades.',
    variants: [
      {
        id: 'var-cum-02-150',
        sku: 'AURA-CUM-PWD-150G',
        weightLabel: '150g',
        weightGrams: 150,
        priceINR: 149,
        inStock: true,
      },
      {
        id: 'var-cum-02-300',
        sku: 'AURA-CUM-PWD-300G',
        weightLabel: '300g',
        weightGrams: 300,
        priceINR: 269,
        inStock: true,
      },
    ],
  },
  {
    id: 'pkg-cum-03',
    name: 'Roasted Cumin Seasoning',
    category: 'Cumin',
    productType: 'seasoning',
    origin: 'Gujarat, India',
    descriptor: 'Artisan Slow-Roasted Jeera Blend · Aromatic Shaker Jar',
    image: cuminAgroImg,
    sizes: ['120g', '240g'],
    priceINR: 149,
    priceUSD: 1.8,
    priceAED: 6.6,
    productSlug: 'roasted-cumin-seasoning',
    bulkCommoditySlug: '/products/agro-products#explore-agricultural-products',
    inStock: true,
    certifications: ['FSSAI', 'APEDA'],
    description: 'Slow-toasted in heavy cast-iron roasters until dark golden brown, unlocking intense nutty nuances for raitas, chaats, and roasted veggies.',
    variants: [
      {
        id: 'var-cum-03-120',
        sku: 'AURA-CUM-RST-120G',
        weightLabel: '120g',
        weightGrams: 120,
        priceINR: 149,
        inStock: true,
      },
      {
        id: 'var-cum-03-240',
        sku: 'AURA-CUM-RST-240G',
        weightLabel: '240g',
        weightGrams: 240,
        priceINR: 269,
        inStock: true,
      },
    ],
  },
];

// =========================================================================
// 5. CORIANDER PRODUCTS
// =========================================================================
export const CORIANDER_RETAIL_PRODUCTS: PackagedProductItem[] = [
  {
    id: 'pkg-cor-01',
    name: 'Roasted Golden Coriander',
    category: 'Coriander',
    productType: 'powder',
    origin: 'Ramganj Mandi, Rajasthan',
    descriptor: 'Gentle Dry-Roasted Powder · Distinct Citrus & Herbaceous Notes',
    image: thumbCorianderImg,
    sizes: ['100g', '250g'],
    priceINR: 89,
    priceUSD: 1.1,
    priceAED: 4.0,
    productSlug: 'roasted-golden-coriander',
    bulkCommoditySlug: '/products/agro-products#explore-agricultural-products',
    inStock: true,
    certifications: ['FSSAI', 'Spice Board of India'],
    description: 'Carefully roasted Ramganj coriander seeds, finely ground to provide sweetness, body, and gentle thickening to curries.',
    variants: [
      {
        id: 'var-cor-01-100',
        sku: 'AURA-COR-RST-100G',
        weightLabel: '100g',
        weightGrams: 100,
        priceINR: 89,
        inStock: true,
      },
      {
        id: 'var-cor-01-250',
        sku: 'AURA-COR-RST-250G',
        weightLabel: '250g',
        weightGrams: 250,
        priceINR: 189,
        inStock: true,
      },
    ],
  },
  {
    id: 'pkg-cor-02',
    name: 'Whole Coriander Seeds',
    category: 'Coriander',
    productType: 'whole',
    origin: 'Kota, Rajasthan',
    descriptor: 'Green-Harvested Eagle Grade Sortex Selected Seeds',
    image: thumbCorianderImg,
    sizes: ['150g', '300g'],
    priceINR: 99,
    priceUSD: 1.2,
    priceAED: 4.4,
    productSlug: 'whole-coriander-seeds',
    bulkCommoditySlug: '/products/agro-products#explore-agricultural-products',
    inStock: true,
    certifications: ['FSSAI', 'Spice Board of India'],
    description: 'Crisp whole coriander globes with high linalool content. Imparts distinct sweet citrus aroma when cracked or crushed.',
    variants: [
      {
        id: 'var-cor-02-150',
        sku: 'AURA-COR-WHL-150G',
        weightLabel: '150g',
        weightGrams: 150,
        priceINR: 99,
        inStock: true,
      },
      {
        id: 'var-cor-02-300',
        sku: 'AURA-COR-WHL-300G',
        weightLabel: '300g',
        weightGrams: 300,
        priceINR: 179,
        inStock: true,
      },
    ],
  },
  {
    id: 'pkg-cor-03',
    name: 'Dhana Dal Roasted',
    category: 'Coriander',
    productType: 'seasoning',
    origin: 'Rajasthan, India',
    descriptor: 'Crisp Roasted Coriander Kernels · Traditional Mukhwas',
    image: thumbCorianderImg,
    sizes: ['120g', '250g'],
    priceINR: 99,
    priceUSD: 1.2,
    priceAED: 4.4,
    productSlug: 'dhana-dal-roasted',
    bulkCommoditySlug: '/products/agro-products#explore-agricultural-products',
    inStock: true,
    certifications: ['FSSAI', 'APEDA'],
    description: 'Husk-removed split coriander seeds, roasted to golden perfection with a touch of Himalayan pink salt. Delicious digestif snack.',
    variants: [
      {
        id: 'var-cor-03-120',
        sku: 'AURA-COR-DDL-120G',
        weightLabel: '120g',
        weightGrams: 120,
        priceINR: 99,
        inStock: true,
      },
      {
        id: 'var-cor-03-250',
        sku: 'AURA-COR-DDL-250G',
        weightLabel: '250g',
        weightGrams: 250,
        priceINR: 179,
        inStock: true,
      },
    ],
  },
];

// =========================================================================
// 6. FENNEL PRODUCTS
// =========================================================================
export const FENNEL_RETAIL_PRODUCTS: PackagedProductItem[] = [
  {
    id: 'pkg-fen-01',
    name: 'Royal Green Fennel Seeds',
    category: 'Fennel',
    productType: 'whole',
    origin: 'Sirohi & Abu Road, Rajasthan',
    descriptor: 'Naturally Sweet Emerald Kernels · Zero Sulfur Processing',
    image: thumbFennelImg,
    sizes: ['100g', '200g'],
    priceINR: 79,
    priceUSD: 0.95,
    priceAED: 3.5,
    productSlug: 'royal-green-fennel',
    bulkCommoditySlug: '/products/agro-products#explore-agricultural-products',
    inStock: true,
    certifications: ['FSSAI', 'Spice Board of India'],
    description: 'Shade-cured Lucknowi variety fennel seeds possessing delicate emerald hue, crisp crunch, and pronounced licorice sweetness.',
    variants: [
      {
        id: 'var-fen-01-100',
        sku: 'AURA-FEN-WHL-100G',
        weightLabel: '100g',
        weightGrams: 100,
        priceINR: 79,
        inStock: true,
      },
      {
        id: 'var-fen-01-200',
        sku: 'AURA-FEN-WHL-200G',
        weightLabel: '200g',
        weightGrams: 200,
        priceINR: 149,
        inStock: true,
      },
    ],
  },
  {
    id: 'pkg-fen-02',
    name: 'Milled Fennel Powder',
    category: 'Fennel',
    productType: 'powder',
    origin: 'Rajasthan, India',
    descriptor: 'Finely Sifted Anethole-Rich Powder · Baking & Confectionery',
    image: thumbFennelImg,
    sizes: ['150g', '300g'],
    priceINR: 129,
    priceUSD: 1.55,
    priceAED: 5.7,
    productSlug: 'milled-fennel-powder',
    bulkCommoditySlug: '/products/agro-products#explore-agricultural-products',
    inStock: true,
    certifications: ['FSSAI', 'Spice Board of India'],
    description: 'Sifted through 80-mesh fine sieves to provide instant aromatic sweetness to Kashmiri curries, beverages, and traditional baked breads.',
    variants: [
      {
        id: 'var-fen-02-150',
        sku: 'AURA-FEN-PWD-150G',
        weightLabel: '150g',
        weightGrams: 150,
        priceINR: 129,
        inStock: true,
      },
      {
        id: 'var-fen-02-300',
        sku: 'AURA-FEN-PWD-300G',
        weightLabel: '300g',
        weightGrams: 300,
        priceINR: 229,
        inStock: true,
      },
    ],
  },
  {
    id: 'pkg-fen-03',
    name: 'Candied & Roasted Fennel',
    category: 'Fennel',
    productType: 'seasoning',
    origin: 'Rajasthan, India',
    descriptor: 'Roasted with Plant Extracts & Raw Sugar · Gourmet Digestive',
    image: thumbFennelImg,
    sizes: ['120g', '250g'],
    priceINR: 139,
    priceUSD: 1.65,
    priceAED: 6.1,
    productSlug: 'candied-roasted-fennel',
    bulkCommoditySlug: '/products/agro-products#explore-agricultural-products',
    inStock: true,
    certifications: ['FSSAI', 'APEDA'],
    description: 'Slow-roasted fennel glazed with unrefined mishri and natural cooling botanicals for an exceptional post-meal palate freshener.',
    variants: [
      {
        id: 'var-fen-03-120',
        sku: 'AURA-FEN-CND-120G',
        weightLabel: '120g',
        weightGrams: 120,
        priceINR: 139,
        inStock: true,
      },
      {
        id: 'var-fen-03-250',
        sku: 'AURA-FEN-CND-250G',
        weightLabel: '250g',
        weightGrams: 250,
        priceINR: 249,
        inStock: true,
      },
    ],
  },
];

// Complete combined retail products collection (21 items)
export const ALL_RETAIL_PRODUCTS: PackagedProductItem[] = [
  ...TURMERIC_RETAIL_PRODUCTS,
  ...CHILLI_RETAIL_PRODUCTS,
  ...CARDAMOM_RETAIL_PRODUCTS,
  ...CUMIN_RETAIL_PRODUCTS,
  ...CORIANDER_RETAIL_PRODUCTS,
  ...FENNEL_RETAIL_PRODUCTS,
];

// =========================================================================
// UNIFIED PRODUCT CATEGORIES LISTING
// =========================================================================
export const UNIFIED_PRODUCT_CATEGORIES: UnifiedProductCategory[] = [
  // 0. ALL PRODUCTS (Complete Portfolio)
  {
    id: 'all',
    name: 'All Products',
    thumbnail: heroTurmericBowlImg,
    origin: {
      title: "India's Gourmet Spice Portfolio",
      location: 'South India & Pan-India Heritage Sourcing Belts',
      state: 'Pan-India',
      country: 'India',
      subheading: 'Single-Origin · Cryo-Milled · Pure & Ethical Sources',
      description:
        'Complete collection of 21 single-origin gourmet spices, cryo-milled powders, whole sun-cured spices, and artisanal seasonings sourced directly from certified grower clusters across Tamil Nadu, Kerala, Andhra Pradesh, Gujarat, and Rajasthan.',
      heroImage: heroTurmericBowlImg,
      mapRegion: 'pan-india',
      mapLabel: {
        state: 'PAN-INDIA',
        hub: 'All Heritage Corridors',
      },
      attributes: [
        {
          label: 'Single-Origin Estates',
          value: 'Direct Clusters',
          sublabel: 'Traceable Sourcing',
          icon: 'sprout',
        },
        {
          label: 'HPLC Lab Tested',
          value: 'Certified Purity',
          sublabel: 'Zero Adulteration',
          icon: 'flask',
        },
        {
          label: 'Global Compliance',
          value: 'APEDA / FSSAI',
          sublabel: 'Spice Board Approved',
          icon: 'shield',
        },
        {
          label: 'Export Ready',
          value: 'Retail to FCL',
          sublabel: 'Private Label & Bulk',
          icon: 'package',
        },
      ],
      bulkSpecsLink: '/products/agro-products#explore-agricultural-products',
    },
    packagedProducts: ALL_RETAIL_PRODUCTS,
    agriculturalProducts: [
      {
        id: 'agro-all-01',
        name: 'Whole Salem Turmeric Fingers',
        form: 'Raw Agricultural Commodity',
        origin: 'Salem & Erode, Tamil Nadu',
        gradeSummary: 'Double Polished Fingers · Moisture <10% · Curcumin 4.5%+',
        packagingSummary: '25 kg / 50 kg Jute Bags · Food-Grade Liners',
        image: turmericRootsImg,
        specificationsSlug: 'salem-turmeric-finger',
      },
      {
        id: 'agro-all-02',
        name: 'Guntur S334 Sannam Red Chilli',
        form: 'Whole Sun-Dried Pods',
        origin: 'Guntur, Andhra Pradesh',
        gradeSummary: 'Stemless / With Stem · SHU 25k-35k · ASTA 50-65',
        packagingSummary: '10 kg / 25 kg Compressed PP Gunny Bales',
        image: chilliesAgroImg,
        specificationsSlug: 'guntur-sannam-s334',
      },
      {
        id: 'agro-all-03',
        name: 'Alleppey Green Cardamom Extra Bold',
        form: 'Whole Green Pods 8mm+',
        origin: 'Idukki, Kerala',
        gradeSummary: 'Hand-picked 8mm+ Extra Bold · Vivid Green · Moisture <11%',
        packagingSummary: '5 kg / 10 kg Vacuum Foil Master Cartons',
        image: cardamomAgroImg,
        specificationsSlug: 'alleppey-green-cardamom',
      },
      {
        id: 'agro-all-04',
        name: 'Whole Cumin Seeds (Sortex 99.5%)',
        form: 'Machine Cleaned Whole Seeds',
        origin: 'Unjha, Gujarat',
        gradeSummary: 'Singapore Quality 99.5% · Volatile Oil >2.5% · Dark Greyish Brown',
        packagingSummary: '25 kg / 50 kg Multi-Ply Paper & Poly Bags',
        image: cuminAgroImg,
        specificationsSlug: 'gujarat-cumin-seeds',
      },
      {
        id: 'agro-all-05',
        name: 'Whole Green Coriander Seeds',
        form: 'Sun-Cured Whole Seeds',
        origin: 'Kota & Ramganj Mandi, Rajasthan',
        gradeSummary: 'Eagle Quality 99% Purity · Bold Split-Free · Moisture <9%',
        packagingSummary: '20 kg / 40 kg PP Woven Bags with Liner',
        image: thumbCorianderImg,
        specificationsSlug: 'rajasthan-coriander-seeds',
      },
      {
        id: 'agro-all-06',
        name: 'Royal Green Fennel Seeds',
        form: 'Naturally Dried Whole Seeds',
        origin: 'Abu Road, Rajasthan',
        gradeSummary: 'Bold Green Lucknowi Grade · Zero Sulfur · Moisture <8%',
        packagingSummary: '25 kg / 50 kg Multi-Wall Paper Bags',
        image: thumbFennelImg,
        specificationsSlug: 'royal-green-fennel-seeds',
      },
    ],
  },

  // 1. TURMERIC
  {
    id: 'turmeric',
    name: 'Turmeric',
    thumbnail: catThumbTurmeric,
    origin: {
      title: 'Salem & Erode Curcumin Belt',
      location: 'Salem & Erode, Tamil Nadu, India',
      state: 'Tamil Nadu',
      country: 'India',
      subheading: 'Ancient Kaveri Basin · Mineral Soil · Curcumin 4.5% - 5.5%',
      description:
        'The Salem and Erode valleys of Tamil Nadu represent the world benchmark for high-curcumin finger turmeric. Fed by the Kaveri river basin and ancient iron-rich soils, our turmeric yields a distinctive golden-amber hue and potent essential oil composition.',
      heroImage: heroTurmericBowlImg,
      mapRegion: 'tamil-nadu',
      mapLabel: {
        state: 'TAMIL NADU',
        hub: 'Salem & Erode Valleys',
      },
      attributes: [
        {
          label: 'Origin Belt',
          value: 'Salem & Erode',
          sublabel: 'Tamil Nadu, India',
          icon: 'sprout',
        },
        {
          label: 'Curcumin Range',
          value: '4.5% — 5.5%',
          sublabel: 'HPLC Certified',
          icon: 'flask',
        },
        {
          label: 'Harvest Season',
          value: 'Jan — Apr',
          sublabel: 'Single Flush Peak',
          icon: 'sparkles',
        },
        {
          label: 'Export Formats',
          value: 'Bulk & Consumer',
          sublabel: 'Fingers / 80-100 Mesh',
          icon: 'package',
        },
      ],
      bulkSpecsLink: '/products/agro-products/turmeric',
    },
    packagedProducts: TURMERIC_RETAIL_PRODUCTS,
    agriculturalProducts: [
      {
        id: 'agro-turm-01',
        name: 'Whole Turmeric Fingers',
        form: 'Raw Agricultural Commodity',
        origin: 'Salem & Erode, Tamil Nadu',
        gradeSummary: 'Double Polished & Unpolished Fingers · Moisture <10%',
        packagingSummary: '25 kg / 50 kg Jute Bags · Food Grade Liners',
        image: turmericRootsImg,
        specificationsSlug: 'salem-turmeric-finger',
      },
      {
        id: 'agro-turm-02',
        name: 'Turmeric Bulbs (Mother Rhizomes)',
        form: 'Raw Agricultural Commodity',
        origin: 'Salem & Erode, Tamil Nadu',
        gradeSummary: 'High-density round rhizomes · Ideal for oleoresin & extraction',
        packagingSummary: '50 kg PP Woven Bags',
        image: turmericRootsImg,
        specificationsSlug: 'salem-turmeric-finger',
      },
    ],
  },

  // 2. CHILLI
  {
    id: 'chilli',
    name: 'Chilli',
    thumbnail: catThumbChilli,
    origin: {
      title: 'Guntur Sun-Dried Chilli Belt',
      location: 'Guntur & Krishna Basin, Andhra Pradesh, India',
      state: 'Andhra Pradesh',
      country: 'India',
      subheading: 'Black Cotton Soil · River Krishna Basin · Heat 25,000 - 40,000 SHU',
      description:
        'Guntur is globally acclaimed as Asia’s capital for premium hot chillies. Cultivated in mineral-dense black cotton soils and dried naturally under the Deccan sun, our S334 Sannam pods deliver intense fiery pungency paired with vivid natural color (ASTA 50-70).',
      heroImage: chilliesAgroImg,
      mapRegion: 'andhra-pradesh',
      mapLabel: {
        state: 'ANDHRA PRADESH',
        hub: 'Guntur District',
      },
      attributes: [
        {
          label: 'Origin Belt',
          value: 'Guntur District',
          sublabel: 'Andhra Pradesh, India',
          icon: 'sprout',
        },
        {
          label: 'Pungency Level',
          value: '25k — 40k SHU',
          sublabel: 'S334 Sannam Grade',
          icon: 'flask',
        },
        {
          label: 'Color Rating',
          value: 'ASTA 50 — 70',
          sublabel: 'Natural Carotenoids',
          icon: 'sparkles',
        },
        {
          label: 'Export Formats',
          value: 'Stemless / Flakes',
          sublabel: '10kg / 25kg Master Bales',
          icon: 'package',
        },
      ],
      bulkSpecsLink: '/products/agro-products#explore-agricultural-products',
    },
    packagedProducts: CHILLI_RETAIL_PRODUCTS,
    agriculturalProducts: [
      {
        id: 'agro-chill-01',
        name: 'Guntur S334 Sannam Red Chilli',
        form: 'Whole Sun-Dried Pods',
        origin: 'Guntur, Andhra Pradesh',
        gradeSummary: 'Stemless / With Stem · SHU 25k-35k · ASTA 50-65',
        packagingSummary: '10 kg / 25 kg Compressed PP Gunny Bales',
        image: chilliesAgroImg,
        specificationsSlug: 'guntur-sannam-s334',
      },
      {
        id: 'agro-chill-02',
        name: 'Crushed Chilli Flakes (Pizza Cut)',
        form: 'Coarse Cut with Seeds',
        origin: 'Guntur, Andhra Pradesh',
        gradeSummary: 'Uniform 3-5mm flakes · 10% Seed Content · Moisture <11%',
        packagingSummary: '20 kg Kraft Paper Multi-Wall Bags',
        image: retailRedChilliImg,
        specificationsSlug: 'guntur-sannam-s334',
      },
    ],
  },

  // 3. CARDAMOM
  {
    id: 'cardamom',
    name: 'Cardamom',
    thumbnail: catThumbCardamom,
    origin: {
      title: 'Idukki Misty High-Range Estates',
      location: 'Vandanmedu & Munnar Hills, Kerala, India',
      state: 'Kerala',
      country: 'India',
      subheading: 'Western Ghats Rainforest · Elevation 1,000m+ · Volatile Cineole 8%',
      description:
        'Harvested exclusively from rainforest estates perched 1,000 meters above sea level in the Idukki hills of Kerala. Our Alleppey Green Extra Bold (AGEB) cardamom pods are hand-plucked at optimal maturity and cured in specialized flue-kilns to lock in intense green chlorophyll and delicate sweet-floral aroma.',
      heroImage: cardamomAgroImg,
      mapRegion: 'kerala',
      mapLabel: {
        state: 'KERALA',
        hub: 'Idukki & Munnar Belts',
      },
      attributes: [
        {
          label: 'Elevation',
          value: '900m — 1,200m',
          sublabel: 'Cloud-Forest Canopy',
          icon: 'sprout',
        },
        {
          label: 'Pod Size Grade',
          value: '8mm+ AGEB',
          sublabel: 'Extra Bold Hand-Sorted',
          icon: 'sparkles',
        },
        {
          label: 'Volatile Oils',
          value: '7.5% — 8.5%',
          sublabel: 'Terpinyl Acetate & Cineole',
          icon: 'flask',
        },
        {
          label: 'Packaging',
          value: 'Vacuum Sealed',
          sublabel: 'Light-Proof Foil Liners',
          icon: 'package',
        },
      ],
      bulkSpecsLink: '/products/agro-products#explore-agricultural-products',
    },
    packagedProducts: CARDAMOM_RETAIL_PRODUCTS,
    agriculturalProducts: [
      {
        id: 'agro-card-01',
        name: 'Alleppey Green Extra Bold (AGEB)',
        form: 'Whole Green Pods 8mm+',
        origin: 'Idukki, Kerala',
        gradeSummary: 'Hand-picked 8mm+ Extra Bold · Vivid Green · Moisture <11%',
        packagingSummary: '5 kg / 10 kg Vacuum Foil Master Cartons',
        image: cardamomAgroImg,
        specificationsSlug: 'alleppey-green-cardamom',
      },
      {
        id: 'agro-card-02',
        name: 'Alleppey Green Bold (AGB 7-8mm)',
        form: 'Whole Green Pods',
        origin: 'Idukki, Kerala',
        gradeSummary: '7mm to 8mm Pods · Retained Chlorophyll · Heavy Weight',
        packagingSummary: '10 kg Vacuum Foil Master Cartons',
        image: cardamomAgroImg,
        specificationsSlug: 'alleppey-green-cardamom',
      },
    ],
  },

  // 4. CUMIN
  {
    id: 'cumin',
    name: 'Cumin',
    thumbnail: catThumbCumin,
    origin: {
      title: 'Unjha Semi-Arid Cumin Corridor',
      location: 'Unjha, Mehsana District, Gujarat, India',
      state: 'Gujarat',
      country: 'India',
      subheading: 'Loamy Alluvial Plains · Desert Microclimate · Cuminaldehyde 3%+',
      description:
        'The desert-border soils of Northern Gujarat and Western Rajasthan provide the precise dry winters and bright spring sunshine required for cumin to develop high cuminaldehyde concentration. Processed through ultra-precise Sortex optical sorting to achieve 99.5% machine-cleaned purity.',
      heroImage: cuminAgroImg,
      mapRegion: 'gujarat',
      mapLabel: {
        state: 'GUJARAT',
        hub: 'Unjha Mandi Cluster',
      },
      attributes: [
        {
          label: 'Origin Belt',
          value: 'Unjha Mandi',
          sublabel: 'Gujarat, India',
          icon: 'sprout',
        },
        {
          label: 'Optical Purity',
          value: '99.5% Sortex',
          sublabel: 'Machine Cleaned',
          icon: 'flask',
        },
        {
          label: 'Volatile Oil',
          value: '2.5% — 3.2%',
          sublabel: 'Earthy Cuminaldehyde',
          icon: 'sparkles',
        },
        {
          label: 'Export Formats',
          value: 'Whole & Cryo-Ground',
          sublabel: '25kg / 50kg Barrier Bags',
          icon: 'package',
        },
      ],
      bulkSpecsLink: '/products/agro-products#explore-agricultural-products',
    },
    packagedProducts: CUMIN_RETAIL_PRODUCTS,
    agriculturalProducts: [
      {
        id: 'agro-cum-01',
        name: 'Whole Cumin Seeds (Sortex 99.5%)',
        form: 'Machine Cleaned Whole Seeds',
        origin: 'Unjha, Gujarat',
        gradeSummary: 'Singapore Quality 99.5% · Volatile Oil >2.5% · Dark Greyish Brown',
        packagingSummary: '25 kg / 50 kg Multi-Ply Paper & Poly Bags',
        image: cuminAgroImg,
        specificationsSlug: 'gujarat-cumin-seeds',
      },
      {
        id: 'agro-cum-02',
        name: 'Commercial Grade Cumin (99% Purity)',
        form: 'Whole Seeds Machine Cleaned',
        origin: 'Gujarat & Rajasthan',
        gradeSummary: 'Standard Export 99% · Moisture <9% · Food Service Grade',
        packagingSummary: '50 kg PP Bags',
        image: cuminAgroImg,
        specificationsSlug: 'gujarat-cumin-seeds',
      },
    ],
  },

  // 5. CORIANDER
  {
    id: 'coriander',
    name: 'Coriander',
    thumbnail: catThumbCoriander,
    origin: {
      title: 'Hadoti Green Coriander Sourcing Belt',
      location: 'Ramganj Mandi & Kota, Rajasthan, India',
      state: 'Rajasthan',
      country: 'India',
      subheading: 'Black Soil Plains · River Chambal Valley · Linalool 0.8%+',
      description:
        'The Chambal valley of Southeastern Rajasthan is celebrated for producing world-class green and golden coriander seeds. Known for bold globose fruits with delicate citrusy notes and essential linalool, our coriander is dried gently to prevent husk cracking and oil dissipation.',
      heroImage: thumbCorianderImg,
      mapRegion: 'rajasthan',
      mapLabel: {
        state: 'RAJASTHAN',
        hub: 'Kota & Ramganj Mandi',
      },
      attributes: [
        {
          label: 'Origin Belt',
          value: 'Ramganj Mandi',
          sublabel: 'Rajasthan, India',
          icon: 'sprout',
        },
        {
          label: 'Seed Quality',
          value: 'Eagle & Scooter',
          sublabel: '99% Cleaned & Sound',
          icon: 'flask',
        },
        {
          label: 'Aroma Profile',
          value: 'Sweet & Lemony',
          sublabel: 'Natural Linalool',
          icon: 'sparkles',
        },
        {
          label: 'Export Formats',
          value: 'Whole, Splits & Powder',
          sublabel: 'Multi-Wall Moisture Barrier',
          icon: 'package',
        },
      ],
      bulkSpecsLink: '/products/agro-products#explore-agricultural-products',
    },
    packagedProducts: CORIANDER_RETAIL_PRODUCTS,
    agriculturalProducts: [
      {
        id: 'agro-cor-01',
        name: 'Whole Green Coriander Seeds (Eagle)',
        form: 'Machine Cleaned Whole Seeds',
        origin: 'Kota & Ramganj Mandi, Rajasthan',
        gradeSummary: 'Eagle Quality 99% Purity · Light Green Hue · Moisture <9%',
        packagingSummary: '20 kg / 40 kg PP Woven Bags with Liner',
        image: thumbCorianderImg,
        specificationsSlug: 'rajasthan-coriander-seeds',
      },
      {
        id: 'agro-cor-02',
        name: 'Split Coriander (Dhana Dal Base)',
        form: 'Dehusked Seed Kernels',
        origin: 'Ramganj Mandi, Rajasthan',
        gradeSummary: 'Double-Cleaned Splits · Zero foreign matter · Natural Aroma',
        packagingSummary: '25 kg Poly Bags',
        image: thumbCorianderImg,
        specificationsSlug: 'rajasthan-coriander-seeds',
      },
    ],
  },

  // 6. FENNEL
  {
    id: 'fennel',
    name: 'Fennel',
    thumbnail: catThumbFennel,
    origin: {
      title: 'Sirohi Sweet Fennel Valley',
      location: 'Abu Road & Sirohi, Rajasthan, India',
      state: 'Rajasthan',
      country: 'India',
      subheading: 'Aravalli Foothills · Pure Mountain Runoff · Anethole 70%+',
      description:
        'Nestled along the southern Aravalli mountain foothills, Sirohi yields India’s sweetest fennel seeds. Grown with unpolluted hillside irrigation and shade-dried without sulfur or artificial colorants, our fennel displays an emerald green tint and intense anise sweetness.',
      heroImage: thumbFennelImg,
      mapRegion: 'rajasthan',
      mapLabel: {
        state: 'RAJASTHAN',
        hub: 'Sirohi & Abu Road',
      },
      attributes: [
        {
          label: 'Origin Belt',
          value: 'Sirohi Valley',
          sublabel: 'Rajasthan, India',
          icon: 'sprout',
        },
        {
          label: 'Processing',
          value: '100% Non-Sulfur',
          sublabel: 'Natural Shade Curing',
          icon: 'flask',
        },
        {
          label: 'Aroma Compound',
          value: 'High Anethole',
          sublabel: 'Natural Licorice Sweetness',
          icon: 'sparkles',
        },
        {
          label: 'Export Formats',
          value: 'Whole & Roasted',
          sublabel: '25kg & 50kg Multi-Ply Bags',
          icon: 'package',
        },
      ],
      bulkSpecsLink: '/products/agro-products#explore-agricultural-products',
    },
    packagedProducts: FENNEL_RETAIL_PRODUCTS,
    agriculturalProducts: [
      {
        id: 'agro-fen-01',
        name: 'Whole Green Fennel Seeds (Lucknowi)',
        form: 'Naturally Dried Whole Seeds',
        origin: 'Abu Road, Rajasthan',
        gradeSummary: 'Bold Green Lucknowi Grade · Zero Sulfur · Moisture <8%',
        packagingSummary: '25 kg / 50 kg Multi-Wall Paper Bags',
        image: thumbFennelImg,
        specificationsSlug: 'royal-green-fennel-seeds',
      },
      {
        id: 'agro-fen-02',
        name: 'Commercial Fennel Seeds',
        form: 'Machine Cleaned Whole Seeds',
        origin: 'Sirohi, Rajasthan',
        gradeSummary: 'Sortex Cleaned 99% · Bold Grain · High Essential Oil',
        packagingSummary: '50 kg PP Bags',
        image: thumbFennelImg,
        specificationsSlug: 'royal-green-fennel-seeds',
      },
    ],
  },
];
