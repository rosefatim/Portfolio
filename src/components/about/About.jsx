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
          <div className="about__summary">
            <p>
              Je suis Fatim Coulibaly développeur web Fullstack.
            </p>
            <p>
              je conçois des applications modernes, performantes et centrées sur des architectures modulaires et maintenables.
              Je maîtrise des technologies comme React, TailwindCSS, PHP, NodeJs ainsi que l’intégration d’API REST sécurisées.
            </p>
            <p>
              J’ai également développé plusieurs projets incluant un raccourcisseur d’URL avec API, un SIRH avec plusieurs modules intégrés comme la gestion des salaires,la gestion des absences et présences et bien d'autre, une application de gestion de tâches collaborative et divers outils de gestion connectés à une base de données.
              Rigoureuse sur la qualité du code, j’utilise des pratiques comme la validation côté client/serveur, l'écriture de code modulaire,et le versionnement Git.
            </p>
            <p>
              Mon objectif : créer des interfaces performantes, fiables et scalables tout en continuant à apprendre et à relever de nouveaux défis.
            </p>
          </div>

          <a href="#contact" className="btn btn-primary"> Contactez-moi</a>
        </div>
      </div >
    </section >
  );
};

export default About;
