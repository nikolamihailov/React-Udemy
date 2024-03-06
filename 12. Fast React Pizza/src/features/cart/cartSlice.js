import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action) {
            state.cart.push(action.payload);
        },
        deleteItem(state, action) {
            state.cart = state.cart.filter(item => item.pizzaId !== action.payload);
        },
        increaseItemQuantity(state, action) {
            const itemIdx = state.cart.findIndex(item => item.pizzaId === action.payload);
            state.cart[itemIdx].quantity++;
            state.cart[itemIdx].totalPrice = state.cart[itemIdx].quantity * state.cart[itemIdx].unitPrice;
        },
        decreaseItemQuantity(state, action) {
            const itemIdx = state.cart.findIndex(item => item.pizzaId === action.payload);
            state.cart[itemIdx].quantity--;
            state.cart[itemIdx].totalPrice = state.cart[itemIdx].quantity * state.cart[itemIdx].unitPrice;
        },
        clearCart(state) {
            state.cart = [];
        }
    }
});

export const { addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) =>
    state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
    state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);