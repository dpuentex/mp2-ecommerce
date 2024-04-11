import React, { useState } from 'react'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'

export default function NavigationBar() {
    const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }; 
    return (
        <nav className='navbar'>
              <ul className='nav-links'>
                  <li>
                      <Link to='/'>HOME</Link>
                  </li>
                  <li>
                      <Link to='/products'>BROWSE</Link>
                  </li>
                  <li>
                      <Link to='/best-sellers'>BEST SELLERS</Link>
                  </li>
                  <li className="aboutUs">
          <Link to='/about-us/'  onClick={toggleDropdown} >
            ABOUT US
          </Link>
          {isOpen && (
            <ul className="dropdown-menu">
              <li>
                <a href="#">Mission</a>
              </li>
              <li>
                <a href="#">Vision</a>
              </li>
              <li>
                <a href="#">Values</a>
              </li>
            </ul>
          )}
        </li>
    <li>
<Link to='/cart' className='cart-btn' onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>CART🛒</Link>
        {isOpen && (
         <ul className="dropdown-menu">
              <li>
                ITEM 1
             </li>
           
            </ul>
          )}
          </li>
        </ul> 
   </nav>
    )
}

