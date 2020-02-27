import React, { useState } from 'react';
import {  Switch, Route, Redirect } from 'react-router-dom';

import canvas from './components/p5_canvas';
import About from './components/about';
import Contact from './components/contact';
import Landing from './components/landing';
import Model from './components/threejs';
import Projects from './components/projects';
import './App.css';

function App () {
    return (
      <div className="App">
              <Switch>
                <Route path='/contact' component={Contact} />
                <Route path='/about' component={About} />
                <Route path='/projects' component={Projects} />
                <Route path='/' component={Landing}/>
                <Route path='canvas'component={canvas}/>
                <Redirect to='/' />
              </Switch>
      </div>
    );
}

export default App;
