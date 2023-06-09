import React, { useState, useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import {fetchAsync} from "./../../redux/features/cartSlice"
import CartProductCard from './CartProductCard';
import CartTotal from './CartTotal';



function CartPage() {
  const carts = useSelector((state) => state.cart.items);
  console.log(carts)
  const status = useSelector((state) => state.cart.status);
  const [cart , setCart] = useState([]);
  const cartLength = carts.length;

  if ( status === "loading" || !carts  || carts.length === 0) {
    // Render a loading state or an error message
     return <div>Loading...</div>;
  }
 
  if ( status === "idle" || !carts  || carts.length === 0) {
    // Render a loading state or an error message
    
  }


  let subtotal = 0;
  carts.forEach((cart) => {
    if (cart?.product?.price && cart?.quantity) {
      subtotal += cart?.product?.price * cart?.quantity;
    }
  });


  return (
    <div className="cartPage">
      <div className="cartPage__main">
        <h1>Product</h1>
        <h1>Price</h1>
        <h1>Quantity</h1>
        <h1>Subtotal</h1>
      </div>
      { carts?.map((cart, index) => (
    <CartProductCard
      key={index}
      name={cart?.product?.name}
      price={cart?.product?.price}
      pic={cart?.product?.images[0] ?? ''}
      count={cart?.quantity}
      itemId={cart?.product?._id}
    />
   
  ))
  
  }


      <div className="cartpagebtm">
        <CartTotal subtotal={subtotal } />
      </div>
    </div>
  );
}

export default CartPage;
