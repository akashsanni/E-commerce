import React from 'react'
import Dropdowncard from '../cards/Dropdowncard'
function NavbarDropDown(props) {
console.log(props);
  
  return (
    <div className="navbar__dropdown" >
        <Dropdowncard tempobj = {tempobj}></Dropdowncard>
    </div>
    
  )
}

export default NavbarDropDown