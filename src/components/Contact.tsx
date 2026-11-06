import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle2, AlertCircle, Copy, Check, Linkedin, Github } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const { contact } = portfolioData;

  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: 'success' | 'error' | 'info';
    text: string;
  } | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please specify a subject.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setStatusMessage(null);

    const endpoint = contact.formspreeEndpoint || import.meta.env.VITE_FORMSPREE_ENDPOINT;

    // Graceful fallback to mailto if endpoint is not set
    if (!endpoint) {
      const mailtoUrl = `mailto:${contact.email}?subject=${encodeURIComponent(
        `[Portfolio] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
      )}`;

      window.location.href = mailtoUrl;

      setStatusMessage({
        type: 'info',
        text: 'Opening your mail client to send your message directly to amritaprathibha@gmail.com.',
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage({
          type: 'success',
          text: 'Thank you! Your message has been sent successfully.',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({});
      } else {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || 'Failed to deliver message via form endpoint.');
      }
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : 'Submission failed';
      setStatusMessage({
        type: 'error',
        text: `${errorMsg}. You can write directly to ${contact.email}.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const githubLink = contact.socialLinks.find((l) => l.platform === 'github' && Boolean(l.url));
  const linkedinLink = contact.socialLinks.find((l) => l.platform === 'linkedin' && Boolean(l.url));

  return (
    <section id="contact" className="py-28 bg-[#090514] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="space-y-16"
        >
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full glass-dusk border border-purple-400/30 text-purple-300 text-xs font-mono tracking-widest uppercase">
              <Mail className="w-3.5 h-3.5 text-pink-400" />
              <span>Reach Out</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Let's <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-200 to-indigo-200">Connect</span>
            </h2>
            <p className="text-sm sm:text-base text-purple-200/80">
              {contact.subheading}
            </p>
            <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto" />
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Contact Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-3xl glass-dusk border border-purple-500/25 shadow-2xl space-y-6 text-left">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-purple-300/60 block">
                    Direct Email
                  </span>
                  <div className="mt-2.5 flex items-center justify-between gap-2 p-3.5 rounded-2xl bg-[#0D0818] border border-purple-500/30">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Mail className="w-4 h-4 text-pink-400 flex-shrink-0" />
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-xs sm:text-sm font-mono font-medium text-purple-100 hover:text-pink-300 truncate transition-colors"
                      >
                        {contact.email}
                      </a>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="p-1.5 rounded-lg text-purple-300 hover:text-white hover:bg-white/10 transition-colors flex-shrink-0"
                      title="Copy email to clipboard"
                    >
                      {copiedEmail ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="border-t border-purple-500/20 pt-6 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-purple-300/60 block">
                    Location & Campus
                  </span>
                  <p className="text-sm text-purple-200/80 leading-relaxed font-normal">
                    Amal Jyothi College of Engineering, Kerala. Open for tech discussions, hackathon projects, and software opportunities.
                  </p>
                </div>

                {/* Social placeholders: only rendered when configured */}
                {(githubLink || linkedinLink) && (
                  <div className="border-t border-purple-500/20 pt-6">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-purple-300/60 block mb-3">
                      Social Profiles
                    </span>
                    <div className="flex items-center gap-3">
                      {githubLink && (
                        <a
                          href={githubLink.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-xl glass-dusk hover:border-purple-400 text-purple-200 hover:text-white transition-colors"
                          aria-label="GitHub profile"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {linkedinLink && (
                        <a
                          href={linkedinLink.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-xl glass-dusk hover:border-purple-400 text-purple-200 hover:text-white transition-colors"
                          aria-label="LinkedIn profile"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                noValidate
                className="p-8 sm:p-10 rounded-3xl glass-dusk border border-purple-500/25 shadow-2xl space-y-5 text-left"
              >
                {/* Status Message Alert */}
                {statusMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl text-xs sm:text-sm flex items-start gap-3 border ${
                      statusMessage.type === 'success'
                        ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-200'
                        : statusMessage.type === 'error'
                        ? 'bg-rose-950/60 border-rose-500/40 text-rose-200'
                        : 'bg-purple-950/60 border-purple-500/40 text-purple-200'
                    }`}
                  >
                    {statusMessage.type === 'success' ? (
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-400 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-pink-400" />
                    )}
                    <span>{statusMessage.text}</span>
                  </motion.div>
                )}

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono uppercase tracking-wider text-purple-200"
                    >
                      Your Name <span className="text-pink-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="e.g. Alex Mathew"
                      className={`w-full px-4 py-3 rounded-xl bg-[#0D0818]/90 border text-sm text-white placeholder:text-purple-300/40 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all ${
                        errors.name ? 'border-rose-400' : 'border-purple-500/30'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-rose-400 font-medium">{errors.name}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono uppercase tracking-wider text-purple-200"
                    >
                      Email Address <span className="text-pink-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="e.g. alex@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-[#0D0818]/90 border text-sm text-white placeholder:text-purple-300/40 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all ${
                        errors.email ? 'border-rose-400' : 'border-purple-500/30'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-400 font-medium">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="subject"
                    className="block text-xs font-mono uppercase tracking-wider text-purple-200"
                  >
                    Subject <span className="text-pink-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: undefined });
                    }}
                    placeholder="Project Inquiry / Collaboration / Question"
                    className={`w-full px-4 py-3 rounded-xl bg-[#0D0818]/90 border text-sm text-white placeholder:text-purple-300/40 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all ${
                      errors.subject ? 'border-rose-400' : 'border-purple-500/30'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-[11px] text-rose-400 font-medium">{errors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono uppercase tracking-wider text-purple-200"
                  >
                    Message <span className="text-pink-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder="Share your thoughts, opportunity, or feedback..."
                    className={`w-full px-4 py-3 rounded-xl bg-[#0D0818]/90 border text-sm text-white placeholder:text-purple-300/40 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all resize-y ${
                      errors.message ? 'border-rose-400' : 'border-purple-500/30'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-400 font-medium">{errors.message}</p>
                  )}
                </div>

                {/* Submit Pill Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-pill transition-all duration-200 active:scale-95 disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
