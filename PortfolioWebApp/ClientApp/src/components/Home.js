import React, { Component } from 'react';
import { Container } from 'reactstrap';

import HeroSection from './HeroSection';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <>
        <HeroSection
          src={"./images/hero-section.jpg"}
          alt={"hero section image"}
        />
        <Container>
          <h2>Projects</h2>
        </Container>
        <Container>
          <h2>Contact</h2>
        </Container>
      </>
    );
  }
}
