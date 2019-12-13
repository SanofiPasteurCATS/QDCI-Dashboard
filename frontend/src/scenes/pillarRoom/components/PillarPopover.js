import React from "react";

// MATERIAL-UI
import { makeStyles } from "@material-ui/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";

// CONFIG
import {
  KPI_TYPE_DEVIATION,
  KPI_TYPE_THRESHOLD,
  KPI_TYPE_WIN_LOSE
} from "../../../core/config/dashboardConfig";

const useStyles = makeStyles({
  popover: {
    pointerEvents: "none"
  },
  paper: {
    padding: "10px"
  }
});

function PillarPopover(props) {
  const { data, open } = props;
  const classes = useStyles();

  const renderDeviation = (
    <>
      <Typography variant="body1">{`Target: ${data.target}`}</Typography>
      <Typography variant="body1">{`Deviation: ${(
        (data.value / data.target - 1) *
        100
      ).toFixed(2)}%`}</Typography>
    </>
  );
  const renderThreshold = (
    <>
      <Typography variant="body1">{`Target: ${data.target}`}</Typography>
      <Typography variant="body1">{`Warning Margin: ${data.warning_margin}`}</Typography>
    </>
  );
  const renderWinLose = (
    <>
      <Typography variant="body1">{`Target: ${data.target}`}</Typography>
    </>
  );

  const renderEvaluation = () => {
    switch (data.kpi_type) {
      case KPI_TYPE_WIN_LOSE:
        return renderWinLose;
      case KPI_TYPE_THRESHOLD:
        return renderThreshold;
      case KPI_TYPE_DEVIATION:
        return renderDeviation;
    }
  };

  return (
    <Popover
      anchorReference="anchorPosition"
      anchorPosition={{ top: data.y ? data.y : 0, left: data.x ? data.x : 0 }}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left"
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left"
      }}
      classes={{
        paper: classes.paper
      }}
      open={open}
      disableAutoFocus
      disableEnforceFocus
      disableRestoreFocus
      className={classes.popover}
    >
      <Typography variant="h6">
        {`${data.kpiName} - (${data.i + 1})`}
        <hr></hr>
      </Typography>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "20px" }}>
          <Typography variant="subtitle2" gutterBottom>
            Performance
          </Typography>
          <Typography variant="body1">{`Value: ${data.value}`}</Typography>
          <Typography variant="body1">{`Date: ${data.date}`}</Typography>
        </div>

        <div>
          <Typography variant="subtitle2" gutterBottom>
            Evaluation
          </Typography>
          {renderEvaluation()}
        </div>
      </div>
    </Popover>
  );
}

PillarPopover.defaultProps = {
  open: false,
  data: {}
};
export default PillarPopover;
