import React from 'react';

export default function ProjectCardVisual({ type, title, accentColor = "#6366f1" }) {
  switch (type) {
    case 'it-bangladesh-ui':
      return (
        <div className="w-full h-56 bg-gradient-to-br from-[#0c1220] via-[#12192e] to-[#090d17] relative overflow-hidden flex items-center justify-center p-6 group-hover:scale-105 transition-transform duration-500">
          {/* Subtle grid lines */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#818cf8_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="absolute w-44 h-44 rounded-full blur-3xl opacity-25 bg-indigo-500 pointer-events-none" />
          
          {/* Browser Window Mockup */}
          <div className="z-10 w-72 h-40 rounded-xl bg-[#0e1424] border border-indigo-500/30 p-2.5 flex flex-col justify-between shadow-2xl relative">
            {/* Window header */}
            <div className="flex items-center justify-between pb-1.5 border-b border-indigo-500/20">
              <div className="flex gap-1.5 items-center">
                <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[8px] font-mono text-indigo-300/80 tracking-wide">itbangladesh.tech/demo-ui</span>
              <span className="px-1.5 py-0.5 rounded text-[7px] font-bold bg-indigo-500/30 text-indigo-200">LEAD</span>
            </div>

            {/* UI Content wireframe */}
            <div className="grid grid-cols-3 gap-2 my-1.5 flex-1">
              <div className="p-2 rounded-lg bg-indigo-950/40 border border-indigo-500/20 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-1 rounded-full bg-indigo-400 mb-1" />
                  <div className="w-12 h-1 rounded-full bg-zinc-600" />
                </div>
                <div className="text-[7px] font-mono text-indigo-300">Courses</div>
              </div>
              <div className="p-2 rounded-lg bg-indigo-950/40 border border-indigo-500/20 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-1 rounded-full bg-indigo-400 mb-1" />
                  <div className="w-6 h-1 rounded-full bg-zinc-600" />
                </div>
                <div className="text-[7px] font-mono text-indigo-300">Admission</div>
              </div>
              <div className="p-2 rounded-lg bg-indigo-950/40 border border-indigo-500/20 flex flex-col justify-between">
                <div>
                  <div className="w-7 h-1 rounded-full bg-indigo-400 mb-1" />
                  <div className="w-11 h-1 rounded-full bg-zinc-600" />
                </div>
                <div className="text-[7px] font-mono text-indigo-300">Portal</div>
              </div>
            </div>

            {/* Bottom status bar */}
            <div className="flex items-center justify-between pt-1 border-t border-indigo-500/10 text-[7px] text-zinc-400 font-mono">
              <span>● Responsive Layout</span>
              <span>Team Leader & UI</span>
            </div>
          </div>
        </div>
      );

    case 'lobby-cafe':
      return (
        <div className="w-full h-56 bg-gradient-to-br from-[#1c140a] via-[#291d0f] to-[#120c06] relative overflow-hidden flex items-center justify-center p-6 group-hover:scale-105 transition-transform duration-500">
          <div className="absolute w-44 h-44 rounded-full blur-3xl opacity-20 bg-amber-500 pointer-events-none" />
          
          {/* Cafe Interior & Branding Presentation Card */}
          <div className="z-10 w-72 h-40 rounded-xl bg-gradient-to-tr from-[#1f160c] to-[#362514] border border-amber-500/40 p-4 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-amber-500/20 blur-xl" />
            
            <div className="flex justify-between items-center">
              <span className="px-2 py-0.5 rounded-full bg-amber-500/30 text-amber-300 text-[8px] font-bold tracking-wider uppercase font-mono">
                BICC VENUE
              </span>
              <span className="text-[9px] text-amber-400 font-serif tracking-widest uppercase">INTERIOR BRANDING</span>
            </div>

            <div className="my-auto py-1">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300 font-serif font-black text-lg">
                  LC
                </div>
                <div>
                  <h4 className="text-sm font-serif font-bold text-white tracking-wide uppercase">LOBBY CAFE</h4>
                  <p className="text-[8px] text-amber-200/80 font-mono">Bangabandhu Int. Conference Center</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1 border-t border-amber-500/20 text-[8px] text-amber-300/80 font-mono">
              <span>Signage & Menus</span>
              <span>Spatial Visual Identity</span>
            </div>
          </div>
        </div>
      );

    case 'xinxian-promo':
    default:
      return (
        <div className="w-full h-56 bg-gradient-to-br from-[#200c0f] via-[#2d1217] to-[#140608] relative overflow-hidden flex items-center justify-center p-6 group-hover:scale-105 transition-transform duration-500">
          <div className="absolute w-44 h-44 rounded-full blur-3xl opacity-25 bg-rose-500 pointer-events-none" />
          
          {/* Promotional Poster & Leaflet Mockup */}
          <div className="z-10 w-72 h-40 rounded-xl bg-gradient-to-tr from-[#220d11] to-[#3a151c] border border-rose-500/40 p-4 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="flex justify-between items-center">
              <span className="px-2 py-0.5 rounded-full bg-rose-500/30 text-rose-300 text-[8px] font-bold tracking-wider uppercase font-mono">
                MULTI-BRANCH
              </span>
              <span className="text-[9px] text-rose-400 font-mono">POSTERS & LEAFLETS</span>
            </div>

            <div className="my-1">
              <div className="text-sm font-black tracking-tight text-white uppercase italic">
                XINXIAN <span className="text-rose-400">CAMPAIGN</span>
              </div>
              <div className="text-[8px] text-zinc-300 mt-1">
                Commercial Print Collateral & Branch Leaflet Suite
              </div>
            </div>

            <div className="flex items-center justify-between pt-1 border-t border-rose-500/20 text-[8px] text-rose-300 font-mono">
              <span>Print-Ready CMYK</span>
              <span>Promotional Media</span>
            </div>
          </div>
        </div>
      );
  }
}
