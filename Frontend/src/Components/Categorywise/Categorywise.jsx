import React from 'react'
import "./Categorywise.css"
import { Link } from 'react-router-dom'
// eslint-disable-next-line react/prop-types
function Categorywise({image , name , price , discountPrice ,rating ,_id }) {
  return (
    <Link to={`/description/${_id}`} style={{paddingLeft: 13, textDecoration: 'none'}}>
    <div className="categorywise">
        <div className="categorywise__image">
            <img src={image} width = {150}alt="" />
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

            <button className="addtocart">View Product  </button>

        </div>
    </div>
    
    </Link>
   
  )
}

export default Categorywise