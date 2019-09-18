// DEPENDANCIES
import React, { Component, Fragment } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";
import parseISO from "date-fns/parseISO";
import format from "date-fns/format";
import PropTypes from "prop-types";

// ACTIONS
import { updateAudit, deleteAudit } from "../../../core/actions/dashboards";

/* The boardroom is the landing page for all dashboards
Parent of all boardroom components Contains pillar widgets and action tables
This component makes ALL GET request for Boardroom data
*/

class AuditForm extends Component {
  static propTypes = {
    audit: PropTypes.object,
    updateAudit: PropTypes.func.isRequired,
    deleteAudit: PropTypes.func.isRequired
  };

  state = {
    description: "",
    date: new Date()
  };

  componentDidUpdate(prevProps) {
    const { audit } = this.props;
    if (prevProps.audit !== audit) {
      if (!audit) return;
      this.onUpdate(() => {
        this.setState({
          description: audit.description,
          date: audit.date ? parseISO(audit.date) : new Date()
        });
      });
    }
  }

  onUpdate = hook => {
    hook();
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onDateChange = date => {
    this.setState({ date });
  };

  onSubmit = e => {
    e.preventDefault();
    const { description, date } = this.state;
    const { audit, updateAudit } = this.props;
    const newAudit = {
      description
    };
    newAudit.date = format(date, "yyyy-MM-dd");

    updateAudit(newAudit, audit.id);
    this.setState({
      description: "",
      date: parseISO("2019-01-01")
    });
  };

  delete = () => {
    const { deleteAudit, audit } = this.props;
    deleteAudit(audit.id);
    $("#auditOptions").modal("hide");
  };

  render() {
    const { description, date } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <div className="row justify-content-between">
          <div className="col-sm-12">
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                className="form-control"
                type="text"
                name="description"
                onChange={this.onChange}
                value={description}
              />
            </div>
            <div className="form-group">
              <label htmlFor="date" className="d-block">
                Date
              </label>
              <DatePicker
                className="form-control"
                onChange={date => this.onDateChange(date)}
                selected={date}
                dateFormat="yyyy-MM-dd"
              />
            </div>
          </div>

          <div className="col-sm-12 d-flex justify-content-end">
            <button
              type="button"
              className="btn
            btn-danger mr-4"
              onClick={this.delete}
            >
              Delete
            </button>
            <button
              type="submit"
              className="btn
            btn-primary"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default connect(
  null,
  { updateAudit, deleteAudit }
)(AuditForm);
