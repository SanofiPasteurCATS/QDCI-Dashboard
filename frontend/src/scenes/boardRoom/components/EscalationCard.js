import React from "react";
import PropTypes from "prop-types";

// MATERIAL_UI
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    marginBottom: "20px"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginTop: "5px"
  },
  viewBtn: {
    marginLeft: "auto"
  }
});

export default function EscalationCard(props) {
  const classes = useStyles();
  const { selected, handleClick } = props;
  const { author, title, level, id } = props.dashboard;

  const styles = selected === id ? { border: "#9BB0DB solid 2px" } : {};

  return (
    <Card className={classes.card} style={styles}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Author: {author}
        </Typography>
        <Typography color="textSecondary">Level: {level}</Typography>
      </CardContent>
      <CardActions>
        <Button size="medium" onClick={() => handleClick(id)}>
          SELECT
        </Button>
      </CardActions>
    </Card>
  );
}

EscalationCard.propTypes = {
  dashboard: PropTypes.shape({
    title: PropTypes.string,

    author: PropTypes.string,

    level: PropTypes.number,

    dashboard_type: PropTypes.dashboard_type,

    id: PropTypes.number
  })
};
