import React, { Component } from "react";
import PropTypes from "prop-types";
import Row from "./Row";
import LoadingScreen from "../../../layout/LoadingScreen";

class Table extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    header: PropTypes.array.isRequired,
    delete: PropTypes.func,
    update: PropTypes.func,
    editable: PropTypes.bool,
    fontSize: PropTypes.string,
    summary: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
    this.startEditing = this.startEditing.bind(this);
    this.stopEditingHook = this.stopEditingHook.bind(this);
    this.state = {
      isLoading: true,
      editIdx: -1
    };
  }

  handleRemove = id => {
    const response = confirm(
      "Are you sure you want to delete this entry? \n All related data will be lost."
    );
    if (response) {
      this.setState({ editIdx: -1 });
      this.props.delete(id);
    }
  };

  startEditing = i => {
    this.setState({
      editIdx: i
    });
  };

  stopEditingHook = (e, id, current) => {
    this.props.update(current, id);
    this.setState({ editIdx: -1 });
  };

  render() {
    const { data, header, editable, fontSize, summary } = this.props;
    if (!data) return <LoadingScreen />;
    return !data.length ? (
      <p>Nothing to show</p>
    ) : (
      <div className="column">
        {summary && (
          <h5 className="subtitle">
            Showing <strong>{data.length}</strong> items
          </h5>
        )}
        <div className="table-responsive" style={{ fontSize: fontSize }}>
          <table
            className="table is-striped table-sm"
            style={{ textAlign: "center" }}
          >
            <thead>
              <tr key="thr">
                {header.map((x, i) => (
                  <th key={`thc-${i}`}>{x.name}</th>
                ))}
                {editable && <th>Edit</th>}
                {editable && <th>Delete</th>}
              </tr>
            </thead>
            <tbody>
              {data.map((x, i) => (
                <Row
                  data={x}
                  i={i}
                  id={data[i].id}
                  header={header}
                  startEditing={this.startEditing}
                  editable={this.props.editable}
                  editIdx={this.state.editIdx}
                  stopEditingHook={this.stopEditingHook}
                  handleRemove={this.handleRemove}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

Table.defaultProps = {
  editable: false,
  update: null,
  delete: null,
  fontSize: 1 + "rem",
  summary: true
};

export default Table;
