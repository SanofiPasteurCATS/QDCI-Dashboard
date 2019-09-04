// DEPENDANCIES
import React, { Fragment } from "react";

const NewCard = props => {
  const { handleClick, text } = props;
  return (
    <div className="card m-3 text-center icon" onClick={handleClick}>
      <div className="card-body" style={{ paddingBottom: "-1rem !important" }}>
        <div className="d-flex h-100 w-100">
          <div className="m-auto">
            <i className=" im im-plus" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCard;
