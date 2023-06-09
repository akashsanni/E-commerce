import React from 'react'
import "./HomePage.css"
import CardPopup from './CardPopup'
import { useState } from 'react';

function Homepage({ image , mainfeature ,name ,price }) {

  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };


  return (
   <>
    <div className="card">

        <div className="card__image">

           <img src={image}  height={380} alt="" />
        </div>

        <div className="title">
          <h2>{mainfeature}</h2>

        </div>
        <div className="image__description">
            <div className="image__description__left">
                <p>⭐ 4.8</p>

                <h2>{name}</h2>
                <h4>{price}</h4>
            </div>
            <div className="image__description__right">
               <div className="colors">
                  <div className="first__color" style={{backgroundColor:`red`}}></div>
                  <div className="second__color" style={{backgroundColor:`blue`}} ></div>
                  <div className="third__color" style={{backgroundColor:`black`}} ></div>
               </div>
               <div className="cart__image">
                <img  src="https://png.pngtree.com/png-vector/20190329/ourlarge/pngtree-vector-shopping-bag-icon-png-image_889649.jpg" alt="" />

               
               </div>
               
            </div>
          
        </div>
    </div>


   </>
  )
}

export default Homepage