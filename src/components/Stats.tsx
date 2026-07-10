import { motion } from 'motion/react';
import HlsVideoBg from './HlsVideoBg';

export default function Stats() {
  const statItems = [
    { value: '45+', label: 'Partner Countries' },
    { value: '12K+', label: 'Tons Shipped Annually' },
    { value: '99.4%', label: 'On-time Deliveries' },
    { value: '150+', label: 'Vetted Producers' },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-black py-24 select-none"
      id="stats-section"
    >
      {/* Background desaturated HLS video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <HlsVideoBg
          src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
          desaturate={true}
          className="opacity-45"
        />
        {/* Soft overlay tint */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Top and Bottom fades (200px each) */}
      <div
        className="absolute top-0 left-0 right-0 w-full pointer-events-none z-1"
        style={{
          height: '200px',
          background: 'linear-gradient(to bottom, black, transparent)',
        }}
        id="stats-top-fade"
      />
      <div
        className="absolute bottom-0 left-0 right-0 w-full pointer-events-none z-1"
        style={{
          height: '200px',
          background: 'linear-gradient(to top, black, transparent)',
        }}
        id="stats-bottom-fade"
      />

      {/* Stats Inner Central Core */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 h-full flex items-center justify-center">
        {/* Rounded-3xl Card */}
        <div
          className="liquid-glass border border-white/10 rounded-3xl p-12 md:p-16 w-full shadow-2xl relative"
          id="stats-main-card"
        >
          {/* Faint ambient white glow inside card top */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-white/20 blur-[2px] rounded-full" />

          {/* 4-column Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10% 0px' }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
            id="stats-grid"
          >
            {statItems.map((item, index) => (
              <motion.div
                key={index}
                variants={statVariants}
                className="flex flex-col items-center text-center gap-2 group cursor-default"
                id={`stat-item-${index}`}
              >
                {/* Large Italic Serif Value */}
                <span
                  className="text-white text-5xl md:text-6xl lg:text-7xl font-heading italic tracking-tight transition-transform duration-500 group-hover:scale-105"
                  id={`stat-value-${index}`}
                >
                  {item.value}
                </span>
                {/* Secondary Descriptive Label */}
                <span
                  className="text-white/60 font-body font-light text-xs md:text-sm uppercase tracking-wider"
                  id={`stat-label-${index}`}
                >
                  {item.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
