import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../Images/Logo.png";
import "../Styles/Navbar.scss";
import React from "react";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-con">
        <div className="ham-logo">
          <FontAwesomeIcon icon={faBars} size="2x" className="hamburger" />
          <img src={Logo} alt="Alproseltech" />
        </div>
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Work</li>
        </ul>
      </div>
      <div className="nav-btn">
        <button>Start a Project</button>
      </div>
    </div>
  );
};
