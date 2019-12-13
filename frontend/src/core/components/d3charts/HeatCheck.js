import React, { Component } from "react";
import * as d3 from "d3";
import { withFauxDOM } from "react-faux-dom";
import PropTypes from "prop-types";

const width = 400;
const height = 130;

class HeatCheck extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.renderD3();
    this.updateD3();
  }

  componentDidUpdate(prevProps) {
    const { heat } = this.props;
    if (prevProps.heat != heat) {
      this.updateD3();
    }
  }

  render() {
    const { chart } = this.props;
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "15px"
        }}
      >
        {chart}
      </div>
    );
  }

  renderD3() {
    const { connectFauxDOM } = this.props;
    const faux = connectFauxDOM("svg", "chart");
    const chart = d3.select(faux);

    chart
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("height", height)
      .attr("width", width)
      .attr("preserveAspectRatio", "xMidYMid meet")
      .classed("svg-content", true)
      .attr("xmlns", "http://www.w3.org/2000/svg")
      .attr("xmlnsXlink", "http://www.w3.org/1999/xlink");
  }

  updateD3() {
    const { connectFauxDOM, animateFauxDOM, heat, onClick } = this.props;
    const faux = connectFauxDOM("svg", "chart");
    var chart = d3.select(faux);
    if (!heat) return;
    // Scale used to size the heat range circles
    const heatValues = heat.map(h => {
      return h.value;
    });
    var radiusScale = d3
      .scaleLinear()
      .domain([d3.min(heatValues), d3.max(heatValues)])
      .range([30, 50]);

    // Creates the text fields inside the circles which will display the heat number
    var texts = chart.selectAll("text");
    var textsData = texts.data(heat);
    var text = textsData
      .enter()
      .append("text")
      .merge(texts)
      .style("font-size", "24px")
      .style("font-weight", "bold")
      .attr("dx", function(d, i) {
        return 75 + 120 * i + d.value.toString().length * -9;
      })
      .attr("dy", function(d, i) {
        return 76;
      })
      .style("opacity", 1)
      .text(function(d) {
        return `${d.value}`;
      });

    var circles = chart.selectAll("circle");

    // DATA BIND
    var circlesData = circles.data(heat);

    // ENTER SECLECTION
    var circleEnter = circlesData
      .enter()
      .append("circle")
      .attr("r", 0)
      .merge(circles)
      .attr("cy", 70)
      .attr("cx", function(d, i) {
        return 75 + 120 * i;
      })
      .style("opacity", 0.6)
      .on("click", function(d) {
        let newHeat = { ...d };
        newHeat.value += 1;
        onClick(newHeat, newHeat.id);
      })
      .transition()
      .duration(500)
      .attr("r", function(d) {
        return radiusScale(parseInt(d.value));
      })
      .transition()
      .duration(500)
      .style("fill", function(d) {
        return d.color;
      });
    animateFauxDOM(2500);
  }
}

HeatCheck.defaultProps = {
  chart: "Loading"
};

export default withFauxDOM(HeatCheck);
