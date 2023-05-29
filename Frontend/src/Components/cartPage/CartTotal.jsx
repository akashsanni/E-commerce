import React from 'react'

function CartTotal({subtotal}) {
  return (
    <div className="cartTotal">
        <h1>Cart Total</h1>
        <div className="subtotal">
            <h2>Subtotal:</h2>
            <h2>RS {subtotal}</h2>
        </div>
        <div className="Shipping">
            <h2>Shipping:</h2>
            <h2>RS 00.00</h2>
        </div>
        <hr />
        <div className="total">
            <h2>Total:</h2>
            <h2>RS {subtotal}</h2>
        </div>
        <div className="cartTotalbtn">
        <button>Proceed To Checkout</button>
        </div>
        
    </div>
  )
}

export default CartTotal