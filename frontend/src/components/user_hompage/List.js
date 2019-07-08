import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getDashboards, deleteDashboard } from "../../actions/dashboards";
import { Link, Redirect } from "react-router-dom";

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
    return (
      <Fragment>
        <h2>Department Dashboards</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>primary_color</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.dashboards.map(dashboard => (
              <tr key={dashboard.id}>
                <td>{dashboard.id}</td>
                <td>{dashboard.title}</td>
                <td>{dashboard.author}</td>
                <td>{dashboard.primary_color}</td>
                <td>
                  <Link
                    to={"/boardroom/" + dashboard.id}
                    className="btn btn-primary btn-sm mr-4"
                  >
                    View
                  </Link>
                  <button
                    onClick={this.props.deleteDashboard.bind(
                      this,
                      dashboard.id
                    )}
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
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    dashboards: state.dashboards.dashboards
  };
};
export default connect(
  mapStateToProps,
  { getDashboards, deleteDashboard }
)(List);
