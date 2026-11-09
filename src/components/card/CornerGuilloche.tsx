import React from 'react';

interface CornerGuillocheProps {
  position?: 'top-right' | 'bottom-left';
  className?: string;
  count?: number;
}

/**
 * Concentric precision guilloche lines recreating the luxury gold flowing waves
 * from the official AURA Enterprise Exports business card corners.
 */
export const CornerGuilloche: React.FC<CornerGuillocheProps> = ({
  position = 'top-right',
  className = '',
  count = 24,
}) => {
  // Generate concentric parabolic/bezier curves sweeping across the corner
  const paths: string[] = [];
  const size = 260;

  for (let i = 0; i < count; i++) {
    const t = i / (count - 1); // 0 to 1
    // Spread along the edges:
    // When position === 'top-right':
    // Start at top edge: x goes from 30 to 255
    // End at right edge: y goes from 255 down to 30
    // Control point bends toward top-right corner (size, 0)
    const xStart = 20 + t * (size - 35);
    const yEnd = 20 + (1 - t) * (size - 35);
    const cx = size - 15 - Math.pow(1 - t, 1.4) * 50;
    const cy = 15 + Math.pow(t, 1.4) * 50;

    paths.push(`M ${xStart.toFixed(1)} 0 Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${size} ${yEnd.toFixed(1)}`);
  }

  const isBottomLeft = position === 'bottom-left';

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${
        isBottomLeft ? 'rotate-180 origin-center' : ''
      } ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`guilloche-gold-${position}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f5e6be" stopOpacity="0.85" />
          <stop offset="40%" stopColor="#dcb782" stopOpacity="0.75" />
          <stop offset="70%" stopColor="#b88a44" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#8c6426" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <g stroke={`url(#guilloche-gold-${position})`}>
        {paths.map((d, index) => {
          // Inner curves slightly more prominent, outer curves tapering gracefully
          const opacity = 0.35 + (index / count) * 0.55;
          const strokeWidth = 0.75 + (index % 2 === 0 ? 0.3 : 0);
          return (
            <path
              key={index}
              d={d}
              strokeWidth={strokeWidth}
              strokeOpacity={opacity}
              strokeLinecap="round"
            />
          );
        })}
      </g>
    </svg>
  );
};

export default CornerGuilloche;
