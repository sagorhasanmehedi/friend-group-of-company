import * as React from "react";
import "./Header.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
import { Container, useTheme } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

export default function Header() {
  const theme = useTheme();
  const useStyle = makeStyles({
    navlist: {
      color: "#333333",
      textDecoration: "none",
      fontSize: "11px",
      fontWeight: "800",
      letterSpacing: "0.07em",
      padding: "35px 15px",
      lineHeight: " 20px",
    },

    navIcon: {
      [theme.breakpoints.up("sm")]: {
        display: "none !important",
      },
      color: "black !important",
    },
    navContainer: {
      [theme.breakpoints.down("sm")]: {
        display: "none !important",
      },
    },
    navBar: {
      backgroundColor: "#fff !important",
      minHeight: "92px !important",
      display: "flex",
      justifyContent: "center",
      boxShadow: "none !important",
    },
    navBox: {
      display: "flex !important",
      justifyContent: "space-between !important",
      alignItems: "center !important",
    },
    navImage: {},
  });

  const { navlist, navIcon, navContainer, navBar, navBox, navImage } =
    useStyle();
  const [state, setState] = React.useState(false);

  const list = (
    <Box sx={{ width: 200 }} role="presentation">
      <List>
        <ListItem>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText>HOME</ListItemText>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText>ABOUT</ListItemText>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText>FEATURES</ListItemText>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText>OVERVIEW</ListItemText>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText>PRICING</ListItemText>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText>TEAM </ListItemText>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText>CONTACT</ListItemText>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar className={navBar} position="static">
          <Container>
            <Box className={navBox}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                className={navIcon}
                onClick={() => setState(true)}
              >
                <MenuIcon />
              </IconButton>

              <img
                src="https://validthemes.online/themeforest/dostart/assets/img/logo.png"
                alt=""
                srcset=""
                className={navImage}
              />

              <Box className={navContainer}>
                <a className={navlist} href="gg">
                  HOME
                </a>
                <a className={navlist} href="gg">
                  ABOUT
                </a>
                <a className={navlist} href="gg">
                  FEATURES
                </a>
                <a className={navlist} href="gg">
                  OVERVIEW
                </a>
                <a className={navlist} href="gg">
                  PRICING
                </a>
                <a className={navlist} href="gg">
                  TEAM
                </a>
                <a className={navlist} href="gg">
                  CONTACT
                </a>
                <span className="buttonBox"></span>
                <Button className="navButton">LOGIN</Button>
              </Box>
            </Box>
          </Container>
        </AppBar>
      </Box>
      <div>
        <React.Fragment>
          <Drawer open={state} onClose={() => setState(false)}>
            {list}
          </Drawer>
        </React.Fragment>
      </div>
    </React.Fragment>
  );
}
