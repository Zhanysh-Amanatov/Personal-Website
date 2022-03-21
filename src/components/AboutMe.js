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
      <p className={classes.text}>
        I'm Zhanysh Amanatov.<br />
        21 years old.Self taught developer.<br />
        My stack:<br />
        <b>React</b>(Middle)<br/>
        <b>Redux</b><br/>
        <b>Material UI</b><br/>
        <b>Saas</b><br/>
        In all projects the Frontend part has been done.Data saved in localStorage.
        <br/>
      </p>
    </div>
  );
}
