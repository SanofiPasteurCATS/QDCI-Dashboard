import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Table from "../../../core/components/ui/table/Table";

import { WIN_TABLE_HEADERS } from "../../../core/config/dashboardConfig";
import { updateWin, deleteWin, addWin } from "../../../core/actions/dashboards";

class WinTable extends Component {
  static propTypes = {
    data: PropTypes.array,
    editable: PropTypes.bool,
    rowClick: PropTypes.func,
    deletable: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    this.insert = this.insert.bind(this);
  }

  update(current, id) {
    const { updateWin } = this.props;
    updateWin(current, id);
  }

  insert() {
    const { addWin } = this.props;
    const win = {
      description: null,
      participants: null,
      date: null
    };
    addWin(win);
  }

  delete(id) {
    const { deleteWin } = this.props;
    deleteWin(id);
  }

  render() {
    const { data, editable, appendable, rowClick, deletable } = this.props;
    return (
      <Table
        editable={editable}
        appendable={appendable}
        data={data}
        header={WIN_TABLE_HEADERS}
        update={this.update}
        delete={this.delete}
        insert={this.insert}
        rowClick={rowClick}
        deletable={deletable}
        fontSize={"0.6rem"}
        summary
      />
    );
  }
}

export default connect(
  null,
  { updateWin, deleteWin, addWin }
)(WinTable);

WinTable.defaultProps = {
  hoverable: false,
  editable: false,
  deletable: false,
  appendable: false,
  rowClick: null
};
