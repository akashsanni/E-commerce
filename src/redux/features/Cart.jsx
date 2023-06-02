import React from 'react'
import { deleteAsync, fetchAsync } from './cartSlice'
import { addAsync } from './cartSlice'
import { updateAsync } from './cartSlice'
import { useSelector,useDispatch } from 'react-redux'
function Cart() {
    const dispatch = useDispatch()
    const items = useSelector((state)=>console.log(state.cart.items))
  return (
    <>
     <div>Testing alll the burttons of the reducer</div>
     <div>{}</div>
    <button onClick={()=>dispatch(deleteAsync('646b4fd4e7d74396157c1207'))}>I am very Good button</button>
    </>
   
  )
}

export default Cart