import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    clicked: false,
};

const addUserClicked = createSlice ({
    name: "addUserClicked",
    initialState,
    reducers: {
        didClick(state) {
            state.clicked = true;
        },
        didNotClick(state) {
            state.clicked = false;
},
    },
});

export const UserclickActions = addUserClicked.actions;

export default addUserClicked.reducer;