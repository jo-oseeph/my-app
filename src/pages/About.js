import React from 'react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';

const About = () => {
  const timeline = [
    {
      year: '2023',
      title: 'Senior Full Stack Developer',
      company: 'Tech Company',
      description: 'Led development of major web applications using React and Node.js'
    },
    {
      year: '2022',
      title: 'Full Stack Developer',
      company: 'Another Company',
      description: 'Built responsive web applications and RESTful APIs'
    },
    {
      year: '2021',
      title: 'Junior Developer',
      company: 'Startup Inc.',
      description: 'Started my professional journey in web development'
    }
  ];

  return (
    <div>
      <Section 
        title="About Me"
        subtitle="Get to know me better - my journey, experience, and what drives me"
      >
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">My Story</h3>
            <div className="space-y-4 text-white/80">
              <p>
                I started my journey in web development with a curiosity about how websites work. 
                That curiosity quickly turned into a passion for creating digital experiences 
                that make a difference.
              </p>
              <p>
                Over the years, I've had the privilege of working with amazing teams, 
                learning from industry experts, and contributing to projects that have 
                reached thousands of users.
              </p>
              <p>
                I believe in continuous learning, clean code, and the power of collaboration. 
                When I'm not coding, I enjoy mentoring other developers and contributing 
                to open source projects.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">What I Do</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">🎨</span>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Frontend Development</h4>
                  <p className="text-white/80 text-sm">
                    Creating responsive, interactive user interfaces with modern frameworks
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">⚙️</span>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Backend Development</h4>
                  <p className="text-white/80 text-sm">
                    Building robust APIs and server-side applications
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">📱</span>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Mobile Development</h4>
                  <p className="text-white/80 text-sm">
                    Developing cross-platform mobile applications
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Experience</h3>
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <Card key={index} className="relative">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="md:w-20 flex-shrink-0 mb-4 md:mb-0">
                    <span className="inline-block bg-primary px-3 py-1 rounded-full text-white text-sm font-medium">
                      {item.year}
                    </span>
                  </div>
                  <div className="md:ml-8">
                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-primary font-medium mb-2">{item.company}</p>
                    <p className="text-white/80">{item.description}</p>
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

export default About;