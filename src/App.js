import React, { useState } from 'react'
import Project from './components/project'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useParams
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
    title: 'Chinatown USA',
    url: 'chinatown_usa',
    img: 'https://live.staticflickr.com/65535/49593430952_712dc0cce1_b.jpg',
    description: 'Chinatown, USA was inspired by The Chinese in America'
  },
  {
    id: 1,
    title: "Our Children's Trust",
    url: 'our_childrens_trust',
    img: 'https://live.staticflickr.com/65535/49592718198_6760f8c00d_b.jpg',

    description: "our childreen's trustdfssdf "
  },
  {
    id: 2,
    title: 'Nicaragua',
    url: 'nicaragua',
    img: 'https://live.staticflickr.com/65535/49593769191_4de582e8d0_b.jpg',
    description: 'GIEI NICA '
  },

  {
    id: 3,
    title: 'Amnesty International',
    url: 'amnesty_international',
    img: 'https://live.staticflickr.com/65535/49593280613_513f9fe243_b.jpg',
    description: 'teear gassss '
  }
]

const ProjectContext = React.createContext(projects)

function App () {
  return (
    <div className='App'>
      <Router history={history} basename={`${process.env.PUBLIC_URL}/`}>
        <Switch>
          <Route exact path='/' component={Landing} />
        <Route path='/projects/:url'>
          <Project data={projects} />
        </Route>
          <Route
            path='/projects'
            render={props => <Projects {...props} projectsData={projects} />}
          />
          <Route path='/about' component={About} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
