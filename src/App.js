import React, { useState, useEffect } from 'react'
import Project from './components/project'
import {
  HashRouter,
  Switch,
  Route,
  Redirect,
  Link,
  useParams,
  withRouter
} from 'react-router-dom'
import { createBrowserHistory } from 'history'
import About from './components/about'
import Landing from './components/landing'
import Projects from './components/projects'
import Model from './components/threejs'
import './App.css'

const history = createBrowserHistory()

const projects = [
  {
    id: 0,
    title: 'Amnesty International',
    url: 'amnesty_international',
    img: 'https://live.staticflickr.com/65535/49836972743_b4d90fcfc2_h.jpg',
    description:
      'A new visual investigation by Amnesty International and SITU Research demonstrates that Iraqi security forces intended to kill or severely maim dozens of protesters when they fired military-style grenades directly into crowds on the streets of Baghdad from October 2019 onwards. I contributed research and narrative construction to this project.'
  },
  {
    id: 1,
    title: 'Chinatown USA',
    url: 'chinatown_usa',
    img: 'https://live.staticflickr.com/65535/49593430952_712dc0cce1_b.jpg',
    description:
      'Chinatown, USA was inspired by The Chinese in America by Iris Chang and the work of American conceptual artist, John Baldessari. It is the digital photographic capturing of Chinese owned businesses in North America with minimal geometric interventions.'
  },
  {
    id: 2,
    title: 'Nicaragua',
    url: 'nicaragua',
    img: 'https://live.staticflickr.com/65535/49837808617_da91d893f7_h.jpg',
    description:
      'I worked on a team of developers and designers from SITU Research and in partnership with EAAF and GIEI, to produce an event reconstruction and digital platform to investigate violent and, in some cases, lethal clashes between protesters and government forces in Nicaragua during the spring of 2018.'
  },
  {
    id: 3,
    title: "Our Children's Trust",
    url: 'our_childrens_trust',
    img: 'https://live.staticflickr.com/65535/49830965857_2bdd7ff303_h.jpg',
    description:
      "Our Children's Trust is the first civil litigation for climate change accountability in U.S. History. Working as part of the SITU Research team, I built an interactive platform using Leaflet.js for evidentiary presentation in court."
  },
    {
    id: 4,
    title: "Tear Gas",
    url: 'tear_gas',
    img: 'https://live.staticflickr.com/65535/49998485043_c075f87203_b.jpg',
    img_link: 'https://teargas.amnesty.org/#how-it-works',
    description:
      "Working with SITU Research in partnership with Amnesty International, I conducted extensive research for the production of this video shedding light on tear gas as a 'less lethal' minition used to supress peaceful demonstrations, worldwide. "
  },
  {
    id: 5,
    title: 'VaporJong',
    url: 'vapor_jong',
    img: 'https://live.staticflickr.com/65535/49837809302_ee6e014fe1_h.jpg',
    description:
      "A VaporWave, mahjong and Solitaire '95 inspired playground built in p5 with Jesse Chen. View the codebase here."
  }
]

const ProjectContext = React.createContext(projects)

function App () {
  return (
    <div className='App'>
      <HashRouter history={history} basename={`${process.env.PUBLIC_URL}/`}>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route
            path='/projects'
            render={props => <Projects {...props} projectsData={projects} />}
          />
          <Route path='/about' component={About} />
          <Route
            path='/:url'
            render={props => <Project {...props} projectsData={projects} />}
          />
        </Switch>
      </HashRouter>
    </div>
  )
}

export default withRouter(App)
// <Project data={projects} />
