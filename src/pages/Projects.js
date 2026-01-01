import React, { useEffect, useRef, useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const sectionRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute('data-index');
            setTimeout(() => {
              setVisibleCards(prev => [...new Set([...prev, parseInt(index)])]);
            }, parseInt(index) * 150);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll('.project-card');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Composite Connect',
      description: 'Green Kenya Hub - A platform promoting environmental sustainability and connecting eco-conscious communities in Kenya.',
      image: '/images/img11.png',
      category: 'Web Development',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
      github: 'https://github.com/yourusername/composite-connect',
      live: 'https://composite-connect-demo.com'
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with modern design, payment integration, and comprehensive admin dashboard.',
      image: '/images/img2.jpeg',
      category: 'Web Development',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
      github: 'https://github.com/yourusername/ecommerce',
      live: 'https://ecommerce-demo.com'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, team collaboration, and advanced analytics.',
      image: '/images/img3.jpeg',
      category: 'Web Development',
      technologies: ['React', 'Firebase', 'Socket.io', 'Material-UI'],
      github: 'https://github.com/yourusername/taskmanager',
      live: 'https://taskmanager-demo.com'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Interactive weather application with beautiful visualizations, forecasts, and location-based services.',
      image: '/images/project.jpg',
      category: 'Web Development',
      technologies: ['React', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
      github: 'https://github.com/yourusername/weather-app',
      live: 'https://weather-demo.com'
    }
  ];

  return (
    <div ref={sectionRef} className="min-h-screen relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-20 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-24 space-y-6">
          <div className="inline-block mb-4 relative group">
            <div className="absolute inset-0 bg-cyan-400 blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <span className="relative text-cyan-400 text-xs md:text-sm font-bold tracking-[0.3em] uppercase bg-cyan-400/10 px-8 py-3 rounded-full border-2 border-cyan-400/30 inline-block">
              Portfolio
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            Featured{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
                Projects
              </span>
              <div className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full transform origin-left animate-expand"></div>
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Crafting digital experiences with precision, innovation, and attention to detail
          </p>
        </div>

        {/* Projects Grid - 2x2 Layout */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto mb-28">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              data-index={index}
              className={`project-card group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-3xl overflow-hidden border border-gray-700/40 transition-all duration-700 ${
                visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              {/* Hover Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-700"></div>
              
              <div className="relative">
                {/* Project Image with Padding */}
                <div className="p-6 pb-4">
                  <div className="relative h-64 overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent z-10"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 z-20">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-2xl backdrop-blur-sm border border-white/20">
                        {project.category}
                      </span>
                    </div>

                    {/* Animated Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-600/0 group-hover:from-cyan-500/10 group-hover:via-blue-500/10 group-hover:to-purple-600/10 transition-all duration-700 z-10"></div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="px-6 pb-6 space-y-5">
                  {/* Project Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 group-hover:bg-clip-text transition-all duration-500" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed min-h-[4.5rem]">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2.5 pt-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span 
                        key={tech}
                        className="px-4 py-2 bg-gray-800/80 text-gray-300 text-xs font-medium rounded-xl border border-gray-700/50 hover:border-cyan-400/50 hover:bg-gray-800 hover:text-cyan-400 transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-4 py-2 bg-cyan-500/10 text-cyan-400 text-xs font-medium rounded-xl border border-cyan-400/30 hover:bg-cyan-500/20 transition-all duration-300 cursor-default">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2.5 px-5 py-3.5 bg-gray-800/80 text-white text-sm font-semibold rounded-xl border border-gray-700/50 hover:border-cyan-400/50 hover:bg-gray-800 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 group/btn"
                    >
                      <FaGithub className="text-lg group-hover/btn:rotate-12 transition-transform duration-300" />
                      <span>View Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2.5 px-5 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 group/btn"
                    >
                      <span>Live Demo</span>
                      <FaExternalLinkAlt className="text-sm group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 group-hover:w-full transition-all duration-1000 ease-out"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative p-10 bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-3xl border border-gray-700/40 group-hover:border-cyan-400/50 transition-all duration-500">
              <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
                Have an exciting project in mind? Let's collaborate and bring your vision to life!
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-2xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-2xl shadow-cyan-500/40 hover:shadow-cyan-500/60 hover:scale-105 group/cta"
              >
                <span>Start a Conversation</span>
                <FaExternalLinkAlt className="text-base group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap');

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-25px) translateX(15px);
          }
          50% {
            transform: translateY(-50px) translateX(-15px);
          }
          75% {
            transform: translateY(-25px) translateX(15px);
          }
        }

        @keyframes expand {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        .animate-expand {
          animation: expand 1.2s ease-out forwards;
        }

        .project-card {
          transition: opacity 0.7s ease-out, transform 0.7s ease-out;
        }

        .project-card:hover {
          transform: translateY(-8px);
        }
      `}</style>
    </div>
  );
};

export default Projects;