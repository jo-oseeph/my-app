import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10"
    >
      <div className="backdrop-blur-md bg-white/5">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-primary hover:text-primary/80 transition-all duration-300 hover:scale-105">
              Joseph.
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative py-2 transition-all duration-300 group ${
                    isActive(item.path)
                      ? 'text-primary font-medium'
                      : 'text-white hover:text-primary'
                  }`}
                >
                  {item.name}
                  {/* Animated bottom border */}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
                    isActive(item.path) ? 'w-full' : ''
                  }`}></span>
                </Link>
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
              <Link
                key={item.name}
                to={item.path}
                className={`block py-3 px-4 transition-all duration-300 relative group ${
                  isActive(item.path)
                    ? 'text-primary font-medium bg-primary/10'
                    : 'text-white hover:text-primary hover:bg-white/5'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
                <span className={`absolute bottom-0 left-4 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-8 ${
                  isActive(item.path) ? 'w-8' : ''
                }`}></span>
              </Link>
            ))}
          </div>
        )}
      </nav>
      </div>
    </header>
  );
};

export default Header;