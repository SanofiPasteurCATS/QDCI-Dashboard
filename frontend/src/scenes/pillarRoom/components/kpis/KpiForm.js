// DEPENDANCIES
import React, { Component } from "react";
import PropTypes from "prop-types";

// CORE COMPONENTS
import DeviationSlider from "../../../../core/components/ui/slider/DeviationSlider";
import ThresholdSlider from "../../../../core/components/ui/slider/ThresholdSlider";

// CONFIG
import {
  FREQUENCY_CHOICES,
  KPI_TYPE_CHOICES
} from "../../../../core/config/dashboardConfig";
import { THRESHOLD_TYPE_GREATER } from "../../../../core/config/dashboardConfig";

class KpiForm extends Component {
  constructor(props) {
    super(props);
    this.onSliderUpdate = this.onSliderUpdate.bind(this);
    this.slider = React.createRef();
  }

  componentDidMount() {
    const {
      danger_deviation,
      safe_deviation,
      kpi_type,
      warning_margin
    } = this.props.values;
    if (kpi_type === 0)
      this.updateSlider([0, safe_deviation, danger_deviation, 100]);
    else if (kpi_type === 1) this.updateSlider([0, warning_margin, 100]);
  }

  onSliderUpdate = update => {
    const { onChange } = this.props;
    onChange({ target: { name: "safe_deviation", value: update[1] } });
    onChange({ target: { name: "danger_deviation", value: update[2] } });
  };

  onThresholdSliderUpdate = update => {
    const { threshold_type } = this.props.values;
    const { onChange } = this.props;

    onChange({
      target: {
        name: "warning_margin",
        value: threshold_type === THRESHOLD_TYPE_GREATER ? update[0] : update[1]
      }
    });
  };

  onKpiTypeChange = e => {
    const { onChange } = this.props;
    const {
      kpi_type,
      safe_deviation,
      warning_margin,
      danger_deviation
    } = this.props.values;
    if (kpi_type === 0)
      this.updateSlider([0, safe_deviation, danger_deviation, 100]);
    else if (kpi_type === 1) this.updateSlider([0, warning_margin, 100]);
    onChange(e);
  };

  onThresholdTypeChange = e => {
    const { onChange } = this.props;
    if (e.target.id === "greater" && e.target.checked) {
      this.updateSlider([-50, 0, 100]);
      onChange({ target: { name: "threshold_type", value: 0 } });
      onChange({ target: { name: "warning_margin", value: -50 } });
    }
    if (e.target.id === "less" && e.target.checked) {
      this.updateSlider([0, 50, 100]);
      onChange({ target: { name: "threshold_type", value: 1 } });
      onChange({ target: { name: "warning_margin", value: 50 } });
    }
  };

  updateSlider(values) {
    if (this.slider.current) this.slider.current.onChange(values);
  }

  render() {
    const { onChange, pillar } = this.props;
    const {
      name,
      frequency,
      safe_deviation,
      danger_deviation,
      kpi_type,
      warning_margin,
      threshold_type,
      global_target
    } = this.props.values;
    const sliders = [
      <div className="d-flex">
        <div className="col-sm-6">
          <DeviationSlider
            disabledRail
            onUpdate={this.onSliderUpdate}
            ref={this.slider}
            danger_deviation={danger_deviation}
            safe_deviation={safe_deviation}
          ></DeviationSlider>
        </div>
        <div className="col-sm-2">
          <div className="form-group">
            <label htmlFor="safe">Safe Limit</label>
            <input
              className="form-control"
              type="text"
              name="safe_deviation"
              placeholder="..."
              value={`${safe_deviation}%`}
              disabled
            />
          </div>
        </div>
        <div className="col-sm-2">
          <div className="form-group">
            <label htmlFor="danger">Danger Limit</label>
            <input
              className="form-control"
              type="text"
              name="danger_deviation"
              placeholder="..."
              value={`${danger_deviation}%`}
              disabled
            />
          </div>
        </div>
      </div>,
      <div>Nothing to See</div>,
      <div className="d-flex">
        <div className="col-sm-6">
          <ThresholdSlider
            threshold_type={threshold_type}
            disabledRail
            onUpdate={this.onThresholdSliderUpdate}
            ref={this.slider}
            warning_margin={warning_margin}
          ></ThresholdSlider>
        </div>

        <div className="col-sm-2 mt-3">
          <div className="form-check">
            <input
              type="radio"
              name="threshold_type"
              className="form-check-input"
              id="greater"
              onChange={this.onThresholdTypeChange}
              checked={threshold_type ? false : true}
            />
            <label htmlFor="threshold_type" className="form-check-label mb-3">
              Greater Than
            </label>
            <input
              type="radio"
              name="threshold_type"
              className="form-check-input"
              id="less"
              onChange={this.onThresholdTypeChange}
              checked={threshold_type ? true : false}
            />
            <label htmlFor="threshold_type" className="form-check-label mb-3">
              Less Than
            </label>
          </div>
        </div>
        <div className="col-sm-2 mt-3">
          <label htmlFor="warning_margin">Warning Limit</label>
          <input
            className="form-control"
            type="text"
            name="warning_margin"
            placeholder="..."
            value={`${warning_margin}%`}
            disabled
          />
        </div>
      </div>
    ];

    return (
      <div className="row">
        <div className="col-sm-4">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={onChange}
              placeholder="..."
              value={name}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="frequency">Type</label>
            <select
              className="form-control"
              type="text"
              name="kpi_type"
              onChange={this.onKpiTypeChange}
              placeholder="..."
              value={kpi_type}
              required
            >
              {KPI_TYPE_CHOICES.map(choice => (
                <option key={`choice-${choice.id}`} value={choice.id}>
                  {choice.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="col-sm-4">
          <div className="form-group">
            <label htmlFor="frequency">Frequency</label>
            <select
              className="form-control"
              type="text"
              name="frequency"
              onChange={onChange}
              placeholder="..."
              value={frequency}
              required
            >
              {FREQUENCY_CHOICES.map(choice => (
                <option key={`choice-${choice.id}`} value={choice.id}>
                  {choice.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="global_target">Default Target</label>
            <input
              className="form-control"
              type="text"
              name="global_target"
              onChange={onChange}
              placeholder="..."
              value={global_target}
            />
          </div>
        </div>
        <div className="col-sm-4">
          <div className="form-group">
            <label htmlFor="pillar">Pillar</label>
            <input
              className="form-control"
              type="text"
              name="pillar"
              onChange={onChange}
              placeholder="..."
              value={pillar}
              required
              disabled
            />
          </div>
        </div>
        <div className="col-sm-12">{sliders[kpi_type]}</div>
      </div>
    );
  }
}

KpiForm.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default KpiForm;
