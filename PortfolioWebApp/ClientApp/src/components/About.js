import React from 'react';

import './About.css';

const About = (props) => {
  return (
    <>
      <div className="about-container">
        <div className="about-img-col">
          <img src={props.src} alt={props.alt} />
        </div>
        <div className="about-detail-col">
          <h2 className="section-header">About Me</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
          aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.</p>
        </div>
      </div>
    </>
  );
}

export default About;