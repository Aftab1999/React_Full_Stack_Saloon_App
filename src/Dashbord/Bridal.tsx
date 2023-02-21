import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { DialogActions, DialogContent, DialogTitle, Grid, IconButton, Paper, Dialog } from '@mui/material';
import Footer from "../Dashbord/Footer"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Header from '../Dashbord/Header';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import itemData from "./Mockdata"
import categoryimgb from "../assets/categoryimgb.png"
import AddCategory from "./AddCategory";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};




const Bridal: React.FC = () => {

    const navigate = useNavigate();

    const [open, setOpen] = React.useState<any>(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };



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
                <AddCategory image={categoryimgb} title="Add Bridal" buttonTitle="Add a New Services" onClick={() => alert(1)} />


                <Grid container spacing={2} sx={{ display: "flex", justifyContent: "center", marginTop: "15px" }}>
                    {itemData.filter((item: any) => item.type === "bridal").map((value) => (
                        <Grid item md={3.1} sm={6} xs={12}>
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
                                    <Typography><Button size="small" sx={{ fontSize: "12px", color: "white", backgroundColor: "#E7A356", padding: "7px 30px", borderRadius: "5px 0px 0px 5px" }} onClick={handleClickOpen}><EditIcon sx={{ fontSize: "16px" }} />Edit</Button>
                                        <Button size="small" sx={{ fontSize: "12px", color: "white", backgroundColor: "#272522", padding: "7px 30px", borderRadius: "0px 5px 5px 0px" }}><DeleteIcon sx={{ fontSize: "16px" }} />Delete</Button></Typography>
                                </CardActions>
                                <BootstrapDialog
                                    onClose={handleClose}
                                    aria-labelledby="customized-dialog-title"
                                    open={open}
                                >
                                    <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                                        Modal title
                                    </BootstrapDialogTitle>
                                    <DialogContent dividers>
                                        <Typography gutterBottom>
                                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                                            consectetur ac, vestibulum at eros.
                                        </Typography>
                                        <Typography gutterBottom>
                                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                                        </Typography>
                                        <Typography gutterBottom>
                                            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
                                            magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
                                            ullamcorper nulla non metus auctor fringilla.
                                        </Typography>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button autoFocus onClick={handleClose}>
                                            Save changes
                                        </Button>
                                    </DialogActions>
                                </BootstrapDialog>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Paper>
            <Footer />
        </>
    );
}


export default Bridal;