// DEPENDANCIES
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// CONFIG
import { DATAPOINT_TABLE_HEADERS } from "../../../../core/config/dashboardConfig";

// ACTIONS
import {
  updateDatapoint,
  deleteDatapoint
} from "../../../../core/actions/dashboards";

// CORE COMPONENTS
import Table from "../../../../core/components/ui/table/Table";

class DatapointTable extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    header: PropTypes.array
  };

  static defaultProps = {
    header: DATAPOINT_TABLE_HEADERS
  };

  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  delete(id) {
    alert("Cannot Delete Datapoint");
  }

  update(current, id) {
    this.props.updateDatapoint(current, id);
  }

  formatRow = datapoint => {
    const today = new Date();
    const date = new Date(datapoint.date);
    if (date.getTime() <= today.getTime()) {
      if (!datapoint.value) return "table-danger";
    } else if (date.getTime() <= today.setDate(today.getDate() + 5))
      return "table-warning";
    return "";
  };

  render() {
    const { data, header, rowClick } = this.props;
    return (
      <Table
        editable
        data={data}
        header={header}
        update={this.update}
        delete={this.delete}
        deletable
        rowClick={rowClick}
        formatRow={this.formatRow}
      />
    );
  }
}

export default connect(
  null,
  { updateDatapoint, deleteDatapoint }
)(DatapointTable);
