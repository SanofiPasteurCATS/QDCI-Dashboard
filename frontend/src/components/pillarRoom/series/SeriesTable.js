import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Table from "../../common/ui/table/Table";
import { updateSeries, deleteSeries } from "../../../actions/dashboards";

class SeriesTable extends Component {
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
    this.props.deleteSeries(id);
  }

  update(current, id) {
    this.props.updateSeries(current, id);
  }

  render() {
    const { data, header } = this.props;
    return (
      <Table
        editable
        data={data}
        header={header}
        update={this.update}
        delete={this.delete}
      />
    );
  }
}

export default connect(
  null,
  { updateSeries, deleteSeries }
)(SeriesTable);
