import React from "react";
import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaJs, FaAws, FaGitAlt, FaServer, FaHtml5,
} from "react-icons/fa";
import {
  SiTailwindcss, SiNextdotjs, SiMongodb, SiPostgresql, SiSupabase,
} from "react-icons/si";
import { BiData } from "react-icons/bi";

const categories = [
  {
    title: "Frontend",
    icon: <FaReact size={20} className="text-cyan-400" />,
    skills: [
      { name: "React / Next.js", icon: <FaReact size={15} className="text-cyan-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={15} className="text-teal-400" /> },
      { name: "JavaScript ES6+", icon: <FaJs size={15} className="text-yellow-400" /> },
      { name: "HTML & CSS", icon: <FaHtml5 size={15} className="text-orange-400" /> },
    ],
  },
  {
    title: "Backend",
    icon: <BiData size={20} className="text-purple-400" />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs size={15} className="text-green-500" /> },
      { name: "PostgreSQL", icon: <SiPostgresql size={15} className="text-blue-400" /> },
      { name: "MongoDB", icon: <SiMongodb size={15} className="text-green-400" /> },
      { name: "Supabase", icon: <SiSupabase size={15} className="text-green-400" /> },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: <FaAws size={20} className="text-orange-400" />,
    skills: [
      { name: "AWS", icon: <FaAws size={15} className="text-orange-400" /> },
      { name: "CI/CD", icon: <FaGitAlt size={15} className="text-orange-500" /> },
      { name: "Vercel / Render", icon: <SiNextdotjs size={15} className="text-white" /> },
      { name: "DNS / Hosting", icon: <FaServer size={15} className="text-orange-500" /> },
    ],
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const columnVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const skillVariants = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

const Skills = () => {
  return (
    <section className="bg-[#0a0a0a] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-gray-500 text-xs font-medium uppercase tracking-widest mb-3">
            Expertise
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Skills & technologies
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Core competencies across the stack and cloud.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {categories.map((cat) => (
            <motion.div key={cat.title} variants={columnVariants} className="flex flex-col gap-4">

              {/* Title above card */}
              <div className="flex items-center gap-2.5 px-1">
                <div className="w-8 h-8 rounded-lg bg-[#1a1a1a] border border-[#222] flex items-center justify-center">
                  {cat.icon}
                </div>
                <h3 className="text-white font-semibold text-base">{cat.title}</h3>
              </div>

              {/* Card */}
              <motion.div
                className="bg-[#111] border border-[#1f1f1f] rounded-2xl p-5 flex flex-col gap-2.5"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={{ show: { transition: { staggerChildren: 0.08 } } }}
              >
                {cat.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    whileHover={{ x: 4, transition: { duration: 0.15 } }}
                    className="flex items-center gap-3 bg-[#161616] border border-[#222] rounded-xl px-4 py-3 hover:border-[#2a2a2a] transition-colors duration-200"
                  >
                    <span className="flex-shrink-0">{skill.icon}</span>
                    <span className="text-gray-300 text-sm">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;