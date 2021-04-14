import React from 'react';
import { Container } from 'reactstrap';

import ProjectCards from './ProjectCards';

const Project = () => {
  return (
    <Container>
      <h2 className="section-header">ASP.NET Projects</h2>
      <ProjectCards
        ProjectDisplay={"PROJECTDETAILS"}
      />
      <h2 className="section-header">Node.js Projects</h2>
      <ProjectCards
        ProjectDisplay={"NODEPROJECTDETAILS"}
      />
    </Container>
  );
}

export default Project;