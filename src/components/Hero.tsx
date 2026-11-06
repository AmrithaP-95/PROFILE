import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, FileDown, Sparkles, MapPin, Terminal, CheckCircle2, Star } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Hero: React.FC = () => {
  const { personal } = portfolioData;
  const [resumeNotification, setResumeNotification] = useState(false);

  const handleResumeClick = (e: React.MouseEvent) => {
    if (!personal.hasResume) {
      e.preventDefault();
      setResumeNotification(true);
      setTimeout(() => setResumeNotification(false), 3500);
    }
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center items-center overflow-hidden bg-[#07040D]"
    >
      {/* Twilight Aurora & Nebula Glow Backdrops */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Upper Twilight Magenta/Purple Aurora Sky */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] sm:w-[900px] h-[550px] bg-gradient-to-b from-purple-600/25 via-fuchsia-600/15 to-transparent blur-[110px] rounded-full pointer-events-none -z-10" />
        
        {/* Center Radiant Dusk Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-700/20 via-purple-500/25 to-pink-500/20 blur-[90px] rounded-full pointer-events-none -z-10 animate-pulse-glow" />

        {/* Ambient Stars Pattern */}
        <div className="absolute inset-0 stars-pattern opacity-60 pointer-events-none -z-10" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full text-center relative z-10 space-y-8">
        {/* Small Intro Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dusk border border-purple-400/30 text-purple-200 text-xs font-mono tracking-widest uppercase shadow-glow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-ping" />
          <Star className="w-3.5 h-3.5 text-purple-300" />
          <span>{personal.greeting}</span>
        </motion.div>

        {/* Name & Main Heading with Editorial Serif Typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.12]">
            I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-purple-300">{personal.name}</span>,
            <span className="block mt-2 font-serif font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-200 to-indigo-200 text-glow">
              Building ideas into meaningful technology.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-purple-200/80 font-normal max-w-2xl mx-auto leading-relaxed pt-2">
            An enthusiastic <span className="text-white font-medium">Computer Science student</span> passionate about programming, problem-solving and technology-driven innovation.
          </p>

          <div className="inline-flex items-center gap-2 text-xs font-mono text-purple-300/70 pt-1">
            <MapPin className="w-3.5 h-3.5 text-pink-400" />
            <span>{personal.college}</span>
          </div>
        </motion.div>

        {/* Pill Buttons Inspired Directly by the Reference Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-2"
        >
          {/* Main Glowing Pill CTA */}
          <button
            onClick={() => scrollTo('projects')}
            className="group relative inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-pill transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span className="tracking-wide">Explore My Work</span>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <ArrowDown className="w-4 h-4 text-white group-hover:translate-y-0.5 transition-transform" />
            </div>
          </button>

          {/* Secondary Ghost Glass CTA */}
          <button
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-purple-200 hover:text-white glass-dusk hover:border-purple-400/50 shadow-sm transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <span>Get In Touch</span>
            <ArrowUpRight className="w-4 h-4 text-purple-300" />
          </button>

          {/* Resume Pill */}
          <div className="relative">
            <a
              href={personal.resumeUrl}
              onClick={handleResumeClick}
              download="Amritha_P_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-medium text-purple-300/90 glass-dusk hover:text-white hover:border-purple-400/40 transition-all active:scale-95"
              title="Download Resume"
            >
              <FileDown className="w-4 h-4 text-pink-400" />
              <span>Resume</span>
            </a>

            {resumeNotification && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8 }}
                className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-72 p-3.5 glass-dusk rounded-2xl border border-purple-400/40 shadow-2xl text-left z-30"
              >
                <div className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-pink-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white text-xs">Resume in Preparation</p>
                    <p className="text-[11px] text-purple-200/80 mt-0.5">
                      Updated resume is being finalized. Connect with me directly through the contact section!
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Atmospheric Dusk Showcase Card (Centerpiece like in the image) */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="pt-6 max-w-3xl mx-auto"
        >
          <div className="relative rounded-3xl p-[1px] bg-gradient-to-b from-purple-500/40 via-purple-900/30 to-fuchsia-500/20 shadow-2xl">
            {/* Card Content with Twilight Sky Silhouette Aesthetics */}
            <div className="rounded-[23px] bg-[#0E081C]/90 backdrop-blur-2xl p-6 sm:p-8 overflow-hidden relative">
              {/* Internal Nebula Arc */}
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-gradient-to-b from-purple-500/30 to-transparent blur-3xl rounded-full pointer-events-none" />

              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
                {/* Visual Avatar / Twilight Monogram Centerpiece */}
                <div className="flex items-center gap-4">
                  <div className="relative group">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 blur-lg opacity-60 group-hover:opacity-100 transition-opacity" />
                    
                    {personal.profilePhotoUrl ? (
                      <div className="relative w-20 h-20 rounded-2xl overflow-hidden border border-purple-400/40">
                        <img
                          src={personal.profilePhotoUrl}
                          alt="Amritha P"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1E1238] via-[#120A24] to-[#2B144A] border border-purple-400/40 flex flex-col items-center justify-center shadow-lg">
                        <span className="text-2xl font-extrabold tracking-wider font-mono text-white">
                          AP
                        </span>
                        <span className="text-[9px] font-mono uppercase tracking-widest text-pink-300 mt-0.5">
                          Student
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <h2 className="text-base sm:text-lg font-bold text-white tracking-wide">
                        AMRITHA P
                      </h2>
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono bg-purple-500/20 text-purple-300 border border-purple-400/30 px-2 py-0.5 rounded-full">
                        <CheckCircle2 className="w-3 h-3 text-pink-400" /> CSE
                      </span>
                    </div>
                    <p className="text-xs text-purple-200/80 mt-0.5">
                      B.Tech Computer Science Engineering
                    </p>
                    <p className="text-[11px] font-mono text-purple-400/90 mt-0.5">
                      Amal Jyothi College of Engineering
                    </p>
                  </div>
                </div>

                {/* Minimal Terminal Snapshot */}
                <div className="w-full sm:w-auto text-left rounded-xl bg-[#090514] border border-purple-500/20 p-3.5 font-mono text-xs space-y-1">
                  <div className="flex items-center justify-between gap-4 text-[10px] text-purple-300/60 pb-1 border-b border-purple-500/15">
                    <span className="flex items-center gap-1">
                      <Terminal className="w-3 h-3 text-pink-400" /> amritha.profile
                    </span>
                    <span className="text-emerald-400 text-[9px]">● active</span>
                  </div>
                  <p className="text-purple-200/90">
                    <span className="text-pink-400">status</span>: "Undergraduate CSE",
                  </p>
                  <p className="text-purple-200/90">
                    <span className="text-purple-400">core</span>: ["C Programming", "IoT"],
                  </p>
                  <p className="text-purple-200/90">
                    <span className="text-indigo-400">focus</span>: "Problem Solving & Innovation"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="pt-6 flex justify-center"
        >
          <button
            onClick={() => scrollTo('about')}
            className="flex flex-col items-center gap-2 text-purple-300/50 hover:text-purple-200 transition-colors group focus:outline-none"
            aria-label="Scroll down to About section"
          >
            <span className="text-[10px] uppercase tracking-widest font-mono group-hover:text-pink-300 transition-colors">
              Scroll Down
            </span>
            <div className="w-5 h-8 rounded-full border border-purple-500/30 group-hover:border-purple-400 p-1 flex justify-center bg-[#0D0818]/80">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-1.5 rounded-full bg-pink-400 shadow-[0_0_6px_#F472B6]"
              />
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
