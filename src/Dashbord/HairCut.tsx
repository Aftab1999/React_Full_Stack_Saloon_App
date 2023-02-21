import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Paper,
  Dialog,
  InputLabel,
} from "@mui/material";
import "./gallery.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Header from "../Dashbord/Header";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import Bridal from "../Dashbord/Bridal";
import { Box } from "@mui/system";
import itemData from "./Mockdata";
import haircutimga from "../assets/haircutimga.png";
import AddCategory from "./AddCategory";
import haircutbackground from "../assets/haircutbackground.jpg";
import Footer from "../Dashbord/Footer";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
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
            position: "absolute",
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

const HairCut: React.FC = () => {
  const navigate = useNavigate();

  const [open, setOpen] = React.useState<any>(false);

  const handleClickOpen = (value: any) => {
    setEditData(value);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [data, setData] = useState<any>({
    name: "",
    mobile: "",
    email: "",
  });
  const [editdata, setEditData] = useState<any>({
    
  
    editname: "",
  });
  const { name, mobile, email } = data;

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const Submit = (e: any) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <>
      <Header />
      <Paper
        sx={{
          margin: "auto",
          maxWidth: "100%",
          flexGrow: 1,
          borderRadius: "0px",
          padding: "60px 15px",
          backgroundColor: "#FDF6EE",
        }}
      >
        <AddCategory
          image={haircutbackground}
          title="Haircut"
          buttonTitle="Add New Haircut"
          onClick={handleClickOpen}
        />

        <Grid
          container
          spacing={2}
          //   justify="space-around" spacing={4}
          sx={{ display: "flex", justifyContent: "center", marginTop: "15px" }}
        >
          {itemData
            .filter((item: any) => item.type === "haircut")
            .map((value) => (
              <Grid key={value.id} item md={3.1} sm={6} xs={12}>
                <Card sx={{ maxWidth: "100%" }}>
                  {/* <img src={value.img} alt="" /> */}
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    image={value.img}
                    
                  />
                  <CardContent>
                    <Grid
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          color: "black",
                        }}
                      >
                        {value.name}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          color: "black",
                        }}
                      >
                        Rs.150
                      </Typography>
                    </Grid>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        color: "#88878F",
                        marginTop: "12px",
                      }}
                    >
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Typography>
                      <Button
                        size="small"
                        sx={{
                          fontSize: "12px",
                          color: "white",
                          backgroundColor: "#E7A356",
                          padding: "7px 30px",
                          borderRadius: "5px 0px 0px 5px",
                        }}
                        onClick={() => handleClickOpen(value)}
                      >
                        <EditIcon sx={{ fontSize: "16px" }} />
                        Edit
                      </Button>
                      <Button
                        size="small"
                        sx={{
                          fontSize: "12px",
                          color: "white",
                          backgroundColor: "#272522",
                          padding: "7px 30px",
                          borderRadius: "0px 5px 5px 0px",
                        }}
                      >
                        <DeleteIcon sx={{ fontSize: "16px" }} />
                        Delete
                      </Button>
                    </Typography>
                  </CardActions>

                  {/* <AddDialog image={image}/> */}
                  {/* <AddDialog/> */}
                  <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                    className="dialogbox"
                    fullWidth
                    // maxWidth="sm"
                    maxWidth="md"
                    // minWidth= "lg"
                  >
                    <BootstrapDialogTitle
                      id="customized-dialog-title"
                      onClose={handleClose}
                    ></BootstrapDialogTitle>

                    {/* <Grid container justify="space-around" spacing={8}></Grid> */}

                    <Box
                      sx={{
                        margin: "auto",
                        maxWidth: "700px",
                        flexGrow: 1,
                        borderRadius: "0px",
                        padding: "10px 15px",
                      }}
                    >
                     <Grid
                        item
                        xs={6}
                    
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          marginLeft: "130px",
                          marginRight: "130px",
                       
                        }}
                       >
                        <Grid item>
                          <img
                            style={{ width: "363px", margin: "50px" }}
                            src={editdata.img}
                            alt="haircut"
                          />
                        </Grid>  
                        {/* <Grid
                          item
                          sx={{
                            display: "inline-block",
                            justifyContent: "center",
                            maxWidth: "100%",
                          }}
                        ></Grid> */}
                        <Grid item xs={12}>
                          <form>
                            <Grid>
                              <InputLabel
                                htmlFor="component-disabled"
                                sx={{
                                  fontSize: "14px",
                                  color: "black",
                                  fontWeight: "bold",
                                  marginTop: "10px",
                                }}
                              >
                                Services Name
                              </InputLabel>
                              <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                // id="name"
                                // name="name"
                                // autoComplete="name"
                                value={editdata.name}
                                autoFocus
                                type="text"
                                placeholder="Enter Services"
                                // onChange={handleChange}
                                sx={{ backgroundColor: "#F0F0F0" }}
                              />
                            </Grid>
                            <Grid
                              container
                              sx={{
                                display: "flex",
                                justifyContent: "center",
                                width: "100%",
                              }}
                            >
                              <Grid item>
                                <InputLabel
                                  htmlFor="component-disabled"
                                  sx={{
                                    fontSize: "14px",
                                    color: "black",
                                    fontWeight: "bold",
                                    marginTop: "10px",
                                  }}
                                >
                                  Price
                                </InputLabel>
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
                                  placeholder="Price"
                                  onChange={handleChange}
                                  //   style = {{width: 100}} //assign the width as your requirement

                                  sx={{
                                    backgroundColor: "#F0F0F0",
                                    marginRight: "10px",
                                    width: 170,
                                  }}
                                />
                              </Grid>
                              <Grid item>
                                <InputLabel
                                  htmlFor="component-disabled"
                                  sx={{
                                    fontSize: "14px",
                                    color: "black",
                                    fontWeight: "bold",
                                    marginTop: "10px",
                                  }}
                                >
                                  Discounted
                                </InputLabel>
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
                                  //   style = {{width: 100}} //assign the width as your requirement

                                  sx={{
                                    backgroundColor: "#F0F0F0",
                                    width: 170,
                                  }}
                                />
                              </Grid>
                            </Grid>
                            <Grid>
                              <InputLabel
                                htmlFor="component-disabled"
                                sx={{
                                  fontSize: "14px",
                                  color: "black",
                                  fontWeight: "bold",
                                  marginTop: "10px",
                                }}
                              >
                                Short Description
                              </InputLabel>
                              <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="Mobile"
                                name="mobile"
                                autoComplete="mobile"
                                value={mobile}
                                autoFocus
                                type="number"
                                placeholder="Short Description"
                                onChange={handleChange}
                                sx={{ backgroundColor: "#F0F0F0" }}
                              />
                            </Grid>
                            <Grid>
                              <InputLabel
                                htmlFor="component-disabled"
                                sx={{
                                  fontSize: "14px",
                                  color: "black",
                                  fontWeight: "bold",
                                  marginTop: "10px",
                                }}
                              >
                                Description
                              </InputLabel>
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
                            <Typography
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginTop: "12px",
                              }}
                            >
                              <Button
                                size="small"
                                sx={{
                                  fontSize: "12px",
                                  color: "white",
                                  backgroundColor: "#E7A356",
                                  padding: "12px 78px",
                                  borderRadius: "5px",
                                }}
                                onClick={handleClickOpen}
                              >
                                <EditIcon sx={{ fontSize: "16px" }} />
                                Save
                              </Button>
                              <Button
                                size="small"
                                sx={{
                                  fontSize: "12px",
                                  color: "white",
                                  backgroundColor: "#272522",
                                  padding: "12px 78px",
                                  borderRadius: "5px",
                                }}
                              >
                                <DeleteIcon sx={{ fontSize: "16px" }} />
                                Delete
                              </Button>
                            </Typography>
                          </form>
                        </Grid>
                     </Grid>
                      {/* </Grid> */}
                    </Box>
                  </BootstrapDialog>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Paper>
      <Footer />
    </>
  );
};

export default HairCut;

