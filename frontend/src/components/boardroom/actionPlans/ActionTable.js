import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Table from "../../common/ui/table/Table";
import {
  updateAction,
  deleteAction,
  addAction
} from "../../../actions/dashboards";

class ActionTable extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    header: PropTypes.array.isRequired,
    editable: PropTypes.bool,
    rowClick: PropTypes.func,
    hoverable: PropTypes.bool,
    deletable: PropTypes.bool,
    hoverable: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    this.insert = this.insert.bind(this);
    this.tooltipMessage = this.tooltipMessage.bind(this);
  }

  update(current, id) {
    const { updateAction } = this.props;
    updateAction(current, id);
  }

  insert() {
    const { data, addAction } = this.props;
    const action = {
      tables: data.parent ? [data.id, data.parent] : [data.id],
      source_id: data.id
    };
    addAction(action);
  }

  tooltipMessage = i => {
    const { data } = this.props;
    var d = new Date(data.actions[i].date_created);
    d.toDateString();

    return (
      <div>
        <h5>{data.actions[i].source.dashboard.title}</h5>
        <p>
          Date Created:
          {d.toGMTString()}
        </p>
      </div>
    );
  };

  delete(id) {
    const { deleteAction } = this.props;
    deleteAction(id);
  }

  render() {
    const {
      data,
      header,
      editable,
      appendable,
      rowClick,
      hoverable,
      deletable
    } = this.props;
    return (
      <Table
        editable={editable}
        appendable={appendable}
        data={data.actions}
        header={header}
        update={this.update}
        delete={this.delete}
        insert={this.insert}
        rowClick={rowClick}
        deletable={deletable}
        summary
        tooltipMessage={hoverable ? this.tooltipMessage : null}
      />
    );
  }
}

export default connect(
  null,
  { updateAction, deleteAction, addAction }
)(ActionTable);

ActionTable.defaultProps = {
  hoverable: false,
  editable: false,
  deletable: false,
  appendable: false,
  rowClick: null
};
