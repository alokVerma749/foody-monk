const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
    name: "account",
    initialState: {
        user: {
            isLoggedIn: false,
            name: "",
            email: "",
            address: ""
        }
    },
    reducers: {
        setAccount: (state, action) => {
            state.user.isLoggedIn = true;
            state.user.name = action.payload.name;
            state.user.email = action.payload.email;
            state.user.address = action.payload.address;
        },
        removeAccount: (state) => {
            state.user.isLoggedIn = false;
            state.user.name = "";
            state.user.email = "";
            state.user.address = "";
        },
    }
})

export const { setAccount, removeAccount } = userSlice.actions;
export default userSlice.reducer;