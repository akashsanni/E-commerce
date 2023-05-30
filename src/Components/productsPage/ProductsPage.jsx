import React, { useEffect, useState } from 'react'
import PriceCard from './PriceCard'
import DeliveryCard from './DeliveryCard'
import { useParams } from 'react-router-dom'
const ProductsPage = () => {
  const [obj , setObj] = useState({})
  let {id} = useParams()
  useEffect(()=>{
    fetch(`http://localhost:1200/api/v1/products/${id}`)
    .then((res)=>res.json())
    .then((data)=>setObj(data.data))
},[])
  return (
    <div className="productsPage">
     <div className="productsPageleft">
        <img src={obj?.product?.images[0]} width ={500}alt="" />
    </div>
    <div className="productsPageright">
        <h1><b>{obj?.product?.name}</b> | {obj?.product?.description}</h1>
        <div>⭐{obj?.product?.rating} | {obj?.product?.reviews} reviews</div>
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
        <PriceCard price={obj?.product?.price} id={id} discountPercentage={obj?.product?.discountPercent}/>
        </div>

    </div>

    </div>
  
   
  )
}

export default ProductsPage