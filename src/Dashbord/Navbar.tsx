import React from "react"
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import DrawerComponent from "../Mobile/DrawerComponent";
import { useMediaQuery, useTheme } from "@material-ui/core";



const useStyles = makeStyles(() => ({
 
    link: {
      textDecoration: "none",
      color: "black",
      fontSize: "15px",
      margin: "25px",
      fontWeight:"bold",
      marginLeft:"25px",
      padding:"0px 2px",
      
      textAlign:"center",
      "&:hover": {
        color: "yellow",
        borderBottom: "1px solid white",
      },

     "&:active" : {
        backgroundColor: "red",
        color:"red"
    },

    "link:hover" :{
          color:"red",
    }
    },
  }));

const Navbar:React.FC = () => {

    const classes = useStyles();
    const theme = useTheme();
    const isMobile:any = useMediaQuery<any>(theme.breakpoints.down("md"));
    

    return (
        <>
        {isMobile ? (
          <DrawerComponent />
          
        ) : (
            <div>
                <Link to="/" className={classes.link}>Home</Link>
                <Link to="/dashbord" className={classes.link}>Dashboard</Link>
                <Link to="/morebooking" className={classes.link}>Booking</Link>
                <Link to="/morecategory" className={classes.link}>Category</Link>
                <Link to="/morebestoffer" className={classes.link}>Offers</Link>
                <Link to="/moreimggallery" className={classes.link}>Team</Link>
                <Link to="/moreourblog" className={classes.link}>Blog</Link>
            </div>
        )}
        </>
    )
}

export default Navbar;