import { CardContent, Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react"
import googlepay from "../assets/googlepay.jpg"
import mobile from "../assets/mobile.jpg"
import apple from "../assets/apple.jpg"
import cuticon from "../assets/cuticon.jpg"
import persenticon from "../assets/persenticon.jpg"
import logo from "../assets/logo.png"
import mobilebackground from "../assets/mobilebackground.png"
import { useMediaQuery, useTheme } from "@material-ui/core";


const Mobile: React.FC = () => {


    const theme = useTheme();
    const isMobile: any = useMediaQuery<any>(theme.breakpoints.down("md"));

    return (
        <>
          
                <Paper sx={{
                    margin: 'auto',
                    maxWidth: "100%",
                    flexGrow: 1,
                    borderRadius: "0px",
                    padding: "50px 15px",
                    backgroundImage: `url(${mobilebackground})`

                }}>

                    <Grid container spacing={4} sx={{ display: "flex", justifyContent: "center" }}>

                        <Grid item md={4.5} sm={6} xs={12}>
                            <Box sx={{ width: '100%' }}>
                                <CardContent>
                                    <Grid item  sx={{ color: "black" }}>
                                        <Typography variant="h4" sx={{ fontSize: "22px", fontWeight: "bold" }}>Download Salon App</Typography>
                                        <Typography variant="h6" sx={{ fontSize: "14px", marginTop: "15px", maxWidth: "100%",color:"#939290",fontWeight:"normal" }} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>

                                    </Grid>

                                    <Grid container spacing={1}   sx={{ display: "flex", justifyContent: "left", maxWidth: "100%" }}>
                                        <Grid item md={6} sm={6} xs={12} sx={{ display: "flex", justifyContent: "left", alignItems: "center", maxWidth: "100%", marginTop: "15px" }}>
                                            <img style={{ width: '100%' }} src={googlepay} alt="googlepay" />
                                        </Grid>
                                        <Grid item md={6} sm={6} xs={12} sx={{ display: "flex", justifyContent: "left", alignItems: "center", maxWidth: "100%", marginTop: "15px" }}>
                                            <img style={{ width: '100%' }} src={apple} alt="apple" />
                                        </Grid>
                                    </Grid>

                                </CardContent>
                            </Box>
                        </Grid>



                        <Grid item md={4.5} sm={6} xs={12}>
                            <Box sx={{ width: "100%" }}>
                                <CardContent>
                                    <Grid item sx={{ maxWidth: "100%" }}>
                                        <img style={{ width: "100%" }} src={mobile} alt="mobile" />
                                    </Grid>
                                </CardContent>
                            </Box>
                        </Grid>

                    </Grid>

                </Paper>
          
        </>
    )
}

export default Mobile;