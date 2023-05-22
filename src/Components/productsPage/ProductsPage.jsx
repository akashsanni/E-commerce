import React, { useEffect, useState } from 'react'
import PriceCard from './PriceCard'
const ProductsPage = () => {
  const [obj , setObj] = useState({})

useEffect(()=>{
    fetch('http://localhost:1200/api/v1/products/645f1c6e40d3c6926081573e')
    .then((res)=>res.json())
    .then((data)=>setObj(data.data))
},[])
 console.log(obj.product);
  return (
    <div className="productsPage">
     <div className="productsPageleft">
        <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/32011675-2ad8-4b99-9787-895caf201d28_600x.png?v=1642405569" alt="" />
    </div>
    <div className="productsPageright">
        <h1><b>ProductsName</b> | Wireless Earbuds with upto 60 Hours Playback, 13mm Drivers, IWP Technology, 650mAh Charging Case</h1>
        <div>⭐4.8 | 1297 reviews</div>
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
        <PriceCard />
    </div>

    </div>
  
   
  )
}

export default ProductsPage