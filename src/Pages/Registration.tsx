import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Autocomplete, Box, Button, Card, Checkbox, Container, Grid, InputLabel, Paper, TextField, Typography } from '@mui/material';
import { Label } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import OtpInput from 'react-otp-input';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const options = ['Maharashtra', 'Uttar Pradesh', 'Hydrabadh'];

const Registration: React.FC = (props: any) => {

    const [value, setValue] = React.useState<any>(options[0]);
    const [inputValue, setInputValue] = React.useState<any>('');
    let navigate = useNavigate();
    const [code, setCode] = useState("");
    const [code1, setCode1] = useState("");
    const [error, setError] = useState<any>(false);
    const [data, setData] = useState<any>({
        name: '',
        mobile: '',
        email: ''
    });
    const { name, mobile, email } = data;
    const handleChangee = (code: any) => setCode(code);
    const handleChangee1 = (code1: any) => setCode1(code1);
    const handleChange = (e: any) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }
    
    const Submit = (e: any) => {
        e.preventDefault();
        console.log(data);
        console.log(data, "passcode:", code);

    }

    

    return (
        < >

            <Paper sx={{
                margin: 'auto',
                maxWidth: "100%",
                flexGrow: 1,
                borderRadius: "0px",
                padding: "10px 15px",


            }}>


                <Grid container sx={{ display: "flex", justifyContent: "center" }}>
                    <Grid item md={4} sm={6} xs={12}>
                       

                            <form onSubmit={Submit}>
                                <Button onClick={() => navigate("/login")} sx={{ color: "black" }}><CloseIcon sx={{ marginLeft: "-40px" }} /></Button>
                                <Typography variant='h5' textAlign="left" sx={{ fontWeight: "bolder" }}>Registration</Typography>


                                <InputLabel htmlFor="component-disabled" sx={{ fontSize: "14px", color: "black", marginTop: "10px" }}>Full Name</InputLabel>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="name"
                                    name="name"
                                    autoComplete="name"
                                    value={name}
                                    autoFocus
                                    type="text"
                                    onChange={handleChange}
                                    sx={{ backgroundColor: "#F0F0F0" }}
                                />

                                <InputLabel htmlFor="component-disabled" sx={{ fontSize: "14px", color: "black", marginTop: "10px" }}>Mobile No</InputLabel>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="Mobile"
                                    name="mobile"
                                    autoComplete="mobile"
                                    value={mobile}
                                    autoFocus
                                    type="number"
                                    placeholder="Mobile No"
                                    onChange={handleChange}
                                    sx={{ backgroundColor: "#F0F0F0" }}
                                />

                                <InputLabel htmlFor="component-disabled" sx={{ fontSize: "14px", color: "black", marginTop: "10px" }}>Email</InputLabel>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    name="email"
                                    autoComplete="email"
                                    value={email}
                                    autoFocus
                                    type="email"
                                    onChange={handleChange}
                                    sx={{ backgroundColor: "#F0F0F0" }}
                                />

                                <InputLabel htmlFor="component-disabled" sx={{ fontSize: "14px", color: "black", marginTop: "10px" }}>Passcode</InputLabel>
                                <OtpInput

                                    isInputSecure={true}
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

                                <InputLabel htmlFor="component-disabled" sx={{ fontSize: "14px", color: "black", marginTop: "10px" }}>Confirm Passcode</InputLabel>
                                <OtpInput

                                    isInputSecure={true}
                                    value={code1}
                                    onChange={handleChangee1}
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




                                <InputLabel htmlFor="component-disabled" sx={{ fontSize: "14px", color: "black", marginTop: "10px" }}>State</InputLabel>
                                <Autocomplete
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                    inputValue={inputValue}
                                    onInputChange={(event, newInputValue) => {
                                        setInputValue(newInputValue);
                                    }}
                                    id="controllable-states-demo"
                                    options={options}
                                    sx={{ width: "100%" }}
                                    renderInput={(params) => <TextField {...params} />}
                                />


                                <Typography sx={{ textAlign: "left", marginLeft: "-19px" }}><Button sx={{ textTransform: "capitalize", color: "#000000", textAlign: "center" }}><Checkbox {...label} defaultChecked />Agree Terms & Conditions</Button></Typography>
                                <Button type="submit"
                                    fullWidth
                                    sx={{ backgroundColor: "#E7A356", color: "#FFFFFF" }}>
                                    REGISTER NOW
                                </Button>

                            </form>
                   
                    </Grid>
                </Grid>

                {error ? <div>User not found</div> : null}

            </Paper>


        </>
    );
}

export default Registration;