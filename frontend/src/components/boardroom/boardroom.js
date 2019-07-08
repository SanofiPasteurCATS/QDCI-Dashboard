// -----------------------------------------------------------------------------
//                         BOARDROOM COMPONENT
//                      Organization: Sanofi Pasteur
//                         Author: Kyle Thatcher
//                           Date: 08JUL2019
// -----------------------------------------------------------------------------

import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getKpis } from "../../actions/dashboards";
import Pillar from "./pillar";

/**
 * Boardroom component handles the rendering and control of the entire +QDCI dashboard
 * is a parent to all other components in the dashboard
 * root of all dashboard data
 */

class Boardroom extends Component {
  // Define all propTypes
  static propTypes = {
    kpis: PropTypes.array.isRequired,
    getKpis: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };

  componentDidMount() {
    this.props.getKpis(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <Fragment>
          <div className="container">
            {/* TEST CODE */}
            <p>Dashboard ID: {this.props.match.params.id}</p>
          </div>
          <Pillar kpis={this.props.kpis} />
        </Fragment>
      </div>
    );
  }
}

// Extracting data from state
const mapStateToProps = state => {
  return {
    kpis: state.dashboards.kpis,
    isAuthenticated: state.auth.isAuthenticated
  };
};
export default connect(
  mapStateToProps,
  { getKpis }
)(Boardroom);
