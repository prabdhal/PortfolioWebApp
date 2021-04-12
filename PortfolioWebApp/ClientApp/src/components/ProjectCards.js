import React from 'react';

import ProjectCardItem from './ProjectCardItem';

const ProjectCards = () => {
  return (
    <>
      <ProjectCardItem
        src={"./images/blog-simple-website.PNG"}
        alt={"BlogSimple project image"}
        title={"BlogSimple"}
        details={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        projectLink={"https://blogsimple.azurewebsites.net/"}
        githubLink={"https://github.com/prabdhal/BlogSimple"}
      />
      <ProjectCardItem
        src={"./images/destxplor-website.PNG"}
        alt={"DestXplor project image"}
        title={"DestXplor"}
        details={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        projectLink={"https://destxplor.azurewebsites.net/"}
        githubLink={"https://github.com/prabdhal/DestXplor"}
      />
      <ProjectCardItem
        src={"./images/destxplor-website.PNG"}
        alt={"tower defence game project image"}
        title={"Tower Defence - The Enemy Wave"}
        details={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        projectLink={"http://prabdhaliwal.herokuapp.com/tower-defence-3d-enemy-wave"}
        githubLink={"https://github.com/prabdhal/Tower-Defence-Game-Enemy-Wave"}
      />
    </>
  );
}

export default ProjectCards;