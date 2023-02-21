import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Paper } from '@mui/material';
import gallerydd from "../assets/gallerydd.png"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import categoryimgb from "../assets/categoryimgb.png"
import categoryimgc from "../assets/categoryimgc.png"
import categoryimgd from "../assets/categoryimgd.png"
import categoryimge from "../assets/categoryimge.png"
import categoryimgf from "../assets/categoryimgf.png"
import Header from '../Dashbord/Header';
import AddCategory from './AddCategory';
import { useNavigate } from 'react-router-dom';
import Footer from '../Dashbord/Footer';


const itemData = [
    {
        name: 'Hair Cut',
        img: gallerydd,
    },
    {
        name: 'Kids Haircut',
        img: categoryimgb,
    },
    {
        name: 'Hair Color',
        img: categoryimgc,
    },
    {
        name: 'Bridal',
        img: categoryimgd,
    },
    {
        name: 'Facial',
        img: categoryimge,
    },
    {
        name: 'spa',
        img: categoryimgf,
    },
    {
        name: 'spa',
        img: categoryimgf,
    },
    {
        name: 'spa',
        img: categoryimgf,
    },
    {
        name: 'spa',
        img: categoryimgf,
    },
    {
        name: 'spa',
        img: categoryimgf,
    },
    {
        name: 'spa',
        img: categoryimgf,
    },
    {
        name: 'spa',
        img: categoryimgf,
    },
    {
        name: 'spa',
        img: categoryimgf,
    },
    {
        name: 'spa',
        img: categoryimgf,
    },
   



];




export default function MoreCategory() {

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


            }}>
                 <AddCategory image={categoryimgb} title="Categories" buttonTitle="Add Category" onClick={() => alert(1)} />
              
                 {/* <AddCategory image={categoryimgc} title="Offers" buttonTitle="Add New Offer" onClick={() => alert("Offer button click")} /> */}


                <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop:"15px" }}>
                    <Grid item md={6.9} sm={6} xs={12}>
                        <Typography sx={{ fontSize: "22px", fontWeight: 'bold', color: "black" }}>Category</Typography>
                        <Typography sx={{ borderBottom: "4px solid #E7A356", width: "25px", marginTop: "20px" }}></Typography>
                    </Grid>
                    <Grid item md={2.5} sm={6} xs={6}>
                        <Typography sx={{ backgroundColor: "black", borderRadius: "5px", textAlign: 'center' }}><Button sx={{ fontSize: "12px", color: "white", textAlign: "center" }} onClick={() => navigate("/dashbord")}>Back to Home</Button></Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ display: "flex", justifyContent: "center", marginTop: "15px" }}>
                    {itemData.map((value) => (
                        <Grid item md={3.1} sm={6} xs={12}>
                            <Card sx={{ maxWidth: "100%" }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    image={value.img}
                                />
                                <CardContent>
                                    <Typography sx={{ fontSize: "16px", fontWeight: "bold", color: "black" }}>
                                        {value.name}
                                    </Typography>
                                    <Typography sx={{ fontSize: "12px", color: "#88878F", marginTop: "12px" }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking</Typography>
                                </CardContent>
                                <CardActions>
                                    <Typography><Button size="small" sx={{ fontSize: "12px", color: "white", backgroundColor: "#E7A356", padding: "7px 30px", borderRadius: "5px 0px 0px 5px" }}><EditIcon sx={{ fontSize: "16px" }} />Edit</Button><Button size="small" sx={{ fontSize: "12px", color: "white", backgroundColor: "#272522", padding: "7px 30px", borderRadius: "0px 5px 5px 0px" }}><DeleteIcon sx={{ fontSize: "16px" }} />Delete</Button></Typography>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Paper>
            <Footer />
        </>
    );
}