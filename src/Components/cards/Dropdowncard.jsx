import "./HomePage.css"
import React from 'react'

function Dropdowncard({tempobj}) {

  return (
    <div className="dropdowncard__main" >
        
             {tempobj.map((el)=>(
                <div key={el.key} className="dropdowncard">
                <img src= {el.url} alt="" width={50} />
                <h4>{el.name}</h4>
                </div>
             ))}
        
       
    </div>

  )
}

export default Dropdowncard