import React from "react";
import "../assets/css/cart.css";
import CartItemCard from "./CartItemCard";
// updated to be .. instead of .

// made export within this line below
export default function Cart() {
  let [data, setData] = React.useState({});
  //get localstorage
  let items = localStorage.getItem("CartLocalStorage");
  if (!items) {items = []; }

  console.log(items) 
    async function fetchProducts() {
      // fetch using dot env or 3000
      const response = await fetch(
        `http://127.0.0.1:${3000}/products/retrievecartbyarray/${items}`
      );
      let data = await response.json();
      setData(data);
      console.log(data);
    };

    fetchProducts();
  return (
    <div className="cart-item-div">
      {data.length > 0 ? (
        <div className="CartItemContainer">
          {data.map((product, index) => {
            return <CartItemCard key={index} product={product} />;
          })}
        </div>
      ) : null}
    </div>
  );
}
