// DEPENDANCIES
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// CORE COMPONENTS
import Table from "../../../../core/components/ui/table/Table";

// ACTIONS
import { updateKpi, deleteKpi } from "../../../../core/actions/dashboards";

class KpiTable extends Component {
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
    this.props.deleteKpi(id);
  }

  update(current, id) {
    this.props.updateKpi(current, id);
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
        deletable
      />
    );
  }
}

export default connect(
  null,
  { updateKpi, deleteKpi }
)(KpiTable);
