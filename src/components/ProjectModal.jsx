import React, { useEffect } from 'react';
import { X, CheckCircle, Calendar, Briefcase, Tag, ArrowRight } from 'lucide-react';
import ProjectCardVisual from './ProjectCardVisual';

export default function ProjectModal({ project, onClose, onContactClick }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#1b1b22] border border-brand-purple/30 rounded-3xl shadow-2xl z-10 custom-scroll text-left">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Modal"
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#121215]/80 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Visual Header */}
        <div className="w-full relative bg-[#131317] rounded-t-3xl border-b border-white/10 overflow-hidden">
          <ProjectCardVisual type={project.visualType} title={project.title} accentColor={project.accentColor} />
          
          <div className="absolute bottom-4 left-6 flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-purple text-white shadow-lg">
              {project.category}
            </span>
            {project.duration && (
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-black/60 text-zinc-300 backdrop-blur-sm border border-white/10">
                {project.duration}
              </span>
            )}
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-zinc-400 mt-2 text-base leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Quick Meta Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-[#141418] border border-white/5">
            <div className="flex items-center gap-3">
              <Briefcase className="w-4 h-4 text-brand-purple" />
              <div>
                <span className="text-[11px] text-zinc-400 uppercase tracking-wider block">Organization</span>
                <span className="text-sm font-semibold text-white">{project.organization}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Calendar className="w-4 h-4 text-brand-blue" />
              <div>
                <span className="text-[11px] text-zinc-400 uppercase tracking-wider block">Role</span>
                <span className="text-sm font-semibold text-white">{project.role}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
              <Tag className="w-4 h-4 text-emerald-400" />
              <div>
                <span className="text-[11px] text-zinc-400 uppercase tracking-wider block">Category</span>
                <span className="text-sm font-semibold text-white">{project.category}</span>
              </div>
            </div>
          </div>

          {/* Detailed Description */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-indigo-400 font-mono">
              Project Overview
            </h4>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Highlights / Deliverables */}
          {(project.keyPoints || project.deliverables) && (
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-indigo-400 font-mono">
                Key Contributions & Scope
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {(project.keyPoints || project.deliverables).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tools & Tags */}
          {project.tools && (
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 font-mono mb-2">
                Tools & Focus Areas
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs rounded-lg bg-[#22222b] text-zinc-300 border border-white/5 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-sm font-medium text-zinc-400 hover:text-white bg-zinc-800/60 hover:bg-zinc-800 transition-colors"
            >
              Back to Projects
            </button>

            <a
              href="mailto:smarhasan.01@gmail.com"
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-brand-purple to-brand-blue hover:shadow-glow-purple transition-all flex items-center justify-center gap-2 group"
            >
              <span>Discuss Similar Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
