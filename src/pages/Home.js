import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaFileAlt } from "react-icons/fa";

const roles = ["FullStack Developer", "AI Enthusiast", "Graphic Designer"];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, delay, ease: "easeOut" } },
});

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
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
      setDisplayed(
        typing
          ? current.slice(0, displayed.length + 1)
          : current.slice(0, displayed.length - 1)
      );
    }, delay);
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <div className="bg-[#0a0a0a] min-h-screen flex flex-col">
      <section className="flex-grow flex items-center px-6 md:px-12 lg:px-20 pt-20 pb-12">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left — Text */}
            <motion.div
              className="flex flex-col gap-6 order-2 lg:order-1"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.12 } } }}
            >
              <motion.div variants={fadeUp(0)} className="flex flex-col gap-2">
                <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                  Hi, I'm <span className="text-cyan-400">Joseph</span>
                </h1>
                <div className="flex items-center gap-2 h-10">
                  <span className="text-lg md:text-2xl font-medium text-gray-300">
                    {displayed}
                  </span>
                  <span className="w-0.5 h-6 bg-cyan-400 animate-pulse inline-block" />
                </div>
              </motion.div>

              <motion.p
                variants={fadeUp(0.1)}
                className="text-gray-500 text-sm md:text-base leading-relaxed max-w-lg"
              >
                I build scalable web and mobile applications with a focus on
                performance, clean architecture, and real-world usability. I
                turn ideas into reliable digital products.
              </motion.p>

              <motion.div variants={fadeUp(0.2)} className="flex flex-wrap gap-3">
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
              </motion.div>

              <motion.div variants={fadeUp(0.3)} className="flex items-center gap-3">
                {[
                  { href: "https://github.com/jo-oseeph", icon: <FaGithub size={16} /> },
                  { href: "https://www.linkedin.com/in/joseph-situma-2876ab391/", icon: <FaLinkedinIn size={16} /> },
                  { href: "mailto:stumajoseph1261@gmail.com", icon: <FaEnvelope size={15} /> },
                ].map(({ href, icon }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-[#111] border border-[#1f1f1f] hover:border-cyan-400/40 flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-200"
                  >
                    {icon}
                  </a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right — Profile Image */}
            <motion.div
              className="order-1 lg:order-2 flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-2xl scale-110" />
                <div className="relative w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border border-cyan-400/20 shadow-2xl shadow-cyan-500/10">
                  <img
                    src="/images/pr.jpg"
                    alt="Joseph Situma"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/30 to-transparent" />
                </div>

                <motion.div
                  className="absolute -bottom-2 -left-2 bg-[#111] border border-cyan-400/20 rounded-2xl px-4 py-2.5 shadow-xl"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                >
                  <p className="text-cyan-400 text-xs font-semibold">Open to work</p>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;