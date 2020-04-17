import React, { useState } from "react";
import Nav from "./nav";
import Social from "./social_buttons";

function projects(props) {
  const [id, setId] = useState("/");
  const projectsData = props.projectsData;

  const grid = projectsData.map(project => (
    <div className={`project id_${project.id}`} key={project.id}>
      {/* <a href={`/${project.url}`}> */}
        <a href={`/projects/${project.url}`} onClick={() => handleClick(project)}>

        {project.title}
      </a>
      <img src={project.img} />
    </div>
  ));

  function handleClick(project){
    console.log('click')
  }

  return (
    <div className="projects">
      <Nav />
      <h1>Projects</h1>
      {grid}
      <Social />
    </div>
  );
}

export default projects;
