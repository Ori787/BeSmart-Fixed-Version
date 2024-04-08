import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import addUserClicked from "./addUserClicked";
import addDestinationClick from "./addDestinationClick";


const store = configureStore({
reducer: {
    authSlice: authSlice,
    addUserClicked: addUserClicked,
    addDestinationClick: addDestinationClick,
},
});


export default store;