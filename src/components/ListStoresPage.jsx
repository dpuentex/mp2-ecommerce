import React, { useState, useEffect, useContext } from "react";
import { StoreContext } from "../ContextList";

import "../assets/css/homepage.css";
import { Link } from "react-router-dom";

export default function ListStoresPage() {
  const [storeData, setStoreData] = useContext(StoreContext);

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

  return (
    <div className="list-stores-container">
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
