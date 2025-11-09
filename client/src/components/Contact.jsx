import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-8 text-center">
      <h2 className="text-3xl font-bold text-cyan-400 mb-6">Get In Touch</h2>
      <p className="text-gray-400 mb-8">Have a project or idea? Let’s connect!</p>
      <a
        href="mailto:ranitbag49@gmail.com"
        className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl text-white font-medium"
      >
        Email Me
      </a>
    </section>
  );
};

export default Contact;
