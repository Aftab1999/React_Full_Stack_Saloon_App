import { CardContent, Grid, ImageListItem, Paper, Typography } from "@mui/material";
import { Box, textAlign } from "@mui/system";
import React, { Component } from "react";
import Slider from "react-slick";
import galleryaa from "../assets/galleryaa.png"
import serviceimga from "../assets/serviceimga.png"
import serviceimgb from "../assets/serviceimgb.png"
import serviceimgc from "../assets/serviceimgc.jpg"
import serviceimgd from "../assets/serviceimgd.png"
import { makeStyles } from "@mui/styles";
import './style.css';
import ContentCutIcon from '@mui/icons-material/ContentCut';



const Services: React.FC = () => {

    // const classes = useStyles();

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
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
                padding: '40px 15px',



            }}>
                <Typography sx={{ fontSize: "30px", fontWeight: "bold", textAlign: "center" }}> Our Best Services </Typography>
                <div style={{ padding: "10px", marginTop: "30px" }}>
                    <Slider {...settings}>

                        {/* <Grid item md={4.5} sm={6} xs={12}>
                        <Box sx={{ width: "100%" }}>
                            <CardContent>
                                <Grid item sx={{ maxWidth: "100%" }}>
                                    <img style={{ width: "100%", height: "250px" }} src={aboutimg} alt="aboutimg" />
                                </Grid>
                            </CardContent>
                        </Box>
                    </Grid> */}

                        <div>
                            <Box className="container" sx={{ maxWidth: "100%", padding: '10px' }}>
                                <img className="image" src={serviceimga} style={{ width: "100%", height: "350px" }} alt="serviceimga" />
                                <Grid item className="overlay">
                                    <Typography className="text"><ContentCutIcon style={{fontSize:"50px"}} /><br/>Body Massage<br/><span style={{fontSize:"12px"}}>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</span></Typography>
                                </Grid>
                            </Box>
                        </div>

                        <div>
                            <Box className="container" sx={{ maxWidth: "100%", padding: '10px' }}>
                                <img className="image" src={serviceimgb} style={{ width: "100%", height: "350px" }} alt="galleryaa" />
                                <Grid item className="overlay">
                                    <Typography className="text"><ContentCutIcon style={{fontSize:"50px"}} /><br/>Hair Cut<br/><span style={{fontSize:"12px"}}>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</span></Typography>
                                </Grid>
                            </Box>
                        </div>

                        <div>
                            <Box className="container" sx={{ maxWidth: "100%", padding: '10px' }}>
                                <img className="image" src={serviceimgc} style={{ width: "100%", height: "350px" }} alt="galleryaa" />
                                <Grid item className="overlay">
                                    <Typography className="text"><ContentCutIcon style={{fontSize:"50px"}} /><br/>Facial<br/><span style={{fontSize:"12px"}}>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</span></Typography>
                                </Grid>
                            </Box>
                        </div >

                        <div>
                            <Box className="container" sx={{ maxWidth: "100%", padding: '10px' }}>
                                <img className="image" src={serviceimgd} style={{ width: "100%", height: "350px" }} alt="galleryaa" />
                                <Grid item className="overlay">
                                    <Typography className="text"><ContentCutIcon style={{fontSize:"50px"}} /><br/>Hair Cut<br/><span style={{fontSize:"12px"}}>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</span></Typography>
                                </Grid>
                            </Box>
                        </div>

                        <div>
                            <Box className="container" sx={{ maxWidth: "100%", padding: '10px' }}>
                                <img className="image" src={serviceimga} style={{ width: "100%", height: "350px" }} alt="galleryaa" />
                                <Grid item className="overlay">
                                    <Typography className="text"><ContentCutIcon style={{fontSize:"50px"}} /><br/>Body Massage<br/><span style={{fontSize:"12px"}}>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</span></Typography>
                                </Grid>
                            </Box>
                        </div>

                        <div>
                            <Box className="container" sx={{ maxWidth: "100%", padding: '10px' }}>
                                <img className="image" src={serviceimgb} style={{ width: "100%", height: "350px" }} alt="galleryaa" />
                                <Grid item className="overlay">
                                    <Typography className="text"><ContentCutIcon style={{fontSize:"50px"}} /><br/>Hair Cut<br/><span style={{fontSize:"12px"}}>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</span></Typography>
                                </Grid>
                            </Box>
                        </div>

                        <div>
                            <Box className="container" sx={{ maxWidth: "100%", padding: '10px' }}>
                                <img className="image" src={serviceimgc} style={{ width: "100%", height: "350px" }} alt="galleryaa" />
                                <Grid item className="overlay">
                                    <Typography className="text"><ContentCutIcon style={{fontSize:"50px"}} /><br/>Facial<br/><span style={{fontSize:"12px"}}>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</span></Typography>
                                </Grid>
                            </Box>
                        </div>

                        <div>
                            <Box className="container" sx={{ maxWidth: "100%", padding: '10px' }}>
                                <img className="image" src={serviceimgd} style={{ width: "100%", height: "350px" }} alt="galleryaa" />
                                <Grid item className="overlay">
                                    <Typography className="text"><ContentCutIcon style={{fontSize:"50px"}} /><br/>Hair Cut<br/><span style={{fontSize:"12px"}}>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</span></Typography>
                                </Grid>
                            </Box>
                        </div>
                    </Slider>
                </div>
            </Paper>
        </>
    );

}

export default Services;






















// import { CardContent, Grid, ImageListItem, Paper, Typography } from "@mui/material";
// import { Box, textAlign } from "@mui/system";
// import React, { Component } from "react";
// import Slider from "react-slick";
// import galleryaa from "../assets/galleryaa.png"
// import serviceimga from "../assets/serviceimga.png"
// import serviceimgb from "../assets/serviceimgb.png"
// import serviceimgc from "../assets/serviceimgc.jpg"
// import serviceimgd from "../assets/serviceimgd.png"
// import { makeStyles } from "@mui/styles";
// import './style.css';
// import ContentCutIcon from '@mui/icons-material/ContentCut';

// const itemData = [
//     {
//         imgg:"serviceimga",
//         orderId: '2345',
//         price: "Rs.120",
//     },
//     {
//         img: "serviceimgb",
//         orderId: '5456',
//         price: "Rs.190",
//     },
//     {
//         img: "serviceimgc",
//         orderId: '4875',
//         price: "Rs.150",
//     },
//     {
//         img: "serviceimgd",
//         orderId: '9587',
//         price: "Rs.320",
//     },


// ];

// const Services: React.FC = () => {

//     // const classes = useStyles();

//     var settings = {
//         dots: true,
//         infinite: false,
//         speed: 500,
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         initialSlide: 0,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 3,
//                     infinite: true,
//                     dots: true
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 2,
//                     initialSlide: 2
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             }
//         ]
//     };
//     return (
//         <>
//             <Paper sx={{
//                 margin: 'auto',
//                 maxWidth: "100%",
//                 flexGrow: 1,
//                 borderRadius: "0px",
//                 padding: '40px 15px',



//             }}>
//                 <Typography sx={{ fontSize: "30px", fontWeight: "bold", textAlign: "center" }}> Our Best Services </Typography>
//                 <div style={{ padding: "10px", marginTop: "30px" }}>
//                     <Slider {...settings}>

//                         {/* <Grid item md={4.5} sm={6} xs={12}>
//                         <Box sx={{ width: "100%" }}>
//                             <CardContent>
//                                 <Grid item sx={{ maxWidth: "100%" }}>
//                                     <img style={{ width: "100%", height: "250px" }} src={aboutimg} alt="aboutimg" />
//                                 </Grid>
//                             </CardContent>
//                         </Box>
//                     </Grid> */}

//                         <div>
//                         {itemData.map((value) => (
//                             <Box className="container" sx={{ maxWidth: "100%", padding: '10px' }}>
//                                 <img className="image" src={value.imgg} style={{ width: "100%", height: "350px",display:"flex",justifyContent:"center" }} alt="serviceimga" />
//                                 <Grid item className="overlay">
//                                     <Typography className="text"><ContentCutIcon style={{fontSize:"50px"}} /><br/>Body Massage<br/><span style={{fontSize:"12px"}}>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</span></Typography>
//                                 </Grid>
//                             </Box>
//                         ))}
//                         </div>
//                     </Slider>
//                 </div>
//             </Paper>
//         </>
//     );

// }

// export default Services;