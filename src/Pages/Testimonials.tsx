import { Block } from "@mui/icons-material";
import { Button, Card, CardContent, Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react"
import testimonialsback from "../assets/testimonialsback.jpg"
import testimonialsboyimg from "../assets/testimonialsboyimg.jpg"
import testimonialsgirlimg from "../assets/testimonialsgirlimg.png"
import "./style.css"




const Testimonials: React.FC = () => {



    return (
        <>

            <Paper sx={{
                margin: 'auto',
                maxWidth: "100%",
                flexGrow: 1,
                borderRadius: "0px",
                padding: "100px 15px",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${testimonialsback}?w=900&h=600&fit=crop&auto=format)`
            }}>
                <Typography sx={{ display: "block", justifyContent: "center", fontSize: "25px", textAlign: "center", color: "black", fontWeight: "bold", maxWidth: "100%" }}>Testimonials</Typography>
                <Typography sx={{ borderBottom: "4px solid #E7A356", width: "25px", marginTop: "10px", marginLeft: "610px" }}></Typography>



                <Grid container  sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "30px", margin: "0px", padding: "0px" }}>
                    <Grid item md={4.5} sm={6} xs={12} sx={{ marginTop: "30px",maxWidth:"100%",padding:"10px" }} >
                        <Card  sx={{ maxWidth: "100%", padding: '10px', display: "block", justifyContent: "center",backgroundColor:"#EAEDEA" }}>
                            {/* <img className="imagee" src={aaimg} style={{ width: "100%", height: "270px" }} alt="aaimg" /> */}
                            <CardContent sx={{ textAlign: "left", maxWidth: "100%" }}>
                                <Typography sx={{ fontSize: "14px", fontweight: "bold", color: "#939290", marginTop: "15px" }}>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. quis ipsum suspendisse ultrices gravida. risus commodo viverra maecenas</Typography>
                            </CardContent>

                        </Card>
                        <div className="triangle-downn"></div>
                        <Grid item sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "25px" }}>
                            <img src={testimonialsboyimg} alt="testimonialsboyimg" />
                            <Grid sx={{ width: "250px", marginLeft: "20px" }}>
                                <Typography sx={{ fontSize: "20px", fontWeight: "bolder" }}>Tony Show</Typography>
                                <Typography sx={{ fontSize: "12px" }}>Customer</Typography>
                            </Grid>

                        </Grid>
                    </Grid>

                    <Grid item md={4.5} sm={6} xs={12} sx={{ marginTop: "30px",maxWidth:"100%",padding:"10px" }}>
                        <Card sx={{ maxWidth: "100%", padding: '10px', display: "block", justifyContent: "center",backgroundColor:"black" }}>
                            {/* <img className="imagee" src={aaimg} style={{ width: "100%", height: "270px" }} alt="aaimg" /> */}
                            <CardContent sx={{ textAlign: "left", maxWidth: "100%" }}>
                                <Typography sx={{ fontSize: "14px", fontweight: "bold", color: "#939290", marginTop: "15px" }}>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. quis ipsum suspendisse ultrices gravida. risus commodo viverra maecenas</Typography>
                            </CardContent>
                        </Card>
                        <div className="triangle-down"></div>
                        <Grid item sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "25px" }}>
                            <img src={testimonialsgirlimg} alt="testimonialsboyimg" />
                            <Grid sx={{ width: "250px", marginLeft: "20px" }}>
                                <Typography sx={{ fontSize: "20px", fontWeight: "bolder" }}>Jennifer Lawrence</Typography>
                                <Typography sx={{ fontSize: "12px" }}>Customer</Typography>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>

            </Paper>


        </>
    )
}

export default Testimonials;













// import { Box, Button, Card, CardContent, Container, Grid, InputLabel, ListItemText, Paper, TextField, Typography } from "@mui/material";
// import React, { useState } from "react"
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import { useNavigate } from "react-router-dom";
// import logo from "../assets/logo.png"
// import login from "../assets/login.png"
// import DrawerHeader from "../Mobile/DrawerHeader";
// import { useMediaQuery, useTheme } from "@material-ui/core";
// import Navbar from "./Navbar";
// import aboutbackground from "../assets/aboutbackground.jpg"
// import { Divider, Drawer, IconButton, List, ListItem } from "@mui/material";
// import { Login } from "@mui/icons-material";
// import { Label } from '@mui/icons-material';
// import CloseIcon from '@mui/icons-material/Close';
// import OtpInput from 'react-otp-input';




// const Header: React.FC = () => {
//     const navigate = useNavigate();
//     const theme = useTheme();
//     const isMobile: any = useMediaQuery<any>(theme.breakpoints.down("md"));

//     const [openDrawer, setOpenDrawer] = useState(false);



//     const [state, setState] = React.useState<any>({
//         right: false,
//     });


//     const [error, setError] = useState<any>(false);
//     const [code, setCode] = useState("");
//     const [data, setData] = useState<any>({
//         mobile: '',

//     });
//     const { mobile } = data;

//     const handleChangee = (code: any) => setCode(code);
//     const handleChange = (e: any) => {
//         setData({ ...data, [e.target.name]: e.target.value });
//     }
//     const Submit = (e: any) => {
//         e.preventDefault();
//         console.log(data);
//         console.log(data, "passcode:", code);

//     }

//     const toggleDrawer = (anchor: any, open: any) => (event: any) => {
//         if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//             return;
//         }

//         setState({ ...state, [anchor]: open });
//     };

//     const list = (anchor: any) => (
//         <Box
//             sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 450 }}
//             role="presentation"
//             onClick={toggleDrawer(anchor, false)}
//             onKeyDown={toggleDrawer(anchor, false)}
//         >
//             <List>

//                 <ListItem button >
//                     <Paper sx={{
//                         margin: 'auto',
//                         maxWidth: "100%",
//                         flexGrow: 1,
//                         borderRadius: "0px",
//                         padding: "50px 15px 170px 15px",


//                     }}>


//                         <Grid container sx={{ display: "flex", justifyContent: "center" }}>
//                             <Grid item md={12} sm={6} xs={12}>



//                                 <form onSubmit={Submit}>
//                                     <Button onClick={() => navigate("/")} sx={{ color: "black" }}><CloseIcon sx={{ marginLeft: "-40px" }} /></Button>
//                                     <Typography variant='h5' textAlign="left" sx={{ fontWeight: "bolder" }}>Login</Typography>
//                                     <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "15px" }}>
//                                         <Button sx={{ backgroundColor: "#000000", color: "white", borderRadius: "0px", width: "100%" }}>I Am Customer</Button>
//                                         <Button sx={{ backgroundColor: "#FFF2E4", color: "black", borderRadius: "0px", width: "100%" }}>Salon</Button>
//                                     </Grid>
//                                     <InputLabel htmlFor="component-disabled" sx={{ fontSize: "14px", color: "black", marginTop: "10px" }}>Mobile No</InputLabel>
//                                     <TextField
//                                         variant="outlined"
//                                         margin="normal"
//                                         required
//                                         fullWidth
//                                         id="mobile"
//                                         name="mobile"
//                                         autoComplete="Mobile"
//                                         value={mobile}
//                                         autoFocus
//                                         type="number"
//                                         placeholder="Mobile No"
//                                         onChange={handleChange}
//                                         sx={{ backgroundColor: "#F0F0F0" }}
//                                     />


//                                     <InputLabel htmlFor="component-disabled" sx={{ fontSize: "14px", color: "black", marginTop: "10px" }}>Passcode</InputLabel>
//                                     <OtpInput


//                                         value={code}
//                                         onChange={handleChangee}
//                                         numInputs={5}
//                                         separator={<span style={{ width: "8px" }}></span>}
//                                         isInputNum={true}
//                                         shouldAutoFocus={true}
//                                         inputStyle={{
//                                             border: "1px solid transparent",
//                                             borderRadius: "8px",
//                                             width: "100%",
//                                             height: "54px",
//                                             fontSize: "12px",
//                                             color: "#000",
//                                             fontWeight: "400",
//                                             caretColor: "blue",
//                                             backgroundColor: "#F0F0F0",

//                                         }}

//                                         focusStyle={{
//                                             border: "1px solid #CFD3DB",
//                                             outline: "none"
//                                         }}
//                                     />


//                                     <Typography sx={{ textAlign: "right" }}><Button sx={{ textTransform: "capitalize", color: "#000000", textAlign: "center" }}>Forgot Passcode?</Button></Typography>
//                                     <Button type="submit"
//                                         fullWidth
//                                         sx={{ backgroundColor: "#E7A356", color: "#FFFFFF" }}>
//                                         LogIn
//                                     </Button>
//                                     <Typography sx={{ textAlign: "center", marginTop: "10px", color: "#88878F" }}>Don't Have Account?<Button sx={{ textTransform: "capitalize", color: "#000000" }} onClick={() => navigate("/registration")}>Register Now</Button></Typography>
//                                 </form>

//                             </Grid>
//                         </Grid>

//                         {error ? <div>User not found</div> : null}

//                     </Paper>
//                     <ListItemText />
//                 </ListItem>

//             </List>
//             <Divider />
//         </Box>
//     );

//     return (
//         <>
//             {isMobile ? (
//                 <DrawerHeader />

//             ) : (
//                 <>
//                     <Paper sx={{
//                         margin: 'auto',
//                         maxWidth: "100%",
//                         flexGrow: 1,
//                         borderRadius: "0px",


//                     }}>

//                         <Grid container sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "FFFFFF" }}>





//                             <Grid item md={2} sm={6} xs={12}>
//                                 <Box sx={{ width: "100%" }}>

//                                     <Grid item sx={{ Width: "100%" }}>
//                                         <img style={{ width: "250px", height: "100%" }} src={logo} alt="logo" />
//                                     </Grid>

//                                 </Box>
//                             </Grid>

//                             <Grid item md={8} sm={6} xs={12}>
//                                 <Box sx={{ width: '100%', textAlign: "center", marginLeft: "30px" }}>

//                                     <Grid item sx={{ color: "black", maxWidth: "100%" }}>
//                                         <Navbar />
//                                     </Grid>

//                                 </Box>
//                             </Grid>

//                             <Grid item md={2} sm={6} xs={12}>
//                                 <Box sx={{ width: "100%" }}>

//                                     <Grid item sx={{ width: "100%", height: "100%" }}>
//                                         {['right'].map((anchor: any) => (
//                                             <React.Fragment key={anchor}>
//                                                 <Button sx={{ display: "flex", alignItems: "center", float: "right" }} onClick={toggleDrawer(anchor, true)} ><img style={{ width: "140px", height: "100%" }} src={login}  alt="login" />{anchor}</Button>
//                                                 <Drawer
//                                                     anchor={anchor}
//                                                     open={state[anchor]}
//                                                     onClose={toggleDrawer(anchor, false)}
//                                                 >
//                                                     {list(anchor)}
//                                                 </Drawer>
//                                             </React.Fragment>
//                                         ))}
                                        
//                                     </Grid>

//                                 </Box>
//                             </Grid>

//                         </Grid>

//                     </Paper>

//                     <div>

//                     </div>


//                 </>
//             )}
//         </>
//     )
// }

// export default Header;


