import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { loginOtp } from "../reducers/loginSlice";

export const login = createAsyncThunk("login/login", async (username: any, { dispatch }) => {
    try {
        const res:any = await axios.post('https://extended-retail-app.herokuapp.com/api/customer/getOtp', { username })
            .then((data: any) =>   data.data )
               
                // console.log("data", data);
            if (res.otp) {
                dispatch(loginOtp(res.otp))
            }

            return res
    } catch(err) {
        console.log(err)
    }
})