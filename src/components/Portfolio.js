import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PortfolioCard from "./PortfolioCard";
import { Grid } from "@mui/material";
import projects from "../static/projects";

const useStyles = makeStyles((theme) => ({
  root:{
   marginTop:"175px"
  },
  gridContainer: {
    padding:"40px"
  },
  heading: {
    paddingTop:"30px",
    paddingBottom:"30px",
    color: "#fff",
    textAlign: "center",
  },
}));
export default function Portfolio() {
  const classes = useStyles();
  return (
    <div className={classes.root} id="projects">
      <h1 className={classes.heading}>Projects</h1>
      <Grid
        container
        spacing={8}
        className={classes.gridContainer}
        justifyContent="center"
      >
        <Grid item xs={10} sm={6} md={4}>
          <PortfolioCard projects={projects[0]}/>
        </Grid>
        <Grid item xs={10} sm={6} md={4}>
          <PortfolioCard projects={projects[1]}/>
        </Grid>
        <Grid item xs={10} sm={6} md={4}>
          <PortfolioCard projects={projects[2]}/>
        </Grid>
      </Grid>
    </div>
  );
}

