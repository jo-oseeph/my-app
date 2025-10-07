import React from 'react';
import { FaGithub, FaLinkedinIn, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Quick Links for navigation
  const quickLinks = [
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' }
  ];

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed header height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  // Social media links - Replace with your actual URLs
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/your-username', // Replace with your GitHub URL
      icon: <FaGithub className="w-5 h-5" />,
      color: 'hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/your-username', // Replace with your LinkedIn URL
      icon: <FaLinkedinIn className="w-5 h-5" />,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/your-username', // Replace with your Instagram URL
      icon: <FaInstagram className="w-5 h-5" />,
      color: 'hover:text-pink-400'
    },
    {
      name: 'X (Twitter)',
      href: 'https://x.com/your-username', // Replace with your X/Twitter URL
      icon: <FaXTwitter className="w-5 h-5" />,
      color: 'hover:text-gray-300'
    },
    {
      name: 'Email',
      href: 'mailto:your.email@example.com', // Replace with your email
      icon: <FaEnvelope className="w-5 h-5" />,
      color: 'hover:text-primary'
    }
  ];

  return (
    <footer className="bg-background border-t border-primary/20 py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Left Column - About */}
          <div className="space-y-4">
            <h3 className="text-primary text-xl font-bold">Joseph Situma</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Full-Stack Developer, Tech Enthusiast, and Community Builder crafting innovative solutions for a better digital future.
            </p>
          </div>

          {/* Middle Column - Quick Links */}
          <div className="space-y-4">
            <h3 className="text-primary text-xl font-bold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/70 hover:text-primary transition-colors duration-300 text-sm text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Let's Connect */}
          <div className="space-y-4">
            <h3 className="text-primary text-xl font-bold">Let's Connect</h3>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-white/5 border border-primary/20 rounded-lg flex items-center justify-center text-white/80 transition-all duration-300 hover:bg-primary/10 hover:border-primary/40 hover:scale-110 ${link.color}`}
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            
            
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-primary/20 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 text-sm mb-4 md:mb-0 flex items-center">
            © {currentYear} Joseph Situma. Built with 
            <span className="text-green-400 mx-1">💚</span> 
            and React
          </div>
          
          {/* Back to Top */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-primary hover:text-primary/80 transition-colors duration-200 text-sm flex items-center space-x-1 group"
            >
              <span>Open source on GitHub</span>
              <span className="group-hover:-translate-y-1 transition-transform duration-300">↗</span>
            </button>
            
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center text-primary hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-110"
              aria-label="Back to top"
            >
              ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;