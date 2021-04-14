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
          <p>
            I am a chemistry graduate from York University, but went on to pursue computer programming by starting on game development. 
            Programming quickly became my passion and I was spending countless hours self-learning and working on my personal projects daily. 
            After several months, I decided to expand my programming portfolio and learn web developement, both front and back. Now, several 
            months later, I continue to learn new concepts and improve my programming fundamentals daily and look forward to joining a team 
            fueled by the same passion and ambitious as I have.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;