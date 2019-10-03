import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateDatapoint } from "../../../../core/actions/dashboards";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import parseISO from "date-fns/parseISO";
import format from "date-fns/format";

class DataForm extends Component {
  state = {
    value: "",
    target: "",
    date: new Date()
  };

  static propTypes = {
    datapoint: PropTypes.object,
    updateDatapoint: PropTypes.func.isRequired,
    series: PropTypes.number
  };

  update = payload => {
    this.setState({ ...payload });
  };

  componentDidUpdate(prevProps) {
    const { datapoint } = this.props;
    if (prevProps.datapoint !== datapoint) {
      this.update({
        ...datapoint,
        date: datapoint.date ? parseISO(datapoint.date) : new Date()
      });
    }
  }

  onSubmit = e => {
    e.preventDefault();
    const { updateDatapoint, series } = this.props;
    const { value, target, date, id } = this.state;
    const datapoint = {
      value: value,
      target: target,
      series: series,
      date: format(date, "yyyy-MM-dd")
    };
    updateDatapoint(datapoint, id);
    $("#dataOptions").modal("hide");
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onDateChange = date => {
    this.setState({ date });
  };

  render() {
    const { value, target, date } = this.state;
    return (
      <Fragment>
        <form onSubmit={this.onSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Value</label>
            <input
              className="form-control"
              type="text"
              name="value"
              onChange={this.onChange}
              placeholder="..."
              value={value != null ? value : ""}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="plot_type">Target</label>
            <input
              className="form-control"
              type="text"
              name="target"
              onChange={this.onChange}
              placeholder="..."
              value={target != null ? target : ""}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="date" className="d-block">
              Date
            </label>
            <DatePicker
              className="form-control"
              onChange={date => this.onDateChange(date)}
              selected={date}
              dateFormat="yyyy-MM-dd"
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="submit" className="btn btn-primary">
              Update Datapoint
            </button>
          </div>
        </form>
      </Fragment>
    );
  }
}

DataForm.defaultProps = {
  datapoint: null,
  series: null
};

export default connect(
  null,
  { updateDatapoint }
)(DataForm);
