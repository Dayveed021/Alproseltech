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
        <nav className={toggle ? "nav" : null}>
          <ul>
            <li>
              <NavLink to="/" className="nav-items">
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="nav-items">
                SERVICES
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="nav-items">
                WORKS
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="nav-items">
                BLOG
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="nav-btn">
          <button>Start a Project</button>
        </div>
      </div>
      <div className="ham" onClick={togglemenu}>
        <FontAwesomeIcon
          icon={toggle ? faXmark : faBars}
          style={{ width: "20px", height: "30px" }}
        />
      </div>
    </div>
  );
};
