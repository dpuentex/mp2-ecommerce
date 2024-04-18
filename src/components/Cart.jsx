import React from "react";
import "../assets/css/cart.css";
import CartItemCard from "./CartItemCard";
import ProductCard from "./ProductCard";
import { CartItemDataContext, ProductContext, RetrieveCartItemData } from "../ContextList";
import { useContext, useEffect } from "react";
// updated to be .. instead of .

// made export within this line below
export default  function Cart() {
  const [cartItemData, setCartItemData] = useContext(CartItemDataContext)
  const retrieveCartItemData = useContext(RetrieveCartItemData)
  

  useEffect(() => {
    retrieveCartItemData()
}, [])


  return (
    <div className="cart-item-div">
      {cartItemData[0]?.length > 0 ? (
        <div className="cart-item-container">
          {cartItemData[1].map((product, index) => {
            return <ProductCard key={index} product={product} />;
          })}
        </div>
      ) : null}
    </div>
  );
}
