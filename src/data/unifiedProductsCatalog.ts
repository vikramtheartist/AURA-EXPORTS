import heroTurmericBowlImg from '../assets/images/explorer/hero_turmeric_bowl.jpg';
import thumbCorianderImg from '../assets/images/explorer/thumb_coriander.jpg';
import thumbFennelImg from '../assets/images/explorer/thumb_fennel.jpg';
import prodTurmericPouchImg from '../assets/images/explorer/prod_turmeric_pouch.jpg';

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

export interface PackagedProductItem {
  id: string;
  name: string;
  image: string;
  sizes: string[];
  priceINR?: number;
  priceUSD: number;
  priceAED: number;
  rating: {
    score: number;
    reviewCount: number;
  };
  productSlug?: string;
  inStock: boolean;
  category: string;
}

export interface AgroCommodityItem {
  id: string;
  name: string;
  form: string;
  origin: string;
  gradeSummary: string;
  packagingSummary: string;
  image: string;
  institutionalId?: string; // Links to institutionalAgroCatalog if present
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

export const UNIFIED_PRODUCT_CATEGORIES: UnifiedProductCategory[] = [
  // =========================================================================
  // 1. TURMERIC (Signature / Flagship Origin)
  // =========================================================================
  {
    id: 'turmeric',
    name: 'Turmeric',
    thumbnail: heroTurmericBowlImg,
    origin: {
      title: 'Salem Turmeric',
      location: 'Erode & Salem, Tamil Nadu, India',
      state: 'Tamil Nadu',
      country: 'India',
      subheading: 'Agricultural Commodities · Wholesale · Export',
      description:
        'High-curcumin turmeric from the farms of Erode & Salem, known for its rich colour, robust aroma and purity. Available in multiple forms for retail, food, wellness and industrial use.',
      heroImage: heroTurmericBowlImg,
      mapRegion: 'tamil-nadu',
      mapLabel: {
        state: 'TAMIL NADU',
        hub: 'Erode & Salem',
      },
      attributes: [
        {
          label: 'High Curcumin',
          value: '4.8%–5.4%',
          sublabel: 'HPLC Tested',
          icon: 'sparkles',
        },
        {
          label: 'Tested for Purity',
          value: '100% Pure',
          sublabel: 'Zero Chromate / Fillers',
          icon: 'flask',
        },
        {
          label: 'Export Ready',
          value: 'Global Standard',
          sublabel: 'Phyto & Batch COA',
          icon: 'shield',
        },
        {
          label: 'Custom Grades',
          value: 'Cryo-Milled',
          sublabel: 'Fingers / 80-100 Mesh',
          icon: 'package',
        },
      ],
      bulkSpecsLink: '/products/agro-products/turmeric',
    },
    packagedProducts: [
      {
        id: 'pkg-turm-01',
        name: 'Organic Turmeric Powder',
        image: retailTurmericImg,
        sizes: ['100 g', '200 g', '250 g'],
        priceINR: 299,
        priceUSD: 14.0,
        priceAED: 52.0,
        rating: { score: 4.98, reviewCount: 184 },
        productSlug: 'salem-turmeric-powder',
        inStock: true,
        category: 'Turmeric',
      },
      {
        id: 'pkg-turm-02',
        name: 'Turmeric Powder Pouch',
        image: prodTurmericPouchImg,
        sizes: ['100 g', '200 g', '500 g'],
        priceINR: 249,
        priceUSD: 11.0,
        priceAED: 40.0,
        rating: { score: 4.96, reviewCount: 96 },
        productSlug: 'salem-turmeric-powder',
        inStock: true,
        category: 'Turmeric',
      },
      {
        id: 'pkg-turm-03',
        name: 'Turmeric Paste',
        image: turmericPasteImg,
        sizes: ['200 g', '500 g'],
        priceINR: 349,
        priceUSD: 16.0,
        priceAED: 59.0,
        rating: { score: 4.93, reviewCount: 72 },
        productSlug: 'salem-turmeric-powder',
        inStock: true,
        category: 'Turmeric',
      },
      {
        id: 'pkg-turm-04',
        name: 'Turmeric Capsules',
        image: turmericCapsulesImg,
        sizes: ['60 caps', '120 caps'],
        priceINR: 599,
        priceUSD: 22.0,
        priceAED: 80.0,
        rating: { score: 4.91, reviewCount: 58 },
        productSlug: 'salem-turmeric-powder',
        inStock: true,
        category: 'Turmeric',
      },
      {
        id: 'pkg-turm-05',
        name: 'Turmeric Face Pack',
        image: turmericFacePackImg,
        sizes: ['100 g', '200 g'],
        priceINR: 399,
        priceUSD: 18.0,
        priceAED: 66.0,
        rating: { score: 4.95, reviewCount: 61 },
        productSlug: 'salem-turmeric-powder',
        inStock: true,
        category: 'Turmeric',
      },
    ],
    agriculturalProducts: [
      {
        id: 'agro-turm-01',
        name: 'Whole Turmeric Fingers',
        form: 'Raw Agricultural Commodity',
        origin: 'Salem & Erode, Tamil Nadu',
        gradeSummary: 'Double Polished & Unpolished Fingers · Moisture <10%',
        packagingSummary: '25 kg / 50 kg Jute Bags · Food Grade Liners',
        image: turmericRootsImg,
        institutionalId: 'salem-turmeric',
        specificationsSlug: '/products/agro-products/turmeric',
      },
      {
        id: 'agro-turm-02',
        name: 'Dried Turmeric Rhizomes',
        form: 'Sun-Dried Whole Bulbs',
        origin: 'Erode Belt, Tamil Nadu',
        gradeSummary: 'A-Grade Bulb Harvest · High Natural Curcumin Retention',
        packagingSummary: '50 kg Export Jute / Polypropylene Bags',
        image: heroTurmericBowlImg,
        institutionalId: 'salem-turmeric',
        specificationsSlug: '/products/agro-products/turmeric',
      },
      {
        id: 'agro-turm-03',
        name: 'Bulk Turmeric Powder',
        form: 'Cryogenic Milled Powder',
        origin: 'Salem, Tamil Nadu',
        gradeSummary: '80–100 Mesh · Sub-38°C Milled · Curcumin 4.8%–5.4%',
        packagingSummary: '20 kg / 25 kg Multiwall Kraft with HDPE Liner',
        image: retailTurmericImg,
        institutionalId: 'salem-turmeric',
        specificationsSlug: '/products/agro-products/turmeric',
      },
      {
        id: 'agro-turm-04',
        name: 'Curcumin Extract & Formulations',
        form: 'Value-Added Botanical Extract',
        origin: 'Salem Processing Cluster',
        gradeSummary: 'Standardized 95% Curcuminoids & Food Formulations',
        packagingSummary: '10 kg / 25 kg Fiber Drums · Nitrogen Flushed',
        image: turmericPasteImg,
        institutionalId: 'salem-turmeric',
        specificationsSlug: '/products/agro-products/turmeric',
      },
    ],
  },

  // =========================================================================
  // 2. CHILLI
  // =========================================================================
  {
    id: 'chilli',
    name: 'Chilli',
    thumbnail: chilliesAgroImg,
    origin: {
      title: 'Guntur Sannam Chilli',
      location: 'Guntur & Prakasam, Andhra Pradesh, India',
      state: 'Andhra Pradesh',
      country: 'India',
      subheading: 'Agricultural Commodities · Wholesale · Export',
      description:
        'Famed for its deep natural ruby red colour and pungent heat (25,000–35,000 SHU). Cultivated across Andhra Pradesh\'s fertile black cotton soils, sun-cured and stemmed for international food processors.',
      heroImage: chilliesAgroImg,
      mapRegion: 'andhra-pradesh',
      mapLabel: {
        state: 'ANDHRA PRADESH',
        hub: 'Guntur & Prakasam',
      },
      attributes: [
        {
          label: 'High Pungency',
          value: '25K–35K SHU',
          sublabel: 'Capsaicin Assayed',
          icon: 'sparkles',
        },
        {
          label: 'Tested for Purity',
          value: 'Sudan Dye Free',
          sublabel: 'Aflatoxin Screened',
          icon: 'flask',
        },
        {
          label: 'Export Ready',
          value: 'Spice Board Certified',
          sublabel: 'Phyto & Health Clearance',
          icon: 'shield',
        },
        {
          label: 'Custom Grades',
          value: 'Stemless & Flakes',
          sublabel: 'S4 / Teja / Crushed',
          icon: 'package',
        },
      ],
      bulkSpecsLink: '/products/agro-products#explore-agricultural-products',
    },
    packagedProducts: [
      {
        id: 'pkg-chill-01',
        name: 'Guntur Sannam Chilli Powder',
        image: retailRedChilliImg,
        sizes: ['100 g', '200 g', '250 g'],
        priceINR: 249,
        priceUSD: 12.0,
        priceAED: 44.0,
        rating: { score: 4.92, reviewCount: 118 },
        productSlug: 'guntur-sannam-chilli',
        inStock: true,
        category: 'Chilli',
      },
      {
        id: 'pkg-chill-02',
        name: 'Whole Sun-Dried Chilli Pouch',
        image: chilliesAgroImg,
        sizes: ['100 g', '250 g', '500 g'],
        priceINR: 199,
        priceUSD: 9.5,
        priceAED: 35.0,
        rating: { score: 4.89, reviewCount: 64 },
        productSlug: 'guntur-sannam-chilli',
        inStock: true,
        category: 'Chilli',
      },
      {
        id: 'pkg-chill-03',
        name: 'Artisanal Crushed Chilli Flakes',
        image: retailRedChilliImg,
        sizes: ['100 g', '200 g'],
        priceINR: 229,
        priceUSD: 11.0,
        priceAED: 40.0,
        rating: { score: 4.94, reviewCount: 48 },
        productSlug: 'guntur-sannam-chilli',
        inStock: true,
        category: 'Chilli',
      },
      {
        id: 'pkg-chill-04',
        name: 'Smoked Chilli Seasoning Jar',
        image: retailRedChilliImg,
        sizes: ['120 g', '240 g'],
        priceINR: 279,
        priceUSD: 13.5,
        priceAED: 49.0,
        rating: { score: 4.91, reviewCount: 39 },
        productSlug: 'guntur-sannam-chilli',
        inStock: true,
        category: 'Chilli',
      },
    ],
    agriculturalProducts: [
      {
        id: 'agro-chill-01',
        name: 'Whole Dried Red Chillies (Stemless)',
        form: 'Whole Commodity',
        origin: 'Guntur, Andhra Pradesh',
        gradeSummary: 'S4 Sannam / Teja · Cleaned Stemless · Moisture <11%',
        packagingSummary: '10 kg / 25 kg Jute & PP Bags',
        image: chilliesAgroImg,
        institutionalId: 'guntur-chilli',
        specificationsSlug: '/products/agro-products#explore-agricultural-products',
      },
      {
        id: 'agro-chill-02',
        name: 'Bulk Red Chilli Powder',
        form: 'Cryo-Milled Ground Spice',
        origin: 'Guntur Processing Belt',
        gradeSummary: '60–80 Mesh · Pure Capsicum annuum · Vivid ASTA Colour',
        packagingSummary: '20 kg / 25 kg Multiwall Paper with Poly Liner',
        image: retailRedChilliImg,
        institutionalId: 'guntur-chilli',
        specificationsSlug: '/products/agro-products#explore-agricultural-products',
      },
      {
        id: 'agro-chill-03',
        name: 'Crushed Chilli Flakes (Pizza Cut)',
        form: 'Coarsely Crushed with Seeds',
        origin: 'Andhra Pradesh',
        gradeSummary: 'Uniform 2–4mm Flake · Controlled Seed Ratio',
        packagingSummary: '15 kg / 25 kg Corrugated Export Cartons',
        image: chilliesAgroImg,
        institutionalId: 'guntur-chilli',
        specificationsSlug: '/products/agro-products#explore-agricultural-products',
      },
      {
        id: 'agro-chill-04',
        name: 'High ASTA Paprika & Extract Grade',
        form: 'Extraction Raw Material',
        origin: 'Prakasam Basin',
        gradeSummary: '120+ ASTA Colour Units · High Capsanthin Content',
        packagingSummary: 'Compressed Bales / 25 kg Poly Bags',
        image: retailRedChilliImg,
        institutionalId: 'guntur-chilli',
        specificationsSlug: '/products/agro-products#explore-agricultural-products',
      },
    ],
  },

  // =========================================================================
  // 3. CARDAMOM
  // =========================================================================
  {
    id: 'cardamom',
    name: 'Cardamom',
    thumbnail: cardamomAgroImg,
    origin: {
      title: 'Alleppey Green Cardamom',
      location: 'Idukki & Alleppey, Western Ghats, Kerala, India',
      state: 'Kerala',
      country: 'India',
      subheading: 'Agricultural Commodities · Wholesale · Export',
      description:
        'Known as the "Queen of Spices", hand-harvested from high-altitude misty rainforest plantations of the Western Ghats. Features plump, extra-bold 8mm green pods rich in natural cineole and terpinyl acetate.',
      heroImage: cardamomAgroImg,
      mapRegion: 'kerala',
      mapLabel: {
        state: 'KERALA',
        hub: 'Idukki & Alleppey',
      },
      attributes: [
        {
          label: 'Extra Bold Pods',
          value: '8mm+ Diameter',
          sublabel: 'AGEB Certified',
          icon: 'sparkles',
        },
        {
          label: 'Volatile Essential Oil',
          value: '7.5%–9.0%',
          sublabel: 'Aroma Intact',
          icon: 'flask',
        },
        {
          label: 'Export Ready',
          value: 'Graded & Sorted',
          sublabel: 'Air-Freight Ready',
          icon: 'shield',
        },
        {
          label: 'Vacuum Sealed',
          value: 'Nitrogen Flushed',
          sublabel: 'Zero Colour Loss',
          icon: 'package',
        },
      ],
      bulkSpecsLink: '/products/agro-products#explore-agricultural-products',
    },
    packagedProducts: [
      {
        id: 'pkg-card-01',
        name: 'Alleppey Green Cardamom Powder',
        image: retailCardamomImg,
        sizes: ['75 g', '150 g'],
        priceINR: 649,
        priceUSD: 26.0,
        priceAED: 95.0,
        rating: { score: 4.99, reviewCount: 92 },
        productSlug: 'alleppey-cardamom-powder',
        inStock: true,
        category: 'Cardamom',
      },
      {
        id: 'pkg-card-02',
        name: 'Extra Bold Whole Green Pods Tin',
        image: cardamomAgroImg,
        sizes: ['100 g', '250 g'],
        priceINR: 799,
        priceUSD: 28.0,
        priceAED: 102.0,
        rating: { score: 4.97, reviewCount: 140 },
        productSlug: 'alleppey-cardamom-powder',
        inStock: true,
        category: 'Cardamom',
      },
      {
        id: 'pkg-card-03',
        name: 'Gourmet Cardamom Pouch',
        image: retailCardamomImg,
        sizes: ['100 g', '200 g'],
        priceINR: 549,
        priceUSD: 22.0,
        priceAED: 80.0,
        rating: { score: 4.95, reviewCount: 53 },
        productSlug: 'alleppey-cardamom-powder',
        inStock: true,
        category: 'Cardamom',
      },
    ],
    agriculturalProducts: [
      {
        id: 'agro-card-01',
        name: 'Alleppey Green Extra Bold (AGEB)',
        form: 'Whole Green Pods 8mm+',
        origin: 'Idukki, Kerala',
        gradeSummary: 'Hand-picked 8mm+ Extra Bold · Vivid Green · Moisture <11%',
        packagingSummary: '5 kg / 10 kg Vacuum Foil Master Cartons',
        image: cardamomAgroImg,
        institutionalId: 'alleppey-cardamom',
        specificationsSlug: '/products/agro-products#explore-agricultural-products',
      },
      {
        id: 'agro-card-02',
        name: 'Alleppey Green Bold (AGB)',
        form: 'Whole Green Pods 7mm–8mm',
        origin: 'Western Ghats, Kerala',
        gradeSummary: 'AGB Grade 7mm–8mm · Intense Camphoric Sweet Aroma',
        packagingSummary: '10 kg / 25 kg Sealed Export Cartons',
        image: cardamomAgroImg,
        institutionalId: 'alleppey-cardamom',
        specificationsSlug: '/products/agro-products#explore-agricultural-products',
      },
      {
        id: 'agro-card-03',
        name: 'Decorticated Cardamom Seeds',
        form: 'Cleaned Inner Black Seeds',
        origin: 'Kerala Estate Hub',
        gradeSummary: '100% Husks Removed · Ready for Industrial Grinding',
        packagingSummary: '25 kg Polyethylene Lined Master Cases',
        image: retailCardamomImg,
        institutionalId: 'alleppey-cardamom',
        specificationsSlug: '/products/agro-products#explore-agricultural-products',
      },
      {
        id: 'agro-card-04',
        name: 'Bulk Cryo-Ground Cardamom Powder',
        form: 'Ultra-Fine Milled Spice',
        origin: 'Kerala Processing Facility',
        gradeSummary: 'Milled <30°C to Prevent Volatile Evaporation',
        packagingSummary: '10 kg Foil Liners inside Rigid Plastic Tubs',
        image: retailCardamomImg,
        institutionalId: 'alleppey-cardamom',
        specificationsSlug: '/products/agro-products#explore-agricultural-products',
      },
    ],
  },

  // =========================================================================
  // 4. CUMIN
  // =========================================================================
  {
    id: 'cumin',
    name: 'Cumin',
    thumbnail: cuminAgroImg,
    origin: {
      title: 'Unjha Premium Cumin (Jeera)',
      location: 'Unjha, Gujarat & Rajasthan, India',
      state: 'Gujarat',
      country: 'India',
      subheading: 'Agricultural Commodities · Wholesale · Export',
      description:
        'Sourced directly from Gujarat\'s arid fertile belts centered in Unjha—Asia\'s largest cumin market. Machine-cleaned 99.5% purity with intense warm earthy fragrance and rich natural thymol content.',
      heroImage: cuminAgroImg,
      mapRegion: 'gujarat-rajasthan',
      mapLabel: {
        state: 'GUJARAT & RAJASTHAN',
        hub: 'Unjha & Jodhpur',
      },
      attributes: [
        {
          label: 'Sortex 99.5%',
          value: 'Machine Cleaned',
          sublabel: 'Purity Guaranteed',
          icon: 'sparkles',
        },
        {
          label: 'Volatile Essential Oil',
          value: '2.5%–3.5%',
          sublabel: 'Thymol & Cuminaldehyde',
          icon: 'flask',
        },
        {
          label: 'Export Ready',
          value: 'EU / US FDA Spec',
          sublabel: 'Low Moisture & Ash',
          icon: 'shield',
        },
        {
          label: 'Custom Packaging',
          value: 'PP & Vacuum',
          sublabel: '25kg & 50kg Bags',
          icon: 'package',
        },
      ],
      bulkSpecsLink: '/products/agro-products#explore-agricultural-products',
    },
    packagedProducts: [
      {
        id: 'pkg-cum-01',
        name: 'Premium Whole Cumin Seeds Tin',
        image: cuminAgroImg,
        sizes: ['100 g', '250 g'],
        priceINR: 249,
        priceUSD: 12.0,
        priceAED: 44.0,
        rating: { score: 4.94, reviewCount: 86 },
        inStock: true,
        category: 'Cumin',
      },
      {
        id: 'pkg-cum-02',
        name: 'Cold-Ground Cumin Powder Pouch',
        image: cuminAgroImg,
        sizes: ['150 g', '300 g'],
        priceINR: 219,
        priceUSD: 10.5,
        priceAED: 38.0,
        rating: { score: 4.91, reviewCount: 54 },
        inStock: true,
        category: 'Cumin',
      },
      {
        id: 'pkg-cum-03',
        name: 'Roasted Cumin Seasoning Jar',
        image: cuminAgroImg,
        sizes: ['120 g', '240 g'],
        priceINR: 269,
        priceUSD: 13.0,
        priceAED: 48.0,
        rating: { score: 4.88, reviewCount: 42 },
        inStock: true,
        category: 'Cumin',
      },
    ],
    agriculturalProducts: [
      {
        id: 'agro-cum-01',
        name: 'Whole Cumin Seeds (Sortex 99.5%)',
        form: 'Machine Cleaned Whole Seed',
        origin: 'Unjha, Gujarat',
        gradeSummary: 'Singapore Quality 99% / Europe Quality 99.5% Sortex Clean',
        packagingSummary: '25 kg / 50 kg Polypropylene / Paper Bags',
        image: cuminAgroImg,
        institutionalId: 'gujarat-cumin',
        specificationsSlug: '/products/agro-products#explore-agricultural-products',
      },
      {
        id: 'agro-cum-02',
        name: 'Bulk Ground Cumin Powder',
        form: 'Micro-Pulverized Spice',
        origin: 'Gujarat Processing Facility',
        gradeSummary: '60–80 Mesh · Natural Essential Oil Intact · Zero Fillers',
        packagingSummary: '25 kg Multiwall Kraft Bags with Inner PE Liner',
        image: cuminAgroImg,
        institutionalId: 'gujarat-cumin',
        specificationsSlug: '/products/agro-products#explore-agricultural-products',
      },
      {
        id: 'agro-cum-03',
        name: 'Graded Organic Cumin Lots',
        form: 'Certified Organic Commodity',
        origin: 'Rajasthan & Gujarat',
        gradeSummary: 'Pesticide Res-Free Compliant · Full Traceability Audit',
        packagingSummary: '25 kg Vacuum Pack / Nitrogen Purged Bags',
        image: cuminAgroImg,
        institutionalId: 'gujarat-cumin',
        specificationsSlug: '/products/agro-products#explore-agricultural-products',
      },
    ],
  },

  // =========================================================================
  // 5. CORIANDER
  // =========================================================================
  {
    id: 'coriander',
    name: 'Coriander',
    thumbnail: thumbCorianderImg,
    origin: {
      title: 'Rajasthan Golden Coriander (Dhania)',
      location: 'Kota & Ramganj Mandi, Rajasthan & Gujarat, India',
      state: 'Rajasthan',
      country: 'India',
      subheading: 'Agricultural Commodities · Wholesale · Export',
      description:
        'Sourced from India\'s premier coriander hubs in southeastern Rajasthan. Characterized by bright golden-green globular seeds, high linalool content, and a fresh sweet citrus aroma with low split percentages.',
      heroImage: thumbCorianderImg,
      mapRegion: 'rajasthan',
      mapLabel: {
        state: 'RAJASTHAN',
        hub: 'Kota & Ramganj Mandi',
      },
      attributes: [
        {
          label: 'Eagle & Badami',
          value: 'Sortex Graded',
          sublabel: 'Globular Whole Seed',
          icon: 'sparkles',
        },
        {
          label: 'Citrus Linalool',
          value: '0.8%–1.2%',
          sublabel: 'High Aroma Retention',
          icon: 'flask',
        },
        {
          label: 'Export Ready',
          value: '99% Cleaned',
          sublabel: 'Low Moisture <9%',
          icon: 'shield',
        },
        {
          label: 'Flexible Packing',
          value: 'Bags & Totes',
          sublabel: '25kg & Jumbo Bags',
          icon: 'package',
        },
      ],
      bulkSpecsLink: '/products/agro-products#explore-agricultural-products',
    },
    packagedProducts: [
      {
        id: 'pkg-cor-01',
        name: 'Roasted Golden Coriander Powder Tin',
        image: thumbCorianderImg,
        sizes: ['100 g', '250 g'],
        priceINR: 229,
        priceUSD: 11.0,
        priceAED: 40.0,
        rating: { score: 4.91, reviewCount: 76 },
        inStock: true,
        category: 'Coriander',
      },
      {
        id: 'pkg-cor-02',
        name: 'Whole Coriander Seeds Pouch',
        image: thumbCorianderImg,
        sizes: ['150 g', '300 g'],
        priceINR: 189,
        priceUSD: 9.0,
        priceAED: 33.0,
        rating: { score: 4.88, reviewCount: 49 },
        inStock: true,
        category: 'Coriander',
      },
      {
        id: 'pkg-cor-03',
        name: 'Dhana Dal Roasted Coriander Kernels',
        image: thumbCorianderImg,
        sizes: ['120 g', '250 g'],
        priceINR: 209,
        priceUSD: 10.0,
        priceAED: 37.0,
        rating: { score: 4.95, reviewCount: 63 },
        inStock: true,
        category: 'Coriander',
      },
    ],
    agriculturalProducts: [
      {
        id: 'agro-cor-01',
        name: 'Whole Coriander Seeds (Eagle Quality)',
        form: 'Whole Commodity Seed',
        origin: 'Kota, Rajasthan',
        gradeSummary: 'Sortex 99% Purity · Bright Golden · Moisture <9%',
        packagingSummary: '25 kg / 50 kg Jute & PP Bags',
        image: thumbCorianderImg,
        specificationsSlug: '/products/agro-products#explore-agricultural-products',
      },
      {
        id: 'agro-cor-02',
        name: 'Whole Coriander (Scooter / Diamond)',
        form: 'Commercial Export Grade',
        origin: 'Ramganj Mandi, Rajasthan',
        gradeSummary: 'Intense Citrus Aroma · Ideal for Curry Blends & Milling',
        packagingSummary: '25 kg Polypropylene Bags',
        image: thumbCorianderImg,
        specificationsSlug: '/products/agro-products#explore-agricultural-products',
      },
      {
        id: 'agro-cor-03',
        name: 'Bulk Ground Coriander Powder',
        form: 'Fine Cold-Ground Spice',
        origin: 'Rajasthan Processing Unit',
        gradeSummary: 'Uniform 60–80 Mesh · Natural Oil Retention · 100% Pure',
        packagingSummary: '25 kg HDPE-Lined Kraft Bags',
        image: thumbCorianderImg,
        specificationsSlug: '/products/agro-products#explore-agricultural-products',
      },
      {
        id: 'agro-cor-04',
        name: 'Split Coriander (Dhana Dal Kernels)',
        form: 'Husked Split Kernels',
        origin: 'Gujarat & Rajasthan',
        gradeSummary: 'Crispy Roasted Kernel · Digestives & Blending Grade',
        packagingSummary: '25 kg Moisture-Barrier Bags',
        image: thumbCorianderImg,
        specificationsSlug: '/products/agro-products#explore-agricultural-products',
      },
    ],
  },

  // =========================================================================
  // 6. FENNEL
  // =========================================================================
  {
    id: 'fennel',
    name: 'Fennel',
    thumbnail: thumbFennelImg,
    origin: {
      title: 'Gujarat Green Fennel Seeds (Saunf)',
      location: 'Saurashtra & Mehsana, Gujarat, India',
      state: 'Gujarat',
      country: 'India',
      subheading: 'Agricultural Commodities · Wholesale · Export',
      description:
        'Naturally sweet, anise-flavoured tender green fennel seeds harvested from Gujarat\'s well-drained alluvial belts. Renowned globally for high trans-anethole content and refreshing after-meal digestive properties.',
      heroImage: thumbFennelImg,
      mapRegion: 'gujarat',
      mapLabel: {
        state: 'GUJARAT',
        hub: 'Saurashtra & Mehsana',
      },
      attributes: [
        {
          label: 'Vivid Green',
          value: 'Lucknowi Grade',
          sublabel: 'Unbleached & Natural',
          icon: 'sparkles',
        },
        {
          label: 'Natural Anethole',
          value: '1.5%–2.5%',
          sublabel: 'Sweet Anise Aroma',
          icon: 'flask',
        },
        {
          label: 'Export Ready',
          value: 'Zero Sulfur',
          sublabel: 'Purity Assayed',
          icon: 'shield',
        },
        {
          label: 'Custom Packaging',
          value: 'Multi-Ply Barrier',
          sublabel: '25kg & 50kg Bags',
          icon: 'package',
        },
      ],
      bulkSpecsLink: '/products/agro-products#explore-agricultural-products',
    },
    packagedProducts: [
      {
        id: 'pkg-fen-01',
        name: 'Royal Green Fennel Seeds Tin',
        image: thumbFennelImg,
        sizes: ['100 g', '200 g'],
        priceINR: 259,
        priceUSD: 13.0,
        priceAED: 48.0,
        rating: { score: 4.96, reviewCount: 104 },
        inStock: true,
        category: 'Fennel',
      },
      {
        id: 'pkg-fen-02',
        name: 'Milled Fennel Powder Pouch',
        image: thumbFennelImg,
        sizes: ['150 g', '300 g'],
        priceINR: 219,
        priceUSD: 10.5,
        priceAED: 38.0,
        rating: { score: 4.9, reviewCount: 45 },
        inStock: true,
        category: 'Fennel',
      },
      {
        id: 'pkg-fen-03',
        name: 'Candied & Roasted Digestive Fennel',
        image: thumbFennelImg,
        sizes: ['120 g', '250 g'],
        priceINR: 239,
        priceUSD: 11.5,
        priceAED: 42.0,
        rating: { score: 4.93, reviewCount: 78 },
        inStock: true,
        category: 'Fennel',
      },
    ],
    agriculturalProducts: [
      {
        id: 'agro-fen-01',
        name: 'Extra Bold Green Fennel Seeds',
        form: 'Machine Cleaned Whole Seed',
        origin: 'Mehsana, Gujarat',
        gradeSummary: 'Sortex 99% Extra Green · Natural Sweet Taste · Moisture <9%',
        packagingSummary: '25 kg / 50 kg Polypropylene & Jute Bags',
        image: thumbFennelImg,
        specificationsSlug: '/products/agro-products#explore-agricultural-products',
      },
      {
        id: 'agro-fen-02',
        name: 'Regular Medium Bold Fennel Seeds',
        form: 'Commercial Export Grade',
        origin: 'Saurashtra, Gujarat',
        gradeSummary: 'Cleaned Seed for Culinary & Industrial Confectionery Use',
        packagingSummary: '25 kg / 50 kg PP Bags',
        image: thumbFennelImg,
        specificationsSlug: '/products/agro-products#explore-agricultural-products',
      },
      {
        id: 'agro-fen-03',
        name: 'Bulk Ground Fennel Powder',
        form: 'Cold-Pulverized Spice',
        origin: 'Gujarat Milling Unit',
        gradeSummary: 'Sub-35°C Ground · Essential Oil Locked · 60 Mesh',
        packagingSummary: '25 kg Multiwall Paper Bags with PE Liner',
        image: thumbFennelImg,
        specificationsSlug: '/products/agro-products#explore-agricultural-products',
      },
    ],
  },

  // =========================================================================
  // 7. ALL PRODUCTS (Complete Agro & Retail Overview)
  // =========================================================================
  {
    id: 'all',
    name: 'All Products',
    thumbnail: heroTurmericBowlImg,
    origin: {
      title: 'India\'s Agro & Gourmet Portfolio',
      location: 'South India & Pan-India Heritage Sourcing Belts',
      state: 'Pan-India',
      country: 'India',
      subheading: 'Integrated Sourcing · Cryo-Milling · Global Export',
      description:
        'Complete agricultural commodity trading and luxury consumer-packaged goods portfolio. Sourced directly from certified grower clusters across Tamil Nadu, Kerala, Andhra Pradesh, Gujarat, and Rajasthan.',
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
          label: 'Flexible Scale',
          value: 'Retail to FCL',
          sublabel: 'Private Label & Bulk',
          icon: 'package',
        },
      ],
      bulkSpecsLink: '/products/agro-products#explore-agricultural-products',
    },
    packagedProducts: [
      {
        id: 'pkg-all-01',
        name: 'Organic Turmeric Powder',
        image: retailTurmericImg,
        sizes: ['100 g', '200 g', '250 g'],
        priceINR: 299,
        priceUSD: 14.0,
        priceAED: 52.0,
        rating: { score: 4.98, reviewCount: 184 },
        productSlug: 'salem-turmeric-powder',
        inStock: true,
        category: 'Turmeric',
      },
      {
        id: 'pkg-all-02',
        name: 'Tellicherry Black Pepper Powder',
        image: retailBlackPepperImg,
        sizes: ['100 g', '250 g'],
        priceINR: 349,
        priceUSD: 15.0,
        priceAED: 55.0,
        rating: { score: 4.96, reviewCount: 122 },
        productSlug: 'tellicherry-black-pepper',
        inStock: true,
        category: 'Black Pepper',
      },
      {
        id: 'pkg-all-03',
        name: 'Alleppey Green Cardamom Powder',
        image: retailCardamomImg,
        sizes: ['75 g', '150 g'],
        priceINR: 649,
        priceUSD: 26.0,
        priceAED: 95.0,
        rating: { score: 4.99, reviewCount: 92 },
        productSlug: 'alleppey-cardamom-powder',
        inStock: true,
        category: 'Cardamom',
      },
      {
        id: 'pkg-all-04',
        name: 'Guntur Sannam Chilli Powder',
        image: retailRedChilliImg,
        sizes: ['100 g', '200 g', '250 g'],
        priceINR: 249,
        priceUSD: 12.0,
        priceAED: 44.0,
        rating: { score: 4.92, reviewCount: 118 },
        productSlug: 'guntur-sannam-chilli',
        inStock: true,
        category: 'Chilli',
      },
      {
        id: 'pkg-all-05',
        name: 'Coorg Sun-Dried Ginger Powder',
        image: retailGingerImg,
        sizes: ['100 g', '250 g'],
        priceINR: 279,
        priceUSD: 13.0,
        priceAED: 48.0,
        rating: { score: 4.91, reviewCount: 74 },
        productSlug: 'coorg-ginger-powder',
        inStock: true,
        category: 'Ginger',
      },
      {
        id: 'pkg-all-06',
        name: 'Imperial Garam Masala Blend',
        image: retailGaramMasalaImg,
        sizes: ['100 g', '250 g'],
        priceINR: 349,
        priceUSD: 16.0,
        priceAED: 59.0,
        rating: { score: 4.97, reviewCount: 145 },
        productSlug: 'imperial-garam-masala',
        inStock: true,
        category: 'Blends',
      },
    ],
    agriculturalProducts: [
      {
        id: 'agro-all-01',
        name: 'Whole Salem Turmeric Fingers',
        form: 'Raw Agricultural Commodity',
        origin: 'Salem, Tamil Nadu',
        gradeSummary: 'Double Polished · Curcumin 4.8%–5.4% · Moisture <10%',
        packagingSummary: '25 kg / 50 kg Jute Bags',
        image: turmericRootsImg,
        institutionalId: 'salem-turmeric',
        specificationsSlug: '/products/agro-products/turmeric',
      },
      {
        id: 'agro-all-02',
        name: 'Malabar Tellicherry Black Pepper (TGSEB)',
        form: 'Whole Dried Peppercorn',
        origin: 'Wayanad, Kerala',
        gradeSummary: 'Extra Bold 4.75mm+ · Piperine >5.8% · Pinheads Nil',
        packagingSummary: '25 kg / 50 kg Vacuum Liners in Jute Bags',
        image: blackPepperAgroImg,
        institutionalId: 'tellicherry-black-pepper',
        specificationsSlug: '/products/agro-products#explore-agricultural-products',
      },
      {
        id: 'agro-all-03',
        name: 'Alleppey Green Extra Bold Cardamom (AGEB)',
        form: 'Whole Green Pods 8mm+',
        origin: 'Idukki, Kerala',
        gradeSummary: 'Hand-Picked 8mm+ Extra Bold · Essential Oil >7.5%',
        packagingSummary: '10 kg Vacuum Cartons',
        image: cardamomAgroImg,
        institutionalId: 'alleppey-cardamom',
        specificationsSlug: '/products/agro-products#explore-agricultural-products',
      },
      {
        id: 'agro-all-04',
        name: 'Basmati Rice (1121 Steam & Pusa)',
        form: 'Premium Long-Grain Milled Rice',
        origin: 'Punjab & Haryana',
        gradeSummary: 'Avg. Grain Length 8.35mm+ · Aromatic · 100% Sortex',
        packagingSummary: '25 kg / 50 kg Woven Polypropylene Bags',
        image: grainsAgroImg,
        institutionalId: 'rice-specialty-grains',
        specificationsSlug: '/products/agro-products/rice-basmati-non-basmati',
      },
      {
        id: 'agro-all-05',
        name: 'Whole Dried Guntur Sannam Chilli',
        form: 'Whole Stemless Pods',
        origin: 'Guntur, Andhra Pradesh',
        gradeSummary: 'S4 Grade · 25,000–35,000 SHU Heat · Sudan Dye Free',
        packagingSummary: '25 kg Jute / PP Bags',
        image: chilliesAgroImg,
        institutionalId: 'guntur-chilli',
        specificationsSlug: '/products/agro-products#explore-agricultural-products',
      },
      {
        id: 'agro-all-06',
        name: 'Machine Cleaned Cumin Seeds (Sortex 99.5%)',
        form: 'Whole Cleaned Seed',
        origin: 'Unjha, Gujarat',
        gradeSummary: 'Sortex 99.5% Purity · High Volatile Oil · Low Moisture',
        packagingSummary: '25 kg / 50 kg Bags',
        image: cuminAgroImg,
        institutionalId: 'gujarat-cumin',
        specificationsSlug: '/products/agro-products#explore-agricultural-products',
      },
    ],
  },
];
