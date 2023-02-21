import React from "react";
import {
  Grid,
  Button,
  ImageListItem,
  Box,
  Typography,
  Paper,
} from "@mui/material";
import bgimg from "../assets/bgimg.jpg";
import MockName from "./MockName";

interface IProps  {
  image: string,
  title: string,
  buttonTitle: string,
  onClick: Function,
}
const AddCategory: React.FC<IProps> = ({ image, title, buttonTitle, onClick }) => {


  return (
    <Box style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>

          <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            item
            md={9.3}
            xs={12}
            style={{
              width: "100%",
              height: "304px",
            
              backgroundImage: `url(${image})`,
              //  backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              position: 'relative',
            }}
          >
            <Typography
              sx={{
                fontSize:"22px",
                fontWeight:"bold",
                display: "flex",
                justifyContent: "center",
                color: "white",
                alignItems: "center",
                position: "absolute",
                top: "50%",
                left: "50%",

                transform: "translate(-50%, -50%)",
              }}
            >
              {title}
            </Typography>
          </Grid>
        </Grid>
        <Button
          variant="contained"
          sx={{
            marginTop: "-10px",
            
            display: "flex",
            justifyContent: "center",
            
            alignItems: "center",
           
            backgroundColor: "#E7A356",
          
          }}
          onClick={() => onClick()}
        >
          {buttonTitle}
        </Button>
        
    </Box>
  );
};

export default AddCategory;
