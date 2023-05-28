import './App.css'
import React ,{useContext} from 'react';
import Checker from './Components/Navbar/Checker';
import Homepage from './Components/HomePage/Homepage';
import CartPage from './Components/cartPage/CartPage';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Routes , Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Authentication from './Components/authentication/authentication';
import ProductsPage from './Components/productsPage/ProductsPage';

function App() {

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
    
    
    </>

  )
}

export default App
