import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flexStart",
    fontSize: "1.6rem",
    textAlign:"start",
    paddingLeft:"20px",
    paddingRight:"20px",
    fontFamily: "Inconsolata",
    color:"#fff",
    paddingBottom:"150px"
  },
  text: {
   marginTop:"-10px",
  },
}));
export default function AboutMe() {
  const classes = useStyles();
  return (
    <div className={classes.root} id='aboutMe' >
      <h3 className={classes.hey}>
        Hey!
      </h3>
    </div>
  );
}
