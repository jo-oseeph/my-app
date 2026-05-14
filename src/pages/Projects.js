import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    category: "Technology",
    title: "CybexTech",
    description:
      "Modern company website presenting web, cloud, and maintenance services with a scalable and professional interface.",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "/images/cyber.png",
    live: "https://www.cybextech.co.ke/",
    
  },
  {
    id: 4,
    title: "MoiHub",
    category: "Student Services",
    description:
      "A centralized platform connecting students to rentals, food delivery, and essential campus services.",
    technologies: ["React", "Node.js"],
    image: "/images/moihub.png",
    live: "https://moihub-silk.vercel.app/",
  },
  {
    id: 2,
    category: "Education",
    title: "MoiLearn",
    description:
      "MERN-based platform for sharing exam papers with JWT auth, role-based access, Cloudinary storage, and AI upload integration.",
    technologies: ["React", "Node.js", "MongoDB", "Cloudinary", "AI"],
    image: "/images/moilearn.png",
    live: "https://moilearn.vercel.app",
  },
  {
    id: 3,
    category: "Wellness",
    title: "Serene Spa",
    description:
      "Responsive spa website built with React and Tailwind, focused on clean UI and seamless user experience.",
    technologies: ["React", "TailwindCSS"],
    image: "/images/spa.png",
    live: "https://serenspa.vercel.app",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Projects = () => {
  return (
    <section className="bg-[#0a0a0a] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-gray-500 text-xs font-medium uppercase tracking-widest mb-3">
            Work
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Featured projects
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Recent builds spanning full-stack delivery and cloud deployment.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-[#111] border border-cyan-400/20 rounded-2xl overflow-hidden flex flex-col hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/5 transition-colors duration-300"
            >
              {/* Image */}
              {project.image && (
                <div className="p-3 pb-0">
                  <div className="w-full h-44 rounded-xl overflow-hidden border border-cyan-400/10">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              )}

              {/* Card Body */}
              <div className="p-6 flex flex-col gap-4 flex-grow">

                {/* Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-cyan-400/70 border border-cyan-400/20 rounded-full px-3 py-1 bg-cyan-400/5">
                    {project.category}
                  </span>
                </div>

                {/* Title + Description */}
                <div className="flex flex-col gap-2 flex-grow">
                  <h3 className="text-white font-semibold text-[15px]">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                {project.technologies?.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs text-gray-400 border border-[#252525] rounded-md px-2.5 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Links */}
                <div className="flex items-center gap-4 pt-1">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors duration-200"
                    >
                      View project →
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-400 transition-colors duration-200"
                    >
                      <FaGithub size={15} />
                    </a>
                  )}
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;