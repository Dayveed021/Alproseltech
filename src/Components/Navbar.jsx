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
        <div className="ham-logo" onClick={togglemenu}>
          <Link to="/">
            <img src={Logo} alt="Alproseltech" />
          </Link>
        </div>
        <div className={toggle ? "nav" : "null"}>
          <ul>
            <li>
              <NavLink to="/" className="nav-items">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="nav-items">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="nav-items">
                Work
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="nav-btn">
        <button>Start a Project</button>
      </div>
      <div className="ham" onClick={togglemenu}>
        <FontAwesomeIcon icon={toggle ? faXmark : faBars} size="2x" />
      </div>
    </div>
  );
};
