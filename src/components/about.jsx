import React from "react";
import Nav from "./nav";
import soy from "../assets/soy_sauce.png";

import Social from "./social_buttons";

function about() {
  return (
    <div className="about">
      <div>
        <Nav />
      </div>
      <h1>About</h1>
      <div>
        <img src={soy} />
      </div>
      <p>brooklyn, NY resident</p>
      <p>software engineer working in javascript and react</p>
      <p>former Museum of Modern Art (MoMA) employee</p>
      <p>interest in contemporary art, design, & web development</p>
      <p>occasional distance runner, wanderer & Canon G16 user</p>

      <div className="spacer"></div>
      <br></br>
      <br></br>
      <br></br>

      <p>
        contact:
        <a href="mailto:daniellem.hoo@gmail.com?subject=Hello!">email</a>
      </p>
      <Social />
    </div>
  );
}

export default about;
