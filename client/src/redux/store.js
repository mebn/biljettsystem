import { configureStore } from "@reduxjs/toolkit";
import ticketCounterReducer from "./ticketCounter";

export default configureStore({
    reducer: {
        ticketCounter: ticketCounterReducer
    }
});