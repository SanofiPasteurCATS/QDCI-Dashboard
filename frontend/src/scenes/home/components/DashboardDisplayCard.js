// DEPENDACIES
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// ACTIONS
import { deleteDashboard } from "../../../core/actions/dashboards";
class DashboardDisplayCard extends Component {
  render() {
    const { dashboard, deleteDashboard, deleteClick } = this.props;
    return (
      <div className="card m-3">
        <img
          className="card-img-top"
          src="https://via.placeholder.com/320x200.png"
          alt="Card image cap"
        />
        <div className="card-body">
          <div className="d-flex">
            <div
              className="card-title"
              style={{ fontSize: "1.25rem", fontWeight: "bold" }}
            >
              {dashboard.title}{" "}
            </div>
            <i
              style={{ color: dashboard.background, textAlign: "right" }}
              className="im im-drop ml-auto"
            />
          </div>
          <p className="card-text">
            Author: {dashboard.author}
            <br />
            Level: {dashboard.level}
          </p>
          <div className="d-flex">
            <Link
              to={`/boardroom/${dashboard.id}`}
              className="btn btn-primary btn-sm"
            >
              View
            </Link>
            <button
              onClick={() => deleteClick("dashboard", dashboard.title)}
              className="btn btn-danger btn-sm ml-auto"
            >
              {" "}
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { deleteDashboard }
)(DashboardDisplayCard);
