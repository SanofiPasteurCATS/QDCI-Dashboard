import React from "react";

// MATERIAL-UI
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import EmailIcon from "@material-ui/icons/Email";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import CardContent from "@material-ui/core/CardContent";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%"
  },
  heading: {
    marginBottom: theme.spacing(3)
  },
  icon: {
    marginRight: theme.spacing(1)
  }
}));
const Contact = props => {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      justify="center"
      className={classes.root}
    >
      <Card>
        <CardContent>
          <Typography variant="h3" className={classes.heading}>
            Contact
          </Typography>
          <Typography variant="body1" gutterBottom>
            <AccountBoxIcon className={classes.icon} color="primary" />
            Kyle Thatcher - Co-op Student
          </Typography>
          <Typography variant="body1" gutterBottom>
            <EmailIcon className={classes.icon} color="primary" />
            kyle.thatcher@sanofi.com
          </Typography>
          <Typography variant="body1">
            Please contact for any and all bugs and issues encountered. Thanks.
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Contact;
