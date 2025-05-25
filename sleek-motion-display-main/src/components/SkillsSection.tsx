
import React from 'react';

interface SkillsSectionProps {
  darkMode: boolean;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ darkMode }) => {
  const skillCategories = [
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'React.js', level: 85 },
        { name: 'Bootstrap', level: 90 },
      ]
    },
    {
      title: 'Backend Technologies',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 85 },
        { name: 'REST APIs', level: 80 },
        { name: 'JWT Authentication', level: 75 },
      ]
    },
    {
      title: 'Database & Tools',
      skills: [
        { name: 'MongoDB', level: 80 },
        { name: 'MySQL', level: 85 },
        { name: 'Git', level: 85 },
        { name: 'GitHub', level: 90 },
        { name: 'Postman', level: 80 },
      ]
    },
    {
      title: 'Specializations',
      skills: [
        { name: 'MERN Stack', level: 80 },
        { name: 'Responsive Design', level: 90 },
        { name: 'Web Security', level: 75 },
        { name: 'Performance Optimization', level: 70 },
      ]
    }
  ];

  const SkillBar: React.FC<{ skill: { name: string; level: number }; index: number }> = ({ skill, index }) => (
    <div className="mb-6 animate-slide-in-left" style={{ animationDelay: `${index * 100}ms` }}>
      <div className="flex justify-between items-center mb-2">
        <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          {skill.name}
        </span>
        <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {skill.level}%
        </span>
      </div>
      <div className={`w-full h-2 rounded-full overflow-hidden ${
        darkMode ? 'bg-gray-700' : 'bg-gray-200'
      }`}>
        <div 
          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-1000 ease-out hover:from-purple-400 hover:to-blue-400 animate-skill-bar"
          style={{ 
            width: `${skill.level}%`,
            animationDelay: `${index * 0.1}s`
          }}
        ></div>
      </div>
    </div>
  );

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
            My <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full mb-4"></div>
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Technologies and tools I use to build modern web applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`p-8 rounded-2xl ${
                darkMode 
                  ? 'bg-white/5 border border-white/10' 
                  : 'bg-white border border-gray-200'
              } backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-500 animate-scale-in`}
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <h3 className={`text-2xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skill.name} 
                    skill={skill} 
                    index={skillIndex}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Technologies Cloud */}
        <div className="mt-16 animate-fade-in">
          <h3 className={`text-2xl font-bold text-center mb-8 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'HTML5', 'CSS3', 'JavaScript', 'React.js', 'Node.js', 'Express.js',
              'MongoDB', 'MySQL', 'Bootstrap', 'Git', 'GitHub', 'Postman',
              'JWT', 'REST APIs', 'Responsive Design', 'MERN Stack'
            ].map((tech, index) => (
              <span
                key={tech}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-110 cursor-default animate-fade-in ${
                  darkMode 
                    ? 'bg-white/10 text-white hover:bg-white/20' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
