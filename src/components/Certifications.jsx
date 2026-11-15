import React from 'react';
import { Award, Clock, CheckCircle, ExternalLink, BookCheck } from 'lucide-react';
import { certifications } from '../data/portfolioData';
import { SectionSlide, SlideItem } from './SectionSlide';

export const Certifications = () => {
  return (
    <SectionSlide id="certifications" className="py-16 md:py-24 border-t border-gray-200/70" stagger>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SlideItem className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-soft-blue/60 border border-[#BFDBFE] text-cobalt-blue mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials & Completed Programs</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal-slate tracking-tight">
            Certifications
          </h2>
          <div className="w-12 h-1 bg-cobalt-blue mx-auto mt-3 rounded-full" />
          <p className="text-xs sm:text-sm text-gray-500 mt-2">
            Verified coursework in Full-Stack development, SQL, Data Science, and Computer Networks.
          </p>
        </SlideItem>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, idx) => (
            <SlideItem key={cert.id} delay={idx * 0.08}>
              <div className="card-elevation p-6 sm:p-7 rounded-2xl h-full flex flex-col justify-between bg-white border border-[#E2E8F0] hover:border-cobalt-blue/40 transition-all group">
                
                <div>
                  {/* Top Meta */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-soft-blue text-cobalt-blue border border-blue-200">
                      {cert.category}
                    </span>

                    <span className="flex items-center gap-1 text-xs font-semibold text-gray-600 bg-gray-50 px-2.5 py-0.5 rounded-full border border-gray-200">
                      <Clock className="w-3 h-3 text-cobalt-blue" />
                      <span>{cert.duration}</span>
                    </span>
                  </div>

                  {/* Certificate Image Preview */}
                  {cert.imagePath && (
                    <a
                      href={cert.imagePath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative mb-4 rounded-xl overflow-hidden border border-gray-200 bg-gray-50 aspect-[16/10] group/img shadow-2xs hover:border-blue-300 transition-colors"
                      title={`Open ${cert.title}`}
                    >
                      <img
                        src={cert.imagePath}
                        alt={cert.title}
                        className="w-full h-full object-cover object-top transition-transform duration-300 group-hover/img:scale-[1.03]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-slate/50 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end justify-between p-3">
                        <span className="text-[11px] font-medium text-white/90">
                          {cert.fileName}
                        </span>
                        <span className="text-[11px] font-semibold text-white bg-cobalt-blue/90 px-2 py-0.5 rounded-md shadow-xs flex items-center gap-1 backdrop-blur-xs">
                          <ExternalLink className="w-3 h-3" />
                          <span>View Full Image</span>
                        </span>
                      </div>
                    </a>
                  )}

                  <h3 className="text-base sm:text-lg font-bold text-charcoal-slate group-hover:text-cobalt-blue transition-colors mb-1.5">
                    {cert.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs font-semibold text-cobalt-blue mb-3">
                    <BookCheck className="w-3.5 h-3.5" />
                    <span>{cert.issuer}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Footer with Verified badge and View Certificate button */}
                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between gap-3 text-xs">
                  <span className="flex items-center gap-1 text-emerald-600 font-medium">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Verified Credential</span>
                  </span>
                  
                  {cert.imagePath && (
                    <a
                      href={cert.imagePath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-cobalt-blue bg-soft-blue/60 hover:bg-soft-blue border border-[#BFDBFE] transition-all hover:scale-[1.02]"
                      title={`View ${cert.title}`}
                    >
                      <span>View Certificate</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

              </div>
            </SlideItem>
          ))}
        </div>

      </div>
    </SectionSlide>
  );
};

export default Certifications;
