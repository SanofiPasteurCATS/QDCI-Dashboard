import React from "react";

const SeriesInfo = () => (
  <div id="infos" className="tab-pane fade show active">
    <h5 className="card-title">Series</h5>
    <p className="card-text">
      Here you can view and manage all your series. Each Series is defined by
      the following fields.
    </p>
    <h5 className="mt-4">
      <i className="im im-pencil mr-2" /> Name
    </h5>
    <p className="card-text">
      {" "}
      - Give your Series distinct and informative labels
    </p>
    <h5 className="mt-4">
      {" "}
      <i className="im im-flip-chart-o mr-2" /> Plot Type
    </h5>
    <p className="card-text">
      {" "}
      - Defines the way which the series data is displayed
    </p>
    <h5 className="mt-4">
      <i className="im im-paintbrush mr-2" /> Color
    </h5>
    <p className="card-text">
      {" "}
      - Give each series a distinct look with different colors
    </p>
  </div>
);

export default SeriesInfo;
