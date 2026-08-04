import React from 'react';

const BackgroundGrid = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#0B0B0B]">
      {/* SVG Film Grain & Noise Overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.06] mix-blend-overlay pointer-events-none">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      {/* Subtle Dust & Paper Scratches Layer */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Vintage Photographic Vignette */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#0B0B0B]/40 to-[#0B0B0B] pointer-events-none z-0" />
    </div>
  );
};

export default BackgroundGrid;
