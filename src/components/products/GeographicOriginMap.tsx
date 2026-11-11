import React from 'react';
import { MapPin } from 'lucide-react';

interface GeographicOriginMapProps {
  region: 'tamil-nadu' | 'andhra-pradesh' | 'kerala' | 'gujarat-rajasthan' | 'rajasthan' | 'gujarat' | 'pan-india';
  stateLabel: string;
  hubLabel: string;
}

export default function GeographicOriginMap({
  region,
  stateLabel,
  hubLabel,
}: GeographicOriginMapProps) {
  // Render distinct, stylized SVG silhouettes for each agricultural state cluster
  const renderStateOutline = () => {
    switch (region) {
      case 'tamil-nadu':
        return (
          <g>
            {/* Tamil Nadu State Outline Silhouette */}
            <path
              d="M 68 25 C 78 30, 95 35, 110 32 C 122 30, 138 45, 142 60 C 145 75, 135 90, 138 110 C 140 125, 130 145, 118 160 C 105 175, 88 190, 75 198 C 65 192, 55 178, 52 165 C 48 150, 52 135, 45 120 C 38 105, 32 88, 38 72 C 42 58, 55 45, 68 25 Z"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="1.75"
              strokeDasharray="3 3"
              className="opacity-75"
            />
            {/* Soft inner glow */}
            <path
              d="M 68 25 C 78 30, 95 35, 110 32 C 122 30, 138 45, 142 60 C 145 75, 135 90, 138 110 C 140 125, 130 145, 118 160 C 105 175, 88 190, 75 198 C 65 192, 55 178, 52 165 C 48 150, 52 135, 45 120 C 38 105, 32 88, 38 72 C 42 58, 55 45, 68 25 Z"
              fill="rgba(212, 175, 55, 0.05)"
            />
            {/* Erode & Salem Pin (North-Central Western TN) */}
            <g transform="translate(74, 92)">
              <circle r="7" fill="rgba(212, 175, 55, 0.25)" className="animate-ping" />
              <circle r="3.5" fill="#D4AF37" />
              <circle r="1.5" fill="#0A0A0B" />
            </g>
          </g>
        );

      case 'andhra-pradesh':
        return (
          <g>
            {/* Andhra Pradesh Coastline & Basin Silhouette */}
            <path
              d="M 35 150 C 45 130, 60 115, 75 100 C 90 85, 110 70, 130 50 C 145 35, 160 25, 170 30 C 175 45, 155 68, 140 90 C 125 110, 105 135, 85 160 C 65 175, 45 180, 35 150 Z"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="1.75"
              strokeDasharray="3 3"
              className="opacity-75"
            />
            <path
              d="M 35 150 C 45 130, 60 115, 75 100 C 90 85, 110 70, 130 50 C 145 35, 160 25, 170 30 C 175 45, 155 68, 140 90 C 125 110, 105 135, 85 160 C 65 175, 45 180, 35 150 Z"
              fill="rgba(212, 175, 55, 0.05)"
            />
            {/* Guntur Pin */}
            <g transform="translate(105, 110)">
              <circle r="7" fill="rgba(212, 175, 55, 0.25)" className="animate-ping" />
              <circle r="3.5" fill="#D4AF37" />
              <circle r="1.5" fill="#0A0A0B" />
            </g>
          </g>
        );

      case 'kerala':
        return (
          <g>
            {/* Kerala Slender Strip Silhouette */}
            <path
              d="M 50 25 C 65 40, 80 65, 85 90 C 90 115, 95 140, 100 165 C 95 180, 85 190, 80 195 C 72 180, 68 150, 62 120 C 55 90, 45 60, 42 35 Z"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="1.75"
              strokeDasharray="3 3"
              className="opacity-75"
            />
            <path
              d="M 50 25 C 65 40, 80 65, 85 90 C 90 115, 95 140, 100 165 C 95 180, 85 190, 80 195 C 72 180, 68 150, 62 120 C 55 90, 45 60, 42 35 Z"
              fill="rgba(212, 175, 55, 0.05)"
            />
            {/* Idukki & Alleppey Pin */}
            <g transform="translate(85, 125)">
              <circle r="7" fill="rgba(212, 175, 55, 0.25)" className="animate-ping" />
              <circle r="3.5" fill="#D4AF37" />
              <circle r="1.5" fill="#0A0A0B" />
            </g>
          </g>
        );

      case 'gujarat-rajasthan':
      case 'gujarat':
      case 'rajasthan':
        return (
          <g>
            {/* Western India / Gujarat Peninsular Outline */}
            <path
              d="M 40 100 C 30 110, 45 130, 65 135 C 75 140, 70 160, 95 160 C 115 155, 130 135, 140 115 C 150 95, 160 70, 155 50 C 145 35, 120 40, 100 55 C 80 65, 55 75, 45 88 Z"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="1.75"
              strokeDasharray="3 3"
              className="opacity-75"
            />
            <path
              d="M 40 100 C 30 110, 45 130, 65 135 C 75 140, 70 160, 95 160 C 115 155, 130 135, 140 115 C 150 95, 160 70, 155 50 C 145 35, 120 40, 100 55 C 80 65, 55 75, 45 88 Z"
              fill="rgba(212, 175, 55, 0.05)"
            />
            {/* Agricultural Hub Pin */}
            <g transform="translate(95, 95)">
              <circle r="7" fill="rgba(212, 175, 55, 0.25)" className="animate-ping" />
              <circle r="3.5" fill="#D4AF37" />
              <circle r="1.5" fill="#0A0A0B" />
            </g>
          </g>
        );

      case 'pan-india':
      default:
        return (
          <g>
            {/* Subcontinent Stylized Outline */}
            <path
              d="M 85 25 C 100 35, 110 50, 120 65 C 135 80, 150 95, 140 120 C 130 145, 105 175, 95 195 C 85 175, 60 145, 50 120 C 40 95, 55 80, 70 65 Z"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="1.75"
              strokeDasharray="3 3"
              className="opacity-75"
            />
            <path
              d="M 85 25 C 100 35, 110 50, 120 65 C 135 80, 150 95, 140 120 C 130 145, 105 175, 95 195 C 85 175, 60 145, 50 120 C 40 95, 55 80, 70 65 Z"
              fill="rgba(212, 175, 55, 0.05)"
            />
            {/* Multi-Cluster Pins */}
            <circle cx="85" cy="155" r="3" fill="#D4AF37" />
            <circle cx="75" cy="165" r="3" fill="#D4AF37" />
            <circle cx="105" cy="135" r="3" fill="#D4AF37" />
            <circle cx="68" cy="95" r="3" fill="#D4AF37" />
          </g>
        );
    }
  };

  return (
    <div className="relative w-36 h-36 flex items-center justify-center">
      <svg
        viewBox="0 0 200 210"
        className="w-full h-full drop-shadow-[0_4px_12px_rgba(212,175,55,0.15)]"
        aria-hidden="true"
      >
        {renderStateOutline()}
      </svg>

      {/* Origin Location Text Callout */}
      <div className="absolute -bottom-2 right-0 translate-y-1 text-right select-none">
        <div className="text-[10px] font-mono tracking-[0.18em] uppercase font-bold text-white leading-tight">
          {stateLabel}
        </div>
        <div className="text-[9px] font-mono text-[#D4AF37] font-medium mt-0.5 flex items-center justify-end gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] inline-block" />
          <span>{hubLabel}</span>
        </div>
      </div>
    </div>
  );
}
