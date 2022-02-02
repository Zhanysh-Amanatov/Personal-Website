import React from "react";
import { CssBaseline, makeStyles } from "@material-ui/core";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import { Background } from "./components/Background";
import Footer from "./components/Footer";
import Home from "./components/Home";
const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Inconsolata",
    backgroundColor: "#0C1E30",
  },
}));
export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Background /> */}
      <CssBaseline />
      <Header />
      <Home />
      <AboutMe />
      <Portfolio />
      <Footer />
    </div>
  );
}

