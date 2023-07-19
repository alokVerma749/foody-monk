import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.items = state.items.filter((cartItem) => cartItem?.menuItem?.card?.info?.id !== itemId);
        },
        clearCart: (state) => {
            state.items = [];
        }
    }
})
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;