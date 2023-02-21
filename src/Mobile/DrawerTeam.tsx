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
import { makeStyles } from "@mui/styles";
import personcut from "../assets/personcut.png"
import '../Pages/style.css';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import teamleftimg from "../assets/teamleftimg.jpg"
import teamrightimg from "../assets/teamrightimg.jpg"

// const useStyles = makeStyles((them) => ({

//     overlay: {
//         position: "absolute",
//         bottom: 0,
//         left: 0,
//         right: 0,
//         backgroundColor: "rgb(0,0,0,0.5)",
//         overflow: "hidden",
//         width: "100%",
//         height: 0,
//         "&:hover": {
//             height: "100%",
//         },
//     },

//     text: {

//         color: "white",
//         fontSize: "20px",
//         position: "absolute",
//         top: "50%",
//         left: "50%",

//         textAlign: "center",

//     },

//     image: {
//         display: "block",
//         width: "100%",
//         height: "auto",

//         "&:hover": {
//             height: "100%",
//             backgroundColor: "rgb(0,0,0,0.5)",
//             overflow: "hidden",
//             transform: "scale(1.1) translate(- 20px)",
//             opacity: "0.3",

//         },


//     },





//     // link: {
//     //   textDecoration: "none",
//     //   color: "black",
//     //   fontSize: "15px",
//     //   margin: "25px",
//     //   fontWeight:"bold",
//     //   marginLeft:"25px",
//     //   padding:"0px 2px",

//     //   textAlign:"center",
//     //   "&:hover": {
//     //     color: "yellow",
//     //     borderBottom: "1px solid white",
//     //   },

//     //  "&:active" : {
//     //     backgroundColor: "red",
//     //     color:"red"
//     // }
//     // },
// }));


const Services: React.FC = () => {

  // const classes = useStyles();

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
      <Paper sx={{
          margin: 'auto',
          maxWidth: "100%",
          flexGrow: 1,
          borderRadius: "0px",
          padding: '50px 15px',



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
                            <Box  sx={{ maxWidth: "100%", padding: '10px', display: "inline-block", justifyContent: "center" }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height = "340"
                                    image={teamleftimg}
                                />
                                {/* <img className="imagee" src={aaimg} style={{ width: "100%", height: "270px" }} alt="aaimg" /> */}
                                <CardContent sx={{ textAlign: "center", backgroundColor: "#F9E3C1", maxWidth: "100%" }}>
                                    <Typography sx={{ fontSize: "20px", fontweight: "bolder", color: "black" }}>James Franco</Typography>
                                    <Typography sx={{ fontSize: "16px", fontweight: "bold", color:"#939290",marginTop:"15px" }}>Haircut Specialist</Typography>
                                </CardContent>
                            </Box>
                        </Grid>
             

              <Grid item md={3} sm={6} xs={12}>
                            <Box  sx={{ maxWidth: "100%", padding: '15px', display: "block", justifyContent: "center" }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height = "340"
                                    image={personcut}
                                />
                                {/* <img className="imagee" src={aaimg} style={{ width: "100%", height: "270px" }} alt="aaimg" /> */}
                                <CardContent sx={{ textAlign: "center", backgroundColor: "black", maxWidth: "100%" }}>
                                    <Typography sx={{ fontSize: "20px", fontweight: "bolder", color: "white" }}>James Franco</Typography>
                                    <Typography sx={{ fontSize: "16px", fontweight: "bold", color:"#939290",marginTop:"15px" }}>Haircut Specialist</Typography>
                                </CardContent>
                            </Box>
                        </Grid>


                        <Grid item md={3} sm={6} xs={12}>
                            <Box  sx={{ maxWidth: "100%", padding: '10px', display: "inline-block", justifyContent: "center" }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height = "340"
                                    image={teamrightimg}
                                />
                                {/* <img className="imagee" src={aaimg} style={{ width: "100%", height: "270px" }} alt="aaimg" /> */}
                                <CardContent sx={{ textAlign: "center", backgroundColor: "#F9E3C1", maxWidth: "100%" }}>
                                    <Typography sx={{ fontSize: "20px", fontweight: "bolder", color: "black" }}>James Franco</Typography>
                                    <Typography sx={{ fontSize: "16px", fontweight: "bold", color:"#939290",marginTop:"15px" }}>Haircut Specialist</Typography>
                                </CardContent>
                            </Box>
                        </Grid>



                        <Grid item md={3} sm={6} xs={12}>
                            <Box  sx={{ maxWidth: "100%", padding: '10px', display: "inline-block", justifyContent: "center" }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height = "340"
                                    image={teamleftimg}
                                />
                                {/* <img className="imagee" src={aaimg} style={{ width: "100%", height: "270px" }} alt="aaimg" /> */}
                                <CardContent sx={{ textAlign: "center", backgroundColor: "#F9E3C1", maxWidth: "100%" }}>
                                    <Typography sx={{ fontSize: "20px", fontweight: "bolder", color: "black" }}>James Franco</Typography>
                                    <Typography sx={{ fontSize: "16px", fontweight: "bold", color:"#939290",marginTop:"15px" }}>Haircut Specialist</Typography>
                                </CardContent>
                            </Box>
                        </Grid>
             

              <Grid item md={3} sm={6} xs={12}>
                            <Box  sx={{ maxWidth: "100%", padding: '15px', display: "block", justifyContent: "center" }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height = "340"
                                    image={personcut}
                                />
                                {/* <img className="imagee" src={aaimg} style={{ width: "100%", height: "270px" }} alt="aaimg" /> */}
                                <CardContent sx={{ textAlign: "center", backgroundColor: "black", maxWidth: "100%" }}>
                                    <Typography sx={{ fontSize: "20px", fontweight: "bolder", color: "white" }}>James Franco</Typography>
                                    <Typography sx={{ fontSize: "16px", fontweight: "bold", color:"#939290",marginTop:"15px" }}>Haircut Specialist</Typography>
                                </CardContent>
                            </Box>
                        </Grid>


                        <Grid item md={3} sm={6} xs={12}>
                            <Box  sx={{ maxWidth: "100%", padding: '10px', display: "inline-block", justifyContent: "center" }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height = "340"
                                    image={teamrightimg}
                                />
                                {/* <img className="imagee" src={aaimg} style={{ width: "100%", height: "270px" }} alt="aaimg" /> */}
                                <CardContent sx={{ textAlign: "center", backgroundColor: "#F9E3C1", maxWidth: "100%" }}>
                                    <Typography sx={{ fontSize: "20px", fontweight: "bolder", color: "black" }}>James Franco</Typography>
                                    <Typography sx={{ fontSize: "16px", fontweight: "bold", color:"#939290",marginTop:"15px" }}>Haircut Specialist</Typography>
                                </CardContent>
                            </Box>
                        </Grid>




                        <Grid item md={3} sm={6} xs={12}>
                            <Box  sx={{ maxWidth: "100%", padding: '10px', display: "inline-block", justifyContent: "center" }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height = "340"
                                    image={teamleftimg}
                                />
                                {/* <img className="imagee" src={aaimg} style={{ width: "100%", height: "270px" }} alt="aaimg" /> */}
                                <CardContent sx={{ textAlign: "center", backgroundColor: "#F9E3C1", maxWidth: "100%" }}>
                                    <Typography sx={{ fontSize: "20px", fontweight: "bolder", color: "black" }}>James Franco</Typography>
                                    <Typography sx={{ fontSize: "16px", fontweight: "bold", color:"#939290",marginTop:"15px" }}>Haircut Specialist</Typography>
                                </CardContent>
                            </Box>
                        </Grid>
             

              <Grid item md={3} sm={6} xs={12}>
                            <Box  sx={{ maxWidth: "100%", padding: '15px', display: "block", justifyContent: "center" }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height = "340"
                                    image={personcut}
                                />
                                {/* <img className="imagee" src={aaimg} style={{ width: "100%", height: "270px" }} alt="aaimg" /> */}
                                <CardContent sx={{ textAlign: "center", backgroundColor: "black", maxWidth: "100%" }}>
                                    <Typography sx={{ fontSize: "20px", fontweight: "bolder", color: "white" }}>James Franco</Typography>
                                    <Typography sx={{ fontSize: "16px", fontweight: "bold", color:"#939290",marginTop:"15px" }}>Haircut Specialist</Typography>
                                </CardContent>
                            </Box>
                        </Grid>


                        <Grid item md={3} sm={6} xs={12}>
                            <Box  sx={{ maxWidth: "100%", padding: '10px', display: "inline-block", justifyContent: "center" }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height = "340"
                                    image={teamrightimg}
                                />
                                {/* <img className="imagee" src={aaimg} style={{ width: "100%", height: "270px" }} alt="aaimg" /> */}
                                <CardContent sx={{ textAlign: "center", backgroundColor: "#F9E3C1", maxWidth: "100%" }}>
                                    <Typography sx={{ fontSize: "20px", fontweight: "bolder", color: "black" }}>James Franco</Typography>
                                    <Typography sx={{ fontSize: "16px", fontweight: "bold", color:"#939290",marginTop:"15px" }}>Haircut Specialist</Typography>
                                </CardContent>
                            </Box>
                        </Grid>
            
              
             

              
            </Slider>
          </div>
        </Paper>
    </>
  );

}

export default Services;