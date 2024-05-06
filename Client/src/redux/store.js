import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./reducers";

const store = configureStore({
    reducer:{
        language: languageReducer,
    }
})

export default store;