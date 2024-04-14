/*

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
};

const CartPanelSlice = createSlice({
name: "cart",
initialState,
reducers: {
    add: (state, action) => {
        state.amount = state.amount + 1;
        const cartItem = state.cartItems.find(
            (cartItem) => cartItem.id === action.payload.id
        );
        cartItem
         ? (cartItem.amount = cartItem.amount + 1) 
         : state.cartItems.push({...action.payload,amount: 
         1 })
    },
    increase: (state,action) => {
        state.amount = state.amount + 1;
        const itemIndex = state.cartItems.findIndex(
            (cartItem) => (cartItem.id = action.payload.id)
    );
    state.cartItems[itemIndex].amount += 1
    let total = 0
    total = state.cartItems[itemIndex].amount * state
    cartItems.price;
    },
    decrease : (state,action) =>{
        const itemIndex = state.cartItems.findIndex(
            (cartItem) => (cartItem.id = action.payload.id)
        );
        state.cartItems[itemIndex].amount > 0 &&
        state.cartItems [itemIndex].amount-- && 
        state.amount++;
    },
  },
});

*/

import "../assets/css/cartpanel.css"
import CartItemCard from "./ProductCardMini";
import { useContext, useEffect } from "react";
import React from "react";
import { CartContext } from "../ContextList";
export default function CartPanel() {
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
        <div id="cart-panel" className="cart-panel-container">
            {data.length > 0 ? data.map((product, index) => {
                    return <div className="product-card" key={index}>
                    {product.product_name ? <h1><span>{localStorage.getItem('CartLocalStorage').split(",").filter(x => x==product.product_id).length}x </span>{product.product_name}</h1> : null}
                    {product.price ? <h2>{product.price}</h2> : null}
                    {product.images ? (
                      <p>IMAGES.. There would be a map function here or something..</p>
                    ) : null} 
                    </div>
                    })
                
             : null}
        </div>
    )
}
