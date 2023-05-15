import './App.css'
import React from 'react';
import NavbarDropDown from './Components/Navbar/NavbarDropDown';
import { Tooltip as ReactTooltip } from "react-tooltip";
import Homepage from './Components/cards/homepage'
import Navbar from './Components/Navbar/Navbar'
function App() {

  return (
    <>
    <Navbar id="app-title" ></Navbar>
    <ReactTooltip 
    anchorId="app-title"
    place="bottom"
    content={<NavbarDropDown/>}
    />
    </>
  )
}

export default App
