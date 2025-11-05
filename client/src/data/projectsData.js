// src/data/projectsData.js
import civicconnect from "../assets/civicconnect.png"
import blog from "../assets/blog.png"

const projectsData = [
  {
    id: 1,
    title: "CivicConnect",
    desc: "Smart citizen issue management system .",
    tech: ["React", "Node.js", "MongoDB", "Express.js"],
    image: civicconnect,
    github: "https://github.com/vrk0ranit/mern-auth",
    live: "https://civicconnect-ranit.onrender.com/"
  },
  {
    id: 2,
    title: "Ranit'sBlog",
    desc: "A smart blog web application with beautiful dashboard",
    tech: ["React", "Node.js", "MongoDB", "Express.js"],
    image: blog,
    github: "https://github.com/vrk0ranit/Mern-Blog",
    live: "https://mern-blog-rahm.onrender.com/"
  }
];

export default projectsData;
