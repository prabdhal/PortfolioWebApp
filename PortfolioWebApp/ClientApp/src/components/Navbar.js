import React, { useState } from 'react';

import './Navbar.css';

const Navbar = () => {

  const [showHome, setShowHome] = useState(false);
  const [showProject, setShowProject] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const hoverEffect = () => {

  }

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

  return (
    <>
      <nav>
        <div><a href="/">Prab</a></div>
        <ul>
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
        </ul>
      </nav>
    </>
  );
}

export default Navbar;