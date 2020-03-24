import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "./nav";

function Project() {
  let { url } = useParams();
  return (
    <div>
      <Nav />
      {url}
    </div>
  );
}

export default Project;
