import templeImg from '../assets/images/jewelry_temple.jpg';
import kundanImg from '../assets/images/jewelry_kundan.jpg';
import contemporaryImg from '../assets/images/jewelry_contemporary.jpg';

export interface FashionProductSpec {
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
  baseMetal: string;
  platingAndFinish: string;
  stoneSpecifications: string;
  craftTechniques: string;
  safetyCompliance: string;
  moq: string;
  quantityUnit: string;
  leadTime: string;
  availableLines: string[];
  packaging: {
    individual: string;
    innerBox: string;
    masterCarton: string;
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

export const institutionalFashionProducts: FashionProductSpec[] = [
  {
    id: 'south-indian-temple-jewellery',
    name: 'South Indian Temple & Heritage Jewellery',
    cardTitle: 'South Indian Temple & Heritage Jewellery',
    cardDescription: 'Traditional South Indian jewellery inspired by temple architecture, heritage motifs and intricate artisanal craftsmanship.',
    cardForms: ['Long Harams', 'Chokers', 'Kemp Jhumkas', '+ More'],
    category: 'TEMPLE & TRADITIONAL JEWELLERY',
    subcategory: 'Heritage Artisanal Ornaments',
    origin: {
      country: 'India',
      state: 'Tamil Nadu',
      clusters: ['Chennai', 'Coimbatore'],
      displayOrigin: 'Chennai & Coimbatore, Tamil Nadu, India',
    },
    image: templeImg,
    detailRoute: '/products/fashion-lifestyle/traditional-temple-necklace-set',
    hsn: '71171990 — Proposed classification for imitation jewellery of base metal (subject to classification verification)',
    baseMetal: 'High-density copper and brass alloy casting with structural reinforcement',
    platingAndFinish: '22K antique matte micro-gold plating with protective electro-lacquer anti-tarnish barrier',
    stoneSpecifications: 'Hand-set Kemp cabochon stones, synthetic corundum, uncut polki-style glass, faux seed pearls',
    craftTechniques: 'Traditional South Indian temple prong setting, bezel casting, nagshi repoussé relief motifs',
    safetyCompliance: 'Lead, nickel, and cadmium compliance verified against destination-market thresholds (EU REACH / Prop 65)',
    moq: '50 pieces / sets (mix-and-match SKU curation supported)',
    quantityUnit: 'Pieces / Sets',
    leadTime: '2–3 weeks ex-factory, subject to order volume and design curation',
    availableLines: [
      'Long Harams & Kasu Malai',
      'Architectural Temple Chokers',
      'Classical Kemp Jhumkas',
      'Vaddanams / Bridal Waistbelts',
      'Antique Finish Temple Bangles',
      'Deity & Peacock Motif Pendants',
    ],
    packaging: {
      individual: 'Anti-tarnish zip-seal barrier bags with moisture-scavenger silica packets',
      innerBox: 'Padded velvet presentation boxes with custom buyer logo foil-stamping',
      masterCarton: '5-ply reinforced export cartons with protective bubble cushioning',
    },
    tradeCompliance: {
      hsnStatus: 'Proposed tariff classification 7117.19.90 (verified per shipment)',
      originStatus: 'Certificate of Origin issued by authorized Indian trade chambers',
      documentsAvailable: [
        'Certificate of Origin (Non-Preferential / Regional)',
        'Commercial Invoice & Detailed Packing Docket',
        'Material Safety & Heavy Metal Screening Declarations',
        'Anti-Tarnish Plating Warranty Dossier',
      ],
      cepaNote: 'Tariff concessions subject to destination-market rules of origin and bilateral trade verification',
    },
    overviewParagraphs: [
      'Inspired by the monumental temple architecture and Chola-dynasty bronze metallurgy of Tamil Nadu, AURA’s temple jewellery collections embody centuries of artisanal heritage. Each piece is cast in high-density base alloys and sculpted with traditional temple motifs including temple gopurams, peacocks (Mayil), sacred lotus blooms, and divine crests.',
      'Designed for international retail jewellers, bridal boutiques, and diaspora gift markets, the collections combine authentic antique matte 22K gold finishes with durable, anti-tarnish protective coatings, ensuring pieces retain their lustrous deep patina during overseas transit and long shelf life.',
    ],
    specsTable: [
      { parameter: 'Base Metallurgy', target: 'Copper & Brass High-Density Alloy Casting', testOrStandard: 'XRF Spectrometry Analysis', status: 'VERIFIED' },
      { parameter: 'Plating Thickness', target: '1.0 – 2.0 Microns 22K Antique Micro-Gold', testOrStandard: 'Coulometric Plating Measurement', status: 'VERIFIED' },
      { parameter: 'Anti-Tarnish Seal', target: 'Electrophoretic Polyurethane Clear-Coat', testOrStandard: '24-Hour Salt Spray Environmental Screen', status: 'VERIFIED' },
      { parameter: 'Stone Settings', target: 'Hand-Prong & Bezel Set Kemp / Synthetic Corundum', testOrStandard: 'Visual Mechanical Stress Inspection', status: 'VERIFIED' },
      { parameter: 'Heavy Metal Limits', target: 'Lead < 0.05%, Cadmium < 0.01%, Nickel-Release Safe', testOrStandard: 'EN 1811:2011 / US CPSIA Compliant', status: 'VERIFIED' },
      { parameter: 'Indicative MOQ', target: '50 Pieces / Sets (Mix & Match Assortment)', testOrStandard: 'Commercial Export Policy', status: 'CONFIRMED' },
    ],
  },
  {
    id: 'royal-jadau-kundan-bridal-sets',
    name: 'Royal Jadau Kundan & Meenakari Bridal Sets',
    cardTitle: 'Royal Jadau Kundan & Meenakari Bridal Sets',
    cardDescription: 'Traditional Indian bridal jewellery combining intricate Jadau craftsmanship, decorative Kundan stones and reverse Meenakari artistry.',
    cardForms: ['Bridal Chokers', 'Chandelier Earrings', 'Maang Tikka', '+ More'],
    category: 'KUNDAN & MEENAKARI',
    subcategory: 'Royal Rajasthan Bridal Collections',
    origin: {
      country: 'India',
      state: 'Rajasthan',
      clusters: ['Jaipur'],
      displayOrigin: 'Artisan Ateliers in Jaipur, Rajasthan, India',
    },
    image: kundanImg,
    detailRoute: '/products/fashion-lifestyle/kundan-meenakari-bridal-necklace-set',
    hsn: '71179090 — Proposed classification for handcrafted ornamental imitation jewellery',
    baseMetal: 'Durable brass alloy substrate with traditional pure silver/gold Jadau foil-bedding',
    platingAndFinish: '24K yellow-gold micro-plating with reverse multi-colour Meenakari cloisonné vitreous enamel',
    stoneSpecifications: 'Faceted glass polki stones, simulated emerald drop beads, hand-strung cultured faux pearls',
    craftTechniques: 'Handcrafted reverse Meenakari enameling, Kundan 24K foil stone-setting, zari dori knotting',
    safetyCompliance: 'Cadmium-free soldering and non-toxic mineral enamel certified per export consignment',
    moq: '30 bridal sets (customized colourway assortments supported)',
    quantityUnit: 'Bridal Sets',
    leadTime: '3–4 weeks for handcrafted-to-order collections',
    availableLines: [
      'Royal Jadau Bridal Chokers',
      'Multi-Tier Statement Necklaces',
      'Chandbali & Chandelier Earrings',
      'Bridal Maang Tikka & Passa',
      'Matching Haathphool & Bangles',
      'Custom Colour-Themed Bridal Suites',
    ],
    packaging: {
      individual: 'Velvet-lined rigid keepsake gift boxes with custom brand embossing',
      innerBox: 'Scratch-resistant velvet separators with custom necklace neckforms',
      masterCarton: 'Heavy-duty 5-ply export master cartons (indicative 20 sets per carton)',
    },
    tradeCompliance: {
      hsnStatus: 'Proposed tariff classification 7117.90.90 (verified per shipment)',
      originStatus: 'Certificate of Origin with verified Rajasthan artisan provenance',
      documentsAvailable: [
        'Certificate of Origin (Government Authorized Chambers)',
        'Commercial Invoice, Packing List & HS Code Declarations',
        'Enamel Chemistry Safety Declaration (Azo & Heavy Metal Free)',
        'Artisanal Craft Verification Dossier',
      ],
      cepaNote: 'Duty rates verified per bilateral agreement; preferential claims require verified origin documents',
    },
    overviewParagraphs: [
      'Originating in the royal Mughal and Rajput courts of Rajasthan, Jadau and Meenakari craftsmanship represents one of India’s most celebrated jewellery traditions. Skilled karigars in Jaipur hand-set glass polki stones into refined foil beds, creating a radiant luminosity that mirrors uncut diamonds.',
      'On the reverse side of each piece lies vibrant Meenakari — intricate mineral enameling depicting lotus blooms and Mughal floral vine motifs. Every bridal set is completed with a hand-twisted gold zari dori silk cord with an adjustable slide bead, offering international bridal salons heirloom-grade finishing.',
    ],
    specsTable: [
      { parameter: 'Craft Architecture', target: 'Traditional Jadau Foil-Setting with Reverse Enamel', testOrStandard: 'Master Karigar Guild Inspection', status: 'VERIFIED' },
      { parameter: 'Surface Plating', target: '24K Yellow-Gold Micro-Plating with Protective Glaze', testOrStandard: 'Spectroscopic Coating Thickness Test', status: 'VERIFIED' },
      { parameter: 'Reverse Enamel', target: 'Multi-Colour Vitreous Enamel (Meenakari)', testOrStandard: 'Non-Toxic Mineral Enamel Test Report', status: 'VERIFIED' },
      { parameter: 'Stone Settings', target: 'Faceted Polki Glass with Silver Foil Underlay', testOrStandard: 'Mechanical Stone Anchor Stress Test', status: 'VERIFIED' },
      { parameter: 'Cord Construction', target: 'Adjustable Hand-Twisted Zari Silk Dori', testOrStandard: 'Tensile Cord Strength Verification', status: 'VERIFIED' },
      { parameter: 'Master Packing', target: 'Indicative 20 Sets per Export Carton (Cushioned)', testOrStandard: 'ISTA Drop-Test Standard', status: 'CONFIRMED' },
    ],
  },
  {
    id: 'contemporary-minimalist-cz-jewellery',
    name: 'Contemporary Minimalist & CZ Fashion Jewellery',
    cardTitle: 'Contemporary Minimalist & CZ Fashion Jewellery',
    cardDescription: 'Contemporary fashion jewellery combining refined silhouettes, versatile finishes and decorative stone detailing for international retail collections.',
    cardForms: ['Tennis Bracelets', 'Solitaire Pendants', 'Stackable Rings', '+ More'],
    category: 'CONTEMPORARY FASHION JEWELLERY',
    subcategory: 'Modern Retail & Everyday Elegance',
    origin: {
      country: 'India',
      state: 'Maharashtra & Tamil Nadu',
      clusters: ['Mumbai', 'Chennai'],
      displayOrigin: 'Mumbai & Chennai Manufacturing Partners, India',
    },
    image: contemporaryImg,
    detailRoute: '/products/fashion-lifestyle/geometric-statement-cuff-bracelet',
    hsn: '71171990 — Proposed classification for base-metal imitation jewellery',
    baseMetal: 'Precision-cast brass substrate; 925 sterling silver option available on request',
    platingAndFinish: '18K yellow-gold, rose-gold, and rhodium mirror plating with PVD durability option',
    stoneSpecifications: 'AAA+ diamond-cut Cubic Zirconia (CZ), micro-pavé and precision prong settings',
    craftTechniques: 'High-precision lost-wax investment casting, laser soldering, micro-pavé robotic & hand setting',
    safetyCompliance: '100% hypoallergenic, nickel-free, lead-free and cadmium-compliant',
    moq: '100 pieces (distributed across selected SKU assortments)',
    quantityUnit: 'Pieces',
    leadTime: '1–2 weeks ex-factory, subject to stock and batch allocation',
    availableLines: [
      'Classic & Bezel Tennis Bracelets',
      'Geometric Huggie & Drop Earrings',
      'Solitaire Pendant Chains (16–18 inch)',
      'Stackable Minimalist Finger Rings',
      'Delicate Layered Station Necklaces',
      'Sculptural Minimalist Bangles',
    ],
    packaging: {
      individual: 'Recyclable anti-scratch poly sleeves with scannable barcode labels',
      innerBox: 'Custom-branded rigid slide gift boxes or branded microfibre pouches',
      masterCarton: 'Export corrugated shipping cartons with interior desiccants',
    },
    tradeCompliance: {
      hsnStatus: 'Proposed tariff classification 7117.19.90 (verified per consignment)',
      originStatus: 'Certificate of Origin with verified Indian manufacturing facility audit',
      documentsAvailable: [
        'Certificate of Origin (Government Authorized Chamber)',
        'REACH Annex XVII & US Prop 65 Compliance Declarations',
        'Commercial Invoice, HS Code Verification & Packing Dossier',
        'Salt-Spray Anti-Tarnish Performance Test Certificate',
      ],
      cepaNote: 'Bilateral tariff verification available for eligible destination ports',
    },
    overviewParagraphs: [
      'Tailored for international fashion department stores, online direct-to-consumer jewellery brands, and contemporary boutiques, AURA’s modern fashion jewellery lines merge timeless minimalist silhouettes with precision diamond-cut Cubic Zirconia stones.',
      'Engineered in precision-cast brass with optional 925 sterling silver cores, each piece features triple-layer electro-plating in 18K yellow gold, rose gold, or gleaming platinum-tone rhodium. A hardened microscopic anti-tarnish barrier shields the pieces from skin acidity, humidity, and perfume contact.',
    ],
    specsTable: [
      { parameter: 'Base Substrate', target: 'De-Oxidized Precision Cast Brass (925 Silver Opt.)', testOrStandard: 'Alloy Composition Spectrometry', status: 'VERIFIED' },
      { parameter: 'Plating Finish', target: '18K Gold / Rose Gold / Rhodium (0.5 – 1.0 Microns)', testOrStandard: 'X-Ray Fluorescence Plating Thickness', status: 'VERIFIED' },
      { parameter: 'Stone Grade', target: 'AAA+ Cubic Zirconia (Diamond-Cut Brilliance)', testOrStandard: 'Optical Refraction & Hardness Verification', status: 'VERIFIED' },
      { parameter: 'Setting Durability', target: 'Micro-Pavé Machine & Hand Prong Anchor', testOrStandard: 'Ultrasonic Cleaning Wash Test', status: 'VERIFIED' },
      { parameter: 'Hypoallergenic Safety', target: 'Zero Nickel, Zero Lead (<0.01%), Zero Cadmium', testOrStandard: 'EU REACH Regulation (EC) No 1907/2006', status: 'VERIFIED' },
      { parameter: 'Indicative MOQ', target: '100 Pieces (Flexible Mixed-SKU Assortment)', testOrStandard: 'Commercial Order Benchmark', status: 'CONFIRMED' },
    ],
  },
];
