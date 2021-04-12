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
        </Container>
      </>
    );
  }
}
