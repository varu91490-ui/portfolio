import React from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Sparkles, 
  CheckCircle, 
  Languages, 
  Waves, 
  Sprout, 
  Scissors, 
  FlaskConical, 
  Layers, 
  Wallet,
  AlertCircle,
  Mountain
} from 'lucide-react';
import { 
  featuredProjects, 
  researchProject, 
  compactProjects, 
  experiments 
} from '../data/portfolioData';
import { SectionSlide, SlideItem } from './SectionSlide';
import { 
  StitchlyBanner, 
  FarmFlowBanner, 
  HarmoniOceanBanner, 
  PhishingResearchBanner 
} from './ProjectIllustrations';

const projectBanners = {
  "stitchly": StitchlyBanner,
  "farmflow": FarmFlowBanner,
  "harmoniocean": HarmoniOceanBanner,
};

const projectIcons = {
  "stitchly": Scissors,
  "farmflow": Sprout,
  "harmoniocean": Waves,
};

export const Projects = () => {
  return (
    <SectionSlide 
      id="projects" 
      className="py-20 md:py-28 border-t border-blue-100 bg-gradient-to-b from-[#F0F7FF]/80 via-[#F8FAFC] to-[#EFF6FF]/60 relative overflow-hidden" 
      stagger
    >
      
      {/* Subtle Topographic Mountain Contour Background Watermark */}
      <div className="absolute top-0 right-0 w-full max-w-4xl h-96 opacity-20 pointer-events-none -z-10 overflow-hidden">
        <svg viewBox="0 0 800 400" fill="none" className="w-full h-full">
          <path d="M0 100 Q200 40 400 120 T800 80 L800 400 L0 400 Z" stroke="#3882F6" strokeWidth="1" strokeDasharray="4,4" fill="none" />
          <path d="M0 160 Q250 110 500 180 T800 140 L800 400 L0 400 Z" stroke="#1D4ED8" strokeWidth="1" strokeDasharray="6,6" fill="none" />
          <path d="M0 240 Q300 190 550 250 T800 210 L800 400 L0 400 Z" stroke="#0EA5E9" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SlideItem className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-[#BFDBFE] text-cobalt-blue shadow-2xs mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal-slate tracking-tight">
            Projects & Practical Systems
          </h2>
          <div className="w-12 h-1 bg-cobalt-blue mx-auto mt-3 rounded-full" />
          <p className="text-xs sm:text-sm text-gray-600 mt-2">
            Practical systems built to solve real community bottlenecks, hackathon challenges, and ongoing research.
          </p>
        </SlideItem>

        {/* 1. TOP 3 MAIN FEATURED PROJECTS */}
        <div className="space-y-12">
          {featuredProjects.map((project, idx) => {
            const IconComponent = projectIcons[project.id] || FolderGit2;
            const BannerComponent = projectBanners[project.id] || StitchlyBanner;

            return (
              <SlideItem key={project.id} delay={idx * 0.1}>
                <div className="card-elevation rounded-3xl p-6 sm:p-9 bg-white border border-[#E2E8F0] relative overflow-hidden transition-all hover:border-[#93C5FD] hover:-translate-y-1 group">
                  
                  {/* Subtle Top Accent Strip */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cobalt-blue via-sky-blue to-aqua-blue" />

                  {/* Project Architectural Visual Banner */}
                  <div className="mb-6 rounded-2xl overflow-hidden shadow-xs transition-transform duration-300 group-hover:scale-[1.008]">
                    <BannerComponent />
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left Details (8 cols) */}
                    <div className="lg:col-span-8 space-y-4">
                      
                      {/* Badges & Meta */}
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-soft-blue text-cobalt-blue border border-blue-200">
                          <IconComponent className="w-3.5 h-3.5" />
                          <span>{project.badge}</span>
                        </span>

                        {project.id === "stitchly" && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                            <Languages className="w-3 h-3" />
                            <span>Kannada UI Support</span>
                          </span>
                        )}

                        <span className="text-xs font-mono text-gray-400">
                          {project.type}
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-charcoal-slate tracking-tight">
                          {project.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold text-cobalt-blue mt-0.5">
                          {project.subtitle}
                        </p>
                      </div>

                      {/* Main Narrative Description */}
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Key Functionality Bullets */}
                      <div className="pt-2">
                        <h4 className="text-xs font-bold text-charcoal-slate uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5 text-cobalt-blue" />
                          <span>Key Functionality & Highlights</span>
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-600">
                          {project.keyFeatures.map((feature, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-2 bg-ice-white/90 p-2.5 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors">
                              <span className="w-1.5 h-1.5 rounded-full bg-cobalt-blue mt-1.5 shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Important Project Note / Context */}
                      {project.note && (
                        <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 text-xs text-gray-700 flex items-start gap-2.5">
                          <AlertCircle className="w-4 h-4 text-cobalt-blue shrink-0 mt-0.5" />
                          <span>
                            <strong className="text-charcoal-slate">Context Note:</strong> {project.note}
                          </span>
                        </div>
                      )}

                    </div>

                    {/* Right Tech Stack & Actions (4 cols) */}
                    <div className="lg:col-span-4 lg:border-l lg:border-gray-100 lg:pl-8 space-y-6 flex flex-col justify-between h-full">
                      
                      <div className="space-y-3">
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-ice-white text-charcoal-slate border border-gray-200 hover:border-blue-300 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* GitHub Link Button */}
                      <div className="pt-4 border-t border-gray-100">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-cobalt-blue hover:bg-sky-blue shadow-xs hover:shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
                        >
                          <Github className="w-4 h-4" />
                          <span>View on GitHub</span>
                          <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                        </a>
                        <p className="text-[11px] text-gray-400 text-center mt-2 font-mono">
                          Repository: varu91490-ui/{project.id}
                        </p>
                      </div>

                    </div>

                  </div>

                </div>
              </SlideItem>
            );
          })}
        </div>

        {/* 2. ONGOING RESEARCH PROJECT */}
        <SlideItem className="mt-16" delay={0.2}>
          <div className="card-elevation rounded-3xl p-6 sm:p-8 bg-white border border-purple-200 relative overflow-hidden transition-all hover:border-purple-300 group">
            
            {/* Architectural Visual Banner for Phishing Research */}
            <div className="mb-6 rounded-2xl overflow-hidden shadow-xs transition-transform duration-300 group-hover:scale-[1.008]">
              <PhishingResearchBanner />
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 text-amber-800 border border-amber-300">
                  Ongoing Research
                </span>
                <span className="text-xs text-gray-500 font-mono">Active Investigation</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-charcoal-slate">
                {researchProject.title}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-cobalt-blue">
                {researchProject.subtitle}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-4 max-w-4xl">
              {researchProject.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-4 text-xs text-gray-600">
              {researchProject.highlights.map((h, i) => (
                <div key={i} className="p-3 rounded-xl bg-ice-white border border-gray-200 flex items-start gap-2 shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-1.5 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-gray-100">
              <div className="flex flex-wrap gap-1.5">
                {researchProject.technologies.map((t) => (
                  <span key={t} className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-white text-gray-700 border border-gray-200">
                    {t}
                  </span>
                ))}
              </div>
              <span className="text-[11px] text-gray-500 italic">
                *Conceptual research initiative in progress (model not claimed as deployed)
              </span>
            </div>
          </div>
        </SlideItem>

        {/* 3. COMPACT PROJECT & OTHER EXPERIMENTS */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Compact Project: Expense Tracker (5 cols) */}
          <SlideItem className="lg:col-span-5" delay={0.25}>
            <div className="card-elevation p-6 rounded-2xl h-full flex flex-col justify-between bg-white border border-gray-200 hover:border-blue-200 transition-all">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-lg bg-soft-blue text-cobalt-blue">
                    <Wallet className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 font-mono">
                      Completed Project
                    </span>
                    <h4 className="text-base font-bold text-charcoal-slate">
                      {compactProjects[0].title}
                    </h4>
                  </div>
                </div>

                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  {compactProjects[0].description}
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 flex flex-wrap gap-1.5">
                {compactProjects[0].technologies.map((tech) => (
                  <span key={tech} className="px-2 py-0.5 rounded text-[11px] font-mono bg-ice-white text-gray-600 border border-gray-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </SlideItem>

          {/* Other Experiments (7 cols) */}
          <SlideItem className="lg:col-span-7" delay={0.3}>
            <div className="card-elevation p-6 rounded-2xl h-full flex flex-col justify-between bg-white border border-gray-200 hover:border-blue-200 transition-all">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-gray-100 text-gray-700">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-charcoal-slate">
                        Other Projects & Interface Experiments
                      </h4>
                      <p className="text-[11px] text-gray-400">UI recreations and state explorations</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {experiments.map((exp) => (
                    <div key={exp.name} className="p-3 rounded-xl bg-ice-white border border-gray-200/90 hover:border-blue-200 transition-colors">
                      <div className="text-[10px] font-mono font-bold text-cobalt-blue uppercase mb-1">
                        {exp.category}
                      </div>
                      <h5 className="font-bold text-xs text-charcoal-slate mb-1">
                        {exp.name}
                      </h5>
                      <p className="text-[11px] text-gray-500 leading-snug">
                        {exp.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] text-gray-400 text-right">
                Compact experiments exploring UI patterns & state handling
              </div>
            </div>
          </SlideItem>

        </div>

      </div>
    </SectionSlide>
  );
};

export default Projects;
