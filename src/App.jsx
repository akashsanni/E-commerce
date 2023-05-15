import './App.css'
import React from 'react';
import NavbarDropDown from './Components/Navbar/NavbarDropDown';
import { Tooltip as ReactTooltip } from "react-tooltip";
import Homepage from './Components/cards/homepage'
import Navbar from './Components/Navbar/Navbar'
import Categories from './Components/HomePage/Categories';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MainCaraSoul from './Components/Carasoul/mainCaraSoul';
import MiniCarasoul from './Components/Carasoul/MiniCarasoul';
import Timer from './Components/HomePage/Timer';
import Usp from './Components/HomePage/Usp';


function App() {
  try{
    fetch('http://localhost:1200/api/v1/products')
    .then(res => res.json())
    .then(data=>console.log(data))
  }
  catch(err){
    console.log(err);
  }
  


  return (
    <>
    <Navbar id="app-title" ></Navbar>
    <ReactTooltip 
    anchorId="app-title"
    place="bottom"
    content={<NavbarDropDown/>}
    />
    <MainCaraSoul></MainCaraSoul>
    <Categories></Categories>
    <Timer></Timer>
    <MiniCarasoul />
    <Usp></Usp>
    <MiniCarasoul />

    </>

  )
}

export default App
