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
      {/* Background Video (MP4) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero_bg.jpeg"
        className="absolute left-0 w-full h-auto min-h-[500px] object-cover md:object-contain z-0 pointer-events-none select-none"
        style={{ top: '20%', opacity: 0.8 }}
        id="hero-bg-video"
        referrerPolicy="no-referrer"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark tint overlay */}
      <div className="absolute inset-0 bg-black/15 z-0 pointer-events-none" id="hero-tint-overlay" />

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
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto flex-1 justify-center gap-4 mt-12">
        {/* Heading: BlurText Component */}
        <BlurText
          text="Empowering exports, enriching lives."
          delay={100}
          stagger={80}
          className="text-6xl md:text-7xl lg:text-[5.5rem] font-display italic text-white leading-[0.9] max-w-3xl tracking-[-3px] text-center justify-center font-bold"
        />

        {/* Subtext Paragraph */}
        <motion.p
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-xl font-body font-light leading-relaxed"
          style={{ fontSize: '24px', color: '#D5C8B7' }}
          id="hero-subtext"
        >
          Through quality sourcing and global partnerships, we deliver more than products — we deliver value.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
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
