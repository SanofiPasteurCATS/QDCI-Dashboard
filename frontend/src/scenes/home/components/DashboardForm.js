// DEPENDANCIES
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

// REDUX
import { connect } from "react-redux";
import { addDashboard } from "../../../core/actions/dashboards";

// MATERIAL-UI
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import PublishIcon from "@material-ui/icons/Publish";
import { ThemeProvider } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import { primaryTheme } from "../../../core/components/layout/Theme";

import ImageList from "./ImageList";
import { ChromePicker } from "react-color";

// CONFIG
import {
  LEVEL_CHOICES,
  DASHBOARD_TYPE_CHOICES
} from "../../../core/config/dashboardConfig";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap"
  },
  textField: {
    margin: theme.spacing(3),
    width: 200
  },
  uploadFAB: {
    color: "white"
  }
}));

const DashboardForm = props => {
  const { title, author, background, dashboard_type, level } = props.values;
  const { images } = props;
  const { onChange, showImageField } = props;
  const classes = useStyles();

  const onChangeColor = color => {
    const { onChange } = props;
    onChange({
      target: {
        name: "background",
        value: color.hex
      }
    });
  };

  const onChangeFile = e => {
    const { onChange } = props;
    onChange({
      target: {
        name: "image",
        value: e.target.files[0]
      }
    });
  };

  return (
    <ThemeProvider theme={primaryTheme}>
      <Grid container spacing={3}>
        {showImageField && (
          <div className="col-12 mr-2">
            <ImageList images={images}></ImageList>
          </div>
        )}
        <Grid item md={12} className={classes.container}>
          <TextField
            required
            id="title"
            label="Title"
            className={classes.textField}
            onChange={onChange}
            value={title || ""}
            name="title"
          />

          <TextField
            required
            id="author"
            label="Author"
            className={classes.textField}
            onChange={onChange}
            value={author || ""}
            name="author"
          />

          <FormControl className={classes.textField}>
            <InputLabel id="demo-customized-select-label">Type</InputLabel>
            <Select
              required
              id="dashboard_type"
              onChange={onChange}
              value={dashboard_type}
              name="dashboard_type"
            >
              {DASHBOARD_TYPE_CHOICES.map(choice => (
                <MenuItem value={choice.id} key={choice.id}>
                  {choice.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl className={classes.textField}>
            <InputLabel id="demo-customized-select-label">Type</InputLabel>
            <Select
              required
              id="level"
              onChange={onChange}
              value={level}
              name="level"
            >
              {LEVEL_CHOICES.map(choice => (
                <MenuItem value={choice.id} key={choice.id}>
                  {choice.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Fab
            color="secondary"
            component="label"
            aria-label="edit"
            className={classes.uploadFAB}
          >
            <PublishIcon />
            <input
              accept="image/*"
              id="raised-button-file"
              multiple
              type="file"
              style={{ display: "none" }}
              onChange={onChangeFile}
            />
          </Fab>
        </Grid>
        <Grid item md={12} className={classes.container}>
          <FormControl className={classes.textField}>
            <label htmlFor="color">Background Color</label>
            <ChromePicker color={background} onChangeComplete={onChangeColor} />
          </FormControl>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

DashboardForm.propTypes = {
  addDashboard: PropTypes.func.isRequired,
  values: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    background: PropTypes.color,
    dashboard_type: PropTypes.number,
    level: PropTypes.number
  })
};

export default connect(null, { addDashboard })(DashboardForm);
