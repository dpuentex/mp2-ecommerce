// dependencies
import React, { useState, useEffect, useContext } from "react";

// import components and assets
import ListStoresPage from "./ListStoresPage";
import DetailedPage from "./DetailedPage";
import { StoreContext, CartContext, FetchStoresContext } from "../ContextList";
import "../assets/css/homepage.css";
export default function Home() {
  const [storeData, setStoreData] = useContext(StoreContext);
  const fetchStores = useContext(FetchStoresContext);
  // fetching store data and storing in state
  useEffect( () => {
    // if store selected in storeData[0] then fetch that store
     fetchStores(storeData[0])
  }, []);
  
  return (<div className="home-page-container">
    {storeData[0] === -1 ? ( // check if store not yet selected
    <ListStoresPage />): 
    <DetailedPage />}
  </div>)
  
  
}
