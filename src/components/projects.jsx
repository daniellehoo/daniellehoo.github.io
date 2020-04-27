import React, { useState } from "react";
import Nav from "./nav";
import Social from "./social_buttons";
import fish from "../assets/blue_fish.png";

function projects(props) {
  const projectsData = props.projectsData;
  const grid = projectsData.map(project => (
    <div className={`projectList`} key={project.id}>
        <a href={`#/${project.url}`}>
        {project.title}
      </a>
    </div>
  ));

  return (
    <div className="projects">
      <Nav />
      <h1>Projects</h1>
      <img id="fish" src={fish}/>
      <div className="projectsContainer">
      {grid}
      </div>
      <Social />
    </div>
  );
}

export default projects;