import { motion } from 'motion/react';
import { ArrowUpRight, ShieldCheck, Award, Tag } from 'lucide-react';
import agroHeroImg from '../assets/images/agro_products_hero.jpg';
import fashionHeroImg from '../assets/images/fashion_lifestyle_hero.jpg';
import apparelHeritageHeroImg from '../assets/images/apparel_textiles_hero_heritage.jpg';

interface FeaturesChessProps {
  onNavigate: (sectionId: string) => void;
}

export default function FeaturesChess({ onNavigate }: FeaturesChessProps) {
  const products = [
    {
      id: 'agro-products',
      routeId: 'products/agro-products',
      label: "INDIA'S FINEST ORIGINS. SOURCED FOR THE WORLD.",
      title: 'Agro Products',
      keywords: 'Spices · Turmeric · Chillies · Grains · Pulses · Fresh Produce',
      description1:
        'Connecting global buyers with quality Indian agricultural products through origin-led sourcing, flexible specifications and reliable export solutions.',
      description2:
        "Sourced across India's leading agricultural regions, including Tamil Nadu, Kerala and Andhra Pradesh, with product formats and packaging tailored to buyer requirements.",
      ctaText: 'Explore Agro Products',
      image: agroHeroImg,
      badge: 'Comprehensive Agro Portfolio',
      specs: [
        { label: 'PRODUCT RANGE', value: '7 Agro Subcategories' },
        { label: 'QUALITY FOCUS', value: 'Product-specific testing' },
        { label: 'EXPORT LOGISTICS', value: 'Dry, Reefer & Air Cargo' },
      ],
      isImageLeft: false,
    },
    {
      id: 'fashion-lifestyle',
      routeId: 'products/fashion-lifestyle',
      label: 'INDIAN CRAFTSMANSHIP. GLOBAL STYLE.',
      title: 'Fashion & Lifestyle',
      keywords: 'Fashion Jewelry | Temple Jewelry | Kundan & Meenakari | Oxidized Jewelry | Handcrafted Accessories | Lifestyle Products',
      description1:
        'Discover an expressive collection of Indian-inspired jewelry, handcrafted accessories and lifestyle products, bringing traditional artistry and contemporary design to international markets.',
      description2:
        'Connecting international buyers with South Indian temple metallurgy, Rajasthani Kundan and Meenakari enamel, Bohemian oxidized silver-tone adornments, and PVD gold-plated contemporary fashion accessories.',
      ctaText: 'Explore Fashion & Lifestyle',
      image: fashionHeroImg,
      badge: 'Authentic Indian Craftsmanship & Lifestyle',
      specs: [
        { label: 'Artisan Traditions', value: 'Temple, Kundan, Meenakari & Oxidized' },
        { label: 'Metallurgy & Media', value: 'Brass, Zinc Alloy & 316L Surgical Steel' },
        { label: 'Manufacturing Scope', value: 'Private Label, Brand Books & Custom Cards' },
        { label: 'Safety Compliance', value: 'EU REACH Tested, Lead & Nickel Safe' },
      ],
      isImageLeft: true,
    },
    {
      id: 'apparel-textiles',
      routeId: 'products/apparel-textiles',
      label: 'INDIAN TEXTILE HERITAGE. GLOBAL POSSIBILITIES.',
      title: 'Apparel & Textiles',
      keywords: 'Silk Sarees | Handloom Textiles | Cotton Fabrics | Apparel & Garments | Home Textiles | Traditional Indian Fabrics',
      description1:
        'From exquisite silk sarees and traditional handloom fabrics to contemporary apparel and home textiles, discover India\'s diverse textile craftsmanship and sourcing opportunities for international markets.',
      description2:
        'Connecting international institutional buyers with authentic Kanjivaram and Banarasi silk weaving corridors, GI-tagged Pochampally Ikats, Rajasthani hand block prints, premium cotton-linen fabrics, and export garments.',
      ctaText: 'Explore Apparel & Textiles',
      image: apparelHeritageHeroImg,
      badge: 'Indian Textile Heritage & Sourcing',
      specs: [
        { label: 'Heritage Weaves', value: 'Kanjivaram & Banarasi Silk, Pochampally Ikat' },
        { label: 'Fabric Formats', value: 'Pure Silk, Linen Blends, Airjet Cotton & Knits' },
        { label: 'Production Scope', value: 'Yarns, Mill Fabrics, Cut-to-Pack Garments' },
        { label: 'Export Gateways', value: 'Chennai, Tuticorin, Nhava Sheva & Mumbai' },
      ],
      isImageLeft: false,
    },
  ];

  return (
    <section id="products" className="w-full bg-transparent py-28 px-6 md:px-12 lg:px-20 relative overflow-hidden select-none">
      {/* Visual background atmospheric glows */}
      <div className="absolute top-[5%] left-[-25%] w-[60vw] h-[60vw] bg-[#dcb782]/2 rounded-full blur-[220px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-25%] w-[60vw] h-[60vw] bg-[#ab8558]/3 rounded-full blur-[220px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col gap-24 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-8" id="sourcing-header">
          <div className="bg-white/5 backdrop-blur-md rounded-full px-4 py-1.5 border border-[#dcb782]/20 shadow-sm">
            <span className="text-[#dcb782] font-body font-bold text-xs tracking-widest uppercase">
              OUR EXPORT PORTFOLIO
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white tracking-tight leading-[1.05] font-normal">
            Connecting India&apos;s Finest Products <span className="text-[#dcb782] italic font-normal">to Global Markets.</span>
          </h2>
          <p className="text-sm md:text-base text-[#D5C8B7] font-light max-w-2xl leading-relaxed">
            From agricultural commodities and premium spices to fashion accessories and comprehensive apparel & textiles, Aura Exports connects diverse product categories with international sourcing opportunities.
          </p>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#dcb782]/30 to-transparent mt-2" />
        </div>

        {/* Dynamic Showcase of Luxury Blocks */}
        <div className="flex flex-col gap-28 md:gap-36" id="products-showcase-list">
          {products.map((product) => (
            <div
              key={product.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              id={`product-${product.id}-block`}
            >
              {/* Overlapping Floating Photo Element */}
              <div
                className={`lg:col-span-6 relative w-full flex justify-center items-center group ${
                  product.isImageLeft ? 'lg:order-1' : 'lg:order-2'
                }`}
                id={`product-${product.id}-visual-wrapper`}
              >
                {/* Backlighting effect aura */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#dcb782]/20 via-transparent to-transparent rounded-[2.5rem] blur-2xl opacity-40 group-hover:opacity-75 transition-opacity duration-1000 pointer-events-none" />

                {/* Main 3D Floating luxury image */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: '-10% 0px' }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  onClick={() => onNavigate(product.routeId)}
                  className="relative p-2 rounded-[2.4rem] overflow-hidden border border-white/5 bg-gradient-to-b from-white/5 to-transparent w-full max-w-[480px] shadow-[0_25px_60px_rgba(0,0,0,0.8)] cursor-pointer"
                >
                  <div className="rounded-[2rem] overflow-hidden aspect-[4/5] relative">
                    <img
                      src={product.image}
                      alt={`Aura Exports - ${product.title}`}
                      className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                      loading="lazy"
                      id={`product-${product.id}-img`}
                    />
                    {/* Shadow overlay to integrate beautifully */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

                    {/* Dark overlay with 'View more' trigger on hover */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                      <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 bg-white text-black font-body font-bold text-xs tracking-wider uppercase px-5 py-3 rounded-xl flex items-center gap-2 shadow-2xl hover:bg-[#dcb782] transition-colors">
                        <span>{product.ctaText}</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Miniature decorative layout detail floating on image */}
                  <div className="absolute top-6 right-6 backdrop-blur-md bg-black/60 border border-[#dcb782]/35 rounded-full py-1.5 px-4 flex items-center gap-1.5 shadow-lg">
                    <Award className="h-3.5 w-3.5 text-[#dcb782]" />
                    <span className="text-[10px] font-mono text-white tracking-widest font-bold uppercase">{product.badge}</span>
                  </div>
                </motion.div>
              </div>

              {/* Glassmorphic Rounded Floating Card */}
              <div
                className={`lg:col-span-6 flex justify-center lg:justify-start ${
                  product.isImageLeft ? 'lg:order-2 lg:pl-4' : 'lg:order-1'
                }`}
                id={`product-${product.id}-glass-wrapper`}
              >
                <motion.div
                  initial={{ x: product.isImageLeft ? 40 : -40, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative w-full max-w-xl rounded-[2.2rem] p-8 md:p-10 border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.9)] backdrop-blur-xl bg-[#0e0e0d]/80 overflow-hidden group/card"
                >
                  {/* Filigree linear corner frame */}
                  <div className="absolute top-6 left-6 right-6 flex items-center justify-between opacity-25 pointer-events-none">
                    <div className="w-5 h-5 border-t-2 border-l-2 border-[#dcb782]" />
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-[#dcb782] via-transparent to-[#dcb782] mx-3" />
                    <div className="w-5 h-5 border-t-2 border-r-2 border-[#dcb782]" />
                  </div>

                  {/* Subtitle / Category Label */}
                  <div className="text-[#dcb782] font-mono text-xs tracking-[0.3em] font-extrabold uppercase mt-6 mb-2">
                    {product.label}
                  </div>

                  {/* Main Display Title */}
                  <h3 className="text-3xl md:text-4xl font-heading text-white font-normal leading-tight mb-3">
                    {product.title}
                  </h3>

                  {/* Category Keywords Banner */}
                  <div className="inline-flex items-center gap-2 mb-3.5 bg-white/[0.03] border border-[#dcb782]/20 rounded-xl px-3 py-1 w-fit max-w-full">
                    <Tag className="h-3 w-3 text-[#dcb782] shrink-0" />
                    <span className="text-[11px] font-mono text-[#dcb782] font-medium tracking-wide">
                      {product.keywords}
                    </span>
                  </div>

                  {/* Luxury editorial text body */}
                  <div className="flex flex-col gap-2.5 text-xs md:text-sm leading-relaxed font-body font-light mb-5">
                    <p className="text-[#D5C8B7]/95">{product.description1}</p>
                    <p className="text-[#D5C8B7]/70 text-[11px] md:text-xs leading-relaxed">{product.description2}</p>
                  </div>

                  {/* Technical Specs inner container with decorative accents */}
                  <div className="border-t border-white/10 pt-4 flex flex-col gap-2.5">
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#dcb782] tracking-wider font-extrabold uppercase">
                      <span>PROCUREMENT PARAMETERS</span>
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {product.specs.map((spec, sIdx) => {
                        const isFullSpan = product.specs.length === 3 && sIdx === 2;
                        return (
                          <div 
                            key={sIdx} 
                            className={`flex ${
                              isFullSpan 
                                ? 'sm:col-span-2 sm:flex-row sm:items-center sm:justify-between px-3.5 py-2' 
                                : 'flex-col justify-center px-3 py-2'
                            } gap-0.5 bg-white/[0.02] border border-white/5 rounded-xl hover:border-[#dcb782]/20 hover:bg-white/[0.04] transition-all duration-300 min-h-[46px]`}
                          >
                            <span className="text-[9px] font-mono text-white/45 uppercase tracking-wider font-bold">
                              {spec.label}
                            </span>
                            <span className="text-xs font-semibold text-white tracking-wide">
                              {spec.value}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Interactive luxury Action Buttons */}
                  <div className="mt-5 flex flex-col sm:flex-row gap-3">
                    <button 
                      onClick={() => onNavigate(product.routeId)}
                      className="flex-1 bg-[#dcb782] text-black hover:bg-white hover:text-black font-semibold transition-all duration-300 rounded-xl px-5 py-3 flex items-center justify-center gap-2 text-xs font-body tracking-wider uppercase cursor-pointer shadow-md"
                    >
                      <span>{product.ctaText}</span>
                      <ArrowUpRight className="h-4 w-4 shrink-0" />
                    </button>
                    
                    <button 
                      onClick={() => onNavigate(`request-quote?category=${product.id}`)}
                      className="flex-1 border border-white/10 text-white hover:border-[#dcb782] hover:bg-white/5 transition-all duration-300 rounded-xl px-4 py-3 flex items-center justify-center gap-1.5 text-xs font-body tracking-wider uppercase font-semibold cursor-pointer"
                    >
                      <span>Request Quote</span>
                    </button>
                  </div>

                  {/* Lower decorative border alignment */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between opacity-15 pointer-events-none">
                    <div className="w-5 h-5 border-b-2 border-l-2 border-[#dcb782]" />
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-[#dcb782] via-transparent to-[#dcb782] mx-3" />
                    <div className="w-5 h-5 border-b-2 border-r-2 border-[#dcb782]" />
                  </div>
                </motion.div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
