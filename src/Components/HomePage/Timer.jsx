import React from 'react'
import { useEffect,useState } from 'react'
import './home.css'
function Timer() {
    const [Hours,setHours] = useState(24-new Date().getHours()-1)
    const [Minutes,setMinutes] = useState(60 - new Date().getMinutes()-1)
    const [Seconds,setSeconds] = useState(60 - new Date().getSeconds()-1)
setInterval((Hours, Minutes,Seconds) => {
     setHours (24-new Date().getHours()-1)
     setMinutes(60 - new Date().getMinutes()-1)
     setSeconds( 60 - new Date().getSeconds()-1)
},1000);


  return (
    <div className="timer">
        <br />
        <br />
        <br />
        <h1>The Summer Sale 60% off is here </h1>
        <h3>Ending In </h3>
        <h1>{` 0${Hours} Hours:   0${Minutes} Minutes: ${Seconds} Second`}</h1>
    </div>
  )
}

export default Timer