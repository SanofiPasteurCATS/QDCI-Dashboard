import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addSeries } from "../../../actions/dashboards";
import { PLOT_TYPE_CHOICES } from "../../../common/dashboardOptions";
import { ChromePicker } from "react-color";
class SeriesForm extends Component {
  state = {
    name: "",
    color: "",
    plot_type: "li"
  };

  static propTypes = {
    addSeries: PropTypes.func.isRequired
  };

  onChangeColor = color => {
    this.setState({ color: color.hex });
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
          <div className="row m-0">
            <div className="col-sm-6">
              <div className="d-flex flex-column">
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

                <div className="form-group mt-4">
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
              </div>
            </div>
            <div className="col-sm-4 m-auto">
              <div className="form-group">
                <label htmlFor="color">Color</label>
                <ChromePicker
                  color={this.state.color}
                  onChangeComplete={this.onChangeColor}
                />
              </div>
            </div>
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
