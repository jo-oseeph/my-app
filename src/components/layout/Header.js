import React, { useState, useEffect, useMemo } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navItems = useMemo(() => [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Services', id: 'services' },
    { name: 'Contact', id: 'contact' },
  ], []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 72, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 100;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#1a1a1a]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => scrollToSection('home')}
          className="text-cyan-400 font-bold text-lg tracking-tight hover:text-cyan-400 transition-colors duration-200"
        >
          Joseph
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-4 py-2 text-sm rounded-lg transition-all duration-200 ${
                activeSection === item.id
                  ? 'text-cyan-400 bg-cyan-400/5'
                  : 'text-gray-400 hover:text-white hover:bg-[#111]'
              }`}
            >
              {item.name}
              {activeSection === item.id && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400" />
              )}
            </button>
          ))}
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl bg-[#111] border border-[#1f1f1f] text-gray-400 hover:text-white transition-colors duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {isMenuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mx-4 mb-4 bg-[#111] border border-[#1f1f1f] rounded-2xl overflow-hidden">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full text-left px-5 py-3.5 text-sm transition-colors duration-200 border-b border-[#1a1a1a] last:border-0 ${
                activeSection === item.id
                  ? 'text-cyan-400 bg-cyan-400/5'
                  : 'text-gray-400 hover:text-white hover:bg-[#161616]'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;