import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import LoadingScreen from "../../layout/LoadingScreen";

class SvgExporter extends Component {
  constructor(props) {
    super(props);
    this.export = this.export.bind(this);
    this.preview = this.preview.bind(this);
  }

  static propTypes = {
    target: PropTypes.string.isRequired
  };

  export() {
    const svgData = $(this.props.target)[0].outerHTML;
    const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const svgUrl = URL.createObjectURL(svgBlob);
    const downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = "kpi_chart.svg";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }

  preview() {
    const svgData = $(this.props.target)[0].outerHTML;
    const preview = document.createElement("div");
    preview.innerHTML = svgData;
    $("#preview").empty();
    $("#preview").append(preview);
  }

  render() {
    return (
      <Fragment>
        <div
          className="modal fade"
          id="svgExporter"
          role="dialog"
          aria-labelledby="svgExporterLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title" id="svgExporterLabel">
                  <span
                    className="im im-picture-o"
                    style={{ fontSize: `${2.5}rem`, verticalAlign: "-0.1em" }}
                  />
                  {"  "}
                  Export SVG
                </h1>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body" style={{ padding: 0 }}>
                <div className="card">
                  <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          data-toggle="tab"
                          href="#export"
                        >
                          Export
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#settings"
                        >
                          Settings
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <div
                      className="tab-content"
                      style={{
                        maxHeight: `${550}px`,
                        overflow: "auto",
                        overflowX: "auto"
                      }}
                    >
                      <div id="export" className="tab-pane fade show active">
                        <h5>Preview</h5>
                        <button
                          type="button"
                          onClick={this.preview}
                          className="btn btn-info"
                        >
                          Generate Preview
                        </button>
                        <div className="container" id="preview" />
                        <h5 className="card-title mt-4">Export Your SVG</h5>
                        <button
                          type="button"
                          className="btn btn-success"
                          onClick={this.export}
                        >
                          <span
                            className="im im-download"
                            style={{ fontSize: `${1}rem` }}
                          />
                          {"  "}
                          Export
                        </button>
                      </div>
                      <div id="settings" className="tab-pane fade">
                        <h5 className="card-title">WIP</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default SvgExporter;
