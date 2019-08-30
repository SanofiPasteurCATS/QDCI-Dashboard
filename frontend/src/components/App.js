import React, { Component, Fragment } from "react";
import "core-js";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import { Provider as AlertProvider, positions } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { Provider } from "react-redux";
import Header from "./layout/Header";
import Dashboard from "./hompage/dashboard";
import Alerts from "./layout/Alerts";
import store from "../store";
import Login from "./accounts/login";
import Register from "./accounts/register";
import Boardroom from "./boardroom/boardroom";
import PrivateRoute from "./common/PrivateRoute";
import { loadUser } from "../actions/auth";
import PillarRoom from "./pillarRoom/PillarRoom";
// Alert Options
const alertOptions = {
  timeout: 3000,
  position: positions.TOP_CENTER,
  containerStyle: {
    zIndex: 5000
  }
};

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Header />
              <Alerts />
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/" component={Dashboard} />
                <PrivateRoute path="/boardroom/:id" component={Boardroom} />
                <PrivateRoute
                  path="/pillar/:dashboardId/:pillarId"
                  component={PillarRoom}
                />
              </Switch>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
