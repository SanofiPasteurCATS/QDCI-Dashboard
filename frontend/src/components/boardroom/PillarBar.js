// -----------------------------------------------------------------------------
//                          PillarBar COMPONENT
//                      Organization: Sanofi Pasteur
//                         Author: Kyle Thatcher
//                           Date: 08JUL2019
//
//
//* The boardroom/PillarBar component mounts all Pillar components to the board room
//               * Filters KPIs into there respective pillars
// -----------------------------------------------------------------------------

import React from "react";
import PropTypes from "prop-types";
import Pillar from "../common/d3charts/pillar";

const PillarBar = props => {
  const { kpis, dashboardId } = props;
  // Helper function to filter KPIS by pillar for each pillar component
  const filterKpis = pillar => {
    if (!kpis) return [];
    return kpis.filter(kpi => kpi.pillar === pillar);
  };
  return (
    <div>
      <Pillar kpis={filterKpis("+")} letter="+" dashboardId={dashboardId} />
      <Pillar kpis={filterKpis("Q")} letter="Q" dashboardId={dashboardId} />
      <Pillar kpis={filterKpis("D")} letter="D" dashboardId={dashboardId} />
      <Pillar kpis={filterKpis("C")} letter="C" dashboardId={dashboardId} />
      <Pillar kpis={filterKpis("I")} letter="I" dashboardId={dashboardId} />
    </div>
  );
};
PillarBar.propType = {
  kpis: PropTypes.arrayOf(PropTypes.object),
  dashboardId: PropTypes.number.isRequired
};

PillarBar.defaultProps = {
  kpis: null
};
export default PillarBar;
