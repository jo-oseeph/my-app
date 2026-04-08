import React from 'react';
import { motion } from 'framer-motion';
import {
  FaCode, FaPalette, FaServer,
  FaDatabase, FaMobileAlt, FaPencilRuler
} from 'react-icons/fa';

const services = [
  {
    icon: <FaCode size={20} className="text-cyan-400" />,
    category: 'Development',
    title: 'Custom Website Development',
    description: 'Building tailor-made websites from scratch that perfectly align with your business goals and brand identity, ensuring optimal performance and user experience.',
  },
  {
    icon: <FaPalette size={20} className="text-cyan-400" />,
    category: 'Development',
    title: 'Mobile App Development',
    description: 'Building high-performance, scalable mobile applications with seamless user experiences, leveraging modern frameworks to deliver responsive, secure, and feature-rich apps across Android and iOS platforms.',
  },
  {
    icon: <FaServer size={20} className="text-cyan-400" />,
    category: 'Backend',
    title: 'Backend API Development',
    description: 'Developing robust, scalable RESTful APIs and server-side logic that power your applications with security, efficiency, and seamless data management.',
  },
  {
    icon: <FaDatabase size={20} className="text-cyan-400" />,
    category: 'Database',
    title: 'Database Design & Integration',
    description: 'Architecting efficient database structures and seamlessly integrating them with your applications for optimal data storage, retrieval, and management.',
  },
  {
    icon: <FaMobileAlt size={20} className="text-cyan-400" />,
    category: 'Mobile',
    title: 'Responsive & Mobile-First Layouts',
    description: 'Crafting fluid, adaptive designs that deliver exceptional experiences across all devices, from smartphones to desktops, with a mobile-first approach.',
  },
  {
    icon: <FaPencilRuler size={20} className="text-cyan-400" />,
    category: 'Branding',
    title: 'Branding Assets & Graphic Design',
    description: 'Designing compelling visual identities, logos, and graphic assets that capture your brand essence and create lasting impressions on your audience.',
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