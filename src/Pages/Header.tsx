import { Autocomplete, Checkbox, Box, Button, Card, CardContent, Container, Grid, InputLabel, ListItemText, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"
import loginn from "../assets/loginn.png"
import DrawerHeader from "../Mobile/DrawerHeader";
import { useMediaQuery, useTheme } from "@material-ui/core";
import Navbar from "./Navbar";
import aboutbackground from "../assets/aboutbackground.jpg"
import { Divider, Drawer, IconButton, List, ListItem } from "@mui/material";
import { AltRouteTwoTone, Login } from "@mui/icons-material";
import { Label } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import OtpInput from 'react-otp-input';
import axios from "axios";
import {useDispatch} from "react-redux"
import { loginData } from "../redux/reducers/loginSlice";
import {login} from "../redux/actions/loginActions"
import { useSelector } from "react-redux";




const options = ['Maharashtra', 'Uttar Pradesh', 'Hydrabadh'];
const Header: React.FC = () => {

    const theme = useTheme();
    const isMobile: any = useMediaQuery<any>(theme.breakpoints.down("md"));

    const [openDrawer, setOpenDrawer] = useState(false);
    const [otp , setOtp] =useState<any>(null);

    const [otpScreen, setOtpScreen] = useState<any>(false);
    const [state, setState] = React.useState<any>({
        right: false,
    });


    const [error, setError] = useState<any>(false);
    const [code, setCode] = useState("");
    const [username, setUsername] = useState<any>("")
    const dispatch = useDispatch<any>(); 
    const otpres = useSelector((state:any)=> state.login.otp)


    const handleChangee = (code: any) => setCode(code);

    const Submit = (e: any) => {
        e.preventDefault();
        console.log(username);
        dispatch(loginData(username))
        dispatch(login(username))
        setOtpScreen(true)

        // axios

        //     .post('https://extended-retail-app.herokuapp.com/api/customer/getOtp', { username })
        //     .then(res => {
        //         console.log("hi", res.data.otp); 
        //         if (res.data.otp) {
        //             setOtp(res.data.otp)
        //            setOtpScreen(true)
        //             // navigate("/home");
        //         }
        //     }).catch(err => {
        //         setError({ error: true });
        //         console.log(err);
        //     });

    }

    const handleOtpSubmit = () => {
        console.log({username,otpres})
    //   let otpCode = otp
        if (otpres===code) {
            // toggleDrawer(anchor, false)
            alert("success")
             navigate("/dashbord")
        }else {
            alert("invalid OTP")
        }
        console.log("code",otpres)
        
    }  

    const [value, setValue] = React.useState<any>(options[0]);
    const [inputValue, setInputValue] = React.useState<any>('');
    let navigate = useNavigate();
    const [code1, setCode1] = useState("");
    const [error1, setError1] = useState<any>(false);
    const [data1, setData1] = useState<any>({
        name: '',
        mobile1: '',
        email: ''
    });
    const [drawer, setDrawer] = useState(false);

    const [state1, setState1] = React.useState<any>({
        right: false,
    });
    // const { name, mobile1, email } = data;
    const handleChangee1 = (code: any) => setCode(code);
    // const handleChange1 = (e: any) => {
    //     setData({ ...data, [e.target.name]: e.target.value });
    // }
    const Submit1 = (e: any) => {
        e.preventDefault();
        // console.log(data);
        // console.log(data, "passcode:", code);
        alert("OTP send");

    }


    const toggleDrawer = (anchor: any, open: any) => (event: any) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor: any) => (
        <>
            {!drawer ?
                <Box 
                    sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 450 }}
                    role="presentation"
                // onClick={toggleDrawer(anchor, false)}
                // onKeyDown={toggleDrawer(anchor, false)}
                >
                    <List >

                        <ListItem button sx={{backgroundColor:"white"}}>
                            <Box sx={{
                                margin: 'auto',
                                maxWidth: "100%",
                                flexGrow: 1,
                                borderRadius: "0px",
                                padding: "50px 15px 170px 15px",
                                


                            }}>


                                <Grid container sx={{ display: "flex", justifyContent: "center" }}>
                                 {!otpScreen ?
                                    <Grid item md={12} sm={6} xs={12}>



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
                                                name="username"
                                                autoComplete="Mobile"
                                                value={username}
                                                autoFocus
                                                type="number"
                                                placeholder="Mobile No"
                                                onChange={(e) => setUsername(e.target.value)}
                                                sx={{ backgroundColor: "#F0F0F0" }}
                                            />

                                            <Button type="submit"
                                                fullWidth
                                                sx={{ backgroundColor: "#E7A356", color: "#FFFFFF" }}>
                                                Get OTP
                                            </Button>
                                        </form>
                                    </Grid>
                                    :
                                    <Grid>

                                        <InputLabel htmlFor="component-disabled" sx={{ fontSize: "14px", color: "black", marginTop: "10px" }}>Passcode</InputLabel>
                                        <OtpInput

                                            isInputSecure={true}
                                            value={code}
                                            onChange={handleChangee}
                                            numInputs={4}
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

                                        <Button type="submit" onClick={() => {handleOtpSubmit()}}
                                            fullWidth
                                            sx={{ backgroundColor: "#E7A356", color: "#FFFFFF", marginTop:"15px" }}>
                                            Login
                                        </Button>

                                    </Grid>
                                    }


                                    <Typography sx={{ textAlign: "right" }}><Button sx={{ textTransform: "capitalize", color: "#000000", textAlign: "center" }}>Forgot Passcode?</Button></Typography>

                                    <Typography sx={{ textAlign: "center", marginTop: "10px", color: "#88878F" }}>Don't Have Account?<Button sx={{ textTransform: "capitalize", color: "#000000" }} onClick={() => setDrawer(true)} >Register Now</Button></Typography>



                                </Grid>

                                {error ? <div>User not found</div> : null}

                            </Box>
                            <ListItemText />
                        </ListItem>

                    </List>
                    <Divider />
                </Box>

                :


                <Box
                    sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 450 }}
                    role="presentation"
                // onClick={toggleDrawer(anchor, false)}
                // onKeyDown={toggleDrawer(anchor, false)}
                >
                    <List>

                        <ListItem button >
                            <Paper sx={{
                                margin: 'auto',
                                maxWidth: "100%",
                                flexGrow: 1,
                                borderRadius: "0px",
                                padding: "10px 15px",


                            }}>


                                <Grid container sx={{ display: "flex", justifyContent: "center" }}>
                                    <Grid item md={12} sm={6} xs={12}>


                                        <form onSubmit={Submit1}>
                                            <Button onClick={() => navigate("/")} sx={{ color: "black" }}><CloseIcon sx={{ marginLeft: "-40px" }} /></Button>
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
                                                // value={name}
                                                autoFocus
                                                type="text"
                                                // onChange={handleChange1}
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
                                                // value={mobile}
                                                autoFocus
                                                type="number"
                                                placeholder="Mobile No"
                                                // onChange={handleChange1}
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
                                                // value={email}
                                                autoFocus
                                                type="email"
                                                // onChange={handleChange1}
                                                sx={{ backgroundColor: "#F0F0F0" }}
                                            />

                                            <InputLabel htmlFor="component-disabled" sx={{ fontSize: "14px", color: "black", marginTop: "10px" }}>Passcode</InputLabel>
                                            <OtpInput


                                                value={code}
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

                                            <InputLabel htmlFor="component-disabled" sx={{ fontSize: "14px", color: "black", marginTop: "10px" }}>Confirm Passcode</InputLabel>
                                            <OtpInput


                                                value={code}
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


                                            <Typography sx={{ textAlign: "left", marginLeft: "-19px" }}><Button sx={{ textTransform: "capitalize", color: "#000000", textAlign: "center" }}><Checkbox defaultChecked />Agree Terms & Conditions</Button></Typography>
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

                        </ListItem>
                    </List>
                    <Divider />
                </Box>
            }
        </>
    );


    console.log("otpres",otpres)
    return (
        <>
            {isMobile ? (
                <DrawerHeader />

            ) : (
                <>
                    <Paper sx={{
                        margin: 'auto',
                        maxWidth: "100%",
                        flexGrow: 1,
                        borderRadius: "0px",


                    }}>

                        <Grid container sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "FFFFFF" }}>





                            <Grid item md={2} sm={6} xs={12}>
                                <Box sx={{ width: "100%" }}>

                                    <Grid item sx={{ Width: "100%" }}>
                                        <img style={{ width: "250px", height: "100%" }} src={logo} alt="logo" />
                                    </Grid>

                                </Box>
                            </Grid>

                            <Grid item md={8} sm={6} xs={12}>
                                <Box sx={{ width: '100%', textAlign: "center", marginLeft: "30px" }}>

                                    <Grid item sx={{ color: "black", maxWidth: "100%" }}>
                                        <Navbar />
                                    </Grid>

                                </Box>
                            </Grid>

                            <Grid item md={2} sm={6} xs={12}>
                                <Box sx={{ width: "100%" }}>

                                    <Grid item sx={{ width: "100%", height: "100%" }}>
                                        {['right'].map((anchor: any) => (
                                            <React.Fragment key={anchor}>
                                                <Button sx={{ display: "flex", alignItems: "center", float: "right" }} onClick={toggleDrawer(anchor, true)} ><img style={{ width: "140px", height: "100%" }} src={loginn} alt="login" /></Button>
                                                <Drawer
                                                    anchor={anchor}
                                                    open={state[anchor]}
                                                    onClose={toggleDrawer(anchor, false)}
                                                >
                                                    {list(anchor)}
                                                </Drawer>
                                            </React.Fragment>
                                        ))}

                                    </Grid>

                                </Box>
                            </Grid>

                        </Grid>

                    </Paper>

                    <div>

                    </div>


                </>
            )}
        </>
    )
}

export default Header;


