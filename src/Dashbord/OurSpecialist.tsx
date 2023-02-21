import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  ImageListItem,
  Paper,
  Typography,
} from "@mui/material";
import { Box, textAlign } from "@mui/system";
import React, { Component } from "react";
import Slider from "react-slick";
import galleryaa from "../assets/galleryaa.png";
import aaimg from "../assets/aaimg.jpg";
import bbimg from "../assets/bbimg.jpg";
import ccimg from "../assets/ccimg.jpg";
import ddimg from "../assets/ddimg.jpg";
import eeimg from "../assets/eeimg.jpg";
import ffimg from "../assets/ffimg.jpg";
import ggimg from "../assets/ggimg.jpg";
import hhimg from "../assets/hhimg.jpg";
import teamleftimg from "../assets/teamleftimg.jpg";
import teamrightimg from "../assets/teamrightimg.jpg";
import personcut from "../assets/personcut.png";
import { makeStyles } from "@mui/styles";

import ContentCutIcon from "@mui/icons-material/ContentCut";
import { useMediaQuery, useTheme } from "@material-ui/core";
import DrawerTeam from "../Mobile/DrawerTeam";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

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
    backgroundColor: "#EBB273",
    color: "white",
    colorSpan: "white",
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

const OurSpecialist: React.FC = () => {
    
  const navigate = useNavigate();

  return (
    <>
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
                onClick={() => navigate("/moreourspecialist")}
              >
                View All Team
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
            </Grid>
          ))}
        </Grid>
      </Paper>
    </>
  );
};

export default OurSpecialist;
