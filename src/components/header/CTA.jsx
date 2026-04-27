import React from "react";
import CV from "../../assets/CV de Kalitia Rose Fatim Coulibaly.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Me contacter
      </a>
    </div>
  );
};

export default CTA;
