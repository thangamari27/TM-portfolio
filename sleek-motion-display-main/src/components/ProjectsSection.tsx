
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectsSectionProps {
  darkMode: boolean;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ darkMode }) => {
  const projects = [
    {
      id: 1,
      title: 'College Admission Portal',
      description: 'A comprehensive student admission portal built with Node.js and MySQL. Features include student registration, application tracking, admin dashboard, and secure data management with Bootstrap for responsive design.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644',
      technologies: ['Node.js', 'MySQL', 'Bootstrap', 'Express.js'],
      liveUrl: '#',
      githubUrl: 'https://github.com/thangamari27/College-admission-portal'
    },
    {
      id: 2,
      title: 'Weather Dashboard',
      description: 'A dynamic weather dashboard that provides real-time weather information using OpenWeather API. Built with React.js featuring location-based weather forecasts, interactive charts, and responsive design.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b',
      technologies: ['React.js', 'OpenWeather API', 'CSS3', 'JavaScript'],
      liveUrl: 'https://nmweatherdashboard.netlify.app/',
      githubUrl: 'https://github.com/thangamari27/weather-dashboard'
    },
    {
      id: 3,
      title: 'Employee Management System',
      description: 'A full-stack employee management system built during internship at Roriri Software Solution. Features include secure JWT authentication, CRUD operations, role-based access control, and a responsive user interface.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
      technologies: ['Firebase', 'Express.js', 'React.js', 'Node.js', 'JWT'],
      liveUrl: '#',
      githubUrl: 'https://github.com/thangamari27/employee-management-system'
    },
    {
      id: 4,
      title: 'FoodieHub',
      description: 'A full-stack food ordering platform allowing users to browse, order, and track meals from local restaurants. Built with React.js and Tailwind CSS, it features a user-friendly UI, secure authentication, real-time order updates, and admin controls.',
      image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Node.js', 'MySQL'],
      liveUrl: 'https://foodiehub-klzr.onrender.com/',
      githubUrl: 'https://github.com/thangamari27/foodiehub'
    }
  ];

  return (
    <div className={`min-h-screen py-20 px-6 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            My <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full mb-4"></div>
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Here are some of my recent projects that showcase my MERN stack development skills
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-2xl ${
                darkMode 
                  ? 'bg-white/5 border border-white/10' 
                  : 'bg-white border border-gray-200'
              } backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-500 hover:shadow-2xl animate-scale-in`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
                    >
                      <ExternalLink size={20} className="text-white" />
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
                  >
                    <Github size={20} className="text-white" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-4 ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-400 rounded-full border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  {project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 text-center"
                    >
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${project.liveUrl === '#' ? 'flex-1' : ''} py-2 px-4 ${
                      darkMode 
                        ? 'bg-white/10 hover:bg-white/20 text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    } text-sm font-medium rounded-lg transition-all duration-300 text-center`}
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
