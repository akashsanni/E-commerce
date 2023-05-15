import React from 'react'
import Navbar from "../Navbar/Navbar"
import Categories from './Categories'

import MainCaraSoul from '../Carasoul/mainCaraSoul'
import MiniCarasoul from '../Carasoul/MiniCarasoul'
import Timer from './Timer'
import Usp from './Usp'
function Homepage() {
  return (
    <>
        <Navbar></Navbar>
        <MainCaraSoul></MainCaraSoul>
        <Categories></Categories>
        <Timer></Timer>
        <MiniCarasoul></MiniCarasoul>
        <Usp></Usp>
        <MiniCarasoul></MiniCarasoul>
        <MiniCarasoul></MiniCarasoul>
    </>
  
  )
}

export default Homepage