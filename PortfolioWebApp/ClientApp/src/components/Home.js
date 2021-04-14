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
        />
        <div className="my-5" id="aboutMe">
          <About
            src={"./images/about-me-image.png"}
            alt={"Image of Prabdeep Dhaliwal"}
          />
        </div>
        <Container className="my-5" id="projects">
          <h2 className="section-header">My Work</h2>
          <ProjectCards
            detailView={false}
          />
        </Container>
      </>
    );
  }
}
