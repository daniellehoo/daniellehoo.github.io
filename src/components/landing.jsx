import React, { useState } from 'react';
import Header from '../partials/header';
import Model from './threejs';
import Nav from './nav';


function landing () {
  return (
  <div className="landing">
    <Nav />
    <Header />
    <Model />
  </div>
  )
}

export default landing
