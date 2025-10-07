
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
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
      const offsetTop = element.offsetTop - 80; 
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  // Social media links 
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/jo-oseeph', 
      icon: <FaGithub className="w-5 h-5" />,
      color: 'hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/joseph-situma-4b6a78363?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', 
      icon: <FaLinkedinIn className="w-5 h-5" />,
      color: 'hover:text-blue-400'
    },
    {
      name: 'X (Twitter)',
      href: 'https://x.com/sejjob?t=Nf-asnb6GKMmqA16b9xplw&s=09', 
      icon: <FaXTwitter className="w-5 h-5" />,
      color: 'hover:text-gray-300'
    },
    {
      name: 'Email',
      href: 'mailto:stumajoseph1261@gmail.com', 
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
            © {currentYear} Sejjo Codes. All rights reserved.
  
          </div> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;