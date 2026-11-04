import { 
  AgroOriginRegion, 
  TurmericFormDetail, 
  AgroPackagingOption, 
  QualityStep, 
  BuyerJourneyStep 
} from '../types/agro';

import turmericImg from '../assets/images/product_turmeric_1780423510096.png';
import spicesImg from '../assets/images/agro_spices.jpg';
import chilliesImg from '../assets/images/agro_chillies.jpg';
import freshProduceImg from '../assets/images/agro_fresh_produce.jpg';
import moringaImg from '../assets/images/agro_moringa.jpg';
import grainsImg from '../assets/images/agro_grains.jpg';
import agroHeroImg from '../assets/images/agro_products_hero.jpg';
import foodProcessingImg from '../assets/images/turmeric_food_processing_1_png_1780418493678.png';
import personalCareImg from '../assets/images/turmeric_personal_care_1_png_1780418510348.png';
import nutraceuticalsImg from '../assets/images/turmeric_nutraceuticals_1_png_1780418540074.png';
import bannerImg from '../assets/images/turmeric_roots_banner_1780417444579.png';

/**
 * 6 Brand Positioning Pillars for AURA Agro Products
 */
export const agroBrandPillars = [
  {
    number: '01',
    title: 'Origin-Led Agricultural Sourcing',
    description:
      'Direct regional supply lines connecting international buyers to verified growing basins across Tamil Nadu, Kerala, Andhra Pradesh, and other established agricultural regions.',
    metric: 'Regional Traceability',
  },
  {
    number: '02',
    title: 'Diverse Product Forms & Processing',
    description:
      'From whole raw rhizomes, seeds, and pods to cold-milled powders, standardized botanical pastes, and value-added culinary preparations.',
    metric: 'Multiple Formats',
  },
  {
    number: '03',
    title: 'Flexible Packaging & Private Label',
    description:
      'Tailored commercial packing spanning 50kg industrial PP woven and kraft sacks to retail-ready stand-up barrier pouches and custom brand packaging.',
    metric: 'Bulk to Retail',
  },
  {
    number: '04',
    title: 'Buyer-Specific Product Specifications',
    description:
      'Configurable quality grades, calibrated active assays (Curcumin, Piperine, Capsaicin), mesh granularity, and target moisture profiles.',
    metric: 'Custom Assays',
  },
  {
    number: '05',
    title: 'Quality Assurance & Documentation',
    description:
      'Transparent verification via accredited third-party ISO 17025 laboratories: Certificate of Analysis, microbiology, pesticide screens, and phytosanitary clearance.',
    metric: 'Lab Verified',
  },
  {
    number: '06',
    title: 'International B2B Trade Support',
    description:
      'Professional export execution across multimodal corridors (Chennai, Tuticorin, Cochin), containerized freight, reefer cold-chains, and Incoterms 2020 alignment.',
    metric: 'Global Freight',
  },
];

/**
 * Origin-Led Sourcing Regions across India
 */
export const agroOriginRegions: AgroOriginRegion[] = [
  {
    id: 'tamil-nadu-turmeric',
    state: 'Tamil Nadu',
    regions: ['Erode', 'Salem', 'Bhavani River Basin'],
    featuredProduct: 'Turmeric (Curcuma Longa)',
    category: 'Turmeric & Botanicals',
    headline: 'The Yellow City & Historical Spice Corridor',
    description:
      'Source turmeric from Erode and Salem, established turmeric-growing and regulated trading centres in Tamil Nadu, globally renowned for their agricultural heritage, high natural curcumin retention, and robust rhizome density.',
    terroirAndCultivation:
      'Fertile alluvial river soil, tropical climate with abundant sunshine, and century-old curing traditions ensure deep natural color and high oleoresin concentrations.',
    productForms: [
      'Whole Turmeric Rhizomes',
      'Dried Turmeric Fingers (Polished/Unpolished)',
      'Cold-Milled Turmeric Powder',
      'Processed Turmeric Paste',
      'Dietary Supplement Capsules',
      'Cosmetic Face Pack Powders',
    ],
    targetMarkets: ['Food Manufacturing', 'Spice Grinding & Blending', 'Nutraceutical Formulators', 'Personal Care'],
    image: turmericImg,
    coordinates: { x: 38, y: 78 }, // Tamil Nadu west-central
    activeStatus: 'established-cluster',
  },
  {
    id: 'kerala-cardamom',
    state: 'Kerala',
    regions: ['Idukki (Cardamom Hills)', 'Wayanad', 'Bodinayakanur Trade Hub'],
    featuredProduct: 'Green Cardamom (Elettaria Cardamomum)',
    category: 'Spices & Botanicals',
    headline: 'Western Ghats Highland Micro-Climates',
    description:
      'Source green cardamom from Kerala’s established Cardamom Hills and Western Ghats plantations, where high elevation and rainforest mist yield intense aroma and superior pod size grading.',
    terroirAndCultivation:
      'High altitude (900m – 1400m), rich loamy organic forest soil, shaded canopy farming, and controlled flue-pipe curing preserve emerald-green color and high essential oil content.',
    productForms: [
      'Alleppey Green Extra Bold (AGEB 8mm+)',
      'Alleppey Green Bold (AGB 7.5mm - 8mm)',
      'Decorticated Cardamom Seeds',
      'Ground Cardamom Powder',
    ],
    targetMarkets: ['Confectionery & Bakery', 'Middle East Tea Blending', 'Spice Blends & Masalas', 'Flavour Houses'],
    image: spicesImg,
    coordinates: { x: 34, y: 84 }, // Kerala central
    activeStatus: 'established-cluster',
  },
  {
    id: 'kerala-karnataka-pepper',
    state: 'Kerala & Karnataka',
    regions: ['Malabar Coast', 'Coorg (Kodagu)', 'Wayanad'],
    featuredProduct: 'Black Pepper (Piper Nigrum)',
    category: 'Spices & Botanicals',
    headline: 'The Legendary Spice of Malabar',
    description:
      'Harvested from shade-grown vine plantations in the Western Ghats. Graded by weight-to-volume bulk density (GL) and piperine content for industrial extraction and premium retail distribution.',
    terroirAndCultivation:
      'Humid tropical rainforest belt, volcanic soils, and organic mulch foster peppercorns with sharp bite and high volatile oil content.',
    productForms: [
      'Tellicherry Garbled Extra Bold (TGSEB)',
      'Malabar Garbled (550GL & 500GL)',
      'Cracked / Coarse Black Pepper',
      'Fine Ground Black Pepper Powder',
    ],
    targetMarkets: ['Meat Processing & Curing', 'Seasoning Formulations', 'Oleoresin Extraction', 'Table Condiments'],
    image: spicesImg,
    coordinates: { x: 32, y: 75 }, // Malabar coast
    activeStatus: 'established-cluster',
  },
  {
    id: 'andhra-telangana-chillies',
    state: 'Andhra Pradesh & Telangana',
    regions: ['Guntur (Asia’s Largest Yard)', 'Warangal', 'Khammam'],
    featuredProduct: 'Red Chillies (Capsicum Annuum)',
    category: 'Chillies & Capsicums',
    headline: 'The Pungency and Color Capital of India',
    description:
      'Source fiery and high-color red chillies from Guntur and Warangal trading corridors, calibrated across heat levels (Scoville Heat Units) and ASTA color values for global processors.',
    terroirAndCultivation:
      'Black cotton soils combined with intense semi-arid sunlight produce thick-skinned chillies ideal for stemless de-heading and mechanical drying.',
    productForms: [
      'Whole Dried Red Chillies (Stemless / With Stem)',
      'S17 Teja (High Pungency)',
      'S4 Sannam & Byadgi (High Color)',
      'Crushed Red Chilli Flakes (Pizza / Culinary)',
      'Pure Chilli Powder (Standardized SHU)',
    ],
    targetMarkets: ['Sauce & Condiment Manufacturing', 'Snack Seasonings', 'Instant Noodles', 'Spice Grinders'],
    image: chilliesImg,
    coordinates: { x: 44, y: 64 }, // Andhra Pradesh central
    activeStatus: 'established-cluster',
  },
  {
    id: 'tamil-nadu-moringa',
    state: 'Tamil Nadu',
    regions: ['Dindigul', 'Theni', 'Karur'],
    featuredProduct: 'Moringa & Fresh Drumsticks',
    category: 'Moringa & Fresh Produce',
    headline: 'South India’s Botanical & Horticultural Basin',
    description:
      'Source pristine moringa oleifera leaves and fresh hybrid drumsticks from dry-zone horticultural belts, managed under clean agricultural practices with zero-residue drying protocols.',
    terroirAndCultivation:
      'Semi-arid climate with intense sunlight naturally suppresses leaf fungal pests, allowing gentle low-temperature drying that preserves chlorophyll and phytonutrients.',
    productForms: [
      'Fine Moringa Leaf Powder (100+ mesh)',
      'Shadow-Dried Whole Moringa Leaves',
      'Fresh Tender Drumsticks (Reefer Cold-Chain)',
      'Moringa Seed & Botanical Derivatives',
    ],
    targetMarkets: ['Functional Food & Beverages', 'Nutraceutical Powders', 'Wholesale Fresh Grocers', 'Herbal Formulators'],
    image: moringaImg,
    coordinates: { x: 40, y: 82 }, // Tamil Nadu south-central
    activeStatus: 'established-cluster',
  },
  {
    id: 'maharashtra-fresh-produce',
    state: 'Maharashtra & South India',
    regions: ['Nashik (Onion Capital)', 'Dindigul & Ottanchathiram'],
    featuredProduct: 'Fresh Agricultural Produce',
    category: 'Fresh Produce',
    headline: 'Export Corridors with Reefer Logistics',
    description:
      'Export-grade fresh vegetables, Nashik red onions, and field-fresh table tomatoes sorted by grade, calibrated size, and transit shelf-life under temperature-controlled maritime containers.',
    terroirAndCultivation:
      'Deccan plateau red-loam soils and dry winter cycles produce firm-skinned, low-moisture onions with extended sea transit shelf stability.',
    productForms: [
      'Fresh Red Onions (45-55mm & 55mm+)',
      'Fresh Green Chillies (G4 & Bird’s Eye)',
      'Field-Fresh Table Tomatoes (Green-Mature/Ripe)',
      'Seasonal Tropical Export Vegetables',
    ],
    targetMarkets: ['Supermarket Chains', 'Wholesale Vegetable Terminals', 'Institutional Food Service'],
    image: freshProduceImg,
    coordinates: { x: 30, y: 55 }, // Maharashtra
    activeStatus: 'established-cluster',
  },
  {
    id: 'rajasthan-gujarat-seeds',
    state: 'Rajasthan & Gujarat',
    regions: ['Jodhpur', 'Unjha Seed Market', 'Ramganj Mandi'],
    featuredProduct: 'Cumin & Coriander Seeds',
    category: 'Seed Spices',
    headline: 'The Arid Belt of High-Aroma Seed Spices',
    description:
      'Sourced from western India’s arid agricultural belt. Machine-cleaned and optical-sorter processed to guarantee low foreign matter and consistent seed size.',
    terroirAndCultivation:
      'Dry desert fringes and winter frost-free cycles generate elevated essential oil profiles in umbelliferous seed crops.',
    productForms: [
      'Machine Cleaned Cumin Seeds (99% / 99.5% Purity)',
      'Eagle & Scooter Grade Coriander Seeds',
      'Ground Cumin & Coriander Powders',
    ],
    targetMarkets: ['Curry Powder Formulators', 'Canning & Pickling', 'Bulk Commodity Importers'],
    image: grainsImg,
    coordinates: { x: 26, y: 40 }, // Western India
    activeStatus: 'potential-corridor',
  },
  {
    id: 'north-south-grains-rice',
    state: 'Indo-Gangetic & Regional Corridors',
    regions: ['Punjab & Haryana (Basmati)', 'Tamil Nadu & Karnataka (Millets & Sona Masoori)'],
    featuredProduct: 'Rice, Ancient Millets & Pulses',
    category: 'Grains & Pulses',
    headline: 'Traditional Basmati & Climate-Resilient Nutri-Cereals',
    description:
      'Long-grain aromatic Basmati 1121 and traditional South Indian Sona Masoori rice, alongside nutrient-dense climate-smart millets (Ragi, Bajra, Foxtail) for bulk institutional procurement.',
    terroirAndCultivation:
      'Himalayan snow-fed river valleys for Basmati; rain-fed tropical red soils for drought-tolerant native ancient millets.',
    productForms: [
      'Basmati Rice (Traditional, 1121 Steam, Sella & Raw)',
      'Non-Basmati Rice (Sona Masoori, Parboiled 5% Broken)',
      'Hulled Ancient Millets (Foxtail, Finger, Pearl)',
      'Graded Pulses (Toor Dal, Chana Dal)',
    ],
    targetMarkets: ['Grain Milling & Packaging Brands', 'Ethnic Retail Distributors', 'Government Sourcing & Relief'],
    image: grainsImg,
    coordinates: { x: 35, y: 28 }, // North India
    activeStatus: 'potential-corridor',
  },
];

/**
 * PHASE 4: 5 Distinct Turmeric Product Forms
 */
export const turmericProductForms: TurmericFormDetail[] = [
  {
    id: 'whole-turmeric',
    formNumber: '01',
    name: 'WHOLE TURMERIC',
    subtitle: 'Fresh Rhizomes & Dried Fingers',
    headline: 'From Erode & Salem: Cured, Graded Rhizomes with High Curcumin Density',
    description:
      'Whole turmeric fingers and rhizomes harvested from the Bhavani and Cauvery river basins in Tamil Nadu. Sun-cured in traditional boiling and drying yards, mechanically polished or unpolished according to buyer specifications.',
    origin: {
      state: 'Tamil Nadu',
      regions: ['Erode', 'Salem'],
      country: 'India',
    },
    varieties: ['Erode Local Finger', 'Salem Double Polished', 'Bulb / Gatta Turmeric', 'Lakadong (on request)'],
    availableGrades: [
      'Finger Grade 1 (Length: 5-7 cm, Thickness: 1.2-1.8 cm)',
      'Finger Grade 2 (Length: 3-5 cm)',
      'Bulb Grade (Round solid rhizome roots)',
      'Polished (Friction rubbed for bright clean skin)',
      'Unpolished (Natural protective husk intact)',
    ],
    specifications: {
      'Curcumin Content': '3.0% – 5.5% (HPLC tested per lot)',
      'Moisture Content': 'Maximum 10.0% – 11.0%',
      'Foreign Matter': 'Max 0.5% (Machine cleaned)',
      'Defective Fingers': 'Max 2.0% – 3.0%',
      'Total Ash': 'Max 7.0%',
      'Acid Insoluble Ash': 'Max 1.0%',
      'Lead Chromate': 'Strictly Absent / Negative',
      'Aflatoxin B1': 'Within EU/US Limits (< 5 ppb)',
    },
    packagingOptions: [
      {
        type: 'bulk',
        sizes: ['25 kg', '50 kg'],
        material: 'High-density Jute sacks with food-grade inner poly liner',
        barrierProps: 'Breathable outer with moisture barrier protection',
      },
      {
        type: 'bulk',
        sizes: ['25 kg', '50 kg'],
        material: 'PP Woven Bags with UV stabilization & inner HDPE liner',
        barrierProps: 'Durable tear-resistant freight protection',
      },
      {
        type: 'custom',
        sizes: ['Buyer specified'],
        material: 'Container bulk liner or custom-stenciled sacks',
        barrierProps: 'Customized for containerized sea shipment',
      },
    ],
    applications: [
      'Industrial Spice Grinders & Milling Facilities',
      'Oleoresin & Curcumin Extraction Plants',
      'Whole Spice Packaging & Re-bagging',
      'Traditional Ayurvedic Ingredient Manufacturing',
    ],
    processingMethod:
      'Traditional water blanching in copper/mild-steel vats, followed by 10-15 days of controlled sun-curing on concrete drying floors, followed by rotary mechanical drum polishing.',
    storageAndShelfLife:
      'Store in a cool, dark, dry warehouse away from direct sunlight. Shelf life: 24 months when sealed in moisture-proof liners.',
    exportDocumentation: [
      'Certificate of Analysis (COA) with HPLC Curcumin Assay',
      'Phytosanitary Certificate issued by Plant Quarantine of India',
      'Spices Board Certificate of Origin',
      'Fumigation Certificate (Methyl Bromide / Phosphine)',
      'Non-GMO & Heavy Metal Declaration',
    ],
    regulatoryAndSafetyNotes:
      'Agricultural raw material for further processing. Meets Spices Board of India export benchmarks and Codex Alimentarius guidelines.',
    image: turmericImg,
    sampleAvailable: true,
    minOrderQuantity: '5 Metric Tonnes (FCL 20ft container loads preferred)',
  },
  {
    id: 'turmeric-powder',
    formNumber: '02',
    name: 'TURMERIC POWDER',
    subtitle: 'Cold-Milled Pure Spices & Extract Grade',
    headline: 'Micro-Pulverized, Vibrant Golden-Yellow Powder with Verified HPLC Assay',
    description:
      'Ground from thoroughly de-stoned, metal-detected Erode turmeric fingers using low-temperature hammer mills to preserve volatile aromatic oils and natural active curcuminoids.',
    origin: {
      state: 'Tamil Nadu',
      regions: ['Erode', 'Salem'],
      country: 'India',
    },
    varieties: ['Standard Culinary Grade (2.5% Curcumin)', 'Premium High-Curcumin Grade (3.5% - 5.0%+ Curcumin)', 'Ultra-Fine Extract Grade'],
    availableGrades: ['60 Mesh (Standard Culinary)', '80-100 Mesh (Fine Food Industry)', 'Micro-fine (Industrial Blend)'],
    specifications: {
      'Mesh Granularity': '95% passing through 60 – 100 mesh sieve',
      'Curcumin Content': '2.5% to 5.0%+ (Calibrated to order)',
      'Moisture Content': 'Maximum 9.0% – 10.0%',
      'Total Ash': 'Max 7.0%',
      'Acid Insoluble Ash': 'Max 1.0%',
      'Starch Adulteration': 'Negative (Microscopic verification)',
      'Salmonella': 'Absent in 25g (PCR tested)',
      'E. Coli': 'Absent (< 10 CFU/g)',
      'Pesticide Multi-Residue': 'Compliant with destination country MRLs',
    },
    packagingOptions: [
      {
        type: 'bulk',
        sizes: ['10 kg', '20 kg', '25 kg'],
        material: 'Multi-wall Kraft paper sacks with food-grade heat-sealed LDPE liner',
        barrierProps: 'High puncture resistance & aroma barrier',
      },
      {
        type: 'retail',
        sizes: ['100 g', '250 g', '500 g', '1 kg'],
        material: 'Multi-layer laminated stand-up pouches with zip lock',
        barrierProps: 'Oxygen & light barrier to prevent curcumin photo-oxidation',
      },
      {
        type: 'custom',
        sizes: ['Buyer custom sizes'],
        material: 'Private label pouches with custom printing and barcoding',
        barrierProps: 'Retail ready for global supermarket distribution',
      },
    ],
    applications: [
      'Food Processing & Curry Powder Manufacturing',
      'Snack Foods, Savoury Seasonings & Coatings',
      'Ready-to-Eat & Ready-to-Cook Formulations',
      'Beverage Blends & Golden Milk Preparations',
    ],
    processingMethod:
      'De-stoning -> Magnetic separation -> Two-stage cold hammer milling -> Air classification sifting -> Metal detection -> Automated nitrogen-flushed packaging.',
    storageAndShelfLife:
      'Store below 25°C in a dry environment. Protect from light exposure. Shelf life: 18 months.',
    exportDocumentation: [
      'Certificate of Analysis (COA) with HPLC Assay',
      'Microbiological Screening Report (NABL Accredited)',
      'Heavy Metals & Aflatoxin Test Report',
      'FSSAI India Food Safety Export Certificate',
      'Certificate of Origin & Packing List',
    ],
    regulatoryAndSafetyNotes:
      'Food-grade ingredient. Free from artificial colorants, synthetic curcumin, or foreign starches.',
    image: foodProcessingImg,
    sampleAvailable: true,
    minOrderQuantity: '1 Metric Tonne (Consolidated LCL or FCL)',
  },
  {
    id: 'turmeric-paste',
    formNumber: '03',
    name: 'TURMERIC PASTE',
    subtitle: 'Processed Preparations & Culinary Concentrates',
    headline: 'Wet-Milled, Aseptically Prepared Turmeric Bases for Industrial Food Service',
    description:
      'Formulated from steam-cleaned, peeled whole turmeric rhizomes wet-ground into a silky, emulsified paste. Designed for commercial kitchens, sauce formulators, and beverage manufacturers requiring instant dispersion without grittiness.',
    origin: {
      state: 'Tamil Nadu',
      regions: ['Erode', 'Coimbatore Processing Facilities'],
      country: 'India',
    },
    varieties: ['Pure Single-Origin Turmeric Paste', 'Acidified Ambient-Stable Turmeric Paste', 'Turmeric-Ginger-Garlic Master Blends'],
    availableGrades: ['Food Service Smooth (Particle size < 50 microns)', 'Culinary Coarse (Homestyle texture)'],
    specifications: {
      'Ingredient Composition': 'Pure Turmeric Rhizome (85-95%), Water, Citric Acid / Sea Salt (as specified)',
      'Total Soluble Solids (Brix)': '18° – 24° Brix',
      'pH Value': '3.8 – 4.2 (Controlled for microbial stability)',
      'Moisture Content': '72.0% – 78.0%',
      'Viscosity': 'Thixotropic, pumpable paste consistency',
      'Total Plate Count': '< 5,000 CFU/g',
      'Yeast & Mould': '< 100 CFU/g',
      'Preservatives': 'Sodium Benzoate / Potassium Sorbate (Optional or Preservative-Free Aseptic)',
    },
    packagingOptions: [
      {
        type: 'bulk',
        sizes: ['5 kg', '10 kg', '20 kg'],
        material: 'Food-grade HDPE drums and buckets with tamper-evident seal',
        barrierProps: 'Airtight, acid-resistant culinary containment',
      },
      {
        type: 'bulk',
        sizes: ['200 kg'],
        material: 'Aseptic bag-in-drum for industrial manufacturing',
        barrierProps: 'Sterile barrier permitting 12-month ambient transport',
      },
      {
        type: 'retail',
        sizes: ['200 g', '350 g', '500 g'],
        material: 'Glass jars or squeeze pouches with EVOH barrier layer',
        barrierProps: 'Retail consumer friendly',
      },
    ],
    applications: [
      'Commercial Curry Pastes & Sauce Bases',
      'Ready Meal Manufacturing',
      'Beverage & Cold-Pressed Wellness Drink Manufacturing',
      'QSR & Industrial Catering Central Kitchens',
    ],
    processingMethod:
      'Peeled rhizome washing -> Thermal steam blanching -> Micro-colloid wet milling -> Thermal pasteurization -> Hot filling or aseptic packaging -> Rapid chill down.',
    storageAndShelfLife:
      'Ambient pasteurized: 12 months unopened at < 25°C. Refrigerate once opened. Cold-chain chilled variant: 6 months at 2°C – 6°C.',
    exportDocumentation: [
      'Commercial COA with pH & Brix verification',
      'Thermal Process Sterility Certificate',
      'FSSAI India Food Safety Certificate',
      'Allergen & Preservative Declaration',
    ],
    regulatoryAndSafetyNotes:
      'Food-grade product. Formulations customizable to meet destination market food-additive and preservation guidelines.',
    image: bannerImg,
    sampleAvailable: true,
    minOrderQuantity: '500 kg',
  },
  {
    id: 'turmeric-capsules',
    formNumber: '04',
    name: 'TURMERIC CAPSULES',
    subtitle: 'Standardized Dietary Supplement Formats',
    headline: 'Encapsulated High-Purity Curcumin Extract Formulations for Private Brand Supplement Lines',
    description:
      'Standardized turmeric extract powder encapsulated in vegetarian (HPMC) or bovine gelatin capsules. Formulated with optional Piperine (black pepper extract) to enhance bio-absorption. Packaged under clean-room conditions for global nutritional brands.',
    origin: {
      state: 'Tamil Nadu & Karnataka',
      regions: ['Erode Sourcing', 'Bangalore/Chennai Cleanroom Facilities'],
      country: 'India',
    },
    varieties: ['Pure Turmeric Rhizome Powder Capsule (500mg)', 'Standardized 95% Curcuminoid Extract + Bioperine (750mg)', 'Turmeric + Ginger Synergy Formula'],
    availableGrades: ['Size 00 Vegetarian HPMC Shells', 'Size 0 Bovine Gelatin Shells'],
    specifications: {
      'Curcuminoid Concentration': 'Standardized to 95% Curcuminoids (or 100% pure whole-root powder)',
      'Fill Weight': '500 mg or 750 mg per capsule (± 3% weight variation)',
      'Disintegration Time': '< 15 minutes (in simulated gastric fluid)',
      'Heavy Metals': 'Lead < 0.5 ppm, Cadmium < 0.3 ppm, Mercury < 0.1 ppm, Arsenic < 0.5 ppm',
      'Microbiological Limits': 'USP <2021> & <2022> compliant for dietary supplements',
      'Solvent Residue': 'USP <467> compliant (No toxic extraction solvents)',
    },
    packagingOptions: [
      {
        type: 'bulk',
        sizes: ['10,000 capsules', '50,000 capsules'],
        material: 'Food-grade double PE liners inside corrugated shipper drums',
        barrierProps: 'Desiccant sealed for wholesale encapsulation brands',
      },
      {
        type: 'retail',
        sizes: ['60 capsules', '90 capsules', '120 capsules'],
        material: 'Amber PET or HDPE bottles with induction seal & child-resistant cap',
        barrierProps: 'Moisture and light secure retail presentation',
      },
      {
        type: 'custom',
        sizes: ['Custom blister packs'],
        material: 'Alu-Alu or PVC/PVDC blister strips with carton packaging',
        barrierProps: 'Pharmacy grade unit dose presentation',
      },
    ],
    applications: [
      'Dietary Supplement Brands',
      'Sports Nutrition & Joint Wellness Products',
      'Private Label Health & Wellness Portfolios',
      'Pharmacy & Health Store Distribution',
    ],
    processingMethod:
      'Supercritical CO2 / ethanol extraction -> Vacuum drying -> Standardization -> Homogeneous blending with flow agents -> Precision automated encapsulation -> Metal check -> Polishing -> Counting and bottling.',
    storageAndShelfLife:
      'Store in tightly closed container in a cool, dry place away from moisture and heat. Shelf life: 24 months.',
    exportDocumentation: [
      'Comprehensive Certificate of Analysis (COA)',
      'Heavy Metals & Solvent Residue Testing Report',
      'Microbiological Assay Certificate',
      'Certificate of Free Sale (for food supplements)',
      'Vegetarian / Halal Capsule Shell Statement',
    ],
    regulatoryAndSafetyNotes:
      'IMPORTANT REGULATORY NOTICE: Offered strictly as a food/dietary supplement ingredient and private-label format. AURA makes NO medical, therapeutic, disease-prevention, or drug treatment claims. Destination-market supplement classification must be verified by the buyer.',
    image: nutraceuticalsImg,
    sampleAvailable: true,
    minOrderQuantity: '10,000 capsules (Bulk) or 1,000 bottles (Private Label)',
  },
  {
    id: 'turmeric-facepack',
    formNumber: '05',
    name: 'TURMERIC FACE PACK & PERSONAL CARE',
    subtitle: 'Cosmetic Preparations & Kasturi Manjal',
    headline: 'Wild Aromatic & Non-Staining Curcuma Aromatica Formulations for Beauty Brands',
    description:
      'Ethically sourced Kasturi Manjal (Curcuma Aromatica) and cosmetic-grade Curcuma Longa micro-milled specifically for external skincare applications. Naturally non-staining with a distinctive camphoraceous fragrance, ideal for clean beauty formulations.',
    origin: {
      state: 'Tamil Nadu & Kerala',
      regions: ['Western Ghats Foothills', 'Salem'],
      country: 'India',
    },
    varieties: ['Pure Kasturi Manjal (Curcuma Aromatica)', 'Turmeric & Multani Mitti Face Pack Blend', 'Turmeric & Sandalwood Cleansing Powder'],
    availableGrades: ['Cosmetic Ultra-Fine (120+ mesh silk-touch powder)', 'Dry Herbal Bath Scrubs'],
    specifications: {
      'Ingredient Composition': '100% Wild Turmeric (Curcuma Aromatica) / Custom cosmetic botanical blend',
      'Particle Granularity': '100% passes 120 mesh (gentle non-abrasive skin application)',
      'Skin Staining Profile': 'Significantly reduced skin staining compared to Curcuma Longa',
      'Moisture Content': 'Maximum 8.0%',
      'Heavy Metal Screen': 'Cosmetics Directive compliant (Pb < 2ppm, As < 1ppm, Hg < 0.1ppm)',
      'Total Aerobic Microbial Count': '< 500 CFU/g (Clean cosmetics threshold)',
      'Candida Albicans': 'Absent',
      'Pseudomonas Aeruginosa': 'Absent',
    },
    packagingOptions: [
      {
        type: 'bulk',
        sizes: ['10 kg', '25 kg'],
        material: 'Fibre drums with double polyethylene anti-static liners',
        barrierProps: 'Aroma-sealed industrial personal care packaging',
      },
      {
        type: 'retail',
        sizes: ['100 g', '200 g', '250 g'],
        material: 'Matte-finish stand-up kraft pouches or frosted cosmetic jars',
        barrierProps: 'Aesthetic luxury retail finish with resealable closure',
      },
      {
        type: 'custom',
        sizes: ['Buyer custom sizes'],
        material: 'Full private label cosmetic packaging with regulatory ingredient disclosures',
        barrierProps: 'Custom retail boxed presentation',
      },
    ],
    applications: [
      'Facial Masks & Exfoliating Cleansers',
      'Ayurvedic Ubtan & Body Polish Formulations',
      'Soap & Shampoo Bar Formulations',
      'Spa & Professional Esthetician Powders',
    ],
    processingMethod:
      'Careful sorting of wild rhizomes -> Low-temperature washing -> Dehydration -> Cold ultra-micronization -> Air classifying -> UV sanitation -> Packaged in clean environment.',
    storageAndShelfLife:
      'Store in a cool, dark place. Keep container tightly sealed to preserve volatile essential oils. Shelf life: 24 months.',
    exportDocumentation: [
      'Cosmetic Ingredient Specification Sheet (TDS)',
      'Safety Data Sheet (SDS / MSDS)',
      'Cosmetic Microbiological Screening Certificate',
      'Heavy Metals Screening Certificate',
      'Non-Animal Testing (Cruelty-Free) Declaration',
    ],
    regulatoryAndSafetyNotes:
      'IMPORTANT REGULATORY NOTICE: Strictly for topical external cosmetic and personal care application. Non-food grade. No medicinal, dermatological treatment, or therapeutic disease claims are made.',
    image: personalCareImg,
    sampleAvailable: true,
    minOrderQuantity: '250 kg (Bulk) or 1,000 units (Custom Packaging)',
  },
];

/**
 * PHASE 7: Packaging Tiers & Flexible Private Label Options
 */
export const agroPackagingTiers: AgroPackagingOption[] = [
  {
    id: 'bulk-packaging',
    tier: 'bulk',
    title: 'Bulk Industrial Packaging',
    subtitle: 'Containerized Shipments for Importers & Processing Facilities',
    sizes: ['10 kg', '20 kg', '25 kg', '50 kg', '500 kg – 1,000 kg (FIBC Jumbo Bags)'],
    materials: [
      'Multi-wall virgin Kraft paper sacks with heat-sealed PE barrier liners',
      'High-tensile PP woven sacks with internal LDPE food-grade liners',
      'Traditional breathable high-grade Jute / Hessian sacks (for whole rhizomes)',
      'Heavy-duty corrugated master export cartons with strapping',
    ],
    recommendedProducts: [
      'Whole Turmeric Fingers',
      'Black Peppercorns',
      'Dried Red Chillies',
      'Turmeric & Spice Powders',
      'Grains, Rice & Pulses',
    ],
    description:
      'Built for maximum cargo density, mechanical durability, and moisture protection during long-haul sea freight in dry or reefer containers.',
    customizationDetails: [
      'Custom stenciling with lot numbers, batch codes, net weight & destination country marks',
      'Desiccant packs and oxygen absorbers included for high-humidity transits',
      'Fumigation certificates and container seals compliant with port customs',
    ],
  },
  {
    id: 'retail-packaging',
    tier: 'retail',
    title: 'Retail-Ready Packaging',
    subtitle: 'Ready for Supermarket Shelves & Brand Distribution',
    sizes: ['100 g', '200 g', '250 g', '500 g', '1 kg', '2 kg'],
    materials: [
      'Multi-layer barrier stand-up pouches (Doypack) with resealable zippers',
      'Matte / gloss finish foil-laminated barrier pouches (light & moisture proof)',
      'Clear PET food jars with induction heat seals and screw caps',
      'Vacuum-sealed pouches for premium freshness retention',
    ],
    recommendedProducts: [
      'Turmeric Powder',
      'Cardamom Pods & Seeds',
      'Chilli Powder & Flakes',
      'Moringa Powder',
      'Ancient Millets & Basmati Rice',
    ],
    description:
      'High-barrier consumer packs that prevent photo-oxidation of active curcumin and preserve delicate spice aromas.',
    customizationDetails: [
      'Euro-slot punch options for retail hanging displays',
      'Transparent window options for visual product confirmation',
      'Nitrogen flushing capabilities for extended shelf stability',
    ],
  },
  {
    id: 'private-label',
    tier: 'private-label',
    title: 'Private Label & Custom Branding',
    subtitle: 'Your Brand. Your Visual Identity. Your Market.',
    sizes: ['Bespoke sizes according to brand specifications'],
    materials: [
      'Custom rotogravure or digital printed flexible packaging',
      'Branded outer corrugated retail display cartons (shelf-ready packaging)',
      'Custom labeling compliant with destination country food labeling laws',
      'Bottles, jars, or bespoke canister formats',
    ],
    recommendedProducts: [
      'Complete Turmeric Product Range',
      'Single-Origin Spice Collections',
      'Nutraceutical Turmeric Capsules',
      'Cosmetic Face Packs',
    ],
    description:
      'End-to-end contract packaging enabling international distributors and brand owners to launch high-margin product lines without manufacturing overhead.',
    customizationDetails: [
      'Multilingual ingredient disclosures (English, Arabic, French, German, Spanish)',
      'Nutritional facts panel formatted to US FDA, EU, or GCC standards',
      'UPC / EAN barcode integration and batch serialization',
    ],
  },
];

/**
 * PHASE 8: 5-Step Quality Assurance Framework
 */
export const qualityAssuranceSteps: QualityStep[] = [
  {
    step: '01',
    title: 'Origin Selection & Grower Auditing',
    tagline: 'Direct Regional Sourcing',
    description:
      'We partner with established grower clusters and primary mandis across Erode, Salem, Guntur, and the Cardamom Hills. Farms and primary consolidation hubs are evaluated for harvesting maturity and natural curing integrity.',
    parameters: ['Varietal verification', 'Post-harvest handling check', 'Visual physical inspection'],
    documentation: ['Origin traceability notes', 'Supplier declaration'],
  },
  {
    step: '02',
    title: 'Physical Grading & Sorting',
    tagline: 'Dimensional & Aesthetic Calibration',
    description:
      'Raw agricultural lots undergo mechanical cleaning, de-stoning, aspiration, and optical sorting to remove foreign matter, immature seeds, broken fingers, and stem remnants.',
    parameters: ['Mesh granularity', 'Bulk density (g/L)', 'Defect percentage', 'Foreign matter limit'],
    documentation: ['Internal grading record', 'Particle size analysis'],
  },
  {
    step: '03',
    title: 'Third-Party Laboratory Testing',
    tagline: 'Accredited Analytical Verification',
    description:
      'Representative composite samples are tested at ISO 17025 accredited laboratories (NABL / Spices Board approved) to quantify active chemical markers and confirm chemical safety.',
    parameters: [
      'HPLC Curcuminoid / Piperine / Capsaicin assay',
      'Moisture & Volatile oil levels',
      'Heavy metals (Pb, Cd, As, Hg)',
      'Pesticide multi-residue screen (200+ compounds)',
      'Microbiological panel (Salmonella, E. coli, Yeast & Mould)',
    ],
    documentation: ['Certificate of Analysis (COA)', 'NABL Accredited Test Reports'],
  },
  {
    step: '04',
    title: 'Destination Regulatory Alignment',
    tagline: 'International Import Compliance',
    description:
      'Every export order is tailored to the specific regulatory framework of the importing territory—whether US FDA, European Union MRLs, GCC GSO standards, or FSSAI / APEDA guidelines.',
    parameters: ['Aflatoxin / Ochratoxin compliance', 'Food-contact packaging certification', 'Fumigation compliance'],
    documentation: ['Phytosanitary Certificate', 'Certificate of Origin', 'Fumigation Certificate', 'Health Certificate'],
  },
  {
    step: '05',
    title: 'Containerization & Dispatch Logistics',
    tagline: 'Cold-Chain & Dry Container Stowage',
    description:
      'Strict pre-loading container inspection for odour, dryness, and cleanliness. Use of food-grade desiccants, container thermal liners, and temperature data loggers for sensitive reefer shipments.',
    parameters: ['Container seal integrity', 'Pallet strapping & shrink wrapping', 'Reefer setpoint monitoring'],
    documentation: ['Container Inspection Report', 'Bill of Lading', 'Packing List & Commercial Invoice'],
  },
];

/**
 * PHASE 9: 6-Step International B2B Buyer Journey
 */
export const b2bBuyerJourneySteps: BuyerJourneyStep[] = [
  {
    stepNumber: '01',
    name: 'DISCOVER',
    buyerAction: 'Explore agricultural commodities by region of origin, product variety, and target commercial application.',
    auraSupport: 'Comprehensive digital catalog with transparent regional sourcing data and product form profiles.',
    deliverables: ['Regional origin maps', 'Category portfolio reviews', 'Available product form breakdowns'],
  },
  {
    stepNumber: '02',
    name: 'EVALUATE',
    buyerAction: 'Review technical specifications, active compound thresholds, particle sizes, and standard packaging formats.',
    auraSupport: 'Clear technical parameter tables, laboratory assay benchmarks, and food-grade packaging specs.',
    deliverables: ['Technical Data Sheets (TDS)', 'Standard packaging specs', 'Active assay ranges'],
  },
  {
    stepNumber: '03',
    name: 'VALIDATE',
    buyerAction: 'Request representative laboratory samples, Certificate of Analysis (COA), and regulatory documentation.',
    auraSupport: 'Express air dispatch of product samples accompanied by lot-specific test parameters.',
    deliverables: ['Physical sample parcels', 'Accredited lab COAs', 'Pesticide & microbiology reports'],
  },
  {
    stepNumber: '04',
    name: 'CUSTOMISE',
    buyerAction: 'Define target grade, customized curcumin percentage, packaging sizes, private labeling, and delivery terms.',
    auraSupport: 'Technical review of buyer specifications and formulation of tailored packaging / private-label solutions.',
    deliverables: ['Custom packaging mockups', 'Buyer-tailored spec agreement', 'Palletization configuration'],
  },
  {
    stepNumber: '05',
    name: 'REQUEST QUOTATION',
    buyerAction: 'Submit volume requirements, preferred Incoterm (FOB, CIF, CFR, DAP), and destination seaport.',
    auraSupport: 'Calculation of competitive ocean/air freight rates and preparation of formal commercial proforma.',
    deliverables: ['Formal Proforma Invoice (PI)', 'Incoterms 2020 commercial breakdown', 'Production & shipment lead times'],
  },
  {
    stepNumber: '06',
    name: 'COMMERCIAL EXECUTION',
    buyerAction: 'Confirm purchase order, agree on payment instruments (LC / TT), and authorize shipment schedule.',
    auraSupport: 'End-to-end export execution: quality inspection, port customs clearance, and courier dispatch of original shipping documents.',
    deliverables: ['Full export shipping bundle', 'Original Bill of Lading (B/L)', 'Phytosanitary & Origin certificates'],
  },
];
