import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addDashboard } from "../../actions/dashboards";
import {
  LEVEL_CHOICES,
  DASHBOARD_TYPE_CHOICES
} from "../../common/dashboardOptions";

class Form extends Component {
  state = {
    title: "",
    author: "",
    background: "",
    dashboardType: "0",
    level: "0"
  };

  static propTypes = {
    addDashboard: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

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
      background: "",
      level: ""
    });
  };

  render() {
    const { title, author, background } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Create Dashboard</h2>
        <form onSubmit={this.onSubmit}>
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
            <label htmlFor="background">Color</label>
            <input
              className="form-control"
              type="text"
              name="background"
              onChange={this.onChange}
              value={background}
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
                <option value={choice.id}>{choice.name}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn
            btn-primary"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addDashboard }
)(Form);
