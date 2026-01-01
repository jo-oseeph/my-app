import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes slideIn {
        from {
          opacity: 0;
          transform: translateX(-20px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      .animate-fade-in-up {
        animation: fadeInUp 0.6s ease-out forwards;
      }
      
      .animate-slide-in {
        animation: slideIn 0.5s ease-out forwards;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      alert('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-xl" />,
      label: 'Email',
      value: 'stumajoseph1261@gmail.com',
      href: 'mailto:stumajoseph1261@gmail.com'
    },
    {
      icon: <FaPhone className="text-xl" />,
      label: 'Phone',
      value: '+254 792378380',
      href: 'tel:+254792378380'
    },
    {
      icon: <FaMapMarkerAlt className="text-xl" />,
      label: 'Location',
      value: 'Nairobi, Kenya',
      href: null
    }
  ];

  return (
    <div className="min-h-screen bg-background py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Hero Text */}
        <div className="text-center mb-12 animate-fade-in-up">
          <p className="text-white/60 text-base md:text-lg mb-4">
            Always learning and exploring new technologies to stay at the forefront of web development.
          </p>
        </div>

        {/* Get In Touch Section */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Get In Touch
          </h2>
          <p className="text-white/60 text-center text-base md:text-lg mb-12">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20">
            {/* Left Column - Contact Info & Social */}
            <div className="space-y-8">
              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="animate-slide-in bg-white/5 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 hover:transform hover:translate-x-2"
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                        {info.icon}
                      </div>
                      <div className="flex-grow">
                        <p className="text-white/60 text-sm mb-1">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-white font-medium hover:text-primary transition-colors text-sm md:text-base break-all"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white font-medium text-sm md:text-base">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="animate-fade-in-up bg-white/5 backdrop-blur-sm border border-primary/20 rounded-2xl p-8" style={{ animationDelay: '0.6s' }}>
              <div className="space-y-6">
                {/* Your Name */}
                <div>
                  <label className="block text-white font-medium mb-2 text-sm md:text-base">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-slate-800/50 border-none rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                {/* Your Email */}
                <div>
                  <label className="block text-white font-medium mb-2 text-sm md:text-base">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-slate-800/50 border-none rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Your Message */}
                <div>
                  <label className="block text-white font-medium mb-2 text-sm md:text-base">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-4 bg-slate-800/50 border-none rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed hover:transform hover:scale-[1.02] shadow-lg shadow-primary/20"
                >
                  <FaPaperPlane className="text-lg" />
                  <span className="text-base md:text-lg">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;