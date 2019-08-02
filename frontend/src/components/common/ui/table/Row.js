import React, { Component } from "react";
import propTypes from "prop-types";

class Row extends Component {
  constructor(props) {
    super(props);
    const row = [];
    for (const i in this.props.header) {
      const { prop } = this.props.header[i];
      row[prop] = this.props.data[prop];
    }
    this.state = {
      entry: row
    };
  }

  stopEditing(e) {
    const current = this.state.entry;
    this.props.stopEditingHook(e, this.props.id, current);
  }

  handleChange = e => {
    const current = { ...this.state.entry };
    current[e.target.name] = e.target.value;
    this.setState({ entry: current });
  };

  render() {
    const { editIdx, data, header, i, editable } = this.props;
    const currentlyEditing = editIdx === i;
    if (editable) {
      return (
        <tr key={data.id}>
          {header.map((y, k) => (
            <td key={`trc-${k}`}>
              {currentlyEditing ? (
                <input
                  name={y.prop}
                  onChange={e => this.handleChange(e)}
                  type="text"
                  placeholder={this.props.data[y.prop]}
                  value={this.state.entry[y.prop]}
                  style={{
                    width: `${100}%`
                  }}
                />
              ) : this.props.data[y.prop] != null ? (
                this.props.data[y.prop]
              ) : (
                "NULL"
              )}
            </td>
          ))}
          {currentlyEditing ? (
            <td
              key="done"
              className="im im-check-mark icon co-primary"
              style={{ display: "table-cell" }}
              onClick={e => this.stopEditing(e)}
            />
          ) : (
            <td
              style={{ display: "table-cell" }}
              className="im im-edit co-primary icon"
              key="edit"
              onClick={() => this.props.startEditing(i)}
            />
          )}

          <td
            style={{ display: "table-cell" }}
            className="im im-trash-can co-primary icon"
            key="delete"
            onClick={() => this.props.handleRemove(data.id)}
          />
        </tr>
      );
    }
    return (
      <tr key={data.id}>
        {header.map((y, k) => (
          <td key={`trc-${k}`}>
            {this.props.data[y.prop] != null ? this.props.data[y.prop] : "NULL"}
          </td>
        ))}
      </tr>
    );
  }
}

export default Row;
