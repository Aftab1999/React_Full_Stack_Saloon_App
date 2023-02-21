import { CardContent, Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react"
import offerimga from "../assets/offerimga.jpg"
import offerimgb from "../assets/offerimgb.jpg"
import iconcalender from "../assets/iconcalender.jpg"
import likeicon from "../assets/likeicon.png"
import cuticon from "../assets/cuticon.jpg"
import persenticon from "../assets/persenticon.jpg"
import logo from "../assets/logo.png"
import { useMediaQuery, useTheme } from "@material-ui/core";


const Offers: React.FC = () => {

    const theme = useTheme();
    const isMobile: any = useMediaQuery<any>(theme.breakpoints.down("md"));

    return (
        <>
           
                <Paper sx={{
                    margin: 'auto',
                    maxWidth: "100%",
                    flexGrow: 1,
                    borderRadius: "0px",
                    padding: "60px 15px",

                }}>

                    <Grid container spacing={2} sx={{ display: "flex", justifyContent: "center" }}>





                        <Grid item md={4.5} sm={6} xs={12}>
                            <Box sx={{
                                maxWidth: "100%",
                                borderRadius: "20px",
                                backgroundImage: `url(${offerimga})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "100% 100%",
                              


                            }}>
                                <CardContent>
                                    <Grid item sx={{ maxWidth: "100%" }}>
                                        <Typography sx={{
                                            marginTop: "30px", fontSize: "18px", backgroundColor: "white", textAlign: "center", padding: "5px 6px", width: "100px", fontWeight: "bolder", fontFamily: [
                                                "'Hurricane', cursive"
                                            ].join(',')
                                        }}>30% Off</Typography>
                                        <Typography sx={{ fontSize: "22px", fontWeight: "bold", padding: "5px 6px", width: "100%",marginTop:"10px" }}>Long Hair Style</Typography>
                                        <Typography sx={{ fontSize: "12px", padding: "5px 6px", color: "#939290", width: "220px", maxWidth: "100%" }}>lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
                                    </Grid>
                                </CardContent>
                            </Box>
                        </Grid>

                        <Grid item md={4.5} sm={6} xs={12}>
                            <Box sx={{
                                maxWidth: "100%",
                                borderRadius: "20px",
                                backgroundImage: `url(${offerimgb})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "100% 100%",
                                
                            }}>
                                <CardContent>
                                    <Grid item sx={{ maxWidth: "100%" }}>
                                        <Typography sx={{
                                            marginTop: "30px", fontSize: "20px", backgroundColor: "white", textAlign: "center", padding: "5px 6px", width: "100px", fontWeight: "bolder", fontFamily: [
                                                "'Hurricane', cursive"
                                            ].join(',')
                                        }}>10% Off</Typography>
                                        <Typography sx={{ fontSize: "22px", fontWeight: "bold", padding: "5px 6px", width: "100%",marginTop:"10px" }}>Beard</Typography>
                                        <Typography sx={{ fontSize: "12px", padding: "5px 6px", color: "#939290", width: "220px", maxWidth: "100%" }}>lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>

                                    </Grid>
                                </CardContent>
                            </Box>
                        </Grid>


                    </Grid>

                </Paper>
          
        </>
    )
}

export default Offers;