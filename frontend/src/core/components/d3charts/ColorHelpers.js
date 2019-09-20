import {
  KPI_TYPE_DEVIATION,
  KPI_TYPE_WIN_LOSE,
  KPI_TYPE_THRESHOLD,
  THRESHOLD_TYPE_GREATER,
  THRESHOLD_TYPE_LESS
} from "../../config/dashboardConfig";

export const getColor = ({
  safe_deviation,
  danger_deviation,
  kpi_type,
  warning_margin,
  threshold_type,
  isPercentage,
  value,
  target
}) => {
  let color = "#F2F2F2";
  const deviation = (value / target - 1) * 100;
  const abs_deviation = Math.abs(deviation);
  if (value == null) return color;
  switch (kpi_type) {
    case KPI_TYPE_DEVIATION:
      if (abs_deviation < safe_deviation) color = "green";
      else if (
        abs_deviation > safe_deviation &&
        abs_deviation < danger_deviation
      )
        color = "orange";
      else color = "red";
      break;

    case KPI_TYPE_THRESHOLD:
      if (!isPercentage)
        return getAbsoluteColor(target, value, warning_margin, threshold_type);
      switch (threshold_type) {
        case THRESHOLD_TYPE_GREATER:
          if (value >= target) color = "green";
          else if (deviation < warning_margin) color = "red";
          else color = "orange";
          break;
        case THRESHOLD_TYPE_LESS:
          if (value <= target) color = "green";
          else if (deviation > warning_margin) color = "red";
          else color = "orange";
          break;
      }
      break;

    case KPI_TYPE_WIN_LOSE:
      switch (threshold_type) {
        case THRESHOLD_TYPE_GREATER:
          if (value >= target) color = "green";
          else color = "red";
          break;
        case THRESHOLD_TYPE_LESS:
          if (value <= target) color = "green";
          else color = "red";
          break;
      }
  }
  return color;
};

const getAbsoluteColor = (target, value, warning_margin, threshold_type) => {
  let color = "#F2F2F2";
  switch (threshold_type) {
    case THRESHOLD_TYPE_GREATER:
      if (value >= target) color = "green";
      else if (value < target && value >= warning_margin) color = "orange";
      else color = "red";
      break;
    case THRESHOLD_TYPE_LESS:
      if (value <= target) color = "green";
      else if (value > target && value <= warning_margin) color = "orange";
      else color = "red";
      break;
  }
  return color;
};
