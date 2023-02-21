import { Autocomplete, Checkbox, Box, Button, Card, CardContent, Container, Grid, InputLabel, ListItemText, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Navigate, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"
import profileimg from "../assets/profileimg.jpg"
import login from "../assets/login.png"
import DrawerHeader from "../MobileDashbord/DrawerHeader";
import { useMediaQuery, useTheme } from "@material-ui/core";
import Navbar from "./Navbar";
import aboutbackground from "../assets/aboutbackground.jpg"
import { Divider, Drawer, IconButton, List, ListItem } from "@mui/material";
import { AltRouteTwoTone, Login } from "@mui/icons-material";
import { Label } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import OtpInput from 'react-otp-input';
import axios from "axios";
import NotificationsIcon from '@mui/icons-material/Notifications';




const Header: React.FC = () => {

    const theme = useTheme();
    const navigate = useNavigate();
    const isMobile: any = useMediaQuery<any>(theme.breakpoints.down("md"));

    


    
    


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

                                    <Grid item sx={{display:"flex", justifyContent:"center",alignItems:"center"}}>
                                        <Grid sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                            <img style={{width:"50px"}} src={profileimg} alt="profileimg" />
                                            <Typography sx={{marginLeft:"5px",fontWeight:"bold"}}><Button sx={{color:"black"}} onClick={() => navigate("/profile")}>Profile</Button></Typography>
                                        </Grid>
                                        <Button><NotificationsIcon sx={{color:"black"}} /></Button>
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


