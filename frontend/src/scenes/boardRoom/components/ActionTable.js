import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

// MATERIAL-UI
import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import SettingsIcon from "@material-ui/icons/Settings";
import EditIcon from "@material-ui/icons/Edit";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import { getItem } from "../../../core/helpers/Filters";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === "desc"
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
}

function EnhancedTableHead(props) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
    tableMeta
  } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={numSelected === rowCount && rowCount != 0}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all" }}
          />
        </TableCell>
        {tableMeta.map((field, i) => (
          <TableCell
            key={field.name}
            align={field.numeric ? "right" : "left"}
            className={classes.tableHeadCell}
            sortDirection={orderBy === field.prop ? order : false}
          >
            <TableSortLabel
              active={orderBy === field.prop}
              direction={order}
              onClick={createSortHandler(field.prop)}
            >
              {field.name}
              {orderBy === field.prop ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell align="left">Status</TableCell>
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired
};

const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1)
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85)
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark
        },
  title: {
    flex: "1 1 100%"
  }
}));

const EnhancedTableToolbar = props => {
  const classes = useToolbarStyles();
  const {
    numSelected,
    title,
    onClickAdd,
    onClickDelete,
    onClickEdit,
    onManageClick,
    data
  } = props;

  const handleClickEdit = () => {
    const { onClickEdit, selected, data } = props;
    if (selected.length) onClickEdit(getItem(selected[0], data, "id"));
  };

  const handleClickDelete = () => {
    const { onClickDelete, selected, setSelected } = props;
    onClickDelete(selected);
    setSelected([]);
  };

  const handleClickEscalate = () => {
    const { onClickEscalate, selected, setSelected } = props;
    onClickEscalate(getItem(selected[0], data, "id"));
    setSelected([]);
  };

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0
      })}
    >
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle">
          {title}
        </Typography>
      )}

      {numSelected > 0 ? (
        <>
          {onClickDelete && numSelected === 1 && (
            <Tooltip title="Escalate">
              <IconButton onClick={handleClickEscalate} aria-label="delete">
                <ArrowUpwardIcon />
              </IconButton>
            </Tooltip>
          )}
          {onClickEdit && numSelected === 1 && (
            <Tooltip title="Edit">
              <IconButton onClick={handleClickEdit} aria-label="edit">
                <EditIcon />
              </IconButton>
            </Tooltip>
          )}
          {onClickDelete && (
            <Tooltip title="Delete">
              <IconButton onClick={handleClickDelete} aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          )}
        </>
      ) : (
        <>
          {onClickAdd && (
            <Tooltip title="Add entry">
              <IconButton aria-label="add" onClick={onClickAdd}>
                <AddIcon />
              </IconButton>
            </Tooltip>
          )}

          <Tooltip title="Manage Escaltions">
            <IconButton aria-label="manage escalations" onClick={onManageClick}>
              <SettingsIcon />
            </IconButton>
          </Tooltip>
        </>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired
};

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(1),
    maxWidth: "100%"
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2)
  },
  table: {
    maxWidth: "100%"
  },
  tableWrapper: {
    overflowX: "auto"
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1
  },
  tableCell: {
    fontSize: "0.6rem",
    paddingLeft: "5px",
    paddingRight: "5px"
  },
  tableHeadCell: {
    paddingLeft: "5px",
    paddingRight: "5px"
  }
}));

export default function EnhancedTable(props) {
  const {
    title,
    data,
    tableMeta,
    onClickAdd,
    onClickDelete,
    onClickEdit,
    onClickEscalate,
    onManageClick,
    currentDashboardId
  } = props;
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState(tableMeta[0].name);
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isDesc = orderBy === property && order === "desc";
    setOrder(isDesc ? "asc" : "desc");
    setOrderBy(property);
  };

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = data.map(entry => entry.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const setSelectedHook = newSelected => {
    setSelected(newSelected);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getStatus = entry => {
    if (!entry.tables) return "---";

    if (entry.tables.length > 1) {
      if (entry.source.dashboard.id != currentDashboardId)
        return (
          <Tooltip
            disableFocusListener
            disableTouchListener
            title={`Source - ${entry.source.dashboard.title}`}
          >
            <ArrowDownwardIcon />
          </Tooltip>
        );
      else
        return (
          <Tooltip
            disableFocusListener
            disableTouchListener
            title={`Escalated upward`}
          >
            <ArrowUpwardIcon />
          </Tooltip>
        );
    }
    return "---";
  };

  const isSelected = id => selected.indexOf(id) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <EnhancedTableToolbar
        title={title}
        numSelected={selected.length}
        onClickAdd={onClickAdd}
        onClickDelete={onClickDelete}
        onClickEdit={onClickEdit}
        selected={selected}
        onClickEscalate={onClickEscalate}
        onManageClick={onManageClick}
        setSelected={setSelectedHook}
        data={data}
      />
      <div className={classes.tableWrapper}>
        <Table
          className={classes.table}
          aria-labelledby="tableTitle"
          aria-label="enhanced table"
          size="small"
        >
          <EnhancedTableHead
            classes={classes}
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={data.length}
            tableMeta={tableMeta}
          />
          <TableBody>
            {stableSort(data, getSorting(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={event => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={`${row.id}-checkbox`}
                    selected={isItemSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isItemSelected}
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    </TableCell>
                    {tableMeta.map((field, index) => {
                      return (
                        <TableCell
                          align="left"
                          id={row.id}
                          key={`${index}-${row.id}`}
                          className={classes.tableCell}
                        >
                          {row[field.prop] === null ? "---" : row[field.prop]}
                        </TableCell>
                      );
                    })}
                    <TableCell align="left">{getStatus(row)}</TableCell>
                  </TableRow>
                );
              })}
            {emptyRows > 0 && (
              <TableRow style={{ height: 32.67 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          "aria-label": "previous page"
        }}
        nextIconButtonProps={{
          "aria-label": "next page"
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  );
}
