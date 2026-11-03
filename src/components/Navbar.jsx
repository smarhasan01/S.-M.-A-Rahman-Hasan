import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ activeSection, onSectionChange }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const target = document.getElementById(targetId);

    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });

      if (onSectionChange) {
        onSectionChange(targetId);
      }
    } else if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (onSectionChange) {
        onSectionChange('home');
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#171719]/90 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Name */}
          <a
            href="#home"
            className="flex items-center gap-2.5 sm:gap-3.5 group focus:outline-none flex-shrink-0"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
          >
            <div className="relative flex items-center">
              <img
                src={personalInfo.logoImage}
                alt="S. M. A RAHMAN HASAN"
                className="h-7 sm:h-8 md:h-9 lg:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <span className="font-heading font-bold text-xs sm:text-sm md:text-base lg:text-lg tracking-wider text-white group-hover:text-brand-purple transition-colors duration-300 whitespace-nowrap uppercase">
              S. M. A RAHMAN HASAN
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5 bg-[#1b1b22]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-lg shadow-black/20">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  aria-label={`Navigate to ${item.name}`}
                  className={`group relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 select-none focus:outline-none ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-brand-purple/90 to-brand-blue/90 shadow-[0_0_16px_rgba(109,93,252,0.5)]'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5 active:scale-95'
                  }`}
                >
                  <span className="relative z-10 transition-colors duration-200">
                    {item.name}
                  </span>

                  {/* Active bottom glow indicator pill */}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-[2px] rounded-full bg-gradient-to-r from-brand-purple to-cyan-400 shadow-[0_0_8px_#6d5dfc] pointer-events-none" />
                  )}

                  {/* Hover subtle expanding underline effect for inactive links */}
                  {!isActive && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 group-hover:w-1/2 h-[1.5px] rounded-full bg-gradient-to-r from-brand-purple/70 to-brand-blue/70 transition-all duration-300 opacity-0 group-hover:opacity-100 pointer-events-none" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* CTA Email Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:smarhasan.01@gmail.com"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-brand-purple to-brand-blue hover:from-brand-violet hover:to-brand-deepPurple shadow-glow-purple hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email Me</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden p-2 rounded-xl bg-[#202028] text-zinc-300 hover:text-white border border-white/10 focus:outline-none active:scale-95 transition-transform"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#171719]/98 backdrop-blur-xl border-b border-white/10 px-5 pt-3 pb-6 space-y-1.5 animate-fadeIn">
          {navItems.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 select-none ${
                  isActive
                    ? 'text-white bg-gradient-to-r from-brand-purple/30 via-brand-purple/20 to-brand-blue/30 border border-brand-purple/40 shadow-sm font-semibold'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5 active:bg-white/10'
                }`}
              >
                <span>{item.name}</span>
                {isActive ? (
                  <span className="w-2 h-2 rounded-full bg-brand-cyan shadow-[0_0_8px_#38bdf8] animate-pulse" />
                ) : (
                  <span className="text-zinc-600 text-xs">&rarr;</span>
                )}
              </button>
            );
          })}
          <div className="pt-3 border-t border-white/5">
            <a
              href="mailto:smarhasan.01@gmail.com"
              className="w-full py-3 rounded-xl text-center text-sm font-semibold text-white bg-gradient-to-r from-brand-purple to-brand-blue shadow-glow-purple flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.98] transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Email Me (smarhasan.01@gmail.com)</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
