import React, {useState} from 'react';
import Nav from './nav';
import Social from './social_buttons';
import fish from '../assets/pigeon.png';

function projects(props) {
  const projectsData = props.projectsData;
  const grid = projectsData.map((project) => (
    <div className={`projectList`} key={project.id}>
      <a href={`#/${project.url}`}>{project.title}</a>
    </div>
  ));

  return (
    <>
    <div className="projects">
      <h1>Projects</h1>
      <div className="projectsContainer">{grid}</div>
      <img id="fish" src={fish} />
      <Social />
    </div>
      <Nav />
    </>
  );
}

export default projects;
