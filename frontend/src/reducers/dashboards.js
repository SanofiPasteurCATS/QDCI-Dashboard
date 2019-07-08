import {
  GET_DASHBOARDS,
  DELETE_DASHBOARD,
  ADD_DASHBOARD,
  GET_KPIS
} from "../actions/types.js";

const initalState = {
  dashboards: [],
  kpis: []
};

export default function(state = initalState, action) {
  switch (action.type) {
    case GET_DASHBOARDS:
      return {
        ...state,
        dashboards: action.payload
      };
    case DELETE_DASHBOARD:
      return {
        ...state,
        dashboards: state.dashboards.filter(
          dashboard => dashboard.id !== action.payload
        )
      };
    default:
      return state;
    case ADD_DASHBOARD:
      return {
        ...state,
        dashboards: [...state.dashboards, action.payload]
      };
    case GET_KPIS:
      return {
        ...state,
        kpis: action.payload
      };
  }
}
