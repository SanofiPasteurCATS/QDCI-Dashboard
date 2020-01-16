import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: props.series,
      options: {
        chart: {
          animations: {
            enabled: true,
            easing: "easeinout",
            speed: 800,
            animateGradually: {
              enabled: false,
              delay: 150
            },
            dynamicAnimation: {
              enabled: true,
              speed: 350
            }
          },
          zoom: {
            enabled: false
          }
        },

        colors: props.colors,
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "smooth"
        },

        fill: {
          gradient: {
            enabled: true,
            opacityFrom: 0.6,
            opacityTo: 0.8
          }
        },
        legend: {
          position: "top",
          horizontalAlign: "left"
        },
        xaxis: {
          type: "datetime"
        }
      }
    };
  }

  generateDayWiseTimeSeries(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = baseval;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push([x, y]);
      baseval += 86400000;
      i++;
    }
    return series;
  }
  componentDidUpdate(prevProps) {
    const { series, colors } = this.props;
    if (series != prevProps.series) this.setState({ series: series });
    if (colors != prevProps.colors)
      this.setState({ options: { ...this.state.options, colors: colors } });
  }

  render() {
    const { type } = this.props;
    return (
      <ReactApexChart
        options={this.state.options}
        series={this.state.series}
        type={type}
        width="100%"
      />
    );
  }
}

export default Chart;
