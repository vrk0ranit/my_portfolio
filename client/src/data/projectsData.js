// src/data/projectsData.js
import civicconnect from "../assets/civicconnect.png"
import blog from "../assets/blog.png"
import todo from "../assets/todo.png"
import social from "../assets/socialmedia.png"
import texttospeech from "../assets/texttospeech.png"
import password from "../assets/password manager.png"
import currency from "../assets/currency converter.png"
import decorease from "../assets/decorease.png"

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
    tech: ["React", "Node.js", "MongoDB", "Express.js","Firebase"],
    image: blog,
    github: "https://github.com/vrk0ranit/Mern-Blog",
    live: "https://mern-blog-rahm.onrender.com/"
  },
  {
    id: 3,
    title: "Social Media App ",
    desc: "Social Media Platform where user can connect with each other through posts and messages.",
    tech: ["React", "Node.js", "MongoDB", "Express.js"," Socket.io"],
    image: social,
    github: "https://github.com/vrk0ranit/Social-Media",
    live: "https://social-media-50zf.onrender.com/"
  },
  {
    id: 4,
    title: "Decorease- A Ecommerce Platform",
    desc: "A ecommerce platform to buy home made product with customization option.",
    tech: ["React", "Node.js", "MongoDB", "Express.js"," Socket.io"],
    image: decorease,
    github: "https://github.com/vrk0ranit/College-Project",
    live: "https://decorease-ranitbag.onrender.com/"
  },
  {
    id: 5,
    title: "Text to sound converter",
    desc: "A simple web application that convert text to speech in different language.",
    tech: ["React"," javaScript","CSS"],
    image: texttospeech,
    github: "https://github.com/vrk0ranit/TextToSpeechConverter",
    live: "https://text-to-speech-converter-sepia-five.vercel.app/"
  },
  {
    id: 6,
    title: "password manager ",
    desc: "A simple password generator web application.",
    tech: ["React", "javaScript"," CSS"],
    image: password,
    github: "https://github.com/vrk0ranit/Password-Maneger",
    live: "https://password-maneger.vercel.app/"
  },
  {
    id: 7,
    title: "currency converter",
    desc: "A smart currency converter.",
    tech: ["React", "javaScript"," CSS"],
    image: currency,
    github: "https://github.com/vrk0ranit/Currency-Convertor",
    live: "https://currency-converter-d44z.vercel.app/"
  },
  {
    id: 8,
    title: "To-do App",
    desc: "A smart todo list app using react.",
    tech: ["React", "javaScript"," CSS"],
    image: todo,
    github: "https://github.com/vrk0ranit/Todos-App-React-",
    live: "https://todos-app-react-wine.vercel.app/"
  },
];

export default projectsData;
