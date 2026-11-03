import React, { useState } from 'react';
import { designTools, personalInfo } from '../data/portfolioData';
import { Cpu } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';

// Authentic Canva Vector Brand Mark (Simple Icons standard)
const CanvaIcon = ({ className = "w-8 h-8" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-label="Canva Logo"
  >
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12s12-5.373 12-12S18.627 0 12 0M6.962 7.68c.754 0 1.337.549 1.405 1.2c.069.583-.171 1.097-.822 1.406c-.343.171-.48.172-.549.069c-.034-.069 0-.137.069-.206c.617-.514.617-.926.548-1.508c-.034-.378-.308-.618-.583-.618c-1.2 0-2.914 2.674-2.674 4.629c.103.754.549 1.646 1.509 1.646c.308 0 .65-.103.96-.24c.5-.264.799-.47 1.097-.8c-.073-.885.704-2.046 1.851-2.046c.515 0 .926.205.96.583c.068.514-.377.582-.514.582s-.378-.034-.378-.17c-.034-.138.309-.07.275-.378c-.035-.206-.24-.274-.446-.274c-.72 0-1.131.994-1.029 1.611c.035.275.172.549.447.549c.205 0 .514-.31.617-.755c.068-.308.343-.514.583-.514c.102 0 .17.034.205.171v.138c-.034.137-.137.548-.102.651c0 .069.034.171.17.171c.092 0 .436-.18.777-.459c.117-.59.253-1.298.253-1.357c.034-.24.137-.48.617-.48c.103 0 .171.034.205.171v.138l-.136.617c.445-.583 1.097-.994 1.508-.994c.172 0 .309.102.309.274c0 .103 0 .274-.069.446c-.137.377-.309.96-.412 1.474c0 .137.035.274.207.274s.685-.206 1.096-.754l.007-.004c-.002-.068-.007-.134-.007-.202c0-.411.035-.754.104-.994c.068-.274.411-.514.617-.514c.103 0 .205.069.205.171c0 .035 0 .103-.034.137c-.137.446-.24.857-.24 1.269c0 .24.034.582.102.788c0 .034.035.069.07.069c.068 0 .548-.445.89-1.028c-.308-.206-.48-.549-.48-.96c0-.72.446-1.097.858-1.097c.343 0 .617.24.617.72c0 .308-.103.65-.274.96h.102a.77.77 0 0 0 .584-.24a.3.3 0 0 1 .134-.117c.335-.425.83-.74 1.41-.74c.48 0 .924.205.959.582c.068.515-.378.618-.515.618l-.002-.002c-.138 0-.377-.035-.377-.172s.309-.068.274-.376c-.034-.206-.24-.275-.446-.275c-.686 0-1.13.891-1.028 1.611c.034.275.171.583.445.583c.206 0 .515-.308.652-.754c.068-.274.343-.514.583-.514c.103 0 .17.034.205.171c0 .069 0 .206-.137.652c-.17.308-.171.48-.137.617c.034.274.171.48.309.583c.034.034.068.102.068.102c0 .069-.034.138-.137.138c-.034 0-.411-.205-.823-.515c-.274-.206-.548-.411-.788-.411c-.308 0-.583.205-.685.548c-.137.48-.309.995-.446 1.475c-.103.377-.309.72-.617.96c-.412.309-.926.48-1.44 0c-.514-.446-.72-1.166-.994-1.783c-.069-.171-.206-.274-.377-.274c-.206 0-.343.137-.412.308c-.24.618-.583 1.235-1.028 1.749c-.48.515-1.098.858-1.75 1.029c-.72.171-1.474.205-2.228.103c-1.303-.172-2.503-.857-3.326-1.886c-.823-1.029-1.27-2.366-1.234-3.703c.068-2.47 1.817-4.664 3.703-6.07c.583-.445 1.234-.822 1.885-1.2a14.7 14.7 0 0 1 1.098-.583c.24-.103.377-.377.343-.651c-.035-.309-.309-.515-.618-.48c-.686.068-1.372.24-2.023.514c-.651.274-1.268.617-1.851 1.029c-1.2 0-2.366.617-3.051 1.611c-.343.48-.549 1.063-.583 1.68c-.034.617.137 1.234.48 1.748c.343.514.857.892 1.44 1.132c.583.24 1.2.343 1.852.308c.514-.034.994-.205 1.405-.514c.412-.309.72-.754.892-1.235c.171-.48.205-1.028.068-1.543c-.137-.514-.445-.96-.857-1.269c-.412-.309-.926-.48-1.44-.48z" />
  </svg>
);

export default function DesignTools() {
  const [selectedTool, setSelectedTool] = useState(designTools[0]);

  // Dynamic Orbit Labels:
  // Figma & Adobe XD -> UI & UX
  // Photoshop, Illustrator & Canva -> Graphic Design / GD
  const isUiUx = selectedTool.id === 'figma' || selectedTool.id === 'adobexd';
  const orbitNode1 = isUiUx ? 'UI' : 'Graphic';
  const orbitNode2 = isUiUx ? 'UX' : 'Design';

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
                      {tool.id === 'canva' ? (
                        <CanvaIcon className="w-7 h-7 sm:w-8 sm:h-8 relative z-10 transition-transform duration-300 group-hover:scale-110" />
                      ) : (
                        <span className="relative z-10">{tool.abbr}</span>
                      )}
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

                {/* Five curved lines from 5 tool positions down to center orb (400, 200) */}
                <path
                  d="M 130,20 C 180,100 340,150 400,200"
                  fill="none"
                  stroke={selectedTool.id === 'photoshop' ? selectedTool.color : 'url(#fiberGrad)'}
                  strokeWidth={selectedTool.id === 'photoshop' ? '2.8' : '1.2'}
                  filter="url(#glow)"
                  className="transition-all duration-500"
                />
                <path
                  d="M 265,20 C 300,100 370,150 400,200"
                  fill="none"
                  stroke={selectedTool.id === 'illustrator' ? selectedTool.color : 'url(#fiberGrad)'}
                  strokeWidth={selectedTool.id === 'illustrator' ? '2.8' : '1.2'}
                  filter="url(#glow)"
                  className="transition-all duration-500"
                />
                <path
                  d="M 400,20 C 400,80 400,140 400,200"
                  fill="none"
                  stroke={selectedTool.id === 'canva' ? selectedTool.color : 'url(#fiberGrad)'}
                  strokeWidth={selectedTool.id === 'canva' ? '2.8' : '1.2'}
                  filter="url(#glow)"
                  className="transition-all duration-500"
                />
                <path
                  d="M 535,20 C 500,100 430,150 400,200"
                  fill="none"
                  stroke={selectedTool.id === 'figma' ? selectedTool.color : 'url(#fiberGrad)'}
                  strokeWidth={selectedTool.id === 'figma' ? '2.8' : '1.2'}
                  filter="url(#glow)"
                  className="transition-all duration-500"
                />
                <path
                  d="M 670,20 C 620,100 460,150 400,200"
                  fill="none"
                  stroke={selectedTool.id === 'adobexd' ? selectedTool.color : 'url(#fiberGrad)'}
                  strokeWidth={selectedTool.id === 'adobexd' ? '2.8' : '1.2'}
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

                  {/* Orbiting Tech Node 1 */}
                  <div
                    className="absolute -top-3 -right-3 min-w-[32px] sm:min-w-[36px] h-7 sm:h-8 px-2.5 rounded-full bg-[#1b1b22] border border-brand-purple/50 flex items-center justify-center text-[10px] sm:text-xs font-mono font-bold text-indigo-300 shadow animate-float transform-gpu will-change-transform select-none transition-all duration-300"
                    title={isUiUx ? "User Interface (UI)" : "Graphic Design"}
                  >
                    {orbitNode1}
                  </div>

                  {/* Orbiting Tech Node 2 */}
                  <div
                    className="absolute -bottom-2 -left-3 min-w-[32px] sm:min-w-[36px] h-7 sm:h-8 px-2.5 rounded-full bg-[#1b1b22] border border-blue-400/50 flex items-center justify-center text-[10px] sm:text-xs font-mono font-bold text-cyan-300 shadow animate-float-slow transform-gpu will-change-transform select-none transition-all duration-300"
                    title={isUiUx ? "User Experience (UX)" : "Graphic Design"}
                  >
                    {orbitNode2}
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
                        {selectedTool.id === 'canva' ? (
                          <CanvaIcon className="w-5 h-5" />
                        ) : (
                          selectedTool.abbr
                        )}
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
