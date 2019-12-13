import React, { Component } from "react";
import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";
import { SliderRail, Handle, Track, Tick } from "./SliderProps"; // example render components - source below
import { THRESHOLD_TYPE_GREATER } from "../../../config/dashboardConfig";

const sliderStyle = {
  position: "relative",
  width: "100%"
};

const domain = [-100, 100];

class Example extends Component {
  constructor(props) {
    super(props);

    const values = this.getValues();
    this.state = {
      values: values,
      update: values
    };
  }

  getValues = () => {
    const { target, warning_margin, threshold_type } = this.props;
    let values = [0, 0];

    const newTarget = parseInt(target);
    if (!target) {
      values =
        threshold_type === THRESHOLD_TYPE_GREATER
          ? [warning_margin, 0, 100].slice()
          : [0, warning_margin, 100].slice();
    } else {
      values =
        threshold_type === THRESHOLD_TYPE_GREATER
          ? [
              warning_margin || Math.round(newTarget - newTarget * 0.5),
              newTarget,
              newTarget * 2
            ]
          : [
              newTarget,
              warning_margin || Math.round(newTarget * 1.5),
              newTarget * 2
            ];
    }
    return values;
  };

  componentDidUpdate(prevProps) {
    const { target, threshold_type } = this.props;
    if (
      prevProps.target !== target ||
      prevProps.threshold_type !== threshold_type
    ) {
      const { target, warning_margin, threshold_type } = this.props;
      let values = [0, 0];

      const newTarget = parseInt(target);
      if (!target) {
        values =
          threshold_type === THRESHOLD_TYPE_GREATER
            ? [-75, 0, 100].slice()
            : [0, 75, 100].slice();
      } else {
        values =
          threshold_type === THRESHOLD_TYPE_GREATER
            ? [
                Math.round(newTarget - newTarget * 0.5),
                newTarget,
                newTarget * 2
              ]
            : [newTarget, Math.round(newTarget * 1.5), newTarget * 2];
      }
      console.log(values);
      this.setState({
        values: values.slice(),
        update: values.slice()
      });
      this.onUpdate(values);
    }
  }

  onUpdate = update => {
    const { onUpdate } = this.props;
    onUpdate(update);
  };

  onChange = values => {
    this.setState({ values });
  };

  render() {
    const {
      state: { values, update }
    } = this;
    const { threshold_type, target, domain } = this.props;
    return (
      <div style={{ height: 70, width: "95%", paddingLeft: "10px" }}>
        <Slider
          mode={2}
          step={1}
          domain={domain}
          rootStyle={sliderStyle}
          onUpdate={this.onUpdate}
          onChange={this.onChange}
          values={values}
        >
          <Rail>
            {({ getRailProps }) => {
              let props = getRailProps();
              props.onMouseDown = () => {};
              props.onTouchStart = () => {};
              return (
                <SliderRail
                  getRailProps={() => {
                    props;
                  }}
                  color={
                    threshold_type === THRESHOLD_TYPE_GREATER
                      ? "#ff0000"
                      : "#218838"
                  }
                />
              );
            }}
          </Rail>
          <Handles>
            {({ handles, getHandleProps }) => (
              <div className="slider-handles">
                {handles.map((handle, i, arr) => {
                  if (i === (threshold_type === THRESHOLD_TYPE_GREATER ? 1 : 0))
                    return (
                      <Handle
                        key={handle.id}
                        handle={handle}
                        domain={domain}
                        getHandleProps={() => {}}
                        disabled
                      />
                    );
                  if (i + 1 == arr.length)
                    return (
                      <Handle
                        key={handle.id}
                        handle={handle}
                        domain={domain}
                        getHandleProps={() => {}}
                        disabled
                        noDisplay
                      />
                    );
                  return (
                    <Handle
                      key={handle.id}
                      handle={handle}
                      domain={domain}
                      getHandleProps={getHandleProps}
                    />
                  );
                })}
              </div>
            )}
          </Handles>
          <Tracks left={false} right={false}>
            {({ tracks, getTrackProps }) => (
              <div className="slider-tracks">
                {tracks.map(({ id, source, target }, i, arr) => {
                  if (i + 1 === arr.length)
                    return (
                      <Track
                        key={id}
                        source={source}
                        target={target}
                        getTrackProps={() => {}}
                        color={
                          threshold_type === THRESHOLD_TYPE_GREATER
                            ? "#218838"
                            : "#ff0000"
                        }
                      />
                    );
                  return (
                    <Track
                      key={id}
                      source={source}
                      target={target}
                      getTrackProps={() => {}}
                      color="#b28900"
                    />
                  );
                })}
              </div>
            )}
          </Tracks>
          <Ticks count={5}>
            {({ ticks }) => (
              <div className="slider-ticks">
                {ticks.map((tick, i, arr) => {
                  if (i === Math.floor(arr.length / 2))
                    return (
                      <Tick
                        key={tick.id}
                        tick={tick}
                        count={ticks.length}
                        suffix={target ? "" : "%"}
                        name={target ? null : "Target"}
                      />
                    );

                  if (i > Math.floor(arr.length / 2))
                    return (
                      <Tick
                        key={tick.id}
                        tick={tick}
                        count={ticks.length}
                        suffix={target ? "" : "%"}
                        prefix="+"
                      />
                    );
                  return (
                    <Tick
                      key={tick.id}
                      tick={tick}
                      count={ticks.length}
                      suffix={target ? "" : "%"}
                    />
                  );
                })}
              </div>
            )}
          </Ticks>
        </Slider>
      </div>
    );
  }
}

export default Example;
