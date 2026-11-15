import React from 'react';

/**
 * MountainLandscape: An atmospheric, multi-layered snowy mountain landscape artwork.
 * Creates depth through layered silhouettes, sunlit snow ridges, misty valleys, and soft clouds.
 */
export const MountainLandscape = ({ className = "" }) => {
  return (
    <div className={`relative w-full overflow-hidden pointer-events-none select-none ${className}`}>
      
      {/* Sky Gradient with subtle aurora glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#E0F0FE] via-[#EFF6FF] to-[#F8FAFC] -z-20" />
      
      {/* Soft Alpine Sun / Light Source */}
      <div className="absolute -top-16 right-1/4 w-96 h-96 rounded-full bg-gradient-to-b from-white/90 via-[#BAE6FD]/40 to-transparent blur-2xl -z-15" />
      
      {/* Ambient Frost Mist Blurs */}
      <div className="absolute top-1/4 left-10 w-72 h-36 bg-white/70 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/3 right-12 w-80 h-44 bg-soft-blue/60 rounded-full blur-3xl -z-10" />

      {/* Layered Vector Mountain Landscape SVG */}
      <svg 
        viewBox="0 0 1440 480" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover object-bottom"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Gradients for layered depth */}
          <linearGradient id="skyMist" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#EFF6FF" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="farPeaks" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#BFDBFE" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#DBEAFE" stopOpacity="0.2" />
          </linearGradient>

          <linearGradient id="midPeaksLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#DBEAFE" stopOpacity="0.8" />
          </linearGradient>

          <linearGradient id="midPeaksShadow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.75" />
            <stop offset="60%" stopColor="#60A5FA" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#3882F6" stopOpacity="0.45" />
          </linearGradient>

          <linearGradient id="nearRidge" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.5" />
            <stop offset="40%" stopColor="#93C5FD" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#F8FAFC" stopOpacity="0.95" />
          </linearGradient>

          <linearGradient id="mistValley" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#F8FAFC" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* --- LAYER 1: Distant Misty High Alpine Range --- */}
        <path 
          d="M0 240 L70 195 L150 220 L230 170 L340 230 L430 150 L520 215 L620 180 L720 235 L810 160 L910 225 L1020 145 L1130 210 L1230 175 L1330 220 L1440 185 L1440 480 L0 480 Z" 
          fill="url(#farPeaks)" 
        />

        {/* --- LAYER 2: Sunlit Snow Ridges (Far) --- */}
        <path 
          d="M430 150 L475 185 L520 215 L430 220 Z" 
          fill="#FFFFFF" 
          opacity="0.6" 
        />
        <path 
          d="M810 160 L860 195 L910 225 L810 230 Z" 
          fill="#FFFFFF" 
          opacity="0.55" 
        />
        <path 
          d="M1020 145 L1075 180 L1130 210 L1020 215 Z" 
          fill="#FFFFFF" 
          opacity="0.6" 
        />

        {/* Mid-altitude Mist Band */}
        <rect x="0" y="210" width="1440" height="70" fill="url(#skyMist)" />

        {/* --- LAYER 3: Mid-ground Majestic Snowy Peaks (Shadow side) --- */}
        <path 
          d="M0 320 L120 210 L250 280 L390 190 L510 270 L660 160 L800 280 L940 180 L1090 275 L1240 195 L1360 265 L1440 220 L1440 480 L0 480 Z" 
          fill="url(#midPeaksShadow)" 
        />

        {/* --- LAYER 4: Sunlit Snow Face on Mid-ground Peaks --- */}
        {/* Peak 1 (x: 120) */}
        <path d="M120 210 L170 250 L120 310 L70 260 Z" fill="url(#midPeaksLight)" />
        {/* Peak 2 (x: 390) */}
        <path d="M390 190 L450 235 L390 285 L320 240 Z" fill="url(#midPeaksLight)" />
        {/* Main Central Peak (x: 660) */}
        <path d="M660 160 L730 220 L660 300 L590 225 Z" fill="url(#midPeaksLight)" />
        {/* Peak 4 (x: 940) */}
        <path d="M940 180 L1015 230 L940 290 L870 235 Z" fill="url(#midPeaksLight)" />
        {/* Peak 5 (x: 1240) */}
        <path d="M1240 195 L1300 235 L1240 285 L1180 240 Z" fill="url(#midPeaksLight)" />

        {/* Fine Snow Crevasses & Ridge Highlights */}
        <path d="M660 160 L658 240 M660 160 L685 210 M685 210 L680 270" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />
        <path d="M390 190 L392 250 M390 190 L410 230" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
        <path d="M940 180 L942 240 M940 180 L965 220" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.85" />

        {/* --- LAYER 5: Foreground Alpine Ridge & Valleys --- */}
        <path 
          d="M0 360 C180 330 280 345 420 320 C580 295 720 340 880 310 C1040 280 1200 330 1440 295 L1440 480 L0 480 Z" 
          fill="url(#nearRidge)" 
        />

        {/* Subtle Alpine Tree / Ridge Texture Silhouettes */}
        <path 
          d="M60 350 l3 -8 l3 8 M75 348 l4 -10 l4 10 M90 352 l3 -7 l3 7 M380 325 l4 -9 l4 9 M400 322 l3 -8 l3 8 M420 324 l4 -11 l4 11 M820 320 l4 -10 l4 10 M840 316 l3 -8 l3 8 M1150 310 l4 -10 l4 10 M1170 307 l4 -11 l4 11" 
          stroke="#3882F6" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          opacity="0.35" 
        />

        {/* --- LAYER 6: Bottom Seamless Valley Mist Fade to #F8FAFC --- */}
        <path 
          d="M0 380 C240 350 480 375 720 360 C960 345 1200 365 1440 350 L1440 480 L0 480 Z" 
          fill="url(#mistValley)" 
        />
        
        {/* Soft bottom transition cover */}
        <rect x="0" y="420" width="1440" height="60" fill="#F8FAFC" />
      </svg>
    </div>
  );
};

export default MountainLandscape;
