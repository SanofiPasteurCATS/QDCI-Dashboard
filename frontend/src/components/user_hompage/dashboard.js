import React, { Fragment } from "react";
import List from "./List";
import Form from "./Form";

export default function Dashboard() {
  return (
    <div>
      <Fragment>
        <div className="container">
          <List />
          <Form />
        </div>
      </Fragment>
    </div>
  );
}
