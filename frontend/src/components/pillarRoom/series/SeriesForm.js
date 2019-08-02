import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addSeries } from "../../../actions/dashboards";
import { PLOT_TYPE_CHOICES } from "../../../common/dashboardOptions";

class SeriesForm extends Component {
  state = {
    name: "",
    color: "",
    plot_type: "li"
  };

  static propTypes = {
    addSeries: PropTypes.func.isRequired
  };

  onSubmit = e => {
    e.preventDefault();
    const { addSeries, kpi } = this.props;
    const { name, color, plot_type } = this.state;
    const series = {
      name,
      color,
      plot_type,
      kpi
    };
    addSeries(series);
    this.setState({
      name: "",
      color: "",
      plot_type: "li"
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, color, plot_type } = this.state;
    return (
      <Fragment>
        <form onSubmit={this.onSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              placeholder="..."
              value={name}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="plot_type">Plot Type</label>
            <select
              className="form-control"
              type="text"
              name="plot_type"
              onChange={this.onChange}
              placeholder="..."
              value={plot_type}
              required
            >
              {PLOT_TYPE_CHOICES.map(choice => (
                <option key={`choice-${choice.id}`} value={choice.id}>
                  {choice.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="color">Color</label>
            <input
              className="form-control"
              type="text"
              name="color"
              onChange={this.onChange}
              placeholder="..."
              value={color}
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
              Create Series
            </button>
          </div>
        </form>
      </Fragment>
    );
  }
}

export default connect(
  null,
  { addSeries }
)(SeriesForm);
