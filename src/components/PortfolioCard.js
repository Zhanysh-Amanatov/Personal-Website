import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
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
    <Card className={classes.root} >
      <div>
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
      </div>
    </Card>
  );
}
