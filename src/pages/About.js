import React from 'react';
import { FaCode, FaUsers, FaLightbulb, FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const About = () => {
  const milestones = [
    {
      year: '2024',
      title: 'AI Innovation Leader',
      description: 'Leading AI projects and mentoring developers in machine learning applications',
      icon: <FaLightbulb />
    },
    {
      year: '2023',
      title: 'CSA Africa Program',
      description: 'Selected for prestigious tech mentorship program, building community impact',
      icon: <FaUsers />
    },
    {
      year: '2022',
      title: 'Full Stack Mastery',
      description: 'Achieved expertise in modern web technologies and scalable application development',
      icon: <FaCode />
    }
  ];

  const coreValues = [
    {
      title: 'Innovation',
      description: 'Constantly exploring new technologies and creative solutions to solve complex problems.',
      icon: <FaLightbulb className="text-3xl text-primary" />
    },
    {
      title: 'Collaboration',
      description: 'Building strong relationships and working together to achieve extraordinary results.',
      icon: <FaUsers className="text-3xl text-primary" />
    },
    {
      title: 'Excellence',
      description: 'Committed to delivering high-quality work and continuous improvement in everything I do.',
      icon: <FaBriefcase className="text-3xl text-primary" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            About Me
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            A passionate technologist on a mission to create meaningful impact through code,
            artificial intelligence, and community building.
          </p>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-primary mb-6">My Story</h2>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  My journey into technology began with curiosity and a desire to solve problems
                  that matter. Growing up, I was fascinated by how technology could bridge gaps
                  and create opportunities for people from all walks of life.
                </p>
                <p>
                  Today, I'm a Full-Stack Developer specializing in modern web technologies and
                  artificial intelligence applications. I believe in the power of mentorship and
                  community building, having been both a mentee and mentor in various tech
                  programs.
                </p>
                <p>
                  When I'm not coding, you'll find me contributing to open-source projects, writing
                  about tech trends, or helping fellow developers navigate their career journeys. I'm
                  driven by the belief that technology should be accessible, inclusive, and beneficial
                  for everyone.
                </p>
              </div>
            </div>

            {/* Right - Journey Milestones Cards */}
            <div className="space-y-6">
              <div className="flex items-center mb-6">
                <FaGraduationCap className="text-2xl text-primary mr-3" />
                <h3 className="text-2xl font-bold text-primary">Journey Milestones</h3>
              </div>
              
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-primary/20 rounded-xl p-6 hover:border-primary/40 transition-all duration-300 hover:transform hover:scale-[1.02]"
                >
                  <div className="flex items-center gap-4 mb-3">
                  
                    <span className="bg-green-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                      {milestone.year}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{milestone.title}</h4>
                  <p className="text-white/70 text-sm">{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Core Values</h2>
          
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
            {coreValues.map((value, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 hover:border-primary/40 transition-all duration-300 hover:transform hover:scale-105 text-center w-full lg:w-1/3 max-w-sm"
              >
                <div className="mb-6 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-white/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;