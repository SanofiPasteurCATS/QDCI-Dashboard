import React, { Component } from "react";
import propTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

  handleDateChange = (date, prop) => {
    const current = { ...this.state.entry };
    current[prop] = date;
    this.setState({ entry: current });
  };

  render() {
    const {
      editIdx,
      data,
      header,
      i,
      editable,
      tableId,
      rowClick,
      deletable,
      formatRow
    } = this.props;
    const { entry } = this.state;
    const currentlyEditing = editIdx === i;
    if (editable) {
      return (
        <tr
          className={formatRow ? formatRow(data) : ""}
          key={data.id}
          data-tip={i}
          data-for={`global-${tableId}`}
          onClick={() => {
            if (rowClick) rowClick(data.id);
          }}
        >
          {header.map((y, k) => {
            if (y.date)
              return (
                <td key={`trc-${k}`}>
                  {currentlyEditing ? (
                    <DatePicker
                      onChange={date => this.handleDateChange(date, y.prop)}
                      selected={entry[y.prop]}
                    />
                  ) : this.props.data[y.prop] != null ? (
                    this.props.data[y.prop]
                  ) : (
                    "NULL"
                  )}
                </td>
              );
            return (
              <td key={`trc-${k}`}>
                {currentlyEditing ? (
                  <input
                    name={y.prop}
                    onChange={e => this.handleChange(e)}
                    type="text"
                    placeholder={this.props.data[y.prop]}
                    value={entry[y.prop]}
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
            );
          })}
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

          {deletable && (
            <td
              style={{ display: "table-cell" }}
              className="im im-trash-can co-primary icon"
              key="delete"
              onClick={() => this.props.handleRemove(data.id)}
            />
          )}
        </tr>
      );
    }
    return (
      <tr
        key={data.id}
        data-tip={i}
        data-for={`global-${tableId}`}
        onClick={() => {
          if (rowClick) rowClick(data.id);
        }}
      >
        {header.map((y, k) => (
          <td key={`trc-${k}`}>
            {this.props.data[y.prop] != null ? this.props.data[y.prop] : "NULL"}
          </td>
        ))}
        {deletable && (
          <td
            style={{ display: "table-cell" }}
            className="im im-trash-can co-primary icon"
            key="delete"
            onClick={() => this.props.handleRemove(data.id)}
          />
        )}
      </tr>
    );
  }
}

export default Row;
