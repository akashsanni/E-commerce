import React from 'react'
import "./HomePage.css"
import CardPopup from './CardPopup'
import { useState } from 'react';
function Homepage() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
const props = {
    label : "SuperSaver",
    image : 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_131.jpg?v=1682408981',
    mainfeature : "60 Hours PlayBack",
    name : "Airdopes 131",
    price : "Rs. 1,999",
    avaiableColors : ['green' , 'red' , 'blue'],
}
  return (
   <>
    <div className="card">

        <div className="card__image">
           <img src={props.image}  height={380} alt="" />
        </div>

        <div className="title">
          <h2>{props.mainfeature}</h2>
        </div>
        <div className="image__description">
            <div className="image__description__left">
                <p>⭐ 4.8</p>
                <h2>{props.name}</h2>
                <h4>{props.price}</h4>
            </div>
            <div className="image__description__right">
               <div className="colors">
                  <div className="first__color" style={{backgroundColor:`${props.avaiableColors[0]}`}}></div>
                  <div className="second__color" style={{backgroundColor:`${props.avaiableColors[1]}`}} ></div>
                  <div className="third__color" style={{backgroundColor:`${props.avaiableColors[2]}`}} ></div>
               </div>
               <div className="cart__image">
                <img onClick={togglePopup} src="https://png.pngtree.com/png-vector/20190329/ourlarge/pngtree-vector-shopping-bag-icon-png-image_889649.jpg" alt="" />
               
               </div>
               
            </div>
          
        </div>
    </div>
    {showPopup && <CardPopup show={showPopup} handleClose={togglePopup}/>} 
   </>
  )
}

export default Homepage