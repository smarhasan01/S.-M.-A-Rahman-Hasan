import React from 'react';
import { skillsData } from '../data/portfolioData';
import { Sparkles, Palette, Layout, Users, Check } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';

const iconMap = {
  Palette: Palette,
  Layout: Layout,
  Users: Users,
};

const categoryAccents = {
  "Graphic Design": {
    badgeColor: "bg-purple-500/15 text-purple-300 border-purple-500/30",
    glow: "rgba(168, 85, 247, 0.2)",
    iconBg: "bg-purple-500/10 text-purple-400 border-purple-500/20"
  },
  "UI/UX Design": {
    badgeColor: "bg-blue-500/15 text-blue-300 border-blue-500/30",
    glow: "rgba(59, 130, 246, 0.2)",
    iconBg: "bg-blue-500/10 text-blue-400 border-blue-500/20"
  },
  "Professional Skills": {
    badgeColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    glow: "rgba(16, 185, 129, 0.2)",
    iconBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#161619]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-brand-blue/10 rounded-full blur-[140px] pointer-events-none animate-ambient-drift transform-gpu will-change-transform" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Competencies & Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tight">
              Skills & Creative Arsenal
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              Specialized proficiencies across visual communication, user interface design, instructional training, and workflow leadership.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Categories Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((category, catIdx) => {
            const Icon = iconMap[category.icon] || Palette;
            const style = categoryAccents[category.category] || categoryAccents["Graphic Design"];

            return (
              <ScrollReveal key={catIdx} direction="up" delay={150 * (catIdx + 1)}>
                <TiltCard maxTilt={6} scale={1.02} className="h-full rounded-3xl">
                  <div className="p-8 rounded-3xl bg-[#1b1b22] border border-white/8 hover:border-brand-purple/40 shadow-xl text-left h-full flex flex-col justify-between group transition-all duration-300">
                    
                    <div>
                      {/* Category Header */}
                      <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6">
                        <div className="flex items-center gap-3">
                          <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${style.iconBg} group-hover:scale-110 transition-transform`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold font-display text-white tracking-wide">
                              {category.category}
                            </h3>
                            <span className="text-[10px] text-zinc-500 font-mono">
                              {category.skills.length} Capabilities
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
                        {category.description}
                      </p>

                      {/* Skills Badges / Pills */}
                      <div className="flex flex-wrap gap-2.5">
                        {category.skills.map((skill, sIdx) => (
                          <div
                            key={sIdx}
                            className="px-3.5 py-2 rounded-xl text-xs font-medium bg-[#141418] hover:bg-[#202028] text-zinc-200 hover:text-white border border-white/8 hover:border-brand-purple/40 flex items-center gap-2 transition-all duration-200 hover:scale-[1.03]"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-purple" />
                            <span>{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom verification badge */}
                    <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                      <span className="flex items-center gap-1.5 text-zinc-400">
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Applied & Active</span>
                      </span>
                      <span>SMRH Portfolio</span>
                    </div>

                  </div>
                </TiltCard>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
