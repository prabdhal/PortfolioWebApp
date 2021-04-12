import React from 'react';

import ProjectCardItem from './ProjectCardItem';

const ProjectCards = () => {
  return (
    <>
      <ProjectCardItem
        src={"./images/blog-simple-website.PNG"}
        alt={"BlogSimple project image"}
        title={"BlogSimple"}
        details={"BlogSimple is a blog posting website where users can sign up and easily post blogs. Users may also view blogs posted by other authors and choose to comment on their blog posts."}
        pointOne={"Implemented repository design pattern to remove code redundancy and increase code maintainability and scalability."}
        pointTwo={"Integrated an email delivery service called SendGrid, to be able to send users email and password confirmation emails."}
        pointThree={"Implemented CRUD operations using .NET 5 MVC with entity framework and SQL Server as the database to store users, posts and comments."}
        pointFour={"Deployed via azure using azure SQL database to store data and secrets key vault to store sensitive information."}
        projectLink={"https://blogsimple.azurewebsites.net/"}
        githubLink={"https://github.com/prabdhal/BlogSimple"}
      />
      <ProjectCardItem
        src={"./images/destxplor-website.PNG"}
        alt={"DestXplor project image"}
        title={"DestXplor"}
        details={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}
        pointOne={"Implemented repository design pattern to remove code redundancy and increase code maintainability and scalability."}
        pointTwo={"Integrated an email delivery service called SendGrid, to be able to send users email and password confirmation emails."}
        pointThree={"Implemented CRUD operations using .NET 5 MVC with entity framework and SQL Server as the database to store users, posts and comments."}
        pointFour={"Deployed via azure using azure SQL database to store data and secrets key vault to store sensitive information."}
        projectLink={"https://destxplor.azurewebsites.net/"}
        githubLink={"https://github.com/prabdhal/DestXplor"}
      />
      <ProjectCardItem
        src={"./images/tower-defence-enemy-wave-game.PNG"}
        alt={"tower defence game project image"}
        title={"Tower Defence - The Enemy Wave"}
        details={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        pointOne={"Implemented repository design pattern to remove code redundancy and increase code maintainability and scalability."}
        pointTwo={"Integrated an email delivery service called SendGrid, to be able to send users email and password confirmation emails."}
        pointThree={"Implemented CRUD operations using .NET 5 MVC with entity framework and SQL Server as the database to store users, posts and comments."}
        pointFour={"Deployed via azure using azure SQL database to store data and secrets key vault to store sensitive information."}
        projectLink={"http://prabdhaliwal.herokuapp.com/tower-defence-3d-enemy-wave"}
        githubLink={"https://github.com/prabdhal/Tower-Defence-Game-Enemy-Wave"}
      />
    </>
  );
}

export default ProjectCards;