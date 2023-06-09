import React from 'react'
import { Link } from 'react-router-dom'
function Smallcard({ tempobj }) {


  return (
    <div className="smallcard__main" >
        
    {tempobj.map((el,index)=>(
      <Link to= {`category/${el.name}`} key={index}  style={{paddingLeft: 13, textDecoration: 'none'}}  >
      <div  className="smallcard">

       <img src= {el.url} alt="" width={87} />
       <h4>{el.name}</h4>
       </div>
      </Link>
    ))}


</div>
  )
}

export default Smallcard