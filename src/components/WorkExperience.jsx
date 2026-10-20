import React, { useState } from 'react';
import { workExperience } from '../data/portfolioData';
import { Sparkles, Calendar, MapPin, CheckCircle, Briefcase, GraduationCap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';

const learningMilestones = [
  {
    id: "learn-1",
    period: "2023 - Present",
    role: "Advanced UI/UX & Design Systems",
    company: "Continuous Learning & Production Projects",
    location: "Online / Practical Work",
    badge: "Mastery",
    description: "Deep dive into scalable design systems in Figma, atomic component architectures, responsive auto-layout techniques, and interactive micro-interactions for modern web applications.",
    achievements: [
      "Completed comprehensive UI/UX case studies for mobile and SaaS interfaces",
      "Mastered Figma auto-layout 5.0, variants, component properties, and token structures",
      "Implemented accessibility contrast guidelines (WCAG 2.1 AA) across all UI deliverables"
    ]
  },
  {
    id: "learn-2",
    period: "2021 - 2023",
    role: "Commercial Graphic Design & Brand Identity",
    company: "Studio & Freelance Practice",
    location: "Chittagong, Bangladesh",
    badge: "Specialization",
    description: "Extensive hands-on execution of branding projects, vector logo systems, typography hierarchy, and social media advertising design across multiple client industries.",
    achievements: [
      "Designed dozens of brand identity systems and print-ready packaging assets",
      "Advanced mastery of vector pen tool workflows in Adobe Illustrator",
      "Created high-impact social media campaign creative suites with measurable engagement"
    ]
  },
  {
    id: "learn-3",
    period: "2019 - 2021",
    role: "Creative Foundations & Design Software Mastery",
    company: "Independent Exploration & Core Skill Building",
    location: "Chittagong, Bangladesh",
    badge: "Foundation",
    description: "Building foundational principles in color theory, geometric layouts, visual balance, photo manipulation, and digital asset composition using Adobe Photoshop.",
    achievements: [
      "Developed foundational design eye through daily design challenges and redesigns",
      "Mastered non-destructive layer editing, photo retouching, and masking techniques",
      "Established organized layer structuring and cross-platform export workflows"
    ]
  }
];

export default function WorkExperience() {
  const [activeTab, setActiveTab] = useState('experience');

  const timelineItems = activeTab === 'experience' ? workExperience : learningMilestones;

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#161619]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-brand-orange/10 rounded-full blur-[140px] pointer-events-none animate-ambient-drift-rev transform-gpu will-change-transform" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading matching reference image: "My Work Experience" with "My" in blue and "Work Experience" in warm gradient */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Career Milestones</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight">
              <span className="text-[#5569ff]">My </span>
              <span className="bg-gradient-to-r from-[#ff7a45] via-[#ff9248] to-[#ffaa5a] bg-clip-text text-transparent">
                Work Experience
              </span>
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              Practical experience, client collaborations, and dedicated design milestones.
            </p>

            {/* Tab Selector with smooth hover */}
            <div className="pt-4 flex items-center justify-center gap-3">
              <button
                onClick={() => setActiveTab('experience')}
                className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-semibold transition-all duration-300 transform-gpu ${
                  activeTab === 'experience'
                    ? 'bg-gradient-to-r from-brand-purple to-brand-blue text-white shadow-glow-purple scale-105'
                    : 'bg-[#202028] text-zinc-400 hover:text-white hover:scale-105 active:scale-95 border border-white/5'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>Work & Client Experience</span>
              </button>

              <button
                onClick={() => setActiveTab('learning')}
                className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-semibold transition-all duration-300 transform-gpu ${
                  activeTab === 'learning'
                    ? 'bg-gradient-to-r from-[#ff7a45] to-[#ffaa5a] text-zinc-950 font-bold shadow-lg scale-105'
                    : 'bg-[#202028] text-zinc-400 hover:text-white hover:scale-105 active:scale-95 border border-white/5'
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Projects & Learning Journey</span>
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative mt-16">
          
          {/* Vertical dashed center line matching reference design */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 border-l-2 border-dashed border-zinc-700 pointer-events-none" />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <ScrollReveal key={item.id} direction="up" delay={150 * (index + 1)}>
                  <div
                    className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
                  >
                    {/* Left Column (Company & Date on Desktop) */}
                    <div className={`md:col-span-5 text-left md:text-right ${isEven ? 'md:order-1' : 'md:order-3 md:text-left'}`}>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 md:justify-end text-xs font-mono text-zinc-400">
                          <Calendar className="w-3.5 h-3.5 text-brand-purple" />
                          <span>{item.period}</span>
                        </div>
                        <h3 className="text-xl font-bold font-display text-white">
                          {item.company}
                        </h3>
                        <div className="flex items-center gap-1.5 md:justify-end text-xs text-zinc-400">
                          <MapPin className="w-3 h-3 text-zinc-500" />
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Center Node Ring matching reference design */}
                    <div className="md:col-span-2 md:order-2 flex justify-center relative">
                      <div className="relative flex items-center justify-center">
                        {/* Outer pulsing ring */}
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#ff7a45]/30 to-[#ff9248]/10 animate-ping absolute pointer-events-none" />
                        
                        {/* Main Glowing Circle */}
                        <div className="w-9 h-9 rounded-full bg-[#171719] border-2 border-[#ff7a45] shadow-[0_0_15px_#ff7a45] flex items-center justify-center z-10 transition-transform duration-300 hover:scale-110">
                          <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-r from-[#ff7a45] to-[#ffaa5a]" />
                        </div>
                      </div>
                    </div>

                    {/* Right Column (Role & Details with 3D Tilt) */}
                    <div className={`md:col-span-5 text-left ${isEven ? 'md:order-3' : 'md:order-1'}`}>
                      <TiltCard maxTilt={5} scale={1.01} className="rounded-2xl">
                        <div className="p-6 rounded-2xl bg-[#1b1b22] border border-white/8 hover:border-brand-purple/40 transition-all duration-300 shadow-xl group">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-lg font-bold font-display text-white group-hover:text-indigo-300 transition-colors">
                              {item.role}
                            </h4>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-brand-purple border border-brand-purple/20">
                              {item.badge}
                            </span>
                          </div>

                          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                            {item.description}
                          </p>

                          {/* Achievements bullets */}
                          <div className="space-y-1.5 pt-3 border-t border-white/5">
                            {item.achievements.map((ach, i) => (
                              <div key={i} className="flex items-start gap-2 text-xs text-zinc-400">
                                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                <span>{ach}</span>
                              </div>
                            ))}
                          </div>
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
