import React, { useState } from "react";
import Nav from "./nav";
import Social from "./social_buttons";
import fish from "../assets/blue_fish.png";


function projects(props) {
  const [id, setId] = useState("/");
  const projectsData = props.projectsData;
  // const history = useHistory();

  const grid = projectsData.map(project => (
    <div className={`project id_${project.id}`} key={project.id}>
        <a href={`/projects/${project.url}`} onClick={() => handleClick(project.url)}>

        {project.title}
      </a>
      <img src={project.img} />
    </div>
  ));

  function handleClick(project){
    this.props.history.push(`/projects/${project.url}`)
  }

  return (
    <div className="projects">
      <Nav />
      <h1>Projects</h1>
      <img id="fish" src={fish}/>
      {grid}
      <Social />
    </div>
  );
}

export default projects;
