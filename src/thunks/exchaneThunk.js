import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const Exchange = createAsyncThunk('allExchanges', async (payload, { rejectWithValue }) => {


    try {
        const response = await axios('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
        return response.data;
    }
    catch (error) {
        return rejectWithValue(error.message);
    }


});

