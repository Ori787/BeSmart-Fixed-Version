import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    clicked: false,
};

const addDestinationClick = createSlice ({
    name: "addDestinationClicked",
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

export const DestinationclickActions = addDestinationClick.actions

export default addDestinationClick.reducer;