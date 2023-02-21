import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Box, Button, Card, Container, Grid, InputLabel, Paper, TextField, Typography } from '@mui/material';
import { Label } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import OtpInput from 'react-otp-input';
// import { slide as Menu } from 'react-burger-menu';
// import './Sidebar.css';

const Login: React.FC = (props: any) => {

    let navigate = useNavigate();
    const [error, setError] = useState<any>(false);
    const [code, setCode] = useState("");
    const [data, setData] = useState<any>({
        mobile: '',
       
    });
    const { mobile} = data;

    const handleChangee = (code:any) => setCode(code);
    const handleChange = (e: any) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }
    const Submit = (e: any) => {
        e.preventDefault();
        console.log(data);
        console.log(data, "passcode:",code);

    }

    return (
        < >
            {/* <Menu> */}
            <Paper sx={{
                margin: 'auto',
                maxWidth: "100%",
                flexGrow: 1,
                borderRadius: "0px",
                padding: "50px 15px 170px 15px",


            }}>


                <Grid container sx={{ display: "flex", justifyContent: "center" }}>
                    <Grid item md={4} sm={6} xs={12}>



                        <form onSubmit={Submit}>
                            <Button onClick={() => navigate("/")} sx={{ color: "black" }}><CloseIcon sx={{ marginLeft: "-40px" }} /></Button>
                            <Typography variant='h5' textAlign="left" sx={{ fontWeight: "bolder" }}>Login</Typography>
                            <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "15px" }}>
                                <Button sx={{ backgroundColor: "#000000", color: "white", borderRadius: "0px", width: "100%" }}>I Am Customer</Button>
                                <Button sx={{ backgroundColor: "#FFF2E4", color: "black", borderRadius: "0px", width: "100%" }}>Salon</Button>
                            </Grid>
                            <InputLabel htmlFor="component-disabled" sx={{ fontSize: "14px", color: "black", marginTop: "10px" }}>Mobile No</InputLabel>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="mobile"
                                name="mobile"
                                autoComplete="Mobile"
                                value={mobile}
                                autoFocus
                                type="number"
                                placeholder="Mobile No"
                                onChange={handleChange}
                                sx={{ backgroundColor: "#F0F0F0" }}
                            />


                            <InputLabel htmlFor="component-disabled" sx={{ fontSize: "14px", color: "black", marginTop: "10px" }}>Passcode</InputLabel>
                            <OtpInput
                               
                               
                                value={code}
                                onChange={handleChangee}
                                numInputs={5}
                                separator={<span style={{ width: "8px" }}></span>}
                                isInputNum={true}
                                shouldAutoFocus={true}
                                inputStyle={{
                                    border: "1px solid transparent",
                                    borderRadius: "8px",
                                    width: "100%",
                                    height: "54px",
                                    fontSize: "12px",
                                    color: "#000",
                                    fontWeight: "400",
                                    caretColor: "blue",
                                    backgroundColor: "#F0F0F0",
                                    
                                }}

                                focusStyle={{
                                    border: "1px solid #CFD3DB",
                                    outline: "none"
                                }}
                            />


                            <Typography sx={{ textAlign: "right" }}><Button sx={{ textTransform: "capitalize", color: "#000000", textAlign: "center" }}>Forgot Passcode?</Button></Typography>
                            <Button  type="submit"
                                fullWidth
                                sx={{ backgroundColor: "#E7A356", color: "#FFFFFF" }} onClick={() => navigate("/dashbord")}>
                                LogIn
                            </Button>
                            <Typography sx={{ textAlign: "center", marginTop: "10px", color: "#88878F" }}>Don't Have Account?<Button sx={{ textTransform: "capitalize", color: "#000000" }} onClick={() => navigate("/registration")}>Register Now</Button></Typography>
                        </form>

                    </Grid>
                </Grid>

                {error ? <div>User not found</div> : null}

            </Paper>

            {/* </Menu> */}
        </>
    );
}

export default Login;