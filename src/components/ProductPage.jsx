import React from "react";
import "../assets/css/browsepage.css";
import "../assets/css/checkbox.css";
import Checkbox from "./Checkbox";
import ProductCard from "./ProductCard";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext, StoreContext, CategoryContext } from "../ContextList";
import { createContext } from "react";

export default function BrowsePage() {
  let [data, setData] = React.useState({});
  let [details, setDetails] = React.useState([]);
  const [storeData, useStoreData] = useContext(StoreContext);
  const [useCartContext, setUseCartContext] = useContext(CartContext);
  const [useCategoryContext, setUseCategoryContext] =
    useContext(CategoryContext);

  async function fetchProducts() {
    console.log(useCategoryContext);
    if (useCategoryContext === "All") {
      const response = await fetch(`http://127.0.0.1:${3000}/products/data`);
      let data = await response.json();
      setData(data);
      console.log(data);
    } else if (useCategoryContext !== "All") {
      const response = await fetch(
        `http://127.0.0.1:${3000}/products/category/${useCategoryContext}`
      );
      let data = await response.json();
      setData(data);
      setDetails(calculateDetails(data));
      console.log(details);
      console.log(data);
    }
  }

  // returns object with keys as detail keys and values as an array of collected values
  function calculateDetails(data) {
    let details = [];
    console.log(data.length);

    for (let productCount = 0; productCount < data.length; productCount++) {
      // for each product
      let detailList = data[productCount].details_object;
      let detailListKeys = Object.keys(detailList);
      console.log(detailListKeys);

      for (
        let detailCount = 0;
        detailCount < detailListKeys.length;
        detailCount++
      ) {
        // for each detail
        console.log(detailList);
        console.log(detailListKeys[detailCount]);

        let detailKey = detailListKeys[detailCount];
        let detailValue = detailList[detailListKeys[detailCount]];

        if (!details[detailKey]) {
          details[detailKey] = [];
        }
        if (!details[detailKey].includes(detailValue)) {
          details[detailKey].push(detailValue);
        }
      }
    }
    return details;
  }

  useEffect(() => {
    fetchProducts();
  }, [useCategoryContext]);

  function consoleUseContext() {
    console.log(useCartContext);
  }
  function clearLocalStorage() {
    localStorage.clear();
    setUseCartContext([]);
  }

  function consoleLocalStorage() {
    console.log(localStorage);
    console.log(localStorage.getItem("CartLocalStorage"));
    console.log(localStorage.getItem("CartLocalStorage").split(","));

    console.log(localStorage.getItem("CartLocalStorage"));
  }

  // array[x].product_id
  // array[x].product_name
  // array[x].images
  // array[x].price
  // array[x].description
  // array[x].stock
  // array[x].details_array
  return (
    <>
      <div className="button-test-div">
        <button
          className="glow-squish-button dev-button"
          onClick={fetchProducts}
        >
          Fetch Products
        </button>
        <br />
        <button
          className="glow-squish-button dev-button"
          onClick={consoleLocalStorage}
        >
          console log local storage
        </button>
        <br />
        <button
          className="glow-squish-button dev-button"
          onClick={clearLocalStorage}
        >
          clear local storage
        </button>
        <br />
        <button
          className="glow-squish-button dev-button"
          onClick={consoleUseContext}
        >
          console log cart contents from useeffect
        </button>
      </div>
      <div className="filter-container">
        {Object.keys(details).length > 0 &&
          Object.keys(details).map((detailKey, index) => {
            return (
              <div className="filter-checkboxes-collection" key={index}>
                <p className="checkbox-collection-label">{detailKey}</p>
                {details[detailKey].map((detailValue, index) => {
                  return <Checkbox key={index} value={detailValue} />;
                })}
              </div>
            );
          })}
      </div>

      {data.length > 0 ? (
        <div className="product-container">
          {data.map((product, index) => {
            return <ProductCard key={index} product={product} />;
          })}
        </div>
      ) : null}
    </>
  );
}
