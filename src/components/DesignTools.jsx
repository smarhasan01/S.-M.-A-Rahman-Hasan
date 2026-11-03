import React, { useState } from 'react';
import { designTools, personalInfo } from '../data/portfolioData';
import { Cpu } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';

// Official Canva Brand Vector (authentic Canva gradient disc with calligraphic script 'C')
const CanvaOfficialLogo = ({ className = "w-8 h-8 sm:w-9 sm:h-9" }) => (
  <svg
    viewBox="0 0 64 64"
    className={`${className} relative z-10 transition-transform duration-300 drop-shadow`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Official Canva Logo"
  >
    <defs>
      <linearGradient id="canvaOfficialBrandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00C4CC" />
        <stop offset="50%" stopColor="#00B4D8" />
        <stop offset="100%" stopColor="#7D2AE8" />
      </linearGradient>
    </defs>
    <circle cx="32" cy="32" r="30" fill="url(#canvaOfficialBrandGrad)" />
    <path
      fill="#FFFFFF"
      d="M45.6,43.1c-1.7,2.3-3.9,4.7-6.8,6.5c-2.8,1.8-6,3.2-9.8,3.2c-3.5,0-6.4-1.8-8-3.3c-2.4-2.3-3.7-5.6-4.1-8.7 c-1.2-9.6,4.7-22.3,13.8-27.8c2.1-1.3,4.4-1.9,6.6-1.9c4.4,0,7.7,3.1,8.1,6.9c0.4,3.4-0.9,6.3-4.7,8.2c-1.9,1-2.9,0.9-3.2,0.5 c-0.2-0.3-0.1-0.8,0.3-1.1c3.5-2.9,3.6-5.3,3.2-8.7c-0.3-2.2-1.7-3.6-3.3-3.6c-6.9,0-16.9,15.5-15.5,26.7c0.5,4.4,3.2,9.5,8.8,9.5 c1.8,0,3.8-0.5,5.5-1.4c3.9-2,5.6-3.4,7.9-6.6c0.3-0.4,0.6-0.9,0.9-1.3c0.2-0.4,0.6-0.5,0.9-0.5c0.3,0,0.7,0.3,0.7,0.8 c0,0.3-0.1,0.9-0.5,1.4C46.3,42.1,46,42.7,45.6,43.1L45.6,43.1z"
    />
  </svg>
);

export default function DesignTools() {
  const [selectedTool, setSelectedTool] = useState(designTools[0]);

  // Both categories remain visible simultaneously
  // Active highlight state corresponds to the selected tool's discipline
  const isGdActive = ['photoshop', 'illustrator', 'canva'].includes(selectedTool.id);
  const isUiUxActive = ['figma', 'adobexd'].includes(selectedTool.id);

  return (
    <section id="tools" className="py-24 relative overflow-hidden scroll-mt-24">
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
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 md:gap-7 relative z-20 mb-8">
              {designTools.map((tool) => {
                const isSelected = selectedTool.id === tool.id;
                return (
                  <button
                    key={tool.id}
                    onClick={() => setSelectedTool(tool)}
                    aria-label={`Select ${tool.name}`}
                    className={`group relative flex flex-col items-center p-3 sm:p-4 rounded-2xl transition-all duration-300 ease-out transform-gpu cursor-pointer select-none ${
                      isSelected
                        ? 'scale-110 shadow-2xl bg-[#1e1e28] ring-2 ring-offset-2 ring-offset-[#171719]'
                        : 'hover:scale-105 bg-[#17171f]/80 hover:bg-[#1c1c24]'
                    } border`}
                    style={{
                      borderColor: isSelected ? tool.color : 'rgba(255, 255, 255, 0.08)',
                      boxShadow: isSelected
                        ? `0 0 32px -4px ${tool.color}80, 0 8px 24px -4px rgba(0,0,0,0.6)`
                        : undefined,
                      ringColor: isSelected ? `${tool.color}70` : undefined,
                    }}
                  >
                    {/* Soft pulsing ambient glow behind active card */}
                    {isSelected && (
                      <div
                        className="absolute -inset-1 rounded-2xl opacity-40 blur-md pointer-events-none transition-opacity duration-300 animate-pulse-slow"
                        style={{ background: tool.color }}
                      />
                    )}

                    {/* Tool Icon Box */}
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center font-display font-black text-xl transition-all duration-300 shadow-inner relative overflow-hidden ${
                        isSelected ? 'scale-105' : 'group-hover:scale-105'
                      }`}
                      style={{
                        background: isSelected
                          ? `linear-gradient(135deg, ${tool.color}40, #161622)`
                          : `linear-gradient(135deg, ${tool.color}25, #131317)`,
                        color: tool.color,
                        border: isSelected
                          ? `2px solid ${tool.color}`
                          : `1.5px solid ${tool.color}50`,
                        boxShadow: isSelected
                          ? `inset 0 0 16px ${tool.color}35, 0 0 20px ${tool.color}40`
                          : undefined,
                      }}
                    >
                      {tool.id === 'canva' ? (
                        <CanvaOfficialLogo className="w-8 h-8 sm:w-9 sm:h-9" />
                      ) : (
                        <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                          {tool.abbr}
                        </span>
                      )}
                      <div
                        className="absolute inset-0 opacity-20 blur-sm pointer-events-none"
                        style={{ background: tool.color }}
                      />
                    </div>

                    {/* Tool Name Label */}
                    <span
                      className={`text-xs font-semibold mt-2.5 text-center transition-colors duration-200 ${
                        isSelected ? 'text-white font-bold' : 'text-zinc-300 group-hover:text-white'
                      }`}
                    >
                      {tool.name.replace('Adobe ', '')}
                    </span>
                    
                    {/* Active Indicator dot */}
                    <div className="h-2 flex items-center justify-center mt-1.5">
                      {isSelected ? (
                        <div className="flex items-center gap-1 animate-fadeIn">
                          <span
                            className="w-1.5 h-1.5 rounded-full animate-ping"
                            style={{ background: tool.color }}
                          />
                          <span
                            className="w-1.5 h-1.5 rounded-full shadow-[0_0_8px]"
                            style={{ background: tool.color, color: tool.color }}
                          />
                        </div>
                      ) : (
                        <div className="w-1 h-1 rounded-full bg-white/10 group-hover:bg-white/30 transition-colors" />
                      )}
                    </div>
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

                {/* Five curved lines from 5 tool positions down to center orb (400, 200) */}
                <path
                  d="M 130,20 C 180,100 340,150 400,200"
                  fill="none"
                  stroke={selectedTool.id === 'photoshop' ? selectedTool.color : 'url(#fiberGrad)'}
                  strokeWidth={selectedTool.id === 'photoshop' ? '3' : '1.2'}
                  filter="url(#glow)"
                  className="transition-all duration-500"
                />
                <path
                  d="M 265,20 C 300,100 370,150 400,200"
                  fill="none"
                  stroke={selectedTool.id === 'illustrator' ? selectedTool.color : 'url(#fiberGrad)'}
                  strokeWidth={selectedTool.id === 'illustrator' ? '3' : '1.2'}
                  filter="url(#glow)"
                  className="transition-all duration-500"
                />
                <path
                  d="M 400,20 C 400,80 400,140 400,200"
                  fill="none"
                  stroke={selectedTool.id === 'canva' ? selectedTool.color : 'url(#fiberGrad)'}
                  strokeWidth={selectedTool.id === 'canva' ? '3' : '1.2'}
                  filter="url(#glow)"
                  className="transition-all duration-500"
                />
                <path
                  d="M 535,20 C 500,100 430,150 400,200"
                  fill="none"
                  stroke={selectedTool.id === 'figma' ? selectedTool.color : 'url(#fiberGrad)'}
                  strokeWidth={selectedTool.id === 'figma' ? '3' : '1.2'}
                  filter="url(#glow)"
                  className="transition-all duration-500"
                />
                <path
                  d="M 670,20 C 620,100 460,150 400,200"
                  fill="none"
                  stroke={selectedTool.id === 'adobexd' ? selectedTool.color : 'url(#fiberGrad)'}
                  strokeWidth={selectedTool.id === 'adobexd' ? '3' : '1.2'}
                  filter="url(#glow)"
                  className="transition-all duration-500"
                />

                {/* Elliptical orbital rings around center orb with subtle dash animations */}
                <ellipse cx="400" cy="200" rx="350" ry="60" fill="none" stroke="#6366f1" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="6 4" />
                <ellipse cx="400" cy="205" rx="270" ry="45" fill="none" stroke="#3b82f6" strokeOpacity="0.3" strokeWidth="1" />
                <ellipse cx="400" cy="210" rx="180" ry="30" fill="none" stroke="#a855f7" strokeOpacity="0.35" strokeWidth="1" />
              </svg>

              {/* Central Glowing Orb with SMA Brand Logo */}
              <div className="relative z-10 mt-16 group">
                <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-gradient-to-tr from-[#3b32b8] via-[#5241e3] to-[#7667ff] p-1 shadow-[0_0_70px_rgba(82,65,227,0.7)] flex items-center justify-center relative animate-pulse-slow transform-gpu will-change-transform">
                  
                  {/* Inner Orb Content with Original SMA Brand Logo */}
                  <div className="w-full h-full rounded-full bg-[#1b173d] flex flex-col items-center justify-center text-center p-3 border border-indigo-400/40 overflow-hidden">
                    <img
                      src={personalInfo.logoImage}
                      alt="S M A RAHMAN HASAN"
                      className="max-h-11 sm:max-h-12 w-auto max-w-[110px] object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    <span className="text-[8px] sm:text-[9px] font-sans font-medium text-indigo-200 tracking-wider mt-1 select-none whitespace-nowrap uppercase">
                      S M A RAHMAN HASAN
                    </span>
                    <div className="w-8 h-0.5 bg-indigo-400/60 rounded-full mt-1" />
                  </div>

                  {/* Orbiting Category Node 1: Graphic Design (GD) */}
                  <div
                    key={`orbit-gd-${selectedTool.id}`}
                    className={`absolute -top-3.5 -right-4 sm:-right-8 px-3 sm:px-3.5 py-1.5 rounded-full border flex items-center gap-1.5 shadow-xl transition-all duration-300 animate-float animate-orbit-entrance select-none ${
                      isGdActive
                        ? 'bg-gradient-to-r from-[#441875] to-[#6d28d9] border-purple-400 text-white shadow-[0_0_24px_rgba(168,85,247,0.7)] scale-105 ring-1 ring-purple-400/60'
                        : 'bg-[#181824]/95 border-purple-500/30 text-purple-200/80 hover:border-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.2)]'
                    }`}
                    style={{ animationDuration: '4s' }}
                    title="Graphic Design (GD)"
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full transition-colors ${
                        isGdActive ? 'bg-purple-300 animate-ping' : 'bg-purple-400/60'
                      }`}
                    />
                    <span className="font-mono font-bold text-[10px] sm:text-xs tracking-wider whitespace-nowrap">
                      <span className="hidden sm:inline">Graphic Design (GD)</span>
                      <span className="sm:hidden">GD</span>
                    </span>
                  </div>

                  {/* Orbiting Category Node 2: UI & UX */}
                  <div
                    key={`orbit-uiux-${selectedTool.id}`}
                    className={`absolute -bottom-3.5 -left-4 sm:-left-8 px-3 sm:px-3.5 py-1.5 rounded-full border flex items-center gap-1.5 shadow-xl transition-all duration-300 animate-float-slow animate-orbit-entrance select-none ${
                      isUiUxActive
                        ? 'bg-gradient-to-r from-[#0c395c] to-[#0284c7] border-cyan-400 text-white shadow-[0_0_24px_rgba(56,189,248,0.7)] scale-105 ring-1 ring-cyan-400/60'
                        : 'bg-[#181824]/95 border-cyan-500/30 text-cyan-200/80 hover:border-cyan-400 shadow-[0_0_12px_rgba(56,189,248,0.2)]'
                    }`}
                    style={{ animationDuration: '5.5s' }}
                    title="UI & UX"
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full transition-colors ${
                        isUiUxActive ? 'bg-cyan-300 animate-ping' : 'bg-cyan-400/60'
                      }`}
                    />
                    <span className="font-mono font-bold text-[10px] sm:text-xs tracking-wider whitespace-nowrap">
                      UI & UX
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </ScrollReveal>

          {/* Selected Tool Details Card with 3D Tilt & Smooth Entrance */}
          <ScrollReveal direction="up" delay={450}>
            <div className="mt-8 max-w-xl mx-auto">
              <TiltCard maxTilt={5} scale={1.01} className="rounded-2xl">
                <div
                  key={selectedTool.id}
                  className="p-6 rounded-2xl bg-[#1b1b22]/95 border shadow-2xl transition-all duration-300 text-left animate-card-appear transform-gpu"
                  style={{
                    borderColor: `${selectedTool.color}50`,
                    boxShadow: `0 14px 35px -8px ${selectedTool.color}30, 0 4px 16px rgba(0,0,0,0.5)`,
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center font-bold text-base shadow transition-transform duration-300"
                        style={{
                          backgroundColor: `${selectedTool.color}20`,
                          borderColor: `${selectedTool.color}50`,
                          borderWidth: '1.5px',
                          color: selectedTool.color,
                          boxShadow: `0 0 15px ${selectedTool.color}30`,
                        }}
                      >
                        {selectedTool.id === 'canva' ? (
                          <CanvaOfficialLogo className="w-6 h-6" />
                        ) : (
                          selectedTool.abbr
                        )}
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white flex items-center gap-2">
                          <span>{selectedTool.name}</span>
                          <span
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ background: selectedTool.color }}
                          />
                        </h4>
                        <p className="text-xs font-mono" style={{ color: selectedTool.color }}>
                          {selectedTool.tagline}
                        </p>
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
