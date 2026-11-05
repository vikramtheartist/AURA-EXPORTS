import { motion } from 'motion/react';
import {
  ArrowUpRight,
  ShieldCheck,
  Award,
  Tag,
  Leaf,
  Package,
  Sparkles,
  Layers,
} from 'lucide-react';
import agroHeroImg from '../assets/images/agro_products_hero.jpg';
import fashionHeroImg from '../assets/images/fashion_lifestyle_hero.jpg';
import apparelHeritageHeroImg from '../assets/images/apparel_textiles_hero_heritage.jpg';
import { useQuoteModal } from '../context/QuoteModalContext';

interface FeaturesChessProps {
  onNavigate: (sectionId: string) => void;
}

interface ProductHighlight {
  iconType: 'leaf' | 'shield' | 'package' | 'sparkles' | 'layers';
  label: string;
  valLine1: string;
  valLine2: string;
}

interface ProductItem {
  id: string;
  routeId: string;
  label: string;
  title: string;
  description: string;
  keywords: string;
  ctaText: string;
  image: string;
  badge: string;
  highlights: ProductHighlight[];
  isImageLeft: boolean;
}

export default function FeaturesChess({ onNavigate }: FeaturesChessProps) {
  const { openQuoteModal } = useQuoteModal();

  const products: ProductItem[] = [
    {
      id: 'agro-products',
      routeId: 'products/agro-products',
      label: "INDIA'S FINEST ORIGINS. SOURCED FOR THE WORLD.",
      title: 'Agro Products',
      description:
        'Connecting global buyers with quality Indian agricultural products through origin-led sourcing, flexible specifications and reliable export solutions.',
      keywords: 'Spices · Turmeric · Chillies · Grains · Pulses · Fresh Produce',
      ctaText: 'Explore Agro Products',
      image: agroHeroImg,
      badge: 'COMPREHENSIVE AGRO PORTFOLIO',
      highlights: [
        {
          iconType: 'leaf',
          label: 'PRODUCT RANGE',
          valLine1: '7 Agro',
          valLine2: 'Subcategories',
        },
        {
          iconType: 'shield',
          label: 'QUALITY FOCUS',
          valLine1: 'Product-specific',
          valLine2: 'testing',
        },
        {
          iconType: 'package',
          label: 'EXPORT LOGISTICS',
          valLine1: 'Dry, Reefer &',
          valLine2: 'Air Cargo',
        },
      ],
      isImageLeft: false,
    },
    {
      id: 'fashion-lifestyle',
      routeId: 'products/fashion-lifestyle',
      label: 'INDIAN CRAFTSMANSHIP. GLOBAL STYLE.',
      title: 'Fashion & Lifestyle',
      description:
        'Connecting global buyers with authentic Indian craftsmanship, traditional metallurgy and contemporary artisanal accessories through reliable export solutions.',
      keywords: 'Fashion Jewelry · Temple Metallurgy · Kundan · Oxidized · Lifestyle Products',
      ctaText: 'Explore Fashion & Lifestyle',
      image: fashionHeroImg,
      badge: 'AUTHENTIC INDIAN CRAFTSMANSHIP',
      highlights: [
        {
          iconType: 'sparkles',
          label: 'ARTISAN TRADITIONS',
          valLine1: 'Temple, Kundan &',
          valLine2: 'Meenakari Styles',
        },
        {
          iconType: 'shield',
          label: 'SAFETY COMPLIANCE',
          valLine1: 'EU REACH Tested,',
          valLine2: 'Lead & Nickel Safe',
        },
        {
          iconType: 'package',
          label: 'MANUFACTURING SCOPE',
          valLine1: 'Private Label &',
          valLine2: 'Custom Packaging',
        },
      ],
      isImageLeft: true,
    },
    {
      id: 'apparel-textiles',
      routeId: 'products/apparel-textiles',
      label: 'INDIAN TEXTILE HERITAGE. GLOBAL POSSIBILITIES.',
      title: 'Apparel & Textiles',
      description:
        'Connecting global buyers with authentic Indian textile craftsmanship, heritage handloom weaves, silk sarees and export apparel solutions.',
      keywords: 'Silk Sarees · Handloom Textiles · Cotton Fabrics · Apparel · Home Textiles',
      ctaText: 'Explore Apparel & Textiles',
      image: apparelHeritageHeroImg,
      badge: 'INDIAN TEXTILE HERITAGE & SOURCING',
      highlights: [
        {
          iconType: 'layers',
          label: 'HERITAGE WEAVES',
          valLine1: 'Kanjivaram Silk &',
          valLine2: 'Pochampally Ikat',
        },
        {
          iconType: 'shield',
          label: 'FABRIC FORMATS',
          valLine1: 'Pure Silk, Linen &',
          valLine2: 'Airjet Cotton',
        },
        {
          iconType: 'package',
          label: 'LOGISTICS SCOPE',
          valLine1: 'Air & Sea Cargo,',
          valLine2: 'Global Gateway Ports',
        },
      ],
      isImageLeft: false,
    },
  ];

  const renderHighlightIcon = (type: ProductHighlight['iconType']) => {
    switch (type) {
      case 'leaf':
        return <Leaf className="h-5 w-5 text-[#dcb782]" strokeWidth={1.6} />;
      case 'shield':
        return <ShieldCheck className="h-5 w-5 text-[#dcb782]" strokeWidth={1.6} />;
      case 'package':
        return <Package className="h-5 w-5 text-[#dcb782]" strokeWidth={1.6} />;
      case 'sparkles':
        return <Sparkles className="h-5 w-5 text-[#dcb782]" strokeWidth={1.6} />;
      case 'layers':
        return <Layers className="h-5 w-5 text-[#dcb782]" strokeWidth={1.6} />;
    }
  };

  return (
    <section id="products" className="w-full bg-transparent py-24 md:py-28 px-4 sm:px-6 md:px-10 lg:px-16 relative overflow-hidden select-none">
      {/* Visual background atmospheric glows */}
      <div className="absolute top-[5%] left-[-25%] w-[60vw] h-[60vw] bg-[#dcb782]/2 rounded-full blur-[220px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-25%] w-[60vw] h-[60vw] bg-[#ab8558]/3 rounded-full blur-[220px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-20 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-4" id="sourcing-header">
          <div className="bg-white/5 backdrop-blur-md rounded-full px-4 py-1.5 border border-[#dcb782]/20 shadow-sm">
            <span className="text-[#dcb782] font-body font-bold text-xs tracking-widest uppercase">
              OUR EXPORT PORTFOLIO
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white tracking-tight leading-[1.05] font-normal">
            Connecting India&apos;s Finest Products <span className="text-[#dcb782] italic font-normal">to Global Markets.</span>
          </h2>
          <p className="text-sm md:text-base text-[#D5C8B7] font-light max-w-2xl leading-relaxed">
            From agricultural commodities and premium spices to fashion accessories and comprehensive apparel &amp; textiles, Aura Exports connects diverse product categories with international sourcing opportunities.
          </p>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#dcb782]/30 to-transparent mt-2" />
        </div>

        {/* Dynamic Showcase of Luxury Cards */}
        <div className="flex flex-col gap-16 md:gap-20" id="products-showcase-list">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ y: 25, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative w-full rounded-[2.5rem] border border-white/10 bg-[#090908]/95 backdrop-blur-xl p-5 sm:p-7 md:p-8 lg:p-10 shadow-[0_30px_80px_rgba(0,0,0,0.85)] overflow-hidden lg:h-[590px] xl:h-[600px] flex flex-col justify-center"
              id={`product-${product.id}-block`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch w-full h-full">
                
                {/* Content Column */}
                <div
                  className={`lg:col-span-7 flex flex-col justify-between relative p-4 sm:p-6 md:p-7 lg:p-8 h-full ${
                    product.isImageLeft ? 'lg:order-2' : 'lg:order-1'
                  }`}
                  id={`product-${product.id}-content`}
                >

                  {/* Top content: Eyebrow, Title, Description */}
                  <div className="flex flex-col justify-start">
                    {/* Eyebrow */}
                    <div className="text-[#dcb782] font-mono text-[10.5px] sm:text-[11px] md:text-xs tracking-[0.25em] font-bold uppercase mb-2 sm:mb-3 h-[18px] flex items-center">
                      {product.label}
                    </div>

                    {/* Main Title */}
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-heading text-white font-normal leading-[1.1] tracking-tight mb-3 sm:mb-4 min-h-[48px] md:min-h-[56px] flex items-center">
                      {product.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm md:text-[15px] font-body font-light text-[#D5C8B7]/80 leading-relaxed max-w-xl mb-5 sm:mb-6 min-h-[44px] md:min-h-[46px] flex items-center">
                      {product.description}
                    </p>

                    {/* 3 Spec Columns with vertical dividers */}
                    <div className="grid grid-cols-3 divide-x divide-white/10 mb-5 sm:mb-6 py-1 min-h-[88px] items-center">
                      {product.highlights.map((item, idx) => (
                        <div
                          key={idx}
                          className={`flex flex-col gap-1.5 ${
                            idx === 0
                              ? 'pr-3 sm:pr-4 md:pr-6'
                              : idx === 2
                              ? 'pl-3 sm:pl-4 md:pl-6'
                              : 'px-3 sm:px-4 md:px-6'
                          }`}
                        >
                          <div>{renderHighlightIcon(item.iconType)}</div>
                          <span className="text-[9.5px] sm:text-[10px] md:text-[11px] font-mono text-white/50 uppercase tracking-wider font-semibold">
                            {item.label}
                          </span>
                          <span className="text-xs sm:text-[13px] md:text-sm font-semibold text-white leading-snug">
                            {item.valLine1}
                            <br />
                            {item.valLine2}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Category Keywords Banner */}
                    <div className="flex items-center gap-2.5 bg-black/40 border border-[#dcb782]/30 rounded-2xl md:rounded-full px-4 h-[44px] mb-5 sm:mb-6 w-full overflow-hidden">
                      <Tag className="h-3.5 w-3.5 text-[#dcb782] shrink-0" />
                      <span className="text-xs md:text-[12.5px] font-mono text-[#dcb782] font-medium tracking-wide truncate">
                        {product.keywords}
                      </span>
                    </div>
                  </div>

                  {/* Interactive Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3.5 w-full pt-1">
                    <button
                      type="button"
                      onClick={() => onNavigate(product.routeId)}
                      className="flex-1 bg-[#dcb782] hover:bg-white text-black font-semibold transition-all duration-300 rounded-xl px-5 py-3.5 flex items-center justify-center gap-2 text-xs font-body tracking-wider uppercase cursor-pointer shadow-md h-[46px]"
                    >
                      <span>{product.ctaText}</span>
                      <ArrowUpRight className="h-4 w-4 shrink-0" />
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        openQuoteModal({
                          category: product.id,
                          product: product.title,
                          requirement: `Procurement inquiry for ${product.title}.`,
                        })
                      }
                      className="flex-1 bg-transparent hover:bg-white/5 border border-[#dcb782]/40 hover:border-[#dcb782] text-white font-semibold transition-all duration-300 rounded-xl px-5 py-3.5 flex items-center justify-center gap-1.5 text-xs font-body tracking-wider uppercase cursor-pointer h-[46px]"
                    >
                      <span>Request Quote</span>
                    </button>
                  </div>
                </div>

                {/* Right / Left Image Column */}
                <div
                  className={`lg:col-span-5 relative rounded-[2rem] overflow-hidden min-h-[380px] md:min-h-[440px] lg:min-h-0 h-full w-full group cursor-pointer ${
                    product.isImageLeft ? 'lg:order-1' : 'lg:order-2'
                  }`}
                  onClick={() => onNavigate(product.routeId)}
                  id={`product-${product.id}-img-wrapper`}
                >
                  <img
                    src={product.image}
                    alt={`Aura Exports - ${product.title}`}
                    className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                    loading="lazy"
                    id={`product-${product.id}-img`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Dark overlay with 'View more' trigger on hover */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 bg-white text-black font-body font-bold text-xs tracking-wider uppercase px-5 py-3 rounded-xl flex items-center gap-2 shadow-2xl hover:bg-[#dcb782] transition-colors">
                      <span>{product.ctaText}</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </div>
                  </div>

                  {/* Floating Top-Right Badge */}
                  <div className="absolute top-5 right-5 backdrop-blur-md bg-black/80 border border-[#dcb782]/40 rounded-full py-1.5 px-4 flex items-center gap-2 shadow-xl z-10">
                    <Award className="h-3.5 w-3.5 text-[#dcb782]" />
                    <span className="text-[10px] font-mono text-white tracking-widest font-bold uppercase">
                      {product.badge}
                    </span>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
