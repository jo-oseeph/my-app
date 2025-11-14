import React, { useEffect, useRef, useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const sectionRef = useRef(null);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Composite Connect',
      description: 'Green Kenya Hub - A platform promoting environmental sustainability and connecting eco-conscious communities in Kenya.',
      image: '/images/project.jpg',
      category: 'Web Development',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
      github: 'https://github.com/yourusername/composite-connect',
      live: 'https://composite-connect-demo.com'
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with modern design, payment integration, and comprehensive admin dashboard.',
      image: '/images/project.jpg',
      category: 'Web Development',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
      github: 'https://github.com/yourusername/ecommerce',
      live: 'https://ecommerce-demo.com'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, team collaboration, and advanced analytics.',
      image: '/images/project.jpg',
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
    },
    {
      id: 5,
      title: 'Blog Platform',
      description: 'Feature-rich blogging platform with markdown support, SEO optimization, and content management system.',
      image: '/images/project.jpg',
      category: 'Web Development',
      technologies: ['Next.js', 'MongoDB', 'MDX', 'Vercel'],
      github: 'https://github.com/yourusername/blog-platform',
      live: 'https://blog-demo.com'
    },
    {
      id: 6,
      title: 'Chat Application',
      description: 'Real-time messaging app with rooms, file sharing, video calls, and end-to-end encryption.',
      image: '/images/project.jpg',
      category: 'Web Development',
      technologies: ['React', 'Node.js', 'Socket.io', 'WebRTC'],
      github: 'https://github.com/yourusername/chat-app',
      live: 'https://chat-demo.com'
    }
  ];

  return (
    <div ref={sectionRef} className="min-h-screen relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-24 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-20 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
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
        {/* Animated Header */}
        <div className="text-center mb-20 animate-on-scroll">
          <div className="inline-block mb-6 relative">
            <div className="absolute inset-0 bg-cyan-400 blur-xl opacity-30 animate-pulse"></div>
            <span className="relative text-cyan-400 text-sm font-bold tracking-widest uppercase bg-cyan-400/10 px-6 py-3 rounded-full border-2 border-cyan-400/30">
              Portfolio
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            My Recent{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
                Projects
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full"></div>
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Explore my latest work showcasing innovation, creativity, and technical excellence
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-20">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="animate-on-scroll group relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700/30 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg">
                    {project.category}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-4">
                {/* Project Title */}
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1.5 bg-gray-800/60 text-gray-300 text-xs font-medium rounded-lg border border-gray-700/50 hover:border-cyan-400/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1.5 bg-cyan-500/10 text-cyan-400 text-xs font-medium rounded-lg border border-cyan-400/30">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-800/60 text-white text-sm font-medium rounded-xl border border-gray-700/50 hover:border-cyan-400/50 hover:bg-gray-800 transition-all duration-300 group/btn"
                  >
                    <FaGithub className="text-base group-hover/btn:rotate-12 transition-transform" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 group/btn"
                  >
                    <FaExternalLinkAlt className="text-base group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    <span>Live</span>
                  </a>
                </div>
              </div>

              {/* Bottom Gradient Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-on-scroll">
          <div className="inline-block p-8 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-3xl border border-gray-700/30 hover:border-cyan-400/50 transition-all duration-500">
            <p className="text-gray-300 text-lg mb-6 max-w-md">
              Have a project in mind? Let's collaborate and create something amazing together!
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 group"
            >
              <span>Get In Touch</span>
              <FaExternalLinkAlt className="text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-40px) translateX(-10px);
          }
          75% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Projects;