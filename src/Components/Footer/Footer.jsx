import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Footer() {
  return (
   <footer className='footer'>
        <div className="footer__upper">

        </div>

        <div className="footer__lower">
            <div className="footer__lower__social">
                <h2>Let get social</h2>
                <FontAwesomeIcon icon={FaFacebook} />
            </div>
        </div>
   </footer>
  )
}

export default Footer