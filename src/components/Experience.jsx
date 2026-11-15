import React from 'react';
import { Briefcase, Calendar, Sparkles, Binary, Timer } from 'lucide-react';
import { experiences } from '../data/portfolioData';
import { SectionSlide, SlideItem } from './SectionSlide';

export const Experience = () => {
  return (
    <SectionSlide id="experience" className="py-16 md:py-24 border-t border-gray-200/70" stagger>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SlideItem className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-soft-blue/60 border border-[#BFDBFE] text-cobalt-blue mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Learning & Growth</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal-slate tracking-tight">
            Experience & Programs
          </h2>
          <div className="w-12 h-1 bg-cobalt-blue mx-auto mt-3 rounded-full" />
          <p className="text-xs sm:text-sm text-gray-500 mt-2">
            Structured internships and intensive hackathon development sprints.
          </p>
        </SlideItem>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {experiences.map((exp, idx) => (
            <SlideItem key={exp.id} delay={idx * 0.1}>
              <div className="card-elevation p-6 sm:p-7 rounded-2xl h-full flex flex-col justify-between bg-white border border-[#E2E8F0] hover:border-cobalt-blue/40 transition-all">
                
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-soft-blue text-cobalt-blue">
                        {exp.id === "exp-1" ? <Binary className="w-5 h-5" /> : <Timer className="w-5 h-5" />}
                      </div>
                      <div>
                        <span className="text-[11px] font-mono font-bold text-cobalt-blue uppercase">
                          {exp.type}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-charcoal-slate">
                          {exp.role}
                        </h3>
                      </div>
                    </div>

                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-50 text-cobalt-blue border border-blue-200 shrink-0">
                      {exp.period}
                    </span>
                  </div>

                  <h4 className="text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                    {exp.organization}
                  </h4>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-mono">
                  <span>{exp.badge}</span>
                  <span className="text-cobalt-blue font-bold">&bull; Verified</span>
                </div>

              </div>
            </SlideItem>
          ))}
        </div>

      </div>
    </SectionSlide>
  );
};

export default Experience;
