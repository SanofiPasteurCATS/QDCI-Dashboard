// Component mounts all the pillars for dashboard home page

import React from "react";
import Pillar from "../common/d3charts/pillar";

const Sidebar = props => {
  const filterKpis = pillar => {
    if (!props.kpis) return [];
    return props.kpis.filter(kpi => kpi.pillar === pillar);
  };
  return (
    <div>
      <Pillar
        kpis={filterKpis("+")}
        letter="+"
        dashboardId={props.dashboardId}
      />
      <Pillar
        kpis={filterKpis("Q")}
        letter="Q"
        dashboardId={props.dashboardId}
      />
      <Pillar
        kpis={filterKpis("D")}
        letter="D"
        dashboardId={props.dashboardId}
      />
      <Pillar
        kpis={filterKpis("C")}
        letter="C"
        dashboardId={props.dashboardId}
      />
      <Pillar
        kpis={filterKpis("I")}
        letter="I"
        dashboardId={props.dashboardId}
      />
    </div>
  );
};

export default Sidebar;
