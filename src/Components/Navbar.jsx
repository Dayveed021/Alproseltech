import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../Images/Logo.png";
import "../Styles/Navbar.scss";
import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-con">
        <div className="ham-logo">
          <img src={Logo} alt="Alproseltech" />
        </div>
        <ul>
          <Link to="/" className="nav-items">
            <li>Home</li>
          </Link>
          <Link to="/" className="nav-items">
            <li>Services</li>
          </Link>
          <Link to="/" className="nav-items">
            <li>Work</li>
          </Link>
        </ul>
      </div>
      <div className="nav-btn">
        <button>Start a Project</button>
      </div>
      <div className="ham">
        <FontAwesomeIcon icon={faBars} size="2x" className="hamburger" />
      </div>
    </div>
  );
};
