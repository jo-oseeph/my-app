import React from 'react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: '🎨',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Next.js', level: 80 },
        { name: 'Vue.js', level: 70 }
      ]
    },
    {
      title: 'Backend Development',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Django', level: 75 },
        { name: 'REST APIs', level: 90 },
        { name: 'GraphQL', level: 70 },
        { name: 'Microservices', level: 75 }
      ]
    },
    {
      title: 'Database & Cloud',
      icon: '🗄️',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MySQL', level: 75 },
        { name: 'Redis', level: 70 },
        { name: 'AWS', level: 75 },
        { name: 'Docker', level: 80 },
        { name: 'Firebase', level: 85 }
      ]
    },
    {
      title: 'Tools & Others',
      icon: '🛠️',
      skills: [
        { name: 'Git/GitHub', level: 95 },
        { name: 'VS Code', level: 95 },
        { name: 'Figma', level: 80 },
        { name: 'Jest/Testing', level: 75 },
        { name: 'Webpack', level: 70 },
        { name: 'Linux', level: 80 },
        { name: 'Agile/Scrum', level: 85 }
      ]
    }
  ];

  const SkillBar = ({ skill }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-medium">{skill.name}</span>
        <span className="text-primary text-sm">{skill.level}%</span>
      </div>
      <div className="w-full bg-white/10 rounded-full h-2">
        <div 
          className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <div>
      <Section 
        title="Skills & Technologies"
        subtitle="A comprehensive overview of my technical skills and expertise"
      >
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="h-full">
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              <div>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skillIndex} skill={skill} />
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-white mb-3">Learning</h3>
              <p className="text-white/80">
                Always eager to learn new technologies and stay updated with industry trends.
              </p>
            </Card>
            
            <Card className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-white mb-3">Collaboration</h3>
              <p className="text-white/80">
                Experience working in agile teams and contributing to open source projects.
              </p>
            </Card>
            
            <Card className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
              <p className="text-white/80">
                Passionate about exploring new technologies and implementing creative solutions.
              </p>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Skills;