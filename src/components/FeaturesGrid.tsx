import { motion } from 'motion/react';
import { Zap, BarChart3, Shield, Globe } from 'lucide-react';

export default function FeaturesGrid() {
  const cards = [
    {
      icon: Globe,
      title: 'Direct-to-Origin Alliances',
      desc: "By engaging directly at the origin rather than through brokers, we establish reliable capital relationships with local farmers and miners to maximize transparency.",
    },
    {
      icon: Shield,
      title: 'Certified Assay Control',
      desc: 'All commodities carry validated chemical essays, phytosanitary permits, and certificates of origin required by rigorous global customs regulations.',
    },
    {
      icon: Zap,
      title: 'Synchronized Multimodal Freight',
      desc: 'Efficiently connecting farmlands and mines to primary hub ports, avoiding transport bottlenecks with structured, end-of-route tracking.',
    },
    {
      icon: BarChart3,
      title: 'Defensive Supply Buffering',
      desc: 'Strategic physical stockpiles and flexible multi-year logistics agreements protect your manufacturing pipelines from unforeseen geopolitical shifts.',
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="features" className="w-full bg-black py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4" id="why-us-header">
          <div className="liquid-glass rounded-full px-3.5 py-1 border border-[#dcb782]/20 shadow-sm">
            <span className="text-white font-body font-medium text-xs tracking-wider uppercase">
              Our Vision & Philosophy
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-heading text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#dcb782] tracking-tight leading-[0.9]"
            id="why-us-title"
          >
            The AURA Difference.
          </h2>
        </div>

        {/* 4-column Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-15% 0px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4"
          id="why-us-grid"
        >
          {cards.map((card, i) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2, ease: 'easeOut' } }}
                className="liquid-glass rounded-2xl p-6 border border-white/5 flex flex-col gap-5 hover:border-white/15 transition-colors group relative"
                id={`grid-card-${i}`}
              >
                {/* Icon wrapper inside glowing glass container */}
                <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center border border-white/20 shadow-md">
                  <IconComponent className="h-5 w-5 text-white transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
                </div>

                {/* Text Context */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-body font-semibold text-white tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-white/60 font-body font-light text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                {/* Subtle sheen highlight in top corners */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-white/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
