import React from 'react';
import { motion } from 'framer-motion';
import {
  FaCode, FaPalette, FaServer,
  FaDatabase, FaMobileAlt, FaMobile,
} from 'react-icons/fa';

const services = [
  {
    icon: <FaCode size={20} className="text-cyan-400" />,
    category: 'Development',
    title: 'Custom Website Development',
    description: 'Building production-ready websites tailored to business requirements with a focus on performance, clean structure, and scalability.',
  },
  {
    icon: <FaMobile size={20} className="text-cyan-400" />,
    category: 'Mobile',
    title: 'Mobile App Development',
    description: 'Developing cross-platform mobile applications with React Native, focused on performance, reliability, and smooth user interaction.',
  },
  {
    icon: <FaServer size={20} className="text-cyan-400" />,
    category: 'Backend',
    title: 'Backend API Development',
    description: 'Designing and implementing secure RESTful APIs and server logic using Node.js and Express with structured data handling.',
  },
  {
    icon: <FaDatabase size={20} className="text-cyan-400" />,
    category: 'Database',
    title: 'Database Design & Integration',
    description: 'Designing efficient MongoDB data models and integrating them into applications for consistent and optimized data flow.',
  },
  {
    icon: <FaMobileAlt size={20} className="text-cyan-400" />,
    category: 'Software',
    title: 'Custom Software Development',
    description: 'Building full-stack web and mobile applications with integrated frontend, backend, and database systems.',
  },
  {
    icon: <FaPalette size={20} className="text-cyan-400" />,
    category: 'Design',
    title: 'Branding & Visual Design',
    description: 'Creating brand identities, logos, and visual assets that support clear communication and consistent brand presence.',
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const ServicesSection = () => {
  return (
    <section className="bg-[#0a0a0a] py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={headerVariants}
        >
          <p className="text-gray-500 text-xs font-medium uppercase tracking-widest mb-3">Services</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">What I Do</h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Comprehensive web development solutions tailored to bring your digital vision to life.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-[#111] border border-cyan-400/20 rounded-2xl p-7 flex flex-col gap-5 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/5 transition-colors duration-300"
            >
              {/* Icon + Badge */}
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">
                  {service.icon}
                </div>
                <span className="text-xs text-gray-400 border border-[#2a2a2a] rounded-full px-3 py-1">
                  {service.category}
                </span>
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2 flex-grow">
                <h3 className="text-white font-semibold text-[15px]">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesSection;