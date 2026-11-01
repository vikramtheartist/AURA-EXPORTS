import { CatalogProduct, TextileCategoryItem } from '../types/catalog';

// Visual Assets curated from mood board & textile archives
import apparelHeroImg from '../assets/images/apparel_textiles_hero_heritage.jpg';
import silkSareesImg from '../assets/images/textile_silk_sarees.jpg';
import handloomRegionalImg from '../assets/images/textile_handloom_regional.jpg';
import cottonLinenImg from '../assets/images/textile_cotton_linen.jpg';
import blockPrintedImg from '../assets/images/textile_block_printed.jpg';
import apparelGarmentsImg from '../assets/images/textile_apparel_garments.jpg';
import homeFurnishingsImg from '../assets/images/textile_home_furnishings.jpg';
import yarnsComponentsImg from '../assets/images/textile_yarns_components.jpg';

// Kanjivaram Specific Gallery Assets
import kanjivaramHero from '../assets/images/saree_kanjivaram_hero.jpg';
import kanjivaramDrape from '../assets/images/saree_kanjivaram_drape.jpg';
import kanjivaramZari from '../assets/images/saree_kanjivaram_zari.jpg';
import kanjivaramPallu from '../assets/images/saree_kanjivaram_pallu.jpg';
import kanjivaramFolded from '../assets/images/saree_kanjivaram_folded.jpg';
import kanjivaramFabric from '../assets/images/saree_kanjivaram_fabric.jpg';

/**
 * 7 Defined Apparel & Textiles Categories
 */
export const textileCategories: TextileCategoryItem[] = [
  {
    id: 'silk-sarees',
    categoryNumber: 'CATEGORY 01',
    slug: 'silk-sarees',
    title: 'Silk Sarees & Traditional Silk Textiles',
    shortDescription: "Celebrated for its rich silk texture, intricate zari-inspired borders and distinctive traditional designs, Kanjivaram silk sarees represent one of India's most recognised textile traditions. Explore traditional patterns and elegant collections inspired by the heritage of Kanchipuram, Tamil Nadu.",
    image: silkSareesImg,
    productCountText: '8+ Heritage Lines',
    productExamples: ['Kanjivaram Silk Sarees', 'Banarasi Silk Sarees', 'Mysore Silk Sarees', 'Chanderi Silk Sarees', 'Tussar Silk Sarees', 'Traditional Silk Yardage'],
    highlights: ['Pure Mulberry & Blended Weaves', 'Korvai Contrast Borders', 'Metallic & Tested Zari Work', 'GI Tagged Provenance Available'],
  },
  {
    id: 'handloom-regional',
    categoryNumber: 'CATEGORY 02',
    slug: 'handloom-regional',
    title: 'Handloom & Regional Indian Textiles',
    shortDescription: "Explore India's regional textile traditions, distinctive weaving techniques, traditional patterns and handcrafted fabric collections.",
    image: handloomRegionalImg,
    productCountText: '9+ Weaving Traditions',
    productExamples: ['Pochampally Ikat', 'Chanderi & Maheshwari', 'Patola-Inspired Weaves', 'Sambalpuri Textiles', 'Ilkal Sarees', 'Artisan Handloom Yardage'],
    highlights: ['Tie-Dye Warp/Weft Resist Weaves', 'Hand-Spun Yarns & Pit Looms', 'Certified Weaver Collectives', 'Museum-Grade Textile Craft'],
  },
  {
    id: 'cotton-linen-fabrics',
    categoryNumber: 'CATEGORY 03',
    slug: 'cotton-linen-fabrics',
    title: 'Cotton, Linen & Everyday Fabrics',
    shortDescription: 'A versatile selection of fabrics and textile materials for apparel, fashion, furnishing and commercial applications.',
    image: cottonLinenImg,
    productCountText: '10+ Industrial Formats',
    productExamples: ['Combed Cotton Fabrics', 'Pure Flax Linen', 'Cotton-Linen Blends', 'Poplins & Twills', 'Circular Knits', 'Dyed & Bleached Yardage'],
    highlights: ['Airjet & Rapier Woven', 'Custom GSM (80–350 GSM)', 'Reactive Dyeing & Bio-Washing', 'OEKO-TEX Mill Certification'],
  },
  {
    id: 'block-printed-textiles',
    categoryNumber: 'CATEGORY 04',
    slug: 'block-printed-textiles',
    title: 'Hand Block Printed & Decorative Textiles',
    shortDescription: 'Discover distinctive Indian textile designs, traditional printing techniques, decorative motifs and expressive fabric collections.',
    image: blockPrintedImg,
    productCountText: '7+ Artisan Print Styles',
    productExamples: ['Sanganeri Floral Prints', 'Bagru Dabu Mud-Resist', 'Kalamkari Hand-Painted & Block', 'Ajrakh Geometric Patterns', 'Discharge Prints'],
    highlights: ['Hand-Carved Teakwood Blocks', 'Azo-Free & Natural Dyes', 'Distinctive Motif Imperfections', 'Ethical Sourcing Networks'],
  },
  {
    id: 'apparel-garments',
    categoryNumber: 'CATEGORY 05',
    slug: 'apparel-garments',
    title: 'Apparel & Garments',
    shortDescription: 'A broad selection of apparel and garments spanning traditional Indian clothing and contemporary everyday fashion.',
    image: apparelGarmentsImg,
    productCountText: '10+ Garment Categories',
    productExamples: ["Men's Wear", "Women's Wear", 'Kidswear', 'Ethnicwear (Kurtas & Sets)', 'Woven Shirts & Trousers', 'Contemporary Dresses'],
    highlights: ['Cut-Make-Trim (CMT) Private Label', 'AQL 1.5/2.5 Inspection Benchmarks', 'International Standard Sizing', 'Custom Trims & Packaging'],
  },
  {
    id: 'home-textiles',
    categoryNumber: 'CATEGORY 06',
    slug: 'home-textiles',
    title: 'Home Textiles & Furnishings',
    shortDescription: 'Textile products and furnishing essentials inspired by Indian fabrics, designs and craftsmanship for residential and commercial markets.',
    image: homeFurnishingsImg,
    productCountText: '8+ Product Lines',
    productExamples: ['Bedsheets & Bed Linen', 'Pillow Covers', 'Plush Terry Towels', 'Cushion Covers', 'Table Linens & Runners', 'Curtains & Drapes'],
    highlights: ['200–800 Thread Count Percale & Sateen', 'Hotel Laundry Wash Endurance', 'Zero-Twist Absorbent Terry', 'Export Master Packaging'],
  },
  {
    id: 'yarns-components',
    categoryNumber: 'CATEGORY 07',
    slug: 'yarns-components',
    title: 'Yarns, Fabrics & Textile Components',
    shortDescription: 'Textile materials, yarns and related components serving fabric production, apparel manufacturing and international textile sourcing.',
    image: yarnsComponentsImg,
    productCountText: '6+ Industrial Specs',
    productExamples: ['Cotton Yarn (Ring Spun & Compact)', 'Polyester & Blended Yarn', 'High-Tenacity Sewing Threads', 'Garment Accessories', 'Textile Trims'],
    highlights: ['Ne 10s to 100s Yarn Counts', 'Uster Tested Quality', 'Uniform Tensile Strength', 'Bulk Containerized Freight'],
  },
];

/**
 * Master Product Catalog for Apparel & Textiles Vertical
 */
export const masterTextileProducts: CatalogProduct[] = [
  // 1. HERO FEATURED PRODUCT: KANJIVARAM SILK SAREE
  {
    id: 'kanjivaram-silk-saree',
    name: 'Kanjivaram Silk Saree (Traditional South Indian Weave)',
    slug: 'kanjivaram-silk-saree',
    botanicalOrMaterialName: 'Pure Mulberry Silk with Metallic Zari Weft (Tested & Traditional Weaves)',
    category: 'Apparel & Textiles',
    categorySlug: 'apparel-textiles',
    subcategory: 'Silk Sarees & Traditional Silk Textiles',
    subcategoryId: 'silk-sarees',
    tagline: 'Originating from Kanchipuram, Tamil Nadu, celebrated for its rich heavy silk, interlocking korvai borders, and ceremonial zari craftsmanship.',
    description: 'An icon of South Indian textile heritage, featuring heavy silk body, contrast temple borders, and intricate pallu motifs depicting peacocks, rudrakshams, and floral vines.',
    detailedOverview: 'Kanchipuram, known as the Silk City of South India, has sustained centuries of master weaving traditions. Crafted on manual pit looms using three-ply twisted silk warp and weft, Kanjivaram sarees are distinguished by their exceptional durability, weight, and the signature "Korvai" technique where body and border are woven separately and interlocked seamlessly. AURA connects overseas distributors, boutique retailers, and South Asian diaspora bridal houses with authenticated weaver societies, offering verified fiber testing certificates and transparent commercial export terms.',
    image: kanjivaramHero,
    gallery: [kanjivaramHero, kanjivaramDrape, kanjivaramZari, kanjivaramPallu, kanjivaramFolded, kanjivaramFabric],
    formats: [
      'Pure Mulberry Silk with Tested Zari',
      'Art Silk & Silk-Cotton Blend Varieties (Cost-Effective Option)',
      'Bridal Contrast Border Saree (with Blouse Piece)',
      'Traditional Temple Border Patterns (Gopuram & Rudraksham)',
      'Custom Corporate & Boutique Color Lots'
    ],
    origin: 'Kanchipuram & Arani Weaving Clusters, Tamil Nadu, India',
    specifications: {
      'Silk Composition': '100% Pure Mulberry Silk (Silk Mark verifiable upon request) or Premium Art Silk option',
      'Zari Composition': 'Tested metallic zari wire (copper core with silver/gold electroplate) or traditional zari',
      'Saree Length': '6.2 Meters total length (inclusive of 80cm unstitched matching blouse fabric)',
      'Fabric Width': '48 inches (122 cm)',
      'Weight Range': '750g to 950g per saree (denoting dense, durable silk construction)',
      'Weaving Technique': 'Three-shuttle Korvai interlock weaving with Petni pallu join',
      'Traditional Motifs': 'Mayil (Peacock), Kuthirai (Winged Horse), Rudraksham, Temple Gopuram spikes, Floral Buttas',
      'Border Style': 'Broad contrast border (6 to 12 inches) with rich zari banquette',
      'Product Care': 'Dry clean only; store folded in breathable cotton muslin fabric',
    },
    packaging: [
      'Individual presentation box with moisture-resistant butter paper wrapping and silk tassel accent',
      'Master cartons containing 20 to 30 individually boxed sarees, strapped for air freight or container shipping'
    ],
    availability: 'available',
    featured: true,
    enquiryEnabled: true,
    primaryApplications: [
      'Bridal Trousseau & Luxury Wedding Wear Boutiques',
      'International Indian Diaspora Department Stores',
      'High-End Cultural Wear & Festive Retail Collections',
      'Institutional & Corporate Gifting Programs'
    ],
    exportGateways: ['Chennai Port (INMAA)', 'Chennai Air Cargo (MAA)', 'Bengaluru Air Cargo (BLR)'],
    supportedIncoterms: ['FOB', 'CIF', 'FCA'],
    textileDetails: {
      composition: 'Mulberry Silk & Metallic Zari',
      gsm: '160 - 220 GSM equivalent dense weave',
      width: '48 inches',
      weaveOrKnit: 'Handwoven 3-ply interlocking twill/satin silk',
      finish: 'Natural silk luster, pre-conditioned and inspected',
      customization: ['Buyer-specified border width', 'Custom color combinations', 'Blouse piece configuration'],
    },
  },

  // 2. Banarasi Silk Saree
  {
    id: 'banarasi-silk-saree',
    name: 'Banarasi Brocade Silk Saree',
    slug: 'banarasi-silk-saree',
    botanicalOrMaterialName: 'Fine Katan Silk with Metallic Brocade (Zari Weft)',
    category: 'Apparel & Textiles',
    categorySlug: 'apparel-textiles',
    subcategory: 'Silk Sarees & Traditional Silk Textiles',
    subcategoryId: 'silk-sarees',
    tagline: 'Opulent Varanasi handloom saree featuring intricate floral jaal, kalga paisley, and architectural Mughal motifs.',
    description: 'Renowned for compact brocade weaving, gold and silver zari detailing, and lustrous drape prized across bridal and formal markets.',
    detailedOverview: 'Banarasi sarees trace their roots to the sacred weaving looms of Varanasi. Characterized by intricate floral nets (jaal), foliate motifs (jhallar), and heavy brocading, these sarees are woven by skilled master craftsmen using fine katan silk yarns.',
    image: silkSareesImg,
    formats: ['Katan Pure Silk Brocade', 'Georgette Silk Banarasi', 'Organza Silk Banarasi with Zari', 'Tanchoi Weave Patterns'],
    origin: 'Varanasi Weaving Clusters, Uttar Pradesh, India',
    specifications: {
      'Fabric Composition': 'Pure Katan Silk or Silk Blends',
      'Brocade Type': 'Kadwa (individual motif lock) or Fekwa (continuous weft)',
      'Length & Width': '6.2 Meters x 45 inches',
      'Weight': '800g to 1100g',
    },
    packaging: ['Individual fabric presentation pouch in rigid luxury gift box.'],
    availability: 'available',
    featured: true,
    enquiryEnabled: true,
    primaryApplications: ['Bridal Boutiques', 'Fine Ethnic Retailers', 'Festive Occasion Wear'],
    exportGateways: ['Delhi Air Cargo (DEL)', 'Mumbai Air Cargo (BOM)'],
    supportedIncoterms: ['FOB', 'CIF'],
  },

  // 3. Mysore Silk Saree
  {
    id: 'mysore-silk-saree',
    name: 'Mysore Pure Silk Crepe Saree',
    slug: 'mysore-silk-saree',
    botanicalOrMaterialName: '100% Karnataka Mulberry Silk Crepe with Pure Zari Border',
    category: 'Apparel & Textiles',
    categorySlug: 'apparel-textiles',
    subcategory: 'Silk Sarees & Traditional Silk Textiles',
    subcategoryId: 'silk-sarees',
    tagline: 'Featherlight, fluid silk crepe with understated elegance, solid body, and rich gold zari border.',
    description: 'Produced using Karnataka’s finest mulberry cocoons, characterized by soft drape, smooth pebbled texture, and enduring sheen.',
    detailedOverview: 'Mysore silk represents South India’s minimalist royal luxury. Utilizing high-twist silk crepe yarns and single-tone piece-dyeing, this saree is exceptionally comfortable, making it a staple for discerning corporate and formal wardrobes.',
    image: silkSareesImg,
    formats: ['Crepe Silk Solid with Zari Border', 'Georgette Mysore Silk', 'Tissue Mysore Silk with All-Over Zari'],
    origin: 'Mysore & Ramanagara Silk Belts, Karnataka, India',
    specifications: {
      'Silk Grade': 'Mulberry Silk 65–85 GSM lightweight crepe',
      'Zari Quality': 'Tested gold-plated metallic yarn',
      'Length & Width': '6.2 Meters x 45 inches',
    },
    packaging: ['Flat presentation box with moisture absorber.'],
    availability: 'available',
    featured: true,
    enquiryEnabled: true,
    primaryApplications: ['Diplomatic & Formal Wear', 'Corporate Ethnic Apparel', 'Fine Silk Retailers'],
    exportGateways: ['Bengaluru Air Cargo (BLR)', 'Chennai Port (INMAA)'],
    supportedIncoterms: ['FOB', 'CIF'],
  },

  // 4. Pochampally Ikat Handloom Fabric
  {
    id: 'pochampally-ikat-fabric',
    name: 'Pochampally Ikat Handloom Woven Fabric & Sarees',
    slug: 'pochampally-ikat-fabric',
    botanicalOrMaterialName: 'Double-Ikat Handwoven Cotton & Silk (Telia Rumal Tradition)',
    category: 'Apparel & Textiles',
    categorySlug: 'apparel-textiles',
    subcategory: 'Handloom & Regional Indian Textiles',
    subcategoryId: 'handloom-regional',
    tagline: 'Geometric double-ikat textiles with precise resist-dyed patterns woven on heritage handlooms.',
    description: 'Sourced from Bhoodan Pochampally, Telangana, where warp and weft threads are tie-dyed prior to weaving to yield sharp geometric motifs.',
    detailedOverview: 'Pochampally Ikat is a globally recognized Geographical Indication (GI) protected craft. Its intricate diamond, chevron, and abstract geometric patterns require immense mathematical precision from the master weavers.',
    image: handloomRegionalImg,
    formats: ['Handwoven Ikat Cotton Yardage', 'Silk-Cotton Ikat Saree Sets', 'Heavy Telia Rumal Fabric Formats', 'Apparel Fabric Rolls'],
    origin: 'Pochampally & Yadadri Bhuvanagiri, Telangana, India',
    specifications: {
      'Weaving Method': 'Double Ikat / Single Ikat Handloom',
      'Fiber Selection': '2/80s & 2/100s Combed Cotton or Pure Silk',
      'Fabric Width': '44 inches to 48 inches',
      'Colorfastness': 'Tested reactive vat dyes with Grade 4 colorfastness',
    },
    packaging: ['Carefully folded bolt bolts or roll packaging with protective inner poly sleeve.'],
    availability: 'available',
    featured: true,
    enquiryEnabled: true,
    primaryApplications: ['Contemporary Designer Runways', 'Boutique Apparel Manufacturing', 'Artisanal Home Decor'],
    exportGateways: ['Hyderabad Air Cargo (HYD)', 'Chennai Port (INMAA)'],
    supportedIncoterms: ['FOB', 'CIF'],
  },

  // 5. Sanganeri & Bagru Block Printed Fabric
  {
    id: 'sanganeri-bagru-block-print',
    name: 'Hand Block Printed Cotton Fabric (Sanganeri & Bagru)',
    slug: 'sanganeri-bagru-block-print',
    botanicalOrMaterialName: '100% Cambric & Voile Cotton with Natural & Azo-Free Dyes',
    category: 'Apparel & Textiles',
    categorySlug: 'apparel-textiles',
    subcategory: 'Hand Block Printed & Decorative Textiles',
    subcategoryId: 'block-printed-textiles',
    tagline: 'Artisanal wooden block printed cotton fabrics showcasing traditional Rajasthani floral bootas and dabu mud-resist geometry.',
    description: 'Handcrafted by Chippa artisan families near Jaipur using hand-carved woodblocks, river washing, and sun-bleached drying.',
    detailedOverview: 'A staple of international resortwear, bohemian fashion, and premium home textiles. Sanganeri prints feature delicate floral sprigs on light grounds, while Bagru utilizes rich indigo, madder, and dabu mud-resist pastes for deep earthy character.',
    image: blockPrintedImg,
    formats: ['60x60 Pure Cotton Cambric Yardage', 'Voile Fabric for Summer Dresses & Scarves', 'Pre-Cut Kurta & Dress Material Sets', 'Tablecloth & Furnishing Yardage'],
    origin: 'Sanganer & Bagru, Rajasthan, India',
    specifications: {
      'Base Fabric': '100% Cotton 60s x 60s Cambric (approx. 90-110 GSM)',
      'Printing Method': 'Manual Hand Block (3 to 6 block color overlays)',
      'Width': '44 inches (112 cm)',
      'Dyes': 'Certified Azo-Free low impact reactive dyes & plant-based dabu resist',
    },
    packaging: ['Continuous bolts (25m - 50m) wrapped in moisture-barrier film in export cartons.'],
    availability: 'available',
    featured: true,
    enquiryEnabled: true,
    primaryApplications: ['Resortwear & Summer Clothing Lines', 'Fashion Tunics & Dresses', 'Table Linens & Interior Accents'],
    exportGateways: ['Delhi Air Cargo (DEL)', 'Nhava Sheva (INNSA)'],
    supportedIncoterms: ['FOB', 'CIF'],
  },

  // 6. Cotton, Linen & Everyday Fabrics
  {
    id: 'woven-cotton-linen-fabrics',
    name: 'Industrial Woven Cotton & Linen Fabrics',
    slug: 'woven-cotton-linen-fabrics',
    botanicalOrMaterialName: '100% Cotton, Pure Linen & Cotton-Linen Blends',
    category: 'Apparel & Textiles',
    categorySlug: 'apparel-textiles',
    subcategory: 'Cotton, Linen & Everyday Fabrics',
    subcategoryId: 'cotton-linen-fabrics',
    tagline: 'High-uniformity plain poplins, twills, oxfords, and slub linens engineered for apparel manufacturing.',
    description: 'Produced on high-speed airjet and rapier looms across Coimbatore and Surat, available in greige, piece-dyed, and yarn-dyed checks.',
    detailedOverview: 'Supplied to garment factories and fashion brands across Europe, the Middle East, and Asia. Consistent tensile strength, pre-shrunk sanforization, and strict color-matching tolerances.',
    image: cottonLinenImg,
    formats: ['Solid Piece-Dyed Poplin (100–140 GSM)', 'Chino & Workwear Twill (180–280 GSM)', 'Yarn-Dyed Oxford & Chambray', 'Slub Linen Shirting'],
    origin: 'Coimbatore, Erode & Surat, India',
    specifications: {
      'Fabric Width': '44 inches to 63 inches (112 to 160 cm)',
      'Shrinkage Tolerance': '< 2.5% following sanforization',
      'Yarn Counts': '30s, 40s, 50s, 60s, 80/2 combed compact',
    },
    packaging: ['Standard 100m rolls on reinforced paperboard cores wrapped in protective poly tubes.'],
    availability: 'available',
    featured: true,
    enquiryEnabled: true,
    primaryApplications: ['Menswear & Womenswear Shirting', 'Trousers and Chinos', 'Commercial Uniform Assembly'],
    exportGateways: ['Chennai Port (INMAA)', 'Tuticorin Port (INTUT)'],
    supportedIncoterms: ['FOB', 'CIF', 'CFR'],
  },

  // 7. Apparel & Garments (Kurtas, Shirts & Sets)
  {
    id: 'contemporary-indian-apparel',
    name: "Finished Apparel & Contemporary Indian Ethnicwear",
    slug: 'contemporary-indian-apparel',
    botanicalOrMaterialName: 'Finished Garment Assembly (Woven & Knits)',
    category: 'Apparel & Textiles',
    categorySlug: 'apparel-textiles',
    subcategory: 'Apparel & Garments',
    subcategoryId: 'apparel-garments',
    tagline: 'Cut-to-pack men’s formal & casual shirts, kurtas, women’s tunics, and coordinated ethnicwear sets.',
    description: 'Precision manufactured apparel with tailored collars, reinforced seams, and private-label brand packaging.',
    detailedOverview: 'AURA provides complete garment manufacturing coordination for international retail chains and fashion distributors. From tech-pack development to bulk sewing and final AQL 1.5 inspection, we ensure international fit standards.',
    image: apparelGarmentsImg,
    formats: ["Men's Formal Woven Shirts", "Women's Tunics & Kurta Sets", 'Linen Casual Resortwear', 'Kidswear Everyday Basics'],
    origin: 'Bengaluru & Tirupur Garment Corridors, India',
    specifications: {
      'Stitching Standard': '16–18 stitches per inch (SPI) single-needle tailoring',
      'Sizing Grid': 'US, EU, UK, and Asian regional size grading',
      'Hardware': 'YKK zippers, branded pearl/resin buttons',
    },
    packaging: ['Individual retail polybags with hanger or flat-fold in export master cartons.'],
    availability: 'available',
    featured: false,
    enquiryEnabled: true,
    primaryApplications: ['Retail Department Stores', 'Private-Label Fashion Lines', 'Corporate Uniform Programs'],
    exportGateways: ['Chennai Port (INMAA)', 'Nhava Sheva (INNSA)'],
    supportedIncoterms: ['FOB', 'CIF', 'FCA'],
  },

  // 8. Home Textiles & Furnishings
  {
    id: 'luxury-bed-home-textiles',
    name: 'Home Textiles, Bed Linen & Towels',
    slug: 'luxury-bed-home-textiles',
    botanicalOrMaterialName: '100% Long-Staple Cotton (200-800 TC) & Ring-Spun Terry',
    category: 'Apparel & Textiles',
    categorySlug: 'apparel-textiles',
    subcategory: 'Home Textiles & Furnishings',
    subcategoryId: 'home-textiles',
    tagline: 'High-thread-count sheet sets, plush hotel bath towels, table linens, and decorative cushion covers.',
    description: 'Crafted in Karur, India’s home textile capital, engineered for institutional laundering endurance and luxury consumer hand-feel.',
    detailedOverview: 'Supplying hotels, boutique resorts, and home retail distributors worldwide. Includes deep-pocket fitted sheets, percale and sateen duvet sets, zero-twist terry bath towels, and decorative slub cushion covers.',
    image: homeFurnishingsImg,
    formats: ['Hotel 4-Piece Sheet Sets', 'Plush Bath Towels (500–700 GSM)', 'Decorative Cushion Covers (18x18", 20x20")', 'Table Runners & Napkin Sets'],
    origin: 'Karur & Coimbatore, Tamil Nadu, India',
    specifications: {
      'Thread Count': '200 TC, 300 TC, 400 TC, 600 TC, 800 TC',
      'Towel Weight': '500 GSM to 800 GSM zero-twist or two-ply pile',
      'Hemming': 'Double-stitched longitudinal hems with dobby border',
    },
    packaging: ['Self-fabric pouches, retail presentation card packaging, or bulk hotel master packs.'],
    availability: 'available',
    featured: true,
    enquiryEnabled: true,
    primaryApplications: ['Hospitality & Hotel Chains', 'Department Store Home Sections', 'DTC Home Furnishing Brands'],
    exportGateways: ['Tuticorin Port (INTUT)', 'Chennai Port (INMAA)'],
    supportedIncoterms: ['FOB', 'CIF', 'CFR'],
  },

  // 9. Yarns & Textile Components
  {
    id: 'industrial-spun-yarns-threads',
    name: 'Industrial Spun Yarns & High-Tenacity Sewing Threads',
    slug: 'industrial-spun-yarns-threads',
    botanicalOrMaterialName: '100% Combed Cotton, Carded & Spun Polyester Yarns',
    category: 'Apparel & Textiles',
    categorySlug: 'apparel-textiles',
    subcategory: 'Yarns, Fabrics & Textile Components',
    subcategoryId: 'yarns-components',
    tagline: 'Ring-spun, compact cotton yarns and high-tenacity polyester sewing threads for global spinning and garment mills.',
    description: 'Manufactured with high Count Strength Product (CSP) and Uster-tested uniformity for break-free weaving and sewing operations.',
    detailedOverview: 'Supplying knitting and weaving mills in Bangladesh, Vietnam, Sri Lanka, and Europe. Count ranges from Ne 10s to 100s in single and plied twists on paper cones with traverse winding.',
    image: yarnsComponentsImg,
    formats: ['Combed Compact Cotton Yarn (Ne 20s to 80s)', 'Open-End Rotor Yarns for Denim/Terry', 'Spun Polyester Sewing Threads (Ticket 120, 80, 40)'],
    origin: 'Coimbatore & Rajkot Spinning Hubs, India',
    specifications: {
      'Count Range': 'Ne 10/1 through Ne 100/1',
      'Strength Benchmark': '2800 – 3200+ CSP',
      'Cone Weight': '1.89 kg to 2.5 kg cones with protective wrapping',
    },
    packaging: ['Corrugated cartons (approx. 45.36 kg / 100 lbs) or stretch-wrapped palletized container loads.'],
    availability: 'available',
    featured: false,
    enquiryEnabled: true,
    primaryApplications: ['Fabric Weaving & Knitting Mills', 'Industrial Apparel Stitching Lines', 'Denim & Home Textile Production'],
    exportGateways: ['Tuticorin Port (INTUT)', 'Chennai Port (INMAA)'],
    supportedIncoterms: ['FOB', 'CIF', 'CFR'],
  },
];

/**
 * Helper lookups
 */
export function getTextileProductBySlug(slug: string): CatalogProduct | undefined {
  return masterTextileProducts.find((p) => p.slug === slug || p.id === slug);
}

export function getTextileProductsByCategory(categoryId: string): CatalogProduct[] {
  return masterTextileProducts.filter((p) => p.subcategoryId === categoryId);
}

export function getFeaturedTextileProducts(): CatalogProduct[] {
  return masterTextileProducts.filter((p) => p.featured);
}
