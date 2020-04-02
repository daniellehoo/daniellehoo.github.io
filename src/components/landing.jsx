import React, { useState } from "react";
import Header from "../partials/header";
import Model from "./threejs";
import Nav from "./nav";


import Social from "./social_buttons";

function landing() {
  return (
    <div className="landing">
      <Nav />
      <Header />
      <Model />
      <Social />
    </div>
  );
}

export default landing;
