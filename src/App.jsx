import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import DesignTools from './components/DesignTools';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import WorkExperience from './components/WorkExperience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);

  // Intersection observer to track current active section for navbar
  useEffect(() => {
    const sections = ['home', 'about', 'services', 'tools', 'skills', 'portfolio', 'experience', 'contact'];
    
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactClick = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
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
        <Navbar activeSection={activeSection} />

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

          {/* 5. Skills & Proficiency */}
          <Skills />

          {/* 6. Featured Portfolio Showcase */}
          <Portfolio onSelectProject={(project) => setSelectedProject(project)} />

          {/* 7. Work Experience & Learning Journey */}
          <WorkExperience />

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
