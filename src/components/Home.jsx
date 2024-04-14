// dependencies
import React, { useState, useEffect, useContext } from "react";

// import components and assets
import ListStoresPage from "./ListStoresPage";
import DetailedPage from "./DetailedPage";
import { StoreContext, CartContext } from "../ContextList";
import "../assets/css/homepage.css";
export default function Home() {
  const [storeData, setStoreData] = useContext(StoreContext);
  
  // fetching store data and storing in state
  useEffect( () => {
    // if store selected in storeData[0] then fetch that store
     fetch(`http://127.0.0.1:${3000}/store/${storeData[0] != -1 ? storeData[0] : ""}`)
      .then((res) => res.json())
      .then((json) => {
        if (storeData[0] !== -1) {
          setStoreData([storeData[0], json]);
        } else setStoreData([-1, json]);
      });
    console.log(storeData);
  }, [storeData[0]]);

  return (<div className="home-page-container">
    {storeData[0] === -1 ? ( // check if store not yet selected
    <ListStoresPage />): 
    <DetailedPage />}
  </div>)
  
  
}
