import React from 'react';

import './Project.css';

const ProjectCardItem = (props) => {
  return (
    <>
      <div className="id-point" id={props.id}></div>
      <div className="project-card-container">
        <div className="project-detail-image-container">
          <img className="project-image" src={props.src} alt={props.alt} />
          <div className="project-button-container">
            <a
              className="btn btn-primary mr-1"
              href={props.projectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
            <a
              className="btn btn-secondary ml-1"
              href={props.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub
            </a>
          </div>
        </div>
        <div className="project-details-container">
          <h3>{props.title}</h3>
          <p>{props.details}</p>
          <details>
            <summary className="mb-3">Features</summary>
            <ul>
              <li>{props.featureOne}</li>
              <li>{props.featureTwo}</li>
              <li>{props.featureThree}</li>
              <li>{props.featureFour}</li>
            </ul>
          </details>
          <details>
            <summary className="mb-3">Technologies</summary>
            <ul>
              {props.technologies.map(tech => {
                return (
                  <li key={tech.toString()}>{tech}</li>
                )
              })}
            </ul>
          </details>
        </div>
      </div>
      </>
  );
}

export default ProjectCardItem;