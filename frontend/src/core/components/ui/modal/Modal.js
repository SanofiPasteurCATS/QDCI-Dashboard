// DEPENDANCIES
import React, { Component, Fragment } from "react";

class Modal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, iconClass, id, children } = this.props;

    return (
      <Fragment>
        <div
          className="modal fade"
          id={id}
          role="dialog"
          aria-labelledby={`${id}Label`}
          aria-hidden="true"
        >
          <div
            className="modal-dialog"
            role="document"
            style={{ maxWidth: "fit-content", overflow: "visible" }}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title" id={`${id}Label`}>
                  <span
                    className={iconClass}
                    style={{ fontSize: `${2.5}rem`, verticalAlign: "-0.1em" }}
                  />
                  {"  "}
                  {title}
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
                  <div className="card-body">{children}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Modal;
