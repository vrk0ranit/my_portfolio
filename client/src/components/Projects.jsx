import React from "react";
import projectsData from "../data/projectsData";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-8 bg-gray-950">
      <h2 className="text-3xl font-bold text-center text-cyan-400 mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((p) => (
          <div
            key={p.id}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.03] transition-transform"
          >
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">{p.title}</h3>
              <p className="text-gray-400 mb-3">{p.desc}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-cyan-500/20 text-cyan-300 text-xs px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 text-cyan-400">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-300 flex items-center gap-1"
                >
                  <FaGithub /> Code
                </a>
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-300 flex items-center gap-1"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
