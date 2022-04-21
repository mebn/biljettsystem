import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    loggedIn: false
}

export const loggedInSlice = createSlice({
    name: 'loggedIn',
    initialState,
    reducers: {
        setLoggedIn(state) {
            state.loggedIn = true;
        },
        setLoggedOut(state){
            state.loggedIn = false;
        }
    }
})

export const { setLoggedIn, setLoggedOut } = loggedInSlice.actions;
export default loggedInSlice.reducer;