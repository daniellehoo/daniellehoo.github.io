import React, { Component } from 'react';
import Model from './components/threejs';
import Landing from './components/landing';
import Nav from './components/nav';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="model">
        <Landing />
        <Model />
        <Nav />
      </div>
      </div>
    );
  }
}

export default App;
