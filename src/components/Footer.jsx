import React from 'react';
import { ArrowUp, Github, Linkedin, Code, Mail, Phone, Mountain } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-white border-t border-blue-100 py-12 transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Brand Monogram & Role */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cobalt-blue flex items-center justify-center text-white font-bold font-mono text-base shadow-xs">
              V
            </div>
            <div>
              <div className="font-bold text-sm text-charcoal-slate tracking-tight">
                Varshini
              </div>
              <p className="text-xs text-gray-500 flex items-center gap-1.5">
                <span>Technology Explorer &bull; Developer &bull; Problem Solver</span>
              </p>
            </div>
          </div>

          {/* Center: Social & Direct Links */}
          <div className="flex items-center gap-3 text-xs">
            <a
              href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
              className="p-2 rounded-lg text-gray-500 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
              aria-label="Direct Phone"
              title={personalInfo.phone}
            >
              <Phone className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg text-gray-500 hover:text-red-500 hover:bg-gray-100 transition-colors"
              aria-label="Email"
              title={personalInfo.email}
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-gray-500 hover:text-cobalt-blue hover:bg-gray-100 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-gray-500 hover:text-blue-600 hover:bg-gray-100 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socialLinks.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-gray-500 hover:text-amber-500 hover:bg-gray-100 transition-colors"
              aria-label="LeetCode"
            >
              <Code className="w-4 h-4" />
            </a>
          </div>

          {/* Right: Back to Top & Location */}
          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-400 font-mono hidden sm:inline-flex items-center gap-1">
              <Mountain className="w-3.5 h-3.5 text-sky-blue" />
              <span>Chikkamagaluru, Karnataka</span>
            </span>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-cobalt-blue bg-soft-blue/60 hover:bg-soft-blue border border-[#BFDBFE] transition-all hover:scale-105 active:scale-95"
              aria-label="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-gray-100 text-center text-xs text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>
            &copy; {new Date().getFullYear()} Varshini. Built with React, Tailwind CSS & Framer Motion.
          </p>
          <p className="text-[11px] font-mono text-gray-400 flex items-center gap-1">
            <span>Arctic Blue & Snowy Mountain Aesthetic</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
