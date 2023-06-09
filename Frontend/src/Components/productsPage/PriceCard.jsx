import "./productsPage.css"
import React from 'react'


import { useState } from "react"
import {addAsync , updateAsync} from "./../../redux/features/cartSlice"
import { useDispatch } from "react-redux"
function PriceCard({price ,discountPercentage,id}) {
  console.log(id)
  const [noOfItems , setNoOfItems] = useState(1)
  const handlePlus = () =>{
    setNoOfItems(noOfItems + 1)
  }
  const handleMinus = () =>{
    setNoOfItems(noOfItems -1)
  }

  const dispatch = useDispatch()


  return (
   <div className="priceCard">
    <div className="priceCard__price">
      <p className="sellingprice">Rs {price}</p>
      <p className="discountpercentage" >{discountPercentage}% off</p>
      <p className="realprice">Rs {Math.round(price*100/discountPercentage)}</p>
    </div>
    <p>Inclusive of All Taxes</p>
    <div className="priceCard__quantity">
        <div className="priceCard__quantityBox">

            <h2 onClick={handleMinus} >-</h2>
            <h2>{noOfItems}</h2>
            <h2 onClick={handlePlus} >+</h2>

        </div>
       
        <p className="quantity">Quantity</p>
    </div>

    <button  onClick={() => dispatch(addAsync(id))}>Add to Cart </button>

   </div>

  )
}

export default PriceCard