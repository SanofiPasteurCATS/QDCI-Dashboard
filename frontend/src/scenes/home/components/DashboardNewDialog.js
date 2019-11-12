// DEPENDANCIES
import React from "react";
import PropTypes from "prop-types";

// MATERIAL-UI
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";

import DashboardBuilder from "./DashboardBuilder";

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative",
    background: "#9BB0DB"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DashboardNewDialog(props) {
  //const { handleClose,open } = props;
  const { open, handleClose } = props;
  const classes = useStyles();

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {"Create A New Dashboard"}
          </Typography>
          <Button autoFocus color="inherit" onClick={handleClose}>
            Cancel
          </Button>
        </Toolbar>
      </AppBar>
      <DashboardBuilder onCreate={handleClose}></DashboardBuilder>
    </Dialog>
  );
}
