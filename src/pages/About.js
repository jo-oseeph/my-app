import React from 'react';
import { FaCode, FaBriefcase, FaGraduationCap, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { MdWorkHistory } from 'react-icons/md';
import { BsStack } from 'react-icons/bs';
import { HiOutlineCloud } from 'react-icons/hi';
import { RiRobot2Line } from 'react-icons/ri';

const stats = [
  { icon: <MdWorkHistory size={22} className="text-cyan-400" />, value: '2+ years', label: 'Professional experience' },
  { icon: <BsStack size={22} className="text-cyan-400" />, value: 'Full-stack', label: 'Web & backend engineering' },
  { icon: <HiOutlineCloud size={22} className="text-cyan-400" />, label: 'Cloud deployments', value: 'Multi-cloud' },
  { icon: <RiRobot2Line size={22} className="text-cyan-400" />, value: 'AI integration', label: 'ML-powered applications' },
];

const experiences = [
  {
    title: 'Information Sciences Student',
    organization: 'Moi University',
    period: '2021 - 2025',
    description: 'Pursued Information Sciences with focus on web development fundamentals and programming concepts. Built strong foundation in computer science principles.',
    icon: <FaGraduationCap size={20} className="text-cyan-400" />,
  },
  {
    title: 'Web Developer',
    organization: 'Self-Learning & Practice',
    period: '2023 - Present',
    description: 'Building web applications using React and modern technologies. Continuously learning through online platforms, focusing on web development technologies and best practices.',
    icon: <FaCode size={20} className="text-cyan-400" />,
  },
  {
    title: 'Personal Projects',
    organization: 'Independent Work',
    period: '2024 - Present',
    description: 'Developing portfolio of web applications demonstrating practical skills. Completed multiple projects showcasing frontend and backend development capabilities.',
    icon: <FaBriefcase size={20} className="text-cyan-400" />,
  },
];

const About = () => {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">

      {/* Hero Section */}
      <section className="pt-28 pb-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <div className="flex flex-col gap-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#111] border border-[#222] rounded-full px-4 py-2 w-fit">
                <span className="w-2 h-2 rounded-full bg-green-400"></span>
                <span className="text-gray-400 text-xs uppercase tracking-widest font-medium">Available for opportunities</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Full-stack developer building scalable web applications
              </h1>

              {/* Description */}
              <div className="flex flex-col gap-3">
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  A passionate technologist on a mission to create meaningful impact through code and community building.
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Full-stack with React/Next.js and Node.js (Express); deployment across Vercel, Render, and AWS.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors duration-200"
                >
                  <FaEnvelope size={13} />
                  Get in touch
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 bg-transparent border border-[#2a2a2a] hover:border-[#444] text-gray-300 text-sm font-medium px-5 py-2.5 rounded-full transition-colors duration-200"
                >
                  <FaGlobe size={13} />
                  View portfolio
                </a>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="w-full max-w-md h-[380px] md:h-[420px] rounded-2xl overflow-hidden border border-[#1f1f1f]">
                <img
                  src="images/abt.jpeg"
                  alt="About"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Code icon badge */}
              <div className="absolute bottom-6 left-4 lg:-left-6 w-14 h-14 bg-[#111] border border-[#222] rounded-2xl flex items-center justify-center shadow-xl">
                <FaCode size={22} className="text-cyan-400" />
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {stats.map((stat, i) => (
              <div key={i} className="bg-[#111] border border-[#1f1f1f] rounded-2xl px-5 py-5 flex items-center gap-4">
                <div className="w-9 h-9 rounded-lg bg-[#1a1a1a] flex items-center justify-center flex-shrink-0">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{stat.value}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My Story */}
      <section className="py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gray-500 text-xs font-medium uppercase tracking-widest mb-3">Background</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">My Story</h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto">My academic journey and development experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="bg-[#111] border border-[#1f1f1f] rounded-2xl p-6 flex flex-col gap-4 hover:border-[#2a2a2a] transition-colors duration-300"
              >
                {/* Icon + Period */}
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-lg bg-[#1a1a1a] border border-[#222] flex items-center justify-center">
                    {exp.icon}
                  </div>
                  <span className="text-xs text-gray-400 border border-[#2a2a2a] rounded-full px-3 py-1">
                    {exp.period}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-1.5 flex-grow">
                  <h4 className="text-white font-semibold text-[15px]">{exp.title}</h4>
                  <p className="text-cyan-400 text-xs font-medium">{exp.organization}</p>
                  <p className="text-gray-500 text-sm leading-relaxed mt-1">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;