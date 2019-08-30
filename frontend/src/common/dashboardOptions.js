// Options for form-controls. This is a temp solution until I can pull the data directly from the database

export const PLOT_TYPE_CHOICES = [{ id: "li", name: "Connected Scatter Plot" }];

export const DASHBOARD_TYPE_CHOICES = [
  {
    id: 0,
    name: "QDCI Dashboard"
  }
];

export const LEVEL_CHOICES = [
  {
    id: 1,
    name: "Level 1"
  },
  {
    id: 2,
    name: "Level 2"
  },
  {
    id: 3,
    name: "Level 3"
  },
  {
    id: 4,
    name: "Level 4"
  }
];

export const DATAPOINT_TABLE_HEADERS = [
  {
    name: "Value",
    prop: "value"
  },
  {
    name: "Target",
    prop: "target"
  },
  {
    name: "Date",
    prop: "date"
  }
];

export const PILLAR_CHOICES = [
  { id: "+", name: "Safety" },
  { id: "Q", name: "Quality" },
  { id: "D", name: "Delivery" },
  { id: "C", name: "Cost" },
  { id: "I", name: "Involvement" }
];
export const FREQUENCY_CHOICES = [
  { id: 0, name: "Monthly" },
  { id: 1, name: "Weekly" },
  { id: 2, name: "Bi-Weekly" }
];
export const KPI_TABLE_HEADERS = [
  {
    name: "Name",
    prop: "name"
  },
  {
    name: "Pillar",
    prop: "pillar"
  },
  {
    name: "Frequency",
    prop: "frequency"
  },
  {
    name: "Safe Threshold",
    prop: "safe"
  },
  {
    name: "Danger Threshold",
    prop: "danger"
  }
];

export const SERIES_TABLE_HEADERS = [
  {
    name: "Name",
    prop: "name"
  },
  {
    name: "Plot Type",
    prop: "plot_type"
  },
  {
    name: "Color",
    prop: "color"
  }
];

export const DEFAULT_ACTION_TABLES = [
  "Short Term Action Plan",
  "Mid Term Action Plan",
  "Upper Level Escalations",
  "Lower Level Escalations"
];

export const ACTION_TABLE_HEADERS = [
  {
    name: "Letter",
    prop: "letter"
  },
  {
    name: "Problem",
    prop: "problem"
  },
  {
    name: "Root Cause",
    prop: "root_cause"
  },
  {
    name: "Solution",
    prop: "solution"
  },
  {
    name: "Leader",
    prop: "leader"
  },
  {
    name: "Date",
    prop: "date",
    date: true
  }
];

export const ACTION_TABLE_DUMMY_DATA = [
  {
    letter: "Q",
    problem: "not enough sleep",
    root_cause: "Insomnia",
    solution: "take sleeping pills",
    leader: "Kyle",
    date: "24-OCT-2019"
  },
  {
    letter: "Q",
    problem: "Not enough coffee",
    root_cause: "coffe machine is broken",
    solution: "fix coffee machine",
    leader: "Kyle",
    date: "08-AUG-2019"
  },
  {
    letter: "I",
    problem: "Not enough GEMBAS",
    root_cause: "No legs",
    solution: "Get legs",
    leader: "Kyle",
    date: "03-SEP-2019"
  }
];