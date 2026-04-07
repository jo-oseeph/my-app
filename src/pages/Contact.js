import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const contactInfo = [
  {
    icon: <FaEnvelope size={16} className="text-cyan-400" />,
    label: 'Email',
    value: 'stumajoseph1261@gmail.com',
    href: 'mailto:stumajoseph1261@gmail.com',
  },
  {
    icon: <FaPhone size={16} className="text-cyan-400" />,
    label: 'Phone',
    value: '+254 792 378 380',
    href: 'tel:+254792378380',
  },
  {
    icon: <FaMapMarkerAlt size={16} className="text-cyan-400" />,
    label: 'Location',
    value: 'Nairobi, Kenya',
    href: null,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch('https://formsubmit.co/ajax/stumajoseph1261@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...formData, _subject: 'New message from your portfolio!' }),
      });
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#0a0a0a] py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-gray-500 text-xs font-medium uppercase tracking-widest mb-3">Contact</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Get In Touch</h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">

          {/* Left — Contact Info */}
          <div className="flex flex-col gap-4">
            {contactInfo.map((info, i) => (
              <div
                key={i}
                className="bg-[#111] border border-cyan-400/20 rounded-2xl px-6 py-5 flex items-center gap-4 hover:border-cyan-400/40 transition-colors duration-300"
              >
                <div className="w-9 h-9 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center flex-shrink-0">
                  {info.icon}
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-0.5">{info.label}</p>
                  {info.href ? (
                    <a href={info.href} className="text-white text-sm font-medium hover:text-cyan-400 transition-colors duration-200">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-white text-sm font-medium">{info.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Note */}
            <div className="bg-[#111] border border-cyan-400/20 rounded-2xl px-6 py-6 mt-2">
              <p className="text-gray-400 text-sm leading-relaxed">
                I'm currently available for freelance projects and full-time opportunities.
                Whether you have a question or just want to say hi — my inbox is always open.
              </p>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-[#111] border border-cyan-400/20 rounded-2xl p-7 md:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-12 text-center">
                <div className="w-14 h-14 rounded-full bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">
                  <FaCheckCircle size={24} className="text-cyan-400" />
                </div>
                <h3 className="text-white font-semibold text-base">Message sent!</h3>
                <p className="text-gray-500 text-sm max-w-xs">
                  Thanks for reaching out. I'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-cyan-400 hover:text-cyan-300 text-sm transition-colors duration-200"
                >
                  Send another message →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                <div className="flex flex-col gap-1.5">
                  <label className="text-gray-400 text-xs font-medium uppercase tracking-wider">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="bg-[#161616] border border-[#222] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-400/40 transition-colors duration-200"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-gray-400 text-xs font-medium uppercase tracking-wider">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="bg-[#161616] border border-[#222] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-400/40 transition-colors duration-200"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-gray-400 text-xs font-medium uppercase tracking-wider">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="bg-[#161616] border border-[#222] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-400/40 transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-semibold py-3 rounded-xl transition-colors duration-200"
                >
                  <FaPaperPlane size={13} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;