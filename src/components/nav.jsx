import React, { useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import Home from "./homeButton";

function Nav() {
      const history = useHistory();

  return (
    <div className="nav">
      <nav>
        <ul>
          <li>
            <Home />
          </li>
          <li>
            <NavLink to="/projects">projects</NavLink>
          </li>
          <li>
            <a href="https://daniellehoo.github.io/blog/posts">blog</a>
          </li>
          <li>
            <NavLink to="/about">about</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

// function onClick(history, ) {
// history.push('/')
// }


export default Nav;
