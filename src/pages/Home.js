import React, { useEffect, useRef } from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaFileAlt } from 'react-icons/fa';

const Home = () => {
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

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Animated Background Patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      {/* Hero Section */}
      <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Right Content - Profile Image (Mobile First) */}
            <div className="animate-on-scroll flex justify-center lg:justify-end lg:order-2 order-1">
              <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[26rem] lg:h-[26rem]">
                {/* Profile Image Container with Overflow Hidden */}
                <div className="relative w-full h-full overflow-hidden rounded-full">
                  {/* Aqua Blobs on Left and Right Sides - Static */}
                  <div className="absolute top-1/2 -left-8 w-24 h-32 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full -translate-y-1/2 shadow-lg shadow-cyan-400/30"></div>
                  
                  <div className="absolute top-1/2 -right-8 w-24 h-32 bg-gradient-to-l from-cyan-400 to-cyan-500 rounded-full -translate-y-1/2 shadow-lg shadow-cyan-400/30"></div>

                  {/* Profile Image */}
                  <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-cyan-400/50 shadow-2xl shadow-cyan-500/30 transform hover:scale-105 hover:border-cyan-400 transition-all duration-500 hover:shadow-cyan-400/50">
                    <img
                      src="/images/profile.jpg"
                      alt="Joseph Situma - FullStack Developer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

              
                
              
              </div>
            </div>

            {/* Left Content */}
            <div className="space-y-8 z-10 lg:order-1 order-2">
              {/* Status Badge */}
              <div className="animate-on-scroll flex items-center space-x-3 bg-green-500/10 backdrop-blur-sm border border-green-500/20 rounded-full px-4 py-2 w-fit">
                <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                <span className="text-green-400 text-sm font-medium tracking-wide">
                  Available for work
                </span>
              </div>
              
              {/* Main Heading */}
              <div className="animate-on-scroll space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
                    Joseph
                  </span>
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-cyan-400 leading-tight">
                  FullStack Developer
                </h2>
              </div>
              
              {/* Description */}
              <p className="animate-on-scroll text-gray-300 text-lg md:text-xl max-w-lg leading-relaxed">
                Passionate about crafting innovative solutions that bridge technology and 
                human needs. I build scalable web applications, explore AI frontiers, and 
                mentor the next generation of developers.
              </p>
              
              {/* Action Buttons */}
              <div className="animate-on-scroll flex flex-wrap gap-4 pt-4">
                <button className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 flex items-center space-x-2">
                  <FaEnvelope className="text-lg group-hover:rotate-12 transition-transform" />
                  <span>Hire Me</span>
                </button>
                
                <button className="group border-2 border-cyan-400/50 hover:border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 backdrop-blur-sm px-8 py-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/30 flex items-center space-x-2">
                  <FaFileAlt className="text-lg group-hover:scale-110 transition-transform" />
                  <span>View Resume</span>
                </button>
              </div>

              {/* Social Links */}
              <div className="animate-on-scroll flex gap-4 pt-2">
                <button className="group w-14 h-14 border-2 border-gray-600 hover:border-white text-gray-400 hover:text-white rounded-xl hover:rounded-2xl font-medium transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-white/20 flex items-center justify-center">
                  <FaGithub className="text-2xl group-hover:rotate-12 transition-transform" />
                </button>
                
                <button className="group w-14 h-14 border-2 border-blue-600 hover:border-blue-400 text-blue-400 hover:bg-blue-500/10 rounded-xl hover:rounded-2xl font-medium transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-blue-400/30 flex items-center justify-center">
                  <FaLinkedinIn className="text-2xl group-hover:rotate-12 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-10px) translateX(5px);
          }
          50% {
            transform: translateY(-20px) translateX(-5px);
          }
          75% {
            transform: translateY(-10px) translateX(5px);
          }
        }

        @keyframes blob {
          0%, 100% {
            transform: scale(1) rotate(0deg);
          }
          33% {
            transform: scale(1.05) rotate(2deg);
          }
          66% {
            transform: scale(0.95) rotate(-2deg);
          }
        }

        .animate-blob {
          animation: blob 8s ease-in-out infinite;
        }

        @keyframes blob {
          0%, 100% {
            transform: scale(1) rotate(0deg);
          }
          33% {
            transform: scale(1.05) rotate(2deg);
          }
          66% {
            transform: scale(0.95) rotate(-2deg);
          }
        }

        .animate-blob {
          animation: blob 8s ease-in-out infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .delay-700 {
          animation-delay: 0.7s;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

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
      `}</style>
    </div>
  );
};

export default Home;