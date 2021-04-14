import React from 'react';
import { Container } from 'reactstrap';

import HeroSection from './HeroSection';
import ProjectCards from './ProjectCards';

const Project = () => {
  return (
    <>
      <HeroSection
        heading={"Projects"}
        subheadingTwo={"These are some of my projects using Node.js and more recently, ASP.NET"}
        showButton={false}
      />
      <Container className="section-container">
        <h2 className="section-header">ASP.NET Projects</h2>
        <ProjectCards
          ProjectDisplay={"PROJECTDETAILS"}
        />
      </Container>
      <Container className="section-container">
        <h2 className="section-header">Node.js Projects</h2>
        <ProjectCards
          ProjectDisplay={"NODEPROJECTDETAILS"}
        />
      </Container>
    </>
  );
}

export default Project;