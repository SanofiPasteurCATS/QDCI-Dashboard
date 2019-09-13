// DEPENDANCIES
import React from "react";
import * as d3 from "d3";
import { withFauxDOM } from "react-faux-dom";
import PropTypes from "prop-types";

// COMPONENTS
import { primaryColor, accentColor } from "../../config/styleConfig";
import {
  KPI_TYPE_DEVIATION,
  KPI_TYPE_WIN_LOSE,
  KPI_TYPE_THRESHOLD,
  THRESHOLD_TYPE_GREATER,
  THRESHOLD_TYPE_LESS
} from "../../config/dashboardConfig";
/**
 * Pillar component renders individual +QDCI Pillars using d3 and react-faux-dom
 * Recieves props "kpis" which contains all information for kpis
 */
const xFactor = 4;

const labelData = [
  {
    date: "2019-01-01"
  },
  {
    date: "2019-02-01"
  },
  {
    date: "2019-03-01"
  },
  {
    date: "2019-04-01"
  },
  {
    date: "2019-05-01"
  },
  {
    date: "2019-06-01"
  },
  {
    date: "2019-07-01"
  },
  {
    date: "2019-08-01"
  },
  {
    date: "2019-09-01"
  },
  {
    date: "2019-10-01"
  },
  {
    date: "2019-11-01"
  },
  {
    date: "2019-12-01"
  }
];

class Pillar extends React.Component {
  static propTypes = {
    kpis: PropTypes.array.isRequired,
    letter: PropTypes.string.isRequired,
    dashboardId: PropTypes.string.isRequired,
    labeled: PropTypes.bool
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
    if (this.props.kpis !== prevProps.kpis) {
      this.updateD3();
    }
  }

  // Renders svg markup in the chart props
  render() {
    return <div style={{ margin: `${10}px ${0}` }}>{this.props.chart}</div>;
  }

  // Renders D3 chart to the faux DOM
  renderD3() {
    const faux = this.props.connectFauxDOM("svg", "chart");

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

    const img = link
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

    this.props.animateFauxDOM(800);

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
    const { kpis, letter, labeled, showTooltip } = this.props;
    const plotSize = 200;
    const radius = plotSize / xFactor;
    const count = kpis.length;
    const labelOffset = labeled ? -1 : 0;
    const labelScale = labeled ? 0.9 : 1;
    const parseTime = d3.timeParse("%Y-%m-%d");
    const formatTime = d3.timeFormat("%b");

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
    const arc = d3
      .arc()
      .cornerRadius(2)
      .padAngle(0.6)
      .padRadius(3);

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

    const getColor = ({
      safe_deviation,
      danger_deviation,
      kpi_type,
      warning_margin,
      threshold_type,
      value,
      target
    }) => {
      let color = "#F2F2F2";
      const deviation = (value / target - 1) * 100;
      const abs_deviation = Math.abs(deviation);
      if (value == null) return color;
      switch (kpi_type) {
        case KPI_TYPE_DEVIATION:
          if (abs_deviation < safe_deviation) color = "green";
          else if (
            abs_deviation > safe_deviation &&
            abs_deviation < danger_deviation
          )
            color = "orange";
          else color = "red";
          break;

        case KPI_TYPE_THRESHOLD:
          switch (threshold_type) {
            case THRESHOLD_TYPE_GREATER:
              if (value >= target) color = "green";
              else if (deviation < warning_margin) color = "red";
              else color = "orange";
              break;
            case THRESHOLD_TYPE_LESS:
              if (value <= target) color = "green";
              else if (deviation > warning_margin) color = "red";
              else color = "orange";
              break;
          }
          break;

        case KPI_TYPE_WIN_LOSE:
          if (value >= target) color = "green";
          else color = "red";
          break;
      }
      return color;
    };

    const faux = this.props.connectFauxDOM("svg", "chart");

    d3.select(faux).select("#circle");

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
        return arc
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
        d3.select(`#ring_${d.data.id}`)
          .style("stroke", "#000")
          .attr("stroke-width", "1");
        showTooltip(true, {
          x: d3.event.pageX,
          y: d3.event.pageY,
          payload: { kpi_type, kpiName, ...d.data }
        });
      })
      .on("mouseout", d => {
        d3.select(`#ring_${d.data.id}`).style("stroke", "none");
        showTooltip(false);
      })
      .merge(ringBind)
      .style("fill", (d, i, j) => {
        const colorProps = {
          safe_deviation: $(j)[i].parentNode.getAttribute("data-safe"),
          danger_deviation: $(j)[i].parentNode.getAttribute("data-danger"),
          kpi_type: $(j)[i].parentNode.getAttribute("data-type"),
          warning_margin: $(j)[i].parentNode.getAttribute("data-warning"),
          threshold_type: $(j)[i].parentNode.getAttribute("data-thresh-type"),
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
        .data(pie(labelData))
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
  labeled: false
};

export default withFauxDOM(Pillar);
