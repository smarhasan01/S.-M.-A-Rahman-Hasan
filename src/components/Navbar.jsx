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

export default function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
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
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
          >
            <div className="relative">
              <img
                src={personalInfo.logoImage}
                alt={personalInfo.name}
                className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-display font-black tracking-wider text-white text-lg group-hover:text-brand-purple transition-colors">
                {personalInfo.brandName}
              </span>
              <span className="text-[10px] tracking-widest text-zinc-400 uppercase -mt-1 hidden sm:block font-mono">
                {personalInfo.name}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-[#1b1b22]/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/5">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-brand-purple/80 to-brand-blue/80 shadow-[0_0_15px_rgba(109,93,252,0.4)]'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
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
              className="md:hidden p-2 rounded-xl bg-[#202028] text-zinc-300 hover:text-white border border-white/10 focus:outline-none"
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
        <div className="md:hidden bg-[#171719]/98 backdrop-blur-xl border-b border-white/10 px-6 pt-4 pb-6 space-y-2 animate-fadeIn">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'text-white bg-gradient-to-r from-brand-purple/30 to-brand-blue/30 border border-brand-purple/40 font-semibold'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.name}
              </button>
            );
          })}
          <div className="pt-3">
            <a
              href="mailto:smarhasan.01@gmail.com"
              className="w-full py-2.5 rounded-xl text-center text-sm font-semibold text-white bg-gradient-to-r from-brand-purple to-brand-blue shadow-glow-purple flex items-center justify-center gap-2"
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
