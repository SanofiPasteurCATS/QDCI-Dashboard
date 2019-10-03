// DEPENDANCIES
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { ChromePicker } from "react-color";

// CONFIG
import {
  LEVEL_CHOICES,
  DASHBOARD_TYPE_CHOICES
} from "../../../core/config/dashboardConfig";

// ACTIONS
import { addDashboard } from "../../../core/actions/dashboards";
import ImageList from "./ImageList";

class DashboardForm extends Component {
  static propTypes = {
    addDashboard: PropTypes.func.isRequired
  };

  onChangeColor = color => {
    const { onChange } = this.props;
    onChange({
      target: {
        name: "background",
        value: color.hex
      }
    });
  };

  onChangeFile = e => {
    const { onChange } = this.props;
    onChange({
      target: {
        name: "image",
        value: e.target.files[0]
      }
    });
  };

  render() {
    const {
      title,
      author,
      background,
      dashboard_type,
      level
    } = this.props.values;
    const { images } = this.props;
    const { onChange, showImageField } = this.props;
    return (
      <Fragment>
        <div className="row justify-content-between">
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                className="form-control"
                type="text"
                name="title"
                onChange={onChange}
                value={title}
              />
            </div>
            <div className="form-group">
              <label htmlFor="author">Author</label>
              <input
                className="form-control"
                type="text"
                name="author"
                onChange={onChange}
                value={author}
              />
            </div>
            <div className="form-group">
              <label htmlFor="dashboard_type">Type</label>
              <select
                className="form-control"
                type="text"
                name="dashboard_type"
                onChange={onChange}
                value={dashboard_type}
              >
                {DASHBOARD_TYPE_CHOICES.map(choice => (
                  <option key={`choice-${choice.id}`} value={choice.id}>
                    {choice.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="level">Level</label>
              <select
                className="form-control"
                type="text"
                name="level"
                value={level}
                onChange={onChange}
              >
                {LEVEL_CHOICES.map(choice => (
                  <option key={choice.id} value={choice.id}>
                    {choice.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="color">Background Color</label>
              <ChromePicker
                color={background}
                onChangeComplete={this.onChangeColor}
              />
            </div>
          </div>

          {showImageField && (
            <div className="col-12 mr-2">
              <ImageList images={images}></ImageList>
            </div>
          )}
          {showImageField && (
            <div className="col-12 mt-2">
              <div className="form-group">
                <label htmlFor="image">Add Infographic</label>
                <input
                  type="file"
                  name="image"
                  className="form-control-file"
                  onChange={this.onChangeFile}
                ></input>
              </div>
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}

export default connect(
  null,
  { addDashboard }
)(DashboardForm);
