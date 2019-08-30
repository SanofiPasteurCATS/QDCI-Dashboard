import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Table from "../../common/ui/table/Table";
import { updateDatapoint, deleteDatapoint } from "../../../actions/dashboards";

class DatapointTable extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    header: PropTypes.array.isRequired
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
    const { data, header } = this.props;
    return (
      <Table
        editable
        data={data}
        header={header}
        update={this.update}
        delete={this.delete}
        deletable
        formatRow={this.formatRow}
      />
    );
  }
}

export default connect(
  null,
  { updateDatapoint, deleteDatapoint }
)(DatapointTable);
