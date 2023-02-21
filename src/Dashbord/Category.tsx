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
import { useNavigate } from 'react-router-dom';


const itemData = [
    {
        name: 'Hair Cut',
        img: gallerydd,
        hairtype: "hair cut"
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



];




export default function ImgMediaCard() {

    const navigate = useNavigate();

    const handleClick = (component: any) => {
        navigate(component)
    }

    return (

        <>

            <Paper sx={{
                margin: 'auto',
                maxWidth: "100%",
                flexGrow: 1,
                borderRadius: "0px",
                padding: "60px 15px",


            }}>

                <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Grid item md={6.8} sm={6} xs={12}>
                        <Typography sx={{ fontSize: "22px", fontWeight: 'bold', color: "black" }}>Category</Typography>
                        <Typography sx={{ borderBottom: "4px solid #E7A356", width: "25px", marginTop: "10px" }}></Typography>
                    </Grid>
                    <Grid item md={2.5} sm={6} xs={6}>
                        <Typography sx={{ backgroundColor: "black", borderRadius: "5px", textAlign: 'center' }}><Button sx={{ fontSize: "12px", color: "white", textAlign: "center" }} onClick={() => navigate("/morecategory")}>View All Category</Button></Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ display: "flex", justifyContent: "center", marginTop: "15px" }}>
                    <Grid item md={3.1} sm={6} xs={12}>
                        <Card sx={{ maxWidth: "100%" }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                image={gallerydd}
                            />
                            <CardContent>
                                <Typography sx={{ fontSize: "16px", fontWeight: "bold", color: "black" }}>
                                    Hair Cut
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Typography><Button size="small" sx={{ fontSize: "12px", color: "white", backgroundColor: "#E7A356", padding: "7px 30px", borderRadius: "5px 0px 0px 5px" }} onClick={() => handleClick("/haircut")} ><EditIcon sx={{ fontSize: "16px" }} />Edit</Button><Button size="small" sx={{ fontSize: "12px", color: "white", backgroundColor: "#272522", padding: "7px 30px", borderRadius: "0px 5px 5px 0px" }}><DeleteIcon sx={{ fontSize: "16px" }} />Delete</Button></Typography>
                            </CardActions>
                        </Card>
                    </Grid>


                    <Grid item md={3.1} sm={6} xs={12}>
                        <Card sx={{ maxWidth: "100%" }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                image={categoryimgb}
                            />
                            <CardContent>
                                <Typography sx={{ fontSize: "16px", fontWeight: "bold", color: "black" }}>
                                    Kids Haircut
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Typography><Button size="small" sx={{ fontSize: "12px", color: "white", backgroundColor: "#E7A356", padding: "7px 30px", borderRadius: "5px 0px 0px 5px" }} onClick={() => handleClick("/haircut")} ><EditIcon sx={{ fontSize: "16px" }} />Edit</Button><Button size="small" sx={{ fontSize: "12px", color: "white", backgroundColor: "#272522", padding: "7px 30px", borderRadius: "0px 5px 5px 0px" }}><DeleteIcon sx={{ fontSize: "16px" }} />Delete</Button></Typography>
                            </CardActions>
                        </Card>
                    </Grid>


                    <Grid item md={3.1} sm={6} xs={12}>
                        <Card sx={{ maxWidth: "100%" }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                image={categoryimgc}
                            />
                            <CardContent>
                                <Typography sx={{ fontSize: "16px", fontWeight: "bold", color: "black" }}>
                                    Hair Color
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Typography><Button size="small" sx={{ fontSize: "12px", color: "white", backgroundColor: "#E7A356", padding: "7px 30px", borderRadius: "5px 0px 0px 5px" }} onClick={() => handleClick("/haircut")} ><EditIcon sx={{ fontSize: "16px" }} />Edit</Button><Button size="small" sx={{ fontSize: "12px", color: "white", backgroundColor: "#272522", padding: "7px 30px", borderRadius: "0px 5px 5px 0px" }}><DeleteIcon sx={{ fontSize: "16px" }} />Delete</Button></Typography>
                            </CardActions>
                        </Card>
                    </Grid>


                    <Grid item md={3.1} sm={6} xs={12}>
                        <Card sx={{ maxWidth: "100%" }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                image={categoryimgd}
                            />
                            <CardContent>
                                <Typography sx={{ fontSize: "16px", fontWeight: "bold", color: "black" }}>
                                    Bridal
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Typography><Button size="small" sx={{ fontSize: "12px", color: "white", backgroundColor: "#E7A356", padding: "7px 30px", borderRadius: "5px 0px 0px 5px" }} onClick={() => handleClick("/bridal")} ><EditIcon sx={{ fontSize: "16px" }} />Edit</Button><Button size="small" sx={{ fontSize: "12px", color: "white", backgroundColor: "#272522", padding: "7px 30px", borderRadius: "0px 5px 5px 0px" }}><DeleteIcon sx={{ fontSize: "16px" }} />Delete</Button></Typography>
                            </CardActions>
                        </Card>
                    </Grid>


                    <Grid item md={3.1} sm={6} xs={12}>
                        <Card sx={{ maxWidth: "100%" }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                image={categoryimge}
                            />
                            <CardContent>
                                <Typography sx={{ fontSize: "16px", fontWeight: "bold", color: "black" }}>
                                    Facial
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Typography><Button size="small" sx={{ fontSize: "12px", color: "white", backgroundColor: "#E7A356", padding: "7px 30px", borderRadius: "5px 0px 0px 5px" }} onClick={() => handleClick("/haircut")} ><EditIcon sx={{ fontSize: "16px" }} />Edit</Button><Button size="small" sx={{ fontSize: "12px", color: "white", backgroundColor: "#272522", padding: "7px 30px", borderRadius: "0px 5px 5px 0px" }}><DeleteIcon sx={{ fontSize: "16px" }} />Delete</Button></Typography>
                            </CardActions>
                        </Card>
                    </Grid>


                    <Grid item md={3.1} sm={6} xs={12}>
                        <Card sx={{ maxWidth: "100%" }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                image={categoryimgf}
                            />
                            <CardContent>
                                <Typography sx={{ fontSize: "16px", fontWeight: "bold", color: "black" }}>
                                    Spa
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Typography><Button size="small" sx={{ fontSize: "12px", color: "white", backgroundColor: "#E7A356", padding: "7px 30px", borderRadius: "5px 0px 0px 5px" }} onClick={() => handleClick("/haircut")} ><EditIcon sx={{ fontSize: "16px" }} />Edit</Button><Button size="small" sx={{ fontSize: "12px", color: "white", backgroundColor: "#272522", padding: "7px 30px", borderRadius: "0px 5px 5px 0px" }}><DeleteIcon sx={{ fontSize: "16px" }} />Delete</Button></Typography>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Paper>
        </>
    );
}