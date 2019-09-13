import {
  GET_DASHBOARDS,
  DELETE_DASHBOARD,
  ADD_DASHBOARD,
  GET_KPIS,
  ADD_KPI,
  DELETE_KPI,
  GET_A_DASHBOARD,
  UPDATE_KPI,
  ADD_SERIES,
  CLEAR_KPIS,
  GET_SERIES,
  UPDATE_DATAPOINT,
  UPDATE_SERIES,
  DELETE_DATAPOINT,
  DELETE_SERIES,
  ADD_DATAPOINT,
  ADD_ACTION,
  GET_ACTION_TABLE,
  DELETE_ACTION,
  UPDATE_ACTION,
  UPDATE_ACTION_TABLE,
  CLEAR_CURRENT_DASHBOARD,
  CLEAR_ACTION_TABLES
} from "../actions/types";

const initalState = {
  dashboards: [],
  kpis: [],
  currentDashboard: null,
  actionTables: []
};

export default function(state = initalState, action) {
  switch (action.type) {
    case GET_A_DASHBOARD:
      return {
        ...state,
        currentDashboard: action.payload
      };
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
    case ADD_KPI:
      return {
        ...state,
        kpis: [...state.kpis, action.payload]
      };
    case UPDATE_KPI:
      return {
        ...state,
        kpis: state.kpis.map(kpi =>
          kpi.id === action.payload.id ? action.payload : kpi
        )
      };
    case DELETE_KPI:
      return {
        ...state,
        kpis: state.kpis.filter(kpi => kpi.id !== action.payload)
      };
    case CLEAR_KPIS:
      return {
        ...state,
        kpis: []
      };
    case ADD_SERIES:
      console.log("added");
      var kpis = state.kpis.map(kpi => {
        if (kpi.id != action.payload.kpi) return kpi;
        const { series } = kpi;
        return {
          ...kpi,
          series: [...series, action.payload]
        };
      });
      return {
        ...state,
        kpis
      };

    case UPDATE_SERIES:
      var kpis__ = state.kpis.map(kpi => {
        return {
          ...kpi,
          series: kpi.series.map(series => {
            if (series.id != action.payload.id) return series;
            return action.payload;
          })
        };
      });
      return {
        ...state,
        kpis: kpis__
      };

    case GET_SERIES:
      return {
        ...state,
        series: action.payload
      };
    case DELETE_SERIES:
      var kpis_ = state.kpis.map(kpi => {
        return {
          ...kpi,
          series: kpi.series.filter(series => {
            return series.id != action.payload;
          })
        };
      });
      return {
        ...state,
        kpis: kpis_
      };
    case UPDATE_DATAPOINT:
      var kpis = state.kpis.map(kpi => {
        return {
          ...kpi,
          series: kpi.series.map(series => {
            if (series.id != action.payload.series) return series;
            return {
              ...series,
              entries: series.entries.map(datapoint => {
                if (datapoint.id != action.payload.id) return datapoint;
                return action.payload;
              })
            };
          })
        };
      });
      return {
        ...state,
        kpis
      };
    case DELETE_DATAPOINT:
      var kpis = state.kpis.map(kpi => {
        return {
          ...kpi,
          series: kpi.series.map(series => {
            return {
              ...series,
              entries: series.entries.filter(datapoint => {
                return datapoint != action.payload;
              })
            };
          })
        };
      });
      return {
        ...state,
        kpis
      };

    case ADD_DATAPOINT:
      var kpis___ = state.kpis.map(kpi => {
        return {
          ...kpi,
          series: kpi.series.map(series => {
            if (series.id != action.payload.series) return series;
            return {
              ...series,
              entries: [...series.entries, action.payload]
            };
          })
        };
      });
      return {
        ...state,
        kpis: kpis___
      };
    case GET_ACTION_TABLE:
      return { ...state, actionTables: action.payload };

    case ADD_ACTION:
      var actionTables = state.actionTables.map(at => {
        if (action.payload.tables.indexOf(at.id) == -1) return at;
        return {
          ...at,
          actions: [...at.actions, action.payload]
        };
      });
      return {
        ...state,
        actionTables
      };
    case DELETE_ACTION:
      var actionTables = state.actionTables.map(at => {
        return {
          ...at,
          actions: at.actions.filter(act => {
            return act.id != action.payload;
          })
        };
      });
      return {
        ...state,
        actionTables
      };
    case UPDATE_ACTION:
      var actionTables = state.actionTables.map(at => {
        return {
          ...at,
          actions: at.actions.map(act => {
            if (act.id != action.payload.id) return act;
            return action.payload;
          })
        };
      });
      return {
        ...state,
        actionTables
      };
    case UPDATE_ACTION_TABLE:
      var actionTables = state.actionTables.map(at => {
        if (at.id != action.payload.id) return at;
        return action.payload;
      });
      return {
        ...state,
        actionTables
      };
    case CLEAR_CURRENT_DASHBOARD:
      return {
        ...state,
        actionTables: []
      };

    case CLEAR_ACTION_TABLES:
      return {
        ...state,
        currentDashboard: null
      };
    default:
      return state;
  }
}
