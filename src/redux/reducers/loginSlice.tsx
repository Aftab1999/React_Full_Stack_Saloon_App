import { createSlice } from "@reduxjs/toolkit";
  

const loginSlice = createSlice({
    name: "login",
    initialState:  {
        data: null,
        otp: null,
    },
    reducers: {
        loginData:(state,action) => {
            state.data= action.payload
        },
        loginOtp:(state,action) => {
            state.otp= action.payload
        }
    }
})

export const {loginData,loginOtp} = loginSlice.actions
export default loginSlice.reducer