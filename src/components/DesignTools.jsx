import React, { useState } from 'react';
import { designTools } from '../data/portfolioData';
import { Cpu } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';

export default function DesignTools() {
  const [selectedTool, setSelectedTool] = useState(designTools[0]);

  return (
    <section id="tools" className="py-24 relative overflow-hidden">
      {/* Background radial glow with ambient drift */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-purple/15 rounded-full blur-[160px] pointer-events-none animate-ambient-drift transform-gpu will-change-transform" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Mission Statement Quote from Reference Image */}
        <ScrollReveal direction="up">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-cyan text-xs font-semibold uppercase tracking-wider">
              <Cpu className="w-3.5 h-3.5" />
              <span>Creative Ecosystem & Toolkit</span>
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-zinc-200 leading-relaxed max-w-2xl mx-auto">
              "I'm currently looking to join a cross-functional team that values improving people's lives through accessible design"
            </h3>
            <p className="text-xs text-zinc-500 font-mono tracking-widest uppercase">
              — Primary Creative Arsenal & Production Tools
            </p>
          </div>
        </ScrollReveal>

        {/* Constellation Canvas & Interactive Orb */}
        <div className="relative max-w-4xl mx-auto pt-6 pb-12">
          
          {/* Top Tool Nodes matching the reference layout */}
          <ScrollReveal direction="up" delay={200}>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 relative z-20 mb-8">
              {designTools.map((tool) => {
                const isSelected = selectedTool.id === tool.id;
                return (
                  <button
                    key={tool.id}
                    onClick={() => setSelectedTool(tool)}
                    className={`group relative flex flex-col items-center p-3 sm:p-4 rounded-2xl transition-all duration-300 transform-gpu ${
                      isSelected
                        ? 'scale-110 shadow-2xl bg-[#1e1e28]'
                        : 'hover:scale-105 bg-[#17171f]/80 hover:bg-[#1c1c24]'
                    } border`}
                    style={{
                      borderColor: isSelected ? tool.color : 'rgba(255, 255, 255, 0.08)',
                      boxShadow: isSelected ? `0 0 25px -5px ${tool.color}70` : undefined,
                    }}
                  >
                    {/* Tool Icon Box */}
                    <div
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center font-display font-black text-xl transition-transform duration-300 group-hover:scale-105 shadow-inner relative overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${tool.color}30, #131317)`,
                        color: tool.color,
                        border: `1.5px solid ${tool.color}60`,
                      }}
                    >
                      <span className="relative z-10">{tool.abbr}</span>
                      <div
                        className="absolute inset-0 opacity-20 blur-sm"
                        style={{ background: tool.color }}
                      />
                    </div>

                    {/* Tool Name Label */}
                    <span className="text-xs font-semibold text-zinc-300 mt-2.5 text-center group-hover:text-white transition-colors">
                      {tool.name.replace('Adobe ', '')}
                    </span>
                    
                    {/* Active Indicator dot */}
                    {isSelected && (
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-1 animate-ping"
                        style={{ background: tool.color }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Connected Fiber-Optic Lines SVG & Center Glowing Orb */}
          <ScrollReveal direction="fade" delay={350}>
            <div className="relative flex flex-col items-center justify-center min-h-[320px]">
              
              {/* SVG Glowing Curved Connecting Lines */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 800 320"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <linearGradient id="fiberGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#818cf8" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#6366f1" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#4338ca" stopOpacity="0.1" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Four curved lines from 4 tool positions down to center orb (400, 200) */}
                <path
                  d="M 180,20 C 220,100 350,150 400,200"
                  fill="none"
                  stroke={selectedTool.id === 'photoshop' ? selectedTool.color : 'url(#fiberGrad)'}
                  strokeWidth={selectedTool.id === 'photoshop' ? '2.5' : '1.2'}
                  filter="url(#glow)"
                  className="transition-all duration-500"
                />
                <path
                  d="M 320,20 C 340,100 380,150 400,200"
                  fill="none"
                  stroke={selectedTool.id === 'illustrator' ? selectedTool.color : 'url(#fiberGrad)'}
                  strokeWidth={selectedTool.id === 'illustrator' ? '2.5' : '1.2'}
                  filter="url(#glow)"
                  className="transition-all duration-500"
                />
                <path
                  d="M 480,20 C 460,100 420,150 400,200"
                  fill="none"
                  stroke={selectedTool.id === 'figma' ? selectedTool.color : 'url(#fiberGrad)'}
                  strokeWidth={selectedTool.id === 'figma' ? '2.5' : '1.2'}
                  filter="url(#glow)"
                  className="transition-all duration-500"
                />
                <path
                  d="M 620,20 C 580,100 450,150 400,200"
                  fill="none"
                  stroke={selectedTool.id === 'adobexd' ? selectedTool.color : 'url(#fiberGrad)'}
                  strokeWidth={selectedTool.id === 'adobexd' ? '2.5' : '1.2'}
                  filter="url(#glow)"
                  className="transition-all duration-500"
                />

                {/* Elliptical orbital rings around center orb with subtle dash animations */}
                <ellipse cx="400" cy="200" rx="350" ry="60" fill="none" stroke="#6366f1" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="6 4" />
                <ellipse cx="400" cy="205" rx="270" ry="45" fill="none" stroke="#3b82f6" strokeOpacity="0.3" strokeWidth="1" />
                <ellipse cx="400" cy="210" rx="180" ry="30" fill="none" stroke="#a855f7" strokeOpacity="0.35" strokeWidth="1" />
              </svg>

              {/* Central Glowing SMRH Orb */}
              <div className="relative z-10 mt-16 group">
                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr from-[#3b32b8] via-[#5241e3] to-[#7667ff] p-1 shadow-[0_0_70px_rgba(82,65,227,0.7)] flex items-center justify-center relative animate-pulse-slow transform-gpu will-change-transform">
                  
                  {/* Inner Orb Content with SMRH Logo */}
                  <div className="w-full h-full rounded-full bg-[#1b173d] flex flex-col items-center justify-center text-center p-3 border border-indigo-400/40">
                    <span className="font-display font-black text-2xl sm:text-3xl tracking-widest text-white drop-shadow">
                      SMRH
                    </span>
                    <span className="text-[8px] font-sans text-indigo-200 tracking-wider -mt-0.5">
                      S M A Rahman Hasan
                    </span>
                    <div className="w-8 h-0.5 bg-indigo-400/60 rounded-full mt-1.5" />
                  </div>

                  {/* Orbiting Tech Node 1 */}
                  <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-[#1b1b22] border border-brand-purple/50 flex items-center justify-center text-[9px] font-mono text-indigo-300 shadow animate-float transform-gpu will-change-transform">
                    UI
                  </div>

                  {/* Orbiting Tech Node 2 */}
                  <div className="absolute -bottom-2 -left-3 w-7 h-7 rounded-full bg-[#1b1b22] border border-blue-400/50 flex items-center justify-center text-[9px] font-mono text-cyan-300 shadow animate-float-slow transform-gpu will-change-transform">
                    UX
                  </div>
                </div>
              </div>

            </div>
          </ScrollReveal>

          {/* Selected Tool Details Card with 3D Tilt */}
          <ScrollReveal direction="up" delay={450}>
            <div className="mt-8 max-w-xl mx-auto">
              <TiltCard maxTilt={5} scale={1.01} className="rounded-2xl">
                <div className="p-6 rounded-2xl bg-[#1b1b22]/90 border border-white/10 shadow-xl transition-all duration-300 text-left">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-base shadow"
                        style={{
                          backgroundColor: `${selectedTool.color}20`,
                          borderColor: `${selectedTool.color}50`,
                          borderWidth: '1px',
                          color: selectedTool.color,
                        }}
                      >
                        {selectedTool.abbr}
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white">{selectedTool.name}</h4>
                        <p className="text-xs font-mono" style={{ color: selectedTool.color }}>{selectedTool.tagline}</p>
                      </div>
                    </div>
                    
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-zinc-300 font-mono">
                      {selectedTool.proficiency}
                    </span>
                  </div>

                  <p className="text-sm text-zinc-300 leading-relaxed mt-2">
                    {selectedTool.description}
                  </p>
                </div>
              </TiltCard>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
