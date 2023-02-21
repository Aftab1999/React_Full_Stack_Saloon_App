import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Paper } from '@mui/material';
import bestofferimga from "../assets/bestofferimga.png"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import bestofferimgb from "../assets/bestofferimgb.png"
import { Navigate, useNavigate } from 'react-router-dom';




const itemData = [
    {
        name: 'Hair Color 20% Off',
        img: bestofferimga,
    },
    {
        name: 'Body Message 10% Off',
        img: bestofferimgb,
    },



];

const BestOffer:React.FC = () => {

    // $('button').on('click', function(){
    //     $('button').removeClass('selected');
    //     $(this).addClass('selected');
    // });

const navigate = useNavigate();

    return (

        <>

            <Paper sx={{
                margin: 'auto',
                maxWidth: "100%",
                flexGrow: 1,
                borderRadius: "0px",
                padding: "60px 15px",
                backgroundColor: "#FDF6EE"


            }}>

                <Grid container  sx={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Grid item md={6.9} sm={6} xs={12}>
                        <Typography sx={{ fontSize: "22px", fontWeight: 'bold', color: "black" }}>Best Offers</Typography>
                        <Typography sx={{ borderBottom: "4px solid #E7A356", width: "25px", marginTop: "10px" }}></Typography>
                    </Grid>
                    <Grid item md={2.5} sm={6} xs={6}>
                        <Typography  sx={{ backgroundColor: "black", borderRadius: "5px",textAlign:'center'}}><Button sx={{ fontSize: "12px", color: "white",textAlign:"center" }} onClick={() => navigate("/morebestoffer")}>View All Offers</Button></Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ display: "flex", justifyContent: "center", marginTop: "15px" }}>
                    {itemData.map((value) => (
                        <Grid item md={4.7} sm={6} xs={12}>
                            <Card sx={{ maxWidth: "100%" }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    image={value.img}
                                />
                                <CardContent>
                                    <Grid sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <Typography sx={{ fontSize: "16px", fontWeight: "bold", color: "black" }}>
                                            {value.name}
                                        </Typography>
                                        <Typography sx={{ fontSize: "16px", fontWeight: "bold", color: "black" }}>
                                            Rs.150
                                        </Typography>
                                    </Grid>
                                    <Typography sx={{ fontSize: "12px", color: "#88878F", marginTop: "12px" }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking</Typography>
                                </CardContent>
                                <CardActions>
                                    <Typography><Button size="small" sx={{ fontSize: "12px", color: "white", backgroundColor: "#E7A356", padding: "7px 30px", borderRadius: "5px 0px 0px 5px" }}><EditIcon sx={{ fontSize: "16px" }} />Edit</Button><Button size="small" sx={{ fontSize: "12px", color: "white", backgroundColor: "#272522", padding: "7px 30px", borderRadius: "0px 5px 5px 0px" }}><DeleteIcon sx={{ fontSize: "16px" }} />Delete</Button></Typography>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                {/* <div>
                <button>Item</button><button>Item</button><button>Item</button>
                </div> */}
            </Paper>
        </>
    );
}

export default BestOffer;