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
        featureOne={"Implemented repository design pattern to remove code redundancy and increase code maintainability and scalability."}
        featureTwo={"Integrated an email delivery service called SendGrid, to be able to send users email and password confirmation emails."}
        featureThree={"Implemented CRUD operations using .NET 5 MVC with entity framework and SQL Server as the database to store users, posts and comments."}
        featureFour={"Deployed via azure using azure SQL database to store data and secrets key vault to store sensitive information."}
        projectLink={"https://blogsimple.azurewebsites.net/"}
        githubLink={"https://github.com/prabdhal/BlogSimple"}
        technologies={["ASP.NET MVC", "Razor Pages", "Entity Framework", "C#", "JavaScript", "SQL", "Azure", "SendGrid API"]}

      />
      <ProjectCardItem
        src={"./images/destxplor-website.PNG"}
        alt={"DestXplor project image"}
        title={"DestXplor"}
        details={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}
        featureOne={"Implemented repository design pattern to remove code redundancy and increase code maintainability and scalability."}
        featureTwo={"Integrated Triposo API to display information articles of cities all over the world."}
        featureThree={"Used react, react router and other 3rd party libraries on the frontend for clean component based programming."}
        featureFour={"Deployed via azure using azure SQL database to store data and dotenv to store sensitive information."}
        projectLink={"https://destxplor.azurewebsites.net/"}
        githubLink={"https://github.com/prabdhal/DestXplor"}
        technologies={["ASP.NET Web API", "React", "Entity Framework", "C#", "JavaScript", "SQL", "Azure", "Triposo API"]}
      />
      <ProjectCardItem
        src={"./images/tower-defence-enemy-wave-game.PNG"}
        alt={"tower defence game project image"}
        title={"Tower Defence 3D - Enemy Wave"}
        details={"TD 3D is a strategy based tower defence game playable on both mobile and PC. Players are challenged to carefully strategize and place specific towers according to the enemies they encounter. Players are rewarded according to their performance, with which they can purchase new tower upgrades and special items to help complete more difficult levels as they progress."}
        featureOne={"Programmed clean, modularized and reusable scripts with scriptable objects and object-orientated programming."}
        featureThree={"Created complex stats such as resistances, damage, area of effect, damage over time for towers, enemies and special items."}
        featureTwo={"Utilized binary serialization to save and load user progress."}
        featureFour={"Heavy use of C#, data structure, several single purpose methods and complex logic to ensure efficient gameplay"}
        projectLink={"https://prabdeepdhaliwal.azurewebsites.net/tower-defence-3d-enemy-wave"}
        githubLink={"https://github.com/prabdhal/tower-defence-3d-enemy-wave"}
        technologies={["Unity 3D", "C#", "Photoshop", "WebGL API"]}
      />
    </>
  );
}

export default ProjectCards;