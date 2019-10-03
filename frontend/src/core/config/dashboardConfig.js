// Configuration for table headers and form controls

/********************************************
 *
 * FORM CONTROL CHOICES
 *
 ********************************************/

export const PLOT_TYPE_CHOICES = [{ id: "li", name: "Connected Scatter Plot" }];

export const DASHBOARD_TYPE_CHOICES = [
  {
    id: 0,
    name: "QDCI Dashboard"
  }
];

export const KPI_TYPE_CHOICES = [
  {
    id: 0,
    name: "Deviation"
  },
  {
    id: 1,
    name: "Win-Lose"
  },
  {
    id: 2,
    name: "Threshold"
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

export const PILLAR_CHOICES = [
  { id: "Plus", name: "Safety" },
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

/********************************************
 *
 * TABLE HEADERS
 *
 ********************************************/

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

export const KPI_TABLE_HEADERS = [
  {
    name: "Name",
    prop: "name"
  },
  {
    name: "Pillar",
    prop: "pillar",
    map: function(pillar) {
      return PILLAR_CHOICES.filter(choice => choice.id === pillar)[0].name;
    }
  },
  {
    name: "Frequency",
    prop: "frequency",
    map: function(frequency) {
      return FREQUENCY_CHOICES[frequency].name;
    }
  },
  {
    name: "Type",
    prop: "kpi_type",
    map: function(kpi_type) {
      return KPI_TYPE_CHOICES[kpi_type].name;
    }
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

export const AUDIT_TABLE_HEADERS = [
  {
    name: "Description",
    prop: "description"
  },
  { name: "Start Date", prop: "start_date" },
  { name: "End Date", prop: "end_date" }
];

export const WIN_TABLE_HEADERS = [
  {
    name: "Description",
    prop: "description"
  },
  { name: "Participants", prop: "participants" },
  { name: "Date", prop: "date" }
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

/********************************************
 *
 * MISCELLANEOUS
 *
 ********************************************/

export const PILLAR_LABELS = [
  {
    date: "2019-01-01"
  },
  {
    date: "2019-02-01"
  },
  {
    date: "2019-03-01"
  },
  {
    date: "2019-04-01"
  },
  {
    date: "2019-05-01"
  },
  {
    date: "2019-06-01"
  },
  {
    date: "2019-07-01"
  },
  {
    date: "2019-08-01"
  },
  {
    date: "2019-09-01"
  },
  {
    date: "2019-10-01"
  },
  {
    date: "2019-11-01"
  },
  {
    date: "2019-12-01"
  }
];

export const DEFAULT_ACTION_TABLES = [
  "Short Term Action Plan",
  "Mid Term Action Plan",
  "Upper Level Escalations",
  "Lower Level Escalations"
];

export const THRESHOLD_TYPE_GREATER = 0;
export const THRESHOLD_TYPE_LESS = 1;

export const KPI_TYPE_DEVIATION = 0;
export const KPI_TYPE_WIN_LOSE = 1;
export const KPI_TYPE_THRESHOLD = 2;
