//DEPENDANCIES
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { ChromePicker } from "react-color";

// CONFIG
import { PLOT_TYPE_CHOICES } from "../../../../core/config/dashboardConfig";

// ACTIONS
import { addSeries } from "../../../../core/actions/dashboards";

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

  update = series => {
    this.setState({
      name: series.name,
      color: series.color,
      plot_type: series.plot_type
    });
  };

  componentDidMount() {
    const { series } = this.props;
    this.setState({
      name: series.name,
      color: series.color,
      plot_type: series.plot_type
    });
  }

  componentDidUpdate(prevProps) {
    const { series } = this.props;
    if (series !== prevProps.series) this.update(series);
  }

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
    console.log(this.state);
    return (
      <Fragment>
        <form onSubmit={this.onSubmit} noValidate className="w-100">
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
                  color={color}
                  onChangeComplete={this.onChangeColor}
                />
              </div>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-success"
            data-dismiss="modal"
          >
            Save Changes
          </button>
        </form>
      </Fragment>
    );
  }
}

export default connect(
  null,
  { addSeries }
)(SeriesForm);
