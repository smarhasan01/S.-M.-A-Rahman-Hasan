import React from 'react';

export default function ProjectCardVisual({ type, title, accentColor = "#6366f1" }) {
  switch (type) {
    case 'logo-monogram':
      return (
        <div className="w-full h-56 bg-gradient-to-br from-[#121216] via-[#1a1a24] to-[#0d0d12] relative overflow-hidden flex items-center justify-center p-6 group-hover:scale-105 transition-transform duration-500">
          {/* Background grid guides */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#818cf8_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="absolute w-40 h-40 rounded-full blur-3xl opacity-30" style={{ background: accentColor }} />
          
          {/* Geometric Monogram */}
          <svg viewBox="0 0 200 200" className="w-36 h-36 z-10 drop-shadow-[0_0_20px_rgba(99,102,241,0.5)]">
            <defs>
              <linearGradient id="monoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#818cf8" />
                <stop offset="50%" stopColor="#c084fc" />
                <stop offset="100%" stopColor="#38bdf8" />
              </linearGradient>
            </defs>
            <polygon points="100,25 170,65 170,145 100,185 30,145 30,65" fill="none" stroke="url(#monoGrad)" strokeWidth="6" strokeDasharray="6 3" opacity="0.4" />
            <path d="M70,60 L130,60 L140,85 L85,120 L135,120 L135,145 L65,145 L55,120 L110,85 L70,85 Z" fill="url(#monoGrad)" />
            <circle cx="100" cy="100" r="6" fill="#ffffff" />
          </svg>
          <span className="absolute bottom-3 right-4 text-[10px] tracking-widest text-indigo-300/60 uppercase font-mono">Vector Guide • 1.0</span>
        </div>
      );

    case 'branding-system':
      return (
        <div className="w-full h-56 bg-gradient-to-br from-[#0e1713] via-[#15231c] to-[#0b120f] relative overflow-hidden flex items-center justify-center p-6 group-hover:scale-105 transition-transform duration-500">
          <div className="absolute w-48 h-48 rounded-full blur-3xl opacity-20 bg-emerald-500" />
          
          <div className="z-10 flex items-center gap-6">
            {/* Cosmetic Bottle */}
            <div className="w-20 h-36 rounded-2xl bg-gradient-to-b from-[#1c2e25] to-[#101c16] border border-emerald-500/30 p-2 flex flex-col items-center justify-between shadow-2xl relative">
              <div className="w-8 h-4 rounded-t-md bg-emerald-400/40 border-b border-emerald-500/50" />
              <div className="w-full py-4 px-1 rounded bg-[#0a120e]/80 border border-emerald-500/20 text-center">
                <span className="text-[8px] font-serif tracking-widest uppercase text-emerald-200 block">AURA</span>
                <span className="text-[6px] tracking-wider text-emerald-400 block mt-0.5">ELIXIR</span>
              </div>
              <div className="w-6 h-1 rounded-full bg-emerald-400/30" />
            </div>

            {/* Color Swatch & Identity Card */}
            <div className="flex flex-col gap-2">
              <div className="p-2.5 rounded-lg bg-[#14231b]/90 border border-emerald-500/25 shadow-lg w-28">
                <div className="text-[9px] font-semibold text-emerald-300">Identity Guidelines</div>
                <div className="flex gap-1.5 mt-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-600 border border-white/20" />
                  <div className="w-4 h-4 rounded-full bg-emerald-400 border border-white/20" />
                  <div className="w-4 h-4 rounded-full bg-emerald-100 border border-white/20" />
                  <div className="w-4 h-4 rounded-full bg-[#0a1410] border border-white/20" />
                </div>
              </div>
              <div className="px-2 py-1 rounded bg-emerald-950/60 border border-emerald-700/30 text-[8px] text-emerald-300/80 font-mono">
                Pantone 567 C
              </div>
            </div>
          </div>
        </div>
      );

    case 'social-campaign':
      return (
        <div className="w-full h-56 bg-gradient-to-br from-[#1c0d15] via-[#2a1320] to-[#13070d] relative overflow-hidden flex items-center justify-center p-6 group-hover:scale-105 transition-transform duration-500">
          <div className="absolute w-44 h-44 rounded-full blur-3xl opacity-25 bg-rose-500" />
          
          <div className="z-10 w-64 h-36 rounded-xl bg-gradient-to-tr from-[#1f0b18] to-[#36132b] border border-rose-500/40 p-4 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-rose-500/20 blur-xl" />
            
            <div className="flex justify-between items-center">
              <span className="px-2 py-0.5 rounded-full bg-rose-500/30 text-rose-300 text-[8px] font-bold tracking-wider uppercase">PULSE AD SUITE</span>
              <span className="text-[10px] text-rose-400 font-mono">1080 x 1080</span>
            </div>

            <div className="my-1">
              <div className="text-sm font-black tracking-tight text-white uppercase italic">IGNITE YOUR<br/><span className="text-rose-400">POTENTIAL.</span></div>
              <div className="text-[8px] text-zinc-400 mt-1">High-Conversion Instagram Carousel</div>
            </div>

            <div className="flex items-center justify-between pt-1 border-t border-rose-500/20">
              <span className="text-[9px] text-rose-300 font-medium">Swipe to Explore &rarr;</span>
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
              </div>
            </div>
          </div>
        </div>
      );

    case 'app-ui':
      return (
        <div className="w-full h-56 bg-gradient-to-br from-[#0c1322] via-[#111c33] to-[#070b14] relative overflow-hidden flex items-center justify-center p-6 group-hover:scale-105 transition-transform duration-500">
          <div className="absolute w-44 h-44 rounded-full blur-3xl opacity-30 bg-blue-500" />
          
          {/* Mobile frame */}
          <div className="z-10 w-44 h-48 rounded-2xl bg-[#090d16] border-2 border-blue-500/40 p-2.5 flex flex-col justify-between shadow-2xl relative">
            <div className="w-14 h-2 rounded-full bg-zinc-800 mx-auto" />
            
            <div className="my-1 space-y-1.5">
              <div className="flex justify-between items-center text-[8px] text-blue-300">
                <span>Living Room</span>
                <span className="text-emerald-400">● 24°C</span>
              </div>
              
              <div className="p-2 rounded-lg bg-blue-950/40 border border-blue-500/20 flex items-center justify-between">
                <div>
                  <div className="text-[9px] font-semibold text-white">Smart Ambiance</div>
                  <div className="text-[7px] text-blue-300/70">8 Devices Connected</div>
                </div>
                <div className="w-6 h-3.5 rounded-full bg-blue-500 flex items-center justify-end px-0.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white shadow" />
                </div>
              </div>

              <div className="h-2 rounded-full bg-zinc-800 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 w-3/4 rounded-full" />
              </div>
            </div>

            <div className="flex justify-around pt-1 border-t border-zinc-800 text-[7px] text-zinc-500 font-medium">
              <span className="text-blue-400">Home</span>
              <span>Devices</span>
              <span>Profile</span>
            </div>
          </div>
        </div>
      );

    case 'can-mockup':
      return (
        <div className="w-full h-56 bg-gradient-to-br from-[#1c1808] via-[#292209] to-[#120f04] relative overflow-hidden flex items-center justify-center p-6 group-hover:scale-105 transition-transform duration-500">
          <div className="absolute w-48 h-48 rounded-full blur-3xl opacity-20 bg-yellow-500" />
          
          <div className="z-10 flex items-center justify-center">
            {/* Beverage Can Silhouette with metallic lighting */}
            <div className="w-24 h-44 rounded-2xl bg-gradient-to-r from-[#2e2609] via-[#665416] to-[#1a1505] border border-amber-500/40 p-2 flex flex-col justify-between shadow-[0_15px_30px_rgba(245,158,11,0.25)] relative overflow-hidden">
              <div className="w-16 h-2 rounded-t bg-amber-200/50 mx-auto" />
              
              <div className="text-center my-auto py-2 bg-black/40 backdrop-blur rounded border border-amber-500/20">
                <span className="text-[10px] font-black tracking-widest text-amber-300 block italic">APEX</span>
                <span className="text-[7px] tracking-widest text-white/90 block">ZERO SUGAR</span>
                <span className="text-[6px] text-amber-400 font-mono mt-1 block">500 ML</span>
              </div>
              
              {/* Highlight streak */}
              <div className="absolute inset-y-0 left-3 w-2 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <div className="w-18 h-1.5 rounded-b bg-amber-400/40 mx-auto" />
            </div>
          </div>
        </div>
      );

    case 'web-dashboard':
      return (
        <div className="w-full h-56 bg-gradient-to-br from-[#140f26] via-[#1c1538] to-[#0a0714] relative overflow-hidden flex items-center justify-center p-6 group-hover:scale-105 transition-transform duration-500">
          <div className="absolute w-44 h-44 rounded-full blur-3xl opacity-30 bg-purple-600" />
          
          {/* Dashboard mockup window */}
          <div className="z-10 w-64 h-36 rounded-xl bg-[#130f24] border border-purple-500/30 p-2.5 flex flex-col justify-between shadow-2xl">
            <div className="flex items-center justify-between pb-1.5 border-b border-purple-500/20">
              <div className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-rose-500/70" />
                <span className="w-2 h-2 rounded-full bg-amber-500/70" />
                <span className="w-2 h-2 rounded-full bg-emerald-500/70" />
              </div>
              <span className="text-[8px] font-mono text-purple-300/80">nexus-analytics.io</span>
            </div>

            <div className="grid grid-cols-2 gap-2 my-1">
              <div className="p-1.5 rounded bg-purple-950/40 border border-purple-500/20">
                <span className="text-[7px] text-purple-300">Revenue Flow</span>
                <div className="text-[11px] font-bold text-white">$48,290 <span className="text-[7px] text-emerald-400">+14%</span></div>
              </div>
              <div className="p-1.5 rounded bg-purple-950/40 border border-purple-500/20">
                <span className="text-[7px] text-purple-300">Active Nodes</span>
                <div className="text-[11px] font-bold text-white">1,842 <span className="text-[7px] text-indigo-400">99.9%</span></div>
              </div>
            </div>

            {/* Sparkline chart SVG */}
            <svg viewBox="0 0 160 25" className="w-full h-6 stroke-purple-400 fill-none stroke-[2]">
              <path d="M0,20 Q20,10 40,16 T80,8 T120,14 T160,4" />
            </svg>
          </div>
        </div>
      );

    case 'gaming-logo':
      return (
        <div className="w-full h-56 bg-gradient-to-br from-[#200b1d] via-[#2f102a] to-[#120510] relative overflow-hidden flex items-center justify-center p-6 group-hover:scale-105 transition-transform duration-500">
          <div className="absolute w-44 h-44 rounded-full blur-3xl opacity-25 bg-pink-500" />
          
          <svg viewBox="0 0 180 180" className="w-32 h-32 z-10 drop-shadow-[0_0_25px_rgba(236,72,153,0.6)]">
            <defs>
              <linearGradient id="gameGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
            <polygon points="90,15 160,50 145,130 90,165 35,130 20,50" fill="#180c18" stroke="url(#gameGrad)" strokeWidth="4" />
            <path d="M90,40 L130,120 L90,100 L50,120 Z" fill="url(#gameGrad)" />
            <circle cx="90" cy="85" r="8" fill="#ffffff" />
          </svg>
          <span className="absolute bottom-3 right-4 text-[10px] tracking-widest text-pink-300/70 font-mono">ESPORTS MARK</span>
        </div>
      );

    case 'card-mockup':
    default:
      return (
        <div className="w-full h-56 bg-gradient-to-br from-[#07191d] via-[#0d272f] to-[#040e11] relative overflow-hidden flex items-center justify-center p-6 group-hover:scale-105 transition-transform duration-500">
          <div className="absolute w-44 h-44 rounded-full blur-3xl opacity-30 bg-cyan-500" />
          
          {/* Obsidian Card with holographic foil */}
          <div className="z-10 w-60 h-36 rounded-xl bg-gradient-to-tr from-[#0b1317] via-[#111f26] to-[#0a1216] border border-cyan-400/40 p-4 flex flex-col justify-between shadow-2xl relative transform -rotate-3 hover:rotate-0 transition-transform duration-300">
            <div className="flex justify-between items-center">
              <span className="text-[9px] font-bold tracking-widest text-cyan-300 uppercase">PRIME OBSIDIAN</span>
              <div className="w-5 h-4 rounded bg-gradient-to-br from-amber-300 to-amber-600 border border-white/20" />
            </div>

            <div className="font-mono text-[10px] tracking-widest text-cyan-100/90">
              •••• •••• •••• 9284
            </div>

            <div className="flex justify-between items-end">
              <div>
                <span className="text-[6px] text-cyan-300/70 block uppercase">Cardholder</span>
                <span className="text-[9px] font-medium text-white tracking-wider">RAHMAN HASAN</span>
              </div>
              <div className="flex -space-x-1.5">
                <div className="w-4 h-4 rounded-full bg-rose-500/80" />
                <div className="w-4 h-4 rounded-full bg-amber-500/80" />
              </div>
            </div>
          </div>
        </div>
      );
  }
}
