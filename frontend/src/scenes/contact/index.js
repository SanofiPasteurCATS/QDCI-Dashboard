import React from "react";

const Contact = props => {
  return (
    <div className="row justify-content-center m-0">
      <div className="col-lg-5 mt-5">
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">Contact</h1>
            <p className="card-text">
              <span className="im-user-male im mr-3"></span>
              Kyle Thatcher - Co-op Student
            </p>
            <p className="card-text">
              <span className="im im-mail mr-3"></span>kyle.thatcher@sanofi.com
            </p>
            <p className="card-text">
              Please contact for any and all bugs and issues encountered
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
