import React, { Component } from "react";
import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";
import { SliderRail, Handle, Track, Tick, RedTrack } from "./SliderProps"; // example render components - source below

const sliderStyle = {
  position: "relative",
  width: "100%"
};

const domain = [0, 100];
const defaultValues = [0, 25, 75, 100];

class Example extends Component {
  constructor(props) {
    super(props);
    const { danger_deviation, safe_deviation } = this.props;
    const values = [0, danger_deviation, safe_deviation, 100];
    this.state = {
      values: values.slice(),
      update: values.slice()
    };
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

    return (
      <div className="mt-5" style={{ height: 70, width: "95%" }}>
        <Slider
          mode={1}
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
                  color="#218838"
                />
              );
            }}
          </Rail>
          <Handles>
            {({ handles, getHandleProps }) => (
              <div className="slider-handles">
                {handles.map((handle, i, arr) => {
                  if (i === 0)
                    return (
                      <Handle
                        key={handle.id}
                        handle={handle}
                        domain={domain}
                        getHandleProps={() => {}}
                        disabled
                      />
                    );
                  if (i + 1 === arr.length)
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
                  if (i === 0)
                    return (
                      <Track
                        key={id}
                        source={source}
                        target={target}
                        getTrackProps={() => {}}
                        color="#218838"
                      />
                    );
                  if (i + 1 === arr.length)
                    return (
                      <Track
                        key={id}
                        source={source}
                        target={target}
                        getTrackProps={() => {}}
                        color="#ff0000"
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
                  if (i === 0)
                    return (
                      <Tick
                        key={tick.id}
                        tick={tick}
                        count={ticks.length}
                        name="Target"
                      />
                    );
                  return (
                    <Tick
                      key={tick.id}
                      tick={tick}
                      count={ticks.length}
                      prefix="+/-"
                      suffix="%"
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
