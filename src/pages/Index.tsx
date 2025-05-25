
import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import ResumeSection from '../components/ResumeSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="flex w-full">
        <Sidebar 
          activeSection={activeSection} 
          setActiveSection={setActiveSection}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        
        <main className="flex-1 ml-0 lg:ml-64 transition-all duration-300">
          <div className="relative">
            <section id="home" className="min-h-screen">
              <HeroSection darkMode={darkMode} />
            </section>
            
            <section id="about" className="min-h-screen">
              <AboutSection darkMode={darkMode} />
            </section>
            
            <section id="projects" className="min-h-screen">
              <ProjectsSection darkMode={darkMode} />
            </section>
            
            <section id="skills" className="min-h-screen">
              <SkillsSection darkMode={darkMode} />
            </section>
            
            <section id="resume" className="min-h-screen">
              <ResumeSection darkMode={darkMode} />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
