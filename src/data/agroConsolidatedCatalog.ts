import turmericImg from '../assets/images/product_turmeric_1780423510096.png';
import spicesImg from '../assets/images/agro_spices.jpg';
import chilliesImg from '../assets/images/agro_chillies.jpg';
import freshProduceImg from '../assets/images/agro_fresh_produce.jpg';
import moringaImg from '../assets/images/agro_moringa.jpg';
import grainsImg from '../assets/images/agro_grains.jpg';
import agroHeroImg from '../assets/images/agro_products_hero.jpg';

export interface ConsolidatedAgroProduct {
  id: string;
  name: string;
  botanicalName?: string;
  category: string;
  origin: string;
  verifiedRegion: string;
  shortDescription: string;
  availableForms: string[];
  keySpecsSummary: string;
  detailUrl: string;
  image: string;
  badge?: string;
}

/**
 * 8 Primary Consolidated Agricultural Products for Section 02
 * Eliminates duplication between category cards and product cards.
 */
export const consolidatedAgroProducts: ConsolidatedAgroProduct[] = [
  {
    id: 'turmeric',
    name: 'Turmeric',
    botanicalName: 'Curcuma Longa',
    category: 'Spices & Botanicals',
    origin: 'Erode & Salem, Tamil Nadu, India',
    verifiedRegion: 'Tamil Nadu',
    shortDescription: 'High-curcumin cured rhizomes, cold-milled powders and value-added culinary and wellness formats sourced from the Bhavani river basin.',
    availableForms: ['Whole Rhizomes', 'Dried Fingers', 'Fine Powder', 'Pure Paste', 'Value-Added Products'],
    keySpecsSummary: 'Curcumin 3.0% – 5.5% (HPLC) · Moisture Max 10.0%',
    detailUrl: '/products/agro-products/turmeric',
    image: turmericImg,
    badge: 'Flagship Sourcing',
  },
  {
    id: 'cardamom',
    name: 'Green Cardamom',
    botanicalName: 'Elettaria Cardamomum',
    category: 'Spices & Seasonings',
    origin: 'Idukki & Wayanad, Kerala, India',
    verifiedRegion: 'Kerala',
    shortDescription: 'Extra-bold emerald cardamom pods harvested from high-elevation Western Ghats plantations with high volatile oil and natural aroma.',
    availableForms: ['Green Cardamom Pods', 'Alleppey Green Bold (7.5-8mm)', 'Decorticated Seeds', 'Cardamom Powder'],
    keySpecsSummary: 'Volatile Oil 6.0% – 8.0% · Extra Bold 8mm+ · Deep Green',
    detailUrl: '/products/agro-products/green-cardamom',
    image: spicesImg,
    badge: 'High Elevation',
  },
  {
    id: 'chillies',
    name: 'Chillies & Chilli Products',
    botanicalName: 'Capsicum Annuum',
    category: 'Chillies & Seasonings',
    origin: 'Guntur & Warangal, Andhra Pradesh & Telangana, India',
    verifiedRegion: 'Andhra Pradesh & Telangana',
    shortDescription: 'Sun-cured whole red chillies and calibrated powders spanning high-heat (Teja S17) to rich color-yielding varieties (S4 Sannam & Byadgi).',
    availableForms: ['Whole Dried Chillies (Stemless/With Stem)', 'Chilli Powder (Calibrated SHU)', 'Crushed Pizza Flakes'],
    keySpecsSummary: 'SHU 20,000 – 85,000 · ASTA Color 60 – 140 · Low Aflatoxin',
    detailUrl: '/products/agro-products/dried-red-chillies',
    image: chilliesImg,
  },
  {
    id: 'black-pepper',
    name: 'Black Pepper',
    botanicalName: 'Piper Nigrum',
    category: 'Spices & Seasonings',
    origin: 'Malabar Coast & Coorg, Kerala & Karnataka, India',
    verifiedRegion: 'Kerala & Karnataka',
    shortDescription: 'Premium Tellicherry Garbled Extra Bold and Malabar black peppercorns selected for sharp pungency, high piperine content and high bulk density.',
    availableForms: ['Whole Peppercorns (500GL & 550GL)', 'Tellicherry Garbled (TGSEB)', 'Coarse Cracked', 'Ground Powder'],
    keySpecsSummary: 'Piperine 4.5% – 6.5% · Bulk Density 500 – 570 g/L',
    detailUrl: '/products/agro-products/black-pepper',
    image: spicesImg,
  },
  {
    id: 'moringa',
    name: 'Moringa & Natural Ingredients',
    botanicalName: 'Moringa Oleifera',
    category: 'Botanical Ingredients',
    origin: 'Dindigul & Theni, Tamil Nadu, India',
    verifiedRegion: 'Tamil Nadu',
    shortDescription: 'Nutrient-rich moringa cultivated in semi-arid horticultural belts, gently shadow-dried and cold-pulverized for functional foods and nutraceuticals.',
    availableForms: ['Dried Whole Leaves', 'Moringa Leaf Powder (100+ mesh)', 'Botanical Ingredients'],
    keySpecsSummary: 'Fine 100 Mesh · Chlorophyll Preserved · Pesticide Screened',
    detailUrl: '/products/agro-products/moringa-leaf-powder',
    image: moringaImg,
  },
  {
    id: 'fresh-produce',
    name: 'Fresh Agricultural Produce',
    category: 'Fresh Horticultural Produce',
    origin: 'Nashik & Dindigul, Maharashtra & Tamil Nadu, India',
    verifiedRegion: 'Maharashtra & Tamil Nadu',
    shortDescription: 'Export-grade fresh vegetables sorted by grade, size calibration and transit shelf-life, transported under cold-chain maritime container logistics.',
    availableForms: ['Fresh Red Onions (45-55mm+)', 'Field Tomatoes', 'Tender Drumsticks (Moringa)', 'Green Chillies'],
    keySpecsSummary: 'Reefer Container Freight · Strict Temperature Management',
    detailUrl: '/products/agro-products/fresh-drumsticks',
    image: freshProduceImg,
    badge: 'Cold Chain',
  },
  {
    id: 'grains-pulses',
    name: 'Grains & Pulses',
    category: 'Commodities & Staples',
    origin: 'Indo-Gangetic & Regional Corridors, India',
    verifiedRegion: 'North & South India',
    shortDescription: 'Aromatic traditional and 1121 Basmati rice, regional Sona Masoori, nutrient-dense ancient millets and machine-cleaned pulses for bulk shipment.',
    availableForms: ['Basmati Rice (Steam, Sella, Raw)', 'Non-Basmati Parboiled', 'Ancient Millets (Ragi, Foxtail)', 'Graded Pulses'],
    keySpecsSummary: 'Sortex Cleaned 99.5% · Moisture Max 12.0% · Bulk Sacks',
    detailUrl: '/products/agro-products/rice-basmati-non-basmati',
    image: grainsImg,
  },
  {
    id: 'other-agro',
    name: 'Other Agricultural Commodities',
    category: 'Custom Sourcing',
    origin: 'Established Agricultural Markets, India',
    verifiedRegion: 'Pan-India',
    shortDescription: 'Secondary agricultural commodities, desiccated coconut derivatives and client-specified contract commodity procurement across India.',
    availableForms: ['Desiccated Coconut (Fine & Medium)', 'Copra & Coconut Oil', 'Cumin & Coriander Seeds', 'Contract Sourcing'],
    keySpecsSummary: 'Food Grade · Export Packaged · Consolidated LCL / FCL',
    detailUrl: '/products/agro-products/coconut-products',
    image: agroHeroImg,
    badge: 'On Request',
  },
];
