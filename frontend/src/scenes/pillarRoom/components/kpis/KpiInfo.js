// DEPENDACIES
import React, { Fragment } from "react";

const KpiInfo = () => (
  <Fragment>
    <h5 className="card-title">KPIS</h5>
    <p className="card-text">
      Here you can view and manage all your key preformance indicators. Each KPI
      is defined by the following fields.
    </p>
    <h5 className="mt-4">
      <i className="im im-pencil mr-2" /> Name
    </h5>
    <p className="card-text">
      {" "}
      - Give your KPIs distinct and informative labels
    </p>
    <h5 className="mt-4">
      <i className="im im-bank mr-2" /> Pillar
    </h5>
    <p className="card-text"> - Defines which pillar the KPI belongs too.</p>
    <h5 className="mt-4">
      {" "}
      <i className="im im-date-o mr-2" /> Frequency
    </h5>
    <p className="card-text">
      {" "}
      - Defines the frequency of measurement, ie, 12 for monthly or 52 for
      weekly
    </p>
    <h5 className="mt-4">
      <i className="im im-check-mark mr-2" /> Safe Threshold
    </h5>
    <p className="card-text">
      {" "}
      - Defines the threshold for values which are considered within adequate
      range of the target
      <br />- These values turn green
    </p>
    <h5 className="mt-4">
      <i className="im im-x-mark mr-2" /> Danger Threshold
    </h5>
    <p className="card-text">
      {" "}
      - Defines the threshold for values which are not within adequate range of
      the target <br />- These values will turn red and require actions
    </p>
  </Fragment>
);

export default KpiInfo;
