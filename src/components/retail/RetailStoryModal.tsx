import { useEffect, useRef } from 'react';
import { X, Play, ShieldCheck, Sparkles, Sprout, Award } from 'lucide-react';

interface RetailStoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RetailStoryModal({ isOpen, onClose }: RetailStoryModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="retail-story-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl bg-[#121212] border border-[#292929] rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#181818]/90 border border-[#292929] hover:border-[#D4AF78] text-[#A29B91] hover:text-[#F2E9D9] flex items-center justify-center transition-all cursor-pointer shadow-lg"
          aria-label="Close story modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Story Video / Header Showcase */}
        <div className="relative aspect-[16/9] w-full bg-black overflow-hidden shrink-0">
          <video
            ref={videoRef}
            src="/aura_treasure_still_edited.mp4"
            controls
            autoPlay
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Narrative Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF78]/10 border border-[#D4AF78]/25">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF78]" />
              <span className="text-[10px] font-mono text-[#D4AF78] uppercase tracking-[0.2em] font-bold">
                OUR RETAIL PHILOSOPHY
              </span>
            </div>
            <h3
              id="retail-story-title"
              className="text-2xl sm:text-3xl font-heading text-[#F2E9D9] font-normal"
            >
              The Architecture of Single-Origin Purity
            </h3>
            <p className="text-sm sm:text-base text-[#A29B91] font-light leading-relaxed">
              At AURA, we believe that true luxury lies in unadulterated botanical potency. We reject conventional commodity blending, where spices from mixed origins and variable harvest seasons are combined into homogenized supermarket powders.
            </p>
          </div>

          {/* 3 Editorial Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-[#181818] border border-[#292929] space-y-2">
              <div className="w-8 h-8 rounded-xl bg-[#D4AF78]/10 flex items-center justify-center text-[#D4AF78]">
                <Sprout className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-heading font-medium text-[#F2E9D9]">
                Single-Origin Estates
              </h4>
              <p className="text-xs text-[#77716A] leading-relaxed">
                Direct estate partnerships across Salem, Guntur, Idukki, Unjha, and Rajasthan.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#181818] border border-[#292929] space-y-2">
              <div className="w-8 h-8 rounded-xl bg-[#D4AF78]/10 flex items-center justify-center text-[#D4AF78]">
                <Award className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-heading font-medium text-[#F2E9D9]">
                Cold Cryo-Milling
              </h4>
              <p className="text-xs text-[#77716A] leading-relaxed">
                Slow-milled under 38°C to retain natural volatile curcuminoids and aroma oils.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#181818] border border-[#292929] space-y-2">
              <div className="w-8 h-8 rounded-xl bg-[#D4AF78]/10 flex items-center justify-center text-[#D4AF78]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-heading font-medium text-[#F2E9D9]">
                Aroma-Locked Tins
              </h4>
              <p className="text-xs text-[#77716A] leading-relaxed">
                Food-grade matte black canisters with gold closures that block light degradation.
              </p>
            </div>
          </div>

          <div className="pt-2 border-t border-[#292929] flex items-center justify-between">
            <span className="text-xs font-mono text-[#77716A]">
              100% Traceable · Zero Fillers · HPLC Certified
            </span>
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-[#D4AF78] hover:bg-[#E5C07B] text-[#090909] font-mono font-bold text-xs uppercase transition-colors cursor-pointer"
            >
              Explore Collection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

