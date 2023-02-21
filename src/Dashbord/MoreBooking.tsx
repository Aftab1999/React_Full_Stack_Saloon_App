import React from "react"
import { CardContent, Box, Grid, Paper, Typography, Button } from "@mui/material";
import profileimg from "../assets/profileimg.jpg"
import Header from '../Dashbord/Header';
import { useNavigate } from "react-router-dom";
import Footer from "../Dashbord/Footer";



const itemData = [
    {
        name: 'James Bond',
        img: profileimg,
        orderId: '2345',
        price: "Rs.120",
    },
    {
        name: 'Smith Warner',
        img: profileimg,
        orderId: '5456',
        price: "Rs.190",
    },
    {
        name: 'John Doe',
        img: profileimg,
        orderId: '4875',
        price: "Rs.150",
    },
    {
        name: 'Kaira Smith',
        img: profileimg,
        orderId: '9587',
        price: "Rs.320",
    },
    {
        name: 'James Bond',
        img: profileimg,
        orderId: '2345',
        price: "Rs.120",
    },
    {
        name: 'Smith Warner',
        img: profileimg,
        orderId: '5456',
        price: "Rs.190",
    },
    {
        name: 'John Doe',
        img: profileimg,
        orderId: '4875',
        price: "Rs.150",
    },
    {
        name: 'Kaira Smith',
        img: profileimg,
        orderId: '9587',
        price: "Rs.320",
    },


];

const itemDate = [
    {
        date: "22",
        day: "Saturday",
        color: "black",
        daycolor: "#88878F",
        backgroundColor: "white",
    },
    {
        date: "23",
        day: "Sunday",
        color: "black",
        daycolor: "#88878F",
        backgroundColor: "white",
    },
    {
        date: "24",
        day: "Monday",
        color: "black",
        daycolor: "#88878F",
        backgroundColor: "white",
    },
    {
        date: "25",
        day: "Tuesday",
        color: "White",
        daycolor: "white",
        backgroundColor: "#E7A356",
    },
    {
        date: "26",
        day: "Wednesday",
        color: "black",
        daycolor: "#88878F",
        backgroundColor: "white",
    },
    {
        date: "27",
        day: "Thusday",
        color: "black",
        daycolor: "#88878F",
        backgroundColor: "white",
    },
    {
        date: "28",
        day: "Friday",
        color: "black",
        daycolor: "#88878F",
        backgroundColor: "white",
    },


];

const MoreBooking: React.FC = () => {

    const navigate = useNavigate();

    return (

        <>
            <Header />
            <Paper sx={{
                margin: 'auto',
                maxWidth: "100%",
                flexGrow: 1,
                borderRadius: "0px",
                padding: "60px 15px",
                backgroundColor: "#FDF6EE"

            }}>
                <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    {itemDate.map((value) => (
                        <Grid item md={1} sm={6} xs={12}>
                            <Button sx={{ width: "100%", backgroundColor: value.backgroundColor, color: value.color, fontSize: "16px", fontWeight: "bold", textAlign: "center", display: "block", padding: "5px 0px ", lineHeight: "20px" }}>{value.date} <br /><span style={{ fontSize: "10px", color: value.daycolor }}>{value.day}</span></Button>
                        </Grid>
                    ))}
                </Grid>

                <Grid container spacing={2} sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>



                    {itemData.map((value) => (

                        <Grid item md={4.7} sm={6} xs={12}>
                            <Box sx={{
                                maxWidth: "100%",
                                borderRadius: "20px",
                                backgroundColor: "white"



                            }}>
                                <CardContent>

                                    <Grid sx={{ padding: "10px" }}>
                                        <Grid sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                            <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                <Grid>
                                                    <img style={{ width: "60px" }} src={value.img} alt="profileimg" />
                                                </Grid>
                                                <Grid sx={{ marginLeft: "10px" }}>
                                                    <Typography sx={{ fontSize: "16px", fontWeight: "bold", color: "#E7A356" }}>{value.name}</Typography>
                                                    <Typography sx={{ fontSize: "12px", color: "black", fontWeight: "bold" }}>{value.orderId}</Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid>
                                                <Typography sx={{ fontSize: "16px", color: "#E7A356", fontWeight: "bold" }}>{value.price}</Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid sx={{ marginTop: "12px" }}>
                                            <Typography sx={{ fontSize: "12px", color: "black", fontWeight: "bold" }}>Services</Typography>
                                            <Grid sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "7px" }}>
                                                <Typography sx={{ backgroundColor: "#F0F0F0", borderRadius: "5px" }}><Button sx={{ fontSize: "12px", color: "#88878F" }}>Hair Color</Button></Typography>
                                                <Typography sx={{ backgroundColor: "#F0F0F0", borderRadius: "5px" }}><Button sx={{ fontSize: "12px", color: "#88878F" }}>Body Massage</Button></Typography>
                                                <Typography sx={{ backgroundColor: "#F0F0F0", borderRadius: "5px" }}><Button sx={{ fontSize: "12px", color: "#88878F" }}>Shaving</Button></Typography>
                                                <Typography sx={{ backgroundColor: "#F0F0F0", borderRadius: "5px" }}><Button sx={{ fontSize: "12px", color: "#88878F" }}>Haircut</Button></Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid sx={{ marginTop: "12px" }}>
                                            <Typography sx={{ fontSize: "12px", color: "black", fontWeight: "bold" }}>Time    <span style={{ fontSize: "12px", color: "#88878F" }}>Afternoon 3:00 Pm</span></Typography>
                                        </Grid>
                                    </Grid>

                                </CardContent>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
                <Typography sx={{ textAlign: "center", marginTop: "12px" }}><Button sx={{ color: "#88878F", textAlign: "center" }}  onClick={() => navigate("/dashbord")}>Back to Home</Button></Typography>
            </Paper>
            <Footer />

        </>

    )
}

export default MoreBooking;