import { motion } from 'motion/react';
import philosophyImg from '../assets/images/temple_philosophy_png_1780419676440.png';

export default function Philosophy() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const statItems = [
    { value: '14+', label: 'GLOBAL HUBS' },
    { value: '98.4%', label: 'COMPLIANCE RATE' },
    { value: '500+', label: 'PARTNER FARMS' },
  ];

  return (
    <section id="philosophy" className="w-full bg-[#0d0d0c] py-24 px-6 md:px-12 lg:px-16 border-t border-white/5 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-[#dcb782]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 -translate-y-1/4 w-[250px] h-[250px] bg-white/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
          id="philosophy-grid-container"
        >
          {/* Left Column: Fine Art Moody Temple Graphic */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 relative group flex justify-center"
            id="philosophy-image-col"
          >
            {/* Outer golden glow wrapper framing */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-[#dcb782]/20 to-transparent rounded-2xl blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-700" />
            
            {/* Premium thin decorative border layout framing */}
            <div className="relative p-2.5 border border-[#dcb782]/15 bg-black/60 rounded-xl overflow-hidden backdrop-blur-sm shadow-2xl">
              <div className="overflow-hidden rounded-lg border border-white/5 relative aspect-[4/5] max-w-[420px]">
                <img
                  src={philosophyImg}
                  alt="Aura Global Trade Wisdom Philosophy - South Indian Heritage stone craftsmanship"
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105 filter grayscale contrast-125"
                  referrerPolicy="no-referrer"
                  id="philosophy-heritage-img"
                />
                
                {/* Vintage overlay texture mask */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 mix-blend-multiply pointer-events-none" />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Intimate Copy & Quotes */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 flex flex-col items-start text-left gap-2"
            id="philosophy-text-col"
          >
            {/* Subtitle Accent */}
            <span
              className="text-xs font-body font-semibold tracking-[0.25em] text-[#dcb782] uppercase"
              id="philosophy-label-tag"
            >
              OUR PHILOSOPHY
            </span>

            {/* Quote Heading */}
            <h2
              className="text-4 relative text-4xl md:text-5xl lg:text-[2.85rem] font-heading italic text-white leading-tight font-medium mt-3 mb-2"
              id="philosophy-quote-heading"
            >
              “Yaadhum Oore, Yaavarum Kelir”
            </h2>

            {/* Translation description line */}
            <div className="border-l border-[#dcb782]/45 pl-3 mb-6">
              <span
                className="text-[11px] md:text-xs font-body tracking-wider text-[#D5C8B7]/70 font-semibold uppercase block"
                id="philosophy-translation-label"
              >
                — THE WORLD IS MY HOME. EVERYONE IS MY KIN.
              </span>
            </div>

            {/* Structural Narrative Description */}
            <p
              className="text-[#D5C8B7]/90 font-body text-sm md:text-base leading-relaxed font-light mb-8 max-w-2xl"
              id="philosophy-narrative-paragraph"
            >
              Aura Global Trade bridges the gap between the rich heritage of South India and the dynamic requirements of global commerce. We are not merely exporters; we are custodians of value, operating with a philosophy that recognizes the inherent connectivity of all markets.
            </p>

            {/* Thin Aesthetic divider line */}
            <div className="w-full h-[1px] bg-white/10 my-2" id="philosophy-metrics-separator" />

            {/* Mini Row of Stats customized per design layout */}
            <div className="grid grid-cols-3 gap-6 md:gap-12 w-full mt-6" id="philosophy-metrics-grid">
              {statItems.map((stat, i) => (
                <div key={i} className="flex flex-col gap-1.5" id={`philosophy-stat-box-${i}`}>
                  <span
                    className="text-[#dcb782] font-heading italic text-2xl md:text-3.5xl lg:text-4xl tracking-tight leading-none"
                    id={`philosophy-stat-val-${i}`}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-[#D5C8B7]/50 font-body text-[10px] md:text-xs tracking-wider font-bold uppercase leading-tight"
                    id={`philosophy-stat-lbl-${i}`}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
