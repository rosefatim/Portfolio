import React from "react";
import "./nav.css";
import {
  Home,
  AccountCircle,
  LibraryBooks,
  SupportAgent,
  Message,
} from "@mui/icons-material";

const Nav = () => {
  return (
    <nav>
      <a href="#" className="active"> <Home /> </a>
      <a href="#about"> <AccountCircle /> </a>
      <a href="#experience"> <LibraryBooks /> </a>
      <a href="#service"> <SupportAgent /> </a>
      <a href="#contact"> <Message /> </a>
    </nav>
  );
};

export default Nav;
