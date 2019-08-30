import { combineReducers } from "redux";
import dashboards from "./dashboards";
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";

export default combineReducers({
  dashboards,
  errors,
  messages,
  auth
});
