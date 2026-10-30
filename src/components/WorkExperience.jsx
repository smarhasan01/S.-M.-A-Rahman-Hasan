import React from 'react';
import { workExperience } from '../data/portfolioData';
import { Sparkles, Calendar, MapPin, CheckCircle, ExternalLink, Globe, Wrench } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';

const FacebookIcon = ({ className = "w-3 h-3" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

export default function WorkExperience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#161619] scroll-mt-24">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-brand-orange/10 rounded-full blur-[140px] pointer-events-none animate-ambient-drift-rev transform-gpu will-change-transform" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Career History</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-white">
              <span className="text-[#5569ff]">Work </span>
              <span className="bg-gradient-to-r from-[#ff7a45] via-[#ff9248] to-[#ffaa5a] bg-clip-text text-transparent">
                Experience
              </span>
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              Professional leadership, instructional training, document preparation, and commercial graphic design experience.
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline Container */}
        <div className="max-w-5xl mx-auto relative">
          
          {/* Vertical dashed center line */}
          <div className="hidden lg:block absolute left-1/2 top-6 bottom-6 w-0.5 -translate-x-1/2 border-l-2 border-dashed border-zinc-700/60 pointer-events-none" />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {workExperience.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <ScrollReveal key={item.id} direction="up" delay={120 * (index + 1)}>
                  <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left Column (Meta details on Desktop) */}
                    <div className={`lg:col-span-5 text-left ${isEven ? 'lg:text-right lg:order-1' : 'lg:text-left lg:order-3'}`}>
                      <div className="space-y-2 bg-[#1b1b22]/50 p-5 rounded-2xl border border-white/5">
                        
                        {/* Duration badge */}
                        <div className={`flex items-center gap-2 text-xs font-mono ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
                          <span className={`px-2.5 py-1 rounded-lg flex items-center gap-1.5 font-semibold ${
                            item.isCurrent
                              ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                              : 'bg-white/5 text-zinc-300 border border-white/10'
                          }`}>
                            <Calendar className="w-3.5 h-3.5 text-brand-purple" />
                            <span>{item.duration}</span>
                          </span>
                        </div>

                        {/* Company Name */}
                        <h3 className="text-xl font-bold font-display text-white tracking-wide">
                          {item.company}
                        </h3>

                        {/* Position & Type */}
                        <div className={`text-sm font-semibold text-brand-purple flex items-center gap-2 ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
                          <span>{item.position}</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-400 border border-white/5">
                            {item.employmentType}
                          </span>
                        </div>

                        {/* Address */}
                        <div className={`flex items-start gap-1.5 text-xs text-zinc-400 pt-1 ${isEven ? 'lg:justify-end text-right' : 'lg:justify-start text-left'}`}>
                          <MapPin className="w-3.5 h-3.5 text-zinc-500 flex-shrink-0 mt-0.5" />
                          <span>{item.address}</span>
                        </div>

                        {/* Company Links (Website & Facebook) */}
                        <div className={`flex flex-wrap gap-2 pt-2 ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
                          {item.website && (
                            <a
                              href={item.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-medium bg-white/5 hover:bg-brand-purple/20 text-zinc-300 hover:text-white border border-white/10 transition-colors"
                            >
                              <Globe className="w-3 h-3 text-brand-cyan" />
                              <span>Website</span>
                              <ExternalLink className="w-2.5 h-2.5" />
                            </a>
                          )}
                          {item.facebook && (
                            <a
                              href={item.facebook}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-medium bg-blue-600/10 hover:bg-blue-600/25 text-blue-300 hover:text-white border border-blue-500/20 transition-colors"
                            >
                              <FacebookIcon className="w-3 h-3 text-blue-400" />
                              <span>Facebook Page</span>
                              <ExternalLink className="w-2.5 h-2.5" />
                            </a>
                          )}
                        </div>

                      </div>
                    </div>

                    {/* Center Node Ring */}
                    <div className="hidden lg:flex lg:col-span-2 lg:order-2 justify-center relative pt-6">
                      <div className="relative flex items-center justify-center">
                        {item.isCurrent && (
                          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#ff7a45]/40 to-[#ff9248]/10 animate-ping absolute pointer-events-none" />
                        )}
                        <div className="w-9 h-9 rounded-full bg-[#171719] border-2 border-[#ff7a45] shadow-[0_0_15px_#ff7a45] flex items-center justify-center z-10 transition-transform duration-300 hover:scale-110">
                          <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-r from-[#ff7a45] to-[#ffaa5a]" />
                        </div>
                      </div>
                    </div>

                    {/* Right Column (Responsibilities & Tools) */}
                    <div className={`lg:col-span-5 text-left ${isEven ? 'lg:order-3' : 'lg:order-1'}`}>
                      <TiltCard maxTilt={5} scale={1.01} className="rounded-2xl">
                        <div className="p-6 rounded-2xl bg-[#1b1b22] border border-white/8 hover:border-brand-purple/40 transition-all duration-300 shadow-xl group">
                          
                          <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-4">
                            <span className="text-xs font-mono uppercase tracking-wider text-indigo-300 font-bold">
                              Key Responsibilities
                            </span>
                            <span className="text-[10px] font-mono text-zinc-500">
                              0{index + 1}
                            </span>
                          </div>

                          {/* Responsibilities list */}
                          <div className="space-y-2.5">
                            {item.responsibilities.map((resp, i) => (
                              <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                                <span>{resp}</span>
                              </div>
                            ))}
                          </div>

                          {/* Tools Used */}
                          {item.tools && item.tools.length > 0 && (
                            <div className="pt-4 mt-4 border-t border-white/5">
                              <div className="flex items-center gap-1.5 text-[11px] text-zinc-400 font-mono mb-2">
                                <Wrench className="w-3 h-3 text-brand-purple" />
                                <span>Tools & Environments:</span>
                              </div>
                              <div className="flex flex-wrap gap-1.5">
                                {item.tools.map((tool, i) => (
                                  <span
                                    key={i}
                                    className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 text-zinc-300 border border-white/10"
                                  >
                                    {tool}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                        </div>
                      </TiltCard>
                    </div>

                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
