import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, Github, ChevronRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Achievements", href: "#achievements" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Track scroll position for glassmorphism border shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer to track active section with smooth indicator
  useEffect(() => {
    const sectionIds = navLinks.map(link => link.href.substring(1));
    const observers = [];

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -65% 0px", // Trigger when section passes upper viewport
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navOffset = 76;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-[#F8FAFC]/92 backdrop-blur-md shadow-sm border-b border-[#DBEAFE]/80 py-3" 
          : "bg-[#F8FAFC]/75 backdrop-blur-sm py-4 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand Monogram */}
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="Varshini Portfolio Home"
          >
            <div className="w-9 h-9 rounded-xl bg-cobalt-blue flex items-center justify-center text-white font-bold font-mono text-base shadow-sm group-hover:bg-sky-blue transition-colors">
              V
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-charcoal-slate group-hover:text-cobalt-blue transition-colors">
                Varshini
              </span>
              <span className="text-[10px] text-gray-500 font-mono tracking-tight hidden sm:block">
                Tech Explorer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links with Smooth Moving Indicator */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/80 border border-[#E2E8F0] px-2 py-1.5 rounded-full shadow-xs">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-colors ${
                    isActive 
                      ? "text-cobalt-blue" 
                      : "text-gray-600 hover:text-charcoal-slate"
                  }`}
                >
                  {/* Smooth moving active background pill */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-soft-blue/70 rounded-full -z-10 border border-[#BFDBFE]/60"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Header Action Buttons (Resume & GitHub) */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={personalInfo.resume.viewPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-cobalt-blue bg-soft-blue/60 hover:bg-soft-blue border border-[#BFDBFE] transition-all hover:scale-[1.02]"
              title="Open Varshini's Resume"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-gray-600 hover:text-charcoal-slate hover:bg-gray-100 border border-gray-200 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={personalInfo.resume.viewPath}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1.5 rounded-lg text-xs font-semibold text-cobalt-blue bg-soft-blue/60 border border-[#BFDBFE]"
            >
              Resume
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-charcoal-slate hover:bg-gray-100 border border-gray-200"
              aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide-Down Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden border-b border-[#DBEAFE] bg-white/95 backdrop-blur-lg px-4 pt-2 pb-5 space-y-1 shadow-lg overflow-hidden"
          >
            <div className="grid grid-cols-2 gap-1.5 pt-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                      isActive 
                        ? "bg-soft-blue text-cobalt-blue font-bold border border-blue-200" 
                        : "text-gray-700 hover:bg-gray-50 border border-transparent"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className={`w-3.5 h-3.5 ${isActive ? 'text-cobalt-blue' : 'text-gray-400'}`} />
                  </a>
                );
              })}
            </div>

            <div className="pt-3 mt-2 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs text-gray-500">varu91490@gmail.com</span>
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-cobalt-blue font-semibold hover:underline"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Profile</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
