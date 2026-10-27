import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#111114] border-t border-white/5 pt-16 pb-12 overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Logo & Bio Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={personalInfo.logoImage}
                alt={personalInfo.name}
                className="h-9 w-auto object-contain"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div>
                <span className="font-display font-black text-xl text-white tracking-wider block">
                  {personalInfo.brandName}
                </span>
                <span className="text-[10px] text-zinc-400 font-mono tracking-widest uppercase block -mt-1">
                  {personalInfo.name}
                </span>
              </div>
            </div>

            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              {personalInfo.title} based in {personalInfo.location}. Dedicated to crafting purposeful visual identities, intuitive digital experiences, and impactful team workflows.
            </p>

            <div className="pt-1">
              <a
                href={personalInfo.mailto}
                className="text-xs text-emerald-400 hover:text-emerald-300 flex items-center gap-2 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{personalInfo.email} &bull; Open for new projects</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-zinc-400">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className="text-left hover:text-indigo-400 transition-colors py-1"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Social Platforms & Contact Callout */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white">
              Connect & Follow
            </h4>
            <div className="flex flex-col gap-2 text-xs text-zinc-400">
              {personalInfo.socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>{s.name}</span>
                  <span className="text-zinc-600 group-hover:text-indigo-400 transition-colors">&rarr;</span>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back-to-top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            &copy; {new Date().getFullYear()} {personalInfo.name} ({personalInfo.brandName}). All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1b1b22] hover:bg-brand-purple text-zinc-400 hover:text-white border border-white/5 transition-all group"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
