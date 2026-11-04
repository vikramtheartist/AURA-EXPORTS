import { Link } from 'react-router-dom';
import { ArrowLeft, Compass, Globe } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function NotFoundPage() {
  return (
    <div className="w-full min-h-[75vh] flex flex-col items-center justify-center text-center px-6 py-32 relative select-none">
      <SEOHead
        title="404 — Route Not Found | Aura Exports"
        description="The requested route does not exist in our global trade directory."
      />

      {/* Decorative subtle glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#dcb782]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center gap-6">
        <div className="h-16 w-16 rounded-2xl bg-white/5 border border-[#dcb782]/20 flex items-center justify-center mb-2 shadow-xl">
          <Compass className="h-8 w-8 text-[#dcb782] animate-spin" style={{ animationDuration: '20s' }} />
        </div>

        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5">
          <Globe className="h-3.5 w-3.5 text-[#ab8558]" />
          <span className="text-xs font-mono text-[#dcb782] tracking-widest uppercase font-semibold">
            ERROR 404 — UNMAPPED CORRIDOR
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white font-bold tracking-tight">
          Route Not Found
        </h1>

        <p className="text-[#D5C8B7] font-body text-base md:text-lg font-light leading-relaxed max-w-md">
          The requested export destination or catalog corridor does not exist in the active directory.
        </p>

        <div className="w-16 h-[1px] bg-[#dcb782]/30 my-2" />

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/"
            className="bg-gradient-to-r from-[#dcb782] to-[#ab8558] hover:from-[#fbf3db] hover:to-[#dcb782] text-black font-body font-bold rounded-xl px-7 py-3.5 text-xs tracking-wider uppercase transition-all shadow-lg hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Return to Aura Exports Home</span>
          </Link>

          <Link
            to="/products"
            className="border border-white/10 hover:border-white text-white font-body font-bold rounded-xl px-7 py-3.5 text-xs tracking-wider uppercase hover:bg-white/5 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Explore Products</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
