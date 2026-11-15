import React from 'react';
import { 
  Scissors, 
  Mic, 
  Smartphone, 
  Sprout, 
  Scan, 
  Sparkles, 
  Waves, 
  ShieldCheck, 
  Network, 
  FileCheck2,
  TrendingUp,
  Activity
} from 'lucide-react';

/**
 * Project-specific architectural visual banners.
 * Authentic vector illustrations representing the domain and core concepts of each system
 * without inventing fake application screenshots.
 */

export const StitchlyBanner = () => (
  <div className="relative w-full h-48 sm:h-56 rounded-2xl bg-gradient-to-br from-[#1E3A8A] via-[#1D4ED8] to-[#0284C7] p-5 overflow-hidden text-white flex flex-col justify-between group">
    
    {/* Background Decorative Stitch Lines */}
    <div className="absolute inset-0 opacity-20 pointer-events-none">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="stitchPattern" width="30" height="30" patternUnits="userSpaceOnUse">
            <line x1="0" y1="15" x2="15" y2="15" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="4,4" />
            <line x1="15" y1="0" x2="15" y2="30" stroke="#FFFFFF" strokeWidth="0.5" strokeOpacity="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#stitchPattern)" />
      </svg>
    </div>

    {/* Top Bar: Badges & Motif */}
    <div className="relative z-10 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="p-2 rounded-xl bg-white/20 backdrop-blur-md text-white border border-white/30">
          <Scissors className="w-4 h-4" />
        </span>
        <span className="text-xs font-mono font-bold tracking-wider uppercase bg-emerald-500/90 text-white px-2.5 py-0.5 rounded-full shadow-sm">
          Kannada Voice UI
        </span>
      </div>

      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/25 backdrop-blur-md text-[11px] font-mono border border-white/10">
        <Smartphone className="w-3.5 h-3.5 text-sky-300" />
        <span>Mobile-First PWA</span>
      </div>
    </div>

    {/* Centerpiece: Interactive Visual Representation */}
    <div className="relative z-10 my-auto py-2 grid grid-cols-12 gap-4 items-center">
      
      {/* Soundwave / Kannada Voice interaction visual */}
      <div className="col-span-7 space-y-1.5">
        <div className="flex items-center gap-2">
          <Mic className="w-4 h-4 text-emerald-300 animate-pulse" />
          <span className="text-xs font-semibold text-sky-100">ನೈಸರ್ಗಿಕ ಧ್ವನಿ ಸಂವಾದ (Voice Queries)</span>
        </div>
        {/* Animated Soundwave bars */}
        <div className="flex items-center gap-1 h-7">
          {[40, 75, 55, 95, 65, 80, 45, 90, 70, 50, 85, 60, 40, 75].map((val, i) => (
            <div 
              key={i} 
              className="w-1 bg-white/80 rounded-full transition-all group-hover:bg-sky-200"
              style={{ height: `${val}%` }} 
            />
          ))}
        </div>
        <p className="text-[11px] text-blue-100/80 font-mono">
          Customer ledger &bull; Partial payments &bull; Delivery logs
        </p>
      </div>

      {/* Mini Tailoring Metric Chip */}
      <div className="col-span-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-2.5 text-right space-y-1">
        <div className="text-[10px] text-blue-200 font-mono">Workflow Status</div>
        <div className="text-xs font-bold text-white flex items-center justify-end gap-1">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>Shop Ledger Active</span>
        </div>
        <div className="text-[10px] text-sky-200/90">Audit trail enabled</div>
      </div>

    </div>

    {/* Bottom Bar: System Architecture tags */}
    <div className="relative z-10 pt-2 border-t border-white/15 flex items-center justify-between text-[11px] font-mono text-blue-100">
      <span>React &bull; PWA &bull; Web Speech API</span>
      <span className="text-emerald-300 font-semibold">Problem-Solving Architecture</span>
    </div>

  </div>
);

export const FarmFlowBanner = () => (
  <div className="relative w-full h-48 sm:h-56 rounded-2xl bg-gradient-to-br from-[#064E3B] via-[#047857] to-[#0284C7] p-5 overflow-hidden text-white flex flex-col justify-between group">
    
    {/* Topographic Contour Wave Overlay */}
    <div className="absolute inset-0 opacity-15 pointer-events-none">
      <svg width="100%" height="100%" viewBox="0 0 400 200" preserveAspectRatio="none">
        <path d="M0 50 Q100 20 200 60 T400 40 L400 200 L0 200 Z" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />
        <path d="M0 90 Q120 70 220 110 T400 80 L400 200 L0 200 Z" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />
        <path d="M0 130 Q140 120 240 150 T400 130 L400 200 L0 200 Z" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />
      </svg>
    </div>

    {/* Top Bar: SIH Badge & Tag */}
    <div className="relative z-10 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="p-2 rounded-xl bg-white/20 backdrop-blur-md text-white border border-white/30">
          <Sprout className="w-4 h-4 text-emerald-200" />
        </span>
        <span className="text-xs font-mono font-bold tracking-wider uppercase bg-amber-500/95 text-white px-2.5 py-0.5 rounded-full shadow-sm">
          SIH 2026 Internal Selected
        </span>
      </div>

      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/25 backdrop-blur-md text-[11px] font-mono border border-white/10">
        <span>Problem SIH26132</span>
      </div>
    </div>

    {/* Centerpiece: FPO Connection & Gemini Vision Motifs */}
    <div className="relative z-10 my-auto py-2 grid grid-cols-12 gap-3 items-center">
      
      {/* Gemini Vision Crop Assessment UI concept */}
      <div className="col-span-7 space-y-1">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-100">
          <Scan className="w-3.5 h-3.5 text-amber-300" />
          <span>Gemini Vision Crop Health Reticle</span>
        </div>
        <div className="flex items-center gap-2 p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
          <div className="w-8 h-8 rounded-lg bg-emerald-900/60 flex items-center justify-center border border-emerald-400/40 shrink-0">
            <Sparkles className="w-4 h-4 text-amber-300" />
          </div>
          <div className="text-[11px] leading-tight">
            <div className="font-bold text-white">Visual Health Assessment</div>
            <div className="text-emerald-200 text-[10px]">Exploratory image indicators</div>
          </div>
        </div>
      </div>

      {/* Market Net Realisation Card */}
      <div className="col-span-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-2.5 text-right space-y-1">
        <div className="text-[10px] text-emerald-200 font-mono">Marketplace Node</div>
        <div className="text-xs font-bold text-white flex items-center justify-end gap-1">
          <TrendingUp className="w-3.5 h-3.5 text-emerald-300" />
          <span>Farmer &harr; Buyer &harr; FPO</span>
        </div>
        <div className="text-[10px] text-emerald-100/90">Transparent Lot Pricing</div>
      </div>

    </div>

    {/* Bottom Bar: Architecture tags */}
    <div className="relative z-10 pt-2 border-t border-white/15 flex items-center justify-between text-[11px] font-mono text-emerald-100">
      <span>Gemini Vision &bull; Voice AI &bull; FPO Aggregation</span>
      <span className="text-amber-300 font-semibold">Smart India Hackathon</span>
    </div>

  </div>
);

export const HarmoniOceanBanner = () => (
  <div className="relative w-full h-48 sm:h-56 rounded-2xl bg-gradient-to-br from-[#0F172A] via-[#0369A1] to-[#0284C7] p-5 overflow-hidden text-white flex flex-col justify-between group">
    
    {/* Ocean Wave Vector Texture */}
    <div className="absolute inset-0 opacity-20 pointer-events-none">
      <svg width="100%" height="100%" viewBox="0 0 400 200" preserveAspectRatio="none">
        <path d="M0 80 C80 60 120 100 200 80 C280 60 320 100 400 80 L400 200 L0 200 Z" fill="rgba(255,255,255,0.1)" />
        <path d="M0 120 C100 100 150 140 250 120 C350 100 380 130 400 120 L400 200 L0 200 Z" fill="rgba(255,255,255,0.08)" />
      </svg>
    </div>

    {/* Top Bar: Bengaluru 24h Hackathon Badge */}
    <div className="relative z-10 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="p-2 rounded-xl bg-white/20 backdrop-blur-md text-white border border-white/30">
          <Waves className="w-4 h-4 text-sky-200" />
        </span>
        <span className="text-xs font-mono font-bold tracking-wider uppercase bg-sky-500/90 text-white px-2.5 py-0.5 rounded-full shadow-sm">
          Bengaluru 24h Hackathon
        </span>
      </div>

      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/25 backdrop-blur-md text-[11px] font-mono border border-white/10">
        <span>Citizen Science</span>
      </div>
    </div>

    {/* Centerpiece: Marine Biodiversity & Risk Radar */}
    <div className="relative z-10 my-auto py-2 grid grid-cols-12 gap-3 items-center">
      
      <div className="col-span-7 space-y-1.5">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-sky-100">
          <Activity className="w-3.5 h-3.5 text-cyan-300 animate-pulse" />
          <span>Marine Pollution & Biodiversity Telemetry</span>
        </div>
        <div className="p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-[11px] text-sky-100 space-y-1">
          <div className="flex items-center justify-between text-[10px] font-mono text-cyan-200">
            <span>Risk Reporting Pipeline</span>
            <span>Media Uploads Active</span>
          </div>
          <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
            <div className="bg-cyan-300 h-full w-3/4 rounded-full" />
          </div>
        </div>
      </div>

      <div className="col-span-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-2.5 text-right space-y-1">
        <div className="text-[10px] text-sky-200 font-mono">Platform Concept</div>
        <div className="text-xs font-bold text-white flex items-center justify-end gap-1">
          <span>Community Missions</span>
        </div>
        <div className="text-[10px] text-sky-100/90">Mock prediction engine</div>
      </div>

    </div>

    {/* Bottom Bar: Architecture tags */}
    <div className="relative z-10 pt-2 border-t border-white/15 flex items-center justify-between text-[11px] font-mono text-sky-100">
      <span>React &bull; Node &bull; Express &bull; Data Viz</span>
      <span className="text-cyan-300 font-semibold">24-Hour Sprint Prototype</span>
    </div>

  </div>
);

export const PhishingResearchBanner = () => (
  <div className="relative w-full h-44 sm:h-48 rounded-2xl bg-gradient-to-br from-[#2E1065] via-[#4C1D95] to-[#1D4ED8] p-5 overflow-hidden text-white flex flex-col justify-between group">
    
    {/* Network Graph Grid Lines */}
    <div className="absolute inset-0 opacity-15 pointer-events-none">
      <svg width="100%" height="100%">
        <pattern id="netGrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#FFFFFF" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#netGrid)" />
      </svg>
    </div>

    <div className="relative z-10 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="p-2 rounded-xl bg-white/20 backdrop-blur-md text-white border border-white/30">
          <ShieldCheck className="w-4 h-4 text-purple-200" />
        </span>
        <span className="text-xs font-mono font-bold tracking-wider uppercase bg-purple-500/90 text-white px-2.5 py-0.5 rounded-full shadow-sm">
          Ongoing Conceptual Research
        </span>
      </div>

      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/25 backdrop-blur-md text-[11px] font-mono border border-white/10">
        <Network className="w-3.5 h-3.5 text-purple-300" />
        <span>Link Intelligence</span>
      </div>
    </div>

    <div className="relative z-10 my-auto py-1 flex items-center justify-between">
      <div className="space-y-1">
        <div className="text-xs font-bold text-white flex items-center gap-1.5">
          <FileCheck2 className="w-3.5 h-3.5 text-pink-300" />
          <span>Verification-Stance Analysis Heuristics</span>
        </div>
        <p className="text-[11px] text-purple-200 font-mono">
          Detecting linguistic inconsistencies & multi-hop URL deception
        </p>
      </div>

      <div className="hidden sm:block text-right bg-white/10 backdrop-blur-md p-2 rounded-xl border border-white/20">
        <div className="text-[10px] text-purple-300 font-mono">Status</div>
        <div className="text-xs font-bold text-white">Concept & Synthesis</div>
      </div>
    </div>

    <div className="relative z-10 pt-2 border-t border-white/15 flex items-center justify-between text-[11px] font-mono text-purple-200">
      <span>Cybersecurity &bull; NLP &bull; Graph Analysis</span>
      <span className="text-pink-300 font-semibold">Active Academic Exploration</span>
    </div>

  </div>
);
