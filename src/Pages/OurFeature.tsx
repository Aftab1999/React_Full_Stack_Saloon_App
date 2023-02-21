import { CardContent, Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react"
import salonimg1 from "../assets/salonimg1.jpg"
import iconcalender from "../assets/iconcalender.jpg"
import likeicon from "../assets/likeicon.png"
import cuticon from "../assets/cuticon.jpg"
import persenticon from "../assets/persenticon.jpg"
import logo from "../assets/logo.png"




const OurFeature: React.FC = () => {

    

    return (
        <>
           

                <Paper sx={{
                    margin: 'auto',
                    maxWidth: "100%",
                    flexGrow: 1,
                    borderRadius: "0px",
                    padding: "50px 15px",

                }}>

                    <Grid container sx={{ display: "flex", justifyContent: "center" }}>

                        <Grid item md={6} sm={6} xs={12}>
                            <Box sx={{width:"100%" }}>
                                <CardContent>
                                    <Grid item md={12} sm={6} xs={12} sx={{ color: "black",width:"100%" }}>
                                        <Typography variant="h4" sx={{ fontSize: "30px", fontWeight: "bold" }}>Our Best Features</Typography>
                                        <Typography sx={{ borderBottom: "4px solid #E7A356", width: "25px", marginTop: "7px" }}></Typography>
                                        <Typography variant="h6" sx={{ fontSize: "14.5px", marginTop: "17px", maxWidth: "100%", color: "#939290", fontWeight: "normal" }} >lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>
                                        <Typography variant="h6" sx={{ fontSize: "14.5px", marginTop: "25px", maxWidth: "100%", color: "#939290", fontWeight: "normal" }} >lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Typography>
                                    </Grid>

                                    <Grid container sx={{ display: "flex", justifyContent: "left", width: "850px", marginTop: "20px" }}>
                                        <Grid item md={4} sm={6} xs={12} sx={{ display: "flex", justifyContent: "left", alignItems: "center", maxWidth: "100%", marginTop: "15px" }}>
                                            <img style={{ width: "45px", height: "45px" }} src={iconcalender} alt="icon" />
                                            <Typography sx={{ marginLeft: "15px", fontWeight: "bold" }}>Easy Way To Appointment</Typography>
                                        </Grid>
                                        <Grid item md={4} sm={6} xs={12} sx={{ display: "flex", justifyContent: "left", alignItems: "center", maxWidth: "100%", marginTop: "15px" }}>
                                            <img style={{ width: "45px", height: "45px" }} src={cuticon} alt="cuticon" />
                                            <Typography sx={{ marginLeft: "15px", fontWeight: "bold" }}>Best Team</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container sx={{ display: "flex", justifyContent: "left", width: "850px" }}>
                                        <Grid item md={4} sm={6} xs={12} sx={{ display: "flex", justifyContent: "left", alignItems: "center", maxWidth: "100%", marginTop: "15px" }}>
                                            <img style={{ width: "45px", height: "45px" }} src={likeicon} alt="likeicon" />
                                            <Typography sx={{ marginLeft: "15px", fontWeight: "bold" }}>Good Discount</Typography>
                                        </Grid>
                                        <Grid item md={4} sm={6} xs={12} sx={{ display: "flex", justifyContent: "left", alignItems: "center", maxWidth: "100%", marginTop: "15px" }}>
                                            <img style={{ width: "45px", height: "45px" }} src={persenticon} alt="persenticon" />
                                            <Typography sx={{ marginLeft: "15px", fontWeight: "bold" }}>300+ Happy Customers</Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Box>
                        </Grid>



                        <Grid item md={3} sm={6} xs={12}>
                            <Box sx={{ width: "100%" }}>
                                <CardContent>
                                    <Grid item sx={{ maxWidth: "100%" }}>
                                        <img style={{ width:"100%",border:"4px solid #E7A356" }} src={salonimg1} alt="salonimg1" />
                                    </Grid>
                                </CardContent>
                            </Box>
                        </Grid>

                    </Grid>

                </Paper>
          
        </>
    )
}

export default OurFeature;