import {
  faAngleRight,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../Images/Logo.png";
import "../Styles/Navbar.scss";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import FootLogo from "../Images/FootLogo.png";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const togglemenu = () => {
    console.log("clicked");
    setToggle(!toggle);
  };

  return (
    <div className="navbar">
      <div className="nav-con">
        <div className="ham-logo">
          <Link to="/">
            <img src={Logo} alt="Alproseltech" />
          </Link>
        </div>
        <nav className={toggle ? "nav-items" : "null"}>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "false")}
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/service"
                className={({ isActive }) => (isActive ? "active" : "false")}
              >
                SERVICES
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) => (isActive ? "active" : "false")}
              >
                PORTFOLIO
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? "active" : "false")}
              >
                BLOGS
              </NavLink>
            </li>
            <button>
              <p>Get Started</p> <FontAwesomeIcon icon={faAngleRight} bounce />
            </button>
          </ul>

          <div className="side-links">
            <div className="side-logo"></div>
            <hr />
            <div className="side-icons">
              <div className="side-icon">
                <i class="fa-brands fa-linkedin-in fa-xl"></i>
              </div>
              <div className="side-icon">
                <i class="fa-brands fa-twitter fa-xl"></i>
              </div>
              <div className="side-icon">
                <i class="fa-brands fa-facebook-f fa-xl"></i>
              </div>
              <div className="side-icon">
                <i class="fa-brands fa-instagram fa-xl"></i>
              </div>
            </div>
          </div>
        </nav>
        <div className="nav-btn">
          <Link to="/contact">
            <button>Start a Project</button>
          </Link>
        </div>
        <div className="ham" onClick={togglemenu}>
          <FontAwesomeIcon
            icon={toggle ? faXmark : faBars}
            style={{
              width: "15px",
              height: "25px",
              padding: "5px 10px 5px 10px",
              backgroundColor: "#E22628",
              borderRadius: "50%",
              color: "#fff",
            }}
            className="ham-icon"
          />
        </div>
      </div>
    </div>
  );
};
