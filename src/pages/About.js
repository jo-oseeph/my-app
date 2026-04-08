import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { MdWorkHistory } from 'react-icons/md';
import { BsStack } from 'react-icons/bs';
import { HiOutlineCloud } from 'react-icons/hi';
import { RiRobot2Line } from 'react-icons/ri';

const stats = [
  { icon: <MdWorkHistory size={22} className="text-cyan-400" />, value: '2+ years', label: 'Professional experience' },
  { icon: <BsStack size={22} className="text-cyan-400" />, value: 'Full-stack', label: 'Web & backend engineering' },
  { icon: <HiOutlineCloud size={22} className="text-cyan-400" />, value: 'Multi-cloud', label: 'Cloud deployments' },
  { icon: <RiRobot2Line size={22} className="text-cyan-400" />, value: 'AI integration', label: 'AI-powered applications' },
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
    period: '2024 - Present',
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

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger = (staggerChildren = 0.12) => ({
  hidden: {},
  show: { transition: { staggerChildren } },
});

const About = () => {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">

      {/* Hero Section */}
      <section className="pt-24 pb-14 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <motion.div
              className="flex flex-col gap-6"
              initial="hidden"
              animate="show"
              variants={stagger(0.13)}
            >
              <motion.h1
                variants={fadeUp}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
              >
                Full-stack developer building scalable web applications
              </motion.h1>

              <motion.div variants={fadeUp} className="flex flex-col gap-3">
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  A passionate technologist on a mission to create meaningful impact through code and community building.
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Full-stack with React/Next.js and Node.js (Express); deployment across Vercel, Render, and AWS.
                </p>
              </motion.div>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              className="relative flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            >
              <div className="w-full max-w-md h-[360px] md:h-[400px] rounded-2xl overflow-hidden border border-[#1f1f1f]">
                <img
                  src="images/abt.jpeg"
                  alt="About"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Stats Row */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
            initial="hidden"
            animate="show"
            variants={stagger(0.1)}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-[#111] border border-[#1f1f1f] rounded-2xl px-5 py-4 flex items-center gap-4"
              >
                <div className="w-9 h-9 rounded-lg bg-[#1a1a1a] flex items-center justify-center flex-shrink-0">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{stat.value}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* My Story */}
      <section className="py-14 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">

          {/* Section header */}
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <p className="text-gray-500 text-xs font-medium uppercase tracking-widest mb-3">Background</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">My Story</h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto">My academic journey and development experience</p>
          </motion.div>

          {/* Experience cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger(0.12)}
          >
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
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
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default About;