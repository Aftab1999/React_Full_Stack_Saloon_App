import React from 'react';

import { useNavigate } from 'react-router';
import { Box, Button, Card, Container, Grid, Paper, TextField, Typography } from '@mui/material';


const SeeAllServices: React.FC = (props: any) => {

    


    return (
        < >
            <div >
                <Container
                    maxWidth='lg'
                >



                    <Grid
                        container
                        spacing={10}


                    >
                        <Card sx={{ width: '450px', padding: "30px", marginLeft: "420px", marginTop: "150px",backgroundColor:"black" }}>
                            <Typography variant='h4' textAlign="center" sx={{color:"white"}}>Services</Typography>
                            <Typography sx={{fontSize:"18px", marginTop:"30px",color:"white"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Typography>
                        </Card>
                    </Grid>



                </Container>

            </div>
        </>
    );
}

export default SeeAllServices;