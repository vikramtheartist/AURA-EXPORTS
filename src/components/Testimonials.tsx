import { motion } from 'motion/react';
import { ShieldCheck, Lock, FileSearch } from 'lucide-react';

export default function Testimonials() {
  const governancePillars = [
    {
      icon: Lock,
      principle: 'Bilateral Confidentiality & NDA',
      body:
        'Aura protects our overseas partners\' proprietary formulations, custom branding, and destination trade corridors under legally binding bilateral NDAs. We never exploit client identities for public marketing.',
      metaLabel: 'Procurement Safeguard 01',
      metaRole: 'Enterprise Data & Brand Protection',
    },
    {
      icon: ShieldCheck,
      principle: 'Direct Traceability & Purity',
      body:
        'Every consignment is traced back to vetted South Indian agricultural collectives and artisan workshops. Buyers receive complete batch documentation, active chemical assays, and phytosanitary clearance.',
      metaLabel: 'Procurement Safeguard 02',
      metaRole: 'Zero-Adulteration Supply Chain',
    },
    {
      icon: FileSearch,
      principle: 'Verifiable References On Request',
      body:
        'For institutional procurement committees conducting formal vendor onboarding, verifiable corporate credentials, sample test reports, and banking references are provided under bilateral protocol.',
      metaLabel: 'Procurement Safeguard 03',
      metaRole: 'Structured Vendor Verification',
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
    <section id="procurement-governance" className="w-full bg-black py-24 px-6 md:px-16 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4" id="governance-header">
          <div className="liquid-glass rounded-full px-3.5 py-1 border border-white/10 shadow-sm">
            <span className="text-[#dcb782] font-body font-medium text-xs tracking-wider uppercase">
              PROCUREMENT GOVERNANCE
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-heading text-white tracking-tight leading-[1.05]"
            id="governance-title"
          >
            Built on <span className="text-[#dcb782] italic font-normal">Integrity & Discretion</span>
          </h2>
          <p className="text-[#D5C8B7]/80 text-sm md:text-base font-light max-w-2xl">
            Why international procurement managers trust Aura Global Trade with strategic sourcing relationships.
          </p>
        </div>

        {/* 3-column Grid layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-15% 0px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4"
          id="governance-grid"
        >
          {governancePillars.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="liquid-glass rounded-2xl p-8 border border-white/5 flex flex-col justify-between hover:border-[#dcb782]/30 transition-colors group relative"
                id={`governance-card-${i}`}
              >
                <div>
                  <div className="h-10 w-10 rounded-xl bg-white/5 border border-[#dcb782]/20 flex items-center justify-center mb-6">
                    <Icon className="h-5 w-5 text-[#dcb782]" />
                  </div>
                  <h3 className="text-white font-heading text-lg font-medium mb-3">
                    {item.principle}
                  </h3>
                  <p
                    className="text-[#D5C8B7]/80 font-body font-light text-xs md:text-sm leading-relaxed mb-8 relative z-10"
                    id={`governance-body-${i}`}
                  >
                    {item.body}
                  </p>
                </div>

                {/* Attribution / Meta line */}
                <div className="flex flex-col gap-0.5 mt-auto pt-4 border-t border-white/5 relative z-10" id={`governance-meta-${i}`}>
                  <span className="text-[#dcb782] font-mono font-semibold text-xs tracking-wider uppercase">
                    {item.metaLabel}
                  </span>
                  <span className="text-white/50 font-body font-light text-[11px]">
                    {item.metaRole}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
