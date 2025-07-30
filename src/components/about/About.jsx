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
              <h5>Experiences</h5>
              <small>3 years </small>
            </article>

            <article className="about__card">
              <a href="#portfolio" className="about__icon"><FolderSpecial /></a>
              <h5>Projects</h5>
              <small>5 completed</small>
            </article>
          </div>
          <p>
            Je suis Fatim Coulibaly développeur web Fullstack.

            I have rich experience in building and customizing websites and app, also I am good at logo designing. Recently I have started learning machine learning and have created great apps which are mention below</p>
          <a href="#contact" className="btn btn-primary"> Contactez-moi</a>
        </div>
      </div>
    </section>
  );
};

export default About;
