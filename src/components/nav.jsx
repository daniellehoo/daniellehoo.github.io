import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Nav () {

  return (
    <div className="nav">
      <nav>
      <ul>
        <li><NavLink to="/projects">projects</NavLink></li>
        <li><NavLink to="/blog">blog</NavLink></li>
        <li><NavLink to="/about">about</NavLink></li>
        <li><NavLink to="/contact">contact</NavLink></li>
      </ul>
    </nav>
    </div>
  )
}


export default Nav;
