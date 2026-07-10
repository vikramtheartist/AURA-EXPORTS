import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';

interface PricingProps {
  onNavigate: (sectionId: string) => void;
}

export default function Pricing({ onNavigate }: PricingProps) {
  const faqs = [
    {
      q: 'What is your standard Minimum Order Quantity (MOQ)?',
      a: 'MOQs vary by commodity type. For agricultural yields and specialty grains, the starting MOQ is 1 FCL (Full Container Load / approx 20 Metric Tons). For mineral composites and pure ores, raw allocations are customized based on custom mining schedules.',
    },
    {
      q: 'How do you verify chemical assays and product grades?',
      a: 'Every single shipment undergoes strict testing by third-party global testing standard agencies (including SGS, Cotecna, and Bureau Veritas) at the port of origin. We distribute verified certificates of analysis and phytosanitary certificates before sea loading.',
    },
    {
      q: 'Which trade terms and payment frameworks are accepted?',
      a: 'We operate strictly under ICC Incoterms (primarily FOB, CFR, and CIF). Standard financial settlements are processed via Irrevocable Letters of Credit (L/C at sight) or standard Telegraphic Transfers (T/T) with standard escrow protection structures.',
    },
    {
      q: 'How do you coordinate custom door-to-port logistics?',
      a: 'We partner with the world\'s leading maritime container liners and custom brokers. AURA manages the entire overland transit, export customs clearance, and phytosanitary audits, providing comprehensive automated route status indicators to our trade partners.',
    },
    {
      q: 'Do you offer custom product processing or specialty packaging?',
      a: 'Yes, we accommodate customized particle size grades for mineral composites, and custom-designed moisture-barrier bulk bags/silo packaging for specialty agricultural seeds, matching your destination storage requirements.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faqs" className="w-full bg-black py-24 px-6 md:px-16 border-t border-[#dcb782]/10">
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4" id="faqs-header">
          <div className="liquid-glass rounded-full px-3.5 py-1 border border-[#dcb782]/20 shadow-sm">
            <span className="text-white font-body font-medium text-xs tracking-wider uppercase">
              Trade FAQs
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-heading text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#dcb782] tracking-tight leading-[0.9]"
            id="faqs-title"
          >
            Clear guidelines. Confident trade.
          </h2>
          <p className="text-[#dfd1b9]/70 font-body font-light text-sm md:text-base max-w-xl">
            Everything you need to understand regarding our quality guarantees, contract terms, shipping corridors, and supply safety networks.
          </p>
        </div>

        {/* Faqs List */}
        <div className="flex flex-col gap-4 mt-4" id="faqs-interactive-list">
          {faqs.map((faq, i) => {
            const isOpen = activeIndex === i;
            return (
              <div
                key={i}
                className="liquid-glass rounded-2xl border border-white/5 overflow-hidden transition-colors hover:border-[#dcb782]/20"
                id={`faq-item-${i}`}
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-body font-medium text-white cursor-pointer hover:bg-white/[0.01] transition-colors"
                >
                  <div className="flex items-center gap-3.5 pr-4">
                    <HelpCircle className="h-5 w-5 text-[#ab8558] shrink-0" />
                    <span className="text-base md:text-lg font-semibold tracking-tight text-[#fbfbeb]">{faq.q}</span>
                  </div>
                  <ChevronDown
                    className={`h-4 w-4 text-[#dcb782] transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-[#dfd1b9]/80 font-body font-light text-sm md:text-base leading-relaxed border-t border-white/5 bg-white/[0.005]">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Dynamic Help Card below FAQs */}
        <div
          className="liquid-glass rounded-3xl p-8 border border-[#dcb782]/15 text-center flex flex-col items-center gap-4 mt-8"
          id="faq-support-card"
        >
          <div className="h-10 w-10 rounded-full bg-[#dcb782]/10 flex items-center justify-center text-[#dcb782]">
            <MessageSquare className="h-5 w-5" />
          </div>
          <h3 className="text-xl font-heading italic text-white font-bold">Have specific specifications or custom assays?</h3>
          <p className="text-white/60 font-body text-sm max-w-md">
            Our trade desk works side-by-side with commercial procurement leaders, private buyers, and state entities to satisfy exact customs compliance.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="mt-2 bg-gradient-to-r from-[#dcb782] to-[#ab8558] text-black font-body font-bold rounded-full px-6 py-2.5 text-sm hover:opacity-90 transition-all cursor-pointer shadow-md"
          >
            Connect with Trade Desk
          </button>
        </div>
      </div>
    </section>
  );
}
