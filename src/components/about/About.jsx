import React from "react";
import "./About.css"
import ME from "../../assets/me-about.jpg";
import { Card } from "@mui/material";
import { WorkspacePremium, FolderSpecial } from "@mui/icons-material";

const About = () => {
  return (
    <section id="about">
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me-about" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <a href="#" className="about__icon"><WorkspacePremium /></a>
              <h5>Experience</h5>
              <small>1+ year </small>
            </article>

            <article className="about__card">
              <a href="#" className="about__icon"><FolderSpecial /></a>
              <h5>Projects</h5>
              <small>5 completed</small>
            </article>
          </div>
          <p>
            Refutaremus male orationi Tecum refutaremus beneficium erga istam et
            et tuus neque postulabat te illum partem meae decebat istam
            animadvertere enim nostro versari aliquis versari animadvertere
            moderatur male suscepisset more.
          </p>
          <a href="#conatct" className="btn btn-primary"> Contactez-moi</a>
        </div>
      </div>
    </section>
  );
};

export default About;
