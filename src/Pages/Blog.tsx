import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Paper, Typography } from "@mui/material";
import React from "react"
import OurFeature from "./OurFeature";
import aaimg from "../assets/aaimg.jpg"
import gallerybb from "../assets/gallerybb.jpg"
import gallerygg from "../assets/gallerygg.jpg"
import ourblogimg from "../assets/ourblogimg.jpg"


const itemData = [
    {
        name: 'Men Haircut New Style',
        img: gallerygg,
        date: '25',
        month: "June",
        backgroundColor: "#000000",
        color: "#E7A356"

    },
    {
        name: 'Eyebrow Shapes',
        img: ourblogimg,
        date: '19',
        month: "Oct",
        backgroundColor: "#E7A356",
        color: "#FFFEFE"
    },
    {
        name: 'Top 5 Benefits Facial',
        img: gallerybb,
        date: '15',
        month: "June",
        backgroundColor: "#000000",
        color: "#E7A356"
    },


];

const Blog: React.FC = () => {
    return (
        <>
            <Paper sx={{
                margin: 'auto',
                maxWidth: "100%",
                flexGrow: 1,
                borderRadius: "0px",
                padding: "50px 15px",




            }}>
                <Typography sx={{ fontSize: "30px", fontWeight: "bold", textAlign: "center" }}> Our Blog </Typography>




                <Grid container spacing={4} sx={{ display: "flex", justifyContent: "center", marginTop: "5px" }}>
                    {itemData.map((value) => (

                        <Grid item md={3.1} sm={6} xs={12}>
                            <Box sx={{ maxWidth: "100%", padding: '10px', display: "inline-block", justifyContent: "center" }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    image={value.img}
                                />
                                <Button sx={{ backgroundColor: value.backgroundColor, color: value.color, fontSize: "16px", fontWeight: "bold", textAlign: "center", display: "block", marginTop: "-25px", padding: "5px 0px ", lineHeight: "20px", left: "40%" }}>{value.date} <br /><span style={{ fontSize: "12px" }}>{value.month}</span></Button>
                                <CardContent sx={{ textAlign: "center", backgroundColor: "#FFFFFF", maxWidth: "100%" }}>
                                    <Typography sx={{ fontSize: "20px", fontweight: "bolder", color: "black" }}>{value.name}</Typography>
                                    <Typography sx={{ fontSize: "12px", fontweight: "bold", color: "#939290", marginTop: "15px" }}>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</Typography>
                                </CardContent>
                            </Box>
                        </Grid>
                    ))}
                </Grid>



            </Paper>
        </>
    )
}

export default Blog;