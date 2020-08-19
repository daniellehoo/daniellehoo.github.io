import React from "react";
import Nav from "./nav";
import soy from "../assets/soy_sauce.png";

import Social from "./social_buttons";

function about() {
  return (
    <>
        <Nav />
    <div className="about">
      <div>
      </div>
      <h1>About</h1>
      <div>
        <img id="soy" src={soy} />
      </div>
      <p>brooklyn, NY resident</p>
      <p>software engineer working in javascript and react</p>
      <p>former Museum of Modern Art (MoMA) employee</p>
      <p>interest in contemporary art, design, & web development</p>
      <p>occasional distance runner, wanderer & Canon G16 user</p>

      <div className="spacer"></div>      

      <p>
        contact:
        <a id="contact" href="mailto:daniellem.hoo@gmail.com?subject=Hello!">email</a>
      </p>
      <Social />
    </div>
    </>
  );
}

export default about;
