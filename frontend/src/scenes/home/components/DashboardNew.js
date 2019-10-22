// DEPENDANCIES
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import DashboardForm from "./DashboardForm";

// ACTIONS
import { addDashboard } from "../../../core/actions/dashboards";

class DashboardNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      background: "#ffffff",
      dashboard_type: "0",
      level: "0"
    };
    if (props.dashboard)
      this.state = {
        ...props.dashboard
      };
  }

  static propTypes = {
    addDashboard: PropTypes.func.isRequired
  };

  update = dashboard => {
    this.setState({ ...dashboard });
  };

  componentDidUpdate(prevProps) {
    const { dashboard } = this.props;
    if (dashboard != prevProps.dashboard) {
      this.update(dashboard);
    }
  }

  onSubmit = e => {
    e.preventDefault();
    const { addDashboard } = this.props;

    const { title, author, background, dashboard_type, level } = this.state;

    const dashboard = {
      title,
      author,
      background,
      dashboard_type,
      level
    };

    addDashboard(dashboard);
    this.setState({
      title: "",
      author: "",
      background: "#ffffff",
      dashboard_type: "0",
      level: "0"
    });
    $("#dashboardNew").modal("hide");
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="w-100 mt-3">
        <DashboardForm
          showImageField
          onChange={this.onChange}
          values={this.state}
        />
        <button type="submit" className="btn btn-success mb-4 mt-3">
          Create
        </button>
      </form>
    );
  }
}

export default connect(
  null,
  { addDashboard }
)(DashboardNew);
