import React from 'react'

function Smallcard({ tempobj }) {
  return (
    <div className="smallcard__main" >
        
    {tempobj.map((el)=>(
       <div key={el.name} className="smallcard">
       <img src= {el.url} alt="" width={87} />
       <h4>{el.name}</h4>
       </div>
    ))}


</div>
  )
}

export default Smallcard