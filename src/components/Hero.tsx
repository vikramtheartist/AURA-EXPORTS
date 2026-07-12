import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import BlurText from './BlurText';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const partners = ['Asia-Pacific', 'Americas', 'Europe', 'Middle East', 'Africa'];

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-black flex flex-col items-center justify-center pt-[150px]"
      style={{ height: '1000px' }}
    >
      {/* Background Video (Vimeo Embed) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-85 brightness-[0.7] select-none" id="hero-bg-container">
        <iframe
          src="https://player.vimeo.com/video/1209283495?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&playsinline=1"
          className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-full min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none scale-[1.05]"
          allow="autoplay; fullscreen"
          title="Hero Background Video"
          frameBorder="0"
          id="hero-bg-vimeo-iframe"
        />
      </div>

      {/* Dark tint overlay */}
      <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none" id="hero-tint-overlay" />

      {/* Bottom gradient fade: transparent to solid black */}
      <div
        className="absolute bottom-0 left-0 right-0 w-full pointer-events-none z-1"
        style={{
          height: '300px',
          background: 'linear-gradient(to bottom, transparent, black 100%)',
        }}
        id="hero-bottom-fade"
      />

      {/* Hero Central Content */}
      <div 
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex-1 flex flex-col justify-center items-start text-left gap-6 mt-16 md:mt-24"
        style={{ transform: 'translateY(-50px)' }}
      >
        {/* Heading: BlurText Component */}
        <BlurText
          text="Empowering exports, enriching lives."
          delay={100}
          stagger={80}
          className="text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-display italic text-[#E3C591] leading-[1.05] max-w-2xl tracking-[-2px] text-left justify-start font-bold"
        />

        {/* Subtext Paragraph */}
        <motion.p
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-xl font-body font-light leading-relaxed text-left text-lg md:text-xl text-[#D5C8B7]"
          id="hero-subtext"
        >
          Through quality sourcing and global partnerships, we deliver more than products — we deliver value.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-start justify-start gap-4 sm:gap-6"
          id="hero-ctas"
        >
          {/* Main CTA */}
          <button
            onClick={() => onNavigate('products')}
            className="group liquid-glass-strong rounded-full px-7 py-3 flex items-center justify-center gap-2 text-white border border-[#dcb782]/30 hover:border-[#dcb782]/60 hover:bg-white/5 transition-all cursor-pointer shadow-lg hover:scale-[1.03] active:scale-[0.98]"
            id="hero-cta-main"
          >
            <span className="font-body font-medium text-sm tracking-wide text-[#fbfbeb] group-hover:text-white">Discover our products</span>
            <ArrowUpRight className="h-4 w-4 text-[#dcb782] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Partners Bar at bottom */}
      <div className="w-full relative z-10 flex flex-col items-center gap-4 pb-12 pt-8" id="hero-partners-section">
        <div className="liquid-glass border border-primary/10 rounded-full px-4 py-1.5 shadow-md">
          <p className="text-[#dfd1b9]/50 text-[10px] md:text-xs font-body font-light uppercase tracking-widest text-center">
            Delivering Value Across Global Corridors
          </p>
        </div>
        <div
          className="flex flex-wrap justify-center items-center gap-12 md:gap-16 px-6 max-w-5xl w-full"
          id="partners-logos-list"
        >
          {partners.map((partner) => {
            const isItalic = ['asia-pacific', 'europe'].includes(partner.toLowerCase());
            return (
              <motion.span
                key={partner}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.4 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ opacity: 0.95, scale: 1.05 }}
                className={`text-[20px] font-heading text-white tracking-tight cursor-default relative font-medium select-none ${
                  isItalic ? 'italic' : 'not-italic'
                }`}
                id={`partner-${partner.toLowerCase()}`}
              >
                {partner}
              </motion.span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
