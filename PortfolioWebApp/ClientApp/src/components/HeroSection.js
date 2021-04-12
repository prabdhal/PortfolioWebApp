import React from 'react';

import './Home.css'

const HeroSection = (props) => {
  return (
    <header className="master-head" style={{ backgroundImage: `url(${props.src})` }}>
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="post-heading">
              <h1 className="text-break">Prabdeep Dhaliwal</h1>
              <span className="subheading">Full Stack Web Developer | Unity Game Developer</span>
              <a className="btn btn-primary" href="/contact">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeroSection;