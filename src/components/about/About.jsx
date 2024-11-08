import React from "react";
import "./about.css";
import ME from "../../assets/CSS.jpg";
import { FaAward } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { PiProjectorScreenChartLight } from "react-icons/pi";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <div className="about__card">
              <article>
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>1+ Years Working</small>
              </article>
            </div>
            <div className="about__card">
              <article>
                <LuUsers className="about__icon" />
                <h5>Clients</h5>
              </article>
            </div>
            <div className="about__card">
              <article>
                <PiProjectorScreenChartLight className="about__icon" />
                <h5>Projects</h5>
              </article>
            </div>
          </div>
          <p>
            I specialize in responsive design and am proficient in HTML5, CSS3,
            JavaScript, and modern frameworks like React. My design sensibility,
            combined with my technical skills, enables me to translate complex
            design challenges into seamless web solutions. Passionate about
            learning and development with a desire to apply skills on the teams.
            Eager to tackle more complex problems and continue to find ways to
            maximize user efficiency.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let`s talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
