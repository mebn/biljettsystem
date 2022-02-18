import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    ticketCount: 0
}

export const ticketCounterSlice = createSlice({
    name: 'ticketCounter',
    initialState,
    reducers: {
        increment(state) {
            state.ticketCount += 1;
        },
        decrement(state){
            state.ticketCount -= 1;
        }
    }
})

export const { increment, decrement } = ticketCounterSlice.actions;
export default ticketCounterSlice.reducer;