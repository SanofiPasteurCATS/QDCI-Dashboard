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
              customIcons: [
                {
                  icon: '<i class="fas fa-tag chart-icon"></i>',
                  index: 0,
                  title: "Toggle data labels",
                  click: this.toggleLabels
                },
                {
                  icon: `<i class="fas fa-bullseye chart-icon"></i>`,
                  index: 1,
                  title: "Toggle target series",
                  click: this.toggleTargets
                }
              ],
              download: true
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
          enabled: false,
          formatter: function(val, opts) {
            return val;
          }
        },
        stroke: {
          curve: "smooth",
          width: props.strokeWidths
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
        },
        plotOptions: {
          bar: {
            colors: {
              ranges: [
                {
                  from: -1 * Number.MAX_SAFE_INTEGER,
                  to: 0,
                  color: "#dc3545"
                }
              ]
            }
          }
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

  toggleTargets = () => {
    const { targets, colors } = this.props;
    const { series, options } = this.state;
    const newSeries = series.filter(s => s.name != "Targets");

    if (newSeries.length != series.length) {
      this.setState({
        series: newSeries
      });
      return;
    }
    this.setState({
      series: [...newSeries, targets],
      options: {
        ...options,
        colors: [...colors, "#007e00"]
      }
    });
  };

  componentDidUpdate(prevProps) {
    const { series, colors, unit, type, strokeWidths } = this.props;
    let plotOptions = {};
    const formatter = (unit => val => {
      return `${val} ${unit}`;
    })(unit);
    if (
      series !== prevProps.series ||
      unit != prevProps.unit ||
      colors != prevProps.colors
    ) {
      this.setState({
        series: series,
        options: {
          ...this.state.options,
          colors: colors,
          stroke: {
            width: strokeWidths
          },
          dataLabels: {
            ...this.state.options.dataLabels,
            formatter: formatter
          },
          plotOptions: plotOptions
        }
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
Chart.defaultProps = {
  unit: ""
};
export default Chart;
