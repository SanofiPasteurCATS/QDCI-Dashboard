// DEPENDANCIES
import React from "react";
import CircleLoader from "react-spinners/CircleLoader";
import { css } from "@emotion/core";

// CONFIG
import { accentColor } from "../../config/styleConfig";

const override = css`
  display: flex;
  margin: 0 auto 20px auto;
  justify-content: center;
  align-items: center;
`;

export default function() {
  return (
    <div className="col-md-6 m-auto">
      <div className="card text-center mt-5">
        <div className="card card-body">
          <CircleLoader
            sizeUnit="px"
            size={60}
            css={override}
            color={accentColor}
          />
          <h1 style={{ margin: 0 }}>Loading</h1>
        </div>
      </div>
    </div>
  );
}
