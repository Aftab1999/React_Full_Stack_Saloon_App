import { Block } from "@mui/icons-material";
import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react"
import footerlogo from "../assets/footerlogo.png"
import galleryimga from "../assets/galleryimga.png"
import galleryimgb from "../assets/galleryimgb.png"
import galleryimgc from "../assets/galleryimgc.png"
import galleryimgd from "../assets/galleryimgd.png"
import galleryimge from "../assets/galleryimge.png"
import galleryimgf from "../assets/galleryimgf.png"
import { useMediaQuery, useTheme } from "@material-ui/core";



const Gallery: React.FC = () => {


    const theme = useTheme();
    const isMobile: any = useMediaQuery<any>(theme.breakpoints.down("md"));
    return (
        <>

            <Paper sx={{
                margin: 'auto',
                maxWidth: "100%",
                flexGrow: 1,
                borderRadius: "0px",
                padding: "50px 5px",
            }}>
                <Typography sx={{ display: "block", justifyContent: "center", fontSize: "25px", textAlign: "center", color: "black", fontWeight: "bold", maxWidth: "100%" }}>Salon Gallery</Typography>
                <Typography sx={{ borderBottom: "4px solid #E7A356", width: "25px", marginTop: "10px", marginLeft: "610px" }}></Typography>

                <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px" }}>
                    <Grid item md={3} sm={6} xs={12} sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
                        <Box maxWidth="100%" sx={{ padding: 2 }}>
                            <Grid item sx={{ maxWidth: "100%" }}>
                                <img src={galleryimga} style={{ width: "290px" }} alt="galleryaa" />
                            </Grid>
                        </Box>
                    </Grid>

                    <Grid item md={3} sm={6} xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                        <Box maxWidth="100%" sx={{ padding: 2 }}>
                            <Grid item sx={{ maxWidth: "100%" }}>
                                <img src={galleryimgb} style={{ width: "290px" }} alt="gallerybb" />
                            </Grid>
                        </Box>
                    </Grid>

                    <Grid item md={3} sm={6} xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                        <Box maxWidth="100%" sx={{ padding: 2 }}>
                            <Grid item sx={{ maxWidth: "100%" }}>
                                <img src={galleryimgc} style={{ width: "290px" }} alt="gallerycc" />
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Grid item md={3} sm={6} xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                        <Box maxWidth="100%" sx={{ padding: 2 }}>
                            <Grid item sx={{ maxWidth: "100%" }}>
                                <img src={galleryimgd} style={{ width: "290px" }} alt="gallerydd" />
                            </Grid>
                        </Box>
                    </Grid>

                    <Grid item md={3} sm={6} xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                        <Box maxWidth="100%" sx={{ padding: 2 }}>
                            <Grid item sx={{ maxWidth: "100%" }}>
                                <img src={galleryimge} style={{ width: "290px"}} alt="galleryee" />
                            </Grid>
                        </Box>
                    </Grid>

                    <Grid item md={3} sm={6} xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                        <Box maxWidth="100%" sx={{ padding: 2 }}>
                            <Grid item sx={{ maxWidth: "100%" }}>
                                <img src={galleryimgf} style={{ width: "290px"}} alt="galleryff" />
                            </Grid>
                        </Box>
                    </Grid>

                </Grid>





            </Paper>


        </>
    )
}

export default Gallery;


