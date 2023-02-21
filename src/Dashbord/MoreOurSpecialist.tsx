import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  ImageListItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Box, textAlign } from "@mui/system";
import React, { useState } from "react";
import teamleftimg from "../assets/teamleftimg.jpg";
import teamrightimg from "../assets/teamrightimg.jpg";
import personcut from "../assets/personcut.png";
import { makeStyles } from "@mui/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Header from "../Dashbord/Header";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import Footer from "../Dashbord/Footer";
import {
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Dialog,
  InputLabel,
} from "@mui/material";

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

const itemData = [
  {
    name: "Emma Wastson",
    img: teamleftimg,
    title: "Haircut & Massage Specialist",
    display: "inline-block",
    backgroundColor: "#F9E3C1",
    color: "#272522",
    colorSpan: "#88878F",
  },
  {
    name: "James Franco",
    img: personcut,
    title: "Haircut Specialist",
    display: "block",
    backgroundColor: "#F9E3C1",
    color: "#272522",
    colorSpan: "#88878F",
  },
  {
    name: "James Franco",
    img: teamrightimg,
    title: "Haircut Specialist",
    display: "inline-block",
    backgroundColor: "#F9E3C1",
    color: "#272522",
    colorSpan: "#88878F",
  },
  {
    name: "Emma Wastson",
    img: teamleftimg,
    title: "Haircut & Massage Specialist",
    display: "inline-block",
    backgroundColor: "#F9E3C1",
    color: "#272522",
    colorSpan: "#88878F",
  },
  {
    name: "James Franco",
    img: personcut,
    title: "Haircut Specialist",
    display: "block",
    backgroundColor: "#F9E3C1",
    color: "#272522",
    colorSpan: "#88878F",
  },
  {
    name: "James Franco",
    img: teamrightimg,
    title: "Haircut Specialist",
    display: "inline-block",
    backgroundColor: "#F9E3C1",
    color: "#272522",
    colorSpan: "#88878F",
  },
];

const MoreOurSpecialist: React.FC = () => {
  const [image, setImage] = React.useState<any>(null)
  const navigate = useNavigate();

  const [open, setOpen] = React.useState<any>(false);

  const handleClickOpen = (item: any) => {
    setImage(item.img)
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
          padding: "40px 15px",
        }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item md={6.5} sm={6} xs={12}>
            <Typography
              sx={{ fontSize: "22px", fontWeight: "bold", color: "black" }}
            >
              Our Specialist
            </Typography>
            <Typography
              sx={{
                borderBottom: "4px solid #E7A356",
                width: "25px",
                marginTop: "10px",
              }}
            ></Typography>
          </Grid>
          <Grid item md={2.5} sm={6} xs={6}>
            <Typography
              sx={{
                backgroundColor: "black",
                borderRadius: "5px",
                textAlign: "center",
              }}
            >
              <Button
                sx={{ fontSize: "12px", color: "white", textAlign: "center" }}
                onClick={() => navigate("/dashbord")}
              >
                Bact to Home
              </Button>
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
        >
          {itemData.map((value) => (
            <Grid item md={3.1} sm={6} xs={12}>
              <Box
                sx={{
                  maxWidth: "100%",
                  padding: "10px",
                  display: value.display,
                  justifyContent: "center",
                }}
              >
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="350"
                  image={value.img}
                />
                {/* <img className="imagee" src={aaimg} style={{ width: "100%", height: "270px" }} alt="aaimg" /> */}
                <CardContent
                  sx={{
                    textAlign: "center",
                    backgroundColor: value.backgroundColor,
                    maxWidth: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontweight: "bolder",
                      color: value.color,
                    }}
                  >
                    {value.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontweight: "bold",
                      color: value.colorSpan,
                    }}
                  >
                    {value.title}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    marginTop: "15px",
                  }}
                >
                  <Typography>
                    <Button
                      size="small"
                      sx={{
                        fontSize: "12px",
                        color: "white",
                        backgroundColor: "#E7A356",
                        padding: "12px 35px",
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
                        padding: "12px 35px",
                        borderRadius: "0px 5px 5px 0px",
                      }}
                    >
                      <DeleteIcon sx={{ fontSize: "16px" }} />
                      Delete
                    </Button>
                  </Typography>
                </CardActions>
              </Box>
              <BootstrapDialog
                fullWidth
                maxWidth="md"
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
              >
                <BootstrapDialogTitle
                  id="customized-dialog-title"
                  onClose={handleClose}
                >
                  Modal title
                </BootstrapDialogTitle>

                <Box
                  sx={{
                    margin: "auto",
                    maxWidth: "100%",
                    flexGrow: 1,
                    borderRadius: "0px",
                    padding: "10px 15px",
                  }}
                >
                  <Grid
                    item
                    xs={6}
                    // container
                    spacing={2}
                    style={{
                         display: "flex", 
                        justifyContent: "center",
                        marginLeft: "180px",
                        marginRight: "190px",
                
                }}
                  >
                    <Grid item>
                      <img
                        style={{ width: "250px", 
                        margin: "5px",
                        // marginBottom: "25px",
                        // paddingTop: "60px",
                        paddingBottom: "60px",

                     }}
                        src={image}
                        alt="haircut"
                      />
                    </Grid>
                    <Grid
                      item xs={12}
                      sx={{
                        display: "inline-block",
                        justifyContent: "center",
                        maxWidth: "100%",
                      }}
                    >
                      <form>
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
                              Specialist Name
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
                              placeholder="Prize"
                              onChange={handleChange}
                              sx={{
                                backgroundColor: "#F0F0F0",
                                marginRight: "10px",
                                width: 200,
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
                              Specialist Work Area
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
                              sx={{ backgroundColor: "#F0F0F0",
                              width: 200,
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
                            About Specialist
                          </InputLabel>
                          <TextField
                           multiline
                           rows={4}
                           maxRows={6}
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
                </Box>
              </BootstrapDialog>
            </Grid>
          ))}
        </Grid>
      </Paper>
      <Footer />
    </>
  );
};

export default MoreOurSpecialist;
