import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

import CartPanel from "./CartPanel";
import "../assets/css/navigationbar.css";

import {
  CartItemDataContext,
  StoreContext,
  FetchStoresContext,
  SelectStoreContext,
  SearchContext
} from "../ContextList";
export default function NavigationBar() {
  const fetchStores = useContext(FetchStoresContext);
  const [cartItemData, setCartItemData] = useContext(CartItemDataContext);
  const [storeData, setStoreData] = useContext(StoreContext);
  const setStore = useContext(SelectStoreContext);

  const {accessSearch, setSearch} = useContext(SearchContext)

  return (
    <nav className="navbar">
      <ul>
        <li className="nav-pick-a-store"
          onClick={(e) => {
            setStore(-1);
            e.stopPropagation();
          }}
        >
          <Link to={"/"}>PICK A STORE</Link>
          <ul className="nav-dropdown-menu">
            {storeData[1] &&
              storeData[1].map((store, index) => {
                // console.log(store);
                return (
                  <li
                    key={index}
                    onClick={(e) => {
                      setStore(store.store_id);
                      e.stopPropagation();
                    }}
                  >
                    <Link to={"/products/"}>{store.store_name}</Link>
                  </li>
                );
              })}
          </ul>
        </li>
        {storeData[0] !== -1 && (
          <li
            className="nav-categories"
            onClick={(e) => {
              // setActiveCategory("All");
              setSearch.setCategory("")
              e.stopPropagation();
            }}
          >
            <Link to="/products/">SHOP</Link>
            
          </li>
        )}
        <li>
          <Link to="/best-sellers">BEST SELLERS</Link>
        </li>
        
        <li className="nav-cart">
          <Link to="/cart" className="nav-cart-link">
            CART🛒(
            {localStorage.getItem("CartLocalStorage")
              ? localStorage.getItem("CartLocalStorage").split(",").length
              : 0}
            )
          </Link>
          {<CartPanel />}
        </li>
      </ul>
    </nav>
  );
}
