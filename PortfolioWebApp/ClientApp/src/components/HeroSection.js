import React from 'react';

import './Home.css'

const HeroSection = (props) => {
  return (
    <header>
      <div className="hero-container">
        <div className="col-lg-8 col-md-10 mx-auto">
          <div className="post-heading">
            <h1 className="subheading">{props.subheadingOne}</h1>
            <h1 className="text-break">{props.heading}</h1>
            <div className="subheading">{props.subheadingTwo}</div>
            {props.showButton ?
              <a className="hero-button" href="/projects">{props.buttonText}</a>
              :
              ""}
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeroSection;