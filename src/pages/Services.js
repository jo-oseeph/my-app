import React, { useEffect, useRef } from 'react';
import { 
  FaCode, 
  FaPalette, 
  FaServer, 
  FaDatabase, 
  FaMobileAlt, 
  FaPencilRuler 
} from 'react-icons/fa';

const ServicesSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <FaCode className="text-4xl md:text-5xl" />,
      title: "Custom Website Development",
      description: "Building tailor-made websites from scratch that perfectly align with your business goals and brand identity, ensuring optimal performance and user experience."
    },
    {
      icon: <FaPalette className="text-4xl md:text-5xl" />,
      title: "Frontend UI Design and Implementation",
      description: "Creating stunning, intuitive user interfaces with modern design principles and implementing them with pixel-perfect precision using the latest frontend technologies."
    },
    {
      icon: <FaServer className="text-4xl md:text-5xl" />,
      title: "Backend API Development",
      description: "Developing robust, scalable RESTful APIs and server-side logic that power your applications with security, efficiency, and seamless data management."
    },
    {
      icon: <FaDatabase className="text-4xl md:text-5xl" />,
      title: "Database Design and Integration",
      description: "Architecting efficient database structures and seamlessly integrating them with your applications for optimal data storage, retrieval, and management."
    },
    {
      icon: <FaMobileAlt className="text-4xl md:text-5xl" />,
      title: "Responsive and Mobile-First Layouts",
      description: "Crafting fluid, adaptive designs that deliver exceptional experiences across all devices, from smartphones to desktops, with mobile-first approach."
    },
    {
      icon: <FaPencilRuler className="text-4xl md:text-5xl" />,
      title: "Branding Assets and Graphic Design",
      description: "Designing compelling visual identities, logos, and graphic assets that capture your brand essence and create lasting impressions on your audience."
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-20 px-6 md:px-12 lg:px-20 xl:px-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-on-scroll">
          <div className="inline-block mb-6">
            <span className="text-cyan-400 text-base md:text-lg font-semibold tracking-wider uppercase bg-cyan-400/10 px-6 py-3 rounded-full border border-cyan-400/20">
              Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6">
            What I <span className="text-cyan-400">Do</span>
          </h2>
          <p className="text-gray-400 text-xl md:text-2xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive web development solutions tailored to bring your digital vision to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 xl:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="animate-on-scroll group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 md:p-10 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon Container */}
              <div className="mb-8 relative">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50">
                  {service.icon}
                </div>
                {/* Decorative Corner */}
                <div className="absolute -top-2 -right-2 w-10 h-10 border-t-2 border-r-2 border-cyan-400/30 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Content */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-5 group-hover:text-cyan-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {service.description}
              </p>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:w-full transition-all duration-500 rounded-b-2xl"></div>

              {/* Background Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-600/0 group-hover:from-cyan-500/5 group-hover:to-blue-600/5 rounded-2xl transition-all duration-500 -z-10"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .animate-on-scroll:nth-child(1) {
          transition-delay: 0.1s;
        }

        .animate-on-scroll:nth-child(2) {
          transition-delay: 0.2s;
        }

        .animate-on-scroll:nth-child(3) {
          transition-delay: 0.3s;
        }

        .animate-on-scroll:nth-child(4) {
          transition-delay: 0.4s;
        }

        .animate-on-scroll:nth-child(5) {
          transition-delay: 0.5s;
        }

        .animate-on-scroll:nth-child(6) {
          transition-delay: 0.6s;
        }

        .animate-on-scroll:nth-child(7) {
          transition-delay: 0.7s;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;