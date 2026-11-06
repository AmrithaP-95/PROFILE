import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink, Github, Droplets, Activity, Cpu, Wifi } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;
  const [activeNotice, setActiveNotice] = useState<string | null>(null);

  const handleLinkClick = (e: React.MouseEvent, url: string | undefined, type: 'github' | 'demo') => {
    if (!url) {
      e.preventDefault();
      setActiveNotice(
        type === 'github'
          ? 'Repository documentation will be linked upon release.'
          : 'Project demonstration details available on request.'
      );
      setTimeout(() => setActiveNotice(null), 3000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="projects" className="py-28 bg-[#090514] relative overflow-hidden">
      {/* Background Dusk Glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full glass-dusk border border-purple-400/30 text-purple-300 text-xs font-mono tracking-widest uppercase">
              <FolderGit2 className="w-3.5 h-3.5 text-pink-400" />
              <span>Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Featured <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-200 to-indigo-200">Projects</span>
            </h2>
            <p className="text-sm sm:text-base text-purple-200/80">
              {projects.description}
            </p>
            <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto" />
          </motion.div>

          {/* Floating Notice Bar */}
          {activeNotice && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="max-w-md mx-auto p-3 glass-dusk border border-pink-400/40 rounded-xl shadow-glow-sm text-xs text-center text-purple-100 font-medium"
            >
              {activeNotice}
            </motion.div>
          )}

          {/* Projects List */}
          <div className="max-w-5xl mx-auto space-y-10">
            {projects.items.map((project) => (
              <motion.article
                key={project.id}
                variants={itemVariants}
                className="group rounded-3xl glass-dusk border border-purple-500/25 hover:border-purple-400/50 shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Left Column: Atmospheric Telemetry Graphic */}
                  <div className="lg:col-span-5 bg-gradient-to-br from-[#120826] via-[#1A0E38] to-[#0D061C] p-8 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-purple-500/20 relative overflow-hidden">
                    {/* Concentric rings */}
                    <div className="absolute -top-12 -left-12 w-52 h-52 rounded-full border border-purple-500/20 pointer-events-none" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-pink-500/10 pointer-events-none" />

                    {/* Top Tag & Project Number */}
                    <div className="flex items-center justify-between relative z-10">
                      <span className="font-mono text-xs font-bold text-pink-300 tracking-wider px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30">
                        PROJECT {project.number}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-purple-300/70 font-mono">
                        <Activity className="w-3.5 h-3.5 text-pink-400 animate-pulse" />
                        <span>IoT System</span>
                      </div>
                    </div>

                    {/* Center Schematic Visual */}
                    <div className="my-8 flex flex-col items-center justify-center relative z-10">
                      <div className="relative">
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600 to-pink-600 blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />
                        
                        <div className="relative w-40 h-40 rounded-3xl bg-[#0F0721]/90 border border-purple-400/40 p-5 shadow-2xl flex flex-col items-center justify-center gap-2.5">
                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-500/20 to-pink-500/20 border border-purple-400/30 flex items-center justify-center text-pink-400">
                            <Droplets className="w-7 h-7" />
                          </div>
                          <div className="flex items-center gap-2 text-[10px] font-mono text-purple-200">
                            <Wifi className="w-3.5 h-3.5 text-purple-400" />
                            <span>Sensors Link</span>
                          </div>
                        </div>

                        {/* Floating Node Badge */}
                        <div className="absolute -bottom-2 -right-2 px-2.5 py-0.5 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white text-[10px] font-mono font-medium flex items-center gap-1 shadow-pill">
                          <Cpu className="w-3 h-3" />
                          <span>Smart Node</span>
                        </div>
                      </div>
                    </div>

                    {/* Schematic Bottom Metadata */}
                    <div className="flex items-center justify-between text-[11px] font-mono text-purple-300/70 border-t border-purple-500/20 pt-3 relative z-10">
                      <span>Telemetry • Purification</span>
                      <span className="text-pink-400 font-semibold">Active Initiative</span>
                    </div>
                  </div>

                  {/* Right Column: Project Details */}
                  <div className="lg:col-span-7 p-7 sm:p-10 flex flex-col justify-between space-y-6 text-left">
                    <div className="space-y-4">
                      {/* Category */}
                      <span className="text-xs font-mono font-semibold tracking-wider uppercase text-pink-400">
                        {project.category}
                      </span>

                      {/* Title */}
                      <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-purple-200 transition-colors leading-snug">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-base text-purple-200/80 leading-relaxed font-normal">
                        {project.description}
                      </p>

                      {/* Technology Tags */}
                      <div className="pt-2 flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-xs font-medium px-3 py-1 rounded-full bg-[#140C26] text-purple-200 border border-purple-500/25 group-hover:border-purple-400/40 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Links / CTAs */}
                    <div className="pt-6 border-t border-purple-500/20 flex items-center gap-3">
                      <a
                        href={project.githubUrl || '#'}
                        onClick={(e) => handleLinkClick(e, project.githubUrl, 'github')}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-pill transition-all active:scale-95"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code Repository</span>
                      </a>

                      <a
                        href={project.demoUrl || '#'}
                        onClick={(e) => handleLinkClick(e, project.demoUrl, 'demo')}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold text-purple-200 hover:text-white glass-dusk hover:border-purple-400/40 transition-all active:scale-95"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Documentation</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
