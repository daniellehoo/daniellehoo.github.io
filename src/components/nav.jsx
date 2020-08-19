import React, { useState } from "react";
import { Link, NavLink} from "react-router-dom";
import Home from "./homeButton";

function Nav() {
  const [active, setActive] = useState(false);

  return (
    <div className="nav">
      <nav>
        <ul>
          <li className={active} onClick={() => setActive()}>
            <Home />
          </li>
          <li className={active} onClick={() => setActive()}>
            <NavLink to="/projects">projects</NavLink>
          </li>
          <li className={active} onClick={() => setActive()}>
            <a href="https://daniellehoo.github.io/blog/posts">blog</a>
          </li>
          <li className={active} onClick={() => setActive()}>
            <NavLink to="/about">about</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
