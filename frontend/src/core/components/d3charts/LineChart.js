// DEPENDACIES
import React from "react";
import * as d3 from "d3";
import { withFauxDOM } from "react-faux-dom";
import PropTypes from "prop-types";

// COMPONENTS
import { accentColor } from "../../config/styleConfig";

const margin = {
  top: 10,
  right: 100,
  bottom: 30,
  left: 50
};

const width = 1100 - margin.left - margin.right;
const height = 600 - margin.top - margin.bottom;

class LineChart extends React.Component {
  static propTypes = {
    kpis: PropTypes.array.isRequired,
    selectSeriesHook: PropTypes.func.isRequired,
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

  // Trigger D3 intial render()
  componentDidMount() {
    this.renderD3();
    this.updateD3();
  }

  // Triger D3 update()
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
    const { connectFauxDOM, selectSeriesHook } = this.props;
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
      .style("margin", "20px 0")
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
        selectSeriesHook(null);
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
      .text("$ CAD")
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
      .style("text-decoration", "underline")
      .style("font-size", "31px")
      .attr("fill", accentColor);
  }

  updateD3() {
    var x;
    const {
      connectFauxDOM,
      kpis,
      selectSeriesHook,
      animateFauxDOM,
      selectedKpi
    } = this.props;

    const faux = connectFauxDOM("svg", "chart");
    let index = kpis.findIndex(kpi => {
      return kpi.id == selectedKpi;
    });
    index = index == -1 ? 0 : index;
    const data = kpis[index] ? kpis[index].series : [];
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
    const xScale = d3
      .scaleTime()
      .domain([new Date("2019-01-01"), new Date("2019-12-31")])
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
      .transition()
      .duration(1000)
      .call(x_axis);

    // Update the Y_Axis
    d3.select(faux)
      .selectAll(".myYaxis")
      .transition()
      .duration(1000)
      .call(y_axis);

    // -----------------------------------------------------------------------------
    // LINES
    // -----------------------------------------------------------------------------

    const line = d3
      .line()
      .y(d => yScale(d.value))
      .defined(d => d.value)
      .x(d => xScale(parseTime(d.date)));

    const s = d3
      .select(faux)
      .select("#plotArea")
      .selectAll(".line");

    const sData = s.data(data);

    const sEnter = sData
      .enter()
      .append("path")
      .merge(s)
      .attr("d", d => line(d.entries))
      .style("opacity", 1)
      .attr("id", d => `line_${d.id}`)
      .attr("class", "line")
      .attr("fill", "none")
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
      /* .attr("class", function(d) {
        var color = "grey";
        var deviation = Math.abs(d.val / d.target - 1);
        if (d.val == null) return color;
        // Calculating color
        if (deviation < safe) color = "green";
        else if (deviation > safe && deviation < danger) color = "orange";
        else color = "red";
        return color;
      }) */
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
      .attr("x", width - 12)
      .attr("y", function(d, i) {
        return height / 2 + 20 * i;
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
        selectSeriesHook(d.id);
      });
    d3.select(faux)
      .select("#title")
      .text(() => {
        return kpis[index] ? kpis[index].name : "";
      });
    /*
    svg
      .select("#chart")
      .select("#y_unit")
      .text(context[i].units); */
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
