import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    initialState: {
        value: false
    },
    name: "login",
    reducers:{
        login: (state) =>{
            state.value=true
        },
        logout: (state)=>{
            state.value=false
        }
    }
})

export const {login, logout} = loginSlice.actions

export default loginSlice.reducer