import { Box, Button, Card, CardActions, CardContent,Dialog, CardMedia, DialogTitle, Grid, IconButton, InputLabel, Paper, TextField, Typography } from "@mui/material";
import React, {useState} from "react"
import gallerybb from "../assets/gallerybb.jpg"
import gallerygg from "../assets/gallerygg.jpg"
import ourblogimg from "../assets/ourblogimg.jpg"
import categoryimgb from "../assets/categoryimgb.png"
// import categoryimgb from "../assets/categoryimgb.png"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Header from '../Dashbord/Header';
import AddCategory from './AddCategory';
import { useNavigate } from "react-router-dom";
import Footer from "../Dashbord/Footer"
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import personcut from "../assets/personcut.png"


// const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//     '& .MuiDialogContent-root': {
//         padding: theme.spacing(2),
//     },
//     '& .MuiDialogActions-root': {
//         padding: theme.spacing(1),
//     },
// }));

// export interface DialogTitleProps {
//     id: string;
//     children?: React.ReactNode;
//     onClose: () => void;
// }

// const BootstrapDialogTitle = (props: DialogTitleProps) => {
//     const { children, onClose, ...other } = props;

//     return (
//         <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
//             {children}
//             {onClose ? (
//                 <IconButton
//                     aria-label="close"
//                     onClick={onClose}
//                     sx={{
//                         position: 'absolute',
//                         right: 8,
//                         top: 8,
//                         color: (theme) => theme.palette.grey[500],
//                     }}
//                 >
//                     <CloseIcon />
//                 </IconButton>
//             ) : null}
//         </DialogTitle>
//     );
// };

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

const MoreOurBlog: React.FC = () => {

    const navigate = useNavigate();


    const [open, setOpen] = React.useState<any>(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [data, setData] = useState<any>({
        name: '',
        mobile: '',
        email: ''
    });
    const { name, mobile, email } = data;

    const handleChange = (e: any) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const Submit = (e: any) => {
        e.preventDefault();
        console.log(data);


    }

    return (
        <>
            <Header />
            <Paper sx={{
                margin: 'auto',
                maxWidth: "100%",
                flexGrow: 1,
                borderRadius: "0px",
                padding: "50px 15px",
                backgroundColor: "#FDF6EE"

            }}>



                <AddCategory image={categoryimgb} title="Add Blog" buttonTitle="Add a New Blog" onClick={() => alert(1)} />

                <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Grid item md={6.6} sm={6} xs={12}>
                        <Typography sx={{ fontSize: "22px", fontWeight: 'bold', color: "black" }}>Our Blogs</Typography>
                        <Typography sx={{ borderBottom: "4px solid #E7A356", width: "25px", marginTop: "10px" }}></Typography>
                    </Grid>
                    <Grid item md={2.5} sm={6} xs={6}>
                        <Typography sx={{ backgroundColor: "black", borderRadius: "5px", textAlign: 'center' }}><Button sx={{ fontSize: "12px", color: "white", textAlign: "center" }} onClick={() => navigate("/dashbord")}>Back to Home</Button></Typography>
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
                                    <Typography><Button size="small" sx={{ fontSize: "12px", color: "white", backgroundColor: "#E7A356", padding: "7px 30px", borderRadius: "5px 0px 0px 5px" }} onClick={handleClickOpen}><EditIcon sx={{ fontSize: "16px" }} />Edit</Button><Button size="small" sx={{ fontSize: "12px", color: "white", backgroundColor: "#272522", padding: "7px 30px", borderRadius: "0px 5px 5px 0px" }}><DeleteIcon sx={{ fontSize: "16px" }} />Delete</Button></Typography>
                                </CardActions>
                            </Box>

                            {/* <BootstrapDialog
                                onClose={handleClose}
                                aria-labelledby="customized-dialog-title"
                                open={open}
                            >
                                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                                    Modal title
                                </BootstrapDialogTitle>

                                <Box sx={{

                                    margin: 'auto',
                                    maxWidth: "100%",
                                    flexGrow: 1,
                                    borderRadius: "0px",
                                    padding: "10px 15px",
                                }}>

                                    <Grid container spacing={2} style={{ display: "flex", justifyContent: "center" }}>
                                        <Grid item >
                                            <img style={{ width: "250px" }} src={personcut} alt='haircut' />
                                        </Grid>
                                        <Grid item sx={{ display: "inline-block", justifyContent: "center", maxWidth: "100%" }}>
                                            <form>

                                                <Grid container sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
                                                    <Grid item>
                                                        <InputLabel htmlFor="component-disabled" sx={{ fontSize: "14px", color: "black", fontWeight: "bold", marginTop: "10px" }}>Specialist Name</InputLabel>
                                                        <TextField
                                                            variant="outlined"
                                                            margin="normal"
                                                            required

                                                            id="Mobile"
                                                            name="mobile"
                                                            autoComplete="mobile"
                                                            value={mobile}
                                                            autoFocus
                                                            type="number"
                                                            placeholder="Prize"
                                                            onChange={handleChange}
                                                            sx={{ backgroundColor: "#F0F0F0", marginRight: "10px" }}
                                                        />
                                                    </Grid>
                                                    <Grid item>
                                                        <InputLabel htmlFor="component-disabled" sx={{ fontSize: "14px", color: "black", fontWeight: "bold", marginTop: "10px" }}>Specialist Work Area</InputLabel>
                                                        <TextField
                                                            variant="outlined"
                                                            margin="normal"
                                                            required

                                                            id="Mobile"
                                                            name="mobile"
                                                            autoComplete="mobile"
                                                            value={mobile}
                                                            autoFocus
                                                            type="number"
                                                            placeholder="Discount"
                                                            onChange={handleChange}
                                                            sx={{ backgroundColor: "#F0F0F0" }}
                                                        />
                                                    </Grid>
                                                </Grid>

                                                <Grid>
                                                    <InputLabel htmlFor="component-disabled" sx={{ fontSize: "14px", color: "black", fontWeight: "bold", marginTop: "10px" }}>About Specialist</InputLabel>
                                                    <TextField
                                                        variant="outlined"
                                                        margin="normal"
                                                        required
                                                        fullWidth
                                                        id="email"
                                                        name="email"
                                                        autoComplete="email"
                                                        value={email}
                                                        autoFocus
                                                        type="email"
                                                        placeholder="Description"
                                                        onChange={handleChange}
                                                        sx={{ backgroundColor: "#F0F0F0" }}
                                                    />
                                                </Grid>
                                                <Typography sx={{ display: "flex", justifyContent: "space-between", marginTop: "12px" }}><Button size="small" sx={{ fontSize: "12px", color: "white", backgroundColor: "#E7A356", padding: "12px 78px", borderRadius: "5px" }} onClick={handleClickOpen}><EditIcon sx={{ fontSize: "16px" }} />Save</Button>
                                                    <Button size="small" sx={{ fontSize: "12px", color: "white", backgroundColor: "#272522", padding: "12px 78px", borderRadius: "5px" }}><DeleteIcon sx={{ fontSize: "16px" }} />Delete</Button></Typography>

                                            </form>
                                        </Grid>

                                    </Grid>
                                </Box>
                            </BootstrapDialog> */}
                        </Grid>
                    ))}
                </Grid>


            </Paper>
            <Footer />
        </>
    )
}

export default MoreOurBlog;