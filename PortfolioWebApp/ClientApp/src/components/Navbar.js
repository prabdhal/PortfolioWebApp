import React, { useState } from 'react';

import './Navbar.css';

const Navbar = () => {

  const [showHome, setShowHome] = useState(false);
  const [showProject, setShowProject] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const [openMenuWindow, setOpenMenuWindow] = useState(false);

  const underlineClassHome = (show) => {
    if (show) {
      return ("underline show");
    }
    return ("underline");
  }
  const underlineClassProject = (show) => {
    if (show) {
      return ("underline show");
    }
    return ("underline");
  }
  const underlineClassContact = (show) => {
    if (show) {
      return ("underline show");
    }
    return ("underline");
  }

  const menuButtonClickHandler = () => {
    setOpenMenuWindow(!openMenuWindow);
  }

  const navMenuBar = () => {
    if (openMenuWindow) {
      document.body.style.overflow = "hidden";
      return "nav-menu-bar display"
    }
    document.body.style.overflow = "unset";
    return "nav-menu-bar";
  }

  const colorChangeNavMenu = () => {
    if (openMenuWindow) {
      return "menu-line color-change";
    }
    return "menu-line";
  }

  return (
    <>
      <nav>
        <div><a href="/">Prab</a></div>
        <div className="menu-button" onClick={menuButtonClickHandler}>
          <div className={colorChangeNavMenu()}></div>
          <div className={colorChangeNavMenu()}></div>
          <div className={colorChangeNavMenu()}></div>
        </div>
        <div className={navMenuBar()}>
          <li>
            <a
              href="/"
              onMouseEnter={() => setShowHome(true)}
              onMouseLeave={() => setShowHome(false)}
            >Home</a>
            <div className={underlineClassHome(showHome)}></div>
          </li>
          <li>
            <a
              href="/projects"
              onMouseEnter={() => setShowProject(true)}
              onMouseLeave={() => setShowProject(false)}
            >Projects</a>
            <div className={underlineClassProject(showProject)}></div>
          </li>
          <li>
            <a
              href="/contact"
              onMouseEnter={() => setShowContact(true)}
              onMouseLeave={() => setShowContact(false)}
            >Contact</a>
            <div className={underlineClassContact(showContact)}></div>
          </li>
          <div className="nav-social-icons-container">
            <a href="mailto: prab.dhaliwal95@gmail.com">
              <i
                className="fas fa-envelope"
                style={{ fontSize: "25px", margin: "10px 0" }}
              ></i>
            </a>
            <a
              href="https://www.linkedin.com/in/prabdeep-dhaliwal/"
              target="_blank"
              rel="noopener noreferrer">
              <i
                className="fab fa-linkedin-in"
                style={{ fontSize: "25px", margin: "10px 0" }}
              ></i>
            </a>
            <a
              href="https://github.com/prabdhal"
              target="_blank"
              rel="noopener noreferrer">
              <i
                className="fab fa-github"
                style={{ fontSize: "25px", margin: "10px 0" }}
              ></i>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;