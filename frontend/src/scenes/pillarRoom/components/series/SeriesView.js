// DEPENDANCIES
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// ACTIONS
import { deleteSeries } from "../../../../core/actions/dashboards";

// COMPONENTS
import SeriesEdit from "./SeriesEdit";

import { getItem } from "../../../../core/helpers/Filters";

import RemoveConfirmation from "../../../../core/components/ui/RemoveConfirmation";
import DataView from "../datapoints/DataView";
import DeleteIcon from "@material-ui/icons/Delete";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

const styles = theme => ({
  heading: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4)
  },
  breadcrumbs: {
    paddingTop: "12px",
    paddingBottom: "12px"
  }
});

class SeriesView extends Component {
  constructor(props) {
    super(props);
    this.onSubmitRemove = this.onSubmitRemove.bind(this);
    this.RemoveConfirmation = React.createRef();
  }

  state = {
    selectedDatapoint: null
  };

  setRemove = () => {
    this.RemoveConfirmation.current.handleToggleOpen(true)();
  };

  onSubmitRemove = state => {
    const { series, deleteSeries } = this.props;
    if (state.name === series.name) {
      deleteSeries(series.id);
      return true;
    } else return false;
  };

  render() {
    const { series, onBack, kpi, pillarId, classes } = this.props;
    const { selectedDatapoint } = this.state;
    if (!series) return <></>;
    let datapoint = {};

    if (series.entries) {
      datapoint = getItem(selectedDatapoint, series.entries, "id");
    }
    return (
      <Fragment>
        <Breadcrumbs aria-label="breadcrumb">
          <Typography color="inherit" href="/">
            {pillarId}
          </Typography>
          <Typography color="inherit" href="/getting-started/installation/">
            {kpi.name}
          </Typography>
          <Typography>{series.name}</Typography>
          <IconButton onClick={onBack}>
            <KeyboardBackspaceIcon></KeyboardBackspaceIcon>
          </IconButton>
        </Breadcrumbs>
        <Typography className={classes.heading} variant={"h4"}>
          Properties
        </Typography>

        <SeriesEdit series={series} />

        <hr />
        <DataView series={series}></DataView>
        <div style={{ float: "right" }}>
          <Button
            color="secondary"
            variant="contained"
            startIcon={<DeleteIcon />}
            onClick={this.setRemove}
          >
            Delete Series
          </Button>
        </div>
        <RemoveConfirmation
          removeContext={{
            item: series,
            type: "series",
            onSubmit: this.onSubmitRemove
          }}
          ref={this.RemoveConfirmation}
        />
      </Fragment>
    );
  }
}

export default connect(null, { deleteSeries })(withStyles(styles)(SeriesView));
