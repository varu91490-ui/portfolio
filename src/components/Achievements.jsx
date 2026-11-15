import React from 'react';
import { Trophy, Award, CheckCircle2, Flag, Sparkles } from 'lucide-react';
import { achievements } from '../data/portfolioData';
import { SectionSlide, SlideItem } from './SectionSlide';

export const Achievements = () => {
  return (
    <SectionSlide 
      id="achievements" 
      className="py-20 md:py-28 border-t border-blue-100/80 bg-gradient-to-b from-[#EFF6FF]/60 via-[#F8FAFC] to-[#F1F6FE]/70 relative" 
      stagger
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SlideItem className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-[#BFDBFE] text-cobalt-blue shadow-2xs mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Milestones & Recognitions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal-slate tracking-tight">
            Key Achievements
          </h2>
          <div className="w-12 h-1 bg-cobalt-blue mx-auto mt-3 rounded-full" />
          <p className="text-xs sm:text-sm text-gray-600 mt-2">
            Notable hackathon rounds and milestone collaborative engineering experiences.
          </p>
        </SlideItem>

        {/* Achievements Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {achievements.map((item, idx) => (
            <SlideItem key={item.id} delay={idx * 0.1}>
              <div className="card-elevation p-6 sm:p-7 rounded-2xl h-full flex flex-col justify-between bg-white border border-[#E2E8F0] hover:border-amber-300 hover:-translate-y-1 transition-all">
                
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600 border border-amber-200 shadow-2xs">
                      <Trophy className="w-5 h-5" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-charcoal-slate mb-1">
                    {item.title}
                  </h3>

                  <div className="text-xs font-semibold text-cobalt-blue mb-3">
                    Project: {item.project}
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400 font-mono">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{item.organization}</span>
                  </div>
                  <span className="text-amber-600 font-semibold text-[11px]">Collegiate Round</span>
                </div>

              </div>
            </SlideItem>
          ))}
        </div>

      </div>
    </SectionSlide>
  );
};

export default Achievements;
