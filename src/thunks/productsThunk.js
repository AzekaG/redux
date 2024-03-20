//в етом файле прописываем все асинхронные функции для работы с продуктами

//если мы хотим работать с асинхронными запросами, то мы должны
//прописать сам асинхронный запрос : 

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//когда выполняем запрос через аксиос, ответ сразу попадает в response.data
export const Products = createAsyncThunk('allProducts', async (payload, { rejectWithValue }) => {

    try {
        const response = await axios('https://fakestoreapi.com/products');
        return response.data;
    }
    catch (error) {

        return rejectWithValue(error.message);
    }
});



//мы должны етот асинхронный запрос обрабатывать как промис







