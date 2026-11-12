import React from 'react';
import { 
  Sprout, 
  MapPin, 
  FlaskConical, 
  ShieldCheck, 
  PackageCheck 
} from 'lucide-react';

export default function TrustQualityStrip() {
  const trustItems = [
    {
      icon: <Sprout className="w-4 h-4 text-[#D4AF37]" />,
      title: 'Carefully Sourced',
      subtitle: 'Single-origin estates',
    },
    {
      icon: <MapPin className="w-4 h-4 text-[#D4AF37]" />,
      title: 'Traceable Origins',
      subtitle: 'Geo-tagged harvest belts',
    },
    {
      icon: <FlaskConical className="w-4 h-4 text-[#D4AF37]" />,
      title: 'Quality Tested',
      subtitle: 'HPLC purity verified',
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />,
      title: 'Export-Ready Standards',
      subtitle: 'FSSAI & APEDA compliant',
    },
    {
      icon: <PackageCheck className="w-4 h-4 text-[#D4AF37]" />,
      title: 'Responsible Packaging',
      subtitle: 'Multi-barrier aroma lock',
    },
  ];

  return (
    <div className="w-full my-12 bg-[#121214] border border-white/[0.06] rounded-2xl px-6 py-5 shadow-lg">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 divide-y sm:divide-y-0 divide-white/5">
        {trustItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 pt-3 sm:pt-0 justify-start sm:justify-center first:pt-0"
          >
            <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center shrink-0">
              {item.icon}
            </div>
            <div>
              <div className="text-xs font-mono font-semibold text-[#F5F1E8] tracking-tight whitespace-nowrap">
                {item.title}
              </div>
              <div className="text-[10px] font-sans text-[#A6A19A] font-light">
                {item.subtitle}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
