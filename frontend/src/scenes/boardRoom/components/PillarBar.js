import React from "react";
import PropTypes from "prop-types";
import Pillar from "../../../core/components/d3charts/pillar";

const PillarBar = props => {
  const { kpis, dashboardId } = props;
  // Helper function to filter KPIS by pillar for each pillar component
  const filterKpis = pillar => {
    if (!kpis) return [];
    return kpis.filter(kpi => kpi.pillar === pillar);
  };
  return (
    <div>
      <Pillar kpis={filterKpis("Plus")} letter="+" dashboardId={dashboardId} />
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
