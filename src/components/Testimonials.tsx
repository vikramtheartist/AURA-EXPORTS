import { motion } from 'motion/react';

export default function Testimonials() {
  const reviews = [
    {
      quote:
        'AURA\'s custom sourcing and phytosanitary rigor have completely secured our seasonal agricultural supply pipelines.',
      author: 'Suleiman Al-Hassan',
      role: 'Managing Director, Gulf Harvest Alliance',
    },
    {
      quote:
        'Their door-to-port logistics are flawlessly synchronized. Over 15,000 metric tons delivered with absolute purity and zero latency.',
      author: 'Isabella Ricci',
      role: 'VP of Sourcing, Vercelli Commodities',
    },
    {
      quote:
        'They deliver more than cargo — they deliver structural peace of mind, immaculate product grades, and strict adherence to global compliance.',
      author: 'Kenji Sato',
      role: 'Director of Global Import, Pacifica Corp',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="testimonials-section" className="w-full bg-black py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4" id="testimonials-header">
          <div className="liquid-glass rounded-full px-3.5 py-1 border border-white/10 shadow-sm">
            <span className="text-white font-body font-medium text-xs tracking-wider uppercase">
              What They Say
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-heading text-white tracking-tight leading-[0.9]"
            id="testimonials-title"
          >
            Don't take our word for it.
          </h2>
        </div>

        {/* 3-column Grid layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-15% 0px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4"
          id="testimonials-grid"
        >
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="liquid-glass rounded-2xl p-8 border border-white/5 flex flex-col justify-between hover:border-white/15 transition-colors group relative"
              id={`testimonial-card-${i}`}
            >
              {/* Quote text */}
              <p
                className="text-white/80 font-body font-light text-sm md:text-base italic leading-relaxed mb-8 relative z-10"
                id={`quote-${i}`}
              >
                “{r.quote}”
              </p>

              {/* Author attribution */}
              <div className="flex flex-col gap-0.5 mt-auto relative z-10" id={`author-info-${i}`}>
                <span className="text-white font-body font-semibold text-sm group-hover:text-white/90 transition-colors">
                  {r.author}
                </span>
                <span className="text-white/50 font-body font-light text-xs">
                  {r.role}
                </span>
              </div>

              {/* Decorative subtle ambient quote marker inside card */}
              <span className="absolute right-6 bottom-4 text-7xl font-heading text-white/[0.03] select-none pointer-events-none italic font-bold">
                ”
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
