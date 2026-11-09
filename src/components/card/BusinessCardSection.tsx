import React, { useState, useEffect } from 'react';
import {
  QrCode,
  Download,
  Share2,
  Phone,
  Mail,
  Globe,
  Check,
  Copy,
  Smartphone,
  Sparkles,
  Maximize2,
} from 'lucide-react';
import BusinessCard3D from './BusinessCard3D';
import BusinessCardModal from './BusinessCardModal';
import {
  AURA_CARD_DATA,
  downloadVCard,
  generateQrCode,
  getDigitalCardUrl,
  shareBusinessCard,
} from '../../utils/businessCardUtils';

export const BusinessCardSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>('');
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    const url = getDigitalCardUrl();
    generateQrCode(url).then(setQrCodeDataUrl);
  }, []);

  const handleCopy = (text: string, label: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(label);
      setTimeout(() => setCopied(null), 2500);
    }
  };

  return (
    <>
      <section
        id="digital-business-card-section"
        aria-labelledby="business-card-heading"
        className="w-full rounded-[2rem] bg-gradient-to-br from-[#1c1710] via-[#12100d] to-[#090908] border border-[#dcb782]/30 p-6 sm:p-10 md:p-12 relative overflow-hidden shadow-2xl"
      >
        {/* Subtle Ambient Gold Background Glow */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#dcb782]/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#dcb782]/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-8 border-b border-white/10 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#dcb782] tracking-widest uppercase font-semibold mb-3">
              <QrCode className="h-4 w-4 text-[#dcb782]" />
              <span>DIGITAL BUSINESS CARD & EXECUTIVE CONTACT PASS</span>
            </div>
            <h2
              id="business-card-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-heading text-white font-normal tracking-tight leading-tight"
            >
              Download Official <br className="hidden sm:inline" />
              <span className="text-[#dfd1b9]">AURA Business Card</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#dfd1b9]/75 font-light leading-relaxed mt-2.5">
              Scan with your smartphone camera to instantly preview and save Vikram's executive credentials directly into your mobile contact book.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto border border-[#dcb782]/40 hover:border-[#dcb782] text-white hover:text-[#dcb782] text-xs font-mono px-5 py-3 rounded-xl flex items-center justify-center gap-2 transition-all bg-white/[0.02] cursor-pointer"
            >
              <Maximize2 className="w-3.5 h-3.5 text-[#dcb782]" />
              <span>Open Fullscreen Pass</span>
            </button>
          </div>
        </div>

        {/* Section Body: 3D Interactive Card + QR Scanning Module */}
        <div className="pt-8 sm:pt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          {/* Column 1: The Interactive 3D Business Card (Cols 1-7) */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <BusinessCard3D allowBothSidesToggle={true} />
          </div>

          {/* Column 2: QR Scanner Card & 1-Tap Save Actions (Cols 8-12) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Scannable Pass Box */}
            <div className="p-6 rounded-2xl bg-black/60 border border-white/10 flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3 opacity-20">
                <Sparkles className="w-12 h-12 text-[#dcb782]" />
              </div>

              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#dcb782] uppercase tracking-wider mb-3">
                <Smartphone className="w-4 h-4 text-[#dcb782]" />
                <span>Instant Mobile Contact Sync</span>
              </div>

              {/* Scannable QR Code */}
              {qrCodeDataUrl ? (
                <div className="p-3 rounded-2xl bg-white shadow-2xl mb-3 relative group">
                  <img
                    src={qrCodeDataUrl}
                    alt="AURA Exports Digital Business Card QR Code"
                    className="w-36 h-36 sm:w-40 sm:h-40 object-contain"
                  />
                  <div className="absolute inset-0 bg-black/75 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-3 text-center">
                    <span className="text-[11px] text-white font-mono">
                      Point phone camera to scan
                    </span>
                  </div>
                </div>
              ) : (
                <div className="w-36 h-36 rounded-2xl bg-white/5 flex items-center justify-center animate-pulse mb-3">
                  <QrCode className="w-10 h-10 text-white/30" />
                </div>
              )}

              <p className="text-xs text-[#dfd1b9]/80 font-light leading-relaxed max-w-xs">
                Scanning this code instantly opens the card on mobile with one-tap{' '}
                <strong className="text-white font-medium">Add to Contacts</strong> for Apple iPhone and Android.
              </p>
            </div>

            {/* Primary Action Button: Save Contact (.vCard) */}
            <button
              type="button"
              onClick={() => downloadVCard()}
              className="w-full bg-gradient-to-r from-[#dcb782] to-[#ab8558] hover:from-[#fbf3db] hover:to-[#dcb782] text-black font-body font-bold text-xs tracking-wider uppercase py-4 px-6 rounded-xl flex items-center justify-center gap-2.5 shadow-xl hover:scale-[1.01] transition-all cursor-pointer"
            >
              <Download className="w-4.5 h-4.5" />
              <span>DOWNLOAD BUSINESS CARD (.VCF)</span>
            </button>

            {/* Quick Share / Copy Grid */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => shareBusinessCard()}
                className="w-full py-3 px-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#dcb782]/40 text-xs text-white font-mono flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5 text-[#dcb782]" />
                <span>Share Contact</span>
              </button>

              <button
                type="button"
                onClick={() => handleCopy(getDigitalCardUrl(), 'card-url')}
                className="w-full py-3 px-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#dcb782]/40 text-xs text-white font-mono flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                {copied === 'card-url' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#dcb782]" />
                    <span>Copy Card Link</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Contact Badges */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs font-mono text-[#dfd1b9]/80">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px]">Trade Desk Line:</span>
              </div>
              <a
                href={`tel:${AURA_CARD_DATA.phoneClean}`}
                className="text-white hover:text-[#dcb782] font-semibold transition-colors"
              >
                {AURA_CARD_DATA.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Interactive Modal */}
      <BusinessCardModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default BusinessCardSection;
