import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
 import { Link } from "@mui/material";
import { Link as Scroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#f2f2f2",
    fontSize: "1.3rem",
    marginTop: "20px",
    paddingTop: "20px",
    fontFamily: "Inconsolata",
    textAlign: "center",
  },
  gridContainer: {
    marginTop: "20px",
    paddingTop: "40px",
    paddingBottom: "40px",
  },
  header: {
    fontSize: "1.6rem",
  },
  link: {
    textDecoration: "none",
    color:"#000",
    cursor:"pointer",
  },
  logo: {
    textAlign: "center",
    paddingTop: "30px",
    fontSize: "1.3rem",
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: "1.2rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
  colorLastName:{
    color: "#20bf6b",
  }
}));
export default function Footer() {
  const classes = useStyles();
  return (
    <footer>
      <Box className={classes.root} id="contactMe">
        <Container maxWidth="lg">
          <Grid
            container
            spacing={7}
            className={classes.gridContainer}
            justifyContent="center"
          >
            <Grid item xs={12} sm={6}>
              <Box className={classes.header}>Contact Me</Box>
              <Box>
                <Link
                  target="_blank"
                  rel="noreferrer"
                  href="mailto:amanatov.zhanysh22@gmail.com"
                >
                  Gmail
                </Link>
              </Box>
              <Box>
                <Link
                  target="_blank"
                  rel="noreferrer"
                  href="https://t.me/zhanyshamanatov"
                >
                  Telegram
                </Link>
              </Box>
              <Box>
                <Link
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Zhanysh-Amanatov"
                >
                  GitHub
                </Link>
              </Box>
            </Grid>
            {/* second table */}
            <Grid item xs={12} sm={6}>
              <Box className={classes.header}>Site Map</Box>
              <Box>
                <Scroll to="aboutMe" smooth="true" offset={-200} className={classes.link}>
                  About Me
                </Scroll>
              </Box>
              <Box>
                <Scroll to="projects" smooth="true" offset={-60}  className={classes.link}>
                  Projects
                </Scroll>
              </Box>
              <Box>
                <Link href="https://github.com/Zhanysh-Amanatov/personal_website">
                  Source code
                </Link>
              </Box>
            </Grid>
            <Box className={classes.logo}>
              Zhanysh <span className={classes.colorLastName}>Amanatov</span> 
              &reg; 2021-{new Date().getFullYear()}
            </Box>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}
