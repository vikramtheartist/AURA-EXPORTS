/**
 * AURA Global Trade - Master Product Catalog & Procurement Store
 * Phase 4: Procurement Intelligence, Technical Specifications, and Explicit Data States
 */

import { Product, ProductCategory } from '../types/procurement';
import turmericImg from '../assets/images/product_turmeric_1780423510096.png';
import jewelryImg from '../assets/images/product_jewelry_1780423528983.png';
import textilesImg from '../assets/images/product_textiles_1780423544568.png';

import agroHeroImg from '../assets/images/agro_products_hero.jpg';
import apparelHeroImg from '../assets/images/apparel_textiles_hero.jpg';

export const productCategories: ProductCategory[] = [
  {
    slug: 'agro-products',
    name: 'Agro Products',
    shortName: 'Agro Products',
    headline: "India's Agricultural Richness. Connected to Global Markets.",
    description:
      'A diverse selection of agricultural commodities, Indian spices, natural ingredients, and fresh produce, connecting quality Indian sourcing with international demand.',
    sourcingPhilosophy:
      'Direct partnerships with audited grower networks across Tamil Nadu and South Indian agricultural basins, focusing on active botanical assays, cold-milling preservation, post-harvest cold chains, and comprehensive pesticide residue clearance.',
    featuredImage: agroHeroImg,
    badge: 'Agricultural & Commodity Streams',
    procurementLens: {
      title: 'What Buyers Can Define',
      description:
        'AURA works through precise buyer specifications across bulk agricultural commodities, spice extracts, and fresh export produce:',
      definableFields: [
        'Commodity Category (Spices, Turmeric, Chillies, Fresh Produce, Moringa, Grains & Pulses)',
        'Product Form (Whole rhizomes, dried pods, cold-milled powders, standardized extracts, fresh refrigerated produce)',
        'Grade & Varietal Specification (Guntur/Byadgi chillies, Tellicherry pepper, Erode turmeric, Basmati 1121)',
        'Active Compound / Assays (Curcuminoid HPLC percentage, Piperine, Capsaicin SHU, ASTA color value)',
        'Maximum Acceptable Moisture Threshold (Vacuum packaged or standard export dried)',
        'Physical Granulation & Mesh Size (40 to 100+ mesh or customized cut sizes)',
        'Cold-Chain & Reefer Shipping Parameters (For fresh produce: onions, tomatoes, drumsticks)',
        'Custom Packaging Formats (Multi-wall kraft bags, PP woven sacks, fiber drums, retail pouches, or telescopic produce cartons)',
      ],
    },
    productCount: 20,
  },
  {
    slug: 'spices', // Preserved for backwards compatibility with existing links
    name: 'Spices & Botanical Ingredients',
    shortName: 'Spices & Botanicals',
    headline: 'Sourced for purity. Structured for global supply.',
    description:
      'A curated sourcing portfolio spanning turmeric, botanical ingredients and wellness-oriented products, with product-level specifications and export documentation available according to requirement.',
    sourcingPhilosophy:
      'Direct partnerships with audited grower networks across Tamil Nadu and South Indian agricultural basins, focusing on active botanical assays, cold-milling preservation, and comprehensive pesticide residue clearance.',
    featuredImage: agroHeroImg,
    badge: 'Agricultural & Botanical Streams',
    procurementLens: {
      title: 'What Buyers Can Define',
      description:
        'AURA works through precise buyer specifications rather than rigid catalogue SKUs. Sourcing contracts are customized across:',
      definableFields: [
        'Product Form (Whole dried fingers, cold-milled powder, concentrated extracts, oleoresins)',
        'Grade & Varietal Specification (Erode / Salem / Lakadong regional clusters)',
        'Active Botanical Compound Requirement (Curcumin assay verified by HPLC)',
        'Maximum Acceptable Moisture Threshold (Standard or low-moisture vacuum packed)',
      ],
    },
    productCount: 1,
  },
  {
    slug: 'jewelry',
    name: 'Fashion & Lifestyle',
    shortName: 'Fashion & Lifestyle',
    headline: 'Discover fashion jewelry, handcrafted accessories and lifestyle products sourced for evolving international markets.',
    description:
      'Precision handcrafted jewelry combining modern geometric silhouettes with South Indian foundry techniques, engineered across selected base metals, premium finishes, and private-label packaging configurations.',
    sourcingPhilosophy:
      'Bridging heritage South Indian casting artisans with contemporary European and American retail standards. Strict metallurgical discipline, durable PVD coatings, and collection-level private label capability.',
    featuredImage: jewelryImg,
    badge: 'Artisanal Metallurgy & Lifestyle',
    procurementLens: {
      title: 'What Buyers Can Define',
      description:
        'Jewelry production runs are configured around brand design books, target price architecture, and regional regulatory compliance:',
      definableFields: [
        'Base Metal Alloy (Hypoallergenic 316L surgical stainless steel, recycled brass, copper alloys)',
        'Surface Plating & Finish (PVD vacuum gold 14k/18k, high-polish rhodium, antique matte, anti-tarnish e-coating)',
        'Dimensional Tolerances & Structural Assembly',
        'Stone & Setting Specifications (Semi-precious cabochons, cubic zirconia, bezel or prong setting)',
        'Private Label Branding (Laser engraving, embossed custom metal tags, branded presentation cards)',
        'Packaging Configuration (Anti-tarnish bio-polybags, velvet pouches, rigid presentation boxes)',
        'Destination Compliance (EU REACH, Prop 65, Nickel-release limits evaluated per SKU)',
        'Production Batch Runs & Repeat Order MOQs',
      ],
    },
    productCount: 4,
  },
  {
    slug: 'apparel-textiles',
    name: 'Apparel & Textiles',
    shortName: 'Apparel & Textiles',
    headline: 'From Fabrics to Finished Apparel. Sourcing Without Boundaries.',
    description:
      'From quality fabrics and textile materials to finished garments and home textiles, we connect international buyers with diverse apparel and textile sourcing opportunities.',
    sourcingPhilosophy:
      'Connecting international buyers with premier textile mills, garment assemblies, master handloom weavers and spinning clusters across Tirupur, Coimbatore, Karur, Surat and Bengaluru.',
    featuredImage: apparelHeroImg,
    badge: 'Comprehensive Textile & Apparel Portfolio',
    procurementLens: {
      title: 'What Buyers Can Define',
      description:
        'Textile and apparel contracts are customized to global manufacturing, retail, and commercial specifications:',
      definableFields: [
        'Category Vertical (Fabrics & Materials, Finished Apparel & Garments, Home Textiles, Handloom & Traditional, Yarns & Components, Made-ups)',
        'Fiber Composition (100% Cotton, Linen, Polyester, Viscose, Modal, Elastane blends)',
        'Fabric Construction (Plain weave, poplin, twill, oxford, single jersey, interlock, terry, jacquard)',
        'Garment Specifications (Tech-pack development, sizing runs, private-label branding, trims & hardware)',
        'Home Textile Specifications (Thread counts 200-800 TC, hospitality terry towel GSM, dimension ranges)',
        'Yarn Parameters (Count ranges Ne 10s to 100s, ring spun, compact, open-end, multifold twists)',
        'Finishing & Dyeing (Piece dyed, yarn dyed, Mercerized, bio-polished, reactive print, digital print)',
        'Export Packaging (Rolls with core protectors, hanger/flat garment polybags, moisture-barrier master cartons)',
      ],
    },
    productCount: 15,
  },
  {
    slug: 'textiles',
    name: 'Apparel & Textiles',
    shortName: 'Apparel & Textiles',
    headline: 'Connecting Textile Excellence with Global Markets.',
    description:
      'From quality fabrics and textile materials to finished garments and home textiles, we connect international buyers with diverse apparel and textile sourcing opportunities.',
    sourcingPhilosophy:
      'Leveraging premier spinning, weaving, garment manufacturing, and home furnishing corridors across India.',
    featuredImage: apparelHeroImg,
    badge: 'Global Textile & Apparel Portfolio',
    procurementLens: {
      title: 'What Buyers Can Define',
      description: 'Comprehensive sourcing options across fabrics, apparel, home furnishings, and yarns.',
      definableFields: [
        'Fabric Composition & GSM',
        'Garment Sizing & Private Label Cut-to-Pack',
        'Home Textile Thread Counts & Finishes',
        'Industrial Spun Yarns & Sewing Threads',
      ],
    },
    productCount: 15,
  },
];

/**
 * Turmeric Reference Product
 * Fully verified data architecture following Phase 4 guidelines
 */
export const turmericProduct: Product = {
  slug: 'turmeric',
  name: 'Premium Indian Turmeric',
  botanicalOrMaterialName: 'Curcuma Longa',
  categorySlug: 'spices',
  categoryName: 'Spices & Botanical Ingredients',
  heroHeadline: 'Premium Indian Turmeric',
  positioningStatement:
    'Sourced from Indian agricultural ecosystems and structured for specification-led international procurement.',
  description:
    'Harvested from the historic confluence of the Cauvery and Bhavani rivers in the Erode agricultural basin of Tamil Nadu, our turmeric is structured for international food manufacturers, nutraceutical formulators, and wellness brands requiring verifiable active botanical content and strict export compliance.',
  applications: [
    'Food Manufacturing & Industrial Seasoning Blends',
    'Nutraceutical Supplements, Capsules & Curcumin Extracts',
    'Clean-Label Natural Food Colorants & Functional Beverages',
    'Personal Care, Cosmeceuticals & Ayurvedic Formulations',
    'Private Label Retail Spice Collections',
  ],
  variants: [
    {
      id: 'turmeric-fingers',
      name: 'Turmeric Fingers',
      form: 'Whole Dried Unpolished / Polished Rhizomes',
      description:
        'Whole dried turmeric fingers harvested at peak rhizome maturity, sun-cured and mechanically sorted. Ideal for grinding plants, extractors, and bulk industrial processing.',
      primaryApplication: 'Industrial Milling, Curcumin Extraction & Commodity Trade',
      suitability: ['Bulk Milling', 'Solvent Extraction', 'Long-term Storage'],
      availability: 'available',
    },
    {
      id: 'turmeric-powder',
      name: 'Turmeric Powder',
      form: 'Cold-Milled Fine Powder (40–100 Mesh)',
      description:
        'Controlled-temperature milled turmeric preserving delicate volatile aromatic oils and natural curcuminoids. Consistent brilliant golden hue without synthetic color enhancers.',
      primaryApplication: 'Culinary Formulations, Bakery, Sauce Bases & Spice Blends',
      suitability: ['Food Grade', 'Cold-Milled', 'Controlled Granulation'],
      availability: 'available',
    },
    {
      id: 'curcumin-extracts',
      name: 'Curcumin / Standardized Extracts',
      form: 'Concentrated Botanical Extract Powder (High Curcuminoid Assay)',
      description:
        'Standardized botanical extracts calibrated for institutional nutraceutical and supplement formulators requiring certified purity profiles and HPLC assay verification.',
      primaryApplication: 'Nutraceuticals, Dietary Supplements & Therapeutic Formulations',
      suitability: ['High Purity', 'Standardized Assay', 'Solvent Free Options'],
      availability: 'on-request',
    },
    {
      id: 'oleoresins-essential-oils',
      name: 'Oleoresins & Essential Oils',
      form: 'Liquid / Viscous Botanical Extract',
      description:
        'Concentrated aromatic oleoresin and steam-distilled turmeric essential oil yielding concentrated flavor, aroma, and lipophilic active components for beverage, fragrance, and food industries.',
      primaryApplication: 'Beverage Flavoring, Pharmaceutical Formulations & Natural Aromas',
      suitability: ['Uniform Flavoring', 'Micro-Dosing', 'Industrial Dispersion'],
      availability: 'on-request',
    },
    {
      id: 'private-label-wellness',
      name: 'Private Label / Wellness Packaging',
      form: 'Retail-Ready Pouches, Glass Jars & Custom Blends',
      description:
        'End-to-end private labeling solutions for wellness brands, specialty grocers, and overseas importers with custom branding, nitrogen-flushed barrier packaging, and international barcodes.',
      primaryApplication: 'Retail Brands, E-Commerce Wellness Portfolios & Specialty Grocery',
      suitability: ['Turnkey Branding', 'Nitrogen Flushed', 'Retail Ready'],
      availability: 'available',
    },
  ],
  specifications: [
    {
      parameter: 'Product Form',
      requirement: 'Whole Fingers / Cold-Milled Powder / Concentrated Extract',
      state: 'VERIFIED',
      notes: 'Selectable according to buyer processing requirement',
    },
    {
      parameter: 'Botanical Origin',
      requirement: 'Curcuma Longa (Erode / Tamil Nadu / India)',
      state: 'VERIFIED',
      notes: 'Sourced from audited grower clusters in the Erode river basin',
    },
    {
      parameter: 'Active Curcumin Content',
      requirement: 'Requirement confirmed per product / batch specification',
      state: 'SUBJECT_TO_CONFIRMATION',
      testMethod: 'HPLC (ISO 5562 / ASTA 18.0)',
      notes: 'Target ranges calibrated from standard culinary grades to high-assay nutraceutical lots',
    },
    {
      parameter: 'Moisture Content',
      requirement: 'Requirement confirmed per product / batch (Typically Max 8%–10% depending on form)',
      state: 'SUBJECT_TO_CONFIRMATION',
      testMethod: 'Vacuum Oven / Moisture Balance',
      notes: 'Maintained strictly to prevent microbial or mycotoxin development',
    },
    {
      parameter: 'Total Ash / Acid Insoluble Ash',
      requirement: 'Confirmed against batch specification',
      state: 'SUBJECT_TO_CONFIRMATION',
      testMethod: 'Dry Ashing (ISO 928)',
      notes: 'Reflects rigorous cleaning and destoning prior to milling',
    },
    {
      parameter: 'Volatile Essential Oil',
      requirement: 'Confirmed against batch requirement (Preserved via cold-milling where specified)',
      state: 'SUBJECT_TO_CONFIRMATION',
      testMethod: 'Steam Distillation (ISO 6571)',
    },
    {
      parameter: 'Adulterants, Metanil Yellow & Lead Chromate',
      requirement: 'Zero Tolerance / Negative',
      state: 'VERIFIED',
      testMethod: 'Chromatographic & Spectrophotometric Screening',
      notes: '100% pure botanical matter with zero synthetic coloring agents',
    },
    {
      parameter: 'Microbiological & Heavy Metal Limits',
      requirement: 'Aligned to destination country regulations (EU / FDA / FSSAI)',
      state: 'SUBJECT_TO_CONFIRMATION',
      testMethod: 'ICP-MS / Accredited Third-Party Laboratory CoA',
    },
  ],
  procurementDimensions: [
    {
      dimension: 'Product Form',
      description: 'Physical state calibrated for your manufacturing or retail flow',
      options: ['Whole Dried Fingers', 'Fine Powder (40–100 Mesh)', 'Curcumin Extract', 'Oleoresin'],
    },
    {
      dimension: 'Grade & Purity Level',
      description: 'Active curcumin concentration and sorting grade',
      options: ['Commercial Culinary Grade', 'High-Curcumin Formulation Grade', 'Standardized Nutraceutical'],
    },
    {
      dimension: 'Packaging Medium',
      description: 'Protective packaging configured for sea or air transit',
      options: [
        '25kg / 50kg Multi-Wall Kraft Paper Bags',
        '25kg Food-Grade HDPE Lined PP Bags',
        'Bulk Big Bags (500kg / 1000kg FIBC)',
        'Retail Stand-Up Zipper Pouches (100g – 1kg)',
      ],
    },
    {
      dimension: 'Export Gateway',
      description: 'Designated international freight gateway from South India',
      options: ['Chennai Seaport (INMAA)', 'Tuticorin Seaport (INTUT)', 'Chennai Air Cargo (MAA)'],
    },
  ],
  trade: {
    origin: {
      value: 'Erode, Tamil Nadu, India',
      state: 'VERIFIED',
      note: 'Known as the Yellow City of India for its historic agro-climatic turmeric heritage',
    },
    exportGateways: {
      value: ['Chennai Port (INMAA)', 'Tuticorin Port (INTUT)', 'Chennai Air Cargo (MAA)'],
      state: 'VERIFIED',
    },
    supportedIncoterms: {
      value: ['FOB (Free on Board)', 'CIF (Cost, Insurance & Freight)', 'CFR (Cost & Freight)'],
      state: 'VERIFIED',
      note: 'Commercial terms confirmed against destination port, order volume and shipping line schedules',
    },
    moqDescription: {
      value: 'Defined according to product form, grade and sourcing requirement.',
      state: 'SUBJECT_TO_CONFIRMATION',
      note: 'Palletized LCL and FCL (20ft / 40ft containers) structured per buyer requirement',
    },
    leadTimeDescription: {
      value: 'Lead time is confirmed against product availability, specification, quantity and destination at quotation stage.',
      state: 'SUBJECT_TO_CONFIRMATION',
    },
    customizationOptions: {
      value: ['Custom Grinding & Mesh Size', 'Nitrogen Flushed Packaging', 'Private Labeling', 'Batch Assay Thresholds'],
      state: 'VERIFIED',
    },
    packagingOptions: {
      value: ['25kg Multi-Wall Paper Bags', '50kg Jute / PP Bags', 'Palletized Bulk Shippers', 'Custom Retail Pouches'],
      state: 'VERIFIED',
    },
  },
  verification: {
    originVerification:
      'Traceable to verified grower collectives in the Erode agricultural basin with Chamber of Commerce Certificate of Origin.',
    qualityTesting:
      'Batch-level Certificate of Analysis (CoA) issued by accredited testing laboratories (NABL / SGS / Eurofins on request) confirming active curcuminoids and moisture.',
    inspectionScope:
      'Pre-shipment batch inspection and container loading verification available per commercial agreement.',
    documentationAvailable: [
      'Certificate of Analysis (CoA)',
      'Phytosanitary Certificate (Ministry of Agriculture)',
      'Certificate of Origin (Chamber of Commerce)',
      'Commercial Invoice & Detailed Packing List',
      'Bill of Lading / Air Waybill',
      'FSSAI Export Clearance',
    ],
    samplePolicy:
      'Samples can be arranged for qualified sourcing requirements. Courier and sample charges may apply.',
  },
  availabilityStatus: 'available',
  featuredImage: turmericImg,
};

/**
 * Jewelry Category Products & Architecture
 */
export const jewelryProductFamilies = [
  {
    id: 'pvd-gold-plated',
    name: 'PVD Gold-Plated Collections',
    baseMaterials: 'Hypoallergenic 316L Stainless Steel & Recycled Brass',
    finishes: 'Physical Vapor Deposition (PVD) 14K / 18K Gold, Champagne Tone',
    description:
      'Ultra-durable vacuum-deposited titanium nitride and real gold coatings delivering superior wear resistance, sweat resistance, and long-lasting luster for modern lifestyle jewelry brands.',
    applications: ['Daily Wear Lifestyle Brands', 'Waterproof Fine Jewelry Lines', 'E-Commerce Private Labels'],
    customization: 'Engraving, custom dimensional geometries, anti-tarnish protective sealing',
    complianceNote: 'Compliance requirements can be evaluated at SKU and destination level (e.g. EU REACH, Prop 65).',
  },
  {
    id: 'stainless-steel',
    name: 'Stainless Steel (316L Surgical)',
    baseMaterials: 'Grade 316L Surgical Stainless Steel',
    finishes: 'Mirror High-Polish, Brushed Satin, Matte Black PVD, Gunmetal',
    description:
      'High-durability precision-cast and CNC-machined steel jewelry engineered for tarnish-proof longevity, structural rigidity, and hypoallergenic comfort in wet environments.',
    applications: ['Minimalist Fine Fashion', 'Men’s & Unisex Collections', 'Waterproof Jewelry Portfolios'],
    customization: 'Laser profiling, custom links, stamped logo clasps',
    complianceNote: 'Compliance requirements can be evaluated at SKU and destination level.',
  },
  {
    id: 'brass-artisanal',
    name: 'Artisanal Brass Assemblies',
    baseMaterials: 'Foundry-Poured Recycled Fine Brass',
    finishes: 'Micron Gold Plating, Vintage Patina, High-Luster Protective Lacquer',
    description:
      'Hand-finished designs combining heritage South Indian lost-wax casting methods with sculptural geometric forms, designed for high-end fashion boutiques and runway collections.',
    applications: ['Statement Fashion Jewelry', 'Heritage & Artisanal Collections', 'Boutique Capsule Lines'],
    customization: 'Hand-hammered textures, hollow-core casting, custom filigree',
    complianceNote: 'Compliance requirements can be evaluated at SKU and destination level.',
  },
  {
    id: 'semi-precious-stone',
    name: 'Semi-Precious Stone Settings',
    baseMaterials: 'Natural Cut Gemstones (Onyx, Malachite, Moonstone, Quartz) on Brass/Steel',
    finishes: 'Bezel, Prong, and Tension Architectural Settings',
    description:
      'Stone-based jewelry configurations pairing ethically sourced natural Indian lapidary stones with clean modern metal settings, subject to natural mineral availability and batch specifications.',
    applications: ['Bohemian Luxury Lines', 'Birthstone Collections', 'Bespoke Private Label Collections'],
    customization: 'Cabochon shapes, faceted gems, natural stone curation',
    complianceNote: 'Compliance requirements can be evaluated at SKU and destination level.',
  },
];

/**
 * Textiles Category Products & Architecture
 */
export const textileProductFamilies = [
  {
    id: 'organic-cotton',
    name: 'Certified Organic Cotton Weaves',
    fiberProfile: '100% GOTS-Aligned Organic Indian Long-Staple Cotton',
    constructions: 'Single Jersey, Interlock, Poplin, Twill, Oxford, Canvas',
    description:
      'Pristine, pesticide-free cotton cultivated in certified organic farm zones across Southern India. Spun with ring-spinning technology for optimal tensile strength, softness, and dye affinity.',
    applications: ['Premium Apparel & Knitwear', 'Infant Care & Loungewear', 'Luxury Bed Linens'],
    customization: 'GSM engineered to specification, yarn count selection, combed or carded finishes',
    certificationNote: 'Certification requirements can be evaluated against the selected fabric, supplier and destination market.',
  },
  {
    id: 'linen-flax',
    name: 'Regenerative Linen & Flax Blends',
    fiberProfile: 'Natural Flax Fiber blended with Organic Cotton or Lyocell',
    constructions: 'Plain Linen Weave, Slub Weave, Chambray, Dobby',
    description:
      'Highly breathable, naturally textured fabrics featuring thermoregulating flax fibers. Woven on modern shuttleless looms to ensure uniform density with distinct artisanal slub character.',
    applications: ['Resortwear & Summer Apparel', 'Home Furnishings & Curtains', 'Table Linens'],
    customization: 'Enzyme bio-softening, yarn-dyed stripes, pre-shrunk stabilizing',
    certificationNote: 'Certification requirements can be evaluated against the selected fabric, supplier and destination market.',
  },
  {
    id: 'hemp-fabric',
    name: 'Industrial Hemp & Hemp-Cotton Canvas',
    fiberProfile: 'Bast Hemp Fiber + Organic Cotton Matrix',
    constructions: 'Heavy Duck Canvas, Structured Twill, Fine Muslin',
    description:
      'Exceptionally durable natural bast fiber with high tensile strength, natural antimicrobial characteristics, and minimal ecological footprint. Excellent for utilitarian fashion and accessories.',
    applications: ['Heavy Outerwear & Workwear', 'Sustainable Bags & Footwear', 'Upholstery & Rugged Home Accents'],
    customization: 'Custom waterproofing treatments, vegetable wax coating, pigment dyeing',
    certificationNote: 'Certification requirements can be evaluated against the selected fabric, supplier and destination market.',
  },
  {
    id: 'bamboo-textiles',
    name: 'Bamboo Rayon & Eco-Blends',
    fiberProfile: 'Regenerated Bamboo Fiber / Micro-Modal Blends',
    constructions: 'Ultra-Soft Jersey, French Terry, Rib Knits',
    description:
      'Silky, thermo-adaptive knit textiles offering high drape, moisture-wicking properties, and luxurious skin-contact softness for performance lifestyle and intimate apparel.',
    applications: ['Activewear & Base Layers', 'Intimate Apparel & Sleepwear', 'Luxury Toweling'],
    customization: 'Elastane blending for stretch recovery, micro-ribbing, brushed inner facing',
    certificationNote: 'Certification requirements can be evaluated against the selected fabric, supplier and destination market.',
  },
  {
    id: 'recycled-textiles',
    name: 'Recycled Fiber Weaves (rPET & Reclaimed Cotton)',
    fiberProfile: 'Post-Consumer Recycled Polyester (rPET) blended with Cotton',
    constructions: 'Circular Knit Fleece, Recycled Twill, Ripstop Weaves',
    description:
      'Circular-economy textiles diverting post-industrial cutting waste and post-consumer plastics into high-durability performance fabrics for responsible institutional sourcing.',
    applications: ['Workwear & Uniforms', 'Outdoor Apparel & Backpacks', 'Industrial Protective Covers'],
    customization: 'Custom color matching, mechanical stretch, anti-pilling treatments',
    certificationNote: 'Certification requirements can be evaluated against the selected fabric, supplier and destination market.',
  },
];
