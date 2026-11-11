import React from 'react';
import { 
  Sprout, 
  FlaskRound, 
  ShieldAlert, 
  Leaf, 
  Award, 
  FileCheck2 
} from 'lucide-react';

export default function TrustQualityStrip() {
  const trustItems = [
    {
      icon: <Leaf className="w-4 h-4 text-[#D4AF37]" />,
      title: '100% Natural',
      subtitle: 'Pure harvest',
    },
    {
      icon: <FlaskRound className="w-4 h-4 text-[#D4AF37]" />,
      title: 'No Additives',
      subtitle: 'Zero fillers',
    },
    {
      icon: <Sprout className="w-4 h-4 text-[#D4AF37]" />,
      title: 'Non-GMO',
      subtitle: 'Heritage seeds',
    },
    {
      icon: <Award className="w-4 h-4 text-[#D4AF37]" />,
      title: 'Sustainably Sourced',
      subtitle: 'Direct from estates',
    },
    {
      icon: <ShieldAlert className="w-4 h-4 text-[#D4AF37]" />,
      title: 'FSSAI Compliant',
      subtitle: 'Certified standards',
    },
    {
      icon: <FileCheck2 className="w-4 h-4 text-[#D4AF37]" />,
      title: 'Export Documentation',
      subtitle: 'Phyto & Batch COA',
    },
  ];

  return (
    <div className="w-full my-12 bg-[#111113] border border-[#29292D] rounded-2xl px-6 py-4 shadow-xl">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 divide-y sm:divide-y-0 divide-white/5">
        {trustItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 pt-3 sm:pt-0 justify-start sm:justify-center first:pt-0"
          >
            <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center shrink-0">
              {item.icon}
            </div>
            <div>
              <div className="text-xs font-mono font-semibold text-[#F5F1E8] tracking-tight whitespace-nowrap">
                {item.title}
              </div>
              <div className="text-[10px] font-mono text-[#A5A19A] font-light">
                {item.subtitle}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
