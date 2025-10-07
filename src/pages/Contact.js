import React, { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaDownload, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
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
      setFormData({ fullName: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            Let's Work Together
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto">
            Ready to bring your ideas to life? I'm always excited to collaborate on innovative 
            projects and discuss new opportunities.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Contact Form */}
          <div className="bg-white/5 backdrop-blur-lg border border-primary/20 rounded-2xl p-8">
            <div className="flex items-center mb-8">
              <FaPaperPlane className="text-primary text-2xl mr-3" />
              <h2 className="text-2xl font-bold text-white">Send a Message</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className="block text-white font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-primary/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-primary focus:bg-white/10 transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-primary/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-primary focus:bg-white/10 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-primary/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-primary focus:bg-white/10 transition-all"
                  placeholder="What's this about?"
                />
              </div>
              
              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-white/5 border border-primary/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-primary focus:bg-white/10 transition-all resize-none"
                  placeholder="Tell me about your project, collaboration ideas, or any questions you have..."
                />
              </div>
              
              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FaPaperPlane className="text-lg" />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          </div>

          {/* Right Side - Contact Information */}
          <div className="space-y-8">
            {/* Get In Touch Section */}
            <div className="bg-white/5 backdrop-blur-lg border border-primary/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <FaEnvelope className="text-primary text-xl" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Email</p>
                    <a 
                      href="mailto:josephsituma877@gmail.com" 
                      className="text-white font-medium hover:text-primary transition-colors"
                    >
                      josephsituma877@gmail.com
                    </a>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <FaGithub className="text-primary text-xl" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">GitHub</p>
                    <a 
                      href="https://github.com/jo-oseeph" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:text-primary transition-colors"
                    >
                      @jo-oseeph
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <FaLinkedinIn className="text-primary text-xl" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">LinkedIn</p>
                    <a 
                      href="https://linkedin.com/in/joseph-situma" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:text-primary transition-colors"
                    >
                      Joseph Situma
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt className="text-primary text-xl" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Location</p>
                    <p className="text-white font-medium">Available Worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions Section */}
            <div className="bg-white/5 backdrop-blur-lg border border-primary/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-8">Quick Actions</h2>
              
              <div className="space-y-4">
                {/* Send Direct Email */}
                <a
                  href="mailto:josephsituma877@gmail.com"
                  className="w-full flex items-center justify-center space-x-3 py-3 px-6 bg-primary/10 border border-primary/30 rounded-lg text-primary hover:bg-primary/20 transition-all"
                >
                  <FaEnvelope className="text-lg" />
                  <span className="font-medium">Send Direct Email</span>
                </a>

                {/* Call Me */}
                <a
                  href="tel:+254740321377"
                  className="w-full flex items-center justify-center space-x-3 py-3 px-6 bg-primary/10 border border-primary/30 rounded-lg text-primary hover:bg-primary/20 transition-all"
                >
                  <FaPhone className="text-lg" />
                  <span className="font-medium">Call Me: +254 740 321 377</span>
                </a>

                {/* Download Resume */}
                <a
                  href="/resume.pdf"
                  download
                  className="w-full flex items-center justify-center space-x-3 py-3 px-6 bg-primary/10 border border-primary/30 rounded-lg text-primary hover:bg-primary/20 transition-all"
                >
                  <FaDownload className="text-lg" />
                  <span className="font-medium">Download Resume</span>
                </a>
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-white/5 backdrop-blur-lg border border-primary/20 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <h3 className="text-xl font-bold text-white">Available for New Projects</h3>
              </div>
              <p className="text-white/70">
                Currently accepting full-time opportunities and freelance projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;