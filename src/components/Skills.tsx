import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layers, BookOpen, Terminal, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Skills: React.FC = () => {
  const { skills } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="skills" className="py-28 bg-[#07040D] relative overflow-hidden">
      {/* Background Star Glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[110px] pointer-events-none -z-10" />

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
              <Layers className="w-3.5 h-3.5 text-pink-400" />
              <span>Competencies</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Skills & <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-200 to-indigo-200">Technologies</span>
            </h2>
            <p className="text-sm sm:text-base text-purple-200/80">
              {skills.description}
            </p>
            <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto" />
          </motion.div>

          {/* Skills Grid */}
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-purple-300/70 px-1">
                <span className="flex items-center gap-1.5 uppercase tracking-wider">
                  <Terminal className="w-4 h-4 text-pink-400" />
                  Primary Foundation
                </span>
                <span className="text-pink-400 font-semibold">Verified Academic Core</span>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {skills.items.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    className="p-7 sm:p-8 rounded-3xl glass-dusk glass-dusk-hover border border-purple-500/25 relative overflow-hidden group shadow-2xl"
                  >
                    <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-purple-500/20 via-pink-500/10 to-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-300" />

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 relative z-10">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/15 border border-purple-400/30 flex items-center justify-center text-pink-400 flex-shrink-0 group-hover:scale-105 transition-transform duration-200 shadow-glow-sm">
                          <Code className="w-7 h-7" />
                        </div>
                        <div className="text-left">
                          <div className="flex items-center gap-2.5">
                            <h3 className="text-2xl font-bold text-white group-hover:text-purple-200 transition-colors">
                              {skill.name}
                            </h3>
                            {skill.badge && (
                              <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium bg-gradient-to-r from-purple-600/30 to-pink-600/30 text-purple-200 px-3 py-1 rounded-full border border-purple-400/40">
                                <CheckCircle className="w-3 h-3 text-pink-400" />
                                {skill.badge}
                              </span>
                            )}
                          </div>
                          {skill.description && (
                            <p className="text-sm sm:text-base text-purple-200/80 mt-2 max-w-xl leading-relaxed">
                              {skill.description}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="sm:text-right flex-shrink-0">
                        <span className="inline-block px-3.5 py-1.5 rounded-xl bg-[#0B0616] border border-purple-500/20 text-xs font-mono text-purple-300">
                          Structured Programming
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Extensible Learning Roadmap Card */}
            <motion.div
              variants={itemVariants}
              className="p-6 rounded-2xl glass-dusk border border-purple-500/20 text-xs sm:text-sm text-purple-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-400/30 flex items-center justify-center text-pink-400 flex-shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-white">
                    Curriculum & Skill Expansion
                  </p>
                  <p className="text-xs text-purple-300/70 mt-0.5">
                    Actively advancing in Object-Oriented Paradigms, Data Structures, Web Architectures, and IoT Systems.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="text-[11px] font-mono text-pink-400 bg-purple-500/20 px-3 py-1 rounded-lg border border-purple-400/30">
                  + Verified Growth
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
