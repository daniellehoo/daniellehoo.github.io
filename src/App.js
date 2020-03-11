import React, { useState } from "react";
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
          <Route path="/nicaragua" component={nicaragua} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/" component={Landing} />
          <Route path="canvas" component={canvas} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
