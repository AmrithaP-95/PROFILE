import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles, MessageSquare } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 pt-4 sm:pt-6 pointer-events-none">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Floating Glass Island Pill Navbar (Center/Full) */}
        <div
          className={`w-full flex items-center justify-between pointer-events-auto pill-nav rounded-full px-3.5 py-2 sm:px-5 sm:py-2.5 transition-all duration-300 ${
            isScrolled ? 'shadow-2xl border-purple-400/40 bg-[#0D0818]/95' : ''
          }`}
        >
          {/* Brand Avatar Monogram */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="group flex items-center gap-2.5 focus:outline-none rounded-full"
            aria-label="Amritha P Home"
          >
            <div className="relative w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-indigo-500 p-[1.5px] shadow-glow-sm group-hover:shadow-glow-md transition-shadow">
              <div className="w-full h-full rounded-full bg-[#0D0818] flex items-center justify-center text-xs font-bold font-mono tracking-wider text-purple-200">
                AP
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xs sm:text-sm tracking-wider text-white group-hover:text-purple-300 transition-colors">
                AMRITHA P
              </span>
              <span className="text-[9px] uppercase tracking-widest text-purple-300/60 font-mono hidden sm:block">
                CS Student
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
            {portfolioData.navigation.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;

              return (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium tracking-wider uppercase transition-all duration-200 rounded-full focus:outline-none ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-purple-200/70 hover:text-white hover:bg-white/5'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-fuchsia-500/25 to-indigo-500/30 border border-purple-400/40 rounded-full shadow-[0_0_12px_rgba(168,85,247,0.3)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action: Pill CTA Inspired by Reference Image */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="group relative inline-flex items-center gap-2 pl-3.5 pr-1.5 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-pill transition-all duration-200 hover:scale-[1.03] active:scale-95"
            >
              <span>Connect</span>
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <MessageSquare className="w-3.5 h-3.5 text-white" />
              </div>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-full text-purple-200 hover:text-white bg-white/5 hover:bg-white/10 border border-purple-500/30 transition-colors"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-3 max-w-md mx-auto pointer-events-auto pill-nav rounded-2xl p-4 shadow-2xl"
          >
            <div className="space-y-1">
              {portfolioData.navigation.map((item) => {
                const sectionId = item.href.replace('#', '');
                const isActive = activeSection === sectionId;

                return (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-medium uppercase tracking-wider transition-colors ${
                      isActive
                        ? 'bg-purple-600/30 text-white font-bold border border-purple-400/40'
                        : 'text-purple-200/70 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <Sparkles className="w-3.5 h-3.5 text-purple-300" />}
                  </button>
                );
              })}

              <div className="pt-3 mt-2 border-t border-purple-500/20">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 shadow-pill"
                >
                  <span>Get In Touch</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
