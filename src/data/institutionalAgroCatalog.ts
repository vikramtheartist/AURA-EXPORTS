import turmericImg from '../assets/images/product_turmeric_1780423510096.png';
import blackPepperImg from '../assets/images/agro_black_pepper.jpg';
import cardamomImg from '../assets/images/agro_cardamom.jpg';
import cuminImg from '../assets/images/agro_cumin.jpg';
import chilliesImg from '../assets/images/agro_chillies.jpg';
import moringaImg from '../assets/images/agro_moringa.jpg';
import grainsImg from '../assets/images/agro_grains.jpg';

export type VerificationStatus =
  | 'VERIFIED'
  | 'PENDING_VERIFICATION'
  | 'BUYER_SPEC_REQUIRED'
  | 'AVAILABLE_ON_REQUEST';

export interface HSNEntry {
  form: string;
  code: string;
  verificationStatus: VerificationStatus;
  note?: string;
}

export interface TechnicalParameterRow {
  parameter: string;
  specification: string;
  testMethodOrEvidence: string;
  status: VerificationStatus;
}

export interface PackagingOption {
  format: string;
  description: string;
  suitability: string;
}

export interface InstitutionalProduct {
  id: string;
  name: string;
  cardTitle: string; // Concise name for front-facing card
  cardDescription: string; // Exactly one concise sentence (15-20 words)
  cardForms: string[]; // Max 3-4 compact labels (+ More)
  category: string;
  subcategory: string;
  botanicalName: string;
  hsnCodes: HSNEntry[];
  origin: {
    country: string;
    state: string;
    regions: string[];
    displayOrigin: string;
  };
  grade: string;
  gradesAvailable: string[];
  image: string;
  availableForms: string[];
  primaryApplications: string[];
  noteOnFormulations?: string;

  // TAB 01: Product Overview & Origin
  overviewDescription: string;

  // TAB 02: Technical & Quality Parameters
  physicalParameters: TechnicalParameterRow[];
  chemicalParameters: TechnicalParameterRow[];
  microbiologicalParameters: TechnicalParameterRow[];
  qualityDocumentationNote: string;

  // TAB 03: Packaging & Logistics
  packagingOptions: PackagingOption[];
  logistics: {
    indicativeMOQ: string;
    containerCapacity: string;
    airFreightOption?: string;
    indicativeDispatch: string;
    portsOfDispatch: string[];
    logisticsDisclaimer: string;
  };

  // TAB 04: Quality Documentation & Export Compliance
  tradeRegulatory: {
    hsnSummary: string;
    exportRegistrations: string[];
    requiredDocumentation: string[];
    destinationComplianceNotes: string[];
    cepaTariffNote?: string;
  };

  // TAB 05: Custom Buyer Requirements
  customRequirements: {
    customGradesSupported: string[];
    specificAssays: string[];
    packagingTailoring: string;
    privateLabelEnquiries: string;
  };

  // Commercial Policy
  commercial: {
    priceVisible: false;
    quotationRequired: true;
    sampleEnquiryEnabled: true;
    ctaLabel: string;
  };
}

export const institutionalAgroProducts: InstitutionalProduct[] = [
  // =========================================================================
  // PRODUCT 01 — SALEM TURMERIC
  // =========================================================================
  {
    id: 'salem-turmeric',
    name: 'Salem Double-Polished Turmeric Fingers',
    cardTitle: 'Salem Turmeric',
    cardDescription: 'Premium Indian turmeric sourced from established Tamil Nadu growing regions, available in multiple grades and processing formats.',
    cardForms: ['Whole Fingers', 'Powder', 'Paste', '+ More'],
    category: 'SPICES & DERIVATIVES',
    subcategory: 'Turmeric',
    botanicalName: 'Curcuma longa',
    hsnCodes: [
      {
        form: 'Whole Fingers',
        code: '09103020',
        verificationStatus: 'PENDING_VERIFICATION',
        note: 'Tariff subject to current Indian Customs classification and product form inspection.',
      },
      {
        form: 'Fine Powder',
        code: '09103030',
        verificationStatus: 'PENDING_VERIFICATION',
      },
    ],
    origin: {
      country: 'India',
      state: 'Tamil Nadu',
      regions: ['Salem', 'Erode'],
      displayOrigin: 'Erode & Salem, Tamil Nadu, India.',
    },
    grade: 'Salem Double-Polished Fingers',
    gradesAvailable: [
      'Salem Double-Polished Fingers',
      'Salem Single-Polished Fingers',
      'Erode Standard Polished Fingers',
      'Unpolished / Rough Natural Fingers',
      'Turmeric Bulbs / Splits (Gatha)',
    ],
    image: turmericImg,
    availableForms: [
      'Whole Turmeric Fingers',
      'Dried Turmeric Fingers',
      'Polished Turmeric',
      'Unpolished Turmeric',
      'Turmeric Powder',
      'Turmeric Paste',
      'Turmeric Capsules (Nutraceutical)',
      'Turmeric Face-Pack Preparations',
    ],
    primaryApplications: [
      'Industrial Grinding & Seasoning Blends',
      'Curcuminoid & Oleoresin Solvent Extraction',
      'Functional Beverages & Golden Milk Formulations',
      'Commercial Food Ingredients & Condiments',
    ],
    overviewDescription:
      'Harvested from the fertile Bhavani and Cauvery river basins in Tamil Nadu, Salem turmeric is celebrated globally for its high rhizome density, brilliant golden-orange core, and high natural curcumin retention. AURA coordinates origin-direct procurement, controlled steam-curing, precision rotary polishing, and customized milling to buyer granulometry.',
    noteOnFormulations:
      'Important Regulatory Notice: Turmeric capsules and face-pack preparations represent distinct product classes governed by separate pharmaceutical, cosmetic and nutraceutical regulations. Food-grade spice specifications do not apply to topical or encapsulated formulations.',
    physicalParameters: [
      {
        parameter: 'Appearance / Form',
        specification: 'Whole, mature, well-cured dried rhizome fingers; deep orange-yellow core',
        testMethodOrEvidence: 'Visual & Physical Inspection',
        status: 'VERIFIED',
      },
      {
        parameter: 'Polishing Grade',
        specification: 'Double-polished, smooth outer epidermal finish without soil residues',
        testMethodOrEvidence: 'Mechanical Rotary Polishing Protocol',
        status: 'VERIFIED',
      },
      {
        parameter: 'Moisture Content',
        specification: 'Maximum 10.0%',
        testMethodOrEvidence: 'AOAC 986.21 / Karl Fischer Titration',
        status: 'VERIFIED',
      },
      {
        parameter: 'Extraneous Foreign Matter',
        specification: 'Below 0.5% (w/w)',
        testMethodOrEvidence: 'ASTA Cleanliness Method 1.0',
        status: 'VERIFIED',
      },
      {
        parameter: 'Defective / Damaged Rhizomes',
        specification: 'Below 2.0%',
        testMethodOrEvidence: 'Manual Inspection per ISO 5564',
        status: 'VERIFIED',
      },
    ],
    chemicalParameters: [
      {
        parameter: 'Curcuminoid Content (Curcumin Assay)',
        specification: '3.5% – 4.5% (Batch-calibrated per buyer specification)',
        testMethodOrEvidence: 'HPLC Assay (ISO 5566 / ASTA 18.0)',
        status: 'VERIFIED',
      },
      {
        parameter: 'Total Ash',
        specification: 'Maximum 7.0%',
        testMethodOrEvidence: 'Muffle Furnace Ashing (ISO 928)',
        status: 'VERIFIED',
      },
      {
        parameter: 'Acid-Insoluble Ash',
        specification: 'Maximum 1.0%',
        testMethodOrEvidence: 'Acid Hydrolysis Assay (ISO 930)',
        status: 'VERIFIED',
      },
      {
        parameter: 'Volatile Essential Oil',
        specification: '3.0% – 4.5% v/w',
        testMethodOrEvidence: 'Clevenger Steam Distillation (ISO 6571)',
        status: 'VERIFIED',
      },
      {
        parameter: 'Heavy Metals (Lead, Cadmium, Arsenic)',
        specification: 'Compliant with destination food safety standards (Pb <2 ppm, Cd <1 ppm)',
        testMethodOrEvidence: 'ICP-MS Laboratory Assay',
        status: 'BUYER_SPEC_REQUIRED',
      },
      {
        parameter: 'Synthetic Dyes (Metanil Yellow, Sudan I-IV)',
        specification: 'Negative / Non-detected (100% natural, adulteration free)',
        testMethodOrEvidence: 'LC-MS/MS Screen',
        status: 'VERIFIED',
      },
    ],
    microbiologicalParameters: [
      {
        parameter: 'Total Plate Count (TPC)',
        specification: '<100,000 CFU/g (Steam sterilization available for lower limits)',
        testMethodOrEvidence: 'BAM Chapter 3 / ISO 4833-1',
        status: 'AVAILABLE_ON_REQUEST',
      },
      {
        parameter: 'Yeast & Mould',
        specification: '<1,000 CFU/g',
        testMethodOrEvidence: 'ISO 21527-2',
        status: 'AVAILABLE_ON_REQUEST',
      },
      {
        parameter: 'Salmonella spp.',
        specification: 'Absent in 25g',
        testMethodOrEvidence: 'ISO 6579 / FDA-BAM',
        status: 'VERIFIED',
      },
      {
        parameter: 'Escherichia coli',
        specification: '<10 CFU/g / Absent',
        testMethodOrEvidence: 'ISO 16649-2',
        status: 'VERIFIED',
      },
    ],
    qualityDocumentationNote:
      'All technical specifications are established per buyer contract. Independent laboratory Certificates of Analysis (NABL / SGS / Eurofins on request) accompany confirmed commercial shipments.',
    packagingOptions: [
      {
        format: '25 kg Multi-layer Kraft Paper Bags',
        description: 'Multi-ply paper sacks with internal moisture-barrier polyethylene liner.',
        suitability: 'Food ingredient manufacturers, spice grinders, retail repacking.',
      },
      {
        format: '50 kg Multi-layer Kraft Paper Bags',
        description: 'Heavy-duty multi-wall bags engineered for international maritime transport.',
        suitability: 'Bulk industrial milling and extraction facilities.',
      },
      {
        format: 'Food-grade HDPE Woven Bags',
        description: 'High-density polyethylene woven outer with sealed inner poly liner.',
        suitability: 'Traditional agricultural commodity trading and long-distance container freight.',
      },
      {
        format: 'Custom Bulk & Private-Label Packaging',
        description: 'Bulk FIBC jumbo totes (500kg–1000kg) or pre-printed buyer brand retail pouches.',
        suitability: 'Private-label brands and large-scale industrial contract manufacturing.',
      },
    ],
    logistics: {
      indicativeMOQ: '5 Metric Tons (Consolidated container trials subject to feasibility)',
      containerCapacity:
        'Indicative 18 MT net per 20-foot FCL container (Subject to bag type, cargo density, and carrier limits)',
      indicativeDispatch:
        '2–3 weeks from confirmed order, export documentation, and cargo availability',
      portsOfDispatch: ['Chennai Port (INMAA)', 'Tuticorin Port (INTUT)', 'Cochin Port (INCOK)'],
      logisticsDisclaimer:
        'Logistics parameters are planning estimates. Actual container payload, freight transit, and vessel allocations depend on carrier schedule and destination import protocols.',
    },
    tradeRegulatory: {
      hsnSummary: '0910.30.20 (Whole Rhizome Fingers) · 0910.30.30 (Ground Powder)',
      exportRegistrations: [
        'Spices Board of India (Registered Exporter)',
        'FSSAI Central Export License',
        'APEDA Registered Exporter Partner',
      ],
      requiredDocumentation: [
        'Commercial Invoice & Packing List',
        'Bill of Lading (Clean on Board)',
        'Certificate of Origin (Preferential / Non-Preferential)',
        'Phytosanitary Certificate (Plant Quarantine Authority of India)',
        'Batch-specific Certificate of Analysis (COA)',
      ],
      destinationComplianceNotes: [
        'Compliant with US-FDA Cleanliness Specifications for Spices.',
        'Pesticide residue testing aligned with European Commission Regulation (EC) 396/2005 on buyer contract.',
        'Gulf Standards Organization (GSO) spice quality compliance.',
      ],
      cepaTariffNote:
        'For UAE trade: Preferential tariff treatment under the India-UAE Comprehensive Economic Partnership Agreement (CEPA) is subject to product-specific rules of origin, verified Certificate of Origin, and destination customs eligibility. Preferential duty is not universal or automatic.',
    },
    customRequirements: {
      customGradesSupported: [
        'Special Curcumin Selection (Min 4.5%–5.0%+ Assay)',
        'Low-Temperature Cold-Milled Granulometry (60–100 Mesh)',
        'Kasturi Manjal / Wild Cosmetic Formulations',
      ],
      specificAssays: [
        'Batch HPLC Curcuminoid Fractionation (Curcumin, Demethoxycurcumin, Bisdemethoxycurcumin)',
        'Microbiological sterilization via steam treatment',
      ],
      packagingTailoring:
        'Custom pre-printed multi-wall kraft bags, pillow retail packs (100g–1kg), and food-service foil barrier buckets.',
      privateLabelEnquiries:
        'Full private-label capability supported with barcode integration, multilingual labelling, and batch serialization.',
    },
    commercial: {
      priceVisible: false,
      quotationRequired: true,
      sampleEnquiryEnabled: true,
      ctaLabel: 'REQUEST TURMERIC QUOTATION',
    },
  },

  // =========================================================================
  // PRODUCT 02 — MALABAR BLACK PEPPER
  // =========================================================================
  {
    id: 'malabar-black-pepper',
    name: 'Malabar & Tellicherry Garbled Black Pepper',
    cardTitle: 'Malabar Black Pepper',
    cardDescription: 'Select Indian black pepper available in recognised grades for international spice trading and food ingredient applications.',
    cardForms: ['MG-1', 'TGSEB', 'Powder'],
    category: 'SPICES & SEASONINGS',
    subcategory: 'Black Pepper',
    botanicalName: 'Piper nigrum',
    hsnCodes: [
      {
        form: 'Garbled Whole',
        code: '09041110',
        verificationStatus: 'PENDING_VERIFICATION',
        note: 'Classification subject to current tariff verification and processing status.',
      },
      {
        form: 'Ungarbled Whole',
        code: '09041120',
        verificationStatus: 'PENDING_VERIFICATION',
      },
      {
        form: 'Ground Pepper',
        code: '09041200',
        verificationStatus: 'PENDING_VERIFICATION',
      },
    ],
    origin: {
      country: 'India',
      state: 'Kerala',
      regions: ['Idukki', 'Wayanad', 'Malabar Coast'],
      displayOrigin: 'Idukki & Wayanad, Kerala, India.',
    },
    grade: 'MG-1 (Malabar Garbled) / TGSEB (Tellicherry Extra Bold)',
    gradesAvailable: [
      'TGSEB — Tellicherry Garbled Special Extra Bold (4.75mm+)',
      'TGM — Tellicherry Garbled Extra Bold',
      'MG-1 — Malabar Garbled Grade 1 (550 g/L)',
      'Commercial 500GL Garbled',
      'Coarse Ground / Cracked Black Pepper',
    ],
    image: blackPepperImg,
    availableForms: [
      'Whole Garbled Peppercorns',
      'Whole Ungarbled Peppercorns',
      'Coarse Ground / Cracked Black Pepper',
      'Fine Ground Black Pepper Powder',
      'Steam-Sterilized Whole Peppercorns',
    ],
    primaryApplications: [
      'Meat Processing, Cured Delicatessen & Charcuterie',
      'Table Condiment Mills & Gourmet Culinary Packing',
      'Oleoresin & Essential Oil Supercritical Extraction',
      'Industrial Seasoning Formulations',
    ],
    overviewDescription:
      'Grown along the slopes of the Western Ghats in Kerala, Indian black pepper is celebrated as the historic benchmark for piperine pungency and aromatic volatile terpenes. Sourced from smallholder estates and farmer cooperatives in Idukki and Wayanad, mechanically cleaned over vibrating air separators, and calibrated to density and berry diameter.',
    physicalParameters: [
      {
        parameter: 'Bulk Density (GL)',
        specification: '550 g/L – 580 g/L (Calibrated per grade requirement)',
        testMethodOrEvidence: 'Gravimetric Volumetric Mass Cylinder',
        status: 'VERIFIED',
      },
      {
        parameter: 'Berry Diameter / Sizing',
        specification: 'TGSEB: >4.75 mm (Sieve retained) · MG-1: Uniform machine graded',
        testMethodOrEvidence: 'Mechanical Sieve Grading',
        status: 'VERIFIED',
      },
      {
        parameter: 'Moisture Content',
        specification: 'Maximum 11.0% (w/w)',
        testMethodOrEvidence: 'Toluene Distillation (ISO 939 / ASTA 2.0)',
        status: 'VERIFIED',
      },
      {
        parameter: 'Extraneous Matter / Foreign Material',
        specification: 'Below 0.5% (w/w)',
        testMethodOrEvidence: 'ASTA Cleanliness Standard Method 1.0',
        status: 'VERIFIED',
      },
      {
        parameter: 'Light / Immature Berries',
        specification: 'Below 2.0% (w/w)',
        testMethodOrEvidence: 'Water Flotation Method (ISO 959-1)',
        status: 'VERIFIED',
      },
      {
        parameter: 'Pinheads',
        specification: 'Below 0.5%',
        testMethodOrEvidence: 'Sieve Separation',
        status: 'VERIFIED',
      },
    ],
    chemicalParameters: [
      {
        parameter: 'Piperine Content',
        specification: '4.5% – 5.5% (w/w)',
        testMethodOrEvidence: 'HPLC / Spectrophotometric Assay (ISO 5564)',
        status: 'VERIFIED',
      },
      {
        parameter: 'Volatile Essential Oil',
        specification: '2.5% – 3.0% v/w minimum',
        testMethodOrEvidence: 'Steam Distillation (ISO 6571)',
        status: 'VERIFIED',
      },
      {
        parameter: 'Total Ash',
        specification: 'Maximum 7.0%',
        testMethodOrEvidence: 'ISO 928',
        status: 'VERIFIED',
      },
      {
        parameter: 'Acid-Insoluble Ash',
        specification: 'Maximum 1.0%',
        testMethodOrEvidence: 'ISO 930',
        status: 'VERIFIED',
      },
      {
        parameter: 'Non-Volatile Ether Extract',
        specification: 'Minimum 6.0%',
        testMethodOrEvidence: 'Soxhlet Extraction (ISO 1108)',
        status: 'VERIFIED',
      },
    ],
    microbiologicalParameters: [
      {
        parameter: 'Total Plate Count',
        specification: '<50,000 CFU/g (Treated) / Natural lot typical <200,000 CFU/g',
        testMethodOrEvidence: 'ISO 4833-1',
        status: 'AVAILABLE_ON_REQUEST',
      },
      {
        parameter: 'Salmonella spp.',
        specification: 'Absent in 25g',
        testMethodOrEvidence: 'ISO 6579 / FDA-BAM',
        status: 'VERIFIED',
      },
      {
        parameter: 'Escherichia coli',
        specification: '<10 CFU/g',
        testMethodOrEvidence: 'ISO 16649-2',
        status: 'VERIFIED',
      },
      {
        parameter: 'Yeast & Mould',
        specification: '<1,000 CFU/g',
        testMethodOrEvidence: 'ISO 21527-2',
        status: 'AVAILABLE_ON_REQUEST',
      },
    ],
    qualityDocumentationNote:
      'Harvested from Western Ghats plantations, cured in traditional flue or sun-drying yards, and mechanically cleaned over gravity separators.',
    packagingOptions: [
      {
        format: '25 kg Multi-wall Kraft Paper Sacks',
        description: 'Multi-layer kraft paper with internal barrier liner preventing essential oil evaporation.',
        suitability: 'Spice packers, seasoning blenders, and European food manufacturers.',
      },
      {
        format: 'Food-grade Jute Bags with Poly Liner',
        description: 'Breathable outer jute with food-grade internal polyethylene liner.',
        suitability: 'Ocean container bulk transport and wholesale spice trade.',
      },
      {
        format: 'Custom Bulk Container Liners (FIBC)',
        description: '500kg to 1000kg polypropylene big-bags engineered for high volume discharging.',
        suitability: 'Large-scale industrial oleoresin and spice extraction plants.',
      },
    ],
    logistics: {
      indicativeMOQ: '500 kg for sample / consolidated LCL orders; 15 MT for FCL export',
      containerCapacity:
        'Indicative planning capacity: 15 MT net per 20-foot FCL container (Subject to density & packing configuration)',
      indicativeDispatch: '2–3 weeks from confirmed contract and availability',
      portsOfDispatch: ['Cochin Port (INCOK)', 'Chennai Port (INMAA)'],
      logisticsDisclaimer:
        'All container loading values and transit estimates are indicative and subject to confirmed carrier space and packaging type.',
    },
    tradeRegulatory: {
      hsnSummary: '0904.11.10 (Garbled) · 0904.11.20 (Ungarbled) · 0904.12.00 (Ground)',
      exportRegistrations: [
        'Spices Board of India (Registered Exporter)',
        'FSSAI Export License',
      ],
      requiredDocumentation: [
        'Commercial Invoice & Packing List',
        'Bill of Lading',
        'Certificate of Origin',
        'Phytosanitary Certificate',
        'Batch COA (Piperine, Bulk Density, Moisture)',
        'Steam Sterilization Certificate (where requested)',
      ],
      destinationComplianceNotes: [
        'Compliant with European Spice Association (ESA) quality criteria.',
        'American Spice Trade Association (ASTA) cleanliness compliant.',
      ],
      cepaTariffNote:
        'For UAE trade: Preferential tariff eligibility under CEPA requires verification of tariff subheading and qualifying rules of origin documentation.',
    },
    customRequirements: {
      customGradesSupported: [
        'Calibrated Bulk Density Lots (500GL to 580GL+)',
        'Crack-Grade Coarse Fractions (10–24 Mesh)',
        'HTST Continuous Steam Sterilized Whole Peppercorns',
      ],
      specificAssays: [
        'Volatile Terpene Profiling (Pinene, Caryophyllene, Limonene)',
        'Pesticide MRL Compliance Screen (EU Regulation)',
      ],
      packagingTailoring:
        'Vacuum foil-lined barrier sacks and customer-branded Kraft master shippers.',
      privateLabelEnquiries:
        'Supported for grinder-ready glass jars, pet bottles, and multi-serve culinary packs.',
    },
    commercial: {
      priceVisible: false,
      quotationRequired: true,
      sampleEnquiryEnabled: true,
      ctaLabel: 'REQUEST BLACK PEPPER QUOTATION',
    },
  },

  // =========================================================================
  // PRODUCT 03 — ALLEPPEY GREEN CARDAMOM
  // =========================================================================
  {
    id: 'alleppey-green-cardamom',
    name: 'Alleppey Green Cardamom — Extra Bold',
    cardTitle: 'Alleppey Green Cardamom',
    cardDescription: 'Premium green cardamom sourced from Kerala, available in selected pod sizes and export grades.',
    cardForms: ['Whole Pods', 'Extra Bold', 'Seeds', 'Powder'],
    category: 'SPICES & SEASONINGS',
    subcategory: 'Cardamom',
    botanicalName: 'Elettaria cardamomum',
    hsnCodes: [
      {
        form: 'Whole Pods',
        code: '09083110',
        verificationStatus: 'PENDING_VERIFICATION',
        note: 'Subject to current tariff and commodity classification verification.',
      },
    ],
    origin: {
      country: 'India',
      state: 'Kerala',
      regions: ['Idukki High Ranges', 'Cardamom Hills'],
      displayOrigin: 'Idukki High Ranges, Kerala, India.',
    },
    grade: 'AGEB — Alleppey Green Extra Bold (7–8 mm+)',
    gradesAvailable: [
      'AGEB — Alleppey Green Extra Bold (7.5mm – 8mm+)',
      'AGB — Alleppey Green Bold (7mm – 7.5mm)',
      'AGS — Alleppey Green Superior (6.5mm – 7mm)',
      'Decorticated Cardamom Seeds',
      'Ground Cardamom Powder',
    ],
    image: cardamomImg,
    availableForms: [
      'Whole Dried Green Pods (AGEB Extra Bold)',
      'Whole Dried Green Pods (AGB Bold)',
      'Decorticated Seeds (Cardamom Husk Removed)',
      'Ground Cardamom Powder',
      'Custom Graded Plantation Batches',
    ],
    primaryApplications: [
      'Gourmet Confectionery, Chocolatier & Bakery Ingredients',
      'Traditional Chai, Arabic Gahwa & Specialty Beverage Infusions',
      'Fine Fragrance & Essential Oil Distillation',
      'Middle Eastern Wholesale Commodity Distribution',
    ],
    overviewDescription:
      'Grown at altitudes exceeding 1,000 meters in the misty microclimates of Kerala’s Cardamom Hills, Alleppey Green is universally revered as the "Queen of Spices". Hand-picked at peak physiological maturity, cured in controlled wood-fired flue houses to lock in deep emerald green chlorophyll and pungent sweet-camphorous notes.',
    physicalParameters: [
      {
        parameter: 'Pod Diameter / Size Classification',
        specification: '7.0 mm to 8.0 mm and above (90%+ retained on 7mm round sieve)',
        testMethodOrEvidence: 'Calibrated Sieve Analysis per Spices Board Grade Protocol',
        status: 'VERIFIED',
      },
      {
        parameter: 'Visual Color & Finish',
        specification: 'Natural uniform emerald green; flue cured without synthetic coloring',
        testMethodOrEvidence: 'Visual Grading & Color Spectrophotometry',
        status: 'VERIFIED',
      },
      {
        parameter: 'Moisture Content',
        specification: 'Maximum 10.0% (w/w)',
        testMethodOrEvidence: 'Toluene Distillation (ISO 939)',
        status: 'VERIFIED',
      },
      {
        parameter: 'Empty / Immature / Thrips-Damaged Pods',
        specification: 'Below 1.5% (w/w)',
        testMethodOrEvidence: 'Physical Inspection & Flotation Assay',
        status: 'VERIFIED',
      },
      {
        parameter: 'Extraneous Matter',
        specification: 'Below 0.5%',
        testMethodOrEvidence: 'ISO 927',
        status: 'VERIFIED',
      },
    ],
    chemicalParameters: [
      {
        parameter: 'Volatile Essential Oil Content',
        specification: '6.5% – 8.0% v/w (where verified by lot)',
        testMethodOrEvidence: 'Clevenger Steam Distillation (ISO 6571)',
        status: 'VERIFIED',
      },
      {
        parameter: 'Total Ash',
        specification: 'Maximum 8.0%',
        testMethodOrEvidence: 'ISO 928',
        status: 'VERIFIED',
      },
      {
        parameter: 'Acid-Insoluble Ash',
        specification: 'Maximum 2.0%',
        testMethodOrEvidence: 'ISO 930',
        status: 'VERIFIED',
      },
      {
        parameter: 'Pesticide Residue Screen',
        specification: 'Screened against destination import MRLs',
        testMethodOrEvidence: 'Multi-residue GC-MS/MS & LC-MS/MS',
        status: 'BUYER_SPEC_REQUIRED',
      },
    ],
    microbiologicalParameters: [
      {
        parameter: 'Salmonella spp.',
        specification: 'Absent in 25g',
        testMethodOrEvidence: 'ISO 6579 / FDA-BAM',
        status: 'VERIFIED',
      },
      {
        parameter: 'Escherichia coli',
        specification: '<10 CFU/g',
        testMethodOrEvidence: 'ISO 16649',
        status: 'VERIFIED',
      },
      {
        parameter: 'Total Plate Count',
        specification: '<100,000 CFU/g',
        testMethodOrEvidence: 'ISO 4833-1',
        status: 'AVAILABLE_ON_REQUEST',
      },
    ],
    qualityDocumentationNote:
      'Grown at 1,000m+ elevations in the Western Ghats. Cured in precision wood-fired flue houses to lock in chlorophyll and delicate terpinyl acetate aromatics.',
    packagingOptions: [
      {
        format: '10 kg Master Export Cartons',
        description: 'Multi-barrier heat-sealed vacuum aluminium foil liner inside heavy corrugated shipper.',
        suitability: 'High-value air freight, boutique tea blending, Middle Eastern retail packaging.',
      },
      {
        format: '25 kg Master Export Cartons',
        description: 'Double-walled export carton with hermetic vacuum foil barrier.',
        suitability: 'Industrial flavor houses, confectionery manufacturers, wholesale spice importers.',
      },
      {
        format: 'Custom Modified Atmosphere Packaging (MAP)',
        description: 'Nitrogen-flushed foil pouches from 250g to 5kg.',
        suitability: 'Private-label consumer retail brands.',
      },
    ],
    logistics: {
      indicativeMOQ: '100 kg (Commercial pilot trial / air freight feasible)',
      containerCapacity:
        'Indicative full-container planning capacity: 5 MT net per 20-foot container (Volumetric bulk limitation). Palletised air cargo commonly used.',
      airFreightOption: 'Palletised air shipments via Cochin (COK) or Chennai (MAA)',
      indicativeDispatch: '1–2 weeks from confirmed availability and inspection',
      portsOfDispatch: ['Cochin Port / Air Cargo (COK)', 'Chennai Air Cargo (MAA)'],
      logisticsDisclaimer:
        'Because cardamom has high value-to-weight ratio, air freight is widely preferred by European and Gulf buyers for freshest harvest delivery.',
    },
    tradeRegulatory: {
      hsnSummary: '0908.31.10 (Whole Cardamom Pods)',
      exportRegistrations: [
        'Spices Board of India (Cardamom Export Registration)',
        'FSSAI Central Export License',
      ],
      requiredDocumentation: [
        'Certificate of Origin',
        'Phytosanitary Certificate',
        'Commercial Invoice & Packing List',
        'Air Waybill (AWB) / Bill of Lading',
        'Quality Inspection Certificate (Size & Volatile Oil)',
      ],
      destinationComplianceNotes: [
        'Middle East / GCC SASO / ESMA conformity compliant.',
        'Zero artificial colorant guarantee certificate provided.',
      ],
      cepaTariffNote:
        'CEPA preferential tariff status for cardamom to UAE is subject to destination customs classification and qualifying origin verification.',
    },
    customRequirements: {
      customGradesSupported: [
        'Strictly Calibrated 8mm+ Jumbo Bold Lots',
        'Decorticated Clean Seeds for Extraction & Distillation',
        'Estate-Specific Traceable Lots',
      ],
      specificAssays: [
        'Volatile Essential Oil Terpinyl Acetate Ratio',
        'Moisture Assurance (<9.5% for extended Gulf storage)',
      ],
      packagingTailoring:
        'Nitrogen-purged airtight foil zipper pouches (250g, 500g, 1kg) and custom branded cartons.',
      privateLabelEnquiries:
        'Full private-label brand packaging support for premium Middle Eastern and European gourmet retail.',
    },
    commercial: {
      priceVisible: false,
      quotationRequired: true,
      sampleEnquiryEnabled: true,
      ctaLabel: 'REQUEST CARDAMOM QUOTATION',
    },
  },

  // =========================================================================
  // PRODUCT 04 — OPTICAL SORTEX CUMIN
  // =========================================================================
  {
    id: 'sortex-cumin',
    name: 'Optical Sortex Cleaned Cumin Seeds',
    cardTitle: 'Optical Sortex Cumin',
    cardDescription: 'Optically cleaned Indian cumin seeds available in buyer-specific purity grades for international markets.',
    cardForms: ['Whole Seeds', 'Sortex Cleaned', 'Custom Grades'],
    category: 'SPICES & SEEDS',
    subcategory: 'Cumin',
    botanicalName: 'Cuminum cyminum',
    hsnCodes: [
      {
        form: 'Whole Seeds',
        code: '09093129',
        verificationStatus: 'PENDING_VERIFICATION',
        note: 'Subject to classification verification.',
      },
    ],
    origin: {
      country: 'India',
      state: 'Gujarat & Rajasthan',
      regions: ['Unjha', 'Jodhpur'],
      displayOrigin: 'Unjha, Gujarat & Rajasthan, India.',
    },
    grade: 'Optical Sortex Cleaned — 99.5% Minimum Purity',
    gradesAvailable: [
      'Optical Sortex 99.5% Purity (Europe Grade)',
      'Machine Cleaned 99.0% Purity (Singapore Grade)',
      'Machine Cleaned 98.0% Purity',
      'Ground Cumin Powder',
    ],
    image: cuminImg,
    availableForms: [
      'Whole Optical Sortex Seeds (99.5% Purity)',
      'Whole Machine Cleaned Seeds (99.0% Purity)',
      'Steam-Sterilized Whole Cumin Seeds',
      'Fine Ground Cumin Powder',
    ],
    primaryApplications: [
      'Global Savory Seasonings, Taco & Curry Blends',
      'Commercial Food Canning & Meat Seasoning Formulations',
      'Oleoresin & Cuminaldehyde Flavor Extracts',
      'Wholesale Commodity Seed Distribution',
    ],
    overviewDescription:
      'Cultivated in the arid agricultural belts of Gujarat and Rajasthan and traded through Unjha—the world’s premier cumin terminal—Indian cumin delivers an unmatched warm, earthy aroma powered by rich cuminaldehyde. Cleaned through optical color sorters to eliminate stones, weed seeds, and discoloration.',
    physicalParameters: [
      {
        parameter: 'Purity Level',
        specification: '99.5% Minimum (subject to actual inspection and testing)',
        testMethodOrEvidence: 'Optical Sortex Sorter & Gravimetric Cleanliness Assay',
        status: 'VERIFIED',
      },
      {
        parameter: 'Foreign Matter / Stones / Weed Seeds',
        specification: 'Below 0.5% (Target <0.1% post optical sorting)',
        testMethodOrEvidence: 'Mechanical Destoning & Optical Inspection',
        status: 'VERIFIED',
      },
      {
        parameter: 'Moisture Content',
        specification: 'Maximum 8.0% (w/w)',
        testMethodOrEvidence: 'Air Oven Method (ISO 939 / AOAC)',
        status: 'VERIFIED',
      },
      {
        parameter: 'Seed Appearance',
        specification: 'Elongated, ribbed oval seeds; uniform pale yellowish-brown hue',
        testMethodOrEvidence: 'Visual Examination per ISO 6465',
        status: 'VERIFIED',
      },
    ],
    chemicalParameters: [
      {
        parameter: 'Volatile Essential Oil (Cuminaldehyde)',
        specification: '2.5% – 3.2% v/w (where verified)',
        testMethodOrEvidence: 'Steam Distillation (ISO 6571)',
        status: 'VERIFIED',
      },
      {
        parameter: 'Total Ash',
        specification: 'Maximum 8.5%',
        testMethodOrEvidence: 'ISO 928',
        status: 'VERIFIED',
      },
      {
        parameter: 'Acid-Insoluble Ash',
        specification: 'Maximum 1.5%',
        testMethodOrEvidence: 'ISO 930',
        status: 'VERIFIED',
      },
      {
        parameter: 'Pesticide Residue Screening',
        specification: 'Compliant with destination food authority limits',
        testMethodOrEvidence: 'GC-MS/MS & LC-MS/MS Multi-residue testing',
        status: 'BUYER_SPEC_REQUIRED',
      },
    ],
    microbiologicalParameters: [
      {
        parameter: 'Salmonella spp.',
        specification: 'Absent in 25g',
        testMethodOrEvidence: 'ISO 6579 / FDA-BAM',
        status: 'VERIFIED',
      },
      {
        parameter: 'Escherichia coli',
        specification: '<10 CFU/g',
        testMethodOrEvidence: 'ISO 16649-2',
        status: 'VERIFIED',
      },
      {
        parameter: 'Total Plate Count',
        specification: '<100,000 CFU/g (Steam sterilized available on request)',
        testMethodOrEvidence: 'ISO 4833-1',
        status: 'AVAILABLE_ON_REQUEST',
      },
    ],
    qualityDocumentationNote:
      'Procured from regulated Unjha and Rajasthan agricultural markets, cleaned through multistage aspirators, destoners, and dual-camera optical color sorters.',
    packagingOptions: [
      {
        format: '25 kg Laminated PP Woven Bags',
        description: 'Biaxially oriented polypropylene (BOPP) laminated woven bags with inner poly liner.',
        suitability: 'Standard international container shipping and wholesale trade.',
      },
      {
        format: '50 kg Laminated PP Woven Bags',
        description: 'Heavyweight sacks for high-throughput spice processing facilities.',
        suitability: 'Industrial milling and spice extractors.',
      },
      {
        format: 'Multi-wall Kraft Paper Sacks (25 kg)',
        description: 'Multi-ply paper sacks engineered for European warehousing standards.',
        suitability: 'Food seasoning formulators and European retail packers.',
      },
    ],
    logistics: {
      indicativeMOQ: '1 Metric Ton',
      containerCapacity:
        'Indicative planning capacity: 18 MT net per 20-foot FCL container (Subject to packaging and loading configuration)',
      indicativeDispatch: '2–3 weeks subject to availability and confirmation',
      portsOfDispatch: ['Mundra Port (INMUN)', 'Chennai Port (INMAA)'],
      logisticsDisclaimer:
        'Container loading quantities represent nominal planning weights and are subject to final stowage plan.',
    },
    tradeRegulatory: {
      hsnSummary: '0909.31.29 (Whole Cumin Seeds)',
      exportRegistrations: [
        'Spices Board of India Registered Exporter',
        'FSSAI Central Export License',
      ],
      requiredDocumentation: [
        'Commercial Invoice & Packing List',
        'Bill of Lading',
        'Certificate of Origin',
        'Phytosanitary Certificate',
        'Laboratory Purity & Oil Content Report',
      ],
      destinationComplianceNotes: [
        'European Union food hygiene and cleanliness compliant.',
        'ETO-free certification and steam sterilization available on request.',
      ],
      cepaTariffNote:
        'CEPA eligibility for UAE requires origin criteria verification under current trade protocol.',
    },
    customRequirements: {
      customGradesSupported: [
        'Purity Calibrated Batches (98%, 99%, 99.5% Sortex)',
        'ETO-Free Steam Sterilized Whole Seeds',
        'Cold-Milled Cumin Powder (40–80 Mesh)',
      ],
      specificAssays: [
        'Cuminaldehyde Volatile Percentage',
        'Pyrrolizidine Alkaloids (PA) European Compliance Screening',
      ],
      packagingTailoring:
        'Multi-ply kraft sacks with barrier liners and palletized containerized stowage.',
      privateLabelEnquiries:
        'Supported for consumer retail shaker containers and private label culinary packaging.',
    },
    commercial: {
      priceVisible: false,
      quotationRequired: true,
      sampleEnquiryEnabled: true,
      ctaLabel: 'REQUEST CUMIN QUOTATION',
    },
  },

  // =========================================================================
  // PRODUCT 05 — GUNTUR & BYADGI RED CHILLIES
  // =========================================================================
  {
    id: 'red-chillies',
    name: 'Indian Whole Dried Red Chillies',
    cardTitle: 'Guntur & Byadgi Red Chillies',
    cardDescription: 'Indian dried red chillies sourced in different varieties to support colour, pungency and processing requirements.',
    cardForms: ['Guntur S17', 'Byadgi', 'Stemless'],
    category: 'SPICES & SEASONINGS',
    subcategory: 'Dried Chillies',
    botanicalName: 'Capsicum annuum',
    hsnCodes: [
      {
        form: 'Whole Dried Chillies',
        code: '09042110',
        verificationStatus: 'PENDING_VERIFICATION',
        note: 'Subject to classification verification.',
      },
    ],
    origin: {
      country: 'India',
      state: 'Andhra Pradesh & Karnataka',
      regions: ['Guntur (AP)', 'Byadgi (Karnataka)'],
      displayOrigin: 'Andhra Pradesh & Karnataka, India.',
    },
    grade: 'Guntur S17 (Pungent) & Byadgi (Color-rich)',
    gradesAvailable: [
      'Guntur Sannam S17 — High Heat (25,000–35,000 SHU)',
      'Guntur Teja — Extra Pungent (40,000–60,000 SHU)',
      'Byadgi KDL — Deep Color (120–150 ASTA, 8,000–12,000 SHU)',
      'Byadgi Dabbi — High Color Oil Extraction Grade',
      'Stemless (Hand Cut) / Machine Destemmed / With Stem',
    ],
    image: chilliesImg,
    availableForms: [
      'Whole Dried Chillies With Stem',
      'Whole Dried Chillies Stemless',
      'Machine Destemmed Whole Chillies',
      'Crushed Chilli Flakes (Pizza / Retail Cut)',
      'Calibrated Red Chilli Powder',
    ],
    primaryApplications: [
      'Hot Sauce, Salsa & Condiment Manufacturing',
      'Natural Capsanthin & Red Colorant Industrial Extraction',
      'Pizza Toppings, Crushed Red Pepper Shakers',
      'Commercial Meat Marinades & Culinary Spice Blends',
    ],
    overviewDescription:
      'India is the world’s preeminent producer and exporter of dried red chillies. AURA structures exports bridging two legendary geographic hubs: Guntur (Andhra Pradesh), renowned for high capsaicin heat, and Byadgi (Karnataka), famous for wrinkle-skinned pods that yield brilliant ASTA color without aggressive heat.',
    physicalParameters: [
      {
        parameter: 'Visual Variety & Form',
        specification: 'Whole dried red pods; deep red pigmentation; free from visible mould',
        testMethodOrEvidence: 'Visual Grading per ASTA Standards',
        status: 'VERIFIED',
      },
      {
        parameter: 'Moisture Content',
        specification: 'Maximum 10.0% – 11.0% (w/w)',
        testMethodOrEvidence: 'Toluene Distillation (ISO 939)',
        status: 'VERIFIED',
      },
      {
        parameter: 'Broken / Discoloured Pods',
        specification: 'Below 2.0% (subject to agreed specification)',
        testMethodOrEvidence: 'Manual Sorting Protocol',
        status: 'VERIFIED',
      },
      {
        parameter: 'Foreign Matter / Extraneous Material',
        specification: 'Below 0.5%',
        testMethodOrEvidence: 'ASTA Cleanliness Method',
        status: 'VERIFIED',
      },
      {
        parameter: 'Loose Seeds',
        specification: 'Below 2.0%',
        testMethodOrEvidence: 'Sieve Separation',
        status: 'VERIFIED',
      },
    ],
    chemicalParameters: [
      {
        parameter: 'Pungency / Capsaicin Content (SHU)',
        specification: 'Guntur S17: 25,000–35,000 SHU · Byadgi: 8,000–12,000 SHU',
        testMethodOrEvidence: 'HPLC Scoville Heat Unit Assay (ASTA 21.0)',
        status: 'VERIFIED',
      },
      {
        parameter: 'Extractable Color Value',
        specification: 'Byadgi: 120–150 ASTA Units · Guntur: 50–75 ASTA Units',
        testMethodOrEvidence: 'Spectrophotometric (ASTA Method 20.1)',
        status: 'VERIFIED',
      },
      {
        parameter: 'Total Aflatoxin (B1 + B2 + G1 + G2)',
        specification: '<10 ppb / EU limit <5 ppb available on agreed testing protocol',
        testMethodOrEvidence: 'HPLC / LC-MS/MS Fluorometric Assay',
        status: 'VERIFIED',
      },
      {
        parameter: 'Sudan Dyes (I, II, III, IV)',
        specification: 'Negative / Non-detected (100% natural, adulteration free)',
        testMethodOrEvidence: 'LC-MS/MS Screen',
        status: 'VERIFIED',
      },
      {
        parameter: 'Total Ash',
        specification: 'Maximum 8.0%',
        testMethodOrEvidence: 'ISO 928',
        status: 'VERIFIED',
      },
    ],
    microbiologicalParameters: [
      {
        parameter: 'Salmonella spp.',
        specification: 'Absent in 25g',
        testMethodOrEvidence: 'ISO 6579 / FDA-BAM',
        status: 'VERIFIED',
      },
      {
        parameter: 'Escherichia coli',
        specification: '<10 CFU/g',
        testMethodOrEvidence: 'ISO 16649',
        status: 'VERIFIED',
      },
      {
        parameter: 'Total Plate Count',
        specification: '<200,000 CFU/g (Treated lot <50,000 CFU/g)',
        testMethodOrEvidence: 'ISO 4833-1',
        status: 'AVAILABLE_ON_REQUEST',
      },
    ],
    qualityDocumentationNote:
      'Whole dried red chillies are sun-cured or dry-house managed in Andhra Pradesh and Karnataka, inspected for uniform pod length and zero artificial Sudan colorants.',
    packagingOptions: [
      {
        format: '25 kg Compressed Export Jute Bales',
        description: 'Hydraulically baled whole chillies wrapped in heavy-duty natural jute.',
        suitability: 'Traditional bulk maritime export and wholesale spice markets.',
      },
      {
        format: '10 kg Export Cartons',
        description: 'Corrugated cartons designed to prevent pod crushing and breakage.',
        suitability: 'Food ingredient packaging and supermarket procurement.',
      },
      {
        format: 'Ventilated PP Bags (20kg–25kg)',
        description: 'Porous polypropylene bags providing airflow during container voyage.',
        suitability: 'Regional container trade and short transit corridors.',
      },
    ],
    logistics: {
      indicativeMOQ: '1 Metric Ton',
      containerCapacity:
        'Indicative capacity: Approximately 7.5 MT per 40-foot high-cube container (bales/cartons), subject to loading, packaging, and product density',
      indicativeDispatch: '2–3 weeks subject to availability and harvest season',
      portsOfDispatch: ['Chennai Port (INMAA)', 'Krishnapatnam Port (INKRI)'],
      logisticsDisclaimer:
        'Dried whole chillies are volumetric cargo. High-cube 40ft containers are standard to optimize container payload.',
    },
    tradeRegulatory: {
      hsnSummary: '0904.21.10 (Whole Dried Chillies)',
      exportRegistrations: [
        'Spices Board of India Registered Exporter',
        'FSSAI Central Export License',
      ],
      requiredDocumentation: [
        'Commercial Invoice & Packing List',
        'Bill of Lading',
        'Certificate of Origin',
        'Phytosanitary Certificate',
        'Sudan Dye Free Declaration',
        'Aflatoxin Test Report',
      ],
      destinationComplianceNotes: [
        'EU import testing compliant (Sudan 1-4 and Aflatoxin limits).',
        'US-FDA macro-cleanliness criteria compliant.',
      ],
      cepaTariffNote:
        'UAE CEPA tariff preference requires origin compliance and valid documentation.',
    },
    customRequirements: {
      customGradesSupported: [
        'Stemless Hand-Cut Pods (Target Zero Stem Length)',
        'Crushed Pizza Flakes (1mm–3mm Calibrated Sieve Cut)',
        'Calibrated Scoville & ASTA Blend Lots',
      ],
      specificAssays: [
        'HPLC Aflatoxin B1 & Total Aflatoxin Assurance',
        'Mandatory Sudan I–IV Non-Adulteration Certificates',
      ],
      packagingTailoring:
        'Carton packaging to eliminate crushing and retail vacuum poly bags.',
      privateLabelEnquiries:
        'Private label crushed chilli flake jars and commercial food service pouches.',
    },
    commercial: {
      priceVisible: false,
      quotationRequired: true,
      sampleEnquiryEnabled: true,
      ctaLabel: 'REQUEST RED CHILLI QUOTATION',
    },
  },

  // =========================================================================
  // PRODUCT 06 — MORINGA LEAF POWDER
  // =========================================================================
  {
    id: 'moringa-leaf-powder',
    name: 'Micro-Pulverized Pure Moringa Leaf Powder',
    cardTitle: 'Pure Moringa Leaf Powder',
    cardDescription: 'Fine moringa leaf powder sourced from Indian agricultural regions, with processing and particle-size options.',
    cardForms: ['Dried Leaves', 'Fine Powder', 'Custom Mesh'],
    category: 'BOTANICAL INGREDIENTS',
    subcategory: 'Moringa & Botanicals',
    botanicalName: 'Moringa oleifera',
    hsnCodes: [
      {
        form: 'Botanical Leaf Powder',
        code: '12119029',
        verificationStatus: 'PENDING_VERIFICATION',
        note: 'Proposed classification, subject to current tariff and product-form verification.',
      },
    ],
    origin: {
      country: 'India',
      state: 'Tamil Nadu',
      regions: ['Dindigul', 'Theni'],
      displayOrigin: 'Dindigul & Theni, Tamil Nadu, India.',
    },
    grade: 'Low-Temp Dehydrated · 80–100 Mesh Fine Powder',
    gradesAvailable: [
      'Micro-Pulverized 80–100 Mesh Powder',
      'Ultra-Fine 120 Mesh Nutraceutical Grade',
      'Whole Shadow-Dried Green Leaves',
      'Tea-Bag Cut (TBC) Coarse Leaves',
    ],
    image: moringaImg,
    availableForms: [
      'Micro-Pulverized Pure Leaf Powder (80-100 mesh)',
      'Fine Botanical Extract Grade Powder',
      'Whole Shadow-Dried Green Leaves',
      'Coarse Cut Leaves for Herbal Infusions',
    ],
    primaryApplications: [
      'Nutraceutical Capsule & Tablet Contract Manufacturing',
      'Green Superfood Powder Blends & Smoothie Formulations',
      'Herbal Wellness Tea Infusions (Tea-Bag Cut)',
      'Cosmeceutical Skin Nutrition & Clean Beauty Formulations',
    ],
    overviewDescription:
      'Cultivated in the sun-drenched, well-drained red soils of Dindigul and Theni in Southern Tamil Nadu, our moringa leaves are harvested in the early morning hours, sorted, washed with purified water, and shadow-dehydrated under strict low-temperature regimes to prevent nutrient denaturation and chlorophyll breakdown.',
    physicalParameters: [
      {
        parameter: 'Particle Granulometry',
        specification: '80–100 mesh (Minimum 98% passing through 100 mesh sieve)',
        testMethodOrEvidence: 'Mechanical Sieve Shaker Analysis',
        status: 'VERIFIED',
      },
      {
        parameter: 'Color & Appearance',
        specification: 'Natural bright emerald green; free from brown discoloration or scorching',
        testMethodOrEvidence: 'Visual & Spectrophotometric Assay',
        status: 'VERIFIED',
      },
      {
        parameter: 'Moisture Content',
        specification: 'Maximum 7.0% (w/w)',
        testMethodOrEvidence: 'Karl Fischer Titration / Vacuum Oven',
        status: 'VERIFIED',
      },
      {
        parameter: 'Purity',
        specification: '100% Pure Moringa oleifera leaf; zero fillers, carriers or additives',
        testMethodOrEvidence: 'Microscopic & Botanical Identity Assay',
        status: 'VERIFIED',
      },
    ],
    chemicalParameters: [
      {
        parameter: 'Total Ash',
        specification: 'Below 8.0%',
        testMethodOrEvidence: 'Muffle Furnace (ISO 928)',
        status: 'VERIFIED',
      },
      {
        parameter: 'Acid-Insoluble Ash',
        specification: 'Below 1.0%',
        testMethodOrEvidence: 'ISO 930',
        status: 'VERIFIED',
      },
      {
        parameter: 'Crude Protein Content',
        specification: '24.0% – 29.0% (Natural plant protein)',
        testMethodOrEvidence: 'Kjeldahl Nitrogen Method (AOAC 981.10)',
        status: 'VERIFIED',
      },
      {
        parameter: 'Heavy Metals (Pb, As, Cd, Hg)',
        specification: 'Pb <2 ppm, As <1 ppm, Cd <1 ppm, Hg <0.1 ppm',
        testMethodOrEvidence: 'ICP-MS Laboratory Testing',
        status: 'VERIFIED',
      },
      {
        parameter: 'Pesticide Residue Screen',
        specification: 'Screened against EU/US organic and food standards (Zero detected organophosphates)',
        testMethodOrEvidence: 'GC-MS/MS & LC-MS/MS Multi-residue assay',
        status: 'BUYER_SPEC_REQUIRED',
      },
    ],
    microbiologicalParameters: [
      {
        parameter: 'Total Plate Count (TPC)',
        specification: '<50,000 CFU/g',
        testMethodOrEvidence: 'BAM / ISO 4833-1',
        status: 'VERIFIED',
      },
      {
        parameter: 'Yeast & Mould',
        specification: '<500 CFU/g',
        testMethodOrEvidence: 'ISO 21527-2',
        status: 'VERIFIED',
      },
      {
        parameter: 'Salmonella spp.',
        specification: 'Absent in 25g',
        testMethodOrEvidence: 'ISO 6579 / FDA-BAM',
        status: 'VERIFIED',
      },
      {
        parameter: 'Escherichia coli',
        specification: 'Absent / <10 CFU/g',
        testMethodOrEvidence: 'ISO 16649-2',
        status: 'VERIFIED',
      },
      {
        parameter: 'Staphylococcus aureus',
        specification: 'Absent in 1g',
        testMethodOrEvidence: 'ISO 6888',
        status: 'VERIFIED',
      },
    ],
    qualityDocumentationNote:
      'Leaves harvested from semi-arid horticultural belts in Southern Tamil Nadu, gently washed with purified water, low-temperature shadow dried to preserve enzymes and chlorophyll, and micro-pulverized.',
    packagingOptions: [
      {
        format: '20 kg Fiber Drums',
        description: 'Food-grade fiber drum with double polyethylene inner heat-sealed liners and silica desiccant.',
        suitability: 'Nutraceutical encapsulation, supplement blenders, and pharmaceutical extractors.',
      },
      {
        format: '25 kg Fiber Drums',
        description: 'Rigid protective drum engineered for sensitive botanical powder export.',
        suitability: 'Global dietary supplement and functional food manufacturers.',
      },
      {
        format: 'Vacuum-Sealed Foil Barrier Pouches',
        description: '10 kg or 20 kg nitrogen-purged multi-layer aluminium pouches inside master cartons.',
        suitability: 'Moisture-critical destinations and extended shelf-life requirements.',
      },
    ],
    logistics: {
      indicativeMOQ: '500 kg',
      containerCapacity:
        'Indicative planning capacity: 12 MT net per 20-foot container, subject to packaging and cargo configuration',
      indicativeDispatch: '2–3 weeks, subject to confirmation',
      portsOfDispatch: ['Chennai Port (INMAA)', 'Chennai Air Cargo (MAA)', 'Tuticorin Port (INTUT)'],
      logisticsDisclaimer:
        'Because moringa powder is hygroscopic, temperature and humidity controlled sea freight or air freight is available upon request.',
    },
    tradeRegulatory: {
      hsnSummary: '1211.90.29 (Botanical Leaf Form — Proposed)',
      exportRegistrations: [
        'APEDA Registered Exporter Partner',
        'FSSAI Central Export License',
      ],
      requiredDocumentation: [
        'Commercial Invoice & Packing List',
        'Certificate of Origin',
        'Phytosanitary Certificate',
        'Certificate of Analysis (Microbiology & Heavy Metals)',
        'Non-GMO & Non-Irradiated Declaration',
      ],
      destinationComplianceNotes: [
        'Suitable for European functional food and dietary supplement formulation.',
        'US-FDA botanical dietary ingredient compliant.',
      ],
      cepaTariffNote:
        'CEPA preferential tariff status for UAE is subject to tariff code verification and destination customs rules.',
    },
    customRequirements: {
      customGradesSupported: [
        'Micro-Pulverized 120 Mesh Ultra-Fine Powders',
        'Controlled Shadow-Dehydrated Whole Leaf Flakes',
        'Tea-Bag Cut (TBC) Botanical Raw Materials',
      ],
      specificAssays: [
        'Complete Amino Acid & Beta-Carotene Assay',
        'Microbiological Low-Bioburden Batches (<10,000 CFU/g)',
      ],
      packagingTailoring:
        'Nitrogen-flushed drums, barrier foil master packs, and retail stand-up pouches.',
      privateLabelEnquiries:
        'Comprehensive contract packaging for retail wellness superfood brands.',
    },
    commercial: {
      priceVisible: false,
      quotationRequired: true,
      sampleEnquiryEnabled: true,
      ctaLabel: 'REQUEST MORINGA QUOTATION',
    },
  },

  // =========================================================================
  // PRODUCT 07 — RICE & SPECIALTY GRAINS
  // =========================================================================
  {
    id: 'rice-specialty-grains',
    name: 'Indian Rice & Specialty Grains (Basmati & Regional Varieties)',
    cardTitle: 'Rice & Specialty Grains',
    cardDescription: "India's #1 agricultural commodity export to UAE & GCC: premium 1121 Basmati alongside high-demand South Indian staples.",
    cardForms: ['1121 Steam Basmati', 'Sona Masoori', 'Ponni & Matta', 'Ambient Bulk & Branded Packs'],
    category: 'COMMODITIES & GRAINS',
    subcategory: 'Basmati & Regional Specialty Rice',
    botanicalName: 'Oryza sativa',
    hsnCodes: [
      {
        form: 'Basmati Rice (Semi-Milled / Wholly Milled)',
        code: '10063020',
        verificationStatus: 'VERIFIED',
        note: 'Registered with APEDA Basmati Export Development Foundation (BEDF).',
      },
      {
        form: 'Non-Basmati White / Parboiled Rice',
        code: '10063010',
        verificationStatus: 'VERIFIED',
        note: 'Covers Ponni, Sona Masoori, and Matta parboiled/steam variants.',
      },
      {
        form: 'Broken / Other Milled Rice',
        code: '10063090',
        verificationStatus: 'VERIFIED',
      },
    ],
    origin: {
      country: 'India',
      state: 'Punjab, Haryana, Andhra Pradesh, Telangana, Tamil Nadu & Kerala',
      regions: ['Indo-Gangetic Basin (Basmati)', 'Kaveri & Godavari Basins (Sona Masoori & Ponni)', 'Palakkad (Matta)'],
      displayOrigin: 'Indo-Gangetic Basin (Basmati) & Southern Basins (Staples)',
    },
    grade: '100% Sortex Cleaned · Double Silky Polished · Export Grade',
    gradesAvailable: [
      '1121 Extra Long Grain Basmati (Steam / Golden Sella / Raw) — 8.35mm+ AGL',
      'Pusa Basmati & Traditional Aromatic Long Grain',
      'Sona Masoori (Raw / Steam / Silky Sortex — Lightweight & Aromatic)',
      'Ponni Rice (Single Boiled, Steam & Raw — Tamil Nadu Staple)',
      'Kerala Palakkadan Matta (Single & Double Boiled Red Parboiled Rice)',
      'Sortex Cleaned Ancient Millets & Regional Pulses (On Request)',
    ],
    image: grainsImg,
    availableForms: [
      '1121 Steam Basmati Rice (8.35mm+ AGL)',
      '1121 Golden Sella & Creamy Sella Basmati',
      'Traditional Aromatic Raw Basmati',
      'Sona Masoori Silky Double Polished',
      'Ponni Boiled & Steam Rice',
      'Palakkadan Matta Red Parboiled Rice',
      '25kg & 50kg PP Woven Export Bulk Sacks',
      'Custom Branded 5kg & 10kg Retail Handle Pouches',
    ],
    primaryApplications: [
      'UAE & GCC Modern Retail Supermarkets & Hypermarket Chains',
      'Hospitality, HORECA, Fine Dining & Luxury Biryani Catering',
      'South Indian Expatriate Diaspora Retail in Dubai, Sharjah & Abu Dhabi',
      'Institutional Foodservice & Wholesale Cash-and-Carry Distribution',
      'Private Label Branded Rice Programs with Custom Bilingual Packaging',
    ],
    overviewDescription:
      "Rice is consistently India's top agricultural commodity shipment into the UAE and the wider Gulf region. AURA structures containerized export shipments tailored to the two core procurement pillars of the Middle East market: first, extra-long grain 1121 Steam, Pusa, and Traditional Basmati (essential for UAE retail, luxury hospitality, and high-volume catering), and second, premium South Indian non-basmati staples (Sona Masoori, Ponni, and Matta rice) serving the massive expatriate diaspora across Dubai, Sharjah, and Abu Dhabi. With exceptional baseline trade volume, steady year-round repeat orders, and ambient bulk packaging (25 kg/50 kg woven sacks or branded 5 kg/10 kg consumer packs), AURA provides verified grain length, sortex purity, zero foreign matter, and direct vessel coordination from Mundra, Chennai, and Kakinada ports.",
    physicalParameters: [
      {
        parameter: 'Average Grain Length (AGL)',
        specification: '1121 Basmati: 8.35mm+ (Raw), 18mm–22mm (Cooked) · Sona Masoori: 5.0mm–5.5mm · Ponni: 5.2mm · Matta: 5.5mm',
        testMethodOrEvidence: 'Dial Caliper / Photographic Grain Analyzer (AGMARK / APEDA standards)',
        status: 'VERIFIED',
      },
      {
        parameter: 'Moisture Content',
        specification: 'Maximum 12.5% – 13.0% (w/w)',
        testMethodOrEvidence: 'Digital Moisture Meter / Hot Air Oven Method (ISO 712)',
        status: 'VERIFIED',
      },
      {
        parameter: 'Broken Grains',
        specification: 'Premium Basmati: Max 1.0% · Standard Export: Max 2.0% – 5.0% (calibrated per contract)',
        testMethodOrEvidence: 'Laboratory Mechanical Sieve Separation',
        status: 'VERIFIED',
      },
      {
        parameter: 'Damaged & Discoloured Grains',
        specification: 'Maximum 0.5% – 1.0%',
        testMethodOrEvidence: 'High-Resolution Optical Sortex Inspection',
        status: 'VERIFIED',
      },
      {
        parameter: 'Chalky Grains',
        specification: 'Maximum 2.0%',
        testMethodOrEvidence: 'Visual Optical Inspection under Backlight',
        status: 'VERIFIED',
      },
      {
        parameter: 'Foreign Matter / Extraneous Matter',
        specification: 'Nil / Maximum 0.1% (100% Sortex cleaned & destoned)',
        testMethodOrEvidence: 'Magnetic Separation & Density Destoning',
        status: 'VERIFIED',
      },
      {
        parameter: 'Purity / Varietal Authenticity',
        specification: 'Minimum 95.0% to 98.0% varietal purity',
        testMethodOrEvidence: 'DNA Fingerprinting / Basmati PCR Assaying on request',
        status: 'VERIFIED',
      },
    ],
    chemicalParameters: [
      {
        parameter: 'Elongation Ratio (Post Cooking)',
        specification: '2.0x to 2.5x original grain length (non-sticky, separate grains)',
        testMethodOrEvidence: 'Standardized Boiling Water Elongation Test',
        status: 'VERIFIED',
      },
      {
        parameter: 'Amylose Content',
        specification: 'Basmati: 20% – 24% (Intermediate Amylose) · Sona Masoori: 23% – 26%',
        testMethodOrEvidence: 'Iodometric Spectrophotometry (ISO 6647)',
        status: 'VERIFIED',
      },
      {
        parameter: 'Pesticide Residue Screen',
        specification: 'Compliant with UAE MoIAT, GCC GSO 1016 & EU MRL thresholds',
        testMethodOrEvidence: 'GC-MS/MS & LC-MS/MS Multi-Residue Screen (SGS / Intertek)',
        status: 'VERIFIED',
      },
      {
        parameter: 'Total Aflatoxin (B1 + B2 + G1 + G2)',
        specification: 'Maximum 4.0 ppb (compliant with strict international food safety)',
        testMethodOrEvidence: 'HPLC Fluorometric Detector Assay',
        status: 'VERIFIED',
      },
      {
        parameter: 'Heavy Metals (Arsenic, Lead, Cadmium)',
        specification: 'Inorganic Arsenic <0.2 mg/kg, Lead <0.2 mg/kg, Cadmium <0.4 mg/kg',
        testMethodOrEvidence: 'ICP-MS Heavy Metal Analysis (Codex Alimentarius standards)',
        status: 'VERIFIED',
      },
    ],
    microbiologicalParameters: [
      {
        parameter: 'Salmonella spp.',
        specification: 'Absent in 25g',
        testMethodOrEvidence: 'ISO 6579 / FDA-BAM',
        status: 'VERIFIED',
      },
      {
        parameter: 'Escherichia coli',
        specification: '<10 CFU/g',
        testMethodOrEvidence: 'ISO 16649-2',
        status: 'VERIFIED',
      },
      {
        parameter: 'Yeast & Mould Count',
        specification: '<1,000 CFU/g',
        testMethodOrEvidence: 'ISO 21527-2',
        status: 'VERIFIED',
      },
      {
        parameter: 'Bacillus cereus',
        specification: '<100 CFU/g',
        testMethodOrEvidence: 'ISO 7932',
        status: 'VERIFIED',
      },
    ],
    qualityDocumentationNote:
      'Every grain export consignment is processed through multi-stage color optical sortex machines, double-aspirated, destoned, and metal detected. Third-party pre-shipment quality inspection certificates (SGS, Bureau Veritas, or Cotecna) provided per shipment.',
    packagingOptions: [
      {
        format: '25 kg & 50 kg PP Woven Export Sacks',
        description: 'Heavy-duty laminated polypropylene woven bags with stitched closure and inner moisture-barrier lining.',
        suitability: 'Standard ambient bulk ocean freight, wholesale terminal distribution, and commercial catering supply.',
      },
      {
        format: '5 kg & 10 kg Branded Retail Pouches',
        description: 'High-definition printed BOPP / non-woven bags with reinforced die-cut handles and bilingual artwork.',
        suitability: 'Supermarket retail shelf distribution across UAE and GCC hypermarket chains.',
      },
      {
        format: 'Traditional Jute Export Bags (20kg / 40kg)',
        description: 'Breathable natural hydro-carbon free jute bags with custom brand stenciling.',
        suitability: 'Traditional commodity trade, ethnic wholesale distributors, and specialty aged basmati programs.',
      },
      {
        format: '1,000 kg Jumbo / Tote Bags',
        description: 'Heavy industrial FIBC bulk tote bags with discharge spouts.',
        suitability: 'Industrial food processing, repacking facilities, and automated milling rebagging lines.',
      },
    ],
    logistics: {
      indicativeMOQ: '1 FCL (20-ft dry container ~25–26 Metric Tons)',
      containerCapacity:
        'Approximately 25.0 to 26.0 Metric Tons per 20ft container (floor loaded in 25kg/50kg bags), or 21.0 MT palletized, subject to port axle limits',
      indicativeDispatch: '10–14 days post-order confirmation & artwork approval',
      portsOfDispatch: ['Mundra Port (INMUN)', 'Chennai Port (INMAA)', 'Kakinada Port (INKAK)'],
      logisticsDisclaimer:
        'Ambient dry cargo requiring dry, ventilated ocean container stowage. Direct maritime sailings available from West Coast (Mundra) and East Coast (Chennai/Kakinada) into Jebel Ali (Dubai), Port Khalid (Sharjah), and Khalifa Port (Abu Dhabi) within 3 to 7 days transit.',
    },
    tradeRegulatory: {
      hsnSummary: '1006.30.20 (Basmati Rice) · 1006.30.10 / 1006.30.90 (Non-Basmati Milled / Parboiled)',
      exportRegistrations: [
        'APEDA Registered Exporter (Ministry of Commerce & Industry)',
        'FSSAI Central Export License',
        'Basmati Export Development Foundation (BEDF) Member',
      ],
      requiredDocumentation: [
        'Commercial Invoice & Packing List',
        'Clean on Board Ocean Bill of Lading',
        'Certificate of Origin (India-UAE CEPA Preferential COO / Chamber of Commerce)',
        'Government Phytosanitary Certificate (Plant Quarantine Authority of India)',
        'Pre-Shipment Inspection Certificate (Weight, Quality & Packing by SGS / BV)',
        'Fumigation & Free from Live Insects Certificate',
        'Non-GMO Declaration Certificate',
      ],
      destinationComplianceNotes: [
        'Compliant with UAE Cabinet Resolution and MoIAT food safety regulations.',
        'Gulf Standard GSO 93/2013 (Rice specifications and labeling).',
        'Compatible with Dubai Municipality Food Watch portal batch clearance.',
      ],
      cepaTariffNote:
        'Eligible for preferential zero-duty or reduced tariff treatment under the India-UAE Comprehensive Economic Partnership Agreement (CEPA) with qualifying Rules of Origin documentation.',
    },
    customRequirements: {
      customGradesSupported: [
        '1121 Steam Basmati (8.35mm+ Extra Long Grain)',
        '1121 Golden Sella & Creamy Parboiled Sella',
        'Traditional Dehradun / Aromatic Raw Basmati',
        'Sona Masoori Silky Double Polished (Lightweight Grain)',
        'Ponni Boiled & Raw (Traditional Tamil Nadu & South Indian Staple)',
        'Kerala Palakkadan Matta (Single & Double Boiled Red Rice)',
      ],
      specificAssays: [
        'DNA Basmati Authenticity / Admixture Testing (<5% non-basmati admixture)',
        'Custom Calibration of Broken Grain Percentage (from 1% up to 15%)',
        'Moisture Threshold Control (12.0% for extended tropical container voyages)',
      ],
      packagingTailoring:
        'Full-color bilingual English/Arabic printing, custom private label branding, barcoding (EAN-13), and retail shelf-ready handle pouches.',
      privateLabelEnquiries:
        'End-to-end private labeling support for Middle East retail chains, cash & carry networks, and commercial hospitality brands.',
    },
    commercial: {
      priceVisible: false,
      quotationRequired: true,
      sampleEnquiryEnabled: true,
      ctaLabel: 'REQUEST RICE & GRAINS QUOTATION',
    },
  },
];
