import React, { useState, useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';


import CartProductCard from './CartProductCard';
import CartTotal from './CartTotal';



function CartPage() {
  // const dispatch = useDispatch()
  const carts = useSelector((state) => state.cart.items)
  useEffect(() => {
    // dispatch(fetchAsync())
    // fetch('http://localhost:1200/api/v1/users/', {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzFlNjc2NzUwNmRhZmE1MmNmYjJlOSIsImlhdCI6MTY4NTI2NDY5MiwiZXhwIjoxNjg1MzUxMDkyfQ.gqBkp0FlAtC-9K1xgbF6CQFpT5Vp4oQsfB-oRQYg4-E'
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => setCarts(data.data.user.carts))
    //   .catch((error) => console.error('Error fetching cart data:', error));
  }, []);
  const cartProductCards = carts.map((cart) => (
    <CartProductCard key={cart?._id} name={cart?.product.name} price={cart?.product.price} pic= {cart?.product.images[0]} count = {cart?.count}  itemId={cart?._id}/>
  ));
   let subtotal = 0;
  carts.forEach((cart)=>{
    return subtotal+=(cart?.product.price*cart?.count)
  })


  return (
    <div className="cartPage">
      <div className="cartPage__main">
        <h1>Product</h1>
        <h1>Price</h1>
        <h1>Quantity</h1>
        <h1>Subtotal</h1>
      </div>
      {cartProductCards}

      <div className="cartpagebtm">
        <CartTotal subtotal={subtotal} />
      </div>
    </div>
  );
}

export default CartPage;
