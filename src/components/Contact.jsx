import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, MapPin, Send, Check, Copy, Sparkles, Clock, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Graphic Design',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide details about your project or inquiry';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebratory confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 600);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden scroll-mt-24">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-brand-purple/15 rounded-full blur-[140px] pointer-events-none animate-ambient-drift transform-gpu will-change-transform" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tight">
              Let's Discuss Your <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">Next Project</span>
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              Ready to collaborate on graphic design, UI/UX design, or team projects? Reach out directly via email or send a message below.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Info & Social Cards */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Email Card with 1-click Copy & exact mailto link */}
            <ScrollReveal direction="up" delay={150}>
              <TiltCard maxTilt={5} scale={1.01} className="rounded-2xl">
                <div className="p-6 rounded-2xl bg-[#1b1b22] border border-white/8 hover:border-brand-purple/40 shadow-xl transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-brand-purple flex items-center gap-1.5 font-bold">
                      <Mail className="w-4 h-4" />
                      <span>Direct Email</span>
                    </span>
                    <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 font-medium">
                      Open to Inquiries
                    </span>
                  </div>

                  <div className="text-lg sm:text-xl font-bold text-white break-all font-mono">
                    {personalInfo.email}
                  </div>

                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    {/* Exact required HTML link */}
                    <a
                      href="mailto:smarhasan.01@gmail.com"
                      className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-brand-purple to-brand-blue text-white hover:shadow-glow-purple hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 group"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Email Me (mailto:smarhasan.01@gmail.com)</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <button
                      onClick={handleCopyEmail}
                      className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 hover:scale-105 active:scale-95 text-zinc-300 hover:text-white border border-white/10 flex items-center gap-2 transition-all duration-300"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>

            {/* Location & Timezone Card */}
            <ScrollReveal direction="up" delay={250}>
              <TiltCard maxTilt={5} scale={1.01} className="rounded-2xl">
                <div className="p-6 rounded-2xl bg-[#1b1b22] border border-white/8 shadow-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 text-brand-cyan flex items-center justify-center">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Location</h4>
                      <p className="text-xs text-zinc-400">{personalInfo.location}</p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center gap-2 text-xs text-zinc-400 font-mono">
                    <Clock className="w-3.5 h-3.5 text-brand-purple" />
                    <span>Response rate: Typically within 24 hours</span>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>

            {/* Social Links List */}
            <ScrollReveal direction="up" delay={350}>
              <div className="p-6 rounded-2xl bg-[#1b1b22] border border-white/8 shadow-xl">
                <h4 className="text-sm font-bold text-white mb-4">Official Profiles & Socials</h4>
                <div className="flex flex-wrap gap-2.5">
                  {personalInfo.socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target={social.url.startsWith('mailto:') ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#22222b] hover:bg-brand-purple text-zinc-300 hover:text-white hover:scale-105 active:scale-95 border border-white/5 hover:border-brand-purple transition-all duration-300"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="up" delay={200}>
              <div className="p-8 sm:p-10 rounded-3xl bg-[#1b1b22] border border-white/8 shadow-2xl relative text-left">
                
                {isSubmitted ? (
                  <div className="py-12 text-center space-y-4 animate-fadeIn">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg animate-bounce">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold font-display text-white">
                      Message Prepared Successfully!
                    </h3>
                    <p className="text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="text-white font-medium">{formData.name}</span>! S. M. A Rahman Hasan will review your inquiry and get back to you promptly at <span className="text-indigo-300 font-mono">{formData.email}</span>.
                    </p>
                    <div className="pt-4 flex flex-wrap justify-center gap-3">
                      <a
                        href={`mailto:smarhasan.01@gmail.com?subject=${encodeURIComponent(formData.subject || 'Design Project Inquiry')}&body=${encodeURIComponent(`Hi Rahman,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`)}`}
                        className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-brand-purple to-brand-blue hover:shadow-glow-purple transition-colors"
                      >
                        Open In Email App
                      </a>
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({ name: '', email: '', service: 'Graphic Design', subject: '', message: '' });
                        }}
                        className="px-6 py-2.5 rounded-xl text-xs font-semibold text-zinc-300 hover:text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                          Your Name <span className="text-rose-400">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className={`w-full px-4 py-3 rounded-xl bg-[#141418] border text-sm text-white placeholder-zinc-500 focus:outline-none transition-all ${
                            errors.name ? 'border-rose-500 focus:border-rose-400' : 'border-white/10 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple'
                          }`}
                        />
                        {errors.name && <p className="text-xs text-rose-400 mt-1.5">{errors.name}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                          Your Email <span className="text-rose-400">*</span>
                        </label>
                        <input
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={`w-full px-4 py-3 rounded-xl bg-[#141418] border text-sm text-white placeholder-zinc-500 focus:outline-none transition-all ${
                            errors.email ? 'border-rose-500 focus:border-rose-400' : 'border-white/10 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple'
                          }`}
                        />
                        {errors.email && <p className="text-xs text-rose-400 mt-1.5">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                        Area of Interest
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#141418] border border-white/10 text-sm text-white focus:outline-none focus:border-brand-purple transition-all"
                      >
                        <option value="Graphic Design">Graphic Design & Print Media</option>
                        <option value="UI/UX Design">UI/UX & Website Interface Design</option>
                        <option value="Brand Identity">Brand Identity & Visual Guidelines</option>
                        <option value="Team Leadership / Full-time">Design Team Leadership & Training</option>
                      </select>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        placeholder="Project title or inquiry subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#141418] border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-brand-purple transition-all"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                        Message Details <span className="text-rose-400">*</span>
                      </label>
                      <textarea
                        rows={5}
                        placeholder="Please describe your requirements, project scope, or opportunity..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-[#141418] border text-sm text-white placeholder-zinc-500 focus:outline-none transition-all ${
                          errors.message ? 'border-rose-500 focus:border-rose-400' : 'border-white/10 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple'
                        }`}
                      />
                      {errors.message && <p className="text-xs text-rose-400 mt-1.5">{errors.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-brand-purple via-indigo-600 to-brand-blue hover:from-brand-violet hover:to-brand-deepPurple shadow-glow-purple hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Send Inquiry</span>
                          <Send className="w-4 h-4 group-hover:translate-x-1.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                        </>
                      )}
                    </button>
                  </form>
                )}

              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
