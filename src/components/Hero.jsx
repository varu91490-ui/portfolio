import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  ArrowRight, 
  FileText, 
  Download, 
  Github, 
  Linkedin, 
  Code, 
  Mail, 
  Sparkles, 
  GraduationCap,
  Image as ImageIcon,
  Mountain,
  Compass
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import MountainLandscape from './MountainLandscape';

export const Hero = () => {
  const [imgError, setImgError] = useState(false);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const navOffset = 76;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      
      {/* 1. Atmospheric Mountain Landscape Panorama Background */}
      <div className="absolute top-0 left-0 right-0 h-[520px] sm:h-[580px] md:h-[620px] -z-20 overflow-hidden">
        <MountainLandscape className="h-full" />
      </div>

      {/* 2. Soft Ambient Vignette for Superior Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F8FAFC]/50 to-[#F8FAFC] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Frosted Glass Narrative & CTAs (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            
            {/* Frosted Glass Content Panel */}
            <div className="backdrop-blur-md bg-white/85 sm:bg-white/90 border border-white/80 rounded-3xl p-6 sm:p-9 shadow-card hover:shadow-card-hover transition-all space-y-6">
              
              {/* Status & Region Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-[#BFDBFE] text-cobalt-blue shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Student Developer & Tech Explorer</span>
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-soft-blue/60 border border-blue-200 text-charcoal-slate">
                  <MapPin className="w-3.5 h-3.5 text-cobalt-blue" />
                  <span>{personalInfo.location}</span>
                </span>

                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono text-gray-500 bg-gray-50 border border-gray-200">
                  <Mountain className="w-3 h-3 text-sky-blue" />
                  <span>Western Ghats Foothills</span>
                </span>
              </div>

              {/* Main Greeting & Name */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-cobalt-blue bg-soft-blue/60 px-2.5 py-0.5 rounded-full">
                    Welcome to my space
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal-slate tracking-tight leading-[1.12]">
                  Hi, I'm <span className="text-cobalt-blue underline decoration-sky-blue/50 decoration-4 underline-offset-6">Varshini</span> <span className="inline-block animate-wave">👋</span>
                </h1>
                <p className="text-base sm:text-lg font-bold text-gray-700 tracking-tight">
                  {personalInfo.role}
                </p>
              </div>

              {/* Tagline / Brief Mission */}
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                Curious student engineer pursuing B.E. in <span className="font-semibold text-charcoal-slate">Computer Science & Engineering (Data Science)</span> at AIT, Chikkamagaluru. I enjoy exploring emerging technologies, building practical systems, and solving real-world community problems.
              </p>

              {/* Current Academic Milestones Chip */}
              <div className="flex items-center gap-3 text-xs text-gray-700 bg-ice-white/90 border border-blue-100 rounded-xl p-3 shadow-2xs">
                <div className="p-2 rounded-lg bg-soft-blue text-cobalt-blue shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div className="leading-snug">
                  <span className="font-bold text-charcoal-slate">B.E. 3rd Year (Data Science)</span>
                  <span className="text-gray-400 mx-1.5">&bull;</span>
                  <span>Smart India Hackathon 2026 Internal Round Selection</span>
                </div>
              </div>

              {/* Primary Calls to Action (Projects & Resume) */}
              <div className="pt-1 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  onClick={(e) => scrollToSection(e, "#projects")}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-cobalt-blue hover:bg-sky-blue shadow-sm hover:shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Explore Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.resume.viewPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-cobalt-blue bg-white hover:bg-soft-blue/60 border border-[#BFDBFE] transition-all hover:scale-[1.02]"
                  title="View Resume in New Tab"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Resume</span>
                </a>

                <a
                  href={personalInfo.resume.downloadPath}
                  download={personalInfo.resume.fileName}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50 border border-gray-200 transition-all hover:scale-[1.02]"
                  title="Download Resume PDF"
                >
                  <Download className="w-4 h-4 text-gray-500" />
                  <span>Download</span>
                </a>
              </div>

              {/* Social & Coding Profiles */}
              <div className="pt-3 border-t border-gray-100 flex flex-wrap items-center gap-3 text-xs">
                <span className="font-semibold text-gray-500 uppercase tracking-wider text-[11px]">Connect:</span>
                <div className="flex flex-wrap items-center gap-2">
                  
                  {/* GitHub */}
                  <a
                    href={personalInfo.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-charcoal-slate hover:text-cobalt-blue hover:border-blue-300 transition-colors shadow-2xs"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span className="font-medium">GitHub</span>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={personalInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-charcoal-slate hover:text-blue-600 hover:border-blue-300 transition-colors shadow-2xs"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-blue-600" />
                    <span className="font-medium">LinkedIn</span>
                  </a>

                  {/* LeetCode */}
                  <a
                    href={personalInfo.socialLinks.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-charcoal-slate hover:text-amber-600 hover:border-amber-300 transition-colors shadow-2xs"
                  >
                    <Code className="w-3.5 h-3.5 text-amber-500" />
                    <span className="font-medium">LeetCode</span>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-charcoal-slate hover:text-cobalt-blue hover:border-blue-300 transition-colors shadow-2xs"
                  >
                    <Mail className="w-3.5 h-3.5 text-red-500" />
                    <span className="font-medium">Email</span>
                  </a>

                </div>
              </div>

            </div>

          </motion.div>

          {/* Right Column: Profile Showcase Card (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              
              {/* Outer decorative card */}
              <div className="relative rounded-3xl bg-white/95 backdrop-blur-md border border-[#E2E8F0] p-6 shadow-card hover:shadow-card-hover transition-all">
                
                {/* Floating Corner Accent Badges */}
                <div className="absolute -top-3 -right-3 px-3 py-1 bg-cobalt-blue text-white text-[11px] font-bold rounded-full shadow-md flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-aqua-blue" />
                  <span>Curious Builder</span>
                </div>

                {/* Profile Photo / Tech Monogram Container */}
                <div className="relative aspect-square rounded-2xl bg-gradient-to-b from-[#EFF6FF] to-soft-blue/40 border-2 border-dashed border-[#BFDBFE] flex flex-col items-center justify-center p-6 text-center overflow-hidden group">
                  
                  {!imgError ? (
                    <img
                      src="/photo.jpeg"
                      alt="Varshini"
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  ) : null}

                  {/* Fallback & Placeholder UI (shown when photo is pending) */}
                  {imgError && (
                    <div className="space-y-4">
                      {/* Monogram Symbol with Arctic Glow */}
                      <div className="relative mx-auto w-24 h-24 rounded-2xl bg-gradient-to-tr from-cobalt-blue via-sky-blue to-aqua-blue flex items-center justify-center text-white shadow-glow">
                        <span className="text-4xl font-extrabold font-mono tracking-tighter">V</span>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center" title="Active">
                          <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <h3 className="font-bold text-base text-charcoal-slate">Varshini</h3>
                        <p className="text-xs text-cobalt-blue font-mono font-medium">B.E. CSE (Data Science)</p>
                      </div>

                      {/* Friendly hint explaining where to drop the actual photo */}
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 border border-blue-200 text-[11px] text-gray-600 shadow-2xs">
                        <ImageIcon className="w-3.5 h-3.5 text-cobalt-blue" />
                        <span>Place photo in: <code className="font-mono text-cobalt-blue font-bold">/public/varshini-profile.jpg</code></span>
                      </div>
                    </div>
                  )}

                </div>

                {/* Quick Info Bar below photo */}
                <div className="mt-5 pt-4 border-t border-gray-100 grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 rounded-xl bg-ice-white border border-gray-100">
                    <div className="text-xs text-gray-400 font-medium">Domain</div>
                    <div className="text-xs font-bold text-charcoal-slate mt-0.5">Data Science</div>
                  </div>
                  <div className="p-2 rounded-xl bg-ice-white border border-gray-100">
                    <div className="text-xs text-gray-400 font-medium">Hackathons</div>
                    <div className="text-xs font-bold text-cobalt-blue mt-0.5">SIH & 24h</div>
                  </div>
                  <div className="p-2 rounded-xl bg-ice-white border border-gray-100">
                    <div className="text-xs text-gray-400 font-medium">Graduation</div>
                    <div className="text-xs font-bold text-charcoal-slate mt-0.5">2028</div>
                  </div>
                </div>

                {/* Mountain Horizon Caption */}
                <div className="mt-3 text-center">
                  <span className="text-[10px] font-mono text-gray-400 flex items-center justify-center gap-1">
                    <Compass className="w-3 h-3 text-sky-blue" />
                    <span>Adichunchanagiri Institute of Technology, Chikkamagaluru</span>
                  </span>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
