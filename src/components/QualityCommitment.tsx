import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import commitmentImg from '../assets/images/commitment_quality_1780415008795.png';

interface QualityCommitmentProps {
  onNavigate: (sectionId: string) => void;
}

export default function QualityCommitment({ onNavigate }: QualityCommitmentProps) {
  const points = [
    {
      title: 'Stringent Quality Control',
      description: 'Every batch of resources and premium commodities undergoes strict multi-point inspections to ensure pristine quality and consistency.',
      icon: ShieldCheck,
    },
    {
      title: 'Certified Global Standards',
      description: 'We comply fully with leading international certifications, ensuring effortless integration into demanding global markets.',
      icon: CheckCircle2,
    },
    {
      title: 'Transparent Logistics & Logistics Tracing',
      description: 'From sourcing origins to delivery port, we maintain absolute transparency and real-time transit security for total peace of mind.',
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 text-[#dcb782]"
        >
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="quality" className="w-full bg-[#181816]/90 py-24 px-6 md:px-16 border-t border-white/5 relative overflow-hidden">
      {/* Decorative localized glow in background */}
      <div className="absolute right-0 top-1/4 w-[350px] h-[350px] bg-[#dcb782]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Content & Pillars */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px' }}
          className="lg:col-span-7 flex flex-col gap-8 text-left"
          id="quality-content"
        >
          <div className="flex flex-col gap-4">
            <div className="w-fit liquid-glass rounded-full px-4 py-1 border border-white/10 shadow-sm">
              <span className="text-[#dcb782] font-body font-bold text-xs tracking-wider uppercase">
                OUR ASSURANCE
              </span>
            </div>
            
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-heading text-white tracking-tight leading-[1] font-normal"
              id="quality-title"
            >
              Our Commitment <br className="hidden md:inline" /> to Quality
            </h2>
          </div>

          <p className="text-[#D5C8B7] font-body text-base md:text-lg leading-relaxed font-light max-w-xl">
            At AURA Global Trade, quality is our cornerstone. We ensure that every shipment and premium product meets the most stringent international standards through methodical testing, strict inspections, and continuous global network improvements.
          </p>

          {/* Pillars List */}
          <div className="flex flex-col gap-6 mt-2" id="quality-points">
            {points.map((pt, index) => {
              const IconComponent = pt.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-4 border-b border-white/5 pb-5 last:border-b-0 last:pb-0"
                  id={`quality-point-${index}`}
                >
                  <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-black/40 border border-[#dcb782]/15 flex items-center justify-center p-2">
                    <IconComponent className="h-5 w-5 text-[#dcb782]" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-body text-base font-bold text-white tracking-wide">
                      {pt.title}
                    </h3>
                    <p className="font-body text-sm text-[#D5C8B7]/80 leading-relaxed font-light">
                      {pt.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Link matching AURA's elegant aesthetic */}
          <motion.div variants={itemVariants} className="pt-4">
            <button
              onClick={() => onNavigate('contact')}
              className="group flex items-center gap-2 bg-gradient-to-r from-[#dcb782] to-[#ab8558] text-black font-body font-bold rounded-xl px-6 py-3 text-sm hover:from-[#fbf3db] hover:to-[#dcb782] transition-all duration-300 shadow-lg cursor-pointer hover:scale-[1.02]"
              id="quality-cta-btn"
            >
              Contact us
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side: Showcase Image fitted beautifully */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center w-full h-full relative group"
          id="quality-image-container"
        >
          {/* Subtle gold outer gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#dcb782]/10 to-transparent rounded-3xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <img
            src={commitmentImg}
            alt="AURA Global Supply Lines"
            referrerPolicy="no-referrer"
            className="w-full max-w-[400px] lg:max-w-none h-auto aspect-[3/4] object-cover rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative z-10 transition-transform duration-700 group-hover:scale-[1.02]"
            id="quality-showcase-image"
          />
          
          {/* Liquid glass light shine overlay */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent rounded-b-3xl pointer-events-none z-20" />
        </motion.div>

      </div>
    </section>
  );
}
