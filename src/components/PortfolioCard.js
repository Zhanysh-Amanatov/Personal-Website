import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minWidth: "200",
  },
  text:{
    fontFamily: "Inconsolata",
  }
});

export default function PortfolioCard({projects}) {
  const classes = useStyles();
  return (
    <Card className={classes.root} id="projects" >
      <CardActionArea>
        <CardMedia
         component="img"
          height="140"
          image={projects.imageUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className={classes.text}>
            {projects.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" className={classes.text}>
           {projects.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Visit website</Button>
          <Button size="small">GitHub</Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}

// root: {
//   maxWidth: 350,
//   background: "rgba(0,0,0,0.5)",
//   margin: "20px",
// },
// media: {
//   height: "240",
// },
// title: {
//   fontFamily: "Nunito",
//   fontWeight: "bold",
//   fontSize: "2rem",
// },
// description: {
//   fontFamily: "Nunito",
//   fontSize: "1.1rem",
//   color: "#ddd",
// },

// <Card className={classes.root}>
// {
//   /* <CardActionArea>
// <CardMedia
//   className={classes.media}
//   component="img"
//   height="140"
//   image="/static/images/cards/contemplative-reptile.jpg"
//   alt="green iguana"
// />
// <CardContent>
//   <Typography
//     gutterBottom
//     variant="h5"
//     component="div"
//     className={classes.title}
//   >
//     Lizard
//   </Typography>
//   <Typography
//     variant="body2"
//     color="text.secondary"
//     className={classes.description}
//   >
//     Lizards are a widespread group of squamate reptiles, with over 6,000
//     species, ranging across all continents except Antarctica
//   </Typography>
// </CardContent>
// <CardActions>
//   <Button size="small" className={classes.button}>
//     Visit Website
//   </Button>
// </CardActions>
// </CardActionArea>
// </Card> */
// }
