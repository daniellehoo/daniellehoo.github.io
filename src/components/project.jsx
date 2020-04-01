import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "./nav";
import Social from "./social_buttons";


function Project(data) {
  let { url } = useParams();
  let projectData = Object.values(data)[0];
  const description = projectData.map(thing => {
    return (thing.url === url) ? <div>{thing.description}</div> : null
  });
  return (
    <div className="project">
      <Nav />
      {description}
      <Social />
    </div>
  );
}

export default Project;