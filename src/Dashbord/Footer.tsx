import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react"
import footerlogo from "../assets/footerlogo.png"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import footerbackgroundimg from "../assets/footerbackgroundimg.jpg"
import { useMediaQuery, useTheme } from "@material-ui/core";


const Footer: React.FC = () => {


    const theme = useTheme();
    const isMobile: any = useMediaQuery<any>(theme.breakpoints.down("md"));

    return (
        <>

           
                <footer>
                    <Paper sx={{
                        backgroundImage: `url(${footerbackgroundimg})`,
                        margin: 'auto',
                        maxWidth: "100%",
                        flexGrow: 1,
                        borderRadius: "0px",
                        padding: "90px 15px 20px 15px"
                    }}>


                        <Grid container spacing={10} sx={{ display: "flex", justifyContent: "center" }}>
                            <Grid item md={6} sm={6} xs={12} sx={{ display: "flex", justifyContent: "center",textAlign:"center" }}>
                                <Box maxWidth="100%">
                                    <Grid item sx={{ maxWidth: "100%", display: "block", justifyContent: "center" }}>
                                        <img src={footerlogo} style={{ width: "150px", height: "60px" }} alt="logo" />
                                        <Typography sx={{ maxWidth: "100%", color: "#939290", marginTop: "20px", fontSize: "14px" }}>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt ut labore et dolore magna aliqua.</Typography>
                                        <Box sx={{ color: "white", marginTop: "28px" }}><InstagramIcon /><FacebookIcon sx={{ marginLeft: "10px" }} /><YouTubeIcon sx={{ marginLeft: "10px" }} /></Box>
                                    </Grid>
                                </Box>
                            </Grid>
                            </Grid>

                            

                        <Grid item md={12} sm={6} xs={12} maxWidth="100%" sx={{ display: "block", justifyContent: "center" }}>
                            <Grid item sx={{ borderBottom: "0.1px solid #939290", marginTop: "25px", width: "100%" }}></Grid>
                            <Typography sx={{ color: "white", marginTop: "20px", fontSize: "17px", textAlign: "center", fontWeight: "bold" }}>© 2022 Salon | All Rights Reserved</Typography>
                        </Grid>
                    </Paper>
                </footer>
           
        </>
    )
}

export default Footer;


