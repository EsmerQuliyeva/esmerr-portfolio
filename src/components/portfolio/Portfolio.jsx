import React from "react";
import "./portfolio.css";
import first_picture from "../../assets/las-vegas-blackjack.webp";
import second_picture from "../../assets/recruiter.png";
import third_picture from "../../assets/extension.jpg";
import fourth_picture from "../../assets/movie.png";
import fifth_picture from "../../assets/furniro.png";
import sixth_picture from "../../assets/weather.png";

const projects = [
  {
    id: 1,
    image: fourth_picture,
    title: "Movies project",
    site: "https://movieproject-esmer.netlify.app/",
  },
  {
    id: 2,
    image: fifth_picture,
    title: "Business Project",
    site: "https://esmer-e-commerce-project.netlify.app/",
  },
  {
    id: 3,
    image: sixth_picture,
    title: "Weather app",
    site: "https://weather-app-esmer.netlify.app/",
  },
  {
    id: 4,
    image: first_picture,
    title: "Black Jack Game",
    github: "https://github.com/EsmerQuliyeva/BlackJackGame",
  },
  {
    id: 5,
    image: second_picture,
    title: "Business Project",
    github: "https://github.com/EsmerQuliyeva/project",
  },
  {
    id: 6,
    image: third_picture,
    title: "Extension",
    github: "https://github.com/EsmerQuliyeva/lead_tracker",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {projects.map(({ id, image, title, github, site }) => {
          return (
            <div key={id} className="portfolio_item">
              <div className="portfolio_item-img">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                {github && (
                  <a href={github} className="btn" target="_blank" rel="noopener noreferrer">
                    Github
                  </a>
                )}
                {site && (
                  <a href={site} className="btn" target="_blank" rel="noopener noreferrer">
                    Site
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
