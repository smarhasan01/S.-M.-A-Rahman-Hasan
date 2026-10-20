import React from 'react';
import { Sparkles, Eye, Layers, Compass, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const values = [
  {
    icon: Eye,
    title: "Visual Communication",
    description: "Translating complex ideas into compelling visual stories that resonate instantly with audiences.",
  },
  {
    icon: Layers,
    title: "User-Centered UI/UX",
    description: "Designing digital interfaces that balance modern aesthetics with effortless, intuitive functionality.",
  },
  {
    icon: Compass,
    title: "Distinctive Branding",
    description: "Creating recognizable, scalable identity systems from memorable logomarks to cohesive design tokens.",
  },
];

export default function About() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-purple/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tight">
            Crafting Visual Stories & <span className="bg-gradient-to-r from-brand-purple via-indigo-400 to-brand-blue bg-clip-text text-transparent">Meaningful Experiences</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            I am a creative designer driven by passion for visual communication, modern branding, and clean digital product design.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Bio & Highlights */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
              Hello! I'm <span className="text-indigo-400">S. M. A. Rahman Hasan</span>, based in Bangladesh & working with clients globally.
            </h3>

            <p className="text-zinc-300 text-base leading-relaxed">
              With a strong background in both <span className="text-white font-medium">Graphic Design</span> and <span className="text-white font-medium">UI/UX Design</span>, I bridge the gap between creative visual artistry and functional product experiences. Whether crafting a bold new brand identity, designing responsive mobile interfaces, or developing high-converting marketing collaterals, my approach is grounded in clarity, purpose, and attention to detail.
            </p>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Every design decision I make is intentional—focusing on visual hierarchy, accessibility, typography balance, and brand consistency that leaves a lasting impression on users and drives measurable results for businesses.
            </p>

            {/* Core Values / Strengths List */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-[#1b1b22]/80 border border-white/5 hover:border-brand-purple/30 transition-all duration-300 group hover:-translate-y-1"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple group-hover:scale-110 group-hover:bg-brand-purple group-hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-white mt-3">{v.title}</h4>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">{v.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Quick Actions */}
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <button
                onClick={() => scrollTo('#portfolio')}
                className="px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-brand-purple to-brand-blue hover:shadow-glow-purple transition-all flex items-center gap-2 group"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollTo('#contact')}
                className="px-6 py-3 rounded-xl text-sm font-medium text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                Get In Touch
              </button>
            </div>

          </div>

          {/* Right: Stats Counter Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {personalInfo.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#1b1b24]/90 border border-white/5 hover:border-brand-purple/40 shadow-xl transition-all duration-300 hover:-translate-y-1 text-center group relative overflow-hidden"
              >
                <div className="absolute -right-8 -top-8 w-24 h-24 bg-brand-purple/10 rounded-full blur-xl group-hover:bg-brand-purple/25 transition-all" />
                
                <div className="text-4xl sm:text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-indigo-200 to-brand-purple tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-zinc-400 mt-2">
                  {stat.label}
                </div>
              </div>
            ))}

            {/* Design Philosophy Card */}
            <div className="col-span-2 p-6 rounded-2xl bg-gradient-to-r from-[#211f32] to-[#1a1b29] border border-brand-purple/30 shadow-lg text-left relative overflow-hidden">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Client-Centered Workflow</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">Iterative feedback, clear timelines & transparent communication</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
