import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react"
import Navbar from "../Pages/Navbar"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"
import login from "../assets/login.png"
import loginicon from "../assets/loginicon.png"
import NotificationsIcon from '@mui/icons-material/Notifications';
import profileimg from "../assets/profileimg.jpg"






const Header: React.FC = () => {
    const navigate = useNavigate();


    return (
        <>

            <Paper sx={{ maxWidth: "100%" }}>
                <Grid container sx={{ display: "flex", justifyContent: "left", alignItems: "center", width: "100%", backgroundColor: "FFFFFF" }}>
                    <Grid item >
                        <img style={{ width: "180px", marginTop: "5px" }} src={logo} alt="logo" />
                    </Grid>
                    <Grid item >
                        <Box sx={{ width: "100%" }}>

                            <Grid item sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <img style={{ width: "50px",marginLeft:"5px" }} src={profileimg} alt="profileimg" />
                                </Grid>
                                <Button><NotificationsIcon sx={{ color: "black" }} /></Button>
                            </Grid>

                        </Box>
                    </Grid>
                    <Grid item  >
                        <Navbar />
                    </Grid>
                </Grid>
            </Paper>

        </>
    )
}

export default Header;