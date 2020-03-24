import React, { useState } from "react";
import Project from "./components/project";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useParams
} from "react-router-dom";

import canvas from "./components/p5_canvas";
import About from "./components/about";
import Landing from "./components/landing";
import Model from "./components/threejs";
import Projects from "./components/projects";
import nicaragua from "./components/nicaragua";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          {/* <Route path="canvas" component={canvas} /> */}
          <Route path="/:url">
            <Project />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
