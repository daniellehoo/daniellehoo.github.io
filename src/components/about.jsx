import React from 'react';
import Nav from './nav';
import soy from '../assets/soy_sauce.png';
import Social from './social_buttons';

function about() {
  return (
    <>
      <Nav />
      <div className="about">
        <div></div>
        <h1>About</h1>
        <p>brooklyn, NY resident</p>
        <p>software engineer working in javascript and react</p>
        <p>
          formerly at
          <a href="https://www.situ.nyc" target="_blank">
            SITU/
          </a>
          and the<a href="/">Museum of Modern Art (MoMA) </a>
        </p>
        <p>interest in contemporary art, design, & web development</p>
        <p>occasional distance runner, wanderer & Canon G16 user</p>

        <div className="spacer"></div>

        <p>
          contact:
          <a id="contact" href="mailto:daniellem.hoo@gmail.com?subject=Hello!">
            email
          </a>
        </p>
        <div>
          <img id="soy" src={soy} />
        </div>
        <Social />
      </div>
    </>
  );
}

export default about;
