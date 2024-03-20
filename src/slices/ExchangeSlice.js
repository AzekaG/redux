import { createSlice } from "@reduxjs/toolkit";
import { Exchange } from "../thunks/exchaneThunk";


const initialState = {
    exchanges: [],
    loading: 'idle',
    error: null
}


export const ExchangeSlice = createSlice({
    name: 'exchanges',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(Exchange.pending, (state) => {
                state.loading = 'pending'
            })
            .addCase(Exchange.fulfilled, (state, action) => {
                state.loading = 'fulfilled';
                state.exchanges = action.payload;
            })
            .addCase(Exchange.rejected, (state, action) => {
                state.loading = 'rejected';
                state.error = action.payload;
            })
    }
})

export default ExchangeSlice.reducer;