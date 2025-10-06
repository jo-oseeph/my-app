import React, { useState } from 'react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'your.email@example.com',
      href: 'mailto:your.email@example.com'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/yourprofile',
      href: 'https://linkedin.com/in/yourprofile'
    },
    {
      icon: '🐙',
      title: 'GitHub',
      value: 'github.com/yourusername',
      href: 'https://github.com/yourusername'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    }
  ];

  return (
    <div>
      <Section 
        title="Get In Touch"
        subtitle="Let's discuss your project or just say hello!"
      >
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-primary focus:bg-white/10 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-primary focus:bg-white/10 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-white mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-primary focus:bg-white/10 transition-all"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-primary focus:bg-white/10 transition-all resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Let's connect</h3>
            <p className="text-white/80 mb-8">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology and development. Feel free to reach out!
            </p>

            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : '_self'}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="flex items-center p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all group"
                >
                  <span className="text-2xl mr-4">{info.icon}</span>
                  <div>
                    <h4 className="text-white font-medium group-hover:text-primary transition-colors">
                      {info.title}
                    </h4>
                    <p className="text-white/80 text-sm">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <Card>
              <h4 className="text-xl font-bold text-white mb-4">Availability</h4>
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span className="text-white">Available for new projects</span>
              </div>
              <p className="text-white/80 text-sm">
                Currently accepting new client work and interesting project collaborations. 
                Typical response time: 24-48 hours.
              </p>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;