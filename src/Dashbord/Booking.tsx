import React from "react";
import {
  CardContent,
  Box,
  Grid,
  Paper,
  Typography,
  Button,
} from "@mui/material";
import profileimg from "../assets/profileimg.jpg";
import { useNavigate } from "react-router-dom";
import { Tabs } from "@material-ui/core";
import internal from "stream";

const itemData = [
  {
    name: "James Bond",
    img: profileimg,
    orderId: "2345",
    price: "Rs.120",
  },
  {
    name: "Smith Warner",
    img: profileimg,
    orderId: "5456",
    price: "Rs.190",
  },
  {
    name: "John Doe",
    img: profileimg,
    orderId: "4875",
    price: "Rs.150",
  },
  {
    name: "Kaira Smith",
    img: profileimg,
    orderId: "9587",
    price: "Rs.320",
  },
];

const Booking: React.FC = () => {
  const [selectedDate, setSelectedDate] = React.useState<any>(3);
  const [itemDate, setItemDate] = React.useState<any>([]);

  const navigate = useNavigate();

  const handleToggle = (id: any) => {
    setSelectedDate(id);
  };
  

  React.useEffect(() => {
    let dt = new Date();
    dt.setDate(dt.getDate() - 3);
    const temp = [];
    for (let i = 0; i < 7; i++) {
      temp.push({
        id: i,
        day: dt.toLocaleDateString(undefined, { day: "2-digit" }),
        dayName: dt.toLocaleDateString(undefined, { weekday: "long" }),
      });
      dt.setDate(dt.getDate() + 1);
    }
    setItemDate(temp);
  }, []);

  return (
    <>
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
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {itemDate.map((item: any) => (
            <Grid item md={1} sm={1} xs={2.5}>
              <Button
                onClick={() => handleToggle(item.id)}
                sx={{
                  backgroundColor:
                    item.id === selectedDate ? "#E7A356" : "#fff",
                  color: "#000",
                  width: "100%",
                  fontSize: "16px",
                  fontWeight: "bold",
                  textAlign: "center",
                  display: "block",
                  padding: "5px 0px ",
                  lineHeight: "20px",
                }}
              >
                {item.day} <br />
                <span style={{ fontSize: "10px", color: "#88878F" }}>
                  {item.dayName}
                </span>
              </Button>
            </Grid>
          ))}
        </Grid>

        <Grid
          container
          spacing={2}
          sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
        >
          {itemData.map((value) => (
            <Grid item md={4.7} sm={6} xs={12}>
              <Box
                sx={{
                  maxWidth: "100%",
                  borderRadius: "20px",
                  backgroundColor: "white",
                }}
              >
                <CardContent>
                  <Grid sx={{ padding: "10px" }}>
                    <Grid
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Grid
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Grid>
                          <img
                            style={{ width: "60px" }}
                            src={value.img}
                            alt="profileimg"
                          />
                        </Grid>
                        <Grid sx={{ marginLeft: "10px" }}>
                          <Typography
                            sx={{
                              fontSize: "16px",
                              fontWeight: "bold",
                              color: "#E7A356",
                            }}
                          >
                            {value.name}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "12px",
                              color: "black",
                              fontWeight: "bold",
                            }}
                          >
                            {value.orderId}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid>
                        <Typography
                          sx={{
                            fontSize: "16px",
                            color: "#E7A356",
                            fontWeight: "bold",
                          }}
                        >
                          {value.price}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid sx={{ marginTop: "12px" }}>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        Services
                      </Typography>
                      <Grid
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginTop: "7px",
                        }}
                      >
                        <Typography
                          sx={{
                            backgroundColor: "#F0F0F0",
                            borderRadius: "5px",
                          }}
                        >
                          <Button sx={{ fontSize: "12px", color: "#88878F" }}>
                            Hair Color
                          </Button>
                        </Typography>
                        <Typography
                          sx={{
                            backgroundColor: "#F0F0F0",
                            borderRadius: "5px",
                          }}
                        >
                          <Button sx={{ fontSize: "12px", color: "#88878F" }}>
                            Body Massage
                          </Button>
                        </Typography>
                        <Typography
                          sx={{
                            backgroundColor: "#F0F0F0",
                            borderRadius: "5px",
                          }}
                        >
                          <Button sx={{ fontSize: "12px", color: "#88878F" }}>
                            Shaving
                          </Button>
                        </Typography>
                        <Typography
                          sx={{
                            backgroundColor: "#F0F0F0",
                            borderRadius: "5px",
                          }}
                        >
                          <Button sx={{ fontSize: "12px", color: "#88878F" }}>
                            Haircut
                          </Button>
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid sx={{ marginTop: "12px" }}>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        Time{" "}
                        <span style={{ fontSize: "12px", color: "#88878F" }}>
                          Afternoon 3:00 Pm
                        </span>
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Typography sx={{ textAlign: "center", marginTop: "12px" }}>
          <Button
            sx={{ color: "#88878F", textAlign: "center" }}
            onClick={() => navigate("/morebooking")}
          >
            View All Booking
          </Button>
        </Typography>
      </Paper>
    </>
  );
};

export default Booking;
function dateToString(arg0: any) {
  throw new Error("Function not implemented.");
}

function addDays(date: any, arg1: number): any {
  throw new Error("Function not implemented.");
}
