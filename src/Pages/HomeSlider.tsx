import { Box, Button, Card, CardContent, Container, Grid, ImageListItem, Paper, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick"
import salonimg1 from "../assets/salonimg1.jpg"
import iconcalender from "../assets/iconcalender.jpg"
import likeicon from "../assets/likeicon.png"
import cuticon from "../assets/cuticon.jpg"
import persenticon from "../assets/persenticon.jpg"
import logo from "../assets/logo.png"
import { useMediaQuery, useTheme } from "@material-ui/core";
import DrawerSlider from "../Mobile/DrawerSlider";

const HomeSlider: React.FC = () => {

    const theme = useTheme();
    const isMobile: any = useMediaQuery<any>(theme.breakpoints.down("md"));

    const navigate = useNavigate();


    const settings = {
        className: "center-custom",
        centerMode: true,
        infinite: true,
        centerPadding: "170px",
        slidesToShow: 1,
        speed: 700
    };
    return (
        <>
            {isMobile ? (
                <DrawerSlider />

            ) : (
                <div>
                    <Paper sx={{
                        margin: 'auto',
                        maxWidth: "100%",
                        flexGrow: 1,
                        borderRadius: "0px",
                        padding: "10px 0px",
                        display: "inline-block",
                        justifyContent: "center",

                    }}>

                        <Slider {...settings}>
                            <div>
                                <Box sx={{ maxWidth: "100%" }}>
                                    <ImageListItem sx={{
                                        width: "100%",
                                        padding: "80px 0px",
                                        backgroundImage: `url(${"https://th.bing.com/th/id/R.0805663453e4696b668c9f95e59806de?rik=4ZwB4jo%2b5vWWeQ&riu=http%3a%2f%2fcdn.wallpapersafari.com%2f44%2f5%2fHQjIBU.jpg&ehk=w613Ki84il7mGkHMy9ZuZ%2fs5n%2bO%2fLHUG2hJvu3Jz39c%3d&risl=&pid=ImgRaw&r=0"}?w=900&h=600&fit=crop&auto=format)`
                                    }}  >
                                        <Grid container sx={{ display: "inline-block", justifyContent: "left", marginLeft: "120px", maxWidth: "100%" }}>
                                            <Grid item xs={12} sx={{ color: "white", maxWidth: "100%" }}>
                                                <Typography sx={{ color: "white", fontSize: "35px", maxWidth: "200px" }}>Collection Hair & Beard</Typography>
                                            </Grid>
                                            <Grid item xs={12} sx={{ color: "white", maxWidth: "400px" }}>
                                                <Typography sx={{ color: "#D4D4C3", fontSize: "20px", maxWidth: "50%" }}>Here Are Many Variations Of Passages Of Lorem Ipsum
                                                    Avaialble, But The Majority Suffered</Typography>
                                            </Grid>
                                            <Grid item xs={12} sx={{ color: "white", maxWidth: "100%" }}>
                                                <Button sx={{ color: "white", border: "2px solid #E7A356", marginTop: "20px", fontSize: "22px", backgroundColor: "black", padding: "5px 15px" }} onClick={() => navigate("/seeallservices")}>See All Services</Button>
                                            </Grid>
                                        </Grid>
                                    </ImageListItem>



                                </Box>
                            </div>
                            <div>
                                <Box sx={{ maxWidth: "100%", padding: 1 }}>
                                    <ImageListItem sx={{
                                        width: "100%",
                                        padding: "80px 0px",
                                        backgroundImage: `url(${"https://th.bing.com/th/id/R.8ea8724809336dae9577313895cefc06?rik=6J7QgrWDJptP3g&riu=http%3a%2f%2fwww.the9salon.com%2fwp-content%2fuploads%2f2013%2f08%2fhair-salon-background.jpg&ehk=PemnXtVPGNnhnAugEiBtnHoAnWohZyd%2b%2bZe0lJjxpz0%3d&risl=&pid=ImgRaw&r=0"}?w=900&h=600&fit=crop&auto=format)`
                                    }}  >
                                        <Grid container sx={{ display: "inline-block", justifyContent: "left", marginLeft: "120px", maxWidth: "100%" }}>
                                            <Grid item xs={12} sx={{ color: "white", maxWidth: "100%" }}>
                                                <Typography sx={{ color: "white", fontSize: "35px", maxWidth: "200px" }}>Collection Hair & Beard</Typography>
                                            </Grid>
                                            <Grid item xs={12} sx={{ color: "white", maxWidth: "400px" }}>
                                                <Typography sx={{ color: "#D4D4C3", fontSize: "20px", maxWidth: "50%" }}>Here Are Many Variations Of Passages Of Lorem Ipsum
                                                    Avaialble, But The Majority Suffered</Typography>
                                            </Grid>
                                            <Grid item xs={12} sx={{ color: "white", maxWidth: "100%" }}>
                                                <Button sx={{ color: "white", border: "2px solid #E7A356", marginTop: "20px", fontSize: "22px", backgroundColor: "black", padding: "5px 15px" }} onClick={() => navigate("/seeallservices")}>See All Services</Button>
                                            </Grid>
                                        </Grid>
                                    </ImageListItem>



                                </Box>
                            </div>
                            <div>
                                <Box sx={{ maxWidth: "100%", padding: 1 }}>
                                    <ImageListItem sx={{
                                        width: "100%",
                                        padding: "80px 0px",
                                        backgroundImage: `url(${"https://static.wixstatic.com/media/2c648a_7d05aa6e345a4898aa3cc10e7fb4f6aa~mv2.png/v1/fill/w_600,h_509,al_c,usm_0.66_1.00_0.01/bw-front.png"}?w=900&h=600&fit=crop&auto=format)`
                                    }}  >
                                        <Grid container sx={{ display: "inline-block", justifyContent: "left", marginLeft: "120px", maxWidth: "100%" }}>
                                            <Grid item xs={12} sx={{ color: "white", maxWidth: "100%" }}>
                                                <Typography sx={{ color: "white", fontSize: "35px", maxWidth: "200px" }}>Collection Hair & Beard</Typography>
                                            </Grid>
                                            <Grid item xs={12} sx={{ color: "white", maxWidth: "400px" }}>
                                                <Typography sx={{ color: "#D4D4C3", fontSize: "20px", maxWidth: "50%" }}>Here Are Many Variations Of Passages Of Lorem Ipsum
                                                    Avaialble, But The Majority Suffered</Typography>
                                            </Grid>
                                            <Grid item xs={12} sx={{ color: "white", maxWidth: "100%" }}>
                                                <Button sx={{ color: "white", border: "2px solid #E7A356", marginTop: "20px", fontSize: "22px", backgroundColor: "black", padding: "5px 15px" }} onClick={() => navigate("/seeallservices")}>See All Services</Button>
                                            </Grid>
                                        </Grid>
                                    </ImageListItem>



                                </Box>
                            </div>
                            <div>
                                <Box sx={{ maxWidth: "100%", padding: 1 }}>
                                    <ImageListItem sx={{
                                        width: "100%",
                                        padding: "80px 0px",
                                        backgroundImage: `url(${"https://th.bing.com/th/id/R.844ea5d357776cc3bcd1d49fd720b109?rik=xgJ9axekomn6Zw&riu=http%3a%2f%2fcdn.home-designing.com%2fwp-content%2fuploads%2f2020%2f11%2fblack-dining-room-pendant-light.jpg&ehk=%2frxvU8JmDQsRTCSpC9V4pBIyoAX6jv00YNYiBQLLzAU%3d&risl=&pid=ImgRaw&r=0"}?w=900&h=600&fit=crop&auto=format)`
                                    }}  >
                                        <Grid container sx={{ display: "inline-block", justifyContent: "left", marginLeft: "120px", maxWidth: "100%" }}>
                                            <Grid item xs={12} sx={{ color: "white", maxWidth: "100%" }}>
                                                <Typography sx={{ color: "white", fontSize: "35px", maxWidth: "200px" }}>Collection Hair & Beard</Typography>
                                            </Grid>
                                            <Grid item xs={12} sx={{ color: "white", maxWidth: "400px" }}>
                                                <Typography sx={{ color: "#D4D4C3", fontSize: "20px", maxWidth: "50%" }}>Here Are Many Variations Of Passages Of Lorem Ipsum
                                                    Avaialble, But The Majority Suffered</Typography>
                                            </Grid>
                                            <Grid item xs={12} sx={{ color: "white", maxWidth: "100%" }}>
                                                <Button sx={{ color: "white", border: "2px solid #E7A356", marginTop: "20px", fontSize: "22px", backgroundColor: "black", padding: "5px 15px" }} onClick={() => navigate("/seeallservices")}>See All Services</Button>
                                            </Grid>
                                        </Grid>
                                    </ImageListItem>



                                </Box>
                            </div>
                        </Slider>



                    </Paper>

                </div>


            )}
        </>
    );

}

export default HomeSlider;
