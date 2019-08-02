// -----------------------------------------------------------------------------
//                           PILLAR COMPONENT
//                      Organization: Sanofi Pasteur
//                         Author: Kyle Thatcher
//                           Date: 08JUL2019
// -----------------------------------------------------------------------------

import React from "react";
import * as d3 from "d3";
import { withFauxDOM } from "react-faux-dom";

/**
 * Pillar component renders individual +QDCI Pillars using d3 and react-faux-dom
 * Recieves props "kpis" which contains all information for kpis
 */

class Pillar extends React.Component {
  constructor(props) {
    super(props);
    this.renderD3 = this.renderD3.bind(this);
    this.updateD3 = this.updateD3.bind(this);
  }

  // Trigger D3 intial render()
  componentDidMount() {
    this.renderD3();
  }

  // Triger D3 update()
  componentDidUpdate() {}

  // Renders svg markup in the chart props
  render() {
    return <div>{this.props.chart}</div>;
  }

  // Renders D3 chart to the faux DOM
  renderD3() {
    var data = this.props.kpis;
    var faux = this.props.connectFauxDOM("div", "chart");

    var svg = d3.select(faux).append("svg");

    svg
      .selectAll("rings")
      .data(data)
      .enter();
  }

  // Handles all D3 updates caused by changes to dataset
  updateD3() {}
}
Pillar.defaultProps = {
  chart: "loading"
};

export default withFauxDOM(Pillar);
