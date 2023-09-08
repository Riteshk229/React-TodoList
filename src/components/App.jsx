import { useState } from 'react';
import '../assets/styles/App.css';
import { Home } from '../pages';
import NavComp from './Navbar';
// import Loading from './Loading';
import { Loading } from './index';

function App() {

  return (
    <>
      <NavComp />
      <Home />
    </>
  )
}

export default App;
