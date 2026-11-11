import React from 'react';
import { ShoppingBag, Globe2 } from 'lucide-react';

export type ProductFormatMode = 'packaged' | 'agro';

interface ProductModeSwitcherProps {
  currentMode: ProductFormatMode;
  onModeChange: (mode: ProductFormatMode) => void;
  packagedCount?: number;
  agroCount?: number;
}

export default function ProductModeSwitcher({
  currentMode,
  onModeChange,
  packagedCount,
  agroCount,
}: ProductModeSwitcherProps) {
  return (
    <div className="w-full flex justify-center my-6">
      <div
        role="tablist"
        aria-label="Product format switcher"
        className="inline-flex items-center p-1.5 bg-[#111113] border border-[#29292D] rounded-2xl shadow-xl max-w-full overflow-x-auto"
      >
        {/* Mode 1: Packaged Products (Retail & D2C) */}
        <button
          type="button"
          role="tab"
          aria-selected={currentMode === 'packaged'}
          onClick={() => onModeChange('packaged')}
          className={`flex items-center gap-2.5 px-5 md:px-7 py-3 rounded-xl text-xs md:text-sm font-heading tracking-wide transition-all duration-300 cursor-pointer whitespace-nowrap ${
            currentMode === 'packaged'
              ? 'bg-[#1A1A1D] border border-[#D4AF37]/50 text-white font-semibold shadow-lg shadow-black/40'
              : 'text-[#A5A19A] hover:text-white hover:bg-white/5 border border-transparent'
          }`}
        >
          <ShoppingBag
            className={`w-4 h-4 transition-colors ${
              currentMode === 'packaged' ? 'text-[#D4AF37]' : 'text-neutral-500'
            }`}
          />
          <span>Packaged Products <span className="font-mono text-xs text-[#A5A19A] font-normal">(Retail & D2C)</span></span>
          {typeof packagedCount === 'number' && (
            <span
              className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                currentMode === 'packaged'
                  ? 'bg-[#D4AF37]/20 text-[#D4AF37] font-bold'
                  : 'bg-white/5 text-neutral-400'
              }`}
            >
              {packagedCount}
            </span>
          )}
        </button>

        {/* Mode 2: Agro Products (Bulk & Wholesale) */}
        <button
          type="button"
          role="tab"
          aria-selected={currentMode === 'agro'}
          onClick={() => onModeChange('agro')}
          className={`flex items-center gap-2.5 px-5 md:px-7 py-3 rounded-xl text-xs md:text-sm font-heading tracking-wide transition-all duration-300 cursor-pointer whitespace-nowrap ${
            currentMode === 'agro'
              ? 'bg-[#1A1A1D] border border-[#D4AF37]/50 text-white font-semibold shadow-lg shadow-black/40'
              : 'text-[#A5A19A] hover:text-white hover:bg-white/5 border border-transparent'
          }`}
        >
          <Globe2
            className={`w-4 h-4 transition-colors ${
              currentMode === 'agro' ? 'text-[#D4AF37]' : 'text-neutral-500'
            }`}
          />
          <span>Agro Products <span className="font-mono text-xs text-[#A5A19A] font-normal">(Bulk & Wholesale)</span></span>
          {typeof agroCount === 'number' && (
            <span
              className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                currentMode === 'agro'
                  ? 'bg-[#D4AF37]/20 text-[#D4AF37] font-bold'
                  : 'bg-white/5 text-neutral-400'
              }`}
            >
              {agroCount}
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
