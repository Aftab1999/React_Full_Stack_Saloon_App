import React from "react"
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import DrawerComponent from "../Mobile/DrawerComponent";
import { useMediaQuery, useTheme } from "@material-ui/core";

import { useNavigate } from 'react-router-dom'


const useStyles = makeStyles(() => ({

  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "15px",
    margin: "25px",
    fontWeight: "bold",
    marginLeft: "25px",
    padding: "0px 2px",

    textAlign: "center",
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },

    "&:active": {
      // backgroundColor: "red",n
      // color:"red",
      color: "yellow",
      borderBottom: "1px solid white",
    },

    "link:hover": {
      color: "red",

    }
  },
}));
const Navbar: React.FC = () => {

  const classes = useStyles();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile: any = useMediaQuery<any>(theme.breakpoints.down("md"));

const handleToggle = (comp: any) => {
    navigate(comp)
}
  return (
    <>
      {isMobile ? (
        <DrawerComponent />

      ) : (
        <div>
          <Link to="/" className={classes.link} style={{
            color: "#E7A356",
            borderBottom: "1px solid white",
          }}>Home</Link>
          <Link to="/aboutus" className={classes.link}>AboutUs</Link>
          <Link to="/offers" className={classes.link} onClick={() => handleToggle("/offers")}>Offers</Link>
          <Link to="/services" className={classes.link}>Services</Link>
          <Link to="/gallery" className={classes.link}>Gallery</Link>
          <Link to="/team" className={classes.link}>Team</Link>
          <Link to="/testimonials" className={classes.link}>Testimonials</Link>
          <Link to="/blog" className={classes.link}>Blog</Link>
        </div>
      )}
    </>
  )
}

export default Navbar;


// https://stackoverflow.com/questions/31178653/how-to-keep-active-css-style-after-click-a-button