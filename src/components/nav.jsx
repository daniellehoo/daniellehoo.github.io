import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Nav () {

  return (
    <div className="nav">
      <nav>
      <ul>
        <li><NavLink to="/projects">projects</NavLink></li>
        <li><a href="https://daniellehoo.github.io/blog/">blog</a></li>
        <li><NavLink to="/about">about</NavLink></li>
      </ul>
    </nav>
    </div>
  )
}


export default Nav;