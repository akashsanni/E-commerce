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
        <h1 >Don't miss out on the Summer Sale! Ending In  </h1>
        <div className="time">
          <div className="minutes">
          <p className='hours'>{`${Hours>9?Hours:'0'+Hours}`} </p>
          <p>Hours</p>
          </div>
          <div className="minutes">
          <p className='hours'>{`${Minutes>9?Minutes:'0'+Minutes}`} </p>
          <p>Minutes</p>
          </div>
          <div className="minutes">
          <p className='hours'>{`${Seconds>9?Seconds:'0'+Seconds}`} </p>
          <p>Seconds</p>
          </div>
         
        </div>
       
    </div>
  )
}

export default Timer