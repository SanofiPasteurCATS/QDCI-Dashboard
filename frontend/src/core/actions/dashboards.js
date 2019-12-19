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
  CLEAR_CURRENT_DASHBOARD,
  UPDATE_AUDIT,
  DELETE_AUDIT,
  ADD_AUDIT,
  GET_AUDITS,
  UPDATE_WIN,
  DELETE_WIN,
  ADD_WIN,
  GET_WINS,
  UPDATE_HEAT,
  GET_HEAT,
  UPDATE_DASHBOARD,
  ADD_IMAGE,
  DELETE_IMAGE
} from "./types";

/*---------------------------------------
          DASHBOARD ACTIONS
-----------------------------------------*/

// Thunk actions which consume and request the server's RestFUL API

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
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

export const updateDashboard = (dashboard, id) => (dispatch, getState) => {
  // Send request to server
  axios
    .patch(`/api/dashboards/${id}/`, dashboard, tokenConfig(getState))
    .then(res => {
      // Message informing user of success
      dispatch(createMessage({ updateDashboard: "Dashboard Updated!" }));
      // Send action to reducer. Payload is the object representing updated KPI
      dispatch({
        type: UPDATE_DASHBOARD,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch(createMessage({ invalidForm: "Form is invalid" }));
    });
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
    .catch(err => {
      dispatch(createMessage({ invalidForm: "Form is invalid" }));
      dispatch(returnErrors(err.response.data, err.response.status));
    });
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
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

export const addKpi = (kpi, year) => (dispatch, getState) => {
  // Send request to server
  axios
    .post(`/api/kpis/?year=${year}`, kpi, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ addKpi: "KPI Added!" }));
      dispatch({
        type: ADD_KPI,
        payload: res.data
      });
    })
    // If there is an error, dispatch a error message to reducer
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch(createMessage({ invalidForm: "Form is invalid" }));
    });
};

export const updateKpi = (kpi, id) => (dispatch, getState) => {
  // Send request to server
  axios
    .patch(`/api/kpis/${id}/`, kpi, tokenConfig(getState))
    .then(res => {
      // Message informing user of success
      dispatch(createMessage({ updateKpi: "KPI Updated!" }));
      // Send action to reducer. Payload is the object representing updated KPI
      dispatch({
        type: UPDATE_KPI,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch(createMessage({ invalidForm: "Form is invalid" }));
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
  axios
    .post("/api/series/", series, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ addSeries: "Series Added!" }));
      const entryCount = res.data.entries.length;
      dispatch(
        createMessage({
          entriesCreated: `${entryCount} Entries Created`
        })
      );
      dispatch({
        type: ADD_SERIES,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch(createMessage({ invalidForm: "Form is invalid" }));
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
  axios
    .patch(`/api/series/${id}/`, series, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ updateSeries: "Series Updated" }));
      dispatch({
        type: UPDATE_SERIES,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch(createMessage({ invalidForm: "Form is invalid" }));
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
  console.log(datapoint);
  axios
    .patch(`/api/datapoint/${id}/`, datapoint, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ updateDatapoint: "Datapoint Updated" }));
      dispatch({
        type: UPDATE_DATAPOINT,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch(createMessage({ invalidForm: "Form is invalid" }));
    });
};

export const deleteDatapoint = id => (dispatch, getState) => {
  axios.delete(`/api/datapoint/${id}/`, tokenConfig(getState)).then(() => {
    dispatch(createMessage({ deleteDatapoint: "Datapoint Deleted" }));
    dispatch({
      type: DELETE_DATAPOINT,
      payload: id
    });
  });
};

export const addDatapoint = datapoint => (dispatch, getState) => {
  axios
    .post(`/api/datapoint/`, datapoint, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ addDatapoint: "Datapoint Added" }));
      dispatch({
        type: ADD_DATAPOINT,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch(createMessage({ invalidForm: "Form is invalid" }));
    });
};

export const addAction = action => (dispatch, getState) => {
  axios
    .post("/api/action/", action, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ addAction: "Action Added" }));
      dispatch({
        type: ADD_ACTION,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch(createMessage({ invalidForm: "Form is invalid" }));
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
    dispatch(createMessage({ deleteAction: "Action Deleted" }));
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
      dispatch(createMessage({ updateAction: "Action Updated" }));
      dispatch({
        type: UPDATE_ACTION,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch(createMessage({ invalidForm: "Form is invalid" }));
    });
};

export const updateActionTable = (actionTable, id, parent, tableName) => (
  dispatch,
  getState
) => {
  axios
    .patch(
      `api/actionTable/${id}/?parent=${parent ||
        "null"}&tableName=${tableName || "null"}`,
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

export const getAudits = dashboardId => (dispatch, getState) => {
  axios
    .get(`api/audit/?dashboard=${dashboardId}`, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_AUDITS,
        payload: res.data
      });
    });
};

export const addAudit = audit => (dispatch, getState) => {
  axios
    .post(`api/audit/`, audit, tokenConfig(getState))
    .then(res => {
      // Dispatch a message action which notifies user of success
      dispatch(createMessage({ addAudit: "Audit Added!" }));
      // Dispatch the action to reducer. Payload is the dashboard which was added
      dispatch({
        type: ADD_AUDIT,
        payload: res.data
      });
    })
    // If there is an error, dispatch a error message to reducer
    .catch(err => {
      dispatch(createMessage({ invalidForm: "Form is invalid" }));
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

export const updateAudit = (audit, id) => (dispatch, getState) => {
  axios
    .patch(`/api/audit/${id}/`, audit, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ updateAudit: "Audit Updated" }));
      dispatch({
        type: UPDATE_AUDIT,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch(createMessage({ invalidForm: "Form is invalid" }));
    });
};

export const deleteAudit = id => (dispatch, getState) => {
  axios.delete(`/api/audit/${id}/`, tokenConfig(getState)).then(() => {
    dispatch(createMessage({ deleteAudit: "Audit Deleted" }));
    dispatch({
      type: DELETE_AUDIT,
      payload: id
    });
  });
};

export const getWins = dashboardId => (dispatch, getState) => {
  axios
    .get(`api/win/?dashboard=${dashboardId}`, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_WINS,
        payload: res.data
      });
    });
};

export const addWin = win => (dispatch, getState) => {
  axios
    .post(`api/win/`, win, tokenConfig(getState))
    .then(res => {
      // Dispatch a message action which notifies user of success
      dispatch(createMessage({ addWin: "Win Added!" }));
      // Dispatch the action to reducer. Payload is the dashboard which was added
      dispatch({
        type: ADD_WIN,
        payload: res.data
      });
    })
    // If there is an error, dispatch a error message to reducer
    .catch(err => {
      dispatch(createMessage({ invalidForm: "Form is invalid" }));
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

export const updateWin = (win, id) => (dispatch, getState) => {
  axios
    .patch(`/api/win/${id}/`, win, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ updateWin: "Win Updated" }));
      dispatch({
        type: UPDATE_WIN,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch(createMessage({ invalidForm: "Form is invalid" }));
    });
};

export const deleteWin = id => (dispatch, getState) => {
  axios.delete(`/api/win/${id}/`, tokenConfig(getState)).then(() => {
    dispatch(createMessage({ deleteWin: "Win Deleted" }));
    dispatch({
      type: DELETE_WIN,
      payload: id
    });
  });
};

export const updateHeat = (heat, id) => (dispatch, getState) => {
  axios
    .patch(`/api/heat/${id}/`, heat, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: UPDATE_HEAT,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch(createMessage({ invalidForm: "Form is invalid" }));
    });
};

export const getHeat = dashboardId => (dispatch, getState) => {
  axios
    .get(`api/heat/?dashboard=${dashboardId}`, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_HEAT,
        payload: res.data
      });
    });
};

export const addImage = image => (dispatch, getState) => {
  let formData = new FormData();
  formData.append("dashboard", JSON.stringify(image.dashboard));
  formData.append("image", image.image);
  axios
    .post(`api/image/`, formData, {
      headers: {
        ...tokenConfig(getState).headers,
        "Content-Type": "multipart/form-data"
      }
    })
    .then(res => {
      // Dispatch a message action which notifies user of success
      dispatch(createMessage({ addImage: "Image Added!" }));
      // Dispatch the action to reducer. Payload is the dashboard which was added
      dispatch({
        type: ADD_IMAGE,
        payload: res.data
      });
    })
    // If there is an error, dispatch a error message to reducer
    .catch(err => {
      dispatch(createMessage({ invalidForm: "Form is invalid" }));
      dispatch(returnErrors(err, err));
    });
};

export const deleteImage = id => (dispatch, getState) => {
  // Send request to server
  axios
    // Payload is id for filtering the store state
    .delete(`/api/image/${id}/`, tokenConfig(getState))
    .then(() => {
      dispatch(createMessage({ deleteImage: "Image deleted" }));
      dispatch({
        type: DELETE_IMAGE,
        payload: id
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
