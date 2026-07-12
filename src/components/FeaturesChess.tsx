import { motion } from 'motion/react';
import { ArrowUpRight, ShieldCheck, Zap, Leaf, Sparkles, Award } from 'lucide-react';
import turmericImg from '../assets/images/product_turmeric_1780423510096.png';
import jewelryImg from '../assets/images/product_jewelry_1780423528983.png';
import textilesImg from '../assets/images/product_textiles_1780423544568.png';

interface FeaturesChessProps {
  onNavigate: (sectionId: string) => void;
}

export default function FeaturesChess({ onNavigate }: FeaturesChessProps) {
  const products = [
    {
      id: 'turmeric',
      label: 'ORGANIC SPICES',
      title: 'Premium Turmeric',
      description1: 'Experience the unparalleled purity of our high-curcumin turmeric powder and fingers, meticulously grown in the bio-rich volcanic soils of Erode.',
      description2: 'Sourced directly from GOTS-compliant ethical farm collectives, each batch is cold-milled under 18°C to retain its native therapeutic essential oils and powerful curcuminoids.',
      image: turmericImg,
      badge: '95.0% Curcumin Assay',
      specs: [
        { label: 'Active Curcumin', value: '95% Bio-Active' },
        { label: 'Thermal Profile', value: 'Cold-Milled 18°C' },
        { label: 'Chemical Profile', value: 'Zero Pesticides (SGS Cert)' },
        { label: 'Sourcing Ground', value: 'Lava-Rich Western Ghats' },
      ],
      isImageLeft: false,
    },
    {
      id: 'jewelry',
      label: 'ARTISANAL LUXURY',
      title: 'Exquisite Jewelry',
      description1: 'Discover the brilliant allure of our handcrafted jewelry, designed to blend modern sensibilities with deep-rooted heritage elements.',
      description2: 'Each ring, necklace, and bracelet is hand-fired and sand-cast in certified zero-waste local foundries using hypoallergenic upcycled fine metals.',
      image: jewelryImg,
      badge: '98% Artisan Crafted',
      specs: [
        { label: 'Alloy Composition', value: 'Recycled Fine Brass & Gold' },
        { label: 'Artistry Rating', value: '100% Hand-fired' },
        { label: 'Foundry Technique', value: 'Zero-Waste Sand Cast' },
        { label: 'Lead & Nickel', value: '0% Non-Toxic Profile' },
      ],
      isImageLeft: true,
    },
    {
      id: 'textiles',
      label: 'HERITAGE FABRICS',
      title: 'Sustainable Textiles',
      description1: 'Embrace high-performance circular design with our exquisite GOTS-certified textiles, woven to absolute tailoring perfection.',
      description2: 'Each yard is spun from indigenous organic heirloom cotton and custom-dyed using Ayurvedic natural madder and traditional botanical indigo extracts.',
      image: textilesImg,
      badge: '96% Carbon Offset',
      specs: [
        { label: 'Weave Design', value: 'Heritage Chevron & Twill' },
        { label: 'Carbon Reduction', value: '96% Sustainable Offset' },
        { label: 'Certification', value: 'GOTS & Oeko-Tex Standard' },
        { label: 'Tensile Strength', value: '32.4 N/m (Industrial)' },
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
              EXPORT STREAM SHOWCASE
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white tracking-tight leading-[1.05] font-normal">
            Sourcing Precision. <span className="text-[#dcb782] italic font-normal">Refined Globally.</span>
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#dcb782]/30 to-transparent mt-2" />
        </div>

        {/* Dynamic Showcase of Luxury Blocks */}
        <div className="flex flex-col gap-28 md:gap-36" id="products-showcase-list">
          {products.map((product) => (
            <div
              key={product.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center`}
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
                  onClick={() => onNavigate(product.id)}
                  className="relative p-2 rounded-[2.4rem] overflow-hidden border border-white/5 bg-gradient-to-b from-white/5 to-transparent w-full max-w-[480px] shadow-[0_25px_60px_rgba(0,0,0,0.8)] cursor-pointer"
                >
                  <div className="rounded-[2rem] overflow-hidden aspect-[4/5] relative">
                    <img
                      src={product.image}
                      alt={`AURA Global Trade - ${product.title}`}
                      className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      id={`product-${product.id}-img`}
                    />
                    {/* Shadow overlay to integrate beautifully */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

                    {/* Dark overlay with 'View more' trigger on hover */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                      <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 bg-white text-black font-body font-bold text-xs tracking-wider uppercase px-5 py-3 rounded-xl flex items-center gap-2 shadow-2xl hover:bg-[#dcb782] transition-colors">
                        <span>View more Details</span>
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

              {/* Glassmorphic Rounded Floating Card (Exactly modeled after mockup) */}
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
                  {/* Upper decorative Greek-key/filigree linear corner frame matching mockup */}
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
                  <h3 className="text-4xl md:text-5xl font-heading text-white font-normal leading-tight mb-6">
                    {product.title}
                  </h3>

                  {/* Luxury editorial text body */}
                  <div className="flex flex-col gap-4 text-sm md:text-[14.5px] leading-relaxed text-[#D5C8B7]/85 font-body font-light mb-8">
                    <p>{product.description1}</p>
                    <p>{product.description2}</p>
                  </div>

                  {/* Technical Specs inner container with decorative accents */}
                  <div className="border-t border-white/10 pt-6 flex flex-col gap-4">
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#dcb782] tracking-wider font-extrabold uppercase">
                      <span>INTELLIGENT SPECIFICATIONS</span>
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                      {product.specs.map((spec, sIdx) => (
                        <div 
                          key={sIdx} 
                          className="flex flex-col gap-0.5 bg-white/[0.02] border border-white/5 rounded-xl p-2.5 hover:border-[#dcb782]/20 hover:bg-white/[0.04] transition-all duration-300"
                        >
                          <span className="text-[9px] font-mono text-white/45 uppercase tracking-wider font-bold">
                            {spec.label}
                          </span>
                          <span className="text-xs font-semibold text-white tracking-wide mt-0.5">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Interactive luxury Action Buttons */}
                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <button 
                      onClick={() => onNavigate(product.id)}
                      className="flex-1 bg-[#dcb782] text-black hover:bg-white hover:text-black font-semibold transition-all duration-300 rounded-xl px-5 py-3 flex items-center justify-center gap-2 text-xs font-body tracking-wider uppercase cursor-pointer shadow-md"
                    >
                      <span>View details</span>
                      <ArrowUpRight className="h-4 w-4 shrink-0" />
                    </button>
                    
                    <button 
                      onClick={() => onNavigate('contact')}
                      className="flex-1 border border-white/10 text-white hover:border-[#dcb782] hover:bg-white/5 transition-all duration-300 rounded-xl px-4 py-3 flex items-center justify-center gap-1.5 text-xs font-body tracking-wider uppercase font-semibold cursor-pointer"
                    >
                      <span>Inquire Bulk</span>
                    </button>
                  </div>

                  {/* Lower decorative border alignment */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between opacity-15 pointer-events-none">
                    <div className="w-5 h-5 border-b-2 border-l-2 border-[#dcb782]" />
                    <div className="h-[px] flex-1 bg-gradient-to-r from-[#dcb782] via-transparent to-[#dcb782] mx-3" />
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
