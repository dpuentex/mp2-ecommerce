import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

import CartPanel from "./CartPanel";
import "../assets/css/navigationbar.css";

import { CartContext, StoreContext, CategoryContext } from "../ContextList";
export default function NavigationBar() {

  const [activeCategory, setActiveCategory] = useContext(CategoryContext)
  const [cartContents, setCartContents] = useContext(CartContext);
  const [storeData, setStoreData] = useContext(StoreContext);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isBrowseOpen, setIsBrowseOpen] = useState(false)
  const [isPickStoresOpen, setIsPickStoresOpen] = useState(false)


  const toggleBrowseDropDown = ()=>{
    setIsBrowseOpen(!isBrowseOpen)
 };
  const toggleCartDropdown = () => {
    setIsCartOpen(!isCartOpen);
  };

  const TogglePickStoreDropdown = () => {
    setIsPickStoresOpen(!isPickStoresOpen);
  };

  return (
    <nav className="navbar">
      <ul >
        <li onMouseEnter={TogglePickStoreDropdown} onMouseLeave={TogglePickStoreDropdown} onClick={() => setStoreData([-1, storeData[1]])}>
          { storeData[0] === -1
          ? <Link to={"/"}>PICK A STORE</Link>
        : <Link to = {"/"} >HOME</Link> }
        {isPickStoresOpen && storeData[0] == -1 &&
              <ul className="nav-dropdown-menu">
                {storeData[1].map((store, index) => {
                  console.log(store);
                  return <li key={index} onClick={(e)=>{setStoreData([store.store_id, store]); e.stopPropagation()}}><Link to={'/about-us/'}>{store.store_name}</Link></li>
                })}
                
                
              </ul>
              }</li>
        { storeData[0] !== -1 &&
          <li id="nav-about-us"  
          onMouseEnter={toggleBrowseDropDown} 
          onMouseLeave={toggleBrowseDropDown}
          onClick={(e)=>{setActiveCategory("All"); e.stopPropagation()}}
          > <Link to="/products/">ALL CATEGORIES</Link>
           
            {isBrowseOpen && 
              <ul className="nav-dropdown-menu">
                {storeData[1].primary_categories.map((category, index) => {
                  console.log(category);
                  return <li key={index} onClick={(e)=>{setActiveCategory(category); e.stopPropagation()}}><Link to={'/products/'}>{category}</Link></li>
                })}
                
                
              </ul>
              }

          
          </li>
        }
        <li>
          <Link to="/best-sellers">BEST SELLERS</Link>
        </li>
        <li id="about-us">
          <Link to="/about-us/">ABOUT US</Link>
        </li>
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
