import React from "react";
import "../assets/css/cart.css";
import CartItemCard from "./CartItemCard";
import { CartContext } from "../ContextList";
import { useContext, useEffect } from "react";
// updated to be .. instead of .

// made export within this line below
export default  function Cart() {
  const [cartContents, setCartContents] = useContext(CartContext)
  
  let [data, setData] = React.useState({});
  
  let items = localStorage.getItem("CartLocalStorage");

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    console.log("fetching cart items")
    if (!items || items.length == 0 || items == "") return
    const response = await fetch(
      `https://7rwcnp46mg.execute-api.us-west-2.amazonaws.com/staging/products/productbyarray/${items}`
    );
    let responsedata = await response.json();
    setData(responsedata);
    setCartContents(items.split(","))
  }


  return (
    <div className="cart-item-div">
      {data.length > 0 ? (
        <div className="cart-item-container">
          {data.map((product, index) => {
            return <CartItemCard key={index} product={product} />;
          })}
        </div>
      ) : null}
    </div>
  );
}
