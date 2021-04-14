import React from 'react';

import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <nav>
        <div><a href="/">Prab</a></div>
        <ul>
          <li>
            <a href="/about">About</a>
            <div className="underline"></div>
          </li>
          <li>
            <a href="/projects">Projects</a>
            <div className="underline"></div>
          </li>
          <li>
            <a href="/contact">Contact</a>
            <div className="underline"></div>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;