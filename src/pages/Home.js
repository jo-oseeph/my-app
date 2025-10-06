import React from 'react';
import Button from '../components/ui/Button';
import Section from '../components/ui/Section';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Section className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm{' '}
            <span className="text-primary">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
            Full Stack Developer passionate about creating beautiful, 
            functional, and user-centered digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              View My Work
            </Button>
            <Button variant="secondary" size="lg">
              Download CV
            </Button>
          </div>
        </div>
      </Section>

      {/* About Preview */}
      <Section 
        title="About Me"
        subtitle="A brief introduction to who I am and what I do"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              I'm a passionate developer with expertise in modern web technologies. 
              I love turning complex problems into simple, beautiful and intuitive designs.
            </p>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open source projects, or sharing knowledge with the developer community.
            </p>
            <Button variant="secondary">
              Learn More About Me
            </Button>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-64 bg-primary/20 rounded-full flex items-center justify-center">
              <span className="text-primary text-6xl">👨‍💻</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills Preview */}
      <Section 
        title="Skills & Technologies"
        subtitle="The tools and technologies I work with"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['React', 'Node.js', 'JavaScript', 'Python', 'TypeScript', 'MongoDB', 'PostgreSQL', 'AWS'].map((skill) => (
            <div 
              key={skill}
              className="bg-white/5 border border-white/10 rounded-lg p-4 text-center hover:bg-primary/10 transition-colors"
            >
              <span className="text-white font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary/5">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life.
          </p>
          <Button size="lg">
            Get In Touch
          </Button>
        </div>
      </Section>
    </div>
  );
};

export default Home;