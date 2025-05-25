
import React, { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection, darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'resume', label: 'Resume' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(sectionId);
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`lg:hidden fixed z-50 p-2 rounded-lg backdrop-blur-sm border transition-all duration-300 ${
          isOpen 
            ? 'top-4 right-4' 
            : 'top-4 left-4'
        } ${
          darkMode 
            ? 'bg-white/10 border-white/20 text-white hover:bg-white/20' 
            : 'bg-black/10 border-black/20 text-black hover:bg-black/20 shadow-lg'
        }`}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-64 transform transition-all duration-300 z-40 ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <div className="h-full bg-gradient-to-b from-purple-900/90 to-blue-900/90 backdrop-blur-xl border-r border-white/10">
          <div className="p-6">
            {/* Portfolio Title - Fixed layout */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-white mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent whitespace-nowrap">
                Portfolio
              </h1>
              <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
            </div>

            {/* Navigation Items */}
            <nav className="space-y-2 mb-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 group ${
                    activeSection === item.id
                      ? 'bg-white/20 text-white border border-white/30'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="relative">
                    {item.label}
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 ${
                      activeSection === item.id ? 'w-full' : 'group-hover:w-full'
                    }`}></span>
                  </span>
                </button>
              ))}
            </nav>

            {/* Dark Mode Toggle */}
            <div className="mt-auto">
              <button
                onClick={toggleDarkMode}
                className="flex items-center justify-center w-full p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 text-white"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                <span className="ml-2 text-sm">
                  {darkMode ? 'Light Mode' : 'Dark Mode'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
