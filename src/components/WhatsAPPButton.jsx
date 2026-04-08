import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const phone = '254792378380';
const message = encodeURIComponent("Hi Joseph! I came across your portfolio and I'd love to discuss a project with you.");
const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

const WhatsAppButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 group"
    >
      {/* Label */}
      <span
        className={`bg-[#111] border border-[#1f1f1f] text-gray-300 text-xs font-medium px-3 py-1.5 rounded-full shadow-lg transition-all duration-300 ${
          hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
        }`}
      >
        Quick Chat
      </span>

      {/* Button */}
      <div className="w-13 h-13 w-[52px] h-[52px] rounded-full bg-green-500 hover:bg-green-400 flex items-center justify-center shadow-lg shadow-green-500/30 hover:shadow-green-400/40 transition-all duration-200 hover:scale-105">
        <FaWhatsapp size={26} className="text-white" />
      </div>
    </a>
  );
};

export default WhatsAppButton;