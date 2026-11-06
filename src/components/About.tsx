import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Compass, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="w-5 h-5 text-pink-400" />,
  Code2: <Code2 className="w-5 h-5 text-purple-400" />,
  Compass: <Compass className="w-5 h-5 text-indigo-400" />,
};

export const About: React.FC = () => {
  const { about } = portfolioData;

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
    <section id="about" className="py-28 bg-[#090514] relative overflow-hidden">
      {/* Background Subtle Dusk Accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

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
              <Sparkles className="w-3.5 h-3.5 text-pink-400" />
              <span>Background</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              A Little <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-200 to-indigo-200">About Me</span>
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto" />
          </motion.div>

          {/* Narrative Content in Dusk Glass Card */}
          <motion.div
            variants={itemVariants}
            className="max-w-3xl mx-auto rounded-3xl glass-dusk p-8 sm:p-12 border border-purple-500/20 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-purple-500/15 via-pink-500/10 to-transparent rounded-bl-full pointer-events-none" />
            
            <div className="space-y-6 text-base sm:text-lg text-purple-100/90 leading-relaxed font-normal relative z-10">
              {about.paragraphs.map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          {/* 3 Compact Information Cards */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {about.infoCards.map((card, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative p-6 rounded-2xl glass-dusk glass-dusk-hover border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/15 border border-purple-400/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-purple-500/25 transition-all duration-200">
                    {iconMap[card.iconName] || <Sparkles className="w-5 h-5 text-purple-300" />}
                  </div>
                  <div className="min-w-0 text-left">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-purple-300/60 block">
                      {card.label}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-white mt-0.5 leading-snug">
                      {card.value}
                    </h3>
                    {card.subValue && (
                      <p className="text-xs text-purple-200/70 mt-1">
                        {card.subValue}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
