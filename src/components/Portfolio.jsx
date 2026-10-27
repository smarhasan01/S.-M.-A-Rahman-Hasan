import React from 'react';
import { featuredProjects } from '../data/portfolioData';
import ProjectCardVisual from './ProjectCardVisual';
import { Sparkles, ArrowUpRight, FolderGit2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';

export default function Portfolio({ onSelectProject }) {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Anchor for portfolio alias */}
      <div id="portfolio" className="absolute -top-24 left-0 pointer-events-none" />
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-[140px] pointer-events-none animate-ambient-drift transform-gpu will-change-transform" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-blue/10 rounded-full blur-[140px] pointer-events-none animate-ambient-drift-rev transform-gpu will-change-transform" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Selected Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tight">
              Featured Design Projects
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              Real-world branding, promotional graphics, and UI design projects led and executed with precision.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Featured Projects Grid with 3D Tilt and ScrollReveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ScrollReveal key={project.id} direction="up" delay={120 * (index + 1)}>
              <TiltCard maxTilt={7} scale={1.02} className="h-full rounded-3xl">
                <div
                  onClick={() => onSelectProject(project)}
                  className="group cursor-pointer rounded-3xl bg-[#1b1b22] border border-white/8 hover:border-brand-purple/50 shadow-xl overflow-hidden transition-all duration-300 flex flex-col justify-between h-full"
                >
                  {/* Visual Showcase Box */}
                  <div className="relative overflow-hidden border-b border-white/5">
                    <ProjectCardVisual
                      type={project.visualType}
                      title={project.title}
                      accentColor={project.accentColor}
                    />
                    
                    {/* Overlay hover prompt */}
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                      <span className="px-4 py-2 rounded-xl bg-white text-zinc-900 text-xs font-bold shadow-lg flex items-center gap-1.5 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                        <span>View Project Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-lg text-[10px] font-semibold bg-black/70 text-indigo-300 backdrop-blur-md border border-white/10 shadow">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Card Info */}
                  <div className="p-6 text-left flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs text-zinc-400 mb-2 font-mono">
                        <span className="text-brand-purple font-medium">{project.organization}</span>
                        <span>{project.duration}</span>
                      </div>

                      <h3 className="text-lg font-bold font-display text-white group-hover:text-indigo-300 transition-colors line-clamp-1">
                        {project.title}
                      </h3>

                      <p className="text-xs text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                        {project.summary}
                      </p>
                    </div>

                    {/* Tools and Details Trigger */}
                    <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                        {project.tools.slice(0, 2).map((tool, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded text-[10px] bg-white/5 text-zinc-400 font-mono"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>

                      <span className="text-xs font-medium text-brand-purple group-hover:text-indigo-300 flex items-center gap-1 transition-colors">
                        <span>Details</span>
                        <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Call to action note */}
        <ScrollReveal direction="fade" delay={300}>
          <div className="mt-14 p-6 rounded-2xl bg-[#1b1b22]/60 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto text-left">
            <div>
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <FolderGit2 className="w-4 h-4 text-brand-purple" />
                <span>Need a customized design solution for your brand or product?</span>
              </h4>
              <p className="text-xs text-zinc-400 mt-0.5">
                Available for branding, marketing collaterals, website UI design, and creative direction.
              </p>
            </div>
            <a
              href="mailto:smarhasan.01@gmail.com"
              className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-brand-purple to-brand-blue hover:shadow-glow-purple hover:scale-105 active:scale-95 transition-all flex-shrink-0"
            >
              Get in Touch
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
