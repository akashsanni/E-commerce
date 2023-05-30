import './App.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Routes , Route} from 'react-router-dom';
import React ,{useContext, useEffect} from 'react';
import { useDispatch } from 'react-redux';

import { fetchAsync } from '../Frontend/redux/features/cartSlice';
import Checker from './Components/Navbar/Checker';
import Homepage from './Components/HomePage/Homepage';
import CartPage from './Components/cartPage/CartPage';
import Navbar from './Components/Navbar/Navbar';
import Authentication from './Components/authentication/authentication';
import ProductsPage from './Components/productsPage/ProductsPage';
import Footer from './Components/Footer/Footer';
function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchAsync())
  },[])

  return (
    <>
     <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Homepage/>}></Route>
      <Route path={`/category/:id`}  element={<Checker></Checker>}></Route>
      <Route path={'/authentication'} element ={< Authentication/>}/>
      <Route path={'/description/:id'} element ={< ProductsPage/>}/>
      <Route path={'/cart'} element ={< CartPage/>}/>
    </Routes> 
    <Footer></Footer>
    
    
    </>

  )
}

export default App
