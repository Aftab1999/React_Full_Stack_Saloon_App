import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Paper, Typography } from "@mui/material";
import React from "react"
import gallerybb from "../assets/gallerybb.jpg"
import gallerygg from "../assets/gallerygg.jpg"
import ourblogimg from "../assets/ourblogimg.jpg"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";
import Header from "./Header";


const itemData = [
    {
        name: 'Men Haircut New Style',
        img: gallerygg,
        date: '25',
        month: "June",
        backgroundColor:"#000000",
        color:"#E7A356"
        
    },
    {
        name: 'Eyebrow Shapes',
        img: ourblogimg,
        date: '19',
        month: "Oct",
        backgroundColor:"#E7A356",
        color:"#FFFEFE"
    },
    {
        name: 'Top 5 Benefits Facial',
        img: gallerybb,
        date: '15',
        month: "June",
        backgroundColor:"#000000",
        color:"#E7A356"
    },


];

const OurBlog: React.FC = () => {

const navigate = useNavigate();

    return (
        <> 
            <Paper sx={{
                margin: 'auto',
                maxWidth: "100%",
                flexGrow: 1,
                borderRadius: "0px",
                padding: "50px 15px",
                backgroundColor: "#FDF6EE"




            }}>
                <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Grid item md={6.6} sm={6} xs={12}>
                        <Typography sx={{ fontSize: "22px", fontWeight: 'bold', color: "black" }}>Our Blogs</Typography>
                        <Typography sx={{ borderBottom: "4px solid #E7A356", width: "25px", marginTop: "10px" }}></Typography>
                    </Grid>
                    <Grid item md={2.5} sm={6} xs={6}>
                        <Typography sx={{ backgroundColor: "black", borderRadius: "5px", textAlign: 'center' }}><Button sx={{ fontSize: "12px", color: "white", textAlign: "center" }} onClick={() => navigate("/moreourblog")}>View All Blogs</Button></Typography>
                    </Grid>
                </Grid>




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
                                <CardContent sx={{ textAlign: "center", backgroundColor: "#FDF6EE", maxWidth: "100%" }}>
                                    <Typography sx={{ fontSize: "20px", fontweight: "bolder", color: "black" }}>{value.name}</Typography>
                                    <Typography sx={{ fontSize: "12px", fontweight: "bold", color: "#939290", marginTop: "15px" }}>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</Typography>
                                </CardContent>
                                <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                                    <Typography><Button size="small" sx={{ fontSize: "12px", color: "white", backgroundColor: "#E7A356", padding: "7px 30px", borderRadius: "5px 0px 0px 5px" }}><EditIcon sx={{ fontSize: "16px" }} />Edit</Button><Button size="small" sx={{ fontSize: "12px", color: "white", backgroundColor: "#272522", padding: "7px 30px", borderRadius: "0px 5px 5px 0px" }}><DeleteIcon sx={{ fontSize: "16px" }} />Delete</Button></Typography>
                                </CardActions>
                            </Box>
                        </Grid>
                    ))}
                </Grid>


            </Paper>
        </>
    )
}

export default OurBlog;