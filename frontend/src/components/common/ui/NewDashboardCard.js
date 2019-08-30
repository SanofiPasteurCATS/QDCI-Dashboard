import React, { Fragment } from "react";

const NewDashboardCard = props => {
  const { handleClick } = props;
  return (
    <div className="card m-3 text-center icon" onClick={handleClick}>
      <div className="card-body" style={{ paddingBottom: "-1rem !important" }}>
        <div className="d-flex h-100 w-100">
          <div className="m-auto">
            <i className=" mt-5 im im-plus" />
            <h4 className="mt-2 mb-5">New Dashboard</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewDashboardCard;
