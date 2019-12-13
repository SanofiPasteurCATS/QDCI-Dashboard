// DEPENDANCIES
import React, { Fragment, Component } from "react";

// MATERIAL-UI
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TimelineIcon from "@material-ui/icons/Timeline";
import IconButton from "@material-ui/core/IconButton";
import SettingsIcon from "@material-ui/icons/Settings";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  KpiSelect: {
    width: "200px"
  },
  plotButton: {
    marginLeft: "auto !important"
  }
});

class ChartOptions extends Component {
  onChange = e => {
    const { selectKpi, selectSeries, deselect } = this.props;
    selectKpi(e.target.value);
    selectSeries(null);
    deselect();
  };

  componentDidUpdate(prevProps) {
    const { selectKpi } = this.props;
    if (!prevProps.kpis[0] && this.props.kpis[0]) {
      selectKpi(this.props.kpis[0].id);
    }
  }

  render() {
    const {
      kpis,
      changeMenu,
      menuMode,
      kpi,
      classes,
      handleKpiNewOpen
    } = this.props;

    return (
      <Fragment>
        <Select
          onChange={this.onChange}
          className={classes.KpiSelect}
          value={kpi ? kpi.id : ""}
        >
          {kpis.map(kpi => (
            <MenuItem key={`choice-${kpi.id}`} value={kpi.id}>
              {kpi.name}
            </MenuItem>
          ))}
        </Select>
        <IconButton onClick={handleKpiNewOpen(true)}>
          <LibraryAddIcon color="primary"></LibraryAddIcon>
        </IconButton>

        {kpi && (
          <>
            <IconButton
              className={classes.plotButton}
              onClick={() => changeMenu(false)}
              disabled={menuMode ? false : true}
            >
              <TimelineIcon></TimelineIcon>
            </IconButton>
            <IconButton
              onClick={() => changeMenu(true)}
              disabled={menuMode ? true : false}
            >
              <SettingsIcon></SettingsIcon>
            </IconButton>
          </>
        )}
      </Fragment>
    );
  }
}
export default withStyles(styles)(ChartOptions);
