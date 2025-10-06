import React from 'react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
      image: '🛒',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: 'https://github.com/yourusername/ecommerce',
      live: 'https://your-ecommerce-demo.com',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '📋',
      technologies: ['React', 'Firebase', 'Material-UI', 'Socket.io'],
      github: 'https://github.com/yourusername/taskmanager',
      live: 'https://your-taskmanager-demo.com',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather application that provides current weather data and forecasts using external APIs with beautiful data visualizations.',
      image: '🌤️',
      technologies: ['React', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
      github: 'https://github.com/yourusername/weather-app',
      live: 'https://your-weather-demo.com',
      featured: false
    },
    {
      id: 4,
      title: 'Blog Platform',
      description: 'A full-featured blog platform with markdown support, comment system, and admin panel for content management.',
      image: '📝',
      technologies: ['Next.js', 'MongoDB', 'MDX', 'Vercel'],
      github: 'https://github.com/yourusername/blog-platform',
      live: 'https://your-blog-demo.com',
      featured: false
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'This very portfolio website built with React and Tailwind CSS, showcasing responsive design and modern web development practices.',
      image: '🎨',
      technologies: ['React', 'Tailwind CSS', 'React Router'],
      github: 'https://github.com/yourusername/portfolio',
      live: 'https://your-portfolio.com',
      featured: false
    },
    {
      id: 6,
      title: 'Chat Application',
      description: 'Real-time chat application with rooms, private messaging, and file sharing capabilities built with Socket.io.',
      image: '💬',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      github: 'https://github.com/yourusername/chat-app',
      live: 'https://your-chat-demo.com',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div>
      <Section 
        title="My Projects"
        subtitle="A showcase of my recent work and personal projects"
      >
        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="h-full">
                <div className="flex flex-col h-full">
                  <div className="text-6xl mb-4 text-center">{project.image}</div>
                  <h4 className="text-xl font-bold text-white mb-3">{project.title}</h4>
                  <p className="text-white/80 mb-4 flex-grow">{project.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      variant="secondary" 
                      size="sm" 
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      GitHub
                    </Button>
                    <Button 
                      size="sm"
                      onClick={() => window.open(project.live, '_blank')}
                    >
                      Live Demo
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <Card key={project.id} className="h-full">
                <div className="flex flex-col h-full">
                  <div className="text-4xl mb-3 text-center">{project.image}</div>
                  <h4 className="text-lg font-bold text-white mb-2">{project.title}</h4>
                  <p className="text-white/80 text-sm mb-3 flex-grow">{project.description}</p>
                  
                  <div className="mb-3">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-white/10 text-white/60 text-xs rounded-full">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 text-xs"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      Code
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 text-xs"
                      onClick={() => window.open(project.live, '_blank')}
                    >
                      Demo
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Projects;