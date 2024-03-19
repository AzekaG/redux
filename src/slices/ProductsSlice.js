//здесь будет обьект, в котором будут храниться наши товары

import { createSlice } from "@reduxjs/toolkit"
import { Products } from "../thunks/productsThunk"

//и полностью будет описывать асинхронный подход
const initialState = {
    products: [],
    loading: 'idle',
    error: null
}

//extraReducers - метод, принимающий билдер , через который мы добавляем обработчики нашего асинхронного запроса
export const ProductsSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: (builder) => {
        //билдер(что у нас происходит , какая функция будет выполняться.По умолчанию функция принимает состояние и экшн)
        builder
            .addCase(Products.pending, (state) => {
                state.loading = 'pending'
            })//fulfilled срабатывает когада успешн ополучаем данные
            .addCase(Products.fulfilled, (state, action) => {
                state.loading = 'fulfilled';
                state.products = action.payload;
            })
            .addCase(Products.rejected, (state, action) => {
                state.loading = 'rejected';
                state.error = action.payload;
            })
    }
})

//делимся состоянием.
export default ProductsSlice.reducer;