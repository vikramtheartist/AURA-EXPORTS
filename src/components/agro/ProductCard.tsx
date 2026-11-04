import React from 'react';
import { MapPin, ArrowUpRight, Check } from 'lucide-react';
import { InstitutionalProduct } from '../../data/institutionalAgroCatalog';

interface ProductCardProps {
  key?: React.Key;
  product: InstitutionalProduct;
  onViewSpecifications: (product: InstitutionalProduct) => void;
  onRequestQuotation: (product: InstitutionalProduct) => void;
}

export default function ProductCard({
  product,
  onViewSpecifications,
  onRequestQuotation,
}: ProductCardProps) {
  // Show max 3 forms in compact list, remaining with '+ More'
  const visibleForms = product.cardForms.slice(0, 3);
  const remainingFormsCount = Math.max(0, product.cardForms.length - 3);

  return (
    <article className="group bg-[#111113] border border-[#252527] hover:border-[#E2BC86]/40 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(226,188,134,0.06)] relative overflow-hidden h-full">
      <div className="flex flex-col">
        {/* Visual Product Photography (~55–60% visual emphasis) */}
        <div
          onClick={() => onViewSpecifications(product)}
          className="relative rounded-2xl overflow-hidden aspect-[16/11] mb-5 bg-[#0A0A0B] border border-white/5 cursor-pointer"
        >
          <img
            src={product.image}
            alt={`AURA Global Trade - ${product.cardTitle}`}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          {/* Subtle natural dark gradient for contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Category Label */}
        <div className="mb-2">
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase font-semibold text-[#A5A19A]">
            {product.category}
          </span>
        </div>

        {/* Product Name (Prominent Editorial Serif) */}
        <h3
          onClick={() => onViewSpecifications(product)}
          className="font-heading text-2xl lg:text-[1.65rem] text-[#F5F2EC] font-medium leading-tight group-hover:text-[#E2BC86] transition-colors cursor-pointer mb-2"
        >
          {product.cardTitle}
        </h3>

        {/* Sourcing Origin */}
        <div className="flex items-center gap-1.5 text-xs font-mono text-[#A5A19A] mb-3">
          <MapPin className="h-3 w-3 text-[#E2BC86] shrink-0" />
          <span className="truncate" title={product.origin.displayOrigin}>
            {product.origin.displayOrigin}
          </span>
        </div>

        {/* Concise One-Sentence Description (~15–20 words) */}
        <p className="text-xs text-[#A5A19A] font-light leading-relaxed mb-4 min-h-[38px]">
          {product.cardDescription}
        </p>

        {/* Compact Available Formats List (Restrained Check Icons) */}
        <div className="mb-6 pt-3 border-t border-[#252527]">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#A5A19A]/80 block mb-2 font-medium">
            Available Formats
          </span>
          <ul className="space-y-1.5">
            {visibleForms.map((form, fIdx) => (
              <li key={fIdx} className="flex items-center gap-2 text-xs text-[#F5F2EC]/90 font-light">
                <Check className="h-3 w-3 text-[#E2BC86] shrink-0" />
                <span className="truncate">{form}</span>
              </li>
            ))}
            {remainingFormsCount > 0 && (
              <li className="pt-0.5">
                <button
                  type="button"
                  onClick={() => onViewSpecifications(product)}
                  className="text-[11px] font-mono text-[#E2BC86] hover:underline cursor-pointer inline-flex items-center gap-1"
                >
                  +{remainingFormsCount} More Formats Available ↗
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* Vertically Stacked Actions (Full Width, Consistent Height) */}
      <div className="pt-4 border-t border-[#252527] flex flex-col gap-2.5 w-full mt-auto">
        {/* Primary Action: Product Details */}
        <button
          type="button"
          onClick={() => onViewSpecifications(product)}
          className="w-full bg-[#E2BC86] hover:bg-[#d4a86a] text-[#0A0A0B] font-body font-bold text-xs tracking-wider uppercase py-3.5 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-sm cursor-pointer hover:shadow-[0_8px_20px_rgba(226,188,134,0.2)]"
        >
          <span>PRODUCT DETAILS</span>
          <ArrowUpRight className="h-4 w-4" />
        </button>

        {/* Secondary Action: Enquire Now */}
        <button
          type="button"
          onClick={() => onRequestQuotation(product)}
          className="w-full bg-transparent border border-[#252527] hover:border-white/30 hover:bg-white/[0.03] text-[#F5F2EC] font-body font-semibold text-xs tracking-wider uppercase py-3.5 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>ENQUIRE NOW</span>
        </button>
      </div>
    </article>
  );
}
