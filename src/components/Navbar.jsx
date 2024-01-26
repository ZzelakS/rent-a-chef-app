import React, { useState } from "react";
import { BsCart2 } from "react-icons";
import { HiOutlineBars3 } from "react-icons/hi2";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from '../assets/images/Logo.png'
import '../assets/styles/LandingPage.css'

import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
    //    {
    //     text:"Home",
    //     icon: <HomeIcon/>
    //    },
  ];
  return (
    <nav>
      <div className="nav-logo-container"><Link to="/"><a href=""><img src={Logo} alt=''/></a></Link></div>
      <div className="navbar-links-container">
        <a href="">About Us</a>
        <a href="">Contact</a>
        {/* <a href="">Contact</a> */}
        <a href="">{/* <BsCart2 className='navbar-cart-icon'/> */}</a>
        <Link to="/login" ><a href="">Login</a></Link>
        <Link to="/splashscreen"><button className="primary-button">Sign Up</button></Link>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => {
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>;
            })}
          </List>
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
