import React from 'react';
import { Sparkles, Palette, Layout, Users, Mail, ArrowRight } from 'lucide-react';
import { personalInfo, aboutContent } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';

const pillars = [
  {
    icon: Palette,
    title: "Graphic Design & Branding",
    description: "Visual identity, print assets, marketing collaterals, and spatial branding solutions tailored for commercial impact.",
    color: "#a855f7"
  },
  {
    icon: Layout,
    title: "UI/UX & Website Design",
    description: "Modern, responsive website interface design focused on clear visual hierarchy, usability, and intuitive user experiences.",
    color: "#3b82f6"
  },
  {
    icon: Users,
    title: "Design Leadership & Training",
    description: "Leading document preparation workflows, mentoring students in graphic design, and guiding team project execution.",
    color: "#10b981"
  },
];

export default function About() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#161619] scroll-mt-24">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-purple/10 rounded-full blur-[100px] pointer-events-none animate-ambient-drift transform-gpu will-change-transform" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Me</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tight">
              Design Philosophy & <span className="bg-gradient-to-r from-brand-purple via-indigo-400 to-brand-blue bg-clip-text text-transparent">Creative Journey</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Graphic Designer, UI/UX Designer, and Design Team Leader based in Bangladesh.
            </p>
          </div>
        </ScrollReveal>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Bio & Professional Pillars */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <ScrollReveal direction="up" delay={100}>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight leading-snug">
                Creative Solutions Through Visual Communication & Purposeful Design
              </h3>
            </ScrollReveal>

            {/* Exact About Text requested by user */}
            <ScrollReveal direction="up" delay={200}>
              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed bg-[#1b1b22]/70 p-6 rounded-2xl border border-white/5">
                {aboutContent.paragraph}
              </p>
            </ScrollReveal>

            {/* Three Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {pillars.map((p, i) => {
                const Icon = p.icon;
                return (
                  <ScrollReveal key={i} direction="up" delay={300 + i * 100}>
                    <TiltCard maxTilt={6} scale={1.02} className="h-full rounded-2xl">
                      <div className="p-4 rounded-2xl bg-[#1b1b22]/90 border border-white/5 hover:border-brand-purple/40 shadow-lg transition-all duration-300 group h-full flex flex-col justify-between">
                        <div>
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                            style={{
                              backgroundColor: `${p.color}15`,
                              borderColor: `${p.color}35`,
                              borderWidth: '1px',
                              color: p.color
                            }}
                          >
                            <Icon className="w-5 h-5" />
                          </div>
                          <h4 className="text-sm font-bold text-white mt-3 group-hover:text-indigo-300 transition-colors">
                            {p.title}
                          </h4>
                          <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                            {p.description}
                          </p>
                        </div>
                      </div>
                    </TiltCard>
                  </ScrollReveal>
                );
              })}
            </div>

            {/* Quick Actions */}
            <ScrollReveal direction="up" delay={550}>
              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <a
                  href="mailto:smarhasan.01@gmail.com"
                  className="px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-brand-purple to-brand-blue hover:shadow-glow-purple hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 group"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send an Email</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                </a>

                <button
                  onClick={() => scrollTo('#experience')}
                  className="px-6 py-3 rounded-xl text-sm font-medium text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 hover:border-brand-purple/40 hover:scale-105 active:scale-95 border border-white/10 transition-all duration-300"
                >
                  View Experience Timeline
                </button>
              </div>
            </ScrollReveal>

          </div>

          {/* Right: Actual Profile Picture Showcase in About Section */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <ScrollReveal direction="up" delay={250}>
              <TiltCard maxTilt={6} scale={1.01} className="w-full max-w-sm rounded-3xl">
                <div className="relative p-2.5 rounded-3xl bg-gradient-to-b from-brand-purple/30 via-white/5 to-brand-blue/20 backdrop-blur-sm border border-brand-purple/40 shadow-2xl overflow-hidden group">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#141419]">
                    <img
                      src={personalInfo.profileImage}
                      alt={personalInfo.name}
                      onError={(e) => {
                        if (e.currentTarget.src !== personalInfo.profileImageFallback) {
                          e.currentTarget.src = personalInfo.profileImageFallback;
                        }
                      }}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#141419] via-[#141419]/70 to-transparent p-4 flex flex-col justify-end text-left">
                      <span className="text-white font-bold text-base block font-display">
                        {personalInfo.name}
                      </span>
                      <span className="text-xs text-indigo-300 font-mono block">
                        Graphic & UI/UX Designer • Team Leader
                      </span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>

            {/* Quick Location badge under picture */}
            <div className="mt-4 flex items-center gap-2 text-xs text-zinc-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Based in Bangladesh • Open to Collaborations</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
