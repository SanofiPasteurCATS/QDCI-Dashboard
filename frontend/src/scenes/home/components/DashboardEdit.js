// DEPENDANCIES
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import DashboardForm from "./DashboardForm";

// ACTIONS
import { updateDashboard, addImage } from "../../../core/actions/dashboards";

class DashboardEdit extends Component {
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
    updateDashboard: PropTypes.func.isRequired
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
    const { updateDashboard, dashboard, addImage } = this.props;

    const {
      title,
      author,
      background,
      dashboard_type,
      level,
      image
    } = this.state;
    const newDashboard = {
      title,
      author,
      background,
      dashboard_type,
      level
    };

    newDashboard.id = dashboard.id;

    updateDashboard(newDashboard, newDashboard.id);
    if (image) {
      const newImage = {
        image: image,
        dashboard: dashboard.id
      };
      addImage(newImage);
    }
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { dashboard } = this.props;
    return (
      <form onSubmit={this.onSubmit} className="w-100 mt-3">
        <DashboardForm
          showImageField
          onChange={this.onChange}
          values={this.state}
          images={dashboard ? dashboard.images : null}
        />
        <button type="submit" className="btn btn-success mb-4 mt-3">
          Save
        </button>
      </form>
    );
  }
}

export default connect(
  null,
  { updateDashboard, addImage }
)(DashboardEdit);
