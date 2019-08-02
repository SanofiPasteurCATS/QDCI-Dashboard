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
  ADD_DATAPOINT
} from "../actions/types";

const initalState = {
  dashboards: [],
  kpis: [],
  currentDashboard: null
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
      var kpis = state.kpis.map(kpi => {
        if (kpi.id != action.payload.kpi) return kpi;
        const series = kpi.series;
        return {
          ...kpi,
          series: [...series, action.payload]
        };
      });
      return {
        ...state,
        kpis: kpis
      };

    case UPDATE_SERIES:
      var kpis__ = state.kpis.map(kpi => {
        return {
          ...kpi,
          series: kpi.series.map(series => {
            if (series.id != action.payload.id) return series;
            else return action.payload;
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
                else return action.payload;
              })
            };
          })
        };
      });
      return {
        ...state,
        kpis: kpis
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
        kpis: kpis
      };

    case ADD_DATAPOINT:
      var kpis___ = state.kpis.map(kpi => {
        return {
          ...kpi,
          series: kpi.series.map(series => {
            if (series.id != action.payload.series) return series;
            else
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
    default:
      return state;
  }
}
