import { CardContent, CardMedia, Grid, ImageListItem, Paper, Typography } from "@mui/material";
import { Box, textAlign } from "@mui/system";
import React, { Component } from "react";
import Slider from "react-slick";
import galleryaa from "../assets/galleryaa.png"
import aaimg from "../assets/aaimg.jpg"
import bbimg from "../assets/bbimg.jpg"
import ccimg from "../assets/ccimg.jpg"
import ddimg from "../assets/ddimg.jpg"
import eeimg from "../assets/eeimg.jpg"
import ffimg from "../assets/ffimg.jpg"
import ggimg from "../assets/ggimg.jpg"
import hhimg from "../assets/hhimg.jpg"
import teamleftimg from "../assets/teamleftimg.jpg"
import teamrightimg from "../assets/teamrightimg.jpg"
import personcut from "../assets/personcut.png"
import { makeStyles } from "@mui/styles";
import './style.css';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import { useMediaQuery, useTheme } from "@material-ui/core";
import DrawerTeam from "../Mobile/DrawerTeam";



const Services: React.FC = () => {

  // const classes = useStyles();
  const theme = useTheme();
  const isMobile: any = useMediaQuery<any>(theme.breakpoints.down("md"));

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      {isMobile ? (
        <DrawerTeam />

      ) : (
        <Paper sx={{
          margin: 'auto',
          maxWidth: "100%",
          flexGrow: 1,
          borderRadius: "0px",
          padding: '40px 170px',



        }}>
          <Typography sx={{ fontSize: "30px", fontWeight: "bold", textAlign: "center" }}> Our Expert Team </Typography>
          <div className="slide" style={{ padding: "10px", marginTop: "30px" }}>
            <Slider  {...settings}>

              {/* <Grid item md={4.5} sm={6} xs={12}>
                        <Box sx={{ width: "100%" }}>
                            <CardContent>
                                <Grid item sx={{ maxWidth: "100%" }}>
                                    <img style={{ width: "100%", height: "250px" }} src={aboutimg} alt="aboutimg" />
                                </Grid>
                            </CardContent>
                        </Box>
                    </Grid> */}

           
              

                <Grid item md={3} sm={6} xs={12}>
                            <Box sx={{ maxWidth: "100%", padding: '10px', display: "inline-block", justifyContent: "center" }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height= "318"
                                    image={teamleftimg}
                                />
                                {/* <img className="imagee" src={aaimg} style={{ width: "100%", height: "270px" }} alt="aaimg" /> */}
                                <CardContent sx={{ textAlign: "center", backgroundColor: "#F9E3C1", maxWidth: "100%" }}>
                                    <Typography sx={{ fontSize: "20px", fontweight: "bolder", color: "black" }}>Emma Wastson</Typography>
                                    <Typography sx={{ fontSize: "14px", fontweight: "bold", color:"#939290" }}>Haircut & Massage Specialist</Typography>
                                </CardContent>
                            </Box>
                </Grid>
             

              <Grid item md={3} sm={6} xs={12}>
                            <Box  sx={{ maxWidth: "100%", padding: '15px', display: "block" , justifyContent:"center" }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height= "318"
                                    image={personcut}
                                />
                                {/* <img className="imagee" src={aaimg} style={{ width: "100%", height: "270px" }} alt="aaimg" /> */}
                                <CardContent sx={{ textAlign: "center", backgroundColor: "black", maxWidth: "100%" }}>
                                    <Typography sx={{ fontSize: "20px", fontweight: "bolder", color: "white" }}>James Franco</Typography>
                                    <Typography sx={{ fontSize: "14px", fontweight: "bold", color:"#939290" }}>Haircut Specialist</Typography>
                                </CardContent>
                            </Box>
            </Grid>


             <Grid item md={3} sm={6} xs={12}>
                            <Box  sx={{ maxWidth: "100%", padding: '10px', display: "inline-block", justifyContent: "center" }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height= "318"
                                    image={teamrightimg}
                                />
                                {/* <img className="imagee" src={aaimg} style={{ width: "100%", height: "270px" }} alt="aaimg" /> */}
                                <CardContent sx={{ textAlign: "center", backgroundColor: "#F9E3C1", maxWidth: "100%" }}>
                                    <Typography sx={{ fontSize: "20px", fontweight: "bolder", color: "black" }}>James Franco</Typography>
                                    <Typography sx={{ fontSize: "14px", fontweight: "bold", color:"#939290" }}>Haircut Specialist</Typography>
                                </CardContent>
                            </Box>
            </Grid>

                        <Grid item md={3} sm={6} xs={12}>
                            <Box  sx={{ maxWidth: "100%", padding: '10px', display: "inline-block", justifyContent: "center" }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height= "318"
                                    image={teamleftimg}
                                />
                                {/* <img className="imagee" src={aaimg} style={{ width: "100%", height: "270px" }} alt="aaimg" /> */}
                                <CardContent sx={{ textAlign: "center", backgroundColor: "#F9E3C1", maxWidth: "100%" }}>
                                    <Typography sx={{ fontSize: "20px", fontweight: "bolder", color: "black" }}>James Franco</Typography>
                                    <Typography sx={{ fontSize: "14px", fontweight: "bold", color:"#939290" }}>Haircut Specialist</Typography>
                                </CardContent>
                            </Box>
                        </Grid>
             

                        <Grid item md={3} sm={6} xs={12}>
                            <Box  sx={{ maxWidth: "100%", padding: '15px', display: "block", justifyContent: "center" }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height= "318"
                                    image={personcut}
                                />
                                {/* <img className="imagee" src={aaimg} style={{ width: "100%", height: "270px" }} alt="aaimg" /> */}
                                <CardContent sx={{ textAlign: "center", backgroundColor: "black", maxWidth: "100%" }}>
                                    <Typography sx={{ fontSize: "20px", fontweight: "bolder", color: "white" }}>James Franco</Typography>
                                    <Typography sx={{ fontSize: "14px", fontweight: "bold", color:"#939290" }}>Haircut Specialist</Typography>
                                </CardContent>
                            </Box>
                        </Grid>


                        <Grid item md={3} sm={6} xs={12}>
                            <Box  sx={{ maxWidth: "100%", padding: '10px', display: "inline-block", justifyContent: "center" }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height= "318"
                                    image={teamrightimg}
                                />
                                {/* <img className="imagee" src={aaimg} style={{ width: "100%", height: "270px" }} alt="aaimg" /> */}
                                <CardContent sx={{ textAlign: "center", backgroundColor: "#F9E3C1", maxWidth: "100%" }}>
                                    <Typography sx={{ fontSize: "20px", fontweight: "bolder", color: "black" }}>James Franco</Typography>
                                    <Typography sx={{ fontSize: "14px", fontweight: "bold", color:"#939290" }}>Haircut Specialist</Typography>
                                </CardContent>
                            </Box>
                        </Grid>




                        <Grid item md={3} sm={6} xs={12}>
                            <Box  sx={{ maxWidth: "100%", padding: '10px', display: "inline-block", justifyContent: "center" }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height= "318"
                                    image={teamleftimg}
                                />
                                {/* <img className="imagee" src={aaimg} style={{ width: "100%", height: "270px" }} alt="aaimg" /> */}
                                <CardContent sx={{ textAlign: "center", backgroundColor: "#F9E3C1", maxWidth: "100%" }}>
                                    <Typography sx={{ fontSize: "20px", fontweight: "bolder", color: "black" }}>James Franco</Typography>
                                    <Typography sx={{ fontSize: "14px", fontweight: "bold", color:"#939290" }}>Haircut Specialist</Typography>
                                </CardContent>
                            </Box>
                        </Grid>
             

                       <Grid item md={3} sm={6} xs={12}>
                            <Box  sx={{ maxWidth: "100%", padding: '15px', display: "block", justifyContent: "center" }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height= "318"
                                    image={personcut}
                                />
                                {/* <img className="imagee" src={aaimg} style={{ width: "100%", height: "270px" }} alt="aaimg" /> */}
                                <CardContent sx={{ textAlign: "center", backgroundColor: "black", maxWidth: "100%" }}>
                                    <Typography sx={{ fontSize: "20px", fontweight: "bolder", color: "white" }}>James Franco</Typography>
                                    <Typography sx={{ fontSize: "14px", fontweight: "bold", color:"#939290" }}>Haircut Specialist</Typography>
                                </CardContent>
                            </Box>
                        </Grid>


                    <Grid item md={3} sm={6} xs={12}>
                            <Box  sx={{ maxWidth: "100%", padding: '10px', display: "inline-block", justifyContent: "center" }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height= "318"
                                    image={teamrightimg}
                                />
                                {/* <img className="imagee" src={aaimg} style={{ width: "100%", height: "270px" }} alt="aaimg" /> */}
                                <CardContent sx={{ textAlign: "center", backgroundColor: "#F9E3C1", maxWidth: "100%" }}>
                                    <Typography sx={{ fontSize: "20px", fontweight: "bolder", color: "black" }}>James Franco</Typography>
                                    <Typography sx={{ fontSize: "14px", fontweight: "bold", color:"#939290" }}>Haircut Specialist</Typography>
                                </CardContent>
                            </Box>
                    </Grid>
            
              
             

              
            </Slider>
          </div>
        </Paper>
      )}
    </>
  );

}

export default Services;
















// import { Box, Button, Card, CardContent, Container, Grid, InputLabel, Paper, TextField, Typography } from "@mui/material";
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

//     const [code, setCode] = useState("");
//     const [error, setError] = useState<any>(false);
//     const [data, setData] = useState<any>({
//         mobile: '',
//         password: ''
//     });
//     const { mobile, password } = data;

//     const handleChangee = (code:any) => setCode(code);
//     const handleChange = (e: any) => {
//         setData({ ...data, [e.target.name]: e.target.value });
//     }
//     const Submit = (e: any) => {
//         e.preventDefault();
//         console.log(data);
//         console.log(data, "passcode:",code);
//     }

//     return (
//         <>
//             {isMobile ? (
//                 <DrawerHeader />

//             ) : (
//                 <>

//                     <Drawer

//                         open={openDrawer}
//                         onClose={() => setOpenDrawer(false)}
//                     >
//                         <List style={{ width: "450px" }}>
//                             <ListItem onClick={() => setOpenDrawer(false)}>

//                             <Paper sx={{
//                     margin: 'auto',
//                     maxWidth: "100%",
//                     flexGrow: 1,
//                     borderRadius: "0px",
//                     padding: "10px 15px",


//                 }}>


//                     <Grid container sx={{ display: "flex", justifyContent: "center" }}>
//                         <Grid item md={12} sm={6} xs={12}>
                            


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
                               
                               
//                                 value={code}
//                                 onChange={handleChangee}
//                                 numInputs={5}
//                                 separator={<span style={{ width: "8px" }}></span>}
//                                 isInputNum={true}
//                                 shouldAutoFocus={true}
//                                 inputStyle={{
//                                     border: "1px solid transparent",
//                                     borderRadius: "8px",
//                                     width: "100%",
//                                     height: "54px",
//                                     fontSize: "12px",
//                                     color: "#000",
//                                     fontWeight: "400",
//                                     caretColor: "blue",
//                                     backgroundColor: "#F0F0F0",
                                    
//                                 }}

//                                 focusStyle={{
//                                     border: "1px solid #CFD3DB",
//                                     outline: "none"
//                                 }}
//                             />


//                                     <Typography sx={{ textAlign: "right" }}><Button sx={{ textTransform: "capitalize", color: "#000000", textAlign: "center" }}>Forgot Passcode?</Button></Typography>
//                                     <Button type="submit"
//                                         fullWidth
//                                         sx={{ backgroundColor: "#E7A356", color: "#FFFFFF" }}>
//                                         LogIn
//                                     </Button>
//                                     <Typography sx={{ textAlign: "center", marginTop: "10px", color: "#88878F" }}>Don't Have Account?<Button sx={{ textTransform: "capitalize", color: "#000000" }} onClick={() => navigate("/registration")}>Register Now</Button></Typography>
//                                 </form>
                         
//                         </Grid>
//                     </Grid>

//                     {error ? <div>User not found</div> : null}

//                 </Paper>

//                             </ListItem>
//                             <Divider />
//                         </List>
//                     </Drawer>

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
//                                         <Button sx={{ display: "flex", alignItems: "center", float: "right" }} onClick={() => setOpenDrawer(!openDrawer)} ><img style={{ width: "140px", height: "100%" }} onClick={() => setOpenDrawer(!openDrawer)} src={login} alt="login" /></Button>
//                                     </Grid>

//                                 </Box>
//                             </Grid>

//                         </Grid>

//                     </Paper>
//                 </>
//             )}
//         </>
//     )
// }

// export default Header;


