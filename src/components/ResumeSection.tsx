
import React from 'react';
import { Download, FileText, Mail, Phone, MapPin, Linkedin } from 'lucide-react';

interface ResumeSectionProps {
  darkMode: boolean;
}

const ResumeSection: React.FC<ResumeSectionProps> = ({ darkMode }) => {
  const handleDownloadResume = () => {
    // Create a mock PDF download
    const link = document.createElement('a');
    link.href = '/fullstack_developer.pdf'; // You would replace this with actual resume PDF
    link.download = 'Thangamari_V_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`min-h-screen py-20 px-6 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'
    }`}>
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            My <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Resume</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full mb-4"></div>
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Download my resume or view my credentials and experience
          </p>
        </div>

        {/* Resume Preview */}
        <div className={`rounded-2xl overflow-hidden ${
          darkMode 
            ? 'bg-white/5 border border-white/10' 
            : 'bg-white border border-gray-200'
        } backdrop-blur-sm shadow-2xl animate-scale-in`}>
          
          {/* Resume Header */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 text-white">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold">
                TM
              </div>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">THANGAMARI V</h1>
                <p className="text-xl mb-4">Full Stack Developer</p>
                <div className="flex flex-col sm:flex-row gap-4 text-sm">
                  <div className="flex items-center justify-center md:justify-start">
                    <Mail size={16} className="mr-2" />
                    thangamari616@Gmail.com
                  </div>
                  <div className="flex items-center justify-center md:justify-start">
                    <Phone size={16} className="mr-2" />
                    +91 8248225449
                  </div>
                  <div className="flex items-center justify-center md:justify-start">
                    <MapPin size={16} className="mr-2" />
                    Tirunelveli, Tamil Nadu
                  </div>
                </div>
                <div className="flex justify-center md:justify-start mt-2">
                  <div className="flex items-center">
                    <Linkedin size={16} className="mr-2" />
                    https://www.linkedin.com/in/thanga-mari-03334126b/
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Resume Content */}
          <div className="p-8 space-y-8">
            
            {/* Professional Summary */}
            <section>
              <h3 className={`text-xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Professional Summary
              </h3>
              <p className={`leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Passionate MERN Stack Developer with hands-on experience in building responsive and secure web applications 
                using MongoDB, Express.js, React.js, and Node.js. Currently pursuing B.Sc Computer Science with strong 
                foundation in web technologies, database management, and modern development practices. Experienced in 
                implementing JWT authentication and creating user-friendly interfaces.
              </p>
            </section>

            {/* Education */}
            <section>
              <h3 className={`text-xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Education
              </h3>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Bachelor of Computer Science
                    </h4>
                    <p className="text-purple-500 font-medium">The Madurai Diraviyam Thayumanavar Hindu College, Tirunelveli</p>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Specialization in Web Technologies and Software Development
                    </p>
                  </div>
                  <div className="text-right">
                    <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      2022 - 2025
                    </span>
                    <p className="text-purple-500 font-semibold text-sm">
                      CGPA: 7.5/10
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Experience */}
            <section>
              <h3 className={`text-xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Internship Experience
              </h3>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Full Stack Intern (MERN)
                    </h4>
                    <p className="text-purple-500 font-medium">Roriri Software Solution</p>
                  </div>
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Duration: 1 Week
                  </span>
                </div>
                <ul className={`list-disc list-inside space-y-1 text-sm ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <li>Built a responsive student admission portal with JWT authentication</li>
                  <li>Implemented secure user registration and login functionality</li>
                  <li>Developed RESTful APIs for data management and user interactions</li>
                  <li>Gained hands-on experience with MERN stack development</li>
                </ul>
              </div>
            </section>

            {/* Projects */}
            <section>
              <h3 className={`text-xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Key Projects
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    College Admission Portal
                  </h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                    Tech Stack: Node.js, MySQL, Bootstrap
                  </p>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Comprehensive student admission system with secure data management
                  </p>
                </div>
                <div>
                  <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Weather Dashboard
                  </h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                    Tech Stack: React.js, OpenWeather API
                  </p>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Real-time weather application with responsive design
                  </p>
                </div>
              </div>
            </section>

            {/* Technical Skills */}
            <section>
              <h3 className={`text-xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Technical Skills
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h5 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Frontend</h5>
                  <div className="space-y-1">
                    {['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Bootstrap'].map((skill) => (
                      <span 
                        key={skill}
                        className={`block text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                      >
                        • {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Backend</h5>
                  <div className="space-y-1">
                    {['Node.js', 'Express.js', 'JWT Auth', 'REST APIs'].map((skill) => (
                      <span 
                        key={skill}
                        className={`block text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                      >
                        • {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Database & Tools</h5>
                  <div className="space-y-1">
                    {['MongoDB', 'MySQL', 'Git', 'GitHub', 'Postman'].map((skill) => (
                      <span 
                        key={skill}
                        className={`block text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                      >
                        • {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Download Button */}
        <div className="text-center mt-12">
          <button
            onClick={handleDownloadResume}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Download size={20} className="mr-3" />
            Download Resume (PDF)
          </button>
          
          <p className={`mt-4 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            © All rights reversed || @Thangamari – {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
