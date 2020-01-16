// DEPENDACIES
import React from "react";
import * as d3 from "d3";
import { withFauxDOM } from "react-faux-dom";
import PropTypes from "prop-types";

// COMPONENTS
import { accentColor } from "../../config/styleConfig";

const margin = {
  top: 10,
  right: 150,
  bottom: 30,
  left: 24
};

const width = 950 - margin.left - margin.right;
const height = 550 - margin.top - margin.bottom;

class LineChart extends React.Component {
  static propTypes = {
    kpis: PropTypes.array.isRequired,
    selectSeries: PropTypes.func.isRequired,
    chart: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    selectedKpi: PropTypes.number,
    connectFauxDOM: PropTypes.func.isRequired,
    animateFauxDOM: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.renderD3 = this.renderD3.bind(this);
    this.updateD3 = this.updateD3.bind(this);
  }

  // Trigger D3 initial render()
  componentDidMount() {
    this.renderD3();
    this.updateD3();
  }

  // Trigger D3 update()
  componentDidUpdate(prevProps) {
    const { kpis, selectedKpi } = this.props;

    if (kpis !== prevProps.kpis || selectedKpi !== prevProps.selectedKpi) {
      this.updateD3();
    }
  }

  render() {
    const { chart } = this.props;
    return <div>{chart}</div>;
  }

  renderD3() {
    const { connectFauxDOM, selectSeries } = this.props;
    const faux = connectFauxDOM("svg", "chart");
    function highlightLine(id) {
      if (id == null) return;
      d3.selectAll(".line").attr("stroke-width", 1.8);
      d3.selectAll(".dot").attr("r", 3);
      d3.selectAll(`.dot_${id}`).attr("r", 5);
      d3.select(`#line_${id}`).attr("stroke-width", 4.5);
      d3.selectAll(`.legend`)
        .attr("font-weight", "normal")
        .attr("font-size", "17");
      d3.select(`#legend_${id}`)
        .attr("font-weight", "bold")
        .attr("font-size", "20");
    }

    const svg = d3
      .select(faux)
      .attr("id", "chart")
      .attr(
        "viewBox",
        `0 0 ${width + margin.left + margin.right} ${height +
          margin.bottom +
          margin.top}`
      )
      .attr("preserveAspectRatio", "xMidYMid meet")
      .classed("svg-content", true)
      .attr("xmlns", "http://www.w3.org/2000/svg")
      .attr("xmlnsXlink", "http://www.w3.org/1999/xlink")
      // CSS Styles
      .append("g")
      .attr("id", "plotArea")
      .attr("transform", `translate(${margin.left + 30},${margin.bottom})`);

    svg
      .append("rect")
      .attr("width", width)
      .attr("height", height)
      .style("opacity", 0)
      .attr("id", "facade")
      .on("click", function() {
        highlightLine("null");
        selectSeries(null);
      });

    // Y-axis
    svg
      .append("g")
      .attr("class", "myYaxis")
      .style("color", "black")
      .style("font-size", "0.8rem");

    // X-axis
    svg
      .append("g")
      .attr("class", "myXaxis")
      .attr("transform", `translate(0, ${height - margin.bottom})`)
      .style("color", "black")
      .style("font-size", "0.8rem");

    // Y-axis Unit
    svg
      .append("text")
      .attr("x", 0 - margin.left / 4)
      .attr("y", 0 - margin.top)
      .attr("id", "y_unit")
      .style("fill", "black")
      .attr("text-anchor", "middle")
      .style("font-size", "15px");

    // Title
    svg
      .append("text")
      .attr("x", width / 2)
      .attr("id", "title")
      .attr("y", 0 - margin.top / 2)
      .attr("text-anchor", "middle")
      .style("font-weight", "bold")
      .style("font-size", "31px")
      .attr("fill", accentColor);
  }

  updateD3() {
    var x;
    const {
      connectFauxDOM,
      kpis,
      selectSeries,
      animateFauxDOM,
      selectedKpi
    } = this.props;

    const faux = connectFauxDOM("svg", "chart");
    let index = kpis.findIndex(kpi => {
      return kpi.id == selectedKpi;
    });

    index = index == -1 ? 0 : index;

    let data = kpis[index] ? kpis[index].series : [];

    let test = null;
    if (kpis[index] && kpis[index].series) {
      test = { ...kpis[index].series[0] };
      let entries = [...kpis[index].series[0].entries];
      test.id = Math.round(Math.random() * 500000);
      test.entries = entries.map(datapoint => {
        return {
          value: datapoint.target,
          date: datapoint.date,
          target: datapoint.target,
          id: Math.round(Math.random() * 500000)
        };
      });
      test.color = "#008000";
      test.name = `${test.name} Threshold`;
    }

    const parseTime = d3.timeParse("%Y-%m-%d");
    function highlightLine(id) {
      d3.selectAll(".line").attr("stroke-width", 1.8);
      d3.selectAll(".dot").attr("r", 3);
      d3.selectAll(`.dot_${id}`).attr("r", 5);
      d3.select(`#line_${id}`).attr("stroke-width", 4.5);
      d3.selectAll(`.legend`)
        .attr("font-weight", "normal")
        .attr("font-size", "17");
      d3.select(`#legend_${id}`)
        .attr("font-weight", "bold")
        .attr("font-size", "20");
    }
    // Sort by Date
    for (x in data) {
      const series = data[x].entries;
      series.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    // In order to scale the axes must find minimum and maximum from all series
    const mins = [];
    for (x in data) {
      mins.push(d3.min(data[x].entries, d => d.value));
    }
    const maxs = [];
    for (x in data) {
      maxs.push(d3.max(data[x].entries, d => d.value));
    }
    const minimum = mins.filter(d => {
      return d != null;
    });

    const maximum = maxs.filter(d => {
      return d != null;
    });
    // -----------------------------------------------------------------------------
    // AXES & SCALES
    // -----------------------------------------------------------------------------
    let startDate = new Date();
    if (data[0]) {
      if (data[0].entries[0]) {
        const date = data[0].entries[0].date;
        const parts = date.split("-");
        startDate = new Date(parts[0], parts[1] - 1, parts[2]);
      }
    }

    const xScale = d3
      .scaleTime()
      .domain([
        new Date(startDate.getFullYear(), 0, 1),
        new Date(startDate.getFullYear(), 11, 31)
      ])
      .range([0, width]);
    const yScale = d3
      .scaleLinear()
      .domain(
        minimum.length
          ? [d3.min(minimum) * 0.8, d3.max(maximum) * 1.2]
          : [0, 100]
      )
      .range([height - margin.bottom, 0]);
    const y_axis = d3.axisLeft(yScale);
    const x_axis = d3.axisBottom(xScale).tickFormat(d3.timeFormat("%b"));

    // Update the X_Axis
    d3.select(faux)
      .selectAll(".myXaxis")
      .style("font-size", "0.7rem")
      .transition()
      .duration(1000)
      .call(x_axis);

    // Update the Y_Axis
    d3.select(faux)
      .selectAll(".myYaxis")
      .style("font-size", "0.6rem")
      .transition()
      .duration(1000)
      .call(y_axis);

    // -----------------------------------------------------------------------------
    // LINES
    // -----------------------------------------------------------------------------

    const line = d3
      .line()
      .curve(d3.curveCardinal)
      .y(d => yScale(d.value))
      .defined(d => d.value != null)
      .x(d => xScale(parseTime(d.date)));

    const s = d3
      .select(faux)
      .select("#plotArea")
      .selectAll(".line");

    const extendedData = test != null ? [test, ...data] : data;
    const sData = s.data(extendedData);

    const sEnter = sData
      .enter()
      .append("path")
      .merge(s)
      .attr("d", d => line(d.entries))
      .style("opacity", 1)
      .attr("id", d => `line_${d.id}`)
      .attr("class", "line")
      .attr("fill", d => {
        return `url(#${d.id}-gradient)`;
      })
      .attr("stroke-width", 1.8)
      .attr("stroke", d => d.color);

    // Then the following lines transition the line so that the gap is hidden...

    sData.exit().remove();

    // -----------------------------------------------------------------------------
    // POINTS
    // -----------------------------------------------------------------------------

    const d = d3.select(faux).selectAll(".dots");
    d.remove();
    const dotBind = d3
      .select(faux)
      .select("#plotArea")
      .selectAll(".dots")
      .data(data);

    dotBind
      .enter()
      .append("g")
      .attr("class", "dots")
      .attr("data-id", d => {
        return d.id;
      })
      .style("fill", d => {
        return d3.rgb(d.color).darker(1);
      })
      // Second we need to enter in the 'values' part of this group
      .selectAll(".dot")
      .data(d => d.entries)
      .enter()
      .append("circle")
      .attr("cx", d => xScale(parseTime(d.date)))
      .attr("cy", d => yScale(d.value ? d.value : -50))
      .attr("r", 3)
      .style("opacity", 0)
      .attr("class", (d, i, j) => {
        const id = $(j)
          .parent()
          .attr("data-id");
        return `dot_${id} ` + `dot`;
      })
      .attr("stroke", d => d3.rgb(d.color).darker(1))
      .attr("stroke-width", "1")
      .attr("stroke-opacity", "0")
      .transition()
      .delay(500)
      .duration(1000)
      .style("opacity", 1);
    animateFauxDOM(3000);
    // -----------------------------------------------------------------------------
    // LEGEND
    // -----------------------------------------------------------------------------

    const w = d3.select(faux).selectAll(".legend");
    w.remove();
    const legend = d3
      .select(faux)
      .selectAll(".legend")
      .data(data)
      .enter()
      .append("g")
      .attr("class", "legend")
      .attr("transform", (d, i) => `translate(${0},${i * 20})`);

    // Legend text explaining the symbols
    legend
      .append("text")
      .attr("x", width + margin.right)
      .attr("y", function(d, i) {
        return margin.top * 2 + 20 * i;
      })
      .attr("id", function(d) {
        return `legend_${d.id}`;
      })
      .attr("class", "legend")
      .style("opacity", 1)
      .style("cursor", "pointer")
      .attr("dy", ".35em")
      .attr("font-size", 17)
      .attr("fill", function(d) {
        return d.color;
      })
      .style("text-anchor", "end")
      .text(function(d) {
        return d.name;
      })
      .on("click", function(d) {
        highlightLine(d.id);
        selectSeries(d.id);
      });
    d3.select(faux)
      .select("#title")
      .text(() => {
        return kpis[index] ? kpis[index].name : "";
      });

    d3.select(faux)
      .select("#y_unit")
      .text(() => (kpis[index] ? kpis[index].unit || "" : ""));
    d3.select(faux)
      .select("#plotArea")
      .selectAll("#curtain")
      .remove();

    d3.select(faux)
      .select("#plotArea")
      .append("rect")
      .attr("id", "curtain")
      .style("fill", "#ffffff")
      .attr("x", 0)
      .attr("width", width)
      .attr("height", height - margin.bottom)
      .transition()
      .delay(500)
      .ease(d3.easeExp)
      .duration(4000)
      .attr("x", width + 5);
    animateFauxDOM(9000);
  }
}

LineChart.defaultProps = {
  chart: "Loading",
  selectedKpi: null
};

export default withFauxDOM(LineChart);
