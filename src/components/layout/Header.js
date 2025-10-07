import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', id: 'home' },
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
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (sectionId) => activeSection === sectionId;

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10"
    >
      <div className="backdrop-blur-md bg-white/5">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-2xl font-bold text-primary hover:text-primary/80 transition-all duration-300 hover:scale-105"
            >
              Joseph.
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative py-2 transition-all duration-300 group ${
                    isActive(item.id)
                      ? 'text-primary font-medium'
                      : 'text-white hover:text-primary'
                  }`}
                >
                  {item.name}
                  {/* Animated bottom border */}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
                    isActive(item.id) ? 'w-full' : ''
                  }`}></span>
                </button>
              ))}
            </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-primary transition-all duration-300 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 backdrop-blur-sm bg-white/5 rounded-lg border border-primary/20">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-3 px-4 transition-all duration-300 relative group ${
                  isActive(item.id)
                    ? 'text-primary font-medium bg-primary/10'
                    : 'text-white hover:text-primary hover:bg-white/5'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-4 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-8 ${
                  isActive(item.id) ? 'w-8' : ''
                }`}></span>
              </button>
            ))}
          </div>
        )}
      </nav>
      </div>
    </header>
  );
};

export default Header;