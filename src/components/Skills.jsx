import React, { useState } from 'react';
import { skillsList } from '../data/portfolioData';
import { Sparkles, Sliders, Check, RotateCcw } from 'lucide-react';

export default function Skills() {
  const [skillsData, setSkillsData] = useState(skillsList);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleSliderChange = (catIdx, itemIdx, val) => {
    const updated = JSON.parse(JSON.stringify(skillsData));
    updated[catIdx].items[itemIdx].level = parseInt(val, 10);
    setSkillsData(updated);
  };

  const resetToDefault = () => {
    setSkillsData(skillsList);
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#161619]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-brand-blue/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tight">
            Design Proficiency & Skills
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Practical skills honed through continuous design practice, client deliverables, and mastery of visual communication.
          </p>

          {/* Quick Customization Mode Pill */}
          <div className="pt-2 flex items-center justify-center gap-3">
            <button
              onClick={() => setIsEditMode(!isEditMode)}
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium border transition-all ${
                isEditMode
                  ? 'bg-brand-purple text-white border-brand-purple shadow-glow-purple'
                  : 'bg-[#202028] text-zinc-400 border-white/10 hover:text-white'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>{isEditMode ? 'Exit Customizer' : 'Interactive Customizer'}</span>
            </button>

            {isEditMode && (
              <button
                onClick={resetToDefault}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs text-zinc-400 hover:text-white bg-white/5 border border-white/10"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((category, catIdx) => (
            <div
              key={catIdx}
              className="p-8 rounded-3xl bg-[#1b1b22] border border-white/8 shadow-xl text-left"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6">
                <h3 className="text-lg font-bold font-display text-white tracking-wide">
                  {category.category}
                </h3>
                <span className="text-xs font-mono text-brand-purple bg-brand-purple/10 px-2.5 py-1 rounded-md border border-brand-purple/20">
                  {category.items.length} Disciplines
                </span>
              </div>

              <div className="space-y-6">
                {category.items.map((skill, itemIdx) => (
                  <div key={itemIdx} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-zinc-200">
                          {skill.name}
                        </span>
                        {skill.tag && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-400 border border-white/5">
                            {skill.tag}
                          </span>
                        )}
                      </div>
                      <span className="text-xs font-bold font-mono text-indigo-400">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar with smooth gradient */}
                    <div className="h-2.5 w-full bg-[#121216] rounded-full overflow-hidden p-0.5 border border-white/5">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-brand-purple via-indigo-500 to-brand-cyan transition-all duration-700 shadow-[0_0_12px_rgba(99,102,241,0.5)]"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>

                    {/* Interactive Slider if Edit Mode is enabled */}
                    {isEditMode && (
                      <div className="pt-1 flex items-center gap-3">
                        <input
                          type="range"
                          min="30"
                          max="100"
                          value={skill.level}
                          onChange={(e) => handleSliderChange(catIdx, itemIdx, e.target.value)}
                          className="w-full accent-brand-purple cursor-pointer h-1 bg-zinc-700 rounded-lg"
                        />
                        <span className="text-[10px] font-mono text-zinc-400">{skill.level}%</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Philosophy Note */}
        <div className="mt-8 text-center text-xs text-zinc-500 max-w-lg mx-auto font-mono">
          Note: Skill levels represent relative focus and depth of applied project experience. All values can be effortlessly updated in <code className="text-indigo-400">src/data/portfolioData.js</code>.
        </div>

      </div>
    </section>
  );
}
