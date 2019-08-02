import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getDashboards, deleteDashboard } from "../../actions/dashboards";

class List extends Component {
  static propTypes = {
    dashboards: PropTypes.array.isRequired,
    getDashboards: PropTypes.func.isRequired,
    deleteDashboard: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getDashboards();
  }

  render() {
    const { dashboards, deleteDashboard } = this.props;
    return (
      <Fragment>
        <div className="card card-body mt-4 mb-4">
          <h2>Department Dashboards</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Author</th>
                <th>Level</th>
                <th>Type</th>
                <th>Background</th>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              {dashboards.map(dashboard => (
                <tr key={dashboard.id}>
                  <td>{dashboard.id}</td>
                  <td>{dashboard.title}</td>
                  <td>{dashboard.author}</td>
                  <td>{dashboard.level}</td>
                  <td>{dashboard.dashboard_type}</td>
                  <td>{dashboard.background}</td>
                  <td>
                    <Link
                      to={`/boardroom/${dashboard.id}`}
                      className="btn btn-primary btn-sm"
                    >
                      View
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={deleteDashboard.bind(this, dashboard.id)}
                      className="btn btn-danger btn-sm"
                    >
                      {" "}
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  dashboards: state.dashboards.dashboards
});
export default connect(
  mapStateToProps,
  { getDashboards, deleteDashboard }
)(List);
