import React from 'react';
import { 
  Layout, 
  Server, 
  Code2, 
  Database, 
  Wrench, 
  Sparkles, 
  Check 
} from 'lucide-react';
import { skills } from '../data/portfolioData';
import { SectionSlide, SlideItem } from './SectionSlide';

const categoryIcons = {
  "Layout": Layout,
  "Server": Server,
  "Code2": Code2,
  "Database": Database,
  "Wrench": Wrench,
};

export const Skills = () => {
  return (
    <SectionSlide 
      id="skills" 
      className="py-20 md:py-28 border-t border-blue-100/80 bg-ice-white relative" 
      stagger
    >
      
      {/* Subtle Engineering Dot-Matrix Pattern in Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#DBEAFE_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SlideItem className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-[#BFDBFE] text-cobalt-blue shadow-2xs mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal-slate tracking-tight">
            Technical Skills
          </h2>
          <div className="w-12 h-1 bg-cobalt-blue mx-auto mt-3 rounded-full" />
          <p className="text-xs sm:text-sm text-gray-600 mt-2">
            Organised by core engineering disciplines without artificial proficiency ratings.
          </p>
        </SlideItem>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([key, group], idx) => {
            const IconComponent = categoryIcons[group.icon] || Code2;
            const isFullWidthOnMd = key === 'tools'; // 5th item spans nicely
            
            return (
              <SlideItem 
                key={key} 
                delay={idx * 0.08}
                className={isFullWidthOnMd ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <div className="card-elevation p-6 rounded-2xl h-full flex flex-col justify-between bg-white border border-[#E2E8F0] hover:border-cobalt-blue/50 hover:-translate-y-1 transition-all group">
                  
                  <div>
                    {/* Header with Icon */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2.5 rounded-xl bg-soft-blue text-cobalt-blue group-hover:bg-cobalt-blue group-hover:text-white transition-colors shadow-2xs">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm sm:text-base text-charcoal-slate group-hover:text-cobalt-blue transition-colors">
                          {group.category}
                        </h3>
                        <span className="text-[11px] text-gray-400 font-mono">
                          {group.items.length} Technologies
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                      {group.description}
                    </p>
                  </div>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-100">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-ice-white hover:bg-soft-blue/70 text-charcoal-slate border border-gray-200 hover:border-blue-300 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cobalt-blue shrink-0" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>

                </div>
              </SlideItem>
            );
          })}
        </div>

      </div>
    </SectionSlide>
  );
};

export default Skills;
