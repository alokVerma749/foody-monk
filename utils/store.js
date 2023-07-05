import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cartSlice";
import userSlice from "./userSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        account: userSlice,
    }
})

export default store;