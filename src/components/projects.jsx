import React, { Link, useState } from "react";
import Nav from "./nav";
import Social from "./social_buttons";
import Project from "./project";
import { Switch, Route, Redirect } from "react-router-dom";

function projects(props) {
  const [id, setId] = useState("/");
  const [data, setData] = useState("[]");
  const projectsData = props.projectsData;

  const grid = projectsData.map(project => (
    <div className={`project id_${project.id}`}>
      <a href={`/${project.url}`}>
        {/* <a href={`/${project.url}`} onClick={() => handleClick(project)}> */}

        {project.title}
      </a>
      <img src={project.img} />
    </div>
  ));

  console.log(data);

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
