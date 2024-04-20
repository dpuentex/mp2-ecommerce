import React from "react";
import "../assets/css/cart.css";
import CartItemCard from "./CartItemCard";
import ProductCard from "./ProductCard";
import {
  CartItemDataContext,
  ProductContext,
  RetrieveCartItemData,
  StoreContext,
} from "../ContextList";
import { useContext, useEffect, useState } from "react";
// updated to be .. instead of .

// made export within this line below
export default function Cart() {
  function randomFace() {
    const messages = ["^.^", "UwU", "OwO", "O.O"];
    return messages[Math.floor(Math.random() * messages.length)];
  }
  // reset background color for cart
  document.documentElement.style.setProperty("--col1", "rgba(10,0,20,0.8");
  document.documentElement.style.setProperty("--col2", "rgba(0,20,10,0.8");
  document.documentElement.style.setProperty("--col3", "rgba(20,10,0,0.8");
  const [cartItemData, setCartItemData] = useContext(CartItemDataContext);
  const retrieveCartItemData = useContext(RetrieveCartItemData);
  const [storeData, setStoreData] = useContext(StoreContext);
  const [productData, setProductData] = useContext(ProductContext);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [confirmDelete2, setConfirmDelete2] = useState(false);

  const [originalCartContents, setOriginalCartContents] = useState([]);

  useEffect(() => {
    console.log("useeffecc cartItemData");
    if (originalCartContents.length == 0 && cartItemData[0]?.length > 0) {
      console.log(
        "REFRESHING ORIGINAL CART CONTENTS uwu - uwu - uwu - uwu - uwu - uwu - uwu - uwu"
      );
      setOriginalCartContents(cartItemData);
    }
  }, [cartItemData]);
console.log(!cartItemData[0]?.length > 0)
  return (
    <div className="cart-page">
      {!storeData[1]?.length > 0 && (
            <h1 className="loading">
              Please wait... Fetching stores. {randomFace()}
            </h1>
          )}
          {!productData?.length > 0 && (
            <h1 id="loading-products" className="loading">
              Please wait... Fetching products. {randomFace()}
            </h1>
          )}
      {originalCartContents[0]?.length > 0 ? (
        <div className="cart-item-container left-panel">
          

          {productData.length > 0 &&
            storeData[1].length > 0 &&
            originalCartContents[1].map((product, index) => {
              return <ProductCard key={index} product={product} showStore={true} />;
            })}
        </div>
      ) : null}
      
        {(originalCartContents[0]?.length > 0) && (storeData[1]?.length > 0) && (productData?.length) &&(<div className="right-panel"><div className="danger-buttons-container">
          <button
            className="glow-squish-button cart-button danger-button"
            onClick={() => {
              console.log("confirm del");
              console.log(confirmDelete2);
              if (confirmDelete2) {
                setOriginalCartContents(cartItemData);
                retrieveCartItemData();
                setConfirmDelete2(false);
              } else if (!confirmDelete2) {
                setConfirmDelete2(true);
              }
            }}
            onMouseLeave={() => setConfirmDelete2(false)}
          >
            {confirmDelete2
              ? "Confirm Remove Zero Quantity"
              : "Remove Zero Quantity Items"}
          </button>
          <button
            className="glow-squish-button cart-button danger-button"
            onClick={() => {
              console.log("confirm del");
              console.log(confirmDelete);
              if (confirmDelete) {
                localStorage.clear();
                retrieveCartItemData();
                setConfirmDelete(false);
              } else if (!confirmDelete) {
                setConfirmDelete(true);
              }
            }}
            onMouseLeave={() => setConfirmDelete(false)}
          >
            {confirmDelete
              ? "Confirm Remove All Items"
              : "Remove All From Cart"}
          </button>
        </div></div>)}
        {originalCartContents[0]?.length == 0 && <div className="no-items-in-cart">No Items In Cart.. </div>}
      
    </div>
  );
}
