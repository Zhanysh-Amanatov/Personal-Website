import {
  AppBar,
  CssBaseline,
  Toolbar,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link as Scroll } from "react-scroll";
import React from "react";
import DrawerComponent from "./Drawer";



const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#0C1E30",
    fontFamily: "Inconsolata",
  },
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    color: "#fff",
    fontSize: "1.3rem",
    flexGrow: "1",
    cursor: "pointer",
    marginLeft: "30px",
    letterSpacing:"2px",
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: "1.2rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.1rem",
    },
  },
  colorLastName: {
    color: "#20bf6b",
  },
  link: {
    textDecoration: "none",
    color: "#fff",
    fontSize: "1.2rem",
    marginRight: theme.spacing(10),
    cursor: "pointer",
    "&:hover": {
      color: "grey",
    },
  },
  button: {
    color: "#fff",
    backgroundColor: "#0078E7",
    borderRadius: "20px",
    "&:hover": {
      backgroundColor: "#86BAEB",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <AppBar position="sticky" className={classes.root}>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
        <Scroll to="home" smooth="true" offset={-100}>
          Zhanysh <span className={classes.colorLastName}>Amanatov</span>
          </Scroll>
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navLinks}>
            <Scroll to="aboutMe" smooth="true" offset={-200} className={classes.link}>
              About me
            </Scroll>
            <Scroll to="projects" smooth="true" offset={-60} className={classes.link}>
              Projects
            </Scroll>
            <a  href="https://docs.google.com/document/d/1lo19nl2NjHGps5QOEdu7bWTpKHHSKn46ip1IaOC_vbI/edit?usp=sharing&resourcekey=0-r6sQiosa0tTJE0iVNrrikw" target='_blank' rel='noopener noreferrer' className={classes.link}>
              Download CV
            </a>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
