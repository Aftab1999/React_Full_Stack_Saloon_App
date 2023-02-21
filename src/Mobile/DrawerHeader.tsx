import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react"
import Navbar from "../Pages/Navbar"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"
import login from "../assets/login.png"
import loginicon from "../assets/loginicon.png"






const Header: React.FC = () => {
    const navigate = useNavigate();


    return (
        <>
               
            <Paper sx={{maxWidth:"100%"}}>
                <Grid container  sx={{ display: "flex", justifyContent: "left",alignItems:"center", width: "100%",backgroundColor:"FFFFFF" }}>
                    <Grid item >
                    <img style={{width:"200px",marginTop:"5px"}} src={logo} alt="logo" />
                    </Grid>
                    <Grid item  >
                        <Button sx={{ marginBottom:"3px"}} onClick={() => navigate("/login")}><img style={{width:"72px",marginLeft:-9.7}} src={loginicon} alt="loginicon" /></Button>
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