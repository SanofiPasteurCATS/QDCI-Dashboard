// DEPENDANCIES
import React, { Component, Fragment } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";
import parseISO from "date-fns/parseISO";
import format from "date-fns/format";
import PropTypes from "prop-types";

// ACTIONS
import { updateWin, deleteWin } from "../../../core/actions/dashboards";

/* The boardroom is the landing page for all dashboards
Parent of all boardroom components Contains pillar widgets and action tables
This component makes ALL GET request for Boardroom data
*/

class WinForm extends Component {
  static propTypes = {
    win: PropTypes.object,
    updateWin: PropTypes.func.isRequired,
    deleteWin: PropTypes.func.isRequired
  };

  state = {
    description: "",
    participants: "",
    date: new Date()
  };

  componentDidUpdate(prevProps) {
    const { win } = this.props;
    if (prevProps.win !== win) {
      if (!win) return;
      this.onUpdate(() => {
        this.setState({
          description: win.description,
          participants: win.participants,
          date: win.date ? parseISO(win.date) : new Date()
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
    const { description, date, participants } = this.state;
    const { win, updateWin } = this.props;
    const newWin = {
      description,
      participants
    };
    newWin.date = format(date, "yyyy-MM-dd");

    updateWin(newWin, win.id);
    this.setState({
      description: "",
      date: parseISO("2019-01-01")
    });
  };

  delete = () => {
    const { deleteWin, win } = this.props;
    deleteWin(win.id);
    $("#winOptions").modal("hide");
  };

  render() {
    const { description, date, participants } = this.state;
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
                value={description || ""}
              />
            </div>
            <div className="form-group">
              <label htmlFor="participants">Participants</label>
              <input
                className="form-control"
                type="text"
                name="participants"
                onChange={this.onChange}
                value={participants || ""}
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
  { updateWin, deleteWin }
)(WinForm);
