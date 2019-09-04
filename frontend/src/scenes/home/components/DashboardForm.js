// DEPENDANCIES
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { ChromePicker } from "react-color";

// CONFIG
import {
  LEVEL_CHOICES,
  DASHBOARD_TYPE_CHOICES
} from "../../../core/config/dashboardConfig";

// ACTIONS
import { addDashboard } from "../../../core/actions/dashboards";

class DashboardForm extends Component {
  state = {
    title: "",
    author: "",
    background: "",
    dashboardType: "0",
    level: "0",
    color: "#0"
  };

  static propTypes = {
    addDashboard: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onChangeColor = color => {
    this.setState({ background: color.hex });
  };

  onSubmit = e => {
    e.preventDefault();
    const { title, author, background, dashboardType, level } = this.state;
    const dashboard = {
      title,
      author,
      background,
      dashboardType,
      level
    };
    this.props.addDashboard(dashboard);
    this.setState({
      title: "",
      author: "",
      background: "#0",
      level: ""
    });
  };

  render() {
    const { title, author, background } = this.state;
    return (
      <Fragment>
        <h2>Create Dashboard</h2>
        <form onSubmit={this.onSubmit}>
          <div className="row justify-content-between">
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  className="form-control"
                  type="text"
                  name="title"
                  onChange={this.onChange}
                  value={title}
                />
              </div>
              <div className="form-group">
                <label htmlFor="author">Author</label>
                <input
                  className="form-control"
                  type="text"
                  name="author"
                  onChange={this.onChange}
                  value={author}
                />
              </div>
              <div className="form-group">
                <label htmlFor="dashboardType">Type</label>
                <select
                  className="form-control"
                  type="text"
                  name="dashboardType"
                  onChange={this.onChange}
                >
                  {DASHBOARD_TYPE_CHOICES.map(choice => (
                    <option key={`choice-${choice.id}`} value={choice.id}>
                      {choice.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="level">Level</label>
                <select
                  className="form-control"
                  type="text"
                  name="level"
                  onChange={this.onChange}
                >
                  {LEVEL_CHOICES.map(choice => (
                    <option key={choice.id} value={choice.id}>
                      {choice.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-sm-5">
              <div className="form-group">
                <label htmlFor="color">Background Color</label>
                <ChromePicker
                  color={background}
                  onChangeComplete={this.onChangeColor}
                />
              </div>
            </div>
            <div className="col-sm-12">
              <div className="form-group">
                <button
                  type="submit"
                  className="btn
            btn-primary"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </Fragment>
    );
  }
}

export default connect(
  null,
  { addDashboard }
)(DashboardForm);
