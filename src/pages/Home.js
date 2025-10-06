import React from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaFileAlt, FaChevronDown } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/project.jpg')`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-blue-900/85 to-pink-900/90"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-6 h-6 bg-purple-500 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 right-1/3 w-5 h-5 bg-pink-500 rounded-full animate-pulse"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in-up">
              {/* Green Status Indicator */}
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white/90 text-sm font-medium tracking-wide">
                  Available for work
                </span>
              </div>
              
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight animate-slide-in-left">
                  Hi, I'm <span className="text-primary">Joseph</span>
                </h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-primary leading-tight animate-slide-in-right">
                  FullStack Developer
                </h2>
              </div>
              
              {/* Description */}
              <p className="text-white/80 text-base md:text-lg lg:text-xl max-w-lg leading-relaxed animate-fade-in-up delay-300">
                Passionate about crafting innovative solutions that bridge technology and 
                human needs. I build scalable web applications, explore AI frontiers, and 
                mentor the next generation of developers.
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up delay-500">
                <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center space-x-2">
                  <FaEnvelope className="text-sm" />
                  <span>Hire Me</span>
                </button>
                
                <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center space-x-2">
                  <FaFileAlt className="text-sm" />
                  <span>View Resume</span>
                </button>
                
                <button className="border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center space-x-2">
                  <FaGithub className="text-sm" />
                  <span>GitHub</span>
                </button>
                
                <button className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center space-x-2">
                  <FaLinkedinIn className="text-sm" />
                  <span>LinkedIn</span>
                </button>
              </div>
              
              {/* Discover More */}
              <div className="pt-8 animate-bounce">
                <button className="text-primary hover:text-primary/80 transition-colors duration-300 flex flex-col items-center space-y-2">
                  <span className="text-sm font-medium">Discover More</span>
                  <FaChevronDown className="text-lg" />
                </button>
              </div>
            </div>
            
            {/* Right Content - Circular Profile Image */}
            <div className="flex justify-center lg:justify-end animate-fade-in-right">
              <div className="relative">
                {/* Animated Rings */}
                <div className="absolute inset-0 rounded-full border-4 border-primary/30 animate-spin-slow"></div>
                <div className="absolute inset-4 rounded-full border-2 border-pink-500/20 animate-pulse"></div>
                
                {/* Profile Image Container */}
                <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[22rem] lg:h-[22rem] xl:w-[26rem] xl:h-[26rem]">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    <img
                      src="/images/profile.jpg"
                      alt="Joseph Situma - FullStack Developer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full animate-bounce"></div>
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 border-2 border-purple-500 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/4 -left-8 w-6 h-6 bg-pink-500 rounded-full animate-ping"></div>
                  <div className="absolute bottom-1/4 -right-8 w-4 h-4 bg-blue-400 rounded-full animate-bounce"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;