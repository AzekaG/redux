import { configureStore } from "@reduxjs/toolkit";
import ThemeReducer from "../slices/ThemeSlice";
import ProductReducer from "../slices/ProductsSlice";

export const store = configureStore({
    reducer: {
        theme: ThemeReducer,
        products: ProductReducer,
    }
});