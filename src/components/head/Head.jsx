import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./head.css";
const Head = () => {
  return (
    <div className="Header flex justifyCenter flexColumn">
      <div data-aos="fade-right">
        <h3 className="name">Kenny Egun</h3>
        <h1 className="headDtls">
          Full-Stack Developer — Next.js & React.js Specialist
        </h1>

        <p className="headerCreate">
          Crafting beautiful, functional, and user-friendly web applications.
        </p>
        <div className="icons flex">
          <a
            href="https://github.com/kennyegun24"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/kenny-egun-kennyegun24"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Head;
