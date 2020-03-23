import React, { useState } from 'react';
import Nav from './nav';

function about () {
  return (
    <div className="contact">
      <Nav/>
      <h1>About</h1>
      <p>brooklyn, NY resident</p>
      <p>software engineer</p>
      <p>former Museum of Modern Art (MoMA) employee</p>
      <p>interest in contemporary art, design, & web development</p>
      <p>occasional runner, wanderer & Canon G16 user</p>

      <div className="spacer"></div>
      <p>Contact:</p><a href="mailto:daniellem.hoo@gmail.com?subject=Hello!">Email</a>  
    </div>
  )
}

export default about