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
          },
          toolbar: {
            tools: {
              download: true,
              customIcons: [
                {
                  icon: '<i class="fas fa-tag chart-icon"></i>',
                  index: -1,
                  title: "Toggle data labels",
                  click: this.toggleLabels
                }
              ]
            }
          }
        },
        markers: {
          size: 5,
          colors: undefined,
          strokeColors: "#fff",
          strokeWidth: 2,
          strokeOpacity: 0.9,
          strokeDashArray: 0,
          fillOpacity: 1,
          discrete: [],
          shape: "circle",
          radius: 5,
          offsetX: 0,
          offsetY: 0,
          onClick: undefined,
          onDblClick: undefined,
          hover: {
            size: 7,
            sizeOffset: 3
          }
        },
        colors: props.colors,
        dataLabels: {
          enabled: true,
          formatter: function(val, opts) {
            return val;
          }
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

  toggleLabels = () => {
    this.setState({
      options: {
        ...this.state.options,
        dataLabels: {
          ...this.state.options.dataLabels,
          enabled: !this.state.options.dataLabels.enabled
        }
      }
    });
  };
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
    const options = { ...this.state.options };

    const formatter = (unit => val => {
      return `${val} ${unit}`;
    })("$");

    options.dataLabels.formatter = formatter;

    options.colors = colors;

    if (series !== prevProps.series) {
      this.setState({
        series: series,
        options: options
      });
    }
  }

  render() {
    const { type } = this.props;
    return (
      <ReactApexChart
        options={this.state.options}
        series={this.state.series}
        type={type}
        height="95%"
      />
    );
  }
}

export default Chart;
