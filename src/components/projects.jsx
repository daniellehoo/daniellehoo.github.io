import React, { Link, useState } from "react";
import Nav from "./nav";
import Social from "./social_buttons";
import Project from "./project";
import { Switch, Route, Redirect } from "react-router-dom";

function projects() {
  const [id, setId] = useState('/');
  const projects = [
    {
      id: 0,
      title: "Chinatown USA",
      url: "chinatown_usa",
      img: "https://live.staticflickr.com/65535/49593430952_712dc0cce1_b.jpg"
    },
    {
      id: 1,
      title: "Our Children's Trust",
      url: "our_childrens_trust",
      img: "https://live.staticflickr.com/65535/49592718198_6760f8c00d_b.jpg"
    },
    {
      id: 2,
      title: "Nicaragua",
      url: "nicaragua",
      img: "https://live.staticflickr.com/65535/49593769191_4de582e8d0_b.jpg"
    },

    {
      id: 3,
      title: "Amnesty International",
      url: "amnesty_international",
      img: "https://live.staticflickr.com/65535/49593280613_513f9fe243_b.jpg"
    }
  ];

  const grid = projects.map(project => (
    <div className={`project id_${project.id}`}>
      <a href={`/${project.url}`} onClick={() => setId(project.url)}>{project.title}</a>
      <img src={project.img} />
    </div>
  ));
  

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