import { ShoppingBag } from 'lucide-react';

export type ProductFormatMode = 'packaged';

interface ProductModeSwitcherProps {
  currentMode?: ProductFormatMode;
  onModeChange?: (mode: ProductFormatMode) => void;
  packagedCount?: number;
  agroCount?: number;
}

export default function ProductModeSwitcher({
  packagedCount,
}: ProductModeSwitcherProps) {
  return (
    <div className="w-full flex justify-center my-6">
      <div
        className="inline-flex items-center gap-2.5 px-6 py-2.5 bg-[#111113] border border-[#D4AF37]/40 rounded-2xl shadow-xl transition-all"
        aria-label="Retail & D2C packaged products collection"
      >
        <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
        <span className="text-xs md:text-sm font-heading text-white font-medium">
          Packaged Products <span className="font-mono text-xs text-[#A5A19A] font-normal">(Retail & D2C)</span>
        </span>
        {typeof packagedCount === 'number' && (
          <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] font-bold border border-[#D4AF37]/30">
            {packagedCount}
          </span>
        )}
      </div>
    </div>
  );
}
