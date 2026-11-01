import { CatalogProduct, FashionCategoryItem } from '../types/catalog';

// Visual Assets curated directly from Pinterest mood board
import heroImg from '../assets/images/fashion_lifestyle_hero.jpg';
import templeImg from '../assets/images/jewelry_temple.jpg';
import kundanImg from '../assets/images/jewelry_kundan.jpg';
import oxidizedImg from '../assets/images/jewelry_oxidized.jpg';
import contemporaryImg from '../assets/images/jewelry_contemporary.jpg';
import accessoriesImg from '../assets/images/fashion_accessories.jpg';
import lifestyleImg from '../assets/images/lifestyle_artisan.jpg';

/**
 * 6 Defined Fashion & Lifestyle Categories
 */
export const fashionCategories: FashionCategoryItem[] = [
  {
    id: 'temple-traditional',
    categoryNumber: 'CATEGORY 01',
    slug: 'temple-traditional',
    title: 'Temple & Traditional Jewelry',
    shortDescription: "Jewelry inspired by India's traditional artistic heritage, featuring intricate motifs, decorative detailing and timeless designs.",
    image: templeImg,
    productCountText: '8+ Product Lines',
    productExamples: ['Temple Necklaces', 'Temple Earrings', 'Jhumkas', 'Traditional Bangles', 'Bridal Sets', 'Traditional Pendants', 'Antique Finish'],
    highlights: ['South Indian Heritage Motifs', 'Antique 22K Gold Finish', 'Nagshi & Repoussé Artistry', 'Export Anti-Tarnish Coated'],
  },
  {
    id: 'kundan-meenakari',
    categoryNumber: 'CATEGORY 02',
    slug: 'kundan-meenakari',
    title: 'Kundan, Meenakari & Polki-Inspired Jewelry',
    shortDescription: "Ornamental jewelry inspired by India's rich decorative traditions, featuring intricate settings, colourful detailing and distinctive craftsmanship.",
    image: kundanImg,
    productCountText: '7+ Collections',
    productExamples: ['Kundan Necklaces', 'Meenakari Earrings', 'Polki-Inspired Jewelry', 'Statement Sets', 'Decorative Bangles', 'Bridal Accessories'],
    highlights: ['Glass-Kundan Foil Settings', 'Vibrant Cloisonné Meenakari Enameling', 'Brass / Copper Alloy Base', 'Handcrafted Back Meena Detailing'],
  },
  {
    id: 'oxidized-tribal',
    categoryNumber: 'CATEGORY 03',
    slug: 'oxidized-tribal',
    title: 'Oxidized & Tribal Jewelry',
    shortDescription: "Distinctive jewelry collections inspired by traditional Indian designs, tribal aesthetics and contemporary bohemian fashion.",
    image: oxidizedImg,
    productCountText: '6+ Distinct Styles',
    productExamples: ['Oxidized Earrings', 'Tribal Necklaces', 'Statement Rings', 'Silver-Tone Jewelry', 'Bohemian Accessories', 'Tribal-Inspired Designs'],
    highlights: ['German Silver & Antique Patina', 'Gypsy & Banjara Motifs', 'Nickel-Safe & Hypoallergenic', 'Lightweight Commercial Castings'],
  },
  {
    id: 'contemporary-fashion',
    categoryNumber: 'CATEGORY 04',
    slug: 'contemporary-fashion',
    title: 'Contemporary Fashion Jewelry',
    shortDescription: "Versatile fashion jewelry and statement accessories designed for contemporary retail, fashion and lifestyle markets.",
    image: contemporaryImg,
    productCountText: '9+ Trend Silhouettes',
    productExamples: ['Fashion Earrings', 'Statement Necklaces', 'Layered Necklaces', 'Beaded Jewelry', 'Fashion Rings', 'Bracelet Collections'],
    highlights: ['316L Surgical Steel & Brass', 'PVD Vacuum Gold Plating', 'Geometric & Organic Sculptural Forms', 'EU REACH & Prop 65 Compliant'],
  },
  {
    id: 'handcrafted-accessories',
    categoryNumber: 'CATEGORY 05',
    slug: 'handcrafted-accessories',
    title: 'Handcrafted Fashion Accessories',
    shortDescription: "A curated range of handcrafted accessories combining distinctive materials, traditional techniques and contemporary styling.",
    image: accessoriesImg,
    productCountText: '7+ Made-up Lines',
    productExamples: ['Handcrafted Bags', 'Embroidered Pouches (Potlis)', 'Fashion Scarves', 'Artisan Stoles', 'Fabric Accessories', 'Decorative Belts'],
    highlights: ['Zari & Aari Hand Embroidery', 'Velvet & Raw Silk Substrates', 'Custom Brand Private Labeling', 'Artisanal Assembly Lines'],
  },
  {
    id: 'indian-lifestyle',
    categoryNumber: 'CATEGORY 06',
    slug: 'indian-lifestyle',
    title: 'Indian Lifestyle & Artisan Products',
    shortDescription: "Discover distinctive lifestyle products inspired by Indian craftsmanship, design and artistic traditions.",
    image: lifestyleImg,
    productCountText: '5+ Product Lines',
    productExamples: ['Decorative Lifestyle Accessories', 'Artisan-Crafted Objects', 'Traditional Keepsakes', 'Handcrafted Gift Boxes', 'Lifestyle Adornments'],
    highlights: ['Hand-Hammered Brass & Wood', 'Inlay & Lacquer Finishes', 'Sustainable Artisan Sourcing', 'Premium Export Gift Packaging'],
  },
];

/**
 * Master Product Catalog for Fashion & Lifestyle Vertical
 */
export const masterFashionProducts: CatalogProduct[] = [
  // 1. Temple Jewelry
  {
    id: 'traditional-temple-necklace-set',
    name: 'Traditional Indian Temple Necklace Set',
    slug: 'traditional-temple-necklace-set',
    botanicalOrMaterialName: 'High-Grade Brass Alloy with Antique Gold Finish & Synthetic Ruby Cabochons',
    category: 'Fashion & Lifestyle',
    categorySlug: 'fashion-lifestyle',
    subcategory: 'Temple & Traditional Jewelry',
    subcategoryId: 'temple-traditional',
    tagline: 'Regal South Indian temple necklace with Lakshmi & peacock motifs, accompanied by matching jhumkas.',
    description: 'Inspired by Chola dynasty temple metallurgy, crafted in durable copper-brass base with antique matte micro-gold plating and synthetic spinel accents.',
    detailedOverview: 'Temple jewelry originated as sacred adornments crafted for deity idols in South Indian temples, later adopted by classical Bharatanatyam dancers and royal courts. AURA connects international jewelry distributors, bridal boutiques, and ethnic retail chains with audited artisan workshops in Coimbatore and Rajkot. Featuring traditional nagshi (repoussé) work, floral filigree, and protective anti-tarnish lacquering.',
    image: templeImg,
    gallery: [templeImg, heroImg, kundanImg],
    formats: [
      'Complete Choker & Jhumka Set',
      'Long Haram (Opera-Length) Configuration',
      'Matching Maang Tikka & Bangle Add-Ons',
      'Custom Plating Tones (Matte Gold, Antique Russet, Polish Gold)'
    ],
    origin: 'Coimbatore & Rajkot Foundry Corridors, India',
    specifications: {
      'Base Metal': 'High-purity brass and copper alloy (lead-free, nickel-tested)',
      'Surface Finish': '22K antique micro-gold plating with electrophoretic anti-tarnish e-coat',
      'Stone Setting': 'High-clarity synthetic red spinels, emerald-green simulants, faux seed pearls',
      'Closure Mechanism': 'Adjustable traditional zari dori (golden cord) or brass lobster claw clasp',
      'Earring Fastening': 'South Indian screw-back with reinforced silicone washer',
      'Weight': 'Necklace: ~85g; Earrings: ~22g (pair)',
      'Compliance Benchmark': 'EU REACH Annex XVII compliant, US Prop 65 lead & cadmium tested',
    },
    packaging: [
      'Anti-tarnish velvet-lined presentation boxes with foam insert',
      'Individual airtight zip-lock moisture-barrier bags',
      'Bulk 5-ply export master carton with shock-absorbing honeycomb wrap'
    ],
    availability: 'available',
    featured: true,
    enquiryEnabled: true,
    primaryApplications: [
      'Ethnic Fashion Retailing & Department Stores',
      'Bridal & Festive Cultural Wear Boutiques',
      'Classical Dance & Theatrical Wardrobe Suppliers',
      'Private-Label Fashion Jewelry Importers'
    ],
    exportGateways: ['Chennai Port (INMAA)', 'Mumbai Air Cargo (BOM)', 'Chennai Air Cargo (MAA)'],
    supportedIncoterms: ['FOB', 'CIF', 'FCA'],
  },

  // 2. Kundan & Meenakari
  {
    id: 'kundan-choker-collection',
    name: 'Kundan-Inspired Choker & Earring Collection',
    slug: 'kundan-choker-collection',
    botanicalOrMaterialName: 'Hand-Set Glass Kundan, Faux Pearls & Brass Base with Reverse Meenakari',
    category: 'Fashion & Lifestyle',
    categorySlug: 'fashion-lifestyle',
    subcategory: 'Kundan, Meenakari & Polki-Inspired Jewelry',
    subcategoryId: 'kundan-meenakari',
    tagline: 'Elaborate bridal choker featuring hand-set glass Kundan stones, beaded droplet fringes, and traditional reverse enameling.',
    description: 'Inspired by Mughal and Rajasthani royal ornament designs, highlighting traditional foil-backed stone settings and intricate hand-painted floral meena on the reverse.',
    detailedOverview: 'Kundan setting represents one of the oldest jewelry arts in India. Designed specifically for wholesale fashion and bridal markets, this collection utilizes precision-cut glass crystals set into gold-toned brass bezels with reflective foil liners that maximize luster without fine jewelry precious metal costs. The reverse displays artisanal meenakari enamel, ensuring comfort against the neckline.',
    image: kundanImg,
    gallery: [kundanImg, templeImg, heroImg],
    formats: [
      'Collar Choker with Matching Danglers',
      'Layered Multi-Strand Kundan Mala',
      'Pastel Enamel Variations (Mint, Powder Pink, Ivory, Crimson)',
      'Statement Matha Patti Bridal Headdress'
    ],
    origin: 'Jaipur & Delhi NCR Jewelry Clusters, India',
    specifications: {
      'Stone Type': 'Foil-backed faceted glass Kundan with synthetic pearl clusters',
      'Reverse Work': 'Traditional kiln-fired cold-enamel meenakari floral motif',
      'Base Alloy': 'Recycled brass substrate with high tensile solder joins',
      'Plating': 'Flash gold plating with high-gloss lacquer seal',
      'Necklace Drop Length': 'Approx. 5.5 inches; adjustable zari cord up to 18 inches',
      'Testing Assurance': 'Non-toxic enamel pigments, free from banned phthalates',
    },
    packaging: [
      'Rigid luxury presentation magnetic box with custom brand hot-stamping',
      'Silica gel pouch included per unit for oceanic moisture control'
    ],
    availability: 'available',
    featured: true,
    enquiryEnabled: true,
    primaryApplications: [
      'Bridal Accessory Boutiques',
      'High-Fashion Runway and Editorial Styling',
      'International South Asian Diaspora Department Stores',
      'E-Commerce Fashion Jewelry Brands'
    ],
    exportGateways: ['Delhi Air Cargo (DEL)', 'Mumbai Air Cargo (BOM)'],
    supportedIncoterms: ['FOB', 'CIF', 'FCA'],
  },

  // 3. Meenakari Chandelier Earrings
  {
    id: 'meenakari-chandelier-earrings',
    name: 'Artisanal Meenakari Enamel Chandelier Earrings',
    slug: 'meenakari-chandelier-earrings',
    botanicalOrMaterialName: 'Hand-Enameled Brass with Tiny Seed Pearls & Hydro Glass Drops',
    category: 'Fashion & Lifestyle',
    categorySlug: 'fashion-lifestyle',
    subcategory: 'Kundan, Meenakari & Polki-Inspired Jewelry',
    subcategoryId: 'kundan-meenakari',
    tagline: 'Vibrant cloisonné hand-enameled chandbali earrings with delicate seed pearl cascades.',
    description: 'Master artisan crafted earrings featuring hand-applied enamel in rich jewel tones, finished with cluster bead drops.',
    detailedOverview: 'Originating from Jaipur and Banaras, Meenakari combines metal engraving with vibrant mineral pigments. These chandelier earrings offer striking color contrast and lightweight wearability suitable for contemporary evening ensembles and festive events.',
    image: kundanImg,
    formats: ['Chandbali Crescent Silhouette', 'Geometric Jhumka Drops', 'Lotus Motif Earstuds', 'Custom Pantone Enamel Colorways'],
    origin: 'Jaipur, Rajasthan, India',
    specifications: {
      'Enamel Type': 'Hand-applied cold enamel with UV-resistant clear coat',
      'Beads': 'Synthetic cultured pearls and hydro-colored glass drops',
      'Post / Ear Wire': 'Hypoallergenic surgical steel post for sensitive skin',
      'Dimensions': 'Approx. 7.5 cm height x 4.5 cm width',
      'Weight': 'Approx. 18g per pair (ergonomically balanced)',
    },
    packaging: ['Individual display cards with anti-tarnish poly sleeve; master pack 12 pairs per inner box.'],
    availability: 'available',
    featured: false,
    enquiryEnabled: true,
    primaryApplications: ['Fashion Boutiques', 'Accessory Retail Chains', 'Gift & Lifestyle Concept Stores'],
    exportGateways: ['Delhi Air Cargo (DEL)', 'Mumbai Air Cargo (BOM)'],
    supportedIncoterms: ['FOB', 'CIF'],
  },

  // 4. Oxidized Tribal Jewelry
  {
    id: 'oxidized-silver-tone-jhumkas',
    name: 'Antique Silver-Tone Oxidized Jhumkas',
    slug: 'oxidized-silver-tone-jhumkas',
    botanicalOrMaterialName: 'Zinc & Brass Alloy with Antique Oxidized Silver Patina',
    category: 'Fashion & Lifestyle',
    categorySlug: 'fashion-lifestyle',
    subcategory: 'Oxidized & Tribal Jewelry',
    subcategoryId: 'oxidized-tribal',
    tagline: 'Intricately stamped Bohemian tribal bell earrings with dangling micro-ghungroos.',
    description: 'Inspired by Banjara and Rajasthani nomadic silver craft, offering a timeless antique blackened silver patina.',
    detailedOverview: 'Oxidized jewelry has achieved immense global popularity across bohemian, music festival, and everyday contemporary fashion markets. Manufactured via low-pressure die casting, these jhumkas deliver deep relief detailing, ghungroo chiming tassels, and featherlight comfort.',
    image: oxidizedImg,
    formats: ['Classic Dome Jhumkas', 'Kashmiri Jhumka with Hair Chain Support (Sahara)', 'Mirror-Work Inset Jhumkas', 'Tribal Ear Cuffs'],
    origin: 'Pushkar & Rajkot, India',
    specifications: {
      'Metal Composition': 'Zinc alloy casting (100% lead and cadmium free)',
      'Finish': 'Antiqued oxidized silver dip with matte protective seal',
      'Drop Length': '6.0 cm to 8.5 cm',
      'Accent Elements': 'Tiny tinkling brass ghungroos / synthetic turquoise stones',
      'Skin Safety': 'Dermatologically evaluated, hypoallergenic nickel-safe wash',
    },
    packaging: ['Branded earring hangcards with barcodes, packaged 24 units per inner carton.'],
    availability: 'available',
    featured: true,
    enquiryEnabled: true,
    primaryApplications: ['Bohemian Fashion Wholesalers', 'Music Festival & Youth Apparel Stores', 'College & Everyday Retail Concept Stores'],
    exportGateways: ['Mumbai Port (INBOM)', 'Chennai Air Cargo (MAA)'],
    supportedIncoterms: ['FOB', 'CIF'],
  },

  // 5. Contemporary Statement Jewelry
  {
    id: 'contemporary-statement-necklace',
    name: 'Contemporary Sculptural Statement Necklace',
    slug: 'contemporary-statement-necklace',
    botanicalOrMaterialName: '316L Surgical Stainless Steel with PVD 18K Gold Vacuum Plating',
    category: 'Fashion & Lifestyle',
    categorySlug: 'fashion-lifestyle',
    subcategory: 'Contemporary Fashion Jewelry',
    subcategoryId: 'contemporary-fashion',
    tagline: 'Clean architectural silhouettes combining hammered organic textures with high-polish geometric plates.',
    description: 'Modern statement neckwear engineered for international fashion houses, department stores, and private-label collections.',
    detailedOverview: 'Bridging South Indian foundry metallurgy with minimalist European silhouettes, this collection demonstrates AURA’s versatility. Utilizing PVD (Physical Vapor Deposition) technology, the gold finish resists sweat, seawater, and daily wear up to 10x longer than conventional electroplating.',
    image: contemporaryImg,
    formats: ['Rigid Torque Chokers', 'Multi-Layer Paperclip & Snake Chains', 'Hammered Disc Pendants', 'Dual-Tone (Gold & Silver) Combinations'],
    origin: 'Coimbatore Metallurgical Corridor, Tamil Nadu, India',
    specifications: {
      'Substrate': 'Grade 316L Surgical Stainless Steel',
      'Plating Technology': 'PVD (Physical Vapor Deposition) 18K Real Gold at 0.5–1.0 micron',
      'Tarnish Resistance': 'Salt spray tested (> 72 hours ASTM B117 pass)',
      'Waterproof Rating': '100% Waterproof and sweatproof guaranteed',
      'Branding Options': 'Laser engraving of buyer brand logo on extension tags',
    },
    packaging: ['Eco-friendly FSC-certified linen paper drawer boxes with velvet foam inserts.'],
    availability: 'available',
    featured: true,
    enquiryEnabled: true,
    primaryApplications: ['Direct-to-Consumer Fashion Brands', 'International Department Store Jewelry Counters', 'Travel Retail & Duty-Free Boutiques'],
    exportGateways: ['Chennai Air Cargo (MAA)', 'Bengaluru Air Cargo (BLR)'],
    supportedIncoterms: ['FOB', 'CIF', 'DAP'],
  },

  // 6. Beaded Jewelry
  {
    id: 'handcrafted-beaded-jewelry',
    name: 'Artisan Semi-Precious Beaded Necklace & Bracelet',
    slug: 'handcrafted-beaded-jewelry',
    botanicalOrMaterialName: 'Natural Agate, Jasper, Onyx Beads & Hand-Knotted Silk Thread',
    category: 'Fashion & Lifestyle',
    categorySlug: 'fashion-lifestyle',
    subcategory: 'Contemporary Fashion Jewelry',
    subcategoryId: 'contemporary-fashion',
    tagline: 'Hand-strung gemstone bead necklaces with artisan tassel finishes and gold-tone spacers.',
    description: 'Curated natural stone beads individually hand-knotted by women artisan collectives, bringing earthy elegance to modern fashion.',
    detailedOverview: 'India has been the world center for gemstone cutting and bead tumbling for millennia. AURA sources verified mineral beads from Khambhat and Jaipur, hand-strung on durable bonded cords with secure toggle or lobster closures.',
    image: contemporaryImg,
    formats: ['Mala Meditation Necklaces (108 Beads)', 'Layered Choker Strands', 'Stretch Bead Stackable Bracelets', 'Raw Cut Crystal Pendant Drops'],
    origin: 'Jaipur & Khambhat Gem Clusters, India',
    specifications: {
      'Stone Varieties': 'Natural Indian Agate, Green Jade simulant, Black Onyx, Rose Quartz',
      'Bead Sizes': '6mm, 8mm, 10mm round calibrated beads',
      'Stringing Core': 'High-tensile multifilament silk/nylon cord with knotted intervals',
      'Clasp': '18K gold-plated brass spring ring or adjustable slide knot',
    },
    packaging: ['Handmade cotton drawstring pouch with gemstone identification tag.'],
    availability: 'made-to-order',
    featured: false,
    enquiryEnabled: true,
    primaryApplications: ['Resortwear & Wellness Boutiques', 'Eco-Lifestyle Retailers', 'Museum Gift Stores'],
    exportGateways: ['Mumbai Air Cargo (BOM)', 'Delhi Air Cargo (DEL)'],
    supportedIncoterms: ['FOB', 'CIF'],
  },

  // 7. Traditional Bangles Set
  {
    id: 'traditional-carved-bangles',
    name: 'Antique Gold-Tone Intricate Carved Bangles Set',
    slug: 'traditional-carved-bangles',
    botanicalOrMaterialName: 'Solid Brass Casting with Floral & Elephant Repoussé Engraving',
    category: 'Fashion & Lifestyle',
    categorySlug: 'fashion-lifestyle',
    subcategory: 'Temple & Traditional Jewelry',
    subcategoryId: 'temple-traditional',
    tagline: 'Stackable traditional kada bangles with antique ruby-red gemstone accents and floral openwork.',
    description: 'Classic South Indian and Rajasthani wristwear engineered with comfortable hinge locks and screw clasps.',
    detailedOverview: 'Bangles hold deep cultural resonance across the subcontinent. This export line combines cast brass cores with detailed hand-chasing, antique micro-plating, and secure side-hinge clasps that fit diverse wrist circumferences.',
    image: heroImg,
    formats: ['Pair of Broad Kada Bangles (2-Piece)', 'Stackable Set of 4 or 6 Thin Bangles', 'Open-End Adjustable Kada', 'Hinged Clasp Locking Bangle'],
    origin: 'Coimbatore & Rajkot, India',
    specifications: {
      'Available Sizes': 'Indian sizes 2.4 (2.25" dia), 2.6 (2.375" dia), 2.8 (2.5" dia), Custom export size',
      'Base Alloy': 'Solid cast brass with lead-free certification',
      'Lock Type': 'Screw pin lock or concealed side spring clasp',
      'Finish': '22K antique matte gold with anti-tarnish protective lacquer',
    },
    packaging: ['Velvet-covered bangle presentation cylinders or individual box sets.'],
    availability: 'available',
    featured: false,
    enquiryEnabled: true,
    primaryApplications: ['Bridal Boutiques', 'Ethnic Fashion Retailers', 'Cultural Jewelry Wholesalers'],
    exportGateways: ['Chennai Port (INMAA)', 'Mumbai Port (INBOM)'],
    supportedIncoterms: ['FOB', 'CIF'],
  },

  // 8. Handcrafted Accessories & Bags
  {
    id: 'zari-embroidered-potli-bags',
    name: 'Handcrafted Zari Embroidered Potli & Clutch Bag',
    slug: 'zari-embroidered-potli-bags',
    botanicalOrMaterialName: 'Raw Silk, Velvet, Metallic Zari Thread & Faux Pearl Drawstring',
    category: 'Fashion & Lifestyle',
    categorySlug: 'fashion-lifestyle',
    subcategory: 'Handcrafted Fashion Accessories',
    subcategoryId: 'handcrafted-accessories',
    tagline: 'Exquisite evening potli pouch with intricate zardozi floral embroidery and beaded handle.',
    description: 'Handcrafted by generational embroidery artisans using lustrous metallic wires, sequins, and pearl handle chains.',
    detailedOverview: 'Combining functional accessory design with historical royal Indian embroidery techniques. AURA coordinates structured production runs with reinforced inner satin linings, secure drawstring tassels, and custom private-label branding tags for international eveningwear and occasion retailers.',
    image: accessoriesImg,
    formats: ['Round Bottom Potli Pouch (8" x 9")', 'Structured Box Clutch with Metal Frame', 'Embroidered Envelope Sling Bag', 'Velvet & Brocade Color Options'],
    origin: 'Agra, Lucknow & Surat Handcraft Belts, India',
    specifications: {
      'Outer Fabric': 'Heavy density velvet / raw silk blend',
      'Embroidery Technique': 'Zardozi, Aari needlework with metal coils and sequins',
      'Lining': 'Smooth polyester satin with inner slip pocket',
      'Handle': 'Hand-strung faux pearl strap (drop length 5.5 inches) + optional metal crossbody chain',
      'Dimensions': 'Height: 22 cm; Width: 18 cm; Base Diameter: 12 cm',
    },
    packaging: ['Individual soft dust bag and protective export bubble wrap in sturdy outer cartons.'],
    availability: 'made-to-order',
    featured: true,
    enquiryEnabled: true,
    primaryApplications: ['Bridal & Eveningwear Accessories', 'Luxury Gifting Programs', 'Fashion Specialty Boutiques'],
    exportGateways: ['Delhi Air Cargo (DEL)', 'Nhava Sheva (INNSA)'],
    supportedIncoterms: ['FOB', 'CIF', 'FCA'],
  },
];

/**
 * Helper lookups for Fashion & Lifestyle
 */
export function getFashionProductBySlug(slug: string): CatalogProduct | undefined {
  return masterFashionProducts.find((p) => p.slug === slug || p.id === slug);
}

export function getFashionProductsByCategory(categoryId: string): CatalogProduct[] {
  return masterFashionProducts.filter((p) => p.subcategoryId === categoryId);
}

export function getFeaturedFashionProducts(): CatalogProduct[] {
  return masterFashionProducts.filter((p) => p.featured);
}
