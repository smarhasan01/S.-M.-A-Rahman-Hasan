import React from 'react';
import { Palette, Layout, Sparkles, Check, ArrowRight } from 'lucide-react';
import { services } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';

const iconMap = {
  Palette: Palette,
  Layout: Layout,
  Sparkles: Sparkles,
};

export default function Services() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#161619] scroll-mt-24">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-[140px] pointer-events-none animate-ambient-drift-rev transform-gpu will-change-transform" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching reference image */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-xs font-semibold uppercase tracking-wider">
              <span>Specialized Offerings</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tight">
              The Service We Provide For You
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              Tailored visual and digital solutions focused on elevating your brand and delivering memorable user experiences.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Cards Grid with 3D Tilt and ScrollReveal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Palette;
            return (
              <ScrollReveal key={service.id} direction="up" delay={150 * (index + 1)}>
                <TiltCard maxTilt={7} scale={1.02} className="h-full rounded-3xl">
                  <div
                    className="group relative p-8 rounded-3xl bg-[#1b1b21] border border-white/8 hover:border-brand-purple/50 shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden h-full"
                  >
                    {/* Subtle top card glow */}
                    <div
                      className="absolute -top-16 -right-16 w-36 h-36 rounded-full blur-2xl opacity-20 group-hover:opacity-45 transition-opacity duration-500 pointer-events-none"
                      style={{ background: service.color }}
                    />

                    <div>
                      {/* Icon & Badge */}
                      <div className="flex items-center justify-between mb-6">
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg"
                          style={{
                            backgroundColor: `${service.color}15`,
                            borderColor: `${service.color}35`,
                            borderWidth: '1px',
                            color: service.color,
                          }}
                        >
                          <Icon className="w-7 h-7" />
                        </div>
                        <span className="text-xs font-mono font-bold text-zinc-500 group-hover:text-zinc-300 transition-colors">
                          {service.badge}
                        </span>
                      </div>

                      {/* Card Title & Subtitle */}
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                        {service.title}
                      </h3>
                      <div className="text-xs font-medium text-brand-purple mb-4">
                        {service.subtitle}
                      </div>

                      {/* Description */}
                      <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Feature Checklist */}
                      <div className="space-y-2.5 pt-4 border-t border-white/5 mb-8">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                            <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Card Action Button with hover scale */}
                    <button
                      onClick={() => scrollTo('#contact')}
                      className="w-full py-3 rounded-xl text-xs font-semibold text-zinc-300 group-hover:text-white bg-white/5 group-hover:bg-brand-purple/20 border border-white/5 group-hover:border-brand-purple/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                    >
                      <span>Inquire for {service.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </TiltCard>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom Guarantee Banner */}
        <ScrollReveal direction="up" delay={500}>
          <div className="mt-12 p-6 rounded-2xl bg-[#1b1b22]/70 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <h4 className="text-sm font-bold text-white">Need a customized combination of services?</h4>
              <p className="text-xs text-zinc-400 mt-0.5">Let's discuss full-scale branding packages or ongoing design support.</p>
            </div>
            <button
              onClick={() => scrollTo('#contact')}
              className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-brand-purple to-brand-blue hover:shadow-glow-purple hover:scale-105 active:scale-95 transition-all flex-shrink-0"
            >
              Schedule a Consultation
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
