import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const socials = [
    {
      icon: <FaGithub />,
      link: "https://github.com/vrk0ranit",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/ranit-bag-78b3ba252/",
      label: "LinkedIn",
    },
    {
      icon: <FaEnvelope />,
      link: "mailto:ranitbag49@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-10 text-center relative mt-16">
      {/* top gradient accent */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500" />

      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-xl font-semibold text-cyan-400 mb-4">
          Let’s Connect 🌐
        </h3>

        {/* Social icons */}
        <div className="flex justify-center space-x-6 mb-6">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.link}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition transform hover:scale-125"
              aria-label={s.label}
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-4"></div>

        {/* Bottom text */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} <span className="text-cyan-400 font-medium">Ranit Bag</span> — Crafted with 💙 using{" "}
          <span className="text-white">React</span> &{" "}
          <span className="text-cyan-400">Tailwind CSS</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
