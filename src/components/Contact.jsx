import React, { useState } from 'react';
import { 
  Mail, 
  Phone,
  PhoneCall,
  MapPin, 
  Github, 
  Linkedin, 
  Code, 
  Copy, 
  Check, 
  Send, 
  FileText, 
  Download, 
  ExternalLink,
  MessageSquare,
  Sparkles,
  Mountain
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { SectionSlide, SlideItem } from './SectionSlide';

export const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject || 'Connecting with Varshini')}&body=${encodeURIComponent(message || '')}`;
    window.location.href = mailtoUrl;
  };

  return (
    <SectionSlide 
      id="contact" 
      className="py-20 md:py-28 border-t border-blue-100 bg-gradient-to-b from-[#F8FAFC] via-[#EFF6FF]/70 to-[#DBEAFE]/40 relative overflow-hidden" 
      stagger
    >
      
      {/* Subtle Alpine Horizon Curve at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 opacity-15 pointer-events-none -z-10">
        <svg viewBox="0 0 1440 200" fill="none" className="w-full h-full object-cover">
          <path d="M0 150 L200 90 L450 140 L700 70 L950 130 L1200 80 L1440 120 L1440 200 L0 200 Z" fill="#1D4ED8" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SlideItem className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-[#BFDBFE] text-cobalt-blue shadow-2xs mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Let's Connect</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal-slate tracking-tight">
            Get in Touch
          </h2>
          <div className="w-12 h-1 bg-cobalt-blue mx-auto mt-3 rounded-full" />
          <p className="text-xs sm:text-sm text-gray-600 mt-2">
            Open for software development opportunities, academic collaborations, and tech discussions.
          </p>
        </SlideItem>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contacts, Socials & Resume (7 cols) */}
          <SlideItem className="lg:col-span-7 space-y-5">
            
            {/* Phone & Direct Calling Card */}
            <div className="card-elevation p-5 sm:p-6 rounded-2xl bg-white border border-[#E2E8F0] hover:border-blue-300 transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-charcoal-slate">Direct Phone</h3>
                    <p className="text-[11px] text-gray-400">Available for calls and direct conversations</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={copyPhone}
                    className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-ice-white hover:bg-soft-blue text-cobalt-blue border border-gray-200 transition-all active:scale-95"
                    title="Copy phone number"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span className="hidden sm:inline">{copiedPhone ? "Copied" : "Copy"}</span>
                  </button>

                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white shadow-2xs transition-all hover:scale-[1.02]"
                    title="Call directly"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-ice-white border border-gray-200 flex items-center justify-between">
                <a 
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="font-mono text-sm sm:text-base font-bold text-emerald-700 hover:text-emerald-800 hover:underline"
                >
                  {personalInfo.phone}
                </a>
                <span className="text-[10px] font-mono text-gray-400 bg-white px-2 py-0.5 rounded border border-gray-200">
                  Mobile (India)
                </span>
              </div>
            </div>

            {/* Email Card */}
            <div className="card-elevation p-5 sm:p-6 rounded-2xl bg-white border border-[#E2E8F0] hover:border-blue-300 transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-soft-blue text-cobalt-blue">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-charcoal-slate">Direct Email</h3>
                    <p className="text-[11px] text-gray-400">Feel free to write to me directly</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={copyEmail}
                    className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-ice-white hover:bg-soft-blue text-cobalt-blue border border-gray-200 transition-all active:scale-95"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span className="hidden sm:inline">{copiedEmail ? "Copied" : "Copy"}</span>
                  </button>

                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-cobalt-blue hover:bg-sky-blue text-white shadow-2xs transition-all hover:scale-[1.02]"
                    title="Send Email"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send</span>
                  </a>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-ice-white border border-gray-200 flex items-center justify-between">
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="font-mono text-xs sm:text-sm font-semibold text-cobalt-blue hover:underline break-all"
                >
                  {personalInfo.email}
                </a>
                <span className="text-[10px] font-mono text-gray-400 bg-white px-2 py-0.5 rounded border border-gray-200">
                  Primary Inbox
                </span>
              </div>

              <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
                <MapPin className="w-3.5 h-3.5 text-cobalt-blue shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Social & Coding Network Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* GitHub */}
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="card-elevation p-3.5 rounded-xl flex items-center justify-between hover:border-cobalt-blue/50 transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-gray-100 text-charcoal-slate group-hover:bg-cobalt-blue group-hover:text-white transition-colors">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-charcoal-slate">GitHub</h4>
                    <span className="text-[10px] text-gray-400 font-mono">varu91490-ui</span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-cobalt-blue" />
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="card-elevation p-3.5 rounded-xl flex items-center justify-between hover:border-cobalt-blue/50 transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-charcoal-slate">LinkedIn</h4>
                    <span className="text-[10px] text-gray-400 font-mono">varshini-b</span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-600" />
              </a>

              {/* LeetCode */}
              <a
                href={personalInfo.socialLinks.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="card-elevation p-3.5 rounded-xl flex items-center justify-between hover:border-amber-300 transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-amber-50 text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                    <Code className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-charcoal-slate">LeetCode</h4>
                    <span className="text-[10px] text-gray-400 font-mono">VaZHGKyR1q</span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-amber-500" />
              </a>
            </div>

            {/* Dedicated Resume Integration Box */}
            <div className="card-elevation p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-white via-white to-blue-50/60 border border-blue-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-cobalt-blue text-white mt-0.5">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-sm sm:text-base text-charcoal-slate">
                        Curriculum Vitae / Resume
                      </h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-soft-blue text-cobalt-blue font-bold">
                        PDF
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      One-page developer resume detailing projects, education, and technical stack.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={personalInfo.resume.viewPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-cobalt-blue bg-white hover:bg-soft-blue border border-[#BFDBFE] shadow-2xs transition-all hover:scale-[1.02]"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>View Resume</span>
                  </a>

                  <a
                    href={personalInfo.resume.downloadPath}
                    download={personalInfo.resume.fileName}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-cobalt-blue hover:bg-sky-blue shadow-2xs transition-all hover:scale-[1.02]"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </a>
                </div>
              </div>

              {/* Configured path note */}
              <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400 font-mono">
                <span>Verified File: <strong className="text-cobalt-blue">resume1.pdf</strong></span>
                <span className="text-emerald-600 font-semibold">&bull; Active & Ready</span>
              </div>
            </div>

          </SlideItem>

          {/* Right Column: Quick Message Composer (5 cols) */}
          <SlideItem className="lg:col-span-5" delay={0.15}>
            <div className="card-elevation p-6 sm:p-7 rounded-2xl bg-white border border-[#E2E8F0]">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-2 rounded-lg bg-soft-blue text-cobalt-blue">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-charcoal-slate">Send a Quick Message</h3>
                  <p className="text-xs text-gray-400">Pre-populates an email directly to Varshini</p>
                </div>
              </div>

              <form onSubmit={handleSendEmail} className="space-y-4 text-xs">
                <div>
                  <label htmlFor="msg-subject" className="block font-semibold text-gray-700 mb-1">
                    Subject / Topic
                  </label>
                  <input
                    id="msg-subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Project Inquiry / Tech Discussion / Opportunity"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-ice-white border border-gray-200 text-charcoal-slate focus:border-cobalt-blue focus:bg-white text-xs transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="msg-body" className="block font-semibold text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="msg-body"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hi Varshini, I saw your work on Stitchly and FarmFlow..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-ice-white border border-gray-200 text-charcoal-slate focus:border-cobalt-blue focus:bg-white text-xs transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-cobalt-blue hover:bg-sky-blue transition-all shadow-xs hover:shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Draft & Send Message</span>
                </button>
              </form>
            </div>
          </SlideItem>

        </div>

      </div>
    </SectionSlide>
  );
};

export default Contact;
