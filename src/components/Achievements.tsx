import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Wrench, Lightbulb, Award, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const iconMap: Record<string, React.ReactNode> = {
  Zap: <Zap className="w-6 h-6 text-pink-400" />,
  Wrench: <Wrench className="w-6 h-6 text-purple-400" />,
  Lightbulb: <Lightbulb className="w-6 h-6 text-indigo-400" />,
};

export const Achievements: React.FC = () => {
  const { activities } = portfolioData;

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
    <section id="achievements" className="py-28 bg-[#07040D] relative overflow-hidden">
      {/* Background Starry Glow */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

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
              <Award className="w-3.5 h-3.5 text-pink-400" />
              <span>Milestones</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Activities & <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-200 to-indigo-200">Experiences</span>
            </h2>
            <p className="text-sm sm:text-base text-purple-200/80">
              {activities.description}
            </p>
            <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto" />
          </motion.div>

          {/* Bento-Grid Layout with 3 Distinct Activity Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {activities.items.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative p-8 rounded-3xl glass-dusk glass-dusk-hover border border-purple-500/20 hover:border-purple-400/50 shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle Lavender Gradient Accent in Corner */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-purple-500/15 via-pink-500/10 to-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-300" />

                <div className="space-y-6 relative z-10 text-left">
                  {/* Top Row: Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-purple-500/15 border border-purple-400/30 flex items-center justify-center group-hover:bg-purple-500/25 transition-colors duration-200 shadow-glow-sm">
                      {iconMap[item.iconName] || <Zap className="w-6 h-6 text-pink-400" />}
                    </div>
                    <span className="text-[10px] font-mono tracking-wider font-semibold text-pink-300 bg-purple-500/20 px-3 py-1 rounded-full border border-purple-400/30">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-200 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono text-purple-300/70 mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-purple-200/80 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Timeline Pill */}
                <div className="pt-6 mt-6 border-t border-purple-500/20 flex items-center justify-between text-xs text-purple-300/60 relative z-10">
                  <span className="font-mono text-[11px]">{item.period || 'Academic Track'}</span>
                  <div className="flex items-center gap-1 text-pink-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[11px]">Experience</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
