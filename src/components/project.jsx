import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "./nav";

function Project(data) {
  console.log(data)
  let { url } = useParams();
  return (
    <div>
      <Nav />
      {url}
      {data[0]}
    </div>
  );
}

export default Project;
