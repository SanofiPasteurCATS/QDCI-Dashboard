// DEPENDANCIES
import React from "react";

const DataInfo = () => (
  <div id="infoData" className="tab-pane fade">
    <h5 className="card-title">Data</h5>
    <p className="card-text">
      Here you can view and manage all your datapoints. Each datapoint is
      defined by the following fields.
    </p>
    <h5 className="mt-4">
      <i className="im im-file-o mr-2" /> Value
    </h5>
    <p className="card-text"> - Defines the quantity of the measurement</p>
    <h5 className="mt-4">
      {" "}
      <i className="im im-target mr-2" /> Target
    </h5>
    <p className="card-text">
      {" "}
      - Defines the value at from which deviations are calculated
    </p>
    <h5 className="mt-4">
      <i className="im im-calendar mr-2" /> Date
    </h5>
    <p className="card-text">
      {" "}
      - Defines the day which the data was reported <br />- Format: YYYY-MM-DD
    </p>
  </div>
);

export default DataInfo;
