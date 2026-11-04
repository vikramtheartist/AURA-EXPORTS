import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import turmericImg from '../../assets/images/product_turmeric_1780423510096.png';

interface FeaturedTurmericSectionProps {
  onOpenEnquiry?: () => void;
}

export default function FeaturedTurmericSection({ onOpenEnquiry }: FeaturedTurmericSectionProps) {
  const availableForms = [
    'Whole Cured Fingers',
    'Salem Double-Polished Fingers',
    'Cold-Milled Pure Powder',
    'Pure Culinary Paste',
    'Standardized Extract Capsules',
    'Kasturi Manjal Skincare Preparations',
  ];

  return (
    <section className="w-full py-20 px-6 md:px-12 lg:px-20 relative bg-[#0a0a09]" id="featured-turmeric-section">
      <div className="max-w-7xl mx-auto">
        {/* Compact Editorial Feature Card */}
        <div className="rounded-3xl border border-[#D4AF37]/30 bg-gradient-to-b from-[#141416] to-[#111113] p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Visual Image */}
            <div className="lg:col-span-5 rounded-2xl overflow-hidden aspect-[4/3] relative border border-white/10 bg-[#0A0A0B] shadow-xl group">
              <img
                src={turmericImg}
                alt="AURA Global Trade - Erode & Salem Turmeric Sourcing"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-[#E5C07B] flex items-center justify-between">
                <span>Erode & Salem GI Basin, Tamil Nadu</span>
                <span className="text-[10px] bg-black/60 px-2 py-0.5 rounded border border-white/10">Flagship Origin</span>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-3.5 py-1 mb-4">
                  <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
                  <span className="text-[10px] font-mono text-[#D4AF37] tracking-wider uppercase font-bold">
                    FLAGSHIP AGRICULTURAL ORIGIN
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-white font-normal leading-tight mb-4">
                  Turmeric from Erode & Salem.{' '}
                  <span className="text-[#E5C07B] italic font-normal block mt-1">
                    Sourced for Global Markets.
                  </span>
                </h2>

                <p className="text-sm md:text-base text-[#A5A19A] font-light leading-relaxed mb-6">
                  Discover turmeric from Tamil Nadu&apos;s established sourcing regions, available across whole, dried, powdered and value-added product formats.
                </p>

                {/* Concise List of Available Forms */}
                <div className="mb-8">
                  <span className="text-[10px] font-mono text-[#77736C] uppercase tracking-wider block mb-2.5 font-semibold">
                    AVAILABLE PRODUCT FORMATS
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {availableForms.map((form, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono bg-[#141416] text-[#F5F2EC] border border-[#1E1E22] px-3 py-1.5 rounded-lg"
                      >
                        {form}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-6 border-t border-[#1E1E22] flex flex-wrap items-center gap-4">
                <Link
                  to="/products/agro-products/turmeric"
                  className="px-7 py-3 rounded-xl bg-[#D4AF37] hover:bg-[#E5C07B] text-[#0A0A0B] font-semibold text-xs tracking-wider uppercase transition-all shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Turmeric</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                {onOpenEnquiry && (
                  <button
                    type="button"
                    onClick={onOpenEnquiry}
                    className="px-6 py-3 rounded-xl border border-[#1E1E22] hover:border-[#D4AF37]/50 text-[#F5F2EC] hover:bg-white/5 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Request Turmeric Quotation
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
