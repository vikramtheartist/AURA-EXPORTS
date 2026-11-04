import kanjivaramHero from '../assets/images/saree_kanjivaram_hero.jpg';
import handloomRegionalImg from '../assets/images/textile_handloom_regional.jpg';
import cottonLinenImg from '../assets/images/textile_cotton_linen.jpg';

export interface TextileProductSpec {
  id: string;
  name: string;
  cardTitle: string;
  cardDescription: string;
  cardForms: string[];
  category: string;
  subcategory: string;
  origin: {
    country: string;
    state: string;
    clusters: string[];
    displayOrigin: string;
  };
  image: string;
  detailRoute: string;
  hsn: string;
  fibreComposition: string;
  yarnSpecs: string;
  weaveAndConstruction: string;
  dimensionsAndWeight: {
    length?: string;
    width?: string;
    gsm?: string;
    weightPerPiece?: string;
  };
  dyesAndFinishing: string;
  qualityAndCertifications: {
    standard: string;
    status: string;
    note: string;
  }[];
  moq: string;
  quantityUnit: string;
  leadTime: string;
  availableLines: string[];
  packaging: {
    individual: string;
    bulkPacking: string;
    masterCartonOrBale: string;
  };
  tradeCompliance: {
    hsnStatus: string;
    originStatus: string;
    documentsAvailable: string[];
    cepaNote: string;
  };
  overviewParagraphs: string[];
  specsTable: { parameter: string; target: string; testOrStandard: string; status: string }[];
}

export const institutionalTextileProducts: TextileProductSpec[] = [
  {
    id: 'authentic-kanchipuram-silk-sarees',
    name: 'Authentic Kanchipuram Silk Sarees',
    cardTitle: 'Authentic Kanchipuram Silk Sarees',
    cardDescription: 'Traditional Kanchipuram silk sarees featuring heritage weaving, rich silk textures, distinctive contrast borders and intricate traditional motifs.',
    cardForms: ['Pure Silk Sarees', 'Bridal Silk', 'Korvai Weave', '+ More'],
    category: 'SILK SAREES & HERITAGE WEAVES',
    subcategory: 'Handloom Heritage Silk Collections',
    origin: {
      country: 'India',
      state: 'Tamil Nadu',
      clusters: ['Kanchipuram'],
      displayOrigin: 'Kanchipuram, Tamil Nadu, India',
    },
    image: kanjivaramHero,
    detailRoute: '/products/apparel-textiles/kanjivaram-silk-saree',
    hsn: '50072010 — Proposed classification for handloom woven pure silk sarees with contrast borders',
    fibreComposition: '100% Pure Mulberry Silk (where verified with Silk Mark certification)',
    yarnSpecs: 'Heavy 3-ply twisted Murukku Pattu silk warp and weft yarns for superior lustre and drape weight',
    weaveAndConstruction: 'Traditional Korvai contrast border interlocking join, Petni pallu attachment, handloom shuttle craft',
    dimensionsAndWeight: {
      length: 'Approximately 6.3 metres (including approx. 80 cm attached unstitched blouse piece)',
      width: 'Approximately 48 inches (122 cm)',
      weightPerPiece: '650 – 900 grams (dependent on zari density and motifs)',
    },
    dyesAndFinishing: 'Natural and eco-friendly certified silk dyes with high washfastness and rubfastness; steam finished',
    qualityAndCertifications: [
      { standard: 'Silk Mark Authenticity', status: 'VERIFIED ON REQUEST', note: 'Tags affixed to verified 100% pure silk pieces' },
      { standard: 'Geographical Indication (GI)', status: 'HERITAGE PROVENANCE', note: 'Origin linked to verified Kanchipuram weaver cooperatives' },
      { standard: 'Zari Metallic Purity', status: 'TESTED / CERTIFIED', note: 'Electroplated silver/tested zari backed by testing evidence' },
    ],
    moq: '10 Sarees (assorted colourways and motif curations supported)',
    quantityUnit: 'Sarees / Pieces',
    leadTime: '2–3 weeks, subject to collection availability and handloom batch readiness',
    availableLines: [
      'Pure Mulberry Silk Heritage Sarees',
      'Heavy Bridal Silk Weaves (Varanasi/Kanchi)',
      'Traditional Contrast Korvai Weaves',
      'Temple Gopuram & Peacock Border Sarees',
      'Brocade All-over Jaal Zari Sarees',
      'Contemporary Pastel Palette Silk Sarees',
    ],
    packaging: {
      individual: 'Breathable non-woven muslin saree preservation covers with zip enclosure',
      bulkPacking: 'Rigid magnetic presentation gift boxes with protective acid-free butter paper',
      masterCartonOrBale: 'Waterproof lined export cartons (indicative 15–20 sarees per carton)',
    },
    tradeCompliance: {
      hsnStatus: 'Proposed tariff code 5007.20.10 (verified per finished product)',
      originStatus: 'Certificate of Origin with verified Tamil Nadu handloom cooperative linkage',
      documentsAvailable: [
        'Certificate of Origin (Non-Preferential / Regional Trade Agreement)',
        'Commercial Invoice & Packing List with Piece-by-Piece Saree Dockets',
        'Silk Mark Verification Tag Certificates (where verified)',
        'Fumigation & Moisture Prevention Transport Clearance',
      ],
      cepaNote: 'Tariff preferences subject to product classification and destination-market customs verification',
    },
    overviewParagraphs: [
      'Revered worldwide as the "Queen of Silks", authentic Kanchipuram sarees are hand-woven in the historical temple town of Kanchipuram, Tamil Nadu. Renowned for their heavy drape, dense 3-ply mulberry silk yarns, and the complex "Korvai" technique — where the contrast border is interlocked seamlessly into the body with three shuttles.',
      'AURA coordinates directly with certified master weaver collectives, offering international ethnic boutiques, bridal salons, and luxury textile curators access to verified pieces adorned with traditional South Indian motifs such as temple gopurams, peacocks (Mayil), sacred rudraksham beads, and royal floral jaal.',
    ],
    specsTable: [
      { parameter: 'Fibre Purity', target: '100% Pure Natural Mulberry Silk (Silk Mark Option)', testOrStandard: 'Flame / Chemical Silk Dissolution Test', status: 'VERIFIED' },
      { parameter: 'Yarn Architecture', target: '3-Ply Twisted Murukku Pattu High-Density Yarn', testOrStandard: 'Microscopic Yarn Count Verification', status: 'VERIFIED' },
      { parameter: 'Border Technique', target: 'Authentic Three-Shuttle Interlocking Korvai', testOrStandard: 'Visual Handloom Structural Inspection', status: 'VERIFIED' },
      { parameter: 'Finished Weight', target: '650 – 900 grams (Heavier Pure Silk Drape)', testOrStandard: 'Electronic Calibration Balance', status: 'CONFIRMED' },
      { parameter: 'Zari Construction', target: 'Tested Silver-Plated Metallic Zari Thread', testOrStandard: 'Precious Metal Assay Test (Available)', status: 'VERIFIED' },
      { parameter: 'Export Packing', target: '15 – 20 Sarees per Moisture-Barrier Master Carton', testOrStandard: 'Export Maritime Transit Benchmark', status: 'CONFIRMED' },
    ],
  },
  {
    id: 'regional-handloom-running-fabrics',
    name: 'Regional Handloom Running Fabrics & Artisan Yardage',
    cardTitle: 'Regional Handloom Running Fabrics & Artisan Yardage',
    cardDescription: 'Explore distinctive Indian regional handloom fabrics and artisan yardage for fashion designers, textile studios and international apparel manufacturers.',
    cardForms: ['Pochampally Ikat', 'Chanderi Weave', 'Sambalpuri', '+ More'],
    category: 'HANDLOOM & REGIONAL TEXTILES',
    subcategory: 'Artisan Yardage & Heritage Weaves',
    origin: {
      country: 'India',
      state: 'Telangana, Madhya Pradesh & Odisha',
      clusters: ['Bhoodan Pochampally', 'Chanderi', 'Sambalpur'],
      displayOrigin: 'Telangana, Madhya Pradesh & Odisha Clusters, India',
    },
    image: handloomRegionalImg,
    detailRoute: '/products/apparel-textiles/chanderi-silk-cotton-fabric',
    hsn: '52085990 (Cotton Woven) / 50079090 (Silk / Silk-Blend Woven Fabrics)',
    fibreComposition: '100% Combed Cotton, Pure Silk Warp with Cotton Weft, Natural Linen-Silk Blends',
    yarnSpecs: '60s to 100s fine combed cotton and pure mulberry raw silk warp/weft combinations',
    weaveAndConstruction: 'Resist tie-dyed double ikat, extra-weft sheer Chanderi weave, pit loom hand-construction',
    dimensionsAndWeight: {
      length: 'Continuous running yardage rolls (50m to 100m continuous cuts)',
      width: '44 to 48 inches (112 cm – 122 cm usable fabric width)',
      gsm: '65 to 180 GSM (gauzy sheer Chanderi to mid-weight cotton Ikat)',
    },
    dyesAndFinishing: 'Certified Azo-free synthetic reactive dyes; natural plant-based indigo and madder options',
    qualityAndCertifications: [
      { standard: 'Azo-Free Dye Compliance', status: 'VERIFIED', note: 'Meets European Union Reach Annex XVII chemical limits' },
      { standard: 'Handloom Authenticity', status: 'HANDLOOM MARK', note: 'Direct cooperative sourcing from verified weaving clusters' },
      { standard: 'Colourfastness to Washing', status: 'GRADE 4.0+', note: 'ISO 105-C06 commercial wash testing benchmark' },
    ],
    moq: '150 Metres (trial sample cuts and multi-pattern assortments supported)',
    quantityUnit: 'Metres',
    leadTime: '3–4 weeks, subject to loom availability and artisan cluster capacity',
    availableLines: [
      'Pochampally Double Ikat Geometric Fabrics',
      'Sambalpuri Tie-Dye Resist Cottons',
      'Chanderi Silk-Cotton Sheer Yardage',
      'Maheshwari Reversible Border Textiles',
      'Hand-Spun Khadi Shirting & Suiting Fabric',
      'Custom Pattern Development for Designers',
    ],
    packaging: {
      individual: '50m to 100m continuous fabric bolts wound on rigid cardboard core tubes',
      bulkPacking: 'Double-layer waterproof polyethylene protective film wrapping',
      masterCartonOrBale: 'Heavy-duty export corrugated boxes or high-density woven bales',
    },
    tradeCompliance: {
      hsnStatus: 'Proposed codes 5208.59.90 (Cotton) / 5007.90.90 (Silk-blend) verified per roll',
      originStatus: 'Certificate of Origin with cluster-level cooperative provenance',
      documentsAvailable: [
        'Certificate of Origin (Chamber Authorized)',
        'Laboratory Colourfastness & Chemical Testing Certificate',
        'Commercial Invoice & Roll-by-Roll Yardage Packing List',
        'Fibre Composition Analysis Test Report',
      ],
      cepaNote: 'Bilateral textile tariff lines evaluated per destination country schedule',
    },
    overviewParagraphs: [
      'India’s regional handloom textiles are celebrated worldwide for their tactile authenticity, irregular artisanal slub textures, and masterfully complex dye-resist techniques. Sourced from historical handloom corridors across Telangana (Pochampally), Madhya Pradesh (Chanderi), and Odisha (Sambalpur), these fabrics provide sustainable natural-fibre yardage for global fashion designers and interior ateliers.',
      'From sheer, breathable Chanderi silk-cottons woven on traditional pit looms to bold mathematical Pochampally double ikat geometrics, AURA ensures every continuous running metre meets strict export tolerances for usable width, structural integrity, and colourfastness.',
    ],
    specsTable: [
      { parameter: 'Fibre Blend Ratio', target: '100% Cotton OR 50/50 Pure Silk-Cotton', testOrStandard: 'AATCC 20A Fibre Quantitative Analysis', status: 'VERIFIED' },
      { parameter: 'Fabric Usable Width', target: '44 to 48 Inches (112 – 122 cm)', testOrStandard: 'ASTM D3774 Fabric Width Measurement', status: 'CONFIRMED' },
      { parameter: 'Fabric Weight', target: '65 – 180 GSM (Dependent on Weave Specification)', testOrStandard: 'ASTM D3776 Standard Test Method for Mass', status: 'CONFIRMED' },
      { parameter: 'Dye Chemistry', target: '100% Certified Azo-Free Dyes (Zero Toxic Amines)', testOrStandard: 'DIN EN 14362-1 Aromatic Amine Screen', status: 'VERIFIED' },
      { parameter: 'Colourfastness (Wash)', target: 'Grade 4.0 or Greater (Staining & Change)', testOrStandard: 'ISO 105-C06 Laboratory Test Method', status: 'VERIFIED' },
      { parameter: 'Indicative MOQ', target: '150 Metres (Continuous Yardage or Trial Cuts)', testOrStandard: 'Commercial Mill Sourcing Threshold', status: 'CONFIRMED' },
    ],
  },
  {
    id: 'organic-cotton-linen-fabrics',
    name: 'Organic Cotton & Handloom Linen Fabrics',
    cardTitle: 'Organic Cotton & Handloom Linen Fabrics',
    cardDescription: 'Explore natural-fibre fabric collections with multiple weaves, weights and material options for apparel, fashion and sustainable textile sourcing.',
    cardForms: ['Organic Poplin', 'Khadi Slub', 'Linen Blends', '+ More'],
    category: 'COTTON & LINEN TEXTILES',
    subcategory: 'Sustainable Natural-Fibre Yardage',
    origin: {
      country: 'India',
      state: 'Tamil Nadu & Gujarat',
      clusters: ['Coimbatore', 'Ahmedabad', 'Erode'],
      displayOrigin: 'Tamil Nadu & Gujarat Textile Hubs, India',
    },
    image: cottonLinenImg,
    detailRoute: '/products/apparel-textiles/organic-cotton-poplin-fabric',
    hsn: '52083290 (Woven Cotton Fabric) / 53091900 (Woven Flax/Linen Fabric)',
    fibreComposition: '100% Certified Organic Cotton, Combed Ringspun Cotton, Pure Flax Linen Blends',
    yarnSpecs: '30s, 40s, 60s and 80s combed ring-spun organic cotton yarns; European-grade flax warp/weft',
    weaveAndConstruction: 'Poplin, plain weave, twill, herringbone, double gauze, and slub khadi textures',
    dimensionsAndWeight: {
      length: 'Continuous rolls of 100m to 150m on high-strength export tubes',
      width: '44 to 58 inches (112 cm – 147 cm wide-width processing available)',
      gsm: '110 to 260 GSM (shirting poplins to structural trouser/jacket linens)',
    },
    dyesAndFinishing: 'Pre-shrunk, sanforized, bio-washed with natural enzymes; low-impact OEKO-TEX dyes',
    qualityAndCertifications: [
      { standard: 'GOTS Certified Organic', status: 'AVAILABLE ON REQUEST', note: 'Transaction Certificates (TC) provided for certified lots' },
      { standard: 'OEKO-TEX Standard 100', status: 'COMPLIANT PROCESSING', note: 'Tested for harmful substances and skin contact safety' },
      { standard: 'Dimensional Stability', status: 'TARGET < 3.0%', note: 'Sanforized finish ensuring warp/weft shrinkage below 3%' },
    ],
    moq: '250 Metres (multi-colour runs and custom lab dips supported)',
    quantityUnit: 'Metres',
    leadTime: '2–3 weeks ex-mill, subject to finish and dye-lot approval',
    availableLines: [
      'GOTS Organic Cotton Crisp Poplin (120 GSM)',
      'Handloom Slub Khadi Textured Weaves',
      'Natural Linen-Cotton Shingled Twill',
      'Soft Breathable Double Gauze (Muslin)',
      'Mid-Weight Linen Canvas for Furnishings',
      'Custom Lab Dips & Pantone Colour Matching',
    ],
    packaging: {
      individual: 'Continuous fabric rolls wound tightly on recyclable cardboard cores',
      bulkPacking: 'Hermetically heat-sealed transparent protective moisture film',
      masterCartonOrBale: 'Export-grade woven polypropylene outer protective bales',
    },
    tradeCompliance: {
      hsnStatus: 'Proposed codes 5208.32.90 / 5309.19.00 verified against fabric weight and weave',
      originStatus: 'Certificate of Origin with verified mill and processing facility audit',
      documentsAvailable: [
        'Certificate of Origin (Chamber Authorized)',
        'GOTS Scope & Transaction Certificates (for verified organic lots)',
        'OEKO-TEX Standard 100 Environmental Compliance Dossier',
        'Pre-Shipment Dimensional Stability & Shrinkage Test Reports',
      ],
      cepaNote: 'Bilateral preferential customs clearance applicable with verified rule of origin documentation',
    },
    overviewParagraphs: [
      'Designed to meet the rigorous environmental benchmarks of international sustainable apparel brands, AURA’s organic cotton and linen textiles combine the natural breathability of handloom construction with modern precision finishing. Sourced from audited processing corridors in Tamil Nadu and Gujarat, these fabrics provide an ethical, circular foundation for global collections.',
      'Every roll undergoes controlled mechanical pre-shrinking (Sanforization) and natural bio-enzyme softening, ensuring dimensional stability with shrinkage consistently constrained below 3%. AURA provides verified lab dips, custom Pantone shade development, and complete mill transparency.',
    ],
    specsTable: [
      { parameter: 'Organic Fibre Content', target: '100% Organic Cotton (GOTS Option Available)', testOrStandard: 'GOTS Transaction Certificate / Lab Analysis', status: 'VERIFIED' },
      { parameter: 'Yarn Count & Type', target: '30s, 40s, 60s Combed Compact Ring-Spun', testOrStandard: 'ASTM D1059 Yarn Number by Skein', status: 'VERIFIED' },
      { parameter: 'Fabric Width Options', target: '44 to 58 Inches (Wide Width Capability)', testOrStandard: 'Standard Fabric Width Inspection', status: 'CONFIRMED' },
      { parameter: 'Fabric GSM Range', target: '110 – 260 GSM (Configurable by Application)', testOrStandard: 'ASTM D3776 Certified Mass Determination', status: 'CONFIRMED' },
      { parameter: 'Dimensional Shrinkage', target: 'Warp < 3.0%, Weft < 3.0% (Sanforized)', testOrStandard: 'AATCC 135 Dimensional Changes in Laundering', status: 'VERIFIED' },
      { parameter: 'Chemical Safety', target: 'Zero Harmful Residues / OEKO-TEX Standard 100', testOrStandard: 'OEKO-TEX Test Method Screen', status: 'VERIFIED' },
    ],
  },
];
