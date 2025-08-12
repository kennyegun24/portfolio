import React from "react";
import "./intro.css";
import Typewriter from "../Typewriter";
import CV from "../../assets/KennyCv.pdf";
const Intro = () => {
  return (
    <div
      data-aos="fade-down"
      className="introMainDiv flex alignCenter justifyCenter flexColumn"
      id="about"
    >
      <div className="flex flexColumn">
        <div className="type">
          <Typewriter text="Hello, I’m Kenny Elias!" />
        </div>

        <p>
          Full-Stack Developer specializing in Next.js and Front-End React.js
          development.
        </p>
        <p>
          I’m a Building Technology student from Nigeria with a passion for
          crafting efficient, scalable, and visually appealing web applications.
        </p>
        <p>
          I’ve built a variety of projects across multiple technologies, always
          following best practices to ensure clean, maintainable code and fully
          functional solutions.
        </p>
        <p>
          I honed my skills through Microverse, an online coding school based in
          California, where I collaborated remotely with developers from around
          the world.
        </p>
      </div>
      <a href={CV} download className="hover margin-top-2rem moreAboutMe">
        Download my CV
      </a>
    </div>
  );
};

export default Intro;
