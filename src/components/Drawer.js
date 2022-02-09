import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  makeStyles,
  ListItemIcon,
} from "@material-ui/core";
import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link as Scroll } from "react-scroll";
import PersonIcon from "@material-ui/icons/Person";
import WallpaperIcon from "@material-ui/icons/Wallpaper";
import EmailIcon from "@material-ui/icons/Email";

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
    color: "#000",
    fontSize: "1.2rem",
    fontFamily: "Inconsolata",
    cursor: "pointer",
    "&:hover": {
      color: "grey",
      borderBottom: "1px solid black",
    },
  },
  icon: {
    color: "#fff",
  },
  button: {
    marginTop: "40px",
    marginLeft: "15px",
    backgroundColor: "#0078E7",
    borderRadius: "20px",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#86BAEB",
    },
  },
}));

const DrawerComponent = () => {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <div>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <br />
        <br />
        <List>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText>
              <Scroll
                to="aboutMe"
                smooth="true"
                offset={-200}
                className={classes.link}
                onClick={() => setOpenDrawer(false)}
              >
                About Me
              </Scroll>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <WallpaperIcon />
            </ListItemIcon>
            <ListItemText>
              <Scroll
                to="projects"
                smooth="true"
                offset={-60}
                className={classes.link}
                onClick={() => setOpenDrawer(false)}
              >
                Projects
              </Scroll>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText>
              <a
                href="https://docs.google.com/document/d/1lo19nl2NjHGps5QOEdu7bWTpKHHSKn46ip1IaOC_vbI/edit?usp=sharing&resourcekey=0-r6sQiosa0tTJE0iVNrrikw"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
                onClick={() => setOpenDrawer(false)}
              >
                Download CV
              </a>
            </ListItemText>
          </ListItem>
          <Divider />
        </List>
      </Drawer>
      <IconButton
        className={classes.icon}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </div>
  );
};

export default DrawerComponent;