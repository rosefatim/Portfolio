import React from "react";
import CV from "../../assets/CV_Rose_Fatim_COULIBALY.pdf";

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
