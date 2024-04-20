import React from "react";
import "../assets/css/cart.css";
import CartItemCard from "./CartItemCard";
import ProductCard from "./ProductCard";
import { CartItemDataContext, ProductContext, RetrieveCartItemData } from "../ContextList";
import { useContext, useEffect } from "react";
// updated to be .. instead of .

// made export within this line below
export default  function Cart() {
  // reset background color for cart
  document.documentElement.style.setProperty('--col1', 'rgba(10,0,20,0.8');
  document.documentElement.style.setProperty('--col2', 'rgba(0,20,10,0.8');
  document.documentElement.style.setProperty('--col3', 'rgba(20,10,0,0.8');
  const [cartItemData, setCartItemData] = useContext(CartItemDataContext)
  const retrieveCartItemData = useContext(RetrieveCartItemData)
  

  useEffect(() => {
    // retrieveCartItemData()
}, [])

  console.log("cartjsx")
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
