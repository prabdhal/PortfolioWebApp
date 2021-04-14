import React from 'react';

import './Project.css';

const ProjectCardItem = (props) => {
  return (
    <div className="project-image-container">
      <img className="project-image" src={props.src} alt={props.alt} />
      <div className="project-button-container">
        <a
          className="project-button mr-1"
          href={props.projectLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
        <a
          className="project-button mr-1"
          href={props.githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          View GitHub
        </a>
        <a
          className="project-button-alt mr-1"
          href={`/projects#${props.id}`}
        >
          More Details
          </a>
      </div>
    </div>
  );
}

export default ProjectCardItem;