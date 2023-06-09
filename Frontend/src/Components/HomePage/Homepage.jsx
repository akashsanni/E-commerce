
import React, { useState } from 'react'
import Navbar from "../Navbar/Navbar"
import { useEffect } from 'react'
import Categories from './Categories'

import MainCaraSoul from '../Carasoul/mainCaraSoul'
import MiniCarasoul from '../Carasoul/MiniCarasoul'
import Timer from './Timer'
import Usp from './Usp'
function Homepage() {

  return (
    <>
    
        <MainCaraSoul></MainCaraSoul>
        <Categories></Categories>
        <Timer></Timer>

        <div className="dealname">
          <h1>Deal Of The Day</h1>
          <p>View All </p>
        </div>
        <MiniCarasoul 
        tag='day'  
        ></MiniCarasoul>
        <Usp></Usp>
        <div className="dealname">
          <h1>New Launches</h1>
          <p>View All </p>
        </div>
        <MiniCarasoul
        tag='new'  
        >

        </MiniCarasoul>
        <div className="dealname">
          <h1>Best Of Boats</h1>
          <p>View All </p>
        </div>
        <MiniCarasoul
        
        tag='best' 
        >

        </MiniCarasoul>

    </>
  
  )
}

export default Homepage