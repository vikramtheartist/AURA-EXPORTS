import React, { useState } from 'react';
import { 
  MessageSquare, 
  Phone, 
  Mail, 
  FileText, 
  X, 
  Headphones, 
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';
import { COMPANY_CONTACT } from '../../config/companyContact';
import { trackContactEvent } from '../../utils/analytics';

interface FloatingQuickContactProps {
  onOpenRFQ: () => void;
  productContext?: {
    name?: string;
    origin?: string;
    quantity?: string;
  };
  isModalOpen?: boolean;
}

export default function FloatingQuickContact({
  onOpenRFQ,
  productContext,
  isModalOpen = false,
}: FloatingQuickContactProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // If modal is active, hide sticky/floating controls so they never obstruct form fields
  if (isModalOpen) return null;

  const productName = productContext?.name || 'Indian Agro Commodities';
  const productOrigin = productContext?.origin || 'India';
  const productQuantity = productContext?.quantity || '';

  const whatsappUrl = COMPANY_CONTACT.getWhatsAppUrl(productName, productOrigin, productQuantity);
  const mailtoUrl = COMPANY_CONTACT.getMailtoUrl(productName, productOrigin, productQuantity);

  return (
    <>
      {/* =========================================================================
          DESKTOP: Discreet Floating Contact Button & Popover (md and above)
          ========================================================================= */}
      <div className="hidden md:block fixed bottom-6 right-6 z-40">
        {/* Expanded Popover Menu */}
        {isMenuOpen && (
          <div 
            className="mb-3 w-80 rounded-3xl bg-[#121214] border border-[#1E1E22] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.85)] animate-fadeIn text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#1E1E22]">
              <div className="flex items-center gap-2.5">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </div>
                <div>
                  <h4 className="text-xs font-heading font-medium text-[#F5F2EC]">
                    AURA Trade Desk
                  </h4>
                  <span className="text-[10px] font-mono text-[#A5A19A] block">
                    Chennai Gateway Desk · Online
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="p-1 rounded-full text-[#A5A19A] hover:text-white transition-colors"
                aria-label="Close contact menu"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* Product Context Note */}
            {productContext?.name && (
              <div className="mb-3 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/5 text-[10px] font-mono text-[#D4AF37] flex items-center justify-between">
                <span className="truncate">Active: {productContext.name}</span>
                <span className="text-[9px] text-[#A5A19A]">Auto-Attached</span>
              </div>
            )}

            {/* 4 Direct Options */}
            <div className="space-y-2">
              {/* Option 1: WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackContactEvent('whatsapp_clicked', { productName });
                  setIsMenuOpen(false);
                }}
                className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 text-emerald-400 text-xs font-mono transition-all group"
              >
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  <span className="font-semibold">WhatsApp Desk</span>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* Option 2: Direct Call */}
              <a
                href={`tel:${COMPANY_CONTACT.phoneTel}`}
                onClick={() => {
                  trackContactEvent('phone_call_clicked', { productName });
                  setIsMenuOpen(false);
                }}
                className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-[#F5F2EC] text-xs font-mono transition-all group"
              >
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#D4AF37]" />
                  <span>Call {COMPANY_CONTACT.phoneDisplay}</span>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* Option 3: Send Business Email */}
              <a
                href={mailtoUrl}
                onClick={() => {
                  trackContactEvent('email_clicked', { productName });
                  setIsMenuOpen(false);
                }}
                className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-[#F5F2EC] text-xs font-mono transition-all group"
              >
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#D4AF37]" />
                  <span>Send Business Email</span>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* Option 4: Request Quotation Modal */}
              <button
                type="button"
                onClick={() => {
                  setIsMenuOpen(false);
                  onOpenRFQ();
                }}
                className="w-full flex items-center justify-between p-2.5 rounded-xl bg-[#E2BC86] hover:bg-[#d4a86a] text-[#0A0A0B] text-xs font-mono font-bold transition-all shadow-sm cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span>Request a Quotation</span>
                </div>
                <span className="text-xs">→</span>
              </button>
            </div>

            {/* Footer Assurance */}
            <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-[10px] text-[#A5A19A]">
              <span>Direct Export Desk Intake</span>
              <ShieldCheck className="h-3.5 w-3.5 text-[#E2BC86]" />
            </div>
          </div>
        )}

        {/* Trigger Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle quick trade desk contact menu"
          className="h-13 px-4 rounded-full bg-[#141416] hover:bg-[#1A1A1E] border border-[#E2BC86]/40 hover:border-[#E2BC86] text-white shadow-[0_10px_30px_rgba(226,188,134,0.15)] flex items-center gap-2.5 transition-all duration-300 cursor-pointer group"
        >
          <div className="relative">
            <Headphones className="h-4 w-4 text-[#E2BC86] group-hover:scale-110 transition-transform" />
            <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-emerald-400" />
          </div>
          <span className="text-xs font-mono uppercase tracking-wider font-semibold text-[#F5F2EC]">
            {isMenuOpen ? 'Close Menu' : 'Quick Contact'}
          </span>
        </button>
      </div>

      {/* =========================================================================
          MOBILE: Compact Sticky Bottom Contact Bar (below md)
          ========================================================================= */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0A0A0B]/95 backdrop-blur-md border-t border-[#252527] px-3 py-2 flex items-center justify-between gap-2 shadow-[0_-5px_20px_rgba(0,0,0,0.8)]">
        {/* Action 1: WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackContactEvent('whatsapp_clicked', { productName })}
          className="flex-1 py-2.5 rounded-xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all"
        >
          <MessageSquare className="h-3.5 w-3.5" />
          <span>WhatsApp</span>
        </a>

        {/* Action 2: Direct Phone Call */}
        <a
          href={`tel:${COMPANY_CONTACT.phoneTel}`}
          onClick={() => trackContactEvent('phone_call_clicked', { productName })}
          className="flex-1 py-2.5 rounded-xl bg-white/5 border border-white/10 text-[#F5F2EC] text-[11px] font-mono font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all"
        >
          <Phone className="h-3.5 w-3.5 text-[#E2BC86]" />
          <span>Call Desk</span>
        </a>

        {/* Action 3: Enquire Now (Opens Modal) */}
        <button
          type="button"
          onClick={onOpenRFQ}
          className="flex-1 py-2.5 rounded-xl bg-[#E2BC86] text-[#0A0A0B] text-[11px] font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer"
        >
          <FileText className="h-3.5 w-3.5" />
          <span>Enquire</span>
        </button>
      </div>
    </>
  );
}
