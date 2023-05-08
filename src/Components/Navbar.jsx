import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../Images/Logo.png";
import "../Styles/Navbar.scss";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

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
          </ul>
        </nav>
        <div className="nav-btn">
          <Link to="/contact">
            <button>Start a Project</button>
          </Link>
        </div>
        <div className="ham" onClick={togglemenu}>
          <FontAwesomeIcon
            icon={toggle ? faXmark : faBars}
            style={{ width: "20px", height: "30px" }}
            className="ham-icon"
          />
        </div>
      </div>
    </div>
  );
};
