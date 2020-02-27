import React, { useState } from 'react';
import Header from '../partials/header';
import Model from './threejs';
import Nav from './nav';


function landing () {
  return (
  <div className="landing">
    <Header />
    <Model />
    <Nav />
  </div>
  )
}

export default landing
