import { Block } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./gallery.css";

// import footerlogo from "../assets/footerlogo.png"
import galleryimga from "../assets/galleryimga.png"
import galleryimgb from "../assets/galleryimgb.png"
import galleryimgc from "../assets/galleryimgc.png"
import galleryimgd from "../assets/galleryimgd.png"
import galleryimge from "../assets/galleryimge.png"
import galleryimgf from "../assets/galleryimgf.png"
import { useNavigate } from "react-router-dom";

const itemData = [
  {
    img: galleryimga,
  },
  {
    img: galleryimgb,
  },
  {
    img: galleryimgc,
  },
  {
    img: galleryimgd,
  },
  {
    img: galleryimge,
  },
  {
    img: galleryimgf,
  },
];

const ImgGallery: React.FC = () => {

const navigate = useNavigate();

  return (
    <>
      <Paper
        sx={{
          margin: "auto",
          maxWidth: "100%",
          flexGrow: 1,
          borderRadius: "0px",
          padding: "50px 5px",
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
          <Grid item md={6.8} sm={6} xs={12}>
            <Typography
              sx={{ fontSize: "22px", fontWeight: "bold", color: "black" }}
            >
              Our Gallery
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
                onClick={() => navigate("/moreimggallery") }
              >
                View All Gallery
              </Button>
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          {itemData.map((value) => (
            <Grid
              item
              md={3.2}
              sm={6}
              xs={12}
              sx={{ display: "flex", justifyContent: "center", width: "100%" }}
            >
              <Box maxWidth="100%" sx={{ padding: 2 }}>
                <Grid item sx={{ maxWidth: "100%" }}>
                  <Grid className="container">
                    <img
                      className="image"
                      src={value.img}
                      style={{ width: "100%" }}
                      alt="galleryaa"
                    />
                    <Grid style={{ width: "100%" }} className="middle">
                      <Typography style={{ width: "100px" }} className="text">
                        <EditIcon /> <DeleteIcon />
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </>
  );
};

export default ImgGallery;
