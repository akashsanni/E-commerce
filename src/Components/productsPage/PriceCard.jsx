import "./productsPage.css"
import React from 'react'

function PriceCard() {
  return (
   <div className="priceCard">
    <div className="priceCard__price">
    <p>rs 999</p>
    <p>67%</p>
    <p>rs2990</p>
    </div>
    <div className="priceCard__quantity">
        <div className="priceCard__quantityBox">
            <h2>-</h2>
            <h2>1</h2>
            <h2>+</h2>
        </div>
       
        <p>Quantity</p>
    </div>
    <button>Add to Cart </button>
   </div>

  )
}

export default PriceCard