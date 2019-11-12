// DEPENDANCIES
import React, { Fragment } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%"
  },
  card: {
    minWidth: 275,
    minHeight: 180,
    marginBottom: "20px"
  },
  icon: {
    margin: "auto",
    fontSize: 80,
    color: "#9bb0db"
  },
  content: {
    width: "100%",
    height: "100%",
    display: "flex"
  }
});

const NewCard = props => {
  const classes = useStyles();
  const { handleClick } = props;

  return (
    <Grid container spacing={2} className={classes.root}>
      <IconButton className={classes.icon} onClick={handleClick}>
        <AddIcon className={classes.icon} />
      </IconButton>
    </Grid>
  );
};

export default NewCard;
