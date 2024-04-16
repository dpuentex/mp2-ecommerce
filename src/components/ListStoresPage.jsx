import React, { useState, useEffect, useContext } from "react";
import { StoreContext, FetchStoresContext } from "../ContextList";

import "../assets/css/homepage.css";
import { Link } from "react-router-dom";

export default function ListStoresPage() {
  const [storeData, setStoreData] = useContext(StoreContext);
  const fetchStores = useContext(FetchStoresContext);

  // useEffect( () => {
  //    fetchStores(storeData[0])
  // }, [storeData[0]]);

  return (
    <div className="home-page-container">
      {storeData[1]?.map ? storeData[1].map((store, index) => {
        // map through stores
        return (
          <h1
            key={index}
            store={store}
            onClick={() => setStoreData([store.store_id, storeData[1]])}
          ><Link to="/about-us">{store.store_name}</Link>
            
          </h1>
        );
      }) : null}
    </div>
  );
}
