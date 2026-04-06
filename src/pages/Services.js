import React from 'react';
import {
  FaCode,
  FaPalette,
  FaServer,
  FaDatabase,
  FaMobileAlt,
  FaPencilRuler
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
    category: 'Design',
    title: 'Frontend UI Design & Implementation',
    description: 'Creating stunning, intuitive user interfaces with modern design principles and implementing them with pixel-perfect precision using the latest frontend technologies.',
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

const ServicesSection = () => {
  return (
    <section className="bg-[#0a0a0a] py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-500 text-xs font-medium uppercase tracking-widest mb-3">Services</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">What I Do</h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Comprehensive web development solutions tailored to bring your digital vision to life.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#111] border border-cyan-400/20 rounded-2xl p-8 flex flex-col gap-6 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300"
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
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;