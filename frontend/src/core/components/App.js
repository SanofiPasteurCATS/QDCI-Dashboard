//DEPENDANCIES
import React, { Component, Fragment } from "react";
import "core-js";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Provider as AlertProvider, positions } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { Provider } from "react-redux";

// SCENES
import Login from "../../scenes/portal/scenes/login";
import Register from "../../scenes/portal/scenes/register";
import BoardRoom from "../../scenes/boardRoom";
import PrivateRoute from "../components/utils/PrivateRoute";
import PillarRoom from "../../scenes/pillarRoom";
import Dashboard from "../../scenes/home";

// COMPONENTS
import { loadUser } from "../actions/auth";
import Header from "./layout/Header";
import Alerts from "./layout/Alerts";
import store from "../../store";

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
                <PrivateRoute path="/boardroom/:id" component={BoardRoom} />
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
