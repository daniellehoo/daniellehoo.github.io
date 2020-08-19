import React, {useState} from 'react';
import Header from './header';
import Model from './threejs';
import Nav from './nav';
import Social from './social_buttons';

function landing() {
  return (
    <>
      <Nav />
    <div className="landing">
      <Header />
      <Model />
      <Social />
    </div>
    </>
  );
}

export default landing;
