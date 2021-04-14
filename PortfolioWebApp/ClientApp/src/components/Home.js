import React, { Component } from 'react';
import { Container } from 'reactstrap';

import HeroSection from './HeroSection';
import About from './About';
import ProjectCards from './ProjectCards';
import Contact from './Contact';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <>
        <HeroSection
          src={"./images/hero-section.jpg"}
          alt={"hero section image"}
          subheadingOne={"Hello, my name is"}
          heading={"Prabdeep Dhaliwal"}
          subheadingTwo={"Full Stack Web Developer"}
          showButton={true}
          buttonText={"View My Work"}
        />
        <div className="section-container" id="aboutMe">
          <About
            src={"./images/about-me-image.png"}
            alt={"Image of Prabdeep Dhaliwal"}
          />
        </div>
        <Container className="section-container" id="projects">
          <h2 className="section-header">My Work</h2>
          <ProjectCards
            detailView={false}
          />
        </Container>
      </>
    );
  }
}
