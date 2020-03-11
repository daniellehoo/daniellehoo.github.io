import React, { useState } from 'react';
import Header from '../partials/header';
import Model from './threejs';
import Nav from './nav';


function landing () {
  return (
  <div className="landing">
    <Header />
    <Nav />
    <Model />
  </div>
  )
}

export default landing
