import React, { Fragment } from "react";
import PropTypes from "prop-types";

// *******************************************************
// RAIL
// *******************************************************
const railOuterStyle = {
  position: "absolute",
  width: "100%",
  height: 6,
  transform: "translate(0%, -50%)",
  borderRadius: 7,
  cursor: "pointer"
  // border: '1px solid white',
};

const railInnerStyle = {
  position: "absolute",
  width: "100%",
  height: 6,
  transform: "translate(0%, -50%)",
  borderRadius: 7,
  pointerEvents: "none",
  backgroundColor: "#218838"
};

export function SliderRail({ getRailProps, color }) {
  var style = { ...railInnerStyle };
  style.backgroundColor = color;
  return (
    <Fragment>
      <div style={railOuterStyle} {...getRailProps()} />
      <div style={style} />
    </Fragment>
  );
}

SliderRail.propTypes = {
  getRailProps: PropTypes.func.isRequired
};

// *******************************************************
// HANDLE COMPONENT
// *******************************************************
export function Handle({
  domain: [min, max],
  handle: { id, value, percent },
  disabled,
  getHandleProps,
  noDisplay
}) {
  return (
    <Fragment>
      <div
        style={{
          left: `${percent}%`,
          position: "absolute",
          transform: "translate(-50%, -50%)",
          WebkitTapHighlightColor: "rgba(0,0,0,0)",
          zIndex: disabled ? 0 : 5,
          pointerEvents: disabled ? "none" : "auto",
          width: 28,
          height: 42,
          cursor: "pointer",
          // border: '1px solid white',
          backgroundColor: "none"
        }}
        {...getHandleProps(id)}
      />
      <div
        role="slider"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        style={{
          left: `${percent}%`,
          position: "absolute",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          width: noDisplay ? 0 : 20,
          height: noDisplay ? 0 : 20,
          borderRadius: "50%",
          boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, 0.3)",
          backgroundColor: disabled ? "#666" : "#ffc400"
        }}
      />
    </Fragment>
  );
}

Handle.propTypes = {
  domain: PropTypes.array.isRequired,
  handle: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired
  }).isRequired,
  getHandleProps: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

Handle.defaultProps = {
  disabled: false
};

// *******************************************************
// KEYBOARD HANDLE COMPONENT
// Uses a button to allow keyboard events
// *******************************************************
export function KeyboardHandle({
  domain: [min, max],
  handle: { id, value, percent },
  disabled,
  getHandleProps
}) {
  return (
    <button
      role="slider"
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
      style={{
        left: `${percent}%`,
        position: "absolute",
        transform: "translate(-50%, -50%)",
        zIndex: 2,
        width: 16,
        height: 16,
        borderRadius: "50%",
        boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, 0.3)",
        backgroundColor: disabled ? "#666" : "#218838"
      }}
      disabled
      {...getHandleProps(id)}
    />
  );
}

KeyboardHandle.propTypes = {
  domain: PropTypes.array.isRequired,
  handle: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired
  }).isRequired,
  getHandleProps: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

KeyboardHandle.defaultProps = {
  disabled: false
};

// *******************************************************
// TRACK COMPONENT
// *******************************************************
export function Track({ source, target, getTrackProps, disabled, color }) {
  return (
    <div
      style={{
        position: "absolute",
        transform: "translate(0%, -50%)",
        height: 6,
        zIndex: 1,
        backgroundColor: disabled ? "#999" : color,
        borderRadius: 7,
        cursor: "pointer",
        left: `${source.percent}%`,
        width: `${target.percent - source.percent}%`
      }}
      {...getTrackProps()}
    />
  );
}

Track.propTypes = {
  source: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired
  }).isRequired,
  target: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired
  }).isRequired,
  getTrackProps: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

Track.defaultProps = {
  disabled: false
};

// *******************************************************
// TICK COMPONENT
// *******************************************************
export function Tick({ tick, count, format, prefix, suffix, name }) {
  return (
    <div>
      <div
        style={{
          position: "absolute",
          marginTop: 14,
          width: 1,
          height: 5,
          backgroundColor: "rgb(200,200,200)",
          left: `${tick.percent}%`
        }}
      />
      <div
        style={{
          position: "absolute",
          marginTop: 22,
          fontSize: 10,
          textAlign: "center",
          marginLeft: `${-(100 / count) / 2}%`,
          width: `${100 / count}%`,
          left: `${tick.percent}%`
        }}
      >
        {!name ? format(`${prefix}${tick.value}${suffix}`) : name}
      </div>
    </div>
  );
}

Tick.propTypes = {
  tick: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired
  }).isRequired,
  count: PropTypes.number.isRequired,
  format: PropTypes.func.isRequired
};

Tick.defaultProps = {
  format: d => d,
  prefix: "",
  suffix: ""
};
