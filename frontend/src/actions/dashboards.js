import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";
import {
  GET_DASHBOARDS,
  DELETE_DASHBOARD,
  ADD_DASHBOARD,
  GET_KPIS
} from "./types";

//GET DASHBOARDS
export const getDashboards = () => (dispatch, getState) => {
  axios
    .get("/api/dashboards/", tokenConfig(getState))
    .then(res => {
      // Dispatch get action to reducer and send all data to store
      dispatch({
        type: GET_DASHBOARDS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

//DELETE DASHBOARD
export const deleteDashboard = id => (dispatch, getState) => {
  axios
    .delete(`/api/dashboards/${id}/`, tokenConfig(getState))
    .then(res => {
      // Dispatch a message action which notifies user of success
      dispatch(createMessage({ deleteDashboard: "Dashboard Deleted!" }));
      // Dispatch delete action to reducer and send id to store
      dispatch({
        type: DELETE_DASHBOARD,
        payload: id
      });
    })
    // BACK CATCHER
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

//ADD DASHBOARD

export const addDashboard = dashboard => (dispatch, getState) => {
  axios
    .post(`/api/dashboards/`, dashboard, tokenConfig(getState))
    .then(res => {
      // Dispatch a message action which notifies user of success
      dispatch(createMessage({ addDashboard: "Dashboard Added!" }));
      // Dispatch add action to reducer and send all data to store
      dispatch({
        type: ADD_DASHBOARD,
        payload: res.data
      });
    })
    // BACK CATCHER
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const getKpis = id => (dispatch, getState) => {
  axios
    .get("/api/kpis/?dashboard=" + id, tokenConfig(getState))
    .then(res => {
      // Dispatch get action to reducer and send all data to store
      dispatch({
        type: GET_KPIS,
        payload: res.data
      });
    })
    // BACK CATCHER
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
