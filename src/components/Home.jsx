// dependencies
import React, { useState, useEffect, useContext } from "react";

// import components and assets
import ListStoresPage from "./ListStoresPage";
import DetailedPage from "./DetailedPage";
import AboutUsFull from "./AboutUsFull";
import {
  StoreContext,
  FetchStoresContext,
  FetchProductsContext,
  ProductContext
  
} from "../ContextList";
import "../assets/css/homepage.css";
import "../assets/css/detailedpage.css"
export default function Home() {
  // reset background color for pick a store
  document.documentElement.style.setProperty('--col1', 'rgba(10,0,20,0.8');
  document.documentElement.style.setProperty('--col2', 'rgba(0,20,10,0.8');
  document.documentElement.style.setProperty('--col3', 'rgba(20,10,0,0.8');


  const [storeData, setStoreData] = useContext(StoreContext);
  const fetchStores = useContext(FetchStoresContext);
  const fetchProducts = useContext(FetchProductsContext);
  const [productData, setProductData] = useContext(ProductContext);
  // fetching store data and storing in state
  // useEffect(() => {
  //   // if store selected in storeData[0] then fetch that store
  //   console.log("home.jsx");
  //   fetchStores(storeData[0]);
  //   fetchProducts();
  // }, []);
  function randomFace() {
    const messages = ["^.^", "UwU", "OwO", "O.O"];
    return messages[Math.floor(Math.random() * messages.length)];
  }
  return (
    <div className="home-page-container">
      {storeData[1].length == 0 && (
        <div className="loading">
          Please wait... Fetching stores. {randomFace()}
        </div>
      )}
      {productData.length == 0 && (
        <div className="loading">
          Please wait... Fetching products. {randomFace()}
        </div>
      )}

      <AboutUsFull />
      {storeData[0] === -1 ? ( // check if store not yet selected
        <ListStoresPage />
      ) : (
        <DetailedPage />
      )}
    </div>
  );
}
