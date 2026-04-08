import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const navLinks = [
  { name: 'About', id: 'about' },
  { name: 'Projects', id: 'projects' },
  { name: 'Skills', id: 'skills' },
  { name: 'Services', id: 'services' },
  { name: 'Contact', id: 'contact' },
];

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/jo-oseeph', icon: <FaGithub size={15} /> },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/joseph-situma-2876ab391/', icon: <FaLinkedinIn size={15} /> },
  { name: 'X', href: 'https://x.com/sejjob?t=Nf-asnb6GKMmqA16b9xplw&s=09', icon: <FaXTwitter size={15} /> },
  { name: 'Email', href: 'mailto:stumajoseph1261@gmail.com', icon: <FaEnvelope size={14} /> },
];

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
};

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1a1a1a]">

      {/* Main row */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

        {/* Logo + description */}
        <div className="flex flex-col gap-2">
          <p className="text-white font-bold text-base">
            Joseph<span className="text-cyan-400">.</span>
          </p>
          <p className="text-gray-500 text-xs leading-relaxed max-w-[220px]">
            Full-Stack Developer crafting scalable web applications and intuitive digital experiences.
          </p>
        </div>

        {/* Nav links */}
        <div className="flex flex-wrap gap-x-5 gap-y-2 md:justify-center">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-gray-500 hover:text-cyan-400 text-xs transition-colors duration-200"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-2 md:justify-end">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="w-8 h-8 rounded-lg bg-[#111] border border-[#1f1f1f] hover:border-cyan-400/30 flex items-center justify-center text-gray-500 hover:text-cyan-400 transition-all duration-200"
            >
              {link.icon}
            </a>
          ))}
        </div>

      </div>

      {/* Bottom copyright */}
      <div className="border-t border-[#141414] py-4 px-6 md:px-8">
        <p className="text-center text-gray-600 text-xs">
          © {year} Sejjo Codes. All rights reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;