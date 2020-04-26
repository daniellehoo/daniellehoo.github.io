import React, { useState, useEffect } from "react";
import Project from "./components/project";
import {
  HashRouter,
  Switch,
  Route,
  Redirect,
  Link,
  useParams,
  withRouter
} from "react-router-dom";
import { createBrowserHistory } from "history";
import About from "./components/about";
import Landing from "./components/landing";
import Projects from "./components/projects";
import Model from "./components/threejs";
import "./App.css";

const history = createBrowserHistory();

const projects = [
  {
    id: 0,
    title: "Chinatown USA",
    url: "chinatown_usa",
    img: "https://live.staticflickr.com/65535/49593430952_712dc0cce1_b.jpg",
    description:
      "Chinatown, USA was inspired by The Chinese in America by Iris Chang and the work of American conceptual artist, John Baldessari. It is the digital photographic capturing of Chinese own businesses in North America with minimal geometric interventions.",
  },
  {
    id: 1,
    title: "Our Children's Trust",
    url: "our_childrens_trust",
    img: "https://live.staticflickr.com/65535/49592718198_6760f8c00d_b.jpg",

    description: "our childreen's trustdfssdf ",
  },
  {
    id: 2,
    title: "Nicaragua",
    url: "nicaragua",
    img: "https://live.staticflickr.com/65535/49593769191_4de582e8d0_b.jpg",
    description: "GIEI NICA ",
  },

  {
    id: 3,
    title: "Amnesty International",
    url: "amnesty_international",
    img: "https://live.staticflickr.com/65535/49593280613_513f9fe243_b.jpg",
    description: "teear gassss ",
  },
];

const ProjectContext = React.createContext(projects);

function App() {
  return (
    <div className="App">
      <HashRouter history={history} basename={`${process.env.PUBLIC_URL}/`}>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route
            path="/projects"
            render={(props) => <Projects {...props} projectsData={projects} />}
          />
          <Route path="/about" component={About} />
          <Route
            path='/:url'
            render={(props) => <Project {...props} projectsData={projects} />}
          />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default withRouter(App);
// <Project data={projects} />
