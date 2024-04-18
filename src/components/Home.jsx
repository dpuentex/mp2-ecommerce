// dependencies
import React, { useState, useEffect, useContext } from "react";

// import components and assets
import ListStoresPage from "./ListStoresPage";
import DetailedPage from "./DetailedPage";
import {
  StoreContext,
  FetchStoresContext,
  FetchProductsContext,
  ProductContext
} from "../ContextList";
import "../assets/css/homepage.css";
export default function Home() {
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
      {storeData[0] === -1 ? ( // check if store not yet selected
        <ListStoresPage />
      ) : (
        <DetailedPage />
      )}
    </div>
  );
}
