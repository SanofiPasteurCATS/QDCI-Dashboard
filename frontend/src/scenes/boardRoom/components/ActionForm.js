// DEPENDANCIES
import React, { Component, Fragment } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";
import parseISO from "date-fns/parseISO";
import format from "date-fns/format";
import PropTypes from "prop-types";

// ACTIONS
import { updateAction, deleteAction } from "../../../core/actions/dashboards";

class ActionForm extends Component {
  static propTypes = {
    action: PropTypes.object,
    updateAction: PropTypes.func.isRequired,
    deleteAction: PropTypes.func.isRequired
  };

  state = {
    letter: "",
    problem: "",
    root_cause: "",
    solution: "",
    leader: "",
    date: new Date()
  };

  componentDidUpdate(prevProps) {
    const { action } = this.props;
    if (prevProps.action !== action) {
      if (!action) return;
      this.update({
        letter: action.letter || "",
        problem: action.problem || "",
        root_cause: action.root_cause || "",
        solution: action.solution || "",
        leader: action.leader || "",
        date: action.date ? parseISO(action.date) : new Date()
      });
    }
  }

  update = state => {
    this.setState(state);
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onDateChange = date => {
    this.setState({ date });
  };

  onSubmit = e => {
    e.preventDefault();
    const { letter, problem, root_cause, solution, leader, date } = this.state;
    const { action, updateAction } = this.props;
    const newAction = {
      letter,
      problem,
      root_cause,
      solution,
      leader
    };
    newAction.date = format(date, "yyyy-MM-dd");

    updateAction(newAction, action.id);
    this.setState({
      letter: "",
      problem: "",
      root_cause: "",
      solution: "",
      leader: "",
      date: parseISO("2019-01-01")
    });
  };

  delete = () => {
    const { deleteAction, action } = this.props;
    deleteAction(action.id);
    $("#actionOptions").modal("hide");
  };

  render() {
    const { letter, problem, root_cause, solution, leader, date } = this.state;
    return (
      <Fragment>
        <h2>Edit Action</h2>
        <form onSubmit={this.onSubmit}>
          <div className="row justify-content-between">
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="letter">Letter</label>
                <input
                  className="form-control"
                  type="text"
                  name="letter"
                  onChange={this.onChange}
                  value={letter}
                />
              </div>
              <div className="form-group">
                <label htmlFor="problem">Problem</label>
                <input
                  className="form-control"
                  type="text"
                  name="problem"
                  onChange={this.onChange}
                  value={problem}
                />
              </div>
              <div className="form-group">
                <label htmlFor="root_cause">Root Cause</label>
                <input
                  className="form-control"
                  type="text"
                  name="root_cause"
                  onChange={this.onChange}
                  value={root_cause}
                />
              </div>
              <div className="form-group">
                <label htmlFor="solution">Solution</label>
                <input
                  className="form-control"
                  type="text"
                  name="solution"
                  onChange={this.onChange}
                  value={solution}
                />
              </div>
            </div>
            <div className="col-sm-5">
              <div className="form-group">
                <label htmlFor="leader">Leader</label>
                <input
                  className="form-control"
                  type="text"
                  name="leader"
                  onChange={this.onChange}
                  value={leader}
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
      </Fragment>
    );
  }
}

ActionForm.defaultProps = {
  action: null
};

export default connect(
  null,
  { updateAction, deleteAction }
)(ActionForm);
