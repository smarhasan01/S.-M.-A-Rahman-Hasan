import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import DesignTools from './components/DesignTools';
import WorkExperience from './components/WorkExperience';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);

  // High-performance scroll tracking for active navigation section
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // If scrolled near bottom of page, activate Contact
          if (
            window.innerHeight + window.scrollY >=
            document.documentElement.scrollHeight - 120
          ) {
            setActiveSection('contact');
            ticking = false;
            return;
          }

          // If at the top of page, activate Home
          if (window.scrollY < 120) {
            setActiveSection('home');
            ticking = false;
            return;
          }

          // Viewport threshold at 35% height for natural reading position
          const viewportThreshold = window.innerHeight * 0.35;

          const sectionsInOrder = [
            { id: 'home', navId: 'home' },
            { id: 'about', navId: 'about' },
            { id: 'services', navId: 'about' },
            { id: 'tools', navId: 'about' },
            { id: 'experience', navId: 'experience' },
            { id: 'projects', navId: 'projects' },
            { id: 'skills', navId: 'skills' },
            { id: 'contact', navId: 'contact' },
          ];

          let currentNav = 'home';
          for (const sec of sectionsInOrder) {
            const el = document.getElementById(sec.id);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= viewportThreshold) {
                currentNav = sec.navId;
              }
            }
          }

          setActiveSection(currentNav);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactClick = () => {
    const el = document.getElementById('contact');
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
      setActiveSection('contact');
    }
  };

  return (
    <div className="min-h-screen bg-[#171719] text-[#e2e8f0] relative selection:bg-brand-purple selection:text-white">
      {/* Custom Glowing Cursor & Purple Follow Spotlight */}
      <CustomCursor />

      {/* Global Background Glow Accents with Smooth GPU Drift */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-brand-purple/10 rounded-full blur-[180px] animate-ambient-drift transform-gpu will-change-transform" />
        <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[180px] animate-ambient-drift-rev transform-gpu will-change-transform" />
        <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[180px] animate-pulse-slow transform-gpu will-change-transform" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation Bar */}
        <Navbar activeSection={activeSection} onSectionChange={setActiveSection} />

        {/* Main Content Sections */}
        <main className="flex-grow">
          {/* 1. Hero Section */}
          <Hero />

          {/* 2. About Me Section */}
          <About />

          {/* 3. Services Section */}
          <Services />

          {/* 4. Design Tools & Ecosystem */}
          <DesignTools />

          {/* 5. Work Experience & Learning Journey */}
          <WorkExperience />

          {/* 6. Featured Portfolio Showcase */}
          <Portfolio onSelectProject={(project) => setSelectedProject(project)} />

          {/* 7. Skills & Proficiency */}
          <Skills />

          {/* 8. Contact & Collaboration */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onContactClick={handleContactClick}
        />
      )}
    </div>
  );
}
