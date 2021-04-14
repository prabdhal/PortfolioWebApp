import React from 'react';

import './Home.css'

const HeroSection = (props) => {
  return (
    <header>
      <div className="hero-container">
        <div className="col-lg-8 col-md-10 mx-auto">
          <div className="post-heading">
            <h1 className="subheading">Hello, my name is</h1>
            <h1 className="text-break">Prabdeep Dhaliwal</h1>
            <div className="subheading">Full Stack Web Developer</div>
            <a className="hero-button" href="/projects">View My Work</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeroSection;