import React from "react";
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaPython, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";

const MySkills = () => {
  const skills = [
    { name: "React", icon: <FaReact size={32} /> },
    { name: "Node.js", icon: <FaNodeJs size={32} /> },
    { name: "MongoDB", icon: <FaDatabase size={32} /> },
    { name: "Git / GitHub", icon: <FaGitAlt size={32} /> },
    { name: "HTML5", icon: <FaHtml5 size={32} /> },
    { name: "CSS3", icon: <FaCss3Alt size={32} /> },
    { name: "JavaScript", icon: <FaJsSquare size={32} /> },
    { name: "Python", icon: <FaPython size={32} /> },
  ];

  return (
    <section id="skills" className="py-20 px-8 bg-gray-900">
      <h2 className="text-3xl font-bold text-center text-cyan-400 mb-10">
        My Skills
      </h2>

      <div className="flex justify-center flex-wrap gap-8">
        {skills.map((s, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-gray-800 rounded-2xl p-6 shadow-lg hover:scale-110 transition-transform"
          >
            <div className="text-cyan-400">{s.icon}</div>
            <span className="mt-2 text-gray-300 font-medium">{s.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MySkills;
