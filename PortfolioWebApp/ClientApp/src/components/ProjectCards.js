import React from 'react';

import ProjectDetailCardItem from './ProjectDetailCardItem';
import ProjectCardItem from './ProjectCardItem';

import './Project.css';

export const ProjectDisplay = {
  PROJECT: "PROJECT",
  PROJECTDETAILS: "PROJECTDETAILS",
  NODEPROJECTDETAILS: "NODEPROJECTDETAILS",
}

const ProjectCards = (props) => {

  if (props.ProjectDisplay === ProjectDisplay.PROJECTDETAILS) {
    return (
      <>
        <ProjectDetailCardItem
          id="blog-simple"
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
          technologies={["ASP.NET MVC", "Razor Pages", "Entity Framework", "C#", "JavaScript", "SQL", "Azure", "Bootstrap", "SendGrid API"]}

        />
        <ProjectDetailCardItem
          id="destxplor"
          src={"./images/destxplor-website.PNG"}
          alt={"DestXplor project image"}
          title={"DestXplor"}
          details={"A traveling website which makes use of the Triposo API, to display to users small descriptions of various countries."}
          featureOne={"Created a web API controller for contact model to be able to post, read and delete messages."}
          featureTwo={"Integrated Triposo API to display information articles of cities all over the world."}
          featureThree={"Used react, react router and other 3rd party libraries on the frontend for clean component based programming."}
          featureFour={"Deployed via azure using azure SQL database to store data and dotenv to store sensitive information."}
          projectLink={"https://destxplor.azurewebsites.net/"}
          githubLink={"https://github.com/prabdhal/DestXplor"}
          technologies={["ASP.NET Web API", "React", "Entity Framework", "C#", "JavaScript", "SQL", "Azure", "Bootstrap", "Triposo API"]}
        />
        <ProjectDetailCardItem
          id="tower-defence-3d-enemy-wave"
          src={"./images/tower-defence-enemy-wave-game.PNG"}
          alt={"tower defence game project image"}
          title={"Tower Defence 3D - Enemy Wave"}
          details={"TD 3D is a strategy based tower defence game playable on both mobile and PC. Players are challenged to carefully strategize and place specific towers according to the enemies they encounter. Players are rewarded according to their performance, with which they can purchase new tower upgrades and special items to help complete more difficult levels as they progress."}
          featureOne={"Programmed clean, modularized and reusable scripts with scriptable objects and object-orientated programming."}
          featureThree={"Created complex stats such as resistances, damage, area of effect, damage over time for towers, enemies and special items."}
          featureTwo={"Utilized binary serialization to save and load user progress."}
          featureFour={"Heavy use of C#, data structure, several single purpose methods and complex logic to ensure efficient gameplay"}
          projectLink={"https://prabdeepdhaliwal.azurewebsites.net/tower-defence-3d-enemy-wave"}
          githubLink={"https://github.com/prabdhal/Tower-Defence-Game-Enemy-Wave"}
          technologies={["Unity 3D", "C#", "Photoshop", "WebGL API"]}
        />
      </>
    );
  }
  else if (props.ProjectDisplay === ProjectDisplay.NODEPROJECTDETAILS) {
    return (
      <>
        <ProjectDetailCardItem
          id="muvee-app"
          src={"./images/muvee-app-website.PNG"}
          alt={"Muvee App project image"}
          title={"Muvee App"}
          details={"A movie website app where users can search and view several categorized movies and their respective trailers."}
          featureOne={"Integrated TheMovieDB web API to fetch and display movies along with movie details."}
          featureTwo={"Created clean and reusable JavaScript functions"}
          featureThree={"Applied rotation animation to each movie upon hover, where users may view."}
          featureFour={"Deployed via herokuapp and secrets keys stored in a dotenv file."}
          projectLink={"https://muvee-app.herokuapp.com/home"}
          githubLink={"https://github.com/prabdhal/movies-app"}
          technologies={["HTML/EJS", "SCSS", "Node.js", "JavaScript", "Herokuapp", "TheMovieDB"]}

        />
        <ProjectDetailCardItem
          id="bLogPoster"
          src={"./images/bLogPoster-website.PNG"}
          alt={"bLogPoster project image"}
          title={"bLogPoster"}
          details={"A blog website where users can register and login to create blogs using markdown. Users may also view, comment on and like other published blogs."}
          featureOne={"Implemented nodemailer to send verification codes to user for account verification and for password reset."}
          featureTwo={"Implemented GET, POST, PUT and DELETE request for the blog and user routes."}
          featureThree={"Implemented bycrpt and passport to hash passwords and authenticate users during the registration and login process."}
          featureFour={"Deployed via herokuapp with user, blog, comment and reply data stored in MongoDB and secrets keys stored in a dotenv file."}
          projectLink={"https://blogposter-website.herokuapp.com/bLogPoster"}
          githubLink={"https://github.com/prabdhal/bLogPoster"}
          technologies={["HTML/EJS", "SCSS", "Node.js", "JavaScript", "MongoDB", "Herokuapp"]}
        />
      </>
    );
  }
  else {
    return (
      <div className="projects-container">
        <ProjectCardItem
          id="blog-simple"
          src={"./images/blog-simple-website-thumbnail.jpeg"}
          alt={"BlogSimple project image"}
          title={"BlogSimple"}
          details={"BlogSimple is a blog posting website where users can sign up and easily post blogs. Users may also view blogs posted by other authors and choose to comment on their blog posts."}
          projectLink={"https://blogsimple.azurewebsites.net/"}
          githubLink={"https://github.com/prabdhal/BlogSimple"}

        />
        <ProjectCardItem
          id="destxplor"
          src={"./images/destxplor-website-thumbnail.jpeg"}
          alt={"DestXplor project image"}
          title={"DestXplor"}
          projectLink={"https://destxplor.azurewebsites.net/"}
          githubLink={"https://github.com/prabdhal/DestXplor"}
        />
        <ProjectCardItem
          id="tower-defence-3d-enemy-wave"
          src={"./images/tower-defence-enemy-wave-game-thumbnail.jpeg"}
          alt={"tower defence game project image"}
          title={"Tower Defence 3D - Enemy Wave"}
          projectLink={"https://prabdeepdhaliwal.azurewebsites.net/tower-defence-3d-enemy-wave"}
          githubLink={"https://github.com/prabdhal/Tower-Defence-Game-Enemy-Wave"}
        />
      </div>
    );
  }
}

export default ProjectCards;