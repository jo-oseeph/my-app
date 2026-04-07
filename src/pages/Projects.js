import React from "react";
import { FaGithub, FaSpa, FaShieldAlt, FaGraduationCap } from "react-icons/fa";

const projects = [
  {
    id: 1,
    icon: <FaShieldAlt size={20} className="text-cyan-400" />,
    category: "Technology",
    title: "CybexTech",
    description:
      "Modern company website presenting web, cloud, and maintenance services with a scalable and professional interface.",
    technologies: ["React", "Node.js", "MongoDB"],
    live: "https://www.cybextech.co.ke/",
    github: "https://github.com/jo-oseeph/Cybexv2",
  },
  {
    id: 2,
    icon: <FaGraduationCap size={20} className="text-cyan-400" />,
    category: "Education",
    title: "Moilearn",
    description:
      "MERN-based platform for sharing exam papers with JWT auth, role-based access, Cloudinary storage, and AI upload integration.",
    technologies: ["React", "Node.js", "MongoDB", "Cloudinary", "AI"],
    live: "https://moilearn.vercel.app",
    github: "https://github.com/jo-oseeph/moilearn-frontend",
  },
  {
    id: 3,
    icon: <FaSpa size={20} className="text-cyan-400" />,
    category: "Wellness",
    title: "Serene Spa",
    description:
      "Responsive spa website built with React and Tailwind, focused on clean UI and seamless user experience.",
    technologies: ["React", "TailwindCSS"],
    live: "https://serenspa.vercel.app",
    github: "https://github.com/jo-oseeph/Spa",
  },
];

const Projects = () => {
  return (
    <section className="bg-[#0a0a0a] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="text-gray-500 text-xs font-medium uppercase tracking-widest mb-3">
            Work
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Featured projects
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Recent builds spanning full-stack delivery and cloud deployment.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#111] border border-[#1f1f1f] rounded-2xl p-7 flex flex-col gap-6 hover:border-[#2a2a2a] transition-colors duration-300"
            >
              {/* Icon */}
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-lg bg-[#1a1a1a] flex items-center justify-center">
                  {project.icon}
                </div>
                <span className="text-xs text-gray-400 border border-[#2a2a2a] rounded-full px-3 py-1">
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

              {/* Links */}
              <div className="flex items-center gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors duration-200"
                >
                  View project →
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-400 transition-colors duration-200"
                >
                  <FaGithub size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
