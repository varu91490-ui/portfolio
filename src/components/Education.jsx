import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import { education } from '../data/portfolioData';
import { SectionSlide, SlideItem } from './SectionSlide';

export const Education = () => {
  return (
    <SectionSlide 
      id="education" 
      className="py-20 md:py-28 border-t border-blue-100/80 bg-gradient-to-b from-[#F8FAFC] via-[#F1F6FE]/70 to-[#F8FAFC] relative overflow-hidden" 
      stagger
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SlideItem className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-[#BFDBFE] text-cobalt-blue shadow-2xs mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal-slate tracking-tight">
            Education
          </h2>
          <div className="w-12 h-1 bg-cobalt-blue mx-auto mt-3 rounded-full" />
          <p className="text-xs sm:text-sm text-gray-600 mt-2">
            Solid foundations in Computer Science, Data Science, and Mathematics.
          </p>
        </SlideItem>

        {/* Education Timeline Cards with Connecting Spine */}
        <div className="max-w-4xl mx-auto space-y-6 relative">
          
          {/* Subtle Vertical Spine */}
          <div className="hidden sm:block absolute left-8 top-6 bottom-6 w-0.5 bg-blue-200/70 -z-0" />

          {education.map((edu, idx) => (
            <SlideItem key={edu.institution} delay={idx * 0.1}>
              <div className={`card-elevation p-6 sm:p-7 rounded-2xl relative transition-all bg-white hover:-translate-y-0.5 ${
                edu.current ? 'border-l-4 border-l-cobalt-blue border-[#BFDBFE] shadow-card' : 'border-[#E2E8F0]'
              }`}>
                
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  
                  {/* Left: Institution & Degree */}
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full ${
                        edu.current 
                          ? 'bg-soft-blue text-cobalt-blue border border-blue-200' 
                          : 'bg-gray-100 text-gray-600 border border-gray-200'
                      }`}>
                        {edu.period}
                      </span>
                      {edu.current && (
                        <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Current Focus</span>
                        </span>
                      )}
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-charcoal-slate">
                      {edu.degree}
                    </h3>

                    <h4 className="text-xs sm:text-sm font-semibold text-gray-600 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-cobalt-blue shrink-0" />
                      <span>{edu.institution}</span>
                    </h4>
                  </div>

                  {/* Right: Score / Status Badge */}
                  <div className="sm:text-right shrink-0">
                    <div className="inline-flex sm:flex sm:flex-col items-center sm:items-end gap-1.5">
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        {edu.current ? "Status" : "Performance"}
                      </span>
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl font-bold text-xs sm:text-sm ${
                        edu.current 
                          ? 'bg-soft-blue text-cobalt-blue border border-[#BFDBFE]' 
                          : 'bg-blue-50 text-cobalt-blue border border-blue-100'
                      }`}>
                        <Award className="w-4 h-4 text-cobalt-blue" />
                        <span>{edu.status}</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Additional Details */}
                <p className="mt-4 pt-3 border-t border-gray-100 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {edu.details}
                </p>

              </div>
            </SlideItem>
          ))}
        </div>

      </div>
    </SectionSlide>
  );
};

export default Education;
