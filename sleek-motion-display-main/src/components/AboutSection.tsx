
import React from 'react';
import { Calendar, MapPin, GraduationCap, Briefcase, Phone, Mail, Linkedin } from 'lucide-react';

interface AboutSectionProps {
  darkMode: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ darkMode }) => {
  const personalInfo = [
    { icon: Phone, label: 'Phone', value: '+91 8248225449' },
    { icon: Mail, label: 'Email', value: 'thangamari616@gmail.com' },
    { icon: MapPin, label: 'Location', value: 'Tirunelveli, Tamil Nadu' },
    { icon: Linkedin, label: 'LinkedIn', value: 'https://www.linkedin.com/in/thanga-mari-03334126b/' },
  ];

  const education = [
    {
      degree: 'B.Sc Computer Science',
      school: 'The Madurai Diraviyam Thayumanavar Hindu College, Tirunelveli',
      period: '2022 - 2025',
      grade: 'CGPA: 7.5/10',
      description: 'Successfully completed Bachelor\'s degree in Computer Science with a focus on web technologies and software development.'
    }
  ];

  const experience = [
    {
      title: 'Full Stack Intern (MERN)',
      company: 'Roriri Software Solution',
      period: '1 Week',
      description: 'Built a responsive student admission portal with JWT authentication. Gained hands-on experience with MERN stack development, database management, and secure authentication implementation.'
    }
  ];

  return (
    <div className={`min-h-screen py-20 px-6 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'
    }`}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            About <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Personal Summary */}
          <div className="space-y-8">
            <div className={`p-8 rounded-2xl ${
              darkMode 
                ? 'bg-white/5 border border-white/10' 
                : 'bg-white border border-gray-200'
            } backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-500 animate-slide-in-left`}>
              <h3 className={`text-2xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Personal Summary
              </h3>
              <p className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Passionate MERN Stack Developer with hands-on experience in building responsive 
                and secure web applications using MongoDB, Express.js, React.js, and Node.js. 
                Currently pursuing B.Sc Computer Science and eager to contribute to innovative 
                projects while continuously learning new technologies and best practices in 
                modern web development.
              </p>
            </div>

            {/* Personal Info */}
            <div className={`p-8 rounded-2xl ${
              darkMode 
                ? 'bg-white/5 border border-white/10' 
                : 'bg-white border border-gray-200'
            } backdrop-blur-sm animate-slide-in-left delay-300`}>
              <h3 className={`text-2xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Contact Information
              </h3>
              <div className="space-y-4">
                {personalInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">
                      <info.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {info.label}
                      </p>
                      <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {info.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Experience */}
          <div className="space-y-8">
            {/* Education */}
            <div className={`p-8 rounded-2xl ${
              darkMode 
                ? 'bg-white/5 border border-white/10' 
                : 'bg-white border border-gray-200'
            } backdrop-blur-sm animate-slide-in-right`}>
              <div className="flex items-center mb-6">
                <GraduationCap size={24} className="text-blue-500 mr-3" />
                <h3 className={`text-2xl font-bold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Education
                </h3>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <h4 className={`text-lg font-semibold ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          {edu.degree}
                        </h4>
                        <p className="text-blue-400 font-medium">{edu.school}</p>
                        <div className="flex justify-between items-center">
                          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
                            {edu.period}
                          </p>
                          <span className="text-purple-400 font-semibold text-sm">
                            {edu.grade}
                          </span>
                        </div>
                        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className={`p-8 rounded-2xl ${
              darkMode 
                ? 'bg-white/5 border border-white/10' 
                : 'bg-white border border-gray-200'
            } backdrop-blur-sm animate-slide-in-right delay-300`}>
              <div className="flex items-center mb-6">
                <Briefcase size={24} className="text-purple-500 mr-3" />
                <h3 className={`text-2xl font-bold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Internship Experience
                </h3>
              </div>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <h4 className={`text-lg font-semibold ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          {exp.title}
                        </h4>
                        <p className="text-purple-400 font-medium">{exp.company}</p>
                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
                          Duration: {exp.period}
                        </p>
                        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
