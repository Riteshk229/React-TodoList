import { useState } from 'react'
import '../assets/styles/App.css'
import { Home } from '../pages'
import NavComp from './Navbar'

function App() {

  return (
    <>
      <NavComp />
      <Home />
    </>
  )
}

export default App;
