import { configureStore } from "@reduxjs/toolkit";
import ThemeReducer from "../slices/ThemeSlice";
import ProductReducer from "../slices/ProductsSlice";
import ExchangeReducer from "../slices/ExchangeSlice";

export const store = configureStore({
    reducer: {
        theme: ThemeReducer,
        products: ProductReducer,
        exchanges: ExchangeReducer,
    }
});