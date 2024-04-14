import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

import CartPanel from "./CartPanel";
import "../assets/css/navigationbar.css";

import { CartContext, StoreContext } from "../ContextList";
export default function NavigationBar() {

  const [cartContents, setCartContents] = useContext(CartContext);
  const [storeData, setStoreData] = useContext(StoreContext);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const [isBrowseOpen, setIsBrowseOpen] = useState(false)

  const toggleAboutUsDropdown = () => {
    setIsAboutUsOpen(!isAboutUsOpen);
  };
  const toggleBrowseDropDown = ()=>{
    setIsBrowseOpen(!isBrowseOpen)
 };
  const toggleCartDropdown = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <nav className="navbar">
      <ul >
        <li onClick={() => setStoreData([-1, storeData[1]])}>
          { storeData[0] === -1
          ? <Link to={"/"}>Pick a Store</Link>
        : <Link to = {"/"} >HOME</Link>}
        </li>
        { storeData[0] !== -1 &&
          <li id="nav-about-us"  
          onMouseEnter={toggleBrowseDropDown} 
          onMouseLeave={toggleBrowseDropDown}
          > <Link to="/products/">BROWSE</Link>
           
            {isBrowseOpen && 
              <ul className="nav-dropdown-menu">
                {storeData[1].primary_categories.map((category, index) => {
                  return <li key={index}><Link to={`#`}>{category}</Link></li>
                })}
                
                
              </ul>
              }

          
          </li>
        }
        <li>
          <Link to="/best-sellers">BEST SELLERS</Link>
        </li>
        {storeData[0] !== -1 && <li id="about-us"  
          onMouseEnter={toggleAboutUsDropdown} 
          onMouseLeave={toggleAboutUsDropdown}
        >
          <Link to="/about-us/">ABOUT US</Link>
          {isAboutUsOpen && (
            <ul className="nav-dropdown-menu">
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
        </li>}
        <li
          className="nav-cart"
          onMouseEnter={toggleCartDropdown}
          onMouseLeave={toggleCartDropdown}
        >
          <Link to="/cart" className="nav-cart-link">
            CART🛒({localStorage.getItem('CartLocalStorage') ? localStorage.getItem('CartLocalStorage').split(",").length : 0})
          </Link>
          {isCartOpen && <CartPanel />}
        </li>
      </ul>
    </nav>
  );
}
