import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight, HelpCircle } from 'lucide-react';
import Pricing from '../components/Pricing';
import SEOHead from '../components/SEOHead';

export default function FaqsPage() {
  const navigate = useNavigate();

  const handleNavigate = (target: string) => {
    if (target === 'contact') navigate('/contact');
    else if (target === 'home') navigate('/');
    else navigate(`/${target}`);
  };

  return (
    <div className="w-full pt-28 pb-12">
      <SEOHead pageKey="faqs" />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-8 flex items-center justify-between text-xs font-mono tracking-wider text-[#ab8558]/80 font-bold">
        <Link to="/" className="flex items-center gap-1.5 hover:text-white transition-colors">
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>AURA EXPORTS HOME</span>
        </Link>
        <div className="flex items-center gap-2">
          <span>INTELLIGENCE</span>
          <ChevronRight className="h-3 w-3" />
          <span className="text-white">FAQS & TRADE DESK</span>
        </div>
      </nav>

      {/* Semantic Header */}
      <header className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-6">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-[#dcb782]/20 rounded-full px-4 py-1.5 mb-4">
          <HelpCircle className="h-3.5 w-3.5 text-[#dcb782]" />
          <span className="text-xs font-mono text-[#dcb782] tracking-wider uppercase font-semibold">
            BUYER INTELLIGENCE & TRADE PROTOCOLS
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white tracking-tight leading-[1.05] font-normal">
          Frequently Asked Questions <span className="text-[#dcb782] italic font-normal">& Trade Desk</span>
        </h1>
      </header>

      <main>
        <Pricing onNavigate={handleNavigate} />
      </main>
    </div>
  );
}
