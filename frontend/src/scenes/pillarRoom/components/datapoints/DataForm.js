import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addDatapoint } from "../../../../core/actions/dashboards";

class DataForm extends Component {
  state = {
    value: "",
    target: "",
    date: ""
  };

  static propTypes = {
    addDatapoint: PropTypes.func.isRequired
  };

  onSubmit = e => {
    e.preventDefault();
    const { addDatapoint, series } = this.props;
    const { value, target, date } = this.state;
    const datapoint = {
      value,
      target,
      date,
      series
    };
    addDatapoint(datapoint);
    this.setState({
      value: "",
      date: ""
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
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
              value={value}
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
              value={target}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="color">Date</label>
            <input
              className="form-control"
              type="text"
              name="date"
              onChange={this.onChange}
              placeholder="..."
              value={date}
              required
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
              Create Datapoint
            </button>
          </div>
        </form>
      </Fragment>
    );
  }
}

export default connect(
  null,
  { addDatapoint }
)(DataForm);
