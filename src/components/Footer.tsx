import React from 'react';
import { ArrowUp, Mail, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#07040D] border-t border-purple-500/20 pt-16 pb-12 text-purple-200/70 relative overflow-hidden">
      {/* Background Subtle Aurora */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-purple-600/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand & Tagline */}
          <div className="space-y-2 text-left">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-indigo-500 p-[1.5px] shadow-glow-sm">
                <div className="w-full h-full rounded-full bg-[#0D0818] flex items-center justify-center text-xs font-bold font-mono tracking-wider text-purple-200">
                  AP
                </div>
              </div>
              <span className="font-extrabold tracking-wider text-base text-white">
                {portfolioData.personal.wordmark}
              </span>
            </div>
            <p className="text-xs text-purple-300/60 max-w-sm">
              {portfolioData.footer.tagline}
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-medium uppercase tracking-wider">
            {portfolioData.navigation.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="hover:text-pink-300 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Direct Email & Back to top button */}
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="inline-flex items-center gap-1.5 text-xs text-purple-100 hover:text-pink-300 transition-colors glass-dusk px-3.5 py-2 rounded-full border border-purple-400/30 font-mono"
            >
              <Mail className="w-3.5 h-3.5 text-pink-400" />
              <span>{portfolioData.contact.email}</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full glass-dusk hover:border-purple-400/50 text-purple-200 hover:text-white transition-all shadow-glow-sm active:scale-95"
              aria-label="Scroll back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4 text-pink-400" />
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-purple-500/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-purple-300/50">
          <p>
            © {currentYear} {portfolioData.personal.name}. {portfolioData.footer.rights}
          </p>
          <p className="flex items-center gap-1.5 text-[11px]">
            Crafted with <Heart className="w-3 h-3 text-pink-400 fill-pink-400" /> in Twilight Purple Aesthetic
          </p>
        </div>
      </div>
    </footer>
  );
};
