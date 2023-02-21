import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import TocIcon from '@mui/icons-material/Toc';
import { Box, Divider, Drawer, IconButton, List, ListItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const useStyles = makeStyles(()=>({
    link:{
        textDecoration:"none",
        color: "blue",
        fontSize: "20px",
    },
    icon:{
        color: "white"
    }
}));



function DrawerComponent() {
    const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
         
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List style={{width:"300px"}}>
        <ListItem onClick={() => setOpenDrawer(false)}>
            
              <Link to="/" className={classes.link}>Home</Link>
            
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
            
              <Link to="/menu" className={classes.link}>Menu</Link>
            
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
            
              <Link to="/feature" className={classes.link}>Feature</Link>
            
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
            
              <Link to="/shop" className={classes.link}>Shop</Link>
            
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
            
              <Link to="/blog" className={classes.link}>Blog</Link>
            
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
            
              <Link to="/aboutus" className={classes.link}>About Us</Link>
            
          </ListItem>
          <Divider/>
        </List>
      </Drawer>
      <IconButton style={{color:"black"}} onClick={() => setOpenDrawer(!openDrawer)}className={classes.icon}>
        <Box sx={{display:"flex",flexDirection:"row",justifyContent:"flex-end", alignItems:"center",transform:"scale(3.0)"}}>
        <MenuIcon sx={{marginLeft:"10px"}}  />
        </Box>
      </IconButton>
    </>
  );
}
export default DrawerComponent;