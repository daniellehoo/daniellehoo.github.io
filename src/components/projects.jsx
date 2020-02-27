import React, { useState } from 'react';
import Nav from './nav';

function projects () {
  const projects = [
  {
      id: 0,
      title: "Chinatown USA",
      img: "https://live.staticflickr.com/65535/49593430952_75c073503a_k.jpg"
  },
  {
    id: 1,
    title: "Our Children's Trust",
    img: "https://live.staticflickr.com/65535/49592718198_5e1dc3651f_b.jpg"
  },
  {
    id: 2,
    title: "Nicaragua",
    img: "https://live.staticflickr.com/65535/49593769191_e101ac099f_b.jpg"
  },

  {
    id: 3,
    title: "Amnesty",
    img: "url"
  },
]

const grid = projects.map(project => (
  <div className={`project id_${project.id}`}>

    {project.title}
    <img src={project.img}/>
  </div>
) )

  return (
  <div className="projects">
    <Nav />
    <h1>Here are my projects</h1>
    {grid}
  </div>
  )
}

export default projects
