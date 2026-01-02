import React, { useEffect } from 'react';
import { FaCode, FaUsers, FaLightbulb, FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const About = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideInLeft {
        from {
          opacity: 0;
          transform: translateX(-50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes slideInRight {
        from {
          opacity: 0;
          transform: translateX(50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .animate-slide-in-left {
        animation: slideInLeft 0.8s ease-out forwards;
      }
      
      .animate-slide-in-right {
        animation: slideInRight 0.8s ease-out forwards;
      }
      
      .animate-fade-in-up {
        animation: fadeInUp 0.6s ease-out forwards;
        opacity: 0;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const experiences = [
    {
      title: 'Information Sciences Student',
      organization: 'Moi University',
      period: '2021 - 2025',
      description: 'Pursued Information Sciences with focus on web development fundamentals and programming concepts. Built strong foundation in computer science principles.',
      icon: <FaGraduationCap className="text-3xl" />
    },
    {
      title: 'Web Developer',
      organization: 'Self-Learning & Practice',
      period: '2023 - Present',
      description: 'Building web applications using React and modern technologies. Continuously learning through online platforms, focusing on web development technologies and best practices.',
      icon: <FaCode className="text-3xl" />
    },
    {
      title: 'Personal Projects',
      organization: 'Independent Work',
      period: '2024 - Present',
      description: 'Developing portfolio of web applications demonstrating practical skills. Completed multiple projects showcasing frontend and backend development capabilities.',
      icon: <FaBriefcase className="text-3xl" />
    }
  ];

  const coreValues = [
    {
      title: 'Innovation',
      description: 'Constantly exploring new technologies and creative solutions to solve complex problems.',
      icon: <FaLightbulb className="text-4xl text-primary" />
    },
    {
      title: 'Collaboration',
      description: 'Building strong relationships and working together to achieve extraordinary results.',
      icon: <FaUsers className="text-4xl text-primary" />
    },
    {
      title: 'Excellence',
      description: 'Committed to delivering high-quality work and continuous improvement in everything I do.',
      icon: <FaBriefcase className="text-4xl text-primary" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-8">
            About Me
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            A passionate technologist on a mission to create meaningful impact through code,
            artificial intelligence, and community building.
          </p>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="relative group animate-slide-in-left">
              <div className="aspect-square w-full mx-auto relative overflow-hidden rounded-2xl border-2 border-primary/30 shadow-2xl shadow-primary/20">
                <img 
                  src="images/abt.jpeg" 
                  alt="Professional headshot"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60"></div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-500/10 rounded-full blur-3xl"></div>
            </div>

            {/* Right - Story Content */}
            <div className="animate-slide-in-right">
              <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-8">My Story</h2>
              <div className="space-y-6 text-white/80 leading-relaxed">
                <p className="text-xl lg:text-2xl">
                  Full-Stack Developer and AI specialist with a proven track record of delivering 
                  scalable web applications and intelligent solutions that drive business growth.
                </p>
                <p className="text-lg lg:text-xl">
                  I transform complex technical challenges into elegant, user-centric products. 
                  With expertise spanning modern JavaScript frameworks, cloud architecture, and 
                  machine learning integration, I build systems that are both powerful and intuitive.
                </p>
                <p className="text-lg lg:text-xl">
                  As a CSA Africa Program alumnus and active tech community mentor, I combine 
                  technical excellence with leadership and collaboration. I'm passionate about 
                  leveraging technology to create meaningful impact and help teams achieve their goals.
                </p>
                <div className="pt-6 flex flex-wrap gap-4">
                  <span className="px-5 py-2.5 bg-primary/10 border border-primary/30 rounded-full text-base text-primary font-medium">
                    React & Node.js
                  </span>
                  <span className="px-5 py-2.5 bg-primary/10 border border-primary/30 rounded-full text-base text-primary font-medium">
                    AI/ML Integration
                  </span>
                  <span className="px-5 py-2.5 bg-primary/10 border border-primary/30 rounded-full text-base text-primary font-medium">
                    Cloud Architecture
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Experience & Education Section */}
          <div className="mt-32">
            <div className="text-center mb-20 animate-fade-in-up">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Experience & Education</h3>
              <p className="text-white/60 text-xl">My academic journey and development experience</p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-8">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className="animate-fade-in-up flex-1 bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 hover:border-primary/40 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 group"
                  style={{ animationDelay: `${0.2 + index * 0.15}s` }}
                >
                  <div className="flex flex-col h-full">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-16 h-16 md:w-18 md:h-18 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 mb-6">
                      {exp.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-grow">
                      <div className="mb-5">
                        <h4 className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors duration-300 mb-4">
                          {exp.title}
                        </h4>
                        <span className="inline-block text-primary text-base md:text-lg font-semibold bg-primary/10 px-5 py-2.5 rounded-full mb-4">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-white/80 font-medium mb-5 text-lg md:text-xl">{exp.organization}</p>
                      <p className="text-white/60 leading-relaxed text-base md:text-lg">{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-16 text-center">Core Values</h2>
          
          <div className="flex flex-col lg:flex-row gap-8 items-stretch justify-center">
            {coreValues.map((value, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-10 hover:border-primary/40 transition-all duration-300 hover:transform hover:scale-105 text-center w-full lg:w-1/3"
              >
                <div className="mb-8 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">{value.title}</h3>
                <p className="text-white/70 leading-relaxed text-lg">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;