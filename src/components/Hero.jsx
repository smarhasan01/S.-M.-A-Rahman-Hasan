import React from 'react';
import { ArrowRight, Mail, Sparkles, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:py-32 overflow-hidden">
      {/* Background radial glow accents matching the reference aesthetic */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-purple/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-brand-blue/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-brand-purple/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Small Intro Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#20202a]/80 border border-brand-purple/30 text-zinc-300 text-xs font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Creative Projects</span>
            </div>

            {/* Main Greeting and Name */}
            <div className="space-y-1">
              <span className="text-xl sm:text-2xl font-medium text-zinc-300 block tracking-tight">
                Hi, It's
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-white tracking-tight leading-none">
                S M A Rahman
              </h1>
              {/* Massive stylized gradient "Hasan" matching reference image */}
              <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black tracking-tight leading-none bg-gradient-to-b from-[#6474ff] via-[#4f5df3] to-[#3642b5] bg-clip-text text-transparent drop-shadow-[0_10px_30px_rgba(79,93,243,0.35)] select-none">
                Hasan
              </div>
            </div>

            {/* Subtitle */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-zinc-200 tracking-wide flex items-center gap-3">
              <span>Graphic Designer & UI/UX Designer</span>
            </h2>

            {/* Call-to-action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => scrollTo('#contact')}
                className="px-7 py-3.5 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-[#6055f7] via-[#5044ea] to-[#3d65f5] hover:from-[#6d63ff] hover:to-[#4e74ff] shadow-glow-purple hover:shadow-[0_0_40px_rgba(96,85,247,0.6)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2 group"
              >
                <span>Hire Me</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={() => scrollTo('#contact')}
                className="px-7 py-3.5 rounded-2xl text-sm font-semibold text-zinc-200 hover:text-white bg-[#1e1e26]/80 hover:bg-[#252532] border border-white/15 hover:border-brand-purple/50 backdrop-blur-sm transform hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-brand-purple" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Bio Paragraph */}
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl leading-relaxed pt-2">
              {personalInfo.shortIntro}
            </p>

            {/* Glowing purple horizontal divider line matching reference image */}
            <div className="w-full pt-4">
              <div className="h-[2px] w-full max-w-lg bg-gradient-to-r from-brand-purple/80 via-brand-blue/50 to-transparent rounded-full shadow-[0_0_15px_rgba(109,93,252,0.5)]" />
            </div>

          </div>

          {/* Right Column: Hexagonal Profile Photo Showcase */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            
            {/* Ambient Hexagon Glow Layers */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-purple via-brand-blue to-purple-600 rounded-[40px] opacity-40 blur-2xl group-hover:opacity-60 transition duration-700 animate-pulse-slow" />
              
              {/* Outer Hexagonal Glowing Container */}
              <div className="relative p-2 rounded-[36px] bg-gradient-to-b from-brand-purple/40 via-white/5 to-brand-blue/20 backdrop-blur-sm border border-brand-purple/40 shadow-2xl">
                
                {/* Profile Image extracted directly from reference */}
                <div className="relative overflow-hidden rounded-[30px] bg-[#141419] max-w-[340px] sm:max-w-[380px] md:max-w-[420px] aspect-[460/560]">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-center transform group-hover:scale-102 transition-transform duration-700"
                  />

                  {/* Gradient bottom overlay for smooth visual blending */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#171719] via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating Badge 1: UI/UX & Visuals */}
              <div className="absolute -bottom-4 -left-6 sm:-left-8 px-4 py-2.5 rounded-2xl bg-[#1b1b24]/90 backdrop-blur-md border border-brand-purple/40 shadow-xl flex items-center gap-3 transform hover:scale-105 transition-transform">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-brand-purple to-brand-blue flex items-center justify-center text-white shadow-md">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Visual & UI/UX</div>
                  <div className="text-[10px] text-zinc-400 font-mono">Pixel-Perfect Design</div>
                </div>
              </div>

              {/* Floating Badge 2: Brand Identity */}
              <div className="hidden sm:flex absolute -top-4 -right-4 px-3.5 py-2 rounded-2xl bg-[#1b1b24]/90 backdrop-blur-md border border-white/10 shadow-xl items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan animate-ping" />
                <span className="text-xs font-semibold text-zinc-200">Creative Direction</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
