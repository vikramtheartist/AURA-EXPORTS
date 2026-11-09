import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Download,
  Share2,
  Phone,
  Mail,
  Globe,
  QrCode,
  Check,
  Copy,
  ExternalLink,
  Smartphone,
} from 'lucide-react';
import BusinessCard3D from './BusinessCard3D';
import {
  AURA_CARD_DATA,
  downloadVCard,
  generateQrCode,
  getDigitalCardUrl,
  shareBusinessCard,
} from '../../utils/businessCardUtils';

interface BusinessCardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BusinessCardModal: React.FC<BusinessCardModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>('');
  const [copied, setCopied] = useState<string | null>(null);
  const [showQrExpanded, setShowQrExpanded] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      const url = getDigitalCardUrl();
      generateQrCode(url).then(setQrCodeDataUrl);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleCopy = (text: string, label: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(label);
      setTimeout(() => setCopied(null), 2500);
    }
  };

  if (!isOpen) return null;

  const digitalCardUrl = getDigitalCardUrl();

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
        {/* Backdrop blur overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-gradient-to-b from-[#181613] via-[#0f0e0c] to-[#090807] border border-[#dcb782]/35 rounded-3xl p-5 sm:p-8 md:p-10 shadow-2xl z-10 my-auto overflow-hidden"
          style={{
            boxShadow: '0 30px 100px rgba(0,0,0,0.95), 0 0 0 1px rgba(220,183,130,0.2) inset',
          }}
        >
          {/* Subtle Top-Right Amber Ambient Glow */}
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#dcb782]/15 rounded-full blur-[100px] pointer-events-none" />

          {/* Modal Header */}
          <div className="flex items-start justify-between gap-4 pb-6 border-b border-white/10 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#dcb782] tracking-widest uppercase font-semibold mb-1">
                <QrCode className="h-4 w-4 text-[#dcb782]" />
                <span>OFFICIAL EXECUTIVE PASS & BUSINESS CARD</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-heading text-white font-normal tracking-tight">
                AURA Enterprise Exports
              </h2>
              <p className="text-xs sm:text-sm text-[#dfd1b9]/70 font-light mt-0.5">
                Scan with your smartphone camera or save the official contact pass directly to your device.
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-[#dcb782] text-white/70 hover:text-white transition-colors cursor-pointer shrink-0"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body: 3D Card + Actions & QR Code */}
          <div className="py-6 sm:py-8 flex flex-col lg:grid lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Column: Interactive 3D Card (Cols 1-7) */}
            <div className="w-full lg:col-span-7 flex flex-col items-center">
              <BusinessCard3D allowBothSidesToggle={true} />
            </div>

            {/* Right Column: QR Code + Quick Save Actions (Cols 8-12) */}
            <div className="w-full lg:col-span-5 flex flex-col gap-4">
              {/* QR Code Container */}
              <div className="p-4 sm:p-5 rounded-2xl bg-black/60 border border-white/10 flex flex-col items-center text-center">
                <div className="flex items-center gap-2 mb-2 text-xs font-mono text-[#dcb782] uppercase tracking-wider">
                  <Smartphone className="w-3.5 h-3.5 text-[#dcb782]" />
                  <span>Scan with Phone Camera</span>
                </div>

                {qrCodeDataUrl ? (
                  <div className="p-2.5 rounded-xl bg-white shadow-md mb-2">
                    <img
                      src={qrCodeDataUrl}
                      alt="AURA Exports Digital Business Card QR Code"
                      className="w-32 h-32 sm:w-36 sm:h-36 object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-32 h-32 rounded-xl bg-white/5 flex items-center justify-center animate-pulse mb-2">
                    <QrCode className="w-8 h-8 text-white/30" />
                  </div>
                )}

                <p className="text-[11px] text-[#dfd1b9]/70 font-light max-w-xs leading-relaxed">
                  Opens instant mobile pass with 1-tap <strong className="text-white font-medium">Add to Contacts</strong> for Apple & Google devices.
                </p>
              </div>

              {/* Primary Action Button: Save to Contacts (.vCard) */}
              <button
                type="button"
                onClick={() => downloadVCard()}
                className="w-full bg-gradient-to-r from-[#dcb782] to-[#ab8558] hover:from-[#fbf3db] hover:to-[#dcb782] text-black font-body font-bold text-xs tracking-wider uppercase py-3.5 px-5 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:scale-[1.01] transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>SAVE CONTACT TO PHONE (.VCF)</span>
              </button>

              {/* Secondary Action: Share / Copy Link */}
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => shareBusinessCard()}
                  className="w-full py-2.5 px-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#dcb782]/40 text-xs text-white font-mono flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5 text-[#dcb782]" />
                  <span>Share Pass</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleCopy(digitalCardUrl, 'link')}
                  className="w-full py-2.5 px-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#dcb782]/40 text-xs text-white font-mono flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  {copied === 'link' ? (
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

              {/* One-Tap Contact Communication Channels */}
              <div className="pt-2 border-t border-white/5 flex items-center justify-around text-xs font-mono text-[#dfd1b9]/80">
                <a
                  href={`tel:${AURA_CARD_DATA.phoneClean}`}
                  className="flex items-center gap-1.5 hover:text-[#dcb782] transition-colors p-1"
                >
                  <Phone className="w-3.5 h-3.5 text-[#dcb782]" />
                  <span>Call</span>
                </a>
                <span className="text-white/20">|</span>
                <a
                  href={`mailto:${AURA_CARD_DATA.email}`}
                  className="flex items-center gap-1.5 hover:text-[#dcb782] transition-colors p-1"
                >
                  <Mail className="w-3.5 h-3.5 text-[#dcb782]" />
                  <span>Email</span>
                </a>
                <span className="text-white/20">|</span>
                <a
                  href={`https://wa.me/${AURA_CARD_DATA.phoneClean.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors p-1"
                >
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BusinessCardModal;
