import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaFileAlt,
} from "react-icons/fa";

const roles = [
  "FullStack Developer",
  "AI Enthusiast",
  "Graphic Designer",
];

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let i = typing ? displayed.length : displayed.length - 1;
    const delay = typing ? 60 : 35;

    if (typing && displayed === current) {
      const pause = setTimeout(() => setTyping(false), 2000);
      return () => clearTimeout(pause);
    }
    if (!typing && displayed === "") {
      setRoleIndex((prev) => (prev + 1) % roles.length);
      setTyping(true);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayed(typing ? current.slice(0, i + 1) : current.slice(0, i));
    }, delay);
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <div className="bg-[#0a0a0a] min-h-screen flex flex-col">
      {/* Hero */}
      <section className="flex-grow flex items-center px-6 md:px-12 lg:px-20 pt-24 pb-16">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Left — Text */}
            <div className="flex flex-col gap-7 order-2 lg:order-1">
            {/* Name + Typewriter */}
              <div className="flex flex-col gap-2">
                <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold-600 text-white leading-tight tracking-tight">
                  Hi, I'm <span className="text-cyan-400">Joseph</span>
                </h1>
                <div className="flex items-center gap-2 h-10">
                  <span className="text-lg md:text-2xl font-medium text-gray-300">
                    {displayed}
                  </span>
                  <span className="w-0.5 h-6 bg-cyan-400 animate-pulse inline-block"></span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-lg">
                I build scalable web and mobile applications with a focus on
                performance, clean architecture, and real-world usability. I
                turn ideas into reliable digital products
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white text-sm font-medium px-6 py-2.5 rounded-full transition-colors duration-200"
                >
                  <FaEnvelope size={13} />
                  Hire Me
                </a>
                <a
                  href="/resume/Joseph-cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-[#2a2a2a] hover:border-cyan-400/40 text-gray-300 hover:text-white text-sm font-medium px-6 py-2.5 rounded-full transition-all duration-200"
                >
                  <FaFileAlt size={13} />
                  View Resume
                </a>
              </div>

              {/* Socials */}
              <div className="flex items-center gap-3 pt-1">
                <a
                  href="https://github.com/jo-oseeph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-[#111] border border-[#1f1f1f] hover:border-cyan-400/40 flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-200"
                >
                  <FaGithub size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/in/joseph-situma-2876ab391/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-[#111] border border-[#1f1f1f] hover:border-cyan-400/40 flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-200"
                >
                  <FaLinkedinIn size={16} />
                </a>
                <a
                  href="mailto:stumajoseph1261@gmail.com"
                  className="w-9 h-9 rounded-xl bg-[#111] border border-[#1f1f1f] hover:border-cyan-400/40 flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-200"
                >
                  <FaEnvelope size={15} />
                </a>
              </div>
            </div>

            {/* Right — Profile Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-2xl scale-110"></div>

                {/* Image frame */}
                <div className="relative w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border border-cyan-400/20 shadow-2xl shadow-cyan-500/10">
                  <img
                    src="/images/pr.jpg"
                    alt="Joseph Situma"
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/30 to-transparent"></div>
                </div>
                {/* Floating badge — bottom left */}
                <div className="absolute -bottom-2 -left-2 bg-[#111] border border-cyan-400/20 rounded-2xl px-4 py-2.5 shadow-xl">
                  <p className="text-cyan-400 text-xs font-semibold">
                    Open to work
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
