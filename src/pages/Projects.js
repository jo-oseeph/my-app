import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
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
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            My Projects
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills 
            in full-stack development, UI/UX design, and modern web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-green-500 text-black text-xs font-semibold px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Project Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-gray-800/80 text-gray-300 text-xs rounded-full border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white text-sm rounded-lg border border-gray-600 hover:border-primary transition-colors"
                  >
                    <FaGithub className="text-sm" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-white/70 text-lg mb-6">
            Interested in working together?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;