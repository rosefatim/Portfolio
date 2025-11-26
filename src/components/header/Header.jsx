import React from "react";
import CTA from "./CTA";
import ME from "../../assets/me.png"
import HeaderSocials from "./HeaderSocials"
import "./header.css"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Kalitia Rose Fatim Coulibaly</h1>
        <h5>Web Fullstack Developper</h5>
        <CTA />
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <div className="scroll-down">
          <a href="#" >Scroll_down</a>
          {/* <ArrowForwardIcon sx={{textAlign:"center"}}/> */}
        </div>
       

      </div>
    </header>
  );
};

export default Header;
