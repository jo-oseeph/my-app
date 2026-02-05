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
      {/* Hero Section */}
      <section ref={sectionRef} className="relative min-h-screen lg:h-screen lg:max-h-[1200px] flex items-center justify-center px-6 md:px-12 lg:px-20 xl:px-24 py-20 md:py-24 lg:py-16">
        <div className="max-w-[1600px] mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-28 items-center">
            {/* Right Content - Profile Image (Mobile First) */}
            <div className="animate-on-scroll flex justify-center lg:justify-end lg:order-2 order-1">
              <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
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
            <div className="space-y-5 lg:space-y-6 z-10 lg:order-1 order-2">
              {/* Main Heading */}
              <div className="animate-on-scroll space-y-2 lg:space-y-3">
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                  Hi, I'm{' '}
                  <span className="text-cyan-400">Joseph</span>
                </h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-cyan-400 leading-tight">
                  FullStack Developer
                </h2>
              </div>

              {/* Description */}
              <p className="animate-on-scroll text-gray-300 text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed">
                Passionate about crafting innovative solutions that bridge technology and
                human needs. I build scalable web applications, explore AI frontiers, and
                mentor the next generation of developers.
              </p>

              {/* Action Buttons */}
              <div className="animate-on-scroll flex flex-wrap gap-3 lg:gap-4 pt-2">
                {/* Hire Me → Contact section */}
                <a
                  href="#contact"
                  className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-6 py-2.5 lg:px-7 lg:py-3 rounded-3xl font-medium text-sm lg:text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 flex items-center space-x-2"
                >
                  <FaEnvelope className="text-lg group-hover:rotate-12 transition-transform" />
                  <span>Hire Me</span>
                </a>

                {/* View Resume → PDF */}
                <a
                  href="/resume/Joseph-cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border-2 border-cyan-400/50 hover:border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 backdrop-blur-sm px-6 py-2.5 lg:px-7 lg:py-3 rounded-3xl font-medium text-sm lg:text-base transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/30 flex items-center space-x-2"
                >
                  <FaFileAlt className="text-lg group-hover:scale-110 transition-transform" />
                  <span>View Resume</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="animate-on-scroll flex items-center gap-4 pt-2">
                {/* GitHub */}
                <a
                  href="https://github.com/jo-oseeph"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="group w-10 h-10 rounded-full bg-cyan-400/10 hover:bg-cyan-400/20 border border-cyan-400/30 hover:border-cyan-400 flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <FaGithub className="text-lg text-cyan-400 group-hover:rotate-6 transition-transform" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/joseph-situma-2876ab391/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="group w-10 h-10 rounded-full bg-cyan-400/10 hover:bg-cyan-400/20 border border-cyan-400/30 hover:border-cyan-400 flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <FaLinkedinIn className="text-lg text-cyan-400 group-hover:rotate-6 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div >
      </section >

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
    </div >
  );
};

export default Home;