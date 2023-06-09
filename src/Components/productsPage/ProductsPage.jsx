import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import PriceCard from './PriceCard'
import DeliveryCard from './DeliveryCard'
import Review from './Review'
const ProductsPage = () => {
  const [obj , setObj] = useState({})
  let {id} = useParams()
  useEffect(()=>{
    fetch(`http://localhost:1200/api/v1/products/${id}`)
    .then((res)=>res.json())
    .then((data)=>setObj(data.data.product[0]))
},[id])
console.log(obj)
  return (
    <div className="productsPage">
     <div className="productsPageleft">
        <img src={  obj.images &&  obj?.images[0]} width ={500}alt="" />
    </div>
    <div className="productsPageright">
        <h1><b>{obj?.name}</b> | {obj?.description}</h1>
        <div>⭐{obj?.rating} | {obj?.reviews} reviews</div>
        <br /><br /><br />
        <hr />

        <div className="availableColors">
           
            <div className="color">
            <h4>Available Colors</h4>
                <div className="color-box" style={{ backgroundColor: 'yellow' }}></div>
                <div className="color-box" style={{ background: 'blue' }}></div>
                <div className="color-box" style={{ background: '#ff0000' }}></div>
            </div>
        </div>
        <div className="ProductsPagecards">
        <DeliveryCard />
        <PriceCard price={obj?.price} id={id} discountPercentage={obj?.discountPercent}/>
        </div>
        <Review />

    </div>

    </div>
  
   
  )
}

export default ProductsPage