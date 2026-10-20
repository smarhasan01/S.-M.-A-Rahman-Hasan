import React, { useState } from 'react';
import { portfolioCategories, portfolioProjects } from '../data/portfolioData';
import ProjectCardVisual from './ProjectCardVisual';
import { Sparkles, Eye, ArrowUpRight, Filter } from 'lucide-react';

export default function Portfolio({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-blue/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Creative Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tight">
            Featured Portfolio Projects
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            A curated collection of branding, logo design, user interfaces, marketing creatives, and photorealistic mockups.
          </p>
        </div>

        {/* Category Filters Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {portfolioCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-gradient-to-r from-brand-purple to-brand-blue shadow-glow-purple scale-105'
                    : 'text-zinc-400 hover:text-white bg-[#1e1e26] hover:bg-[#252532] border border-white/5'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer rounded-3xl bg-[#1b1b22] border border-white/8 hover:border-brand-purple/40 shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
            >
              {/* Visual Showcase Box */}
              <div className="relative overflow-hidden border-b border-white/5">
                <ProjectCardVisual
                  type={project.visualType}
                  title={project.title}
                  accentColor={project.accentColor}
                />
                
                {/* Overlay hover prompt */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-4 py-2 rounded-xl bg-white text-zinc-900 text-xs font-bold shadow-lg flex items-center gap-1.5 transform scale-90 group-hover:scale-100 transition-transform">
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>

                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-lg text-[10px] font-semibold bg-black/70 text-indigo-300 backdrop-blur-md border border-white/10">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Card Info */}
              <div className="p-6 text-left flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-zinc-400 mb-2 font-mono">
                    <span>{project.client}</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="text-lg font-bold font-display text-white group-hover:text-indigo-300 transition-colors line-clamp-1">
                    {project.title}
                  </h3>

                  <p className="text-xs text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Tags row & CTA */}
                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                    {project.tags.slice(0, 2).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[10px] bg-white/5 text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-medium text-brand-purple group-hover:text-indigo-300 flex items-center gap-1">
                    <span>Details</span>
                    <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-16 text-center">
          <p className="text-xs text-zinc-400">
            Have a project in mind? All designs can be customized to match your brand requirements.
          </p>
        </div>

      </div>
    </section>
  );
}
