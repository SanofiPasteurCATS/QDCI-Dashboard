// DEPENDANCIES
import React from "react";
import BounceLoader from "react-spinners/BounceLoader";
import { css } from "@emotion/core";

// CONFIG
import { accentColor } from "../../config/styleConfig";

import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

const override = css`
  display: flex;
  margin: 0 auto 20px auto;
  justify-content: center;
  align-items: center;
`;
const useStyles = makeStyles({
  root: {
    height: "100%"
  }
});
export default function() {
  const classes = useStyles();
  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      spcaing={0}
      className={classes.root}
    >
      <BounceLoader
        sizeUnit="px"
        size={60}
        css={override}
        color={accentColor}
      />
    </Grid>
  );
}
