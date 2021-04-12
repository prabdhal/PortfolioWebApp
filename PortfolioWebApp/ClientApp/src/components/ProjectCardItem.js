import React from 'react';

import './Project.css';

const ProjectCardItem = (props) => {
  return (
    <div className="project-card-container">
        <div className="project-image-container">
          <img src={props.src} alt={props.alt} />
        </div>
        <div className="project-details-container">
          <h3>{props.title}</h3>
          <p>{props.details}</p>
          <div className="project-button-container">
            <a
              className="btn btn-primary mr-1"
            href={props.projectLink}
            target="_blank"
            >
              View Project
            </a>
            <a
              className="btn btn-secondary ml-1"
            href={props.githubLink}
            target="_blank"
            >
              View GitHub
            </a>
          </div>
      </div>
    </div>
  );
}

export default ProjectCardItem;