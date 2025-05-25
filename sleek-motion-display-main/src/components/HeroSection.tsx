
import React, { useState, useEffect } from 'react';
import { Github, Mail, ArrowDown, Linkedin, Phone, MapPin } from 'lucide-react';

interface HeroSectionProps {
  darkMode: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ darkMode }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const texts = [
    "Passionate MERN Stack Developer",
    "Full Stack Web Developer", 
    "React.js Specialist",
    "Node.js Developer"
  ];

  useEffect(() => {
    const currentText = texts[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, texts]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background with Particles */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-br ${
          darkMode 
            ? 'from-gray-900 via-purple-900 to-blue-900' 
            : 'from-blue-50 via-purple-50 to-pink-50'
        }`}></div>
        
        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full opacity-20 animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-30 animate-bounce delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* 3D Profile Image with Mouse Movement */}
        <div className="mb-8 flex justify-center">
          <div 
            className="relative group cursor-pointer"
            style={{
              transform: `perspective(1000px) rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg)`
            }}
          >
            <div className="w-40 h-40 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 p-1 transform group-hover:scale-110 transition-all duration-500">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-white text-6xl font-bold">
                TV
              </div>
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <h1 className={`text-5xl md:text-7xl font-bold ${
            darkMode ? 'text-white' : 'text-gray-900'
          } animate-fade-in`}>
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              THANGAMARI V
            </span>
          </h1>
          
          <div className="h-16 flex items-center justify-center">
            <h2 className={`text-2xl md:text-3xl font-medium ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {displayText}
              <span className="animate-pulse">|</span>
            </h2>
          </div>

          <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          } animate-fade-in delay-300`}>
            Passionate MERN Stack Developer with hands-on experience in building responsive 
            and secure web applications using MongoDB, Express.js, React.js, and Node.js.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-purple-500" />
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <a href="tel:+91 8248225449">+91 8248225449</a>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-purple-500" />
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                thangamari616@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-purple-500" />
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Tirunelveli, Tamil Nadu
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full font-semibold hover:from-purple-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            
            <div className="flex gap-4">
              <a href="https://github.com/thangamari27" target="_blank" rel="noopener noreferrer" 
                 className={`p-3 rounded-full ${
                   darkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-200 hover:bg-gray-300'
                 } transition-all duration-300 hover:scale-110`}>
                <Github size={24} className={darkMode ? 'text-white' : 'text-gray-700'} />
              </a>
              <a href="https://www.linkedin.com/in/thanga-mari-03334126b/" target="_blank" rel="noopener noreferrer" 
                 className={`p-3 rounded-full ${
                   darkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-200 hover:bg-gray-300'
                 } transition-all duration-300 hover:scale-110`}>
                <Linkedin size={24} className={darkMode ? 'text-white' : 'text-gray-700'} />
              </a>
              <a href="mailto:thangamari616@gmail.com" 
                 className={`p-3 rounded-full ${
                   darkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-200 hover:bg-gray-300'
                 } transition-all duration-300 hover:scale-110`}>
                <Mail size={24} className={darkMode ? 'text-white' : 'text-gray-700'} />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ArrowDown size={24} className={darkMode ? 'text-white/60' : 'text-gray-600'} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
