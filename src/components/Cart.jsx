import React from "react";
import "../assets/css/cart.css";
import CartItemCard from "./ProductCardMini";
import { CartContext } from "../ContextList";
import { useContext, useEffect } from "react";
// updated to be .. instead of .

// made export within this line below
export default  function Cart() {
  const useCartContext = useContext(CartContext)
  
  let [data, setData] = React.useState({});
  
  let items = localStorage.getItem("CartLocalStorage");

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
      const response = await fetch(
        `http://127.0.0.1:${3000}/products/productbyarray/${items}`
      );
      let responsedata = await response.json();
      setData(responsedata);
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
