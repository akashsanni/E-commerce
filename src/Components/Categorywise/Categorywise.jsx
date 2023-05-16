import React from 'react'
import "./Categorywise.css"
// eslint-disable-next-line react/prop-types
function Categorywise({image , name , price , discountPrice ,rating }) {
  return (
    <div className="categorywise">
        <div className="categorywise__image">
            <img src={image} width = {140}alt="" />
        </div>
        <div className="details">
            <h3>{name}</h3>
            <div className="price">
               <p>{price}</p>
               <p>{discountPrice}%off</p>
               <p>{discountPrice*price/100}</p>
              
            </div>
            <div className="rating">
                <p>⭐{rating}</p>
            </div>
            <button className="addtocart">Add To Cart</button>
        </div>
    </div>
  )
}

export default Categorywise