import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";
import {
  GET_DASHBOARDS,
  DELETE_DASHBOARD,
  ADD_DASHBOARD,
  GET_KPIS,
  ADD_KPI,
  UPDATE_KPI,
  DELETE_KPI,
  GET_A_DASHBOARD,
  ADD_SERIES,
  CLEAR_KPIS,
  GET_SERIES,
  UPDATE_SERIES,
  DELETE_SERIES,
  UPDATE_DATAPOINT,
  DELETE_DATAPOINT,
  ADD_DATAPOINT,
  ADD_ACTION,
  GET_ACTION_TABLE,
  UPDATE_ACTION,
  DELETE_ACTION,
  UPDATE_ACTION_TABLE,
  CLEAR_ACTION_TABLES,
  CLEAR_CURRENT_DASHBOARD
} from "./types";

/*---------------------------------------
          DASHBOARD ACTIONS
-----------------------------------------*/
export const getDashboards = () => (dispatch, getState) => {
  // Send request to server
  axios
    .get("/api/dashboards/", tokenConfig(getState))
    .then(res => {
      /* Dispatch action to reducer once data is retrieved from server
        Payload is an array of all dashboards belonging to the user */
      dispatch({
        type: GET_DASHBOARDS,
        payload: res.data
      });
    })

    // If there is an error, dispatch a error message to reducer
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE DASHBOARD
export const deleteDashboard = id => (dispatch, getState) => {
  // Send request to server
  axios
    .delete(`/api/dashboards/${id}/`, tokenConfig(getState))
    .then(() => {
      // Dispatch a message action which notifies user of success
      dispatch(createMessage({ deleteDashboard: "Dashboard Deleted!" }));
      /* Dispatch delete action to reducer. Payload is the id of the deleted dashboard.
        This way the reducer can run a filter on the dashboards in the store state */
      dispatch({
        type: DELETE_DASHBOARD,
        payload: id
      });
    })
    // If there is an error, dispatch a error message to reducer
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const getADashboard = id => (dispatch, getState) => {
  // Send request to server
  axios
    .get(`api/dashboards/${id}/`, tokenConfig(getState))
    .then(res => {
      // Dispatch the action to reducer. Payload is the dashboard object
      dispatch({
        type: GET_A_DASHBOARD,
        payload: res.data
      });
    })
    // If there is an error, dispatch a error message to reducer
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
// ADD DASHBOARD

export const addDashboard = dashboard => (dispatch, getState) => {
  // Send request to server
  axios
    .post("/api/dashboards/", dashboard, tokenConfig(getState))
    .then(res => {
      // Dispatch a message action which notifies user of success
      dispatch(createMessage({ addDashboard: "Dashboard Added!" }));
      // Dispatch the action to reducer. Payload is the dashboard which was added
      dispatch({
        type: ADD_DASHBOARD,
        payload: res.data
      });
    })
    // If there is an error, dispatch a error message to reducer
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

/*---------------------------------------
             KPI ACTIONS
-----------------------------------------*/

export const getKpis = (id, pillar = "") => (dispatch, getState) => {
  // Send request to server
  const endpoint = pillar
    ? `/api/kpis/?dashboard=${id}&pillar=${pillar}`
    : `/api/kpis/?dashboard=${id}`;
  axios
    .get(endpoint, tokenConfig(getState))
    .then(res => {
      // Dispatch get action to reducer. Payload is a list of all KPIs for the given dashboard
      dispatch({
        type: GET_KPIS,
        payload: res.data
      });
    })
    // If there is an error, dispatch a error message to reducer
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addKpi = kpi => (dispatch, getState) => {
  // Send request to server
  axios
    .post("/api/kpis/", kpi, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ addKpi: "KPI Added!" }));
      dispatch({
        type: ADD_KPI,
        payload: res.data
      });
    })
    // If there is an error, dispatch a error message to reducer
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const updateKpi = (kpi, id) => (dispatch, getState) => {
  // Send request to server
  axios.patch(`/api/kpis/${id}/`, kpi, tokenConfig(getState)).then(res => {
    // Message informing user of success
    dispatch(createMessage({ updateKpi: "KPI Updated!" }));
    // Send action to reducer. Payload is the object representing updated KPI
    dispatch({
      type: UPDATE_KPI,
      payload: res.data
    });
  });
};

export const deleteKpi = id => (dispatch, getState) => {
  // Send request to server
  axios
    // Payload is id for filtering the store state
    .delete(`/api/kpis/${id}/`, tokenConfig(getState))
    .then(() => {
      dispatch(createMessage({ deleteKpi: "KPI deleted" }));
      dispatch({
        type: DELETE_KPI,
        payload: id
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const clearKpis = () => dispatch => {
  dispatch({ type: CLEAR_KPIS });
};

/*---------------------------------------
             SERIES ACTIONS
-----------------------------------------*/
export const addSeries = series => (dispatch, getState) => {
  // Send request to server
  axios.post("/api/series/", series, tokenConfig(getState)).then(res => {
    dispatch(createMessage({ addSeries: "Series Added!" }));
    dispatch({
      type: ADD_SERIES,
      payload: res.data
    });
  });
};

export const getSeries = (id, kpi = "") => (dispatch, getState) => {
  // Send request to server
  const endpoint = kpi ? `/api/series/${id}/${kpi}` : `/api/series/${id}`;
  axios.get(endpoint, tokenConfig(getState)).then(res => {
    dispatch({
      type: GET_SERIES,
      payload: res.data
    });
  });
};

export const updateSeries = (series, id) => (dispatch, getState) => {
  axios.patch(`/api/series/${id}/`, series, tokenConfig(getState)).then(res => {
    dispatch(createMessage({ updateSeries: "Series Updated" }));
    dispatch({
      type: UPDATE_SERIES,
      payload: res.data
    });
  });
};

export const deleteSeries = id => (dispatch, getState) => {
  axios.delete(`/api/series/${id}/`, tokenConfig(getState)).then(() => {
    dispatch(createMessage({ deleteSeries: "Series Deleted" }));
    dispatch({
      type: DELETE_SERIES,
      payload: id
    });
  });
};

export const updateDatapoint = (datapoint, id) => (dispatch, getState) => {
  axios
    .patch(`/api/datapoint/${id}/`, datapoint, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ updateDatapoint: "Datapoint Updated" }));
      dispatch({
        type: UPDATE_DATAPOINT,
        payload: res.data
      });
    });
};

export const deleteDatapoint = id => (dispatch, getState) => {
  axios.delete(`/api/datapoint/${id}/`, tokenConfig(getState)).then(() => {
    dispatch(createMessage({ deleteDatapoint: "Series Datapoint" }));
    dispatch({
      type: DELETE_DATAPOINT,
      payload: id
    });
  });
};

export const addDatapoint = datapoint => (dispatch, getState) => {
  axios.post(`/api/datapoint/`, datapoint, tokenConfig(getState)).then(res => {
    dispatch(createMessage({ addDatapoint: "Datapoint Added" }));
    dispatch({
      type: ADD_DATAPOINT,
      payload: res.data
    });
  });
};

export const addAction = action => (dispatch, getState) => {
  axios.post("/api/action/", action, tokenConfig(getState)).then(res => {
    dispatch(createMessage({ addAction: "Action Added" }));
    dispatch({
      type: ADD_ACTION,
      payload: res.data
    });
  });
};

export const getActionTable = (dashboard = null) => (dispatch, getState) => {
  const endpoint = dashboard
    ? `/api/actionTable/?dashboard=${dashboard}`
    : `/api/actionTable/`;
  axios.get(endpoint, tokenConfig(getState)).then(res => {
    dispatch({
      type: GET_ACTION_TABLE,
      payload: res.data
    });
  });
};

export const deleteAction = id => (dispatch, getState) => {
  axios.delete(`api/action/${id}/`, tokenConfig(getState)).then(() => {
    dispatch({
      type: DELETE_ACTION,
      payload: id
    });
  });
};

export const updateAction = (action, id) => (dispatch, getState) => {
  axios
    .patch(`api/action/${id}/`, action, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: UPDATE_ACTION,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const updateActionTable = (actionTable, id, parent) => (
  dispatch,
  getState
) => {
  axios
    .patch(
      `api/actionTable/${id}/?parent=${parent || "null"}`,
      actionTable,
      tokenConfig(getState)
    )
    .then(res => {
      dispatch(createMessage({ updateActionTable: "Connection Made" }));
      dispatch({
        type: UPDATE_ACTION_TABLE,
        payload: res.data
      });
    });
};

export const clearActionTables = () => dispatch => {
  dispatch({
    type: CLEAR_ACTION_TABLES
  });
};

export const clearCurrentDashboard = () => dispatch => {
  dispatch({
    type: CLEAR_CURRENT_DASHBOARD
  });
};
