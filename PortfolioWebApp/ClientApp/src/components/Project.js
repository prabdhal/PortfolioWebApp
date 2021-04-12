import React from 'react';
import { Container } from 'reactstrap';

import ProjectCards from './ProjectCards';

const Project = () => {
  return (
    <Container>
      <h2 style={{ paddingTop: "100px" }}>Check out my work</h2>
      <ProjectCards />
    </Container>
  );
}

export default Project;