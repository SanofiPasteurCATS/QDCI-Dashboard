import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import SeriesList from "../series/SeriesList";
import KpiEdit from "./KpiEdit";

// ACTIONS
import { deleteKpi } from "../../../../core/actions/dashboards";

// MATERIAL-UI
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import RemoveConfirmation from "../../../../core/components/ui/RemoveConfirmation";

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

class KpiView extends Component {
  constructor(props) {
    super(props);
    this.onSubmitRemove = this.onSubmitRemove.bind(this);
    this.RemoveConfirmation = React.createRef();
  }

  onRemove = () => {
    this.RemoveConfirmation.current.handleToggleOpen(true)();
  };

  onSubmitRemove = state => {
    const { kpi, deleteKpi } = this.props;
    if (state.name === kpi.name) {
      deleteKpi(kpi.id);
      return true;
    } else return false;
  };

  render() {
    const { kpi, onSeriesSelect, pillarId, classes } = this.props;
    return (
      <Fragment>
        <Breadcrumbs className={classes.breadcrumbs} aria-label="breadcrumb">
          <Typography color="inherit" href="/">
            {pillarId}
          </Typography>
          <Typography color="inherit" href="/getting-started/installation/">
            {kpi.name}
          </Typography>
        </Breadcrumbs>
        <Typography className={classes.heading} variant={"h4"}>
          Series
        </Typography>
        <SeriesList
          kpiId={kpi.id}
          onClick={onSeriesSelect}
          series={kpi.series}
        />
        <Typography className={classes.heading} variant={"h4"}>
          Properties
        </Typography>

        <KpiEdit kpi={kpi} onRemove={this.onRemove} />
        <RemoveConfirmation
          removeContext={{
            item: kpi,
            type: "kpi",
            onSubmit: this.onSubmitRemove
          }}
          ref={this.RemoveConfirmation}
        />
      </Fragment>
    );
  }
}

export default connect(null, { deleteKpi })(withStyles(styles)(KpiView));
