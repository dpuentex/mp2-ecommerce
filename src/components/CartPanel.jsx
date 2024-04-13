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
export default function CartPanel() {


    return (
        <div id="cart-panel">Cart Page Here.... hello from CartPanel.jsx component!</div>
    
    )
}
