import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Table from "../../../core/components/ui/table/Table";

import { AUDIT_TABLE_HEADERS } from "../../../core/config/dashboardConfig";
import {
  updateAudit,
  deleteAudit,
  addAudit
} from "../../../core/actions/dashboards";

class AuditTable extends Component {
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
    const { updateAudit } = this.props;
    updateAudit(current, id);
  }

  insert() {
    const { addAudit } = this.props;
    const audit = {
      description: null,
      date: null
    };
    addAudit(audit);
  }

  delete(id) {
    const { deleteAudit } = this.props;
    deleteAudit(id);
  }

  render() {
    const { data, editable, appendable, rowClick, deletable } = this.props;
    return (
      <Table
        editable={editable}
        appendable={appendable}
        data={data}
        header={AUDIT_TABLE_HEADERS}
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
  { updateAudit, deleteAudit, addAudit }
)(AuditTable);

AuditTable.defaultProps = {
  hoverable: false,
  editable: false,
  deletable: false,
  appendable: false,
  rowClick: null
};
