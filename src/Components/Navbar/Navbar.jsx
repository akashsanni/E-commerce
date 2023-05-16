import { FaShoppingBag } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';


import "./Navbar.css"
function Navbar() {
  return (
    <>
        <div className='Navbar__wrapper'>
            <img className="Navbar__logo" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt_logo_small.svg?v=1682421543"  alt="image"/>
            <ul className="navOption">
            <li>Categories</li>
            <li>Daily Deals</li>
            <li>Best of Boat</li>
            <li>New Launches</li>
            </ul>
            <form className='form_wrapper'>
              <input type="search" id="search-box"/>
              <label htmlFor="search-box" className='search-box'><FaSearch/></label>
            </form>
          
            <div><FaUserAlt/></div>

            <div><FaShoppingBag/></div>
            <h1>1</h1>
            

        </div>


    </>
  )
}

export default Navbar