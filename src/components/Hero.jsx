import React from 'react';
import { Mail, Sparkles, Send, MapPin, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:py-32 overflow-hidden">
      {/* Background radial glow accents with subtle GPU-accelerated drift */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-purple/20 rounded-full blur-[120px] pointer-events-none animate-ambient-drift transform-gpu will-change-transform" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-brand-blue/15 rounded-full blur-[140px] pointer-events-none animate-ambient-drift-rev transform-gpu will-change-transform" />
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-brand-purple/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Location & Status Badge */}
            <ScrollReveal direction="up" delay={50}>
              <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[#20202a]/80 border border-brand-purple/30 text-zinc-300 text-xs font-medium tracking-wide shadow-sm hover:border-brand-purple/60 transition-colors">
                <span className="flex items-center gap-1.5 text-zinc-300">
                  <MapPin className="w-3.5 h-3.5 text-brand-purple" />
                  <span>{personalInfo.location}</span>
                </span>
                <span className="w-1 h-1 rounded-full bg-zinc-600" />
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Available for Opportunities</span>
                </span>
              </div>
            </ScrollReveal>

            {/* Main Greeting and Name */}
            <ScrollReveal direction="up" delay={150}>
              <div className="space-y-1">
                <span className="text-xl sm:text-2xl font-medium text-zinc-300 block tracking-tight">
                  {personalInfo.bioHeadline}
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-white tracking-tight leading-none">
                  {personalInfo.firstName}
                </h1>
                {/* Massive stylized gradient "Hasan" */}
                <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black tracking-tight leading-none bg-gradient-to-b from-[#6474ff] via-[#4f5df3] to-[#3642b5] bg-clip-text text-transparent drop-shadow-[0_10px_30px_rgba(79,93,243,0.35)] select-none">
                  {personalInfo.lastName}
                </div>
              </div>
            </ScrollReveal>

            {/* Professional Title */}
            <ScrollReveal direction="up" delay={250}>
              <h2 className="text-base sm:text-lg md:text-xl font-semibold text-zinc-200 tracking-wide flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-brand-purple/15 text-indigo-300 border border-brand-purple/30 text-xs sm:text-sm font-medium">Graphic Designer</span>
                <span className="text-zinc-600">|</span>
                <span className="px-2.5 py-1 rounded-lg bg-blue-500/15 text-blue-300 border border-blue-500/30 text-xs sm:text-sm font-medium">UI/UX Designer</span>
                <span className="text-zinc-600">|</span>
                <span className="px-2.5 py-1 rounded-lg bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-xs sm:text-sm font-medium">Design Team Leader</span>
              </h2>
            </ScrollReveal>

            {/* Call-to-action buttons */}
            <ScrollReveal direction="up" delay={350}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                {/* Primary email contact button - exact mailto link */}
                <a
                  href="mailto:smarhasan.01@gmail.com"
                  className="px-7 py-3.5 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-[#6055f7] via-[#5044ea] to-[#3d65f5] hover:from-[#6d63ff] hover:to-[#4e74ff] shadow-glow-purple hover:shadow-[0_0_40px_rgba(96,85,247,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 group transform-gpu"
                >
                  <Mail className="w-4 h-4 text-white" />
                  <span>Contact Me</span>
                  <Send className="w-3.5 h-3.5 group-hover:translate-x-1.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </a>

                {/* Explore projects button */}
                <button
                  onClick={() => scrollTo('#projects')}
                  className="px-7 py-3.5 rounded-2xl text-sm font-semibold text-zinc-200 hover:text-white bg-[#1e1e26]/80 hover:bg-[#252532] border border-white/15 hover:border-brand-purple/60 hover:shadow-[0_0_30px_rgba(109,93,252,0.35)] hover:scale-105 active:scale-95 backdrop-blur-sm transition-all duration-300 flex items-center gap-2 group transform-gpu"
                >
                  <span>Featured Projects</span>
                  <ArrowRight className="w-4 h-4 text-brand-purple group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </ScrollReveal>

            {/* Bio Paragraph */}
            <ScrollReveal direction="up" delay={450}>
              <p className="text-zinc-400 text-sm sm:text-base max-w-xl leading-relaxed pt-2">
                {personalInfo.shortIntro}
              </p>
            </ScrollReveal>

            {/* Glowing purple horizontal divider line */}
            <ScrollReveal direction="up" delay={550}>
              <div className="w-full pt-4">
                <div className="h-[2px] w-full max-w-lg bg-gradient-to-r from-brand-purple/80 via-brand-blue/50 to-transparent rounded-full shadow-[0_0_15px_rgba(109,93,252,0.5)]" />
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: Hexagonal Profile Photo Showcase with smooth float animation & tilt */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            
            {/* Ambient Hexagon Glow Layers */}
            <div className="relative group animate-float transform-gpu will-change-transform">
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-purple via-brand-blue to-purple-600 rounded-[40px] opacity-40 blur-2xl group-hover:opacity-65 transition duration-700 animate-pulse-slow pointer-events-none" />
              
              {/* Outer Hexagonal Glowing Container with 3D Tilt */}
              <TiltCard maxTilt={6} scale={1.01} enableGlare={true} className="rounded-[36px]">
                <div className="relative p-2 rounded-[36px] bg-gradient-to-b from-brand-purple/40 via-white/5 to-brand-blue/20 backdrop-blur-sm border border-brand-purple/40 shadow-2xl">
                  
                  {/* Profile Image with fallback */}
                  <div className="relative overflow-hidden rounded-[30px] bg-[#141419] max-w-[340px] sm:max-w-[380px] md:max-w-[420px] aspect-[460/560]">
                    <img
                      src={personalInfo.profileImage}
                      alt={personalInfo.name}
                      onError={(e) => {
                        if (e.currentTarget.src !== personalInfo.profileImageFallback) {
                          e.currentTarget.src = personalInfo.profileImageFallback;
                        }
                      }}
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Gradient bottom overlay for smooth visual blending */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#171719] via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </TiltCard>

              {/* Floating Badge 1: Team Leader */}
              <div className="absolute -bottom-4 -left-6 sm:-left-8 px-4 py-2.5 rounded-2xl bg-[#1b1b24]/90 backdrop-blur-md border border-brand-purple/40 shadow-xl flex items-center gap-3 transform hover:scale-105 transition-transform animate-float-slow transform-gpu will-change-transform">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-brand-purple to-brand-blue flex items-center justify-center text-white shadow-md">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Design Team Leader</div>
                  <div className="text-[10px] text-zinc-400 font-mono">Head of Documents</div>
                </div>
              </div>

              {/* Floating Badge 2: UI/UX & Graphics */}
              <div className="hidden sm:flex absolute -top-4 -right-4 px-3.5 py-2 rounded-2xl bg-[#1b1b24]/90 backdrop-blur-md border border-white/10 shadow-xl items-center gap-2.5 animate-float transform-gpu will-change-transform">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan animate-ping" />
                <span className="text-xs font-semibold text-zinc-200">Graphic & UI/UX</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
