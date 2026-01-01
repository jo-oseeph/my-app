import React, { useEffect, useRef, useState } from 'react';
import { 
  FaReact, FaNodeJs, FaJs, FaCss3Alt, 
  FaAws, FaGitAlt, FaFigma, 
} from 'react-icons/fa';
import { 
  SiTypescript, SiTailwindcss, SiNextdotjs, 
  SiMongodb, SiPostgresql,
} from 'react-icons/si';
import { BiData } from 'react-icons/bi';
import { MdDesignServices } from 'react-icons/md';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <FaReact className="text-4xl text-blue-400" />,
      skills: [
        { name: 'React/Next.js', level: 95, icon: <FaReact className="text-blue-400" /> },
        { name: 'TypeScript', level: 90, icon: <SiTypescript className="text-blue-600" /> },
        { name: 'Tailwind CSS', level: 92, icon: <SiTailwindcss className="text-teal-400" /> },
        { name: 'JavaScript ES6+', level: 93, icon: <FaJs className="text-yellow-400" /> },
      ]
    },
    {
      title: 'Backend & Database',
      icon: <BiData className="text-4xl text-purple-400" />,
      skills: [
        { name: 'Node.js', level: 88, icon: <FaNodeJs className="text-green-600" /> },
        { name: 'PostgreSQL', level: 85, icon: <SiPostgresql className="text-blue-600" /> },
        { name: 'MongoDB', level: 82, icon: <SiMongodb className="text-green-500" /> },
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: <FaAws className="text-4xl text-orange-400" />,
      skills: [
        { name: 'AWS', level: 70, icon: <FaAws className="text-orange-400" /> },
        { name: 'CI/CD', level: 70, icon: <FaGitAlt className="text-orange-500" /> },
        { name: 'Vercel/Netlify', level: 85, icon: <SiNextdotjs className="text-white" /> },
      ]
    },
    {
      title: 'Design & UX',
      icon: <MdDesignServices className="text-4xl text-green-400" />,
      skills: [
        { name: 'Figma', level: 75, icon: <FaFigma className="text-purple-500" /> },
        { name: 'UI/UX Design', level: 70, icon: <MdDesignServices className="text-green-400" /> },
        { name: 'Responsive Design', level: 88, icon: <FaCss3Alt className="text-blue-500" /> },
      ]
    }
  ];

  const SkillCard = ({ category, index }) => (
    <div 
      className={`bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 hover:border-primary/40 transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      style={{ 
        transitionDelay: `${index * 150}ms`,
        animation: isVisible ? `slideInUp 0.6s ease-out ${index * 150}ms both` : 'none'
      }}
    >
      <div className="flex items-center mb-6">
        {category.icon}
        <h3 className="text-xl font-bold text-white ml-3">{category.title}</h3>
      </div>
      
      <div className="space-y-4">
        {category.skills.map((skill, skillIndex) => (
          <div key={skillIndex} className="skill-item">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <span className="mr-3">{skill.icon}</span>
                <span className="text-white font-medium">{skill.name}</span>
              </div>
              <span className="text-primary text-sm font-semibold">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700/50 rounded-full h-2">
              <div 
                className={`bg-gradient-to-r from-primary to-blue-400 h-2 rounded-full transition-all duration-1000 ease-out ${
                  isVisible ? 'animate-pulse' : ''
                }`}
                style={{ 
                  width: isVisible ? `${skill.level}%` : '0%',
                  transitionDelay: `${(index * 150) + (skillIndex * 100)}ms`
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <div 
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-20"
      >
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & <span className="text-primary">Technologies</span>
          </h1>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and expertise across different domains
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} index={index} />
          ))}
        </div>

        {/* Bottom Section */}
        <div className={`mt-16 text-center transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: '800ms' }}>
          <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Always Learning & Growing
            </h3>
            <p className="text-white/70 max-w-2xl mx-auto">
              Technology evolves rapidly, and I'm committed to continuous learning. 
              Currently exploring new frameworks, best practices, and emerging technologies 
              to stay at the forefront of web development.
            </p>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .skill-item:hover .bg-gradient-to-r {
          animation: progress-glow 2s ease-in-out infinite;
        }
        
        @keyframes progress-glow {
          0%, 100% { box-shadow: 0 0 5px rgba(80, 168, 196, 0.5); }
          50% { box-shadow: 0 0 20px rgba(80, 168, 196, 0.8); }
        }
      `}</style>
    </div>
  );
};

export default Skills;