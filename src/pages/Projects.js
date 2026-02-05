import React, { useEffect, useRef, useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

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
            }, parseInt(index) * 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.project-card');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Composite Connect',
      description: 'Platform promoting environmental sustainability and connecting eco-conscious communities.',
      image: '/images/img11.png',
      technologies: ['React', 'Node.js', 'MongoDB'],
      live: 'https://composite-connect-demo.com',
      github: 'https://github.com/username/composite-connect'
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration and admin dashboard.',
      image: '/images/img2.jpeg',
      technologies: ['React', 'PostgreSQL', 'Stripe'],
      live: 'https://ecommerce-demo.com',
      github: 'https://github.com/username/ecommerce'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates and team features.',
      image: '/images/img3.jpeg',
      technologies: ['React', 'Firebase', 'Material-UI'],
      live: 'https://taskmanager-demo.com',
      github: 'https://github.com/username/task-manager'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Interactive weather application with visualizations, forecasts, and location services.',
      image: '/images/project.jpg',
      technologies: ['React', 'Chart.js', 'OpenWeather API'],
      live: 'https://weather-demo.com',
      github: 'https://github.com/username/weather-dashboard'
    },
    {
      id: 5,
      title: 'Social Media App',
      description: 'Modern social platform with real-time messaging and content sharing capabilities.',
      image: '/images/img11.png',
      technologies: ['React', 'Node.js', 'Socket.io'],
      live: 'https://social-demo.com',
      github: 'https://github.com/username/social-app'
    },
    {
      id: 6,
      title: 'Portfolio CMS',
      description: 'Content management system for portfolios with drag-and-drop interface builder.',
      image: '/images/img2.jpeg',
      technologies: ['Next.js', 'TypeScript', 'Prisma'],
      live: 'https://portfolio-cms-demo.com',
      github: 'https://github.com/username/portfolio-cms'
    }
  ];

  return (
    <div ref={sectionRef} className="min-h-screen relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-20 md:py-24 lg:py-28 px-6 md:px-12 lg:px-12 xl:px-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-20 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-left md:text-center mb-16 md:mb-20 lg:mb-24">
          <div className="inline-block mb-4">
            <span className="text-cyan-400 text-sm md:text-base font-semibold tracking-wider uppercase bg-cyan-400/10 px-5 py-2 rounded-full border border-cyan-400/20">
              Portfolio
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="text-gray-400 text-base md:text-lg lg:text-xl max-w-3xl md:mx-auto leading-relaxed">
            Crafting digital experiences with precision, innovation, and attention to detail
          </p>
        </div>

        {/* Projects Grid - 3 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-6 xl:gap-8 mb-16 md:mb-20">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-index={index}
              className={`project-card bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 transition-all duration-300 hover:scale-105 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/10 ${visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
            >
              <div className="flex flex-col h-full">
                {/* Project Image */}
                <div className="relative h-48 md:h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow space-y-4">
                  {/* Project Title */}
                  <h3 className="text-lg md:text-xl font-bold text-white">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-cyan-400/10 text-cyan-400 text-xs md:text-sm font-medium rounded-lg border border-cyan-400/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 pt-2">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm md:text-base font-medium transition-colors duration-300"
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      <span>Live Demo</span>
                    </a>
                    <span className="text-gray-600">|</span>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white text-sm md:text-base font-medium transition-colors duration-300"
                    >
                      <FaGithub className="text-sm" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-left md:text-center max-w-3xl md:mx-auto">
          <div className="p-8 md:p-10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50">
            <p className="text-gray-300 text-base md:text-lg lg:text-xl mb-6 leading-relaxed">
              Have an exciting project in mind? Let's collaborate and bring your vision to life!
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 lg:px-7 lg:py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-sm lg:text-base rounded-3xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105"
            >
              <span>Start a Conversation</span>
              <FaExternalLinkAlt className="text-xs" />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .project-card {
          transition: opacity 0.7s ease-out, transform 0.3s ease-out;
        }
      `}</style>
    </div >
  );
};

export default Projects;