import React from "react";
import { accent_color } from "../../config/styleConfig";

const DashboardCard = props => {
  const { dashboard, selection, handleClick } = props;
  const highlighted =
    selection == dashboard.id
      ? { border: "2px" + " solid " + accent_color }
      : { border: "1px solid rgba(0,0,0,.125)" };

  const onClick = () => {
    handleClick(dashboard.id);
  };

  return (
    <div className="card m-3" onClick={onClick} style={highlighted}>
      <div className="card-body">
        <h5 className="card-title">{dashboard.title}</h5>
        <p className="card-text">
          Author: {dashboard.author}
          <br />
          Level: {dashboard.level}
        </p>
      </div>
    </div>
  );
};

export default DashboardCard;
