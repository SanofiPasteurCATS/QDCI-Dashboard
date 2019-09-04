// DEPENDANCIES
import React, { Component } from "react";

class SeriesCard extends Component {
  render() {
    const { series, onClick } = this.props;
    return (
      <div
        className="card m-3 card-hover"
        onClick={() => onClick(series.id)}
        data-toggle="modal"
        data-target="#manageKpi"
      >
        <div className="card-body">
          <div className="d-flex">
            <div
              className="card-title"
              style={{ fontSize: "1.25rem", fontWeight: "bold" }}
            >
              {series.name}{" "}
            </div>
            <i
              style={{ color: series.color, textAlign: "right" }}
              className="im im-drop ml-auto"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SeriesCard;
