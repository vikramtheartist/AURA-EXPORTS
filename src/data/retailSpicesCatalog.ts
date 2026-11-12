import retailTurmericImg from '../assets/images/retail/retail_turmeric.jpg';
import retailBlackPepperImg from '../assets/images/retail/retail_black_pepper.jpg';
import retailCardamomImg from '../assets/images/retail/retail_cardamom.jpg';
import retailRedChilliImg from '../assets/images/retail/retail_red_chilli.jpg';
import retailGingerImg from '../assets/images/retail/retail_ginger.jpg';
import retailGaramMasalaImg from '../assets/images/retail/retail_garam_masala.jpg';

export interface RetailProductVariant {
  id: string;
  name: string;
  weightGrams: number;
  priceINR?: number;
  mrpINR?: number;
  sku?: string;
  priceUSD: number;
  priceAED: number;
  compareAtUSD?: number;
  compareAtAED?: number;
  inStock: boolean;
  packageType: 'Airtight Black & Gold Metal Tin' | 'Resealable Stand-Up Foil Pouch' | 'Gourmet Glass Jar';
}

export interface RetailSpiceProduct {
  id: string;
  slug: string;
  name: string;
  botanicalName: string;
  subtitle: string;
  badge?: string;
  isBestseller?: boolean;
  category: 'Single Origin' | 'Artisanal Blends' | 'Wellness & Tonics';
  rating: {
    score: number;
    reviewCount: number;
  };
  shortDescription: string;
  story: string;
  heroImage: string;
  galleryImages: string[];
  basePriceUSD: number;
  basePriceAED: number;
  compareAtUSD?: number;
  compareAtAED?: number;
  activeCompound: string;
  origin: string;
  harvestSeason: string;
  processingMethod: string;
  meshSize: string;
  shelfLife: string;
  variants: RetailProductVariant[];
  tabs: {
    culinaryUses: {
      headline: string;
      description: string;
      pairingPoints: string[];
      chefTip: string;
    };
    ingredientsAndSpecs: {
      ingredients: string;
      netWeight: string;
      originCountry: string;
      activeConstituents: string;
      moisture: string;
      ashContent: string;
      aflatoxins: string;
      allergens: string;
      fillersAndColors: string;
    };
    shippingAndGuarantees: {
      dispatchTime: string;
      shippingMethods: { name: string; priceUSD: number; priceAED: number; estDays: string }[];
      freeShippingThresholdUSD: number;
      freeShippingThresholdAED: number;
      guaranteeHeadline: string;
      guaranteeText: string;
    };
    qualityAndPurity: {
      purityHeadline: string;
      purityPoints: string[];
      testingDetails: string;
      packagingDescription: string;
    };
    faq: {
      question: string;
      answer: string;
    }[];
  };
}

export const RETAIL_SPICES_CATALOG: RetailSpiceProduct[] = [
  {
    id: 'salem-turmeric-powder',
    slug: 'salem-turmeric-powder',
    name: 'Pure Salem Turmeric Powder',
    botanicalName: 'Curcuma longa L.',
    subtitle: 'High-Curcumin Single Origin • Slow Cryo-Milled • Salem, Tamil Nadu',
    badge: 'FLAGSHIP EXPORT',
    isBestseller: true,
    category: 'Single Origin',
    rating: {
      score: 4.98,
      reviewCount: 184,
    },
    shortDescription:
      'A golden super-ingredient cultivated in the mineral-rich soils of Salem, Tamil Nadu. Boasting an intense deep-gold hue, warm earthy aroma with subtle ginger-citrus undertones, and naturally high curcumin concentration.',
    story:
      'Cultivated across multigenerational family estates in Salem and Erode, our Salem Turmeric is hand-harvested at peak rhizome maturity, sun-cured under controlled clean conditions, and slow-milled at low temperatures to protect its volatile aromatic oils and biological vitality. Free from metanil yellow, starches, or artificial preservatives.',
    heroImage: retailTurmericImg,
    galleryImages: [
      retailTurmericImg,
      retailTurmericImg,
    ],
    basePriceUSD: 14.0,
    basePriceAED: 52.0,
    compareAtUSD: 18.0,
    compareAtAED: 66.0,
    activeCompound: 'Curcumin: 4.8%–5.4% (HPLC Tested)',
    origin: 'Salem & Erode, Tamil Nadu, India',
    harvestSeason: 'January – March (Fresh Current Crop)',
    processingMethod: 'Cold Air-Classified Milling (< 38°C)',
    meshSize: '80–100 Mesh Ultra-Fine Silk Grade',
    shelfLife: '24 Months in Airtight Sealed Packaging',
    variants: [
      {
        id: 'tin-100g',
        name: '100g Airtight Black & Gold Tin',
        weightGrams: 100,
        priceUSD: 14.0,
        priceAED: 52.0,
        compareAtUSD: 18.0,
        compareAtAED: 66.0,
        inStock: true,
        packageType: 'Airtight Black & Gold Metal Tin',
      },
      {
        id: 'tin-250g',
        name: '250g Luxury Pantry Tin (Best Value)',
        weightGrams: 250,
        priceUSD: 26.0,
        priceAED: 96.0,
        compareAtUSD: 32.0,
        compareAtAED: 118.0,
        inStock: true,
        packageType: 'Airtight Black & Gold Metal Tin',
      },
      {
        id: 'pouch-500g',
        name: '500g Resealable Kraft Foil Zip Pouch',
        weightGrams: 500,
        priceUSD: 44.0,
        priceAED: 162.0,
        compareAtUSD: 54.0,
        compareAtAED: 198.0,
        inStock: true,
        packageType: 'Resealable Stand-Up Foil Pouch',
      },
      {
        id: 'chef-1000g',
        name: '1 kg Commercial Gourmet Chef Pack',
        weightGrams: 1000,
        priceUSD: 78.0,
        priceAED: 286.0,
        compareAtUSD: 98.0,
        compareAtAED: 360.0,
        inStock: true,
        packageType: 'Resealable Stand-Up Foil Pouch',
      },
    ],
    tabs: {
      culinaryUses: {
        headline: 'Essential in Michelin & Heritage Kitchens Worldwide',
        description:
          'Turmeric has been the golden foundation of Indian culinary science and Ayurvedic wellness for over 4,000 years. Our single-origin Salem powder delivers vivid color and clean, resonant warmth without bitterness.',
        pairingPoints: [
          'Authentic Curries, Dhal & Slow-Simmered Broths — Blooms instantly in warm ghee or coconut oil.',
          'Artisanal Golden Milk & Morning Elixirs — Blends seamlessly with warm oat or almond milk, a touch of honey, and cracked black pepper for maximum curcumin bioavailability.',
          'Vegetable Roasts & Grain Bowls — Imparts radiant golden sunshine and earthy depth to cauliflower, chickpeas, and basmati pilafs.',
          'Culinary Seafood & Poultry Rubs — Enhances grilled fish, tandoori chicken, and roasted tofu with subtle woodiness.',
        ],
        chefTip:
          'Pro Chef Tip: Curcumin is oil-soluble. Always activate turmeric in warm lipid (ghee, extra virgin olive oil, or cold-pressed mustard oil) along with a pinch of black pepper (piperine boosts absorption by up to 2000%).',
      },
      ingredientsAndSpecs: {
        ingredients: '100% Pure Single-Origin Salem Turmeric Rhizome Powder (Curcuma longa).',
        netWeight: '100g / 250g / 500g / 1000g net.',
        originCountry: 'Salem, Tamil Nadu, Republic of India.',
        activeConstituents: 'Curcumin 4.80% – 5.40% (HPLC certified), Volatile Essential Oils > 3.6%.',
        moisture: 'Max 8.5% (ensures extended enzymatic stability).',
        ashContent: 'Total Ash: Max 6.0% | Acid Insoluble Ash: < 0.8%.',
        aflatoxins: 'B1, B2, G1, G2 < 2.0 ppb (conforms strictly to EU & GCC GSO 1016 regulations).',
        allergens: 'Free of all 14 major allergens (Gluten-Free, Nut-Free, Dairy-Free, Non-GMO). Packaged in a dedicated clean spice facility.',
        fillersAndColors: '0.00% Metanil Yellow, Lead Chromate, Chalk, Starch, or Artificial Anti-Caking Agents.',
      },
      shippingAndGuarantees: {
        dispatchTime: 'Dispatched within 24–48 hours from our certified Chennai facility.',
        shippingMethods: [
          { name: 'UAE Direct Priority Courier (Aramex / Emirates Post)', priceUSD: 6.0, priceAED: 22.0, estDays: '2–3 business days' },
          { name: 'GCC Regional Express Air (Saudi Arabia, Oman, Qatar, Kuwait)', priceUSD: 9.0, priceAED: 33.0, estDays: '3–4 business days' },
          { name: 'Worldwide Express Air (DHL / FedEx to USA, UK & Europe)', priceUSD: 14.0, priceAED: 52.0, estDays: '4–6 business days' },
        ],
        freeShippingThresholdUSD: 75.0,
        freeShippingThresholdAED: 275.0,
        guaranteeHeadline: '100% Aroma & Taste Satisfaction Guarantee',
        guaranteeText:
          'We stand behind every gram of spice we export. If our pure Salem Turmeric does not exceed the potency, color, and aroma of any spice you have ever used in your kitchen, we provide an immediate 100% refund or free replacement without hassle. You shop with zero risk.',
      },
      qualityAndPurity: {
        purityHeadline: 'Cold-Milled Without Compromise',
        purityPoints: [
          '100% Single-Origin Traceability: Sourced from vetted Salem farmer cooperatives operating ethical regenerative practices.',
          'Cryo-Milled Below 38°C: High-speed industrial mills overheat spices and destroy delicate volatile terpenes. Our slow chilled milling retains 99% of raw essential oil profile.',
          'Zero Preservatives or Flow Agents: Completely unadulterated; what you smell and taste is the pure soul of the dried root.',
          'Tamper-Evident Luxury Metal Tin: Double airtight inner plug shields sensitive carotenoids from sunlight, oxygen, and ambient humidity.',
        ],
        testingDetails:
          'Every batch is independently tested by NABL-accredited laboratories for pesticide multiresidue screen (>450 compounds), heavy metals (lead <0.5 ppm, arsenic <0.2 ppm), and microbial safety.',
        packagingDescription:
          'Sealed in food-grade recyclable matte black and brushed gold metal tins with airtight inner seal, accompanied by a luxury printed brewing & culinary guide.',
      },
      faq: [
        {
          question: 'What makes Aura’s Salem Turmeric different from supermarket brands?',
          answer:
            'Most supermarket turmeric is industrial-grade commercial dust blended from exhausted oleoresin by-products with curcumin levels under 1.5% and high ash content. Our Salem Turmeric is 100% unextracted primary root powder tested at 4.8%–5.4% natural curcumin with vibrant volatile aromas and zero chemical residues.',
        },
        {
          question: 'How should I store this turmeric to keep it fresh?',
          answer:
            'Keep it inside our airtight black metal tin with the inner plug firmly sealed. Store in a cool, dark pantry away from direct sunlight and stovetop steam. When stored properly, it retains its fresh fragrance and color for 2 full years.',
        },
        {
          question: 'Is this suitable for daily Golden Milk or wellness shots?',
          answer:
            'Absolutely. Because it is 100% pure, lab-tested for heavy metals and pesticides, and high in active curcumin, it is the premier choice for health practitioners, Ayurvedic wellness regimens, and morning golden latte drinks.',
        },
        {
          question: 'Can commercial hospitality and culinary retail order bulk lots?',
          answer:
            'Yes. In addition to our individual gourmet tins, we ship 1kg chef bags, 25kg bulk kraft bags, and private label branded tins for boutique groceries and luxury hotels worldwide.',
        },
      ],
    },
  },

  {
    id: 'tellicherry-black-pepper',
    slug: 'tellicherry-black-pepper',
    name: 'Malabar Tellicherry Black Pepper Powder',
    botanicalName: 'Piper nigrum L.',
    subtitle: 'Extra-Bold TGSEB Berries • Cold Coarse-to-Fine Grind • Malabar Coast, Kerala',
    badge: 'SINGLE ORIGIN GI',
    isBestseller: true,
    category: 'Single Origin',
    rating: {
      score: 4.97,
      reviewCount: 156,
    },
    shortDescription:
      'Grown on the mist-covered slopes of Kerala’s historic Malabar Coast. Hand-sorted from extra-bold TGSEB (Tellicherry Garbled Special Extra Bold) berries, cold-crushed to preserve high-piperine heat and complex woody-citrus notes.',
    story:
      'Widely acknowledged by world chefs as the undisputed "King of Spices," authentic Malabar Tellicherry black pepper berries are left on the vine longer to develop large size, deep sweetness, and penetrating pungency. Cold-milled into a velvety gourmet powder that transforms simple dishes into culinary masterpieces.',
    heroImage: retailBlackPepperImg,
    galleryImages: [
      retailBlackPepperImg,
      retailBlackPepperImg,
    ],
    basePriceUSD: 16.0,
    basePriceAED: 58.0,
    compareAtUSD: 20.0,
    compareAtAED: 72.0,
    activeCompound: 'Piperine: 5.5%–6.2% | Volatile Oil: > 3.2%',
    origin: 'Wayanad & Tellicherry, Malabar Coast, Kerala, India',
    harvestSeason: 'November – February',
    processingMethod: 'Cold Rotary Granulation & Fine Air Sifting',
    meshSize: '60–80 Mesh (Balanced Aromatic Grind)',
    shelfLife: '24 Months in Airtight Container',
    variants: [
      {
        id: 'tin-100g',
        name: '100g Airtight Black & Gold Tin',
        weightGrams: 100,
        priceUSD: 16.0,
        priceAED: 58.0,
        compareAtUSD: 20.0,
        compareAtAED: 72.0,
        inStock: true,
        packageType: 'Airtight Black & Gold Metal Tin',
      },
      {
        id: 'tin-250g',
        name: '250g Luxury Pantry Tin (Best Value)',
        weightGrams: 250,
        priceUSD: 30.0,
        priceAED: 110.0,
        compareAtUSD: 38.0,
        compareAtAED: 140.0,
        inStock: true,
        packageType: 'Airtight Black & Gold Metal Tin',
      },
      {
        id: 'pouch-500g',
        name: '500g Resealable Kraft Foil Zip Pouch',
        weightGrams: 500,
        priceUSD: 52.0,
        priceAED: 190.0,
        compareAtUSD: 64.0,
        compareAtAED: 235.0,
        inStock: true,
        packageType: 'Resealable Stand-Up Foil Pouch',
      },
    ],
    tabs: {
      culinaryUses: {
        headline: 'Bold, Resonant Heat with Floral Woodiness',
        description:
          'Unlike ordinary supermarket ground pepper which only delivers flat acrid burn, Tellicherry black pepper unfolds layers of pine, ripe cedar, dried citrus, and lingering warmth.',
        pairingPoints: [
          'Seared Steaks, Wagyu & Prime Ribs — Coated evenly with sea salt for an aromatic crust.',
          'Cacio e Pepe & Fresh Pasta — Toasted lightly in dry skillet to unlock volatile pinene and limonene terpenes.',
          'Artisanal Charcuterie & Terrines — Balances rich animal fats with crisp, complex pungency.',
          'Fresh Strawberries & Dark Chocolate Desserts — A micro-pinch accentuates natural cacao tannins and berries.',
        ],
        chefTip:
          'Pro Chef Tip: Add half at the beginning of slow braises for deep foundational warmth, and finish with a dusting immediately before plating to savor fresh volatile top notes.',
      },
      ingredientsAndSpecs: {
        ingredients: '100% Pure Malabar Tellicherry Black Pepper Berries (Piper nigrum).',
        netWeight: '100g / 250g / 500g net.',
        originCountry: 'Kerala (Malabar Coast), Republic of India.',
        activeConstituents: 'Piperine Content: 5.5% – 6.2% | Essential Volatile Oil: > 3.2 ml/100g.',
        moisture: 'Max 10.0%.',
        ashContent: 'Total Ash: Max 5.0% | Non-volatile ether extract: Min 6.0%.',
        aflatoxins: 'Below detectable threshold (< 2 ppb).',
        allergens: 'Free of all allergens. Zero cross-contamination.',
        fillersAndColors: '100% pure berry powder. Zero exhausted spent pepper or husk fillers.',
      },
      shippingAndGuarantees: {
        dispatchTime: 'Dispatched within 24–48 hours in airtight double-sealed containers.',
        shippingMethods: [
          { name: 'UAE Direct Priority Courier', priceUSD: 6.0, priceAED: 22.0, estDays: '2–3 business days' },
          { name: 'GCC Regional Express Air', priceUSD: 9.0, priceAED: 33.0, estDays: '3–4 business days' },
          { name: 'Worldwide Express Air (DHL / FedEx)', priceUSD: 14.0, priceAED: 52.0, estDays: '4–6 business days' },
        ],
        freeShippingThresholdUSD: 75.0,
        freeShippingThresholdAED: 275.0,
        guaranteeHeadline: 'Supreme Freshness & Heat Guarantee',
        guaranteeText:
          'Experience the purest pepper on earth. If you do not notice an immediate leap in fragrance and taste compared to conventional pepper, your full payment will be refunded instantly.',
      },
      qualityAndPurity: {
        purityHeadline: 'Harvested from Verified Forest Micro-Estates',
        purityPoints: [
          'TGSEB Grade Certification: Made exclusively from 4.25mm+ jumbo vine-ripened berries.',
          'Zero Spent Pepper: Never adulterated with extracted oleoresin residue or added pepper husks.',
          'Slow Cold Crushed: Temperature-controlled milling protects essential oil volatile profile.',
          'Airtight UV Tin Protection: Sealed metal preserves delicate piperine crystals from oxidation.',
        ],
        testingDetails:
          'Tested in certified NABL labs for moisture, piperine, heavy metals, and pesticide compliance with EU and GCC standards.',
        packagingDescription:
          'Sleek matte black tin with gold metal lid and internal freshness membrane.',
      },
      faq: [
        {
          question: 'Why is Tellicherry pepper considered the gold standard?',
          answer:
            'Tellicherry berries are allowed to mature on the vine until almost red-ripe before harvesting. This yields larger, denser berries packed with complex floral, citrus, and wood aromas rather than simple one-dimensional sharpness.',
        },
        {
          question: 'Is this ground fine or coarse?',
          answer:
            'We mill it to a precise 60–80 mesh medium-fine culinary grade. It disperses evenly across sauces and soups while retaining satisfying texture on seared meats and salads.',
        },
      ],
    },
  },

  {
    id: 'alleppey-cardamom-powder',
    slug: 'alleppey-cardamom-powder',
    name: 'Alleppey Green Cardamom Powder',
    botanicalName: 'Elettaria cardamomum',
    subtitle: '100% Whole Green Pods • Cold-Milled With Pod Shells & Seeds • Idukki, Kerala',
    badge: 'ROYAL HERITAGE',
    isBestseller: true,
    category: 'Single Origin',
    rating: {
      score: 4.99,
      reviewCount: 129,
    },
    shortDescription:
      'Grown in the cloud forests of Idukki and the Cardamom Hills of Kerala. Intensely aromatic with sweet eucalyptus, fresh camphor, and delicate floral notes, milled entirely from premium 7mm+ green pods.',
    story:
      'Known as the "Queen of Spices," Alleppey green cardamom holds worldwide prestige for its deep green pigment and exceptionally high essential oil concentration. We gently cold-mill both the resinous dark inner seeds and delicate aromatic outer hulls, preserving the entire spectrum of 1,8-cineole and terpinyl acetate.',
    heroImage: retailCardamomImg,
    galleryImages: [
      retailCardamomImg,
      retailCardamomImg,
    ],
    basePriceUSD: 24.0,
    basePriceAED: 88.0,
    compareAtUSD: 30.0,
    compareAtAED: 110.0,
    activeCompound: 'Volatile Essential Oil: 7.2%–8.5% v/w',
    origin: 'Idukki & Cardamom Hills, Kerala, India',
    harvestSeason: 'August – February (Hand-Picked in Waves)',
    processingMethod: 'Cryogenic Cold Milled (-20°C Inert Gas Protected)',
    meshSize: '80 Mesh Fine Pastry & Beverage Grade',
    shelfLife: '18 Months in Sealed Nitrogen-Flushed Tin',
    variants: [
      {
        id: 'tin-75g',
        name: '75g Airtight Black & Gold Tin',
        weightGrams: 75,
        priceUSD: 24.0,
        priceAED: 88.0,
        compareAtUSD: 30.0,
        compareAtAED: 110.0,
        inStock: true,
        packageType: 'Airtight Black & Gold Metal Tin',
      },
      {
        id: 'tin-150g',
        name: '150g Luxury Pantry Tin (Best Value)',
        weightGrams: 150,
        priceUSD: 44.0,
        priceAED: 162.0,
        compareAtUSD: 55.0,
        compareAtAED: 202.0,
        inStock: true,
        packageType: 'Airtight Black & Gold Metal Tin',
      },
      {
        id: 'pouch-300g',
        name: '300g Stand-Up Gourmet Foil Zip Pouch',
        weightGrams: 300,
        priceUSD: 82.0,
        priceAED: 300.0,
        compareAtUSD: 98.0,
        compareAtAED: 360.0,
        inStock: true,
        packageType: 'Resealable Stand-Up Foil Pouch',
      },
    ],
    tabs: {
      culinaryUses: {
        headline: 'Transcendent Aroma for Pastry, Chai & Fine Dining',
        description:
          'Cardamom contains some of the most volatile aromatic esters in the plant kingdom. A single teaspoon of our cold-milled Alleppey powder infuses an entire room with enchanting sweet herbal fragrance.',
        pairingPoints: [
          'Authentic Masala Chai & Arabic Qahwa Coffee — The quintessential soul of Middle Eastern and Indian hospitality.',
          'Nordic Baking (Kardemommeboller & Cinnamon Buns) — Prized by Scandinavian bakers for its sharp, fresh citrus-eucalyptus resonance.',
          'Biryani & Pilafs — Imparts intoxicating royal aroma to aged basmati rice dishes.',
          'Panna Cotta, Kheer, Custards & Fruit Tarts — Lifts creamy desserts into heavenly territory.',
        ],
        chefTip:
          'Pro Chef Tip: Because our cardamom is milled at cryogenic temperatures, its volatile esters are intact. Use 30% less than standard store-bought powder for cleaner, more fragrant results.',
      },
      ingredientsAndSpecs: {
        ingredients: '100% Pure Alleppey Green Cardamom Pods & Seeds (Elettaria cardamomum).',
        netWeight: '75g / 150g / 300g net.',
        originCountry: 'Idukki, Kerala, Republic of India.',
        activeConstituents: 'Essential Volatile Oil: > 7.5 ml/100g (1,8-Cineole, Terpinyl Acetate, Linalool).',
        moisture: 'Max 9.0%.',
        ashContent: 'Total Ash: Max 6.0%.',
        aflatoxins: 'Non-detectable (< 2 ppb).',
        allergens: 'Allergen-free. No gluten, dairy, or soy.',
        fillersAndColors: 'Zero artificial dye or color enhancement. 100% natural emerald-to-pale-green hue.',
      },
      shippingAndGuarantees: {
        dispatchTime: 'Dispatched within 24–48 hours in sealed aroma-barrier tins.',
        shippingMethods: [
          { name: 'UAE Direct Priority Courier', priceUSD: 6.0, priceAED: 22.0, estDays: '2–3 business days' },
          { name: 'GCC Regional Express Air', priceUSD: 9.0, priceAED: 33.0, estDays: '3–4 business days' },
          { name: 'Worldwide Express Air', priceUSD: 14.0, priceAED: 52.0, estDays: '4–6 business days' },
        ],
        freeShippingThresholdUSD: 75.0,
        freeShippingThresholdAED: 275.0,
        guaranteeHeadline: 'Heavenly Aroma Guarantee',
        guaranteeText:
          'Open the lid. If the breathtaking eucalyptus-citrus aroma does not completely transport you to the mountain mist of Kerala, we will gladly refund your entire purchase.',
      },
      qualityAndPurity: {
        purityHeadline: 'Cold Inert-Gas Milling Technology',
        purityPoints: [
          'Cryo-Chilled at -20°C: Cardamom essential oils vaporize at normal room grinding temperatures. Our frozen inert-gas milling locks the oils directly into the granule.',
          'Harvested at 1,000m+ Elevation: Mountain mist and cool nights produce thicker pods with higher oil density.',
          'Airtight Aluminum Foil Seal: Guarantees zero aroma leakage during international transport.',
        ],
        testingDetails: 'Gas Chromatography (GC-MS) certified for pure terpene and ester profile.',
        packagingDescription: 'Embossed black tin with gold foil band and internal food-grade seal.',
      },
      faq: [
        {
          question: 'Can I use this for Scandinavian cardamom buns (Kardemommeboller)?',
          answer:
            'Yes, Scandinavian artisanal bakeries in Oslo, Stockholm, and Copenhagen specifically seek our Alleppey green cardamom because it delivers the authentic, bold, zesty herbal punch required for traditional doughs.',
        },
        {
          question: 'Does this contain the green shell or only seeds?',
          answer:
            'It contains the whole green pod (both the oil-dense black seeds and the delicate aromatic pericarp). Grinding the whole pod creates a harmonious, rounded flavor profile that avoids the bitterness of seed-only extracts.',
        },
      ],
    },
  },

  {
    id: 'guntur-sannam-chilli',
    slug: 'guntur-sannam-chilli',
    name: 'Guntur Sannam Red Chilli Powder',
    botanicalName: 'Capsicum annuum L.',
    subtitle: 'Vibrant Ruby Hue • Balanced Fiery Pungency • Guntur, Andhra Pradesh',
    badge: 'HOT & VIBRANT',
    isBestseller: false,
    category: 'Single Origin',
    rating: {
      score: 4.95,
      reviewCount: 98,
    },
    shortDescription:
      'Harvested from Andhra Pradesh’s renowned spice belt. Guntur Sannam chillies deliver a brilliant natural crimson red color and a clean, lingering heat (35,000–45,000 SHU) with sun-ripened fruitiness.',
    story:
      'Guntur is globally famed as Asia’s capital of capsicum. Sun-dried under the intense Deccan sun, destemmed by hand, and stone-ground into a silky vermilion powder that delivers breathtaking authentic color and punch without synthetic dyes or oleoresins.',
    heroImage: retailRedChilliImg,
    galleryImages: [
      retailRedChilliImg,
      retailRedChilliImg,
    ],
    basePriceUSD: 13.0,
    basePriceAED: 48.0,
    compareAtUSD: 16.0,
    compareAtAED: 60.0,
    activeCompound: 'Capsaicin: 0.22%–0.28% | ASTA Color Value: 85–95',
    origin: 'Guntur & Prakasam, Andhra Pradesh, India',
    harvestSeason: 'February – May',
    processingMethod: 'Sun-Cured & Low Heat Hammer-Milled',
    meshSize: '70–80 Mesh Clean Culinary Powder',
    shelfLife: '24 Months in Airtight Container',
    variants: [
      {
        id: 'tin-100g',
        name: '100g Airtight Black & Gold Tin',
        weightGrams: 100,
        priceUSD: 13.0,
        priceAED: 48.0,
        compareAtUSD: 16.0,
        compareAtAED: 60.0,
        inStock: true,
        packageType: 'Airtight Black & Gold Metal Tin',
      },
      {
        id: 'tin-250g',
        name: '250g Luxury Pantry Tin (Best Value)',
        weightGrams: 250,
        priceUSD: 24.0,
        priceAED: 88.0,
        compareAtUSD: 30.0,
        compareAtAED: 110.0,
        inStock: true,
        packageType: 'Airtight Black & Gold Metal Tin',
      },
      {
        id: 'pouch-500g',
        name: '500g Resealable Kraft Foil Zip Pouch',
        weightGrams: 500,
        priceUSD: 40.0,
        priceAED: 148.0,
        compareAtUSD: 50.0,
        compareAtAED: 185.0,
        inStock: true,
        packageType: 'Resealable Stand-Up Foil Pouch',
      },
    ],
    tabs: {
      culinaryUses: {
        headline: 'Authentic Fire and Radiant Natural Crimson Color',
        description:
          'Guntur Sannam is beloved for its balanced profile: bright natural ruby pigmentation combined with a clean, building heat that amplifies food flavors rather than overwhelming the palate.',
        pairingPoints: [
          'Tikka & Tandoori Marinades — Imparts glowing red hue naturally without artificial food colorings.',
          'Spicy Andhra & Chettinad Curries — Delivers foundational warmth and savory body.',
          'Chilli Oils & Finishing Drizzles — Infuses olive or sesame oil with dramatic red color and appetizing punch.',
          'Barbecue Dry Rubs & Smoked Brisket — Combines with brown sugar, paprika, and cumin for balanced crusting.',
        ],
        chefTip:
          'Pro Chef Tip: Bloom the chilli powder in warm oil for just 15–20 seconds over medium-low heat before adding aromatics to extract maximum lipid-soluble carotenoids without scorching.',
      },
      ingredientsAndSpecs: {
        ingredients: '100% Pure Destemmed Guntur Sannam Red Chillies (Capsicum annuum).',
        netWeight: '100g / 250g / 500g net.',
        originCountry: 'Guntur, Andhra Pradesh, Republic of India.',
        activeConstituents: 'Capsaicin Content: 35,000 – 45,000 Scoville Heat Units (SHU).',
        moisture: 'Max 9.5%.',
        ashContent: 'Total Ash: Max 7.0%.',
        aflatoxins: '< 4.0 ppb (GCC & EU Food Safety compliant).',
        allergens: 'Free of all known allergens.',
        fillersAndColors: '0.00% Sudan Red I-IV, Rhodamine B, or Added Seed Meal.',
      },
      shippingAndGuarantees: {
        dispatchTime: 'Dispatched within 24–48 hours.',
        shippingMethods: [
          { name: 'UAE Direct Priority Courier', priceUSD: 6.0, priceAED: 22.0, estDays: '2–3 business days' },
          { name: 'GCC Regional Express Air', priceUSD: 9.0, priceAED: 33.0, estDays: '3–4 business days' },
          { name: 'Worldwide Express Air', priceUSD: 14.0, priceAED: 52.0, estDays: '4–6 business days' },
        ],
        freeShippingThresholdUSD: 75.0,
        freeShippingThresholdAED: 275.0,
        guaranteeHeadline: 'Purity & Heat Satisfaction Guarantee',
        guaranteeText:
          'Guaranteed Sudan Red free and unadulterated. If you are not delighted with the vibrant color and clean heat, we will replace or refund your order.',
      },
      qualityAndPurity: {
        purityHeadline: 'Destemmed Prior to Milling',
        purityPoints: [
          '100% Destemmed Pods: Stems dilute color and add bitter moisture. We remove 100% of green calyxes.',
          'Sudan Dye Negative Certified: High-precision HPLC lab verified free of synthetic adulterants.',
          'Air-Sealed Dark Tin: Prevents UV degradation of sensitive red capsanthin pigments.',
        ],
        testingDetails: 'Complete HPLC screening for Sudan I, II, III, IV and Para Red.',
        packagingDescription: 'Airtight matte black tin with moisture barrier.',
      },
      faq: [
        {
          question: 'How spicy is Guntur Sannam chilli powder?',
          answer:
            'It registers between 35,000 and 45,000 Scoville Heat Units (SHU). It has noticeable authentic kick (hotter than standard mild paprika or generic store powder), with rich roasted sweetness.',
        },
        {
          question: 'Does it contain artificial red coloring?',
          answer:
            'Never. Our powder gets its intense ruby hue solely from high-density ripe red capsanthin carotenoids naturally present in mature Guntur chilli pods.',
        },
      ],
    },
  },

  {
    id: 'coorg-ginger-powder',
    slug: 'coorg-ginger-powder',
    name: 'Coorg Sun-Dried Ginger Powder',
    botanicalName: 'Zingiber officinale Roscoe',
    subtitle: 'Sun-Dried Whole Rhizomes • Clean Warm Zing • Coorg, Karnataka',
    badge: 'SHADE GROWN',
    isBestseller: false,
    category: 'Single Origin',
    rating: {
      score: 4.96,
      reviewCount: 88,
    },
    shortDescription:
      'Cultivated in the shaded coffee plantations of Coorg (Kodagu), Karnataka. Known for its clean zesty aroma, light beige color, and sharp gingerol warmth without fibrous woodiness.',
    story:
      'Grown under the organic canopy of Coorg’s biodiversity-rich Western Ghats, our ginger rhizomes are peeled, washed in pure mountain water, sun-dried, and finely pulverised. Its rich gingerol and shogaol profile makes it indispensable for warming tonics, artisanal gingerbread, and restorative teas.',
    heroImage: retailGingerImg,
    galleryImages: [
      retailGingerImg,
      retailGingerImg,
    ],
    basePriceUSD: 14.0,
    basePriceAED: 52.0,
    compareAtUSD: 17.0,
    compareAtAED: 62.0,
    activeCompound: 'Gingerols & Shogaols: > 1.8% | Volatile Oil: > 2.0%',
    origin: 'Coorg (Kodagu), Karnataka, India',
    harvestSeason: 'December – March',
    processingMethod: 'Sun-Dried & Micro-Pulverized',
    meshSize: '90–100 Mesh Ultra-Fine Dissolving Powder',
    shelfLife: '24 Months in Airtight Container',
    variants: [
      {
        id: 'tin-100g',
        name: '100g Airtight Black & Gold Tin',
        weightGrams: 100,
        priceUSD: 14.0,
        priceAED: 52.0,
        compareAtUSD: 17.0,
        compareAtAED: 62.0,
        inStock: true,
        packageType: 'Airtight Black & Gold Metal Tin',
      },
      {
        id: 'tin-250g',
        name: '250g Luxury Pantry Tin (Best Value)',
        weightGrams: 250,
        priceUSD: 26.0,
        priceAED: 96.0,
        compareAtUSD: 32.0,
        compareAtAED: 118.0,
        inStock: true,
        packageType: 'Airtight Black & Gold Metal Tin',
      },
      {
        id: 'pouch-500g',
        name: '500g Resealable Kraft Foil Zip Pouch',
        weightGrams: 500,
        priceUSD: 44.0,
        priceAED: 162.0,
        compareAtUSD: 54.0,
        compareAtAED: 198.0,
        inStock: true,
        packageType: 'Resealable Stand-Up Foil Pouch',
      },
    ],
    tabs: {
      culinaryUses: {
        headline: 'Invigorating Citrus Zing & Digestif Warmth',
        description:
          'Unlike fibrous supermarket powders that leave gritty residue in tea cups, our micro-pulverized Coorg ginger blends smoothly into hot infusions, cocktails, and delicate baking.',
        pairingPoints: [
          'Artisanal Gingerbread, Cookies & Spiced Cakes — Imparts genuine spicy heat that dances on the tongue.',
          'Immunity Boosting Lemon-Ginger Tonics — Dissolves cleanly with hot water, lemon, and raw honey.',
          'Asian Stir-Fries & Glazes — Adds instant fresh ginger kick without peeling or grating fresh roots.',
          'Marinades for Duck, Pork & Firm Tofu — Balances rich proteins with sharp acid and heat.',
        ],
        chefTip:
          'Pro Chef Tip: Dried ginger powder has higher concentrations of shogaols than fresh ginger, making it twice as warming. Start with 1/4 teaspoon when subbing for fresh minced ginger.',
      },
      ingredientsAndSpecs: {
        ingredients: '100% Pure Sun-Dried Coorg Ginger Rhizome Powder (Zingiber officinale).',
        netWeight: '100g / 250g / 500g net.',
        originCountry: 'Coorg, Karnataka, Republic of India.',
        activeConstituents: 'Total Gingerols + Shogaols: > 1.8% | Volatile Oil: > 2.0 ml/100g.',
        moisture: 'Max 9.0%.',
        ashContent: 'Total Ash: Max 6.0%.',
        aflatoxins: '< 2 ppb (Compliant with EU/GCC).',
        allergens: 'Free of allergens. Non-irradiated.',
        fillersAndColors: '0.00% Sulphur bleaching, chalk, or wheat starch adulteration.',
      },
      shippingAndGuarantees: {
        dispatchTime: 'Dispatched within 24–48 hours.',
        shippingMethods: [
          { name: 'UAE Direct Priority Courier', priceUSD: 6.0, priceAED: 22.0, estDays: '2–3 business days' },
          { name: 'GCC Regional Express Air', priceUSD: 9.0, priceAED: 33.0, estDays: '3–4 business days' },
          { name: 'Worldwide Express Air', priceUSD: 14.0, priceAED: 52.0, estDays: '4–6 business days' },
        ],
        freeShippingThresholdUSD: 75.0,
        freeShippingThresholdAED: 275.0,
        guaranteeHeadline: '100% Purity & Flavor Guarantee',
        guaranteeText:
          'Pure unbleached ginger with unmatched vitality. If you don’t fall in love with its fragrance and digestive warmth, get your money back anytime within 30 days.',
      },
      qualityAndPurity: {
        purityHeadline: 'Unbleached Natural Sun-Cured Quality',
        purityPoints: [
          'Never Bleached with Sulphur: Industrial exporters dip ginger in lime or sulphur dioxide for pale color. Our ginger is naturally washed and sun-dried.',
          'Shade-Grown Estate Origins: Grown alongside coffee, cardamom, and pepper in biodiverse soil.',
          'Dissolves Smoothly: Micro-sifted through 100 mesh silk screen.',
        ],
        testingDetails: 'Tested for sulphur dioxide (< 10 ppm), heavy metals, and moisture.',
        packagingDescription: 'Airtight metal canister with protective freshness seal.',
      },
      faq: [
        {
          question: 'Is this ginger bleached with sulphur or lime?',
          answer:
            'Never. Many commercial exporters soak ginger in sulphur dioxide or calcium carbonate to artificially whiten it. Aura ginger is 100% natural, unbleached, and retains its earthy warm golden-beige hue.',
        },
        {
          question: 'Can I dissolve this directly into tea without boiling?',
          answer:
            'Yes. Because it is micro-milled to 100-mesh silk grade, it dissolves almost entirely into hot water or steeped tea with virtually zero gritty residue.',
        },
      ],
    },
  },

  {
    id: 'imperial-garam-masala',
    slug: 'imperial-garam-masala',
    name: 'Royal Imperial Garam Masala Blend',
    botanicalName: 'Artisanal 12-Spice Grand Reserve',
    subtitle: 'Slow Dry-Roasted Spices • Whole Pods, Cloves & Star Anise • Heritage Recipe',
    badge: 'SIGNATURE BLEND',
    isBestseller: true,
    category: 'Artisanal Blends',
    rating: {
      score: 5.0,
      reviewCount: 215,
    },
    shortDescription:
      'A majestic finishing blend crafted from twelve whole spices: Tellicherry pepper, Alleppey green cardamom, black cardamom, cloves, cinnamon, mace, nutmeg, cumin, coriander, and star anise. Slow roasted and stone ground.',
    story:
      'Inspired by the grand royal kitchens of the Mughal courts and Chettinad spice estates, our Royal Imperial Garam Masala is toasted in small batches over low fire before stone milling. Designed to be dusted as a finishing flourish, it releases intoxicating warmth, floral top notes, and deep savory resonance.',
    heroImage: retailGaramMasalaImg,
    galleryImages: [
      retailGaramMasalaImg,
      retailGaramMasalaImg,
    ],
    basePriceUSD: 18.0,
    basePriceAED: 66.0,
    compareAtUSD: 22.0,
    compareAtAED: 80.0,
    activeCompound: '12 Whole Single-Origin Spices (Zero Fillers)',
    origin: 'Crafted in Chennai, Tamil Nadu from Southern & Northern Origins',
    harvestSeason: 'Fresh Autumn Roasting Batch',
    processingMethod: 'Gentle Cast-Iron Pan Roasting & Slow Stone Mill',
    meshSize: '70 Mesh Velvety Finishing Grind',
    shelfLife: '18 Months in Sealed Nitrogen Tin',
    variants: [
      {
        id: 'tin-100g',
        name: '100g Airtight Black & Gold Tin',
        weightGrams: 100,
        priceUSD: 18.0,
        priceAED: 66.0,
        compareAtUSD: 22.0,
        compareAtAED: 80.0,
        inStock: true,
        packageType: 'Airtight Black & Gold Metal Tin',
      },
      {
        id: 'tin-200g',
        name: '200g Luxury Pantry Tin (Best Value)',
        weightGrams: 200,
        priceUSD: 32.0,
        priceAED: 118.0,
        compareAtUSD: 40.0,
        compareAtAED: 148.0,
        inStock: true,
        packageType: 'Airtight Black & Gold Metal Tin',
      },
      {
        id: 'pouch-500g',
        name: '500g Resealable Kraft Foil Zip Pouch',
        weightGrams: 500,
        priceUSD: 62.0,
        priceAED: 228.0,
        compareAtUSD: 78.0,
        compareAtAED: 285.0,
        inStock: true,
        packageType: 'Resealable Stand-Up Foil Pouch',
      },
    ],
    tabs: {
      culinaryUses: {
        headline: 'The Crowning Glory of Heritage Indian Cooking',
        description:
          'Authentic Garam Masala is a finishing spice, not a cooking base. Adding it in the final 3–5 minutes of cooking allows its delicate toasted aromatic oils to billow up rather than evaporate away in heavy boiling.',
        pairingPoints: [
          'Royal Butter Chicken, Rogan Josh & Paneer Tikka Masala — Stir in 1 teaspoon just before turning off the heat.',
          'Roasted Root Vegetables & Butternut Squash Soup — Dust lightly over creamy soups and roasted pumpkin.',
          'Slow-Cooked Lentils & Dal Makhani — Swirled into sizzling ghee tempering at the very end.',
          'Braised Lamb Shanks & Venison — Complements gamey meats with warm clove, mace, and cardamom aromatics.',
        ],
        chefTip:
          'Pro Chef Tip: Never fry Garam Masala in smoking oil at the start. It has already been gently roasted. Add it in the final 5 minutes or sprinkle directly onto plated food like a gourmet condiment.',
      },
      ingredientsAndSpecs: {
        ingredients:
          'Tellicherry Black Pepper, Alleppey Green Cardamom, Bengal Black Cardamom, Kerala Cloves, Ceylon Cinnamon, Mace (Javitri), Nutmeg (Jaiphal), Cumin Seeds, Coriander, Star Anise, Bay Leaves (Tejpatta), Fennel.',
        netWeight: '100g / 200g / 500g net.',
        originCountry: 'Blended and packed in Chennai, Tamil Nadu, India.',
        activeConstituents: 'Complex Volatile Essential Oils > 4.5 ml/100g.',
        moisture: 'Max 8.5%.',
        ashContent: 'Total Ash: Max 6.0%.',
        aflatoxins: '< 2 ppb (GCC / EU certified).',
        allergens: 'Free of nuts, gluten, dairy, and soy.',
        fillersAndColors: '100% whole spices. Zero coriander husk padding, salt, starch, MSG, or artificial flavor.',
      },
      shippingAndGuarantees: {
        dispatchTime: 'Freshly batched and dispatched within 24–48 hours.',
        shippingMethods: [
          { name: 'UAE Direct Priority Courier', priceUSD: 6.0, priceAED: 22.0, estDays: '2–3 business days' },
          { name: 'GCC Regional Express Air', priceUSD: 9.0, priceAED: 33.0, estDays: '3–4 business days' },
          { name: 'Worldwide Express Air', priceUSD: 14.0, priceAED: 52.0, estDays: '4–6 business days' },
        ],
        freeShippingThresholdUSD: 75.0,
        freeShippingThresholdAED: 275.0,
        guaranteeHeadline: 'Imperial Taste Guarantee',
        guaranteeText:
          'This is garam masala as it was meant to be experienced by royalty. If you do not agree this is the most mesmerizing blend you have ever experienced, return it for a full immediate refund.',
      },
      qualityAndPurity: {
        purityHeadline: 'Small-Batch Craft Roasting',
        purityPoints: [
          'No Cheap Fillers: Most commercial blends are 70% cheap coriander and cumin powder. Ours is composed of costly whole spices (cloves, mace, green & black cardamom).',
          'Cast-Iron Pan Roasted: Each spice is roasted at its specific optimal temperature to unlock its specific aromatic spectrum.',
          'Airtight Sealed Metal Can: Retains toasted essential oils for 18 months.',
        ],
        testingDetails: 'Screened for full microbial safety and heavy metals.',
        packagingDescription: 'Matte black metal canister with airtight seal.',
      },
      faq: [
        {
          question: 'Why does this smell so much more aromatic than grocery store garam masala?',
          answer:
            'Commercial brands bulk out their mixes with up to 80% cheap coriander powder and sawdust-like fillers. Our Royal Imperial blend is 100% whole luxury spices (clove, green & black cardamom, mace, nutmeg, Ceylon cinnamon, and Tellicherry pepper) roasted in small batches.',
        },
        {
          question: 'When during cooking should I add this blend?',
          answer:
            'Garam Masala is traditionally added in the final 5 minutes of cooking or sprinkled directly onto plated curries, rice, or roasted dishes so the delicate roasted aromatics do not boil off.',
        },
      ],
    },
  },
];

export function getRetailProductBySlug(slug: string): RetailSpiceProduct | undefined {
  return RETAIL_SPICES_CATALOG.find((p) => p.slug === slug || p.id === slug);
}
