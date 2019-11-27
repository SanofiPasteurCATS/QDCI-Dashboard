import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// MATERIAL_UI
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

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

export default function DashboardCard(props) {
  const classes = useStyles();
  const { author, title, level } = props.dashboard;
  const { onEditClick, onRemoveClick } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Card className={classes.card}>
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
          <Button className={classes.viewBtn} size="medium">
            <Link to={`/boardroom/${props.dashboard.id}`}>VIEW</Link>
          </Button>
          <IconButton
            aria-label="options for dashboard card"
            aria-controls="menu-dashboard"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <MoreHorizIcon />
          </IconButton>
        </CardActions>
      </Card>
      <Menu
        id="menu-dashboard"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            onEditClick(props.dashboard);
          }}
        >
          Edit
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            onRemoveClick(props.dashboard);
          }}
        >
          Delete
        </MenuItem>
      </Menu>
    </>
  );
}

DashboardCard.propTypes = {
  onEditClick: PropTypes.func.isRequired,

  onRemoveClick: PropTypes.func.isRequired,

  dashboard: PropTypes.shape({
    title: PropTypes.string,

    author: PropTypes.string,

    level: PropTypes.number,

    dashboard_type: PropTypes.dashboard_type,

    id: PropTypes.number
  })
};
