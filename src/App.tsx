import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { useActiveSection } from './hooks/useActiveSection';

export const App: React.FC = () => {
  const sectionIds = ['home', 'about', 'skills', 'projects', 'achievements', 'contact'];
  const activeSection = useActiveSection(sectionIds, 160);

  return (
    <div className="min-h-screen bg-[#07040D] text-[#F8FAFC] selection:bg-purple-500/30 selection:text-purple-200 relative">
      {/* Radiant Twilight Custom Cursor */}
      <CustomCursor />

      {/* Floating Island Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
