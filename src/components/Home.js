import React, { useEffect, useState } from "react";
import { makeStyles, Collapse, IconButton } from "@material-ui/core";
import { Link as Scroll } from "react-scroll";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import TelegramIcon from "@material-ui/icons/Telegram";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: "2rem",
  },
  fullName: {
    color: "#fff",
    fontSize:"2.4rem",
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: "2.3rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.2rem",
    },
  },
  colorLastName: {
    color: "#20bf6b",
  },
  description: {
    color: "#fff",
    fontSize:"2rem",
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: "1.9rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.8rem",
    },
  },
  socialmedia: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "space-evenly",
  },
  link: {
    fontSize: "2rem",
    cursor: "pointer",
    color: "#fff",
    "&:hover": {
      color: "grey",
    },
  },
  arrowDown: {
    color: "#20bf6b",
    fontSize: "4rem",
    "&:hover": {
      color: "green",
    },
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: "3.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "3rem",
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <div className={classes.root} id="home">
      <div className={classes.fullName}>
        Zhanysh <span className={classes.colorLastName}>Amanatov</span>
      </div>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1200 } : {})}
        collapsedSize={1}
      >
        <div className={classes.description}>Frontend Developer</div>
        <div className={classes.socialmedia}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Zhanysh-Amanatov"
          >
            <GitHubIcon className={classes.link} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:amanatov.zhanysh22@gmail.com"
          >
            <MailOutlineIcon className={classes.link} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://t.me/zhanyshamanatov"
          >
            <TelegramIcon className={classes.link} />
          </a>
        </div>
        <Scroll to="aboutMe" smooth={true} offset={-200}>
          <IconButton>
            <ExpandMoreIcon className={classes.arrowDown} />
          </IconButton>
        </Scroll>
      </Collapse>
    </div>
  );
};

export default Home;
