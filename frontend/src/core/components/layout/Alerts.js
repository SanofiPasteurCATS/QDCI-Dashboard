// -----------------------------------------------------------------------------
//                           ALERT COMPONENT
//                      Organization: Sanofi Pasteur
//                         Author: Kyle Thatcher
//                           Date: 08JUL2019
// -----------------------------------------------------------------------------

import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    alert: PropTypes.object.isRequired,
    messages: PropTypes.object.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, alert, messages } = this.props;
    if (error !== prevProps.error) {
      if (error.msg.title) alert.error(`Title: ${error.msg.title.join()}`);
      if (error.msg.author) alert.error(`Author: ${error.msg.author.join()}`);
      if (error.msg.background)
        alert.error(`Color: ${error.msg.background.join()}`);
      if (error.msg.non_field_errors)
        alert.error(`Author: ${error.msg.non_field_errors.join()}`);
      if (error.msg.username) alert.error(error.msg.username.join());
    }

    if (messages !== prevProps.messages) {
      if (messages.deleteDashboard) alert.success(messages.deleteDashboard);
      if (messages.addDashboard) alert.success(messages.addDashboard);
      if (messages.passwordsNotMatch) alert.error(messages.passwordsNotMatch);
      if (messages.addKpi) alert.success(messages.addKpi);
      if (messages.addSeries) alert.success(messages.addSeries);
      if (messages.addDatapoint) alert.success(messages.addDatapoint);
      if (messages.addAction) alert.success(messages.addAction);
      if (messages.deleteKpi) alert.success(messages.deleteKpi);
      if (messages.deleteAction) alert.success(messages.deleteAction);
      if (messages.deleteSeries) alert.success(messages.deleteSeries);
      if (messages.deleteDatapoint) alert.success(messages.deleteDatapoint);
      if (messages.updateKpi) alert.success(messages.updateKpi);
      if (messages.updateAction) alert.success(messages.updateAction);
      if (messages.updateActionTable) alert.success(messages.updateActionTable);
      if (messages.updateSeries) alert.success(messages.updateSeries);
      if (messages.updateDatapoint) alert.success(messages.updateDatapoint);
      if (messages.updateAudit) alert.success(messages.updateAudit);
      if (messages.updateWin) alert.success(messages.updateWin);
      if (messages.entriesCreated) alert.success(messages.entriesCreated);
      if (messages.invalidForm) alert.error(messages.invalidForm);
      if (messages.updateDashboard) alert.success(messages.updateDashboard);
    }
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = state => ({
  error: state.errors,
  messages: state.messages
});
export default connect(mapStateToProps)(withAlert()(Alerts));
