import React, { useState } from "react";
import Header from "./header";
import Model from "./threejs";
import Nav from "./nav";


import Social from "./social_buttons";

function landing() {
  return (
    <div className="landing">
      <Header />
      <Nav />
      <Model />
      <Social />
    </div>
  );
}

export default landing;
