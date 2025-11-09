import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const roles = [
    "Full Stack Developer 💻",
    "Creative Coder 🎨",
    "AI Explorer 🤖",
  ];
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // Typing effect logic
  useEffect(() => {
    const typingInterval = setInterval(() => {
      setDisplayText((prev) => prev + roles[index][charIndex]);
      setCharIndex((prev) => prev + 1);
    }, 90);

    if (charIndex === roles[index]?.length) {
      clearInterval(typingInterval);
      setTimeout(() => {
        setCharIndex(0);
        setDisplayText("");
        setIndex((prev) => (prev + 1) % roles.length);
      }, 1300);
    }

    return () => clearInterval(typingInterval);
  }, [charIndex, index]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-hidden"
    >
      {/* Background gradient circles */}
      <div className="absolute top-[-100px] left-[-100px] w-80 h-80 rounded-full bg-cyan-500/20 blur-3xl"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 rounded-full bg-purple-600/20 blur-3xl"></div>

      {/* Main Heading */}
      <motion.h1
        className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mb-6 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm Ranit Bag 👋
      </motion.h1>

      {/* Typing Subtitle */}
      <motion.p
        className="text-lg md:text-xl text-cyan-300 font-medium h-8 mb-6 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {displayText}
        <span className="border-r-2 border-cyan-400 ml-1"></span>
      </motion.p>

      {/* Short Description */}
      <motion.p
        className="max-w-2xl text-gray-400 leading-relaxed mb-10 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        I love crafting <span className="text-cyan-400">clean, creative</span> and{" "}
        <span className="text-purple-400">functional web experiences</span> using
        modern technologies like React, Node.js, and AI — turning ideas into
        digital reality.
      </motion.p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap justify-center gap-4 z-10">
        {/* View Work Button */}
        <motion.a
          href="#projects"
          className="relative inline-block px-8 py-3 text-white font-semibold rounded-xl overflow-hidden group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 transition-transform duration-500 group-hover:scale-105"></span>
          <span className="absolute inset-[2px] bg-gray-900 rounded-xl"></span>
          <span className="relative z-10">View My Work</span>
        </motion.a>

        {/* Download Resume Button */}
        <motion.a
          href="/Ranit_Bag_Resume.pdf"
          download="Ranit_Bag_Resume.pdf"
          className="relative inline-block px-8 py-3 text-white font-semibold rounded-xl overflow-hidden group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 transition-transform duration-500 group-hover:scale-105"></span>
          <span className="absolute inset-[2px] bg-gray-900 rounded-xl"></span>
          <span className="relative z-10">Download My Resume 📄</span>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
