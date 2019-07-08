import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addDashboard } from "../../actions/dashboards";
class Form extends Component {
  state = {
    title: "",
    author: "",
    primary_color: ""
  };

  static propTypes = {
    addDashboard: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { title, author, primary_color } = this.state;
    const dashboard = { title, author, primary_color };
    this.props.addDashboard(dashboard);
    this.setState({
      title: "",
      author: "",
      primary_color: ""
    });
  };

  render() {
    const { title, author, primary_color } = this.state;
    console.log(title);
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Create Dashboard</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              className="form-control"
              type="text"
              name="title"
              onChange={this.onChange}
              value={title}
            />
          </div>
          <div className="form-group">
            <label>Author</label>
            <input
              className="form-control"
              type="text"
              name="author"
              onChange={this.onChange}
              value={author}
            />
          </div>
          <div className="form-group">
            <label>Color</label>
            <input
              className="form-control"
              type="text"
              name="primary_color"
              onChange={this.onChange}
              value={primary_color}
            />
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
