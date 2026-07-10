import { motion } from 'motion/react';
import { Leaf, ArrowUpRight } from 'lucide-react';

interface StartSectionProps {
  onNavigate: (sectionId: string) => void;
}

export default function StartSection({ onNavigate }: StartSectionProps) {
  const tags = [
    'Reliable',
    'Innovative',
    'Global',
    'Efficient',
    'Impactful',
    'Adaptive',
    'Collaborative',
    'Visionary',
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 25, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="about"
      className="w-full bg-black text-[#fbfbeb] py-24 md:py-32 px-6 md:px-16 lg:px-24 select-none border-b border-[#dcb782]/10 relative overflow-hidden"
    >
      {/* Background soft ambient radial decoration */}
      <div className="absolute top-[10%] right-[-10%] w-[35vw] h-[35vw] bg-neutral-900/40 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10% 0px' }}
        className="max-w-7xl mx-auto lg:grid lg:grid-cols-12 gap-16 items-start relative z-10"
        id="about-content-grid"
      >
        {/* Left Column: Badge, Heading, and Tags */}
        <div className="lg:col-span-7 flex flex-col gap-8 md:gap-10 text-left">
          {/* Badge Pill in premium gold liquid glass */}
          <motion.div 
            variants={childVariants} 
            className="flex"
            id="about-badge-container"
          >
            <div className="inline-flex items-center gap-2 bg-[#dcb782]/5 px-4.5 py-1.5 rounded-full border border-[#dcb782]/20 shadow-sm backdrop-blur-md">
              <Leaf className="h-3.5 w-3.5 text-[#dcb782] fill-[#dcb782]/10 shrink-0" />
              <span className="text-[#fbfbeb] font-body font-semibold text-xs tracking-wider uppercase">
                About us
              </span>
            </div>
          </motion.div>

          {/* New Requested Heading with gradient styling matching the dark premium theme */}
          <motion.h2
            variants={childVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-heading text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#dcb782] tracking-tight leading-[1.05] max-w-2xl font-normal"
            id="about-heading"
          >
            We are committed to advancing trade with integrity and excellence.
          </motion.h2>

          {/* Tags cloud styled as premium liquid-glass capsules */}
          <motion.div
            variants={childVariants}
            className="flex flex-wrap gap-2.5 max-w-xl"
            id="about-tags-cloud"
          >
            {tags.map((tag) => (
              <span
                key={tag}
                className="liquid-glass hover:bg-white/[0.02] text-[#dfd1b9]/90 font-body font-medium text-xs md:text-sm px-4.5 py-2.5 rounded-xl border border-white/5 hover:border-[#dcb782]/20 transition-all shadow-xs"
                id={`about-tag-${tag.toLowerCase()}`}
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Mission Description and Button */}
        <div className="lg:col-span-5 flex flex-col gap-8 pt-10 lg:pt-16 text-left">
          {/* Description Paragraph matching the dark text alpha levels */}
          <motion.p
            variants={childVariants}
            className="text-[#dfd1b9]/75 font-body font-light text-base md:text-lg leading-relaxed max-w-lg"
            id="about-description"
          >
            Our mission is to redefine what’s possible in the export industry — creating lasting value for producers and clients worldwide. Rooted in India’s rich heritage and driven by modern innovation, we deliver more than just products — we deliver impact that spans borders and industries.
          </motion.p>

          {/* Action Button: About the company (Styled in gold gradient look and feel) */}
          <motion.div variants={childVariants} className="mt-2">
            <button
              onClick={() => onNavigate('products')}
              className="group bg-gradient-to-r from-[#dcb782] to-[#ab8558] hover:from-[#fbf3db] hover:to-[#dcb782] text-black px-7 py-3.5 rounded-full font-body font-bold text-sm tracking-wide shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer w-fit"
              id="about-company-btn"
            >
              <Leaf className="h-4 w-4 fill-black text-black shrink-0" />
              <span>About the company</span>
              <ArrowUpRight className="h-4 w-4 text-black shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
