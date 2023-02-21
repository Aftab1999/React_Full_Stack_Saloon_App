import React, { useState } from "react";
import AddCategory from "./AddCategory";
import categoryimgc from "../assets/categoryimgc.png";
import Header from "../Dashbord/Header";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import profileimg from "../assets/profileimg.jpg";
import profilebackimg from "../assets/profilebackimg.jpg";
import calbutton from "../assets/calbutton.jpg";
import termsbutton from "../assets/termsbutton.jpg";
import privacybutton from "../assets/privacybutton.jpg";
import BasicTable from "./BasicTable";
import Checkbox from "@mui/material/Checkbox";

const Profile: React.FC = () => {
  const [show, setShow] = useState<any>(false)
  const [show2, setShow2] = useState<any>(false)
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
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
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
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
            <Grid item md={9.3} xs={12}>
              <img
                style={{
                  width: "100%",
                  height: "304px",

                  //  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  position: "relative",
                }}
                src={profilebackimg}
                alt="img"
              />
            </Grid>
          </Grid>
          <Button sx={{ textAlign: "left" }}>
            <img
              src={profileimg}
              style={{
                width: "100px",
                marginTop: "-60px",
                borderRadius: "50%",
                border: "5px solid white",
                marginRight: "600px",

                backgroundColor: "#E7A356",
              }}
            />
          </Button>
        </Box>

        <Grid container sx={{ display: "flex", justifyContent: "center" }}>
          <Grid
            item
            md={9.2}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Grid item md={4.6} xs={12}>
              <Typography>Steve Smith</Typography>
              <Typography>stevesmith@gmail.com</Typography>
            </Grid>
            <Grid
              md={4.6}
              xs={12}
              item
              sx={{ display: "flex", justifyContent: "center" }}
            >
                 {/* <Box sx={{m: 5 }}> */}
             <Typography 
                sx={{
                
                  backgroundColor: "black",
                  padding: "5px 10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                 }}
                 > 
                 <Button sx={{ color: "white" }}>Edit Business Profile</Button>
             </Typography>
              <Typography 
                sx={{ backgroundColor: "#E7A356", padding: "5px 10px" }}
               >
                <Button sx={{ color: "white" }}>Logout</Button>
              </Typography>
              {/* </Box> */}
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "space-between",
            marginTop: "50px",
          }}
        >
          <Grid item md={3.1} sm={6} xs={12}>
            <Typography sx={{ textAlign: "center" }}>
              <Button>
                <img src={calbutton} alt="img" />
                Booking History
              </Button>
            </Typography>
          </Grid>
          <Grid item md={3.1} sm={6} xs={12}>
            <Typography sx={{ textAlign: "center" }}>
              <Button onClick={() => setShow(true)}>
                <img src={termsbutton} alt="img" />
                Term & Conditions
              </Button>
            </Typography>
          </Grid>
          <Grid item md={3.1} sm={6} xs={12}>
            <Typography sx={{ textAlign: "center" }}>
            <Button onClick={() => setShow2(true)}>
                <img src={privacybutton} alt="img" />
                Privacy Policy
              </Button>
            </Typography>
          </Grid>
        </Grid>

        <BasicTable />
        {
          show?
       
        <Grid
          container
          sx={{ display: "flex", justifyContent: "center", marginTop: "80px" }}
        >
          <Grid item md={9.3} sm={6} xs={12}>
            <Typography
              sx={{ fontSize: "25px", color: "black", fontWeight: "bold" }}
            >
              Terms & Conditions
            </Typography>
            <Typography sx={{ marginTop: "30px", color: "#88878F" }}>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut lobore et dolore magna aliqua. quis
              ipsum suspendisse ultrices gravida. risus commodo viverra maecenas
              accumasan lacus vel facilisis.
            </Typography>
            <Typography sx={{ marginTop: "15px", color: "#88878F" }}>
              quis ipsum suspendise ultrices gravida risus commodo viverra send
              do eiusmod maecenas accumenas lacus vel facilissis.
            </Typography>

            <Grid sx={{ marginTop: "15px", color: "#88878F" }}>
              <Grid
                item
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "center",
                }}
              >
                <Checkbox {...label} defaultChecked />
                <Typography>
                  it is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its. layout.
                </Typography>
              </Grid>
              <Grid
                item
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "center",
                }}
              >
                <Checkbox {...label} defaultChecked />
                <Typography>
                  the poin of using lorem ipsum is that it has a more-or-less
                  normal.
                </Typography>
              </Grid>
              <Grid
                item
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "center",
                }}
              >
                <Checkbox {...label} defaultChecked />
                <Typography>
                  there are many variations of passages of lorem ipsum
                  available, but the majourity have suffered alteration in some.
                </Typography>
              </Grid>
              <Grid
                item
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "center",
                }}
              >
                <Checkbox {...label} defaultChecked />
                <Typography>
                  contrary to popular, lorem ipsum is not simply random text it
                  has roots in a piece of classical.
                </Typography>
              </Grid>
            </Grid>
            <Typography sx={{ marginTop: "50px", color: "#88878F" }}>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut lobore et dolore magna aliqua. quis
              ipsum suspendisse ultrices gravida. risus commodo viverra maecenas
              accumasan lacus vel facilisis.lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              lobore et dolore magna aliqua. quis{" "}
            </Typography>
            <Typography sx={{ marginTop: "20px", color: "#88878F" }}>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut lobore et dolore magna aliqua. quis
              ipsum suspendisse ultrices gravida. risus commodo viverra maecenas
              accumasan lacus vel facilisis.lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              lobore et dolore magna aliqua. quis ipsum suspendisse ultrices
              gravida. risus commodo viverra maecenas accumasan lacus vel
              facilisis.lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut lobore et dolore magna aliqua.
              quis ipsum suspendisse ultrices gravida. risus commodo viverra
              maecenas accumasan lacus vel facilisis.
            </Typography>
          </Grid>
        </Grid>
         :null}
       {
         show2?
      
        <Grid
          container
          sx={{ display: "flex", justifyContent: "center", marginTop: "80px" }}
        >
          <Grid item md={9.3} sm={6} xs={12}>
            <Typography
              sx={{ fontSize: "25px", color: "black", fontWeight: "bold" }}
            >
              Privacy Policy
            </Typography>
            <Typography sx={{ marginTop: "30px", color: "#88878F" }}>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut lobore et dolore magna aliqua. quis
              ipsum suspendisse ultrices gravida. risus commodo viverra maecenas
              accumasan lacus vel facilisis.
            </Typography>
            <Typography sx={{ marginTop: "20px", color: "#88878F" }}>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut lobore et dolore magna aliqua. quis
              ipsum suspendisse ultrices gravida. risus commodo viverra maecenas
              accumasan lacus vel facilisis.lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              lobore et dolore magna aliqua. quislorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              lobore et dolore magna aliqua. quis ipsum suspendisse ultrices
              gravida. risus commodo viverra maecenas accumasan lacus vel
              facilisis.lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut lobore et dolore magna aliqua.
              quis
            </Typography>
            <Typography sx={{ marginTop: "20px", color: "#88878F" }}>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut lobore et dolore magna aliqua. quis
              ipsum suspendisse ultrices gravida. risus commodo viverra maecenas
              accumasan lacus vel facilisis.lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              lobore et dolore magna aliqua. quis{" "}
            </Typography>
            <Typography sx={{ marginTop: "20px", color: "#88878F" }}>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut lobore et dolore magna aliqua. quis
              ipsum suspendisse ultrices gravida. risus commodo viverra maecenas
              accumasan lacus vel facilisis.lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              lobore et dolore magna aliqua. quis ipsum suspendisse ultrices
              gravida. risus commodo viverra maecenas accumasan lacus vel
              facilisis.lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut lobore et dolore magna aliqua.
              quis ipsum suspendisse ultrices gravida. risus commodo viverra
              maecenas accumasan lacus vel facilisis.
            </Typography>
          </Grid>
        </Grid>
         :null}
      </Paper>
    </>
  );
};

export default Profile;
