import React, { useState } from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import CartPanel from "./CartPanel";
import "../assets/css/navigationbar.css";

export default function NavigationBar() {
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
      <ul className="nav-links">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li id="about-us"  
          onMouseEnter={toggleBrowseDropDown} 
          onMouseLeave={toggleBrowseDropDown}
          >
               <Link to="/products/">BROWSE</Link>
          {isBrowseOpen && (
            <ul className="dropdown-menu">
              <li>
                <a href="#">SHIRTS</a>
              </li>
              <li>
                <a href="#">PANTS</a>
              </li>
              <li>
                <a href="#">HATS</a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/best-sellers">BEST SELLERS</Link>
        </li>
        <li id="about-us"  
          onMouseEnter={toggleAboutUsDropdown} 
          onMouseLeave={toggleAboutUsDropdown}
        >
          <Link to="/about-us/">ABOUT US</Link>
          {isAboutUsOpen && (
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
        <li
          className="cart"
          onMouseEnter={toggleCartDropdown}
          onMouseLeave={toggleCartDropdown}
        >
          <Link to="/cart" className="cart-btn">
            CART🛒 
          </Link>
          {isCartOpen && <CartPanel />}
        </li>
      </ul>
    </nav>
  );
}
