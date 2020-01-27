// DEPENDANCIES
import React from "react";
import * as d3 from "d3";
import { withFauxDOM } from "react-faux-dom";
import PropTypes from "prop-types";

import { getColor } from "./ColorHelpers";
// COMPONENTS
import { primaryColor, accentColor } from "../../config/styleConfig";
import { PILLAR_LABELS } from "../../config/dashboardConfig";
/**
 * Pillar component renders individual +QDCI Pillars using d3 and react-faux-dom
 * Recieves props "kpis" which contains all information for kpis
 */
const xFactor = 4;

class Pillar extends React.Component {
  static propTypes = {
    kpis: PropTypes.array.isRequired,
    letter: PropTypes.string.isRequired,
    dashboardId: PropTypes.string.isRequired,
    labeled: PropTypes.bool,
    onHover: PropTypes.func,
    connectFauxDOM: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.renderD3 = this.renderD3.bind(this);
    this.updateD3 = this.updateD3.bind(this);
  }

  // Trigger D3 intial render()
  componentDidMount() {
    this.renderD3();
    this.updateD3();
  }

  // Triger D3 update()
  componentDidUpdate(prevProps) {
    const { kpis } = this.props;
    if (kpis !== prevProps.kpis) {
      this.updateD3();
    }
  }

  // Renders svg markup in the chart props
  render() {
    const { chart, className } = this.props;
    return (
      <div style={{ margin: `${10}px ${10}px` }} className={className}>
        {chart}
      </div>
    );
  }

  // Renders D3 chart to the faux DOM
  renderD3() {
    const { connectFauxDOM, animateFauxDOM } = this.props;

    const faux = connectFauxDOM("svg", "chart");

    const plotSize = 200;
    const { letter, dashboardId, labeled } = this.props;
    const radius = plotSize / xFactor;
    const labelScale = labeled ? 0.4 : 1;
    const svg = d3
      .select(faux)
      .attr("id", "chartPillar")
      .attr("xmlns", "http://www.w3.org/2000/svg")
      .attr("xmlnsXlink", "http://www.w3.org/1999/xlink")
      .attr("viewBox", `0 0 ${plotSize} ${plotSize}`)
      .attr("preserveAspectRatio", "xMidYMid meet")
      .classed("svg-content", true);

    const link = svg
      .append("a")
      .attr(
        "href",
        `#/pillar/${dashboardId}/${letter === "+" ? "Plus" : letter}`
      )
      .style("text-decoration", "none");

    link
      .append("circle")
      .attr("cx", plotSize / 2)
      .attr("cy", plotSize / 2)
      .attr("alignment-baseline", "middle")
      .attr("r", 0)
      .style("fill", accentColor)
      .attr("id", "circle")
      .transition()
      .duration(800)
      .attr("r", radius - plotSize / (50 * labelScale));

    animateFauxDOM(800);

    link
      .append("text")
      .text(letter)
      .attr("dx", "50%")
      .attr("dy", "52%")
      .attr("id", "text")
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .style("fill", primaryColor)
      .style("font-size", plotSize / 2.9)
      .style("text-decoration", "none");
  }

  // Handles all D3 updates caused by changes to dataset
  updateD3() {
    const { kpis, letter, labeled, onHover } = this.props;
    const plotSize = 200;
    const radius = plotSize / xFactor;
    const count = kpis.length;
    const labelOffset = labeled ? -1 : 0;
    const labelScale = labeled ? 0.9 : 1;
    const parseTime = d3.timeParse("%Y-%m-%d");
    const formatTime = d3.timeFormat("%b");
    // Sorting all data points in chronological order
    for (const y in kpis) {
      for (const x in kpis[y].series) {
        const series = kpis[y].series[x].entries;
        series.sort((a, b) => {
          if (!a.date && b.date) return 1;
          if (a.date && !b.date) return -1;
          if (!a.date && !b.date) return 0;
          return new Date(a.date) - new Date(b.date);
        });
      }
    }

    const pie = d3
      .pie()
      .sort(null)
      .value(d => 1);

    const arc = (cornerRadius = 2, padAngle = 0.6, padRadius = 3) => {
      return d3
        .arc()
        .cornerRadius(cornerRadius)
        .padAngle(padAngle)
        .padRadius(padRadius);
    };

    const labelArc = d3
      .arc()
      .innerRadius(
        radius * 0.84 + ((plotSize * labelScale) / 21) * (count - 1) * 1.0 + 15
      )
      .outerRadius(
        radius * 0.84 + ((plotSize * labelScale) / 20) * (count - 1) * 1.3 + 15
      )
      .cornerRadius(2)
      .padAngle(0.05)
      .padRadius(80);

    const faux = this.props.connectFauxDOM("svg", "chart");

    d3.select(faux)
      .select("#text")
      .text(letter);

    const pathBind = d3
      .select(faux)
      .selectAll(".kpi")
      .data(kpis);

    pathBind.exit().remove();

    const pathEnter = pathBind
      .enter()
      .append("g")
      .attr("class", "kpi")
      .merge(pathBind)
      .attr("data-index", (d, i) => i)
      .attr("data-safe", d => d.safe_deviation)
      .attr("data-frequency", d => d.frequency)
      .attr("data-danger", d => d.danger_deviation)
      .attr("data-name", d => d.name)
      .attr("data-thresh-type", d => d.threshold_type)
      .attr("data-warning", d => d.warning_margin)
      .attr("data-type", d => d.kpi_type)
      .attr("data-is-percentage", d => d.isPercentage)
      .attr("transform", `translate(${plotSize / 2},${plotSize / 2})`);
    this.props.animateFauxDOM(800);

    pathEnter.selectAll(".ring").remove();
    const ring = pathEnter.selectAll(".ring");

    const ringBind = ring.data(d =>
      pie(d.series[0] ? d.series[0].entries : [])
    );

    ringBind
      .enter()
      .append("path")
      .attr("class", "ring")
      .attr("id", d => {
        return `ring_${d.data.id}`;
      })
      .attr("d", (d, i, j) => {
        const index = $(j)[i].parentNode.getAttribute("data-index");
        const frequency = $(j)[i].parentNode.getAttribute("data-frequency");
        let line = arc();
        if (frequency === 3) line = arc(0, 0, 0);

        return line
          .outerRadius(
            radius + ((plotSize * labelScale) / 16) * (index + 1 + labelOffset)
          )
          .innerRadius(
            radius + ((plotSize * labelScale) / 16) * (index + labelOffset) + 4
          )(d);
      })
      .on("mouseover", (d, i, j) => {
        const kpi_type = $(j)[i].parentNode.getAttribute("data-type");
        const kpiName = $(j)[i].parentNode.getAttribute("data-name");
        const threshold_type = $(j)[i].parentNode.getAttribute(
          "data-thresh-type"
        );
        const warning_margin = $(j)[i].parentNode.getAttribute("data-warning");

        d3.select(`#ring_${d.data.id}`)
          .style("stroke", "#000")
          .attr("stroke-width", "1");
        if (!onHover) return;
        onHover(true, {
          payload: {
            x: d3.event.pageX,
            y: d3.event.pageY,
            kpi_type,
            kpiName,
            threshold_type,
            warning_margin,
            ...d.data,
            i
          }
        });
      })
      .on("mouseout", d => {
        d3.select(`#ring_${d.data.id}`).style("stroke", "none");
        if (!onHover) return;
        onHover(false);
      })
      .merge(ringBind)
      .style("fill", (d, i, j) => {
        const colorProps = {
          safe_deviation: $(j)[i].parentNode.getAttribute("data-safe"),
          danger_deviation: $(j)[i].parentNode.getAttribute("data-danger"),
          kpi_type: $(j)[i].parentNode.getAttribute("data-type"),
          warning_margin: $(j)[i].parentNode.getAttribute("data-warning"),
          threshold_type: $(j)[i].parentNode.getAttribute("data-thresh-type"),
          isPercentage: $(j)[i].parentNode.getAttribute("data-is-percentage"),
          value: d.data.value,
          target: d.data.target
        };
        return getColor(colorProps);
      });
    d3.select(faux)
      .selectAll(".label")
      .remove();
    if (kpis[count - 1] && labeled && kpis[count - 1].series[0]) {
      const labels = d3
        .select(faux)
        .selectAll(".label")
        .data(pie(PILLAR_LABELS))
        .enter()
        .append("text")
        .text((d, i, j) => {
          if (d.data.date) return formatTime(parseTime(d.data.date));
          return "";
        })
        .attr("class", "label")
        .attr("transform", function(d) {
          const pos = labelArc.centroid(d);
          const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
          // ABSOLUTE VALUES! ToDo: Change to relative!
          pos[0] += 100;
          pos[1] += 102;
          return `translate(${pos})`;
        })
        .style("font-size", "0.5rem")
        .style("text-anchor", function(d) {
          const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
          return midangle < Math.PI ? "start" : "end";
        })
        .style("fill", accentColor);

      this.props.animateFauxDOM(800);
    }
  }
}

Pillar.defaultProps = {
  chart: "loading",
  labeled: false,
  onHover: null
};

export default withFauxDOM(Pillar);
