import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Download,
  Share2,
  Phone,
  Mail,
  Globe,
  MapPin,
  Check,
  Copy,
  ExternalLink,
  ShieldCheck,
  RotateCw,
  Building2,
  Sparkles,
} from 'lucide-react';
import BusinessCard3D from '../components/card/BusinessCard3D';
import SEOHead from '../components/SEOHead';
import {
  AURA_CARD_DATA,
  downloadVCard,
  shareBusinessCard,
} from '../utils/businessCardUtils';

export default function DigitalBusinessCardPage() {
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCopy = (text: string, label: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(label);
      setTimeout(() => setCopied(null), 2500);
    }
  };

  return (
    <div className="w-full min-h-screen bg-black text-white pt-24 pb-20 px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center relative overflow-hidden">
      <SEOHead
        title="Vikram — Managing Director | AURA Enterprise Exports Digital Business Card"
        description="Official executive digital business card for Vikram, Managing Director at AURA Enterprise Exports. Save contact details directly to your mobile phone or call our trade desk."
        canonical="https://auraexport.co/card"
      />

      {/* Atmospheric Ambient Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#dcb782]/12 rounded-full blur-[140px] pointer-events-none" />

      {/* Header Eyebrow */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-xl mb-6 sm:mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#dcb782]/30 text-xs font-mono text-[#dcb782] tracking-widest uppercase mb-3 shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-[#dcb782]" />
          <span>OFFICIAL DIGITAL BUSINESS CARD</span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading text-white font-normal tracking-tight">
          AURA Enterprise Exports
        </h1>
        <p className="text-xs sm:text-sm text-[#dfd1b9]/75 font-light mt-1">
          Export &nbsp;|&nbsp; Import &nbsp;|&nbsp; Global Sourcing &nbsp;·&nbsp; Chennai, India
        </p>
      </div>

      {/* Interactive 3D Business Card */}
      <div className="relative z-10 w-full max-w-lg mb-8">
        <BusinessCard3D initialSide="front" allowBothSidesToggle={true} />
      </div>

      {/* Direct Contact Actions Box */}
      <div className="relative z-10 w-full max-w-md flex flex-col gap-3.5">
        {/* Primary Download / Save Contact to Phone Button */}
        <button
          type="button"
          onClick={() => downloadVCard()}
          className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#dcb782] via-[#e8cb9b] to-[#ab8558] hover:from-[#fbf3db] hover:to-[#dcb782] text-black font-body font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2.5 shadow-[0_15px_35px_rgba(220,183,130,0.25)] hover:scale-[1.01] transition-all cursor-pointer"
        >
          <Download className="w-4.5 h-4.5" />
          <span>SAVE CONTACT TO PHONE (.VCF)</span>
        </button>

        {/* 3 Quick Communication Grid Buttons */}
        <div className="grid grid-cols-3 gap-2.5">
          {/* Call */}
          <a
            href={`tel:${AURA_CARD_DATA.phoneClean}`}
            className="py-3 px-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#dcb782] text-white hover:text-[#dcb782] text-xs font-mono flex flex-col items-center justify-center gap-1.5 transition-colors"
          >
            <Phone className="w-4 h-4 text-[#dcb782]" />
            <span>Call</span>
          </a>

          {/* Email */}
          <a
            href={`mailto:${AURA_CARD_DATA.email}`}
            className="py-3 px-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#dcb782] text-white hover:text-[#dcb782] text-xs font-mono flex flex-col items-center justify-center gap-1.5 transition-colors"
          >
            <Mail className="w-4 h-4 text-[#dcb782]" />
            <span>Email</span>
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${AURA_CARD_DATA.phoneClean.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-emerald-400 text-white hover:text-emerald-300 text-xs font-mono flex flex-col items-center justify-center gap-1.5 transition-colors"
          >
            <span className="text-emerald-400 font-bold text-sm">WA</span>
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Share & Copy Link Buttons */}
        <div className="grid grid-cols-2 gap-2.5">
          <button
            type="button"
            onClick={() => shareBusinessCard()}
            className="py-2.5 px-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#dcb782]/40 text-xs text-white font-mono flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5 text-[#dcb782]" />
            <span>Share Card</span>
          </button>

          <button
            type="button"
            onClick={() => handleCopy(window.location.href, 'page-url')}
            className="py-2.5 px-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#dcb782]/40 text-xs text-white font-mono flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            {copied === 'page-url' ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#dcb782]" />
                <span>Copy Link</span>
              </>
            )}
          </button>
        </div>

        {/* Company Overview Card */}
        <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col gap-2.5 mt-2 text-xs">
          <div className="flex items-start gap-3">
            <Building2 className="w-4 h-4 text-[#dcb782] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-white">Aura Global Trade (OPC) Private Limited</p>
              <p className="text-[11px] text-[#dfd1b9]/70 font-mono mt-0.5">
                CIN: U46909TN2025OPC181977 &nbsp;·&nbsp; IEC: BZEPO5124M
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 pt-2 border-t border-white/5">
            <MapPin className="w-4 h-4 text-[#dcb782] shrink-0 mt-0.5" />
            <p className="text-[11px] text-[#dfd1b9]/80 font-light">
              Chennai, Tamil Nadu, India · Chennai & Ennore Maritime Gateway
            </p>
          </div>
        </div>

        {/* Back to Website Button */}
        <div className="flex items-center justify-center pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#dcb782] hover:text-white transition-colors"
          >
            <span>Explore AURA Exports Website</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
