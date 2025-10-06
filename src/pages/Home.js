import React from 'react';
import Button from '../components/ui/Button';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Name Tag */}
              <div className="inline-block">
                <span className="text-primary text-sm font-medium tracking-wider uppercase">
                  Joseph Situma
                </span>
              </div>
              
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                  Hey! I'M JOSEPH SITUMA
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary leading-tight">
                  I'M A FullStack Developer
                </h2>
              </div>
              
              {/* Description */}
              <p className="text-white/70 text-base md:text-lg lg:text-xl max-w-lg leading-relaxed">
                Yet bed any for travelling assistance indulgence unpleasing. Not 
                thoughts all exercise blessing. Indulgence way everything joy 
                alteration boisterous the attachment.
              </p>
              
              {/* CTA Button */}
              <div className="pt-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-medium"
                >
                  GET IN TOUCH →
                </Button>
              </div>
              
              {/* Social Icons */}
              <div className="flex space-x-4 pt-4">
                <a 
                  href="#" 
                  className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors"
                >
                  <FaFacebookF className="text-white text-lg" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-400 transition-colors"
                >
                  <FaInstagram className="text-white text-lg" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-300 transition-colors"
                >
                  <FaTwitter className="text-white text-lg" />
                </a>
              </div>
            </div>
            
            {/* Right Content - Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Geometric Background */}
                <div className="absolute inset-0 -z-10">
                  {/* Horizontal Lines */}
                  {[...Array(8)].map((_, i) => (
                    <div 
                      key={`h-${i}`}
                      className="absolute w-full h-0.5 bg-primary/20"
                      style={{ top: `${10 + i * 12}%` }}
                    />
                  ))}
                  {/* Vertical Lines */}
                  {[...Array(6)].map((_, i) => (
                    <div 
                      key={`v-${i}`}
                      className="absolute h-full w-0.5 bg-primary/20"
                      style={{ left: `${15 + i * 15}%` }}
                    />
                  ))}
                </div>
                
                {/* Profile Image Placeholder */}
                <div className="relative w-80 h-96 md:w-96 md:h-[28rem] lg:w-[22rem] lg:h-[26rem] xl:w-[26rem] xl:h-[30rem]">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
                    {/* You can replace this with your actual image */}
                    <div className="w-full h-full bg-gradient-to-br from-primary/30 to-transparent rounded-2xl flex items-center justify-center">
                      <span className="text-white/50 text-xl font-medium">Your Photo</span>
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full"></div>
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 border-2 border-primary rounded-full"></div>
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