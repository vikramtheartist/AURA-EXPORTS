import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StartSection from './components/StartSection';
import FeaturesChess from './components/FeaturesChess';
import FeaturesGrid from './components/FeaturesGrid';
import Philosophy from './components/Philosophy';
import Stats from './components/Stats';
import QualityCommitment from './components/QualityCommitment';
import Pillars from './components/Pillars';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import CtaFooter from './components/CtaFooter';
import TurmericDetail from './components/TurmericDetail';
import { ArrowLeft, Sparkles, Shirt, Award } from 'lucide-react';

export default function App() {
  const [activeView, setActiveView] = useState<'home' | 'turmeric' | 'jewelry' | 'textiles'>('home');

  const handleNavigate = (sectionId: string) => {
    if (sectionId === 'turmeric') {
      setActiveView('turmeric');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'jewelry') {
      setActiveView('jewelry');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'textiles') {
      setActiveView('textiles');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'home') {
      setActiveView('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Switch view back to home first if we was inside a subpage
    setActiveView('home');

    // Slight delay to allow DOM to render home container if needed
    setTimeout(() => {
      let targetId = sectionId;
      if (sectionId === 'about') {
        targetId = 'about';
      } else if (sectionId === 'quality') {
        targetId = 'quality';
      } else if (sectionId === 'products') {
        targetId = 'products';
      } else if (sectionId === 'faqs') {
        targetId = 'faqs';
      } else if (sectionId === 'contact') {
        targetId = 'contact';
      }

      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }, 50);
  };

  return (
    <div className="relative w-full min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-x-hidden" id="app-root-container">
      {/* Absolute top grid mask layout to give background spatial vibe */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-30" />
      
      {/* 50vw wide blurred glowing backdrops in the background corners */}
      <div className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] bg-neutral-900/40 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-[60%] right-[-10%] w-[50vw] h-[50vw] bg-neutral-900/30 rounded-full blur-[160px] pointer-events-none" />

      {/* Primary core layout */}
      <div className="relative z-10 flex flex-col w-full">
        <Navbar onNavigate={handleNavigate} activeView={activeView} />
        
        {activeView === 'home' && (
          <div className="flex flex-col w-full" id="home-view-group">
            <Hero onNavigate={handleNavigate} />
            
            <FeaturesChess onNavigate={handleNavigate} />
            
            <StartSection onNavigate={handleNavigate} />
            
            <FeaturesGrid />
            
            <Philosophy />
            
            <Stats />
            
            <QualityCommitment onNavigate={handleNavigate} />
            
            <Pillars />
            
            <Testimonials />
            
            <Pricing onNavigate={handleNavigate} />
          </div>
        )}

        {activeView === 'turmeric' && (
          <TurmericDetail onNavigate={handleNavigate} />
        )}

        {activeView === 'jewelry' && (
          <div className="w-full bg-[#0d0d0c] text-[#fbfbeb] py-32 px-6 flex flex-col items-center justify-center min-h-[80vh] text-center" id="jewelry-view-group">
            <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
              <div className="h-16 w-16 rounded-2xl bg-[#dcb782]/10 border border-[#dcb782]/20 flex items-center justify-center mb-4">
                <Sparkles className="h-8 w-8 text-[#dcb782]" />
              </div>
              <span className="text-xs font-mono tracking-[0.3em] text-[#dcb782] uppercase font-bold">
                AURA COUTURE COLLECTION
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium tracking-tight text-white leading-none">
                Fashion Jewelry
              </h1>
              <p className="text-[#D5C8B7] font-body text-base md:text-lg leading-relaxed font-light max-w-2xl">
                Couture Artisanal Assemblies showcasing hand-refined finishes, delicate geometric settings, and premium gold-toned highlights tailored for international haute couture markets.
              </p>
              <div className="w-16 h-[1px] bg-[#dcb782]/40 my-4" />
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => handleNavigate('contact')}
                  className="bg-gradient-to-r from-[#dcb782] to-[#ab8558] text-black font-body font-bold rounded-xl px-8 py-4 text-xs tracking-wider uppercase hover:opacity-90 transition-all cursor-pointer"
                >
                  Request Catalog
                </button>
                <button
                  onClick={() => handleNavigate('home')}
                  className="border border-white/10 hover:border-white text-white font-body font-bold rounded-xl px-8 py-4 text-xs tracking-wider uppercase hover:bg-white/5 transition-all cursor-pointer flex items-center gap-2"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  Back Home
                </button>
              </div>
            </div>
          </div>
        )}

        {activeView === 'textiles' && (
          <div className="w-full bg-[#0d0d0c] text-[#fbfbeb] py-32 px-6 flex flex-col items-center justify-center min-h-[80vh] text-center" id="textiles-view-group">
            <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
              <div className="h-16 w-16 rounded-2xl bg-[#dcb782]/10 border border-[#dcb782]/20 flex items-center justify-center mb-4">
                <Shirt className="h-8 w-8 text-[#dcb782]" />
              </div>
              <span className="text-xs font-mono tracking-[0.3em] text-[#dcb782] uppercase font-bold">
                NATURAL ECO-WEAVES
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium tracking-tight text-white leading-none">
                Sustainable Textiles
              </h1>
              <p className="text-[#D5C8B7] font-body text-base md:text-lg leading-relaxed font-light max-w-2xl">
                Pristine, eco-friendly organic cotton yarns, luxury hemp linen blends, and regenerative flax assemblies engineered to meet global organic standards and circular economy initiatives.
              </p>
              <div className="w-16 h-[1px] bg-[#dcb782]/40 my-4" />
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => handleNavigate('contact')}
                  className="bg-gradient-to-r from-[#dcb782] to-[#ab8558] text-black font-body font-bold rounded-xl px-8 py-4 text-xs tracking-wider uppercase hover:opacity-90 transition-all cursor-pointer"
                >
                  Order Fabric Swatches
                </button>
                <button
                  onClick={() => handleNavigate('home')}
                  className="border border-white/10 hover:border-white text-white font-body font-bold rounded-xl px-8 py-4 text-xs tracking-wider uppercase hover:bg-white/5 transition-all cursor-pointer flex items-center gap-2"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  Back Home
                </button>
              </div>
            </div>
          </div>
        )}

        <CtaFooter />
      </div>
    </div>
  );
}
