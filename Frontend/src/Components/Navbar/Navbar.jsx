import { FaShoppingBag } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';


import { useSelector } from 'react-redux';


import "./Navbar.css"
function Navbar() {
  const cartCount = useSelector((state) => state.cart.items.length)

  return (
    <>
        <div className='Navbar__wrapper'>
            <Link to ="/"><img className="Navbar__logo" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt_logo_small.svg?v=1682421543"  alt="image"/></Link> 
            <ul className="navOption">
              <li>Categories</li>
              <li>Daily Deals</li>
              <li>Best of Boat</li>
              <li>New Launches</li>
            </ul>
            <div className="search">
              <input className='search__box' placeholder='Search here' type="text"  id='search' />
             
            </div>
            <div className="nav__icons">
                <Link to = '/authentication'>
                <div><FaUserAlt/></div> 
                </Link>
                <Link to ='/cart'>

                  <div className="navbar__cart">
                  <i className="fa badge fa-lg" value={cartCount}>&#xf07a;</i>
                  </div>
                  

                </Link>
               
            </div>
          
        </div>


    </>
  )
}

export default Navbar