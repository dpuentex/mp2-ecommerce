import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
};

const CartPanel = createSlice({
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
 },
});
export default function CartPanel() {
    return (
        <div>Cart Page Here.... hello from CartPanel.jsx component!</div>
    
    )
}
