import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Cpu, 
  ShieldCheck, 
  Atom, 
  Layers, 
  Compass, 
  HeartHandshake, 
  Lightbulb, 
  Target,
  Mountain
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { SectionSlide, SlideItem } from './SectionSlide';

const interestIcons = {
  "Cpu": Cpu,
  "ShieldCheck": ShieldCheck,
  "Atom": Atom,
  "Layers": Layers,
};

export const About = () => {
  return (
    <SectionSlide id="about" className="py-20 md:py-28 border-t border-blue-100/80 bg-ice-white relative" stagger>
      
      {/* Delicate Abstract Ridge Contour Background Accent */}
      <div className="absolute top-0 left-0 right-0 h-16 opacity-30 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 1200 60" fill="none" className="w-full h-full">
          <path d="M0 30 Q300 10 600 35 T1200 20" stroke="#93C5FD" strokeWidth="1.2" strokeDasharray="3,3" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SlideItem className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-soft-blue/60 border border-[#BFDBFE] text-cobalt-blue mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Curiosity & Philosophy</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal-slate tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-1 bg-cobalt-blue mx-auto mt-3 rounded-full" />
        </SlideItem>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Story Narrative Card (7 cols) */}
          <SlideItem className="lg:col-span-7 space-y-6">
            <div className="card-elevation p-7 sm:p-9 rounded-3xl relative overflow-hidden bg-white border border-[#E2E8F0] shadow-card hover:shadow-card-hover transition-all">
              
              {/* Subtle top decorative bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cobalt-blue via-sky-blue to-aqua-blue" />

              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-soft-blue text-cobalt-blue">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-charcoal-slate">Driven by Curiosity</h3>
                    <p className="text-xs text-gray-500 font-mono">Learning &bull; Building &bull; Exploring</p>
                  </div>
                </div>

                <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono text-gray-500 bg-ice-white border border-gray-200">
                  <Mountain className="w-3 h-3 text-sky-blue" />
                  <span>Western Ghats Roots</span>
                </span>
              </div>

              {/* Natural Student-Friendly Statement */}
              <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                <p className="font-medium text-charcoal-slate/95 italic border-l-4 border-cobalt-blue pl-4 py-2 bg-gradient-to-r from-blue-50/70 to-transparent rounded-r-xl">
                  "{personalInfo.about}"
                </p>
                <p className="text-gray-600 text-sm">
                  Based in the scenic coffee-growing hills of <span className="font-semibold text-charcoal-slate">Chikkamagaluru, Karnataka</span>, I approach programming not just as code syntax, but as an exploratory medium to solve real challenges. Whether it's enabling local tailors with regional voice interfaces in <span className="text-cobalt-blue font-semibold">Stitchly</span> or empowering farmers in <span className="text-cobalt-blue font-semibold">FarmFlow</span>, I love building practical systems that simplify everyday lives.
                </p>
              </div>

              {/* Three Core Personal Tenets */}
              <div className="mt-6 pt-5 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex items-start gap-2.5 p-2 rounded-xl bg-ice-white/80 border border-gray-100">
                  <div className="p-1.5 rounded-lg bg-blue-50 text-cobalt-blue mt-0.5">
                    <Target className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-charcoal-slate">Problem-First</h4>
                    <p className="text-[11px] text-gray-500">Addressing real human needs</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2 rounded-xl bg-ice-white/80 border border-gray-100">
                  <div className="p-1.5 rounded-lg bg-blue-50 text-cobalt-blue mt-0.5">
                    <HeartHandshake className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-charcoal-slate">Accessibility</h4>
                    <p className="text-[11px] text-gray-500">Regional languages & voice UI</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2 rounded-xl bg-ice-white/80 border border-gray-100">
                  <div className="p-1.5 rounded-lg bg-blue-50 text-cobalt-blue mt-0.5">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-charcoal-slate">Emerging Tech</h4>
                    <p className="text-[11px] text-gray-500">AI, Vision & Security</p>
                  </div>
                </div>
              </div>

            </div>
          </SlideItem>

          {/* Core Areas of Interest (5 cols) */}
          <SlideItem className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-base font-bold text-charcoal-slate">Key Areas of Interest</h3>
              <span className="text-xs font-mono text-cobalt-blue font-semibold bg-soft-blue/60 px-2.5 py-0.5 rounded-full border border-blue-200">
                4 Focal Domains
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
              {personalInfo.interests.map((interest) => {
                const IconComponent = interestIcons[interest.icon] || Cpu;
                return (
                  <div 
                    key={interest.title}
                    className="card-elevation p-4 rounded-2xl flex items-start gap-3.5 bg-white border border-[#E2E8F0] hover:border-cobalt-blue/50 hover:-translate-y-0.5 transition-all group"
                  >
                    <div className="p-2.5 rounded-xl bg-soft-blue/80 text-cobalt-blue group-hover:bg-cobalt-blue group-hover:text-white transition-colors shrink-0 shadow-2xs">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-charcoal-slate group-hover:text-cobalt-blue transition-colors">
                        {interest.title}
                      </h4>
                      <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                        {interest.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </SlideItem>

        </div>

      </div>
    </SectionSlide>
  );
};

export default About;
