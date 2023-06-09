
import React, { useEffect } from 'react'
import { useState } from 'react'
import "./CartPage.css"

import { useDispatch } from 'react-redux'
import {updateAsync} from "./../../redux/features/cartSlice"
function CartProductCard({ name , count , price , pic , itemId }) {
     const dispatch = useDispatch()
     
     const [quantity , setQuantity]= useState(count)

     const handleminus = (itemId) =>{
          if(quantity>1){
               setQuantity((prev)=> dispatch(updateAsync({itemId,count:prev-1})))
          }
         
     }
     const handleplus = () => {
          if(quantity<=10){
               setQuantity((prev)=> dispatch(updateAsync({itemId,count:prev+1})))
          }
     }

     // console.log(quantity)
     // useEffect(()=>{
     //      dispatch(updateAsync({itemId, quantity}))
     // },[quantity])


  return (
   <div className="cart-product-card">
       <div className="cart-product-cardproduct cart-product-card__child">
            <img src={pic} alt=""  width={80}/>
            <h3>{name}</h3>
       </div>
       <h3>Rs {price}</h3>
       <div className="quantity cart-product-card__child">
            <div className="quantity__count">

            <i onClick={() => handleminus(itemId)} className="fa fa-minus" aria-hidden="true"></i>
            <h2>{quantity}</h2>
            <i onClick={()  =>handleplus(itemId)} className="fa fa-plus" aria-hidden="true"></i>


            </div>
       </div>
       <div className="subtotal cart-product-card__child">
        <h3>{price*count}</h3>
       </div>
   </div>
  )
}
export default CartProductCard