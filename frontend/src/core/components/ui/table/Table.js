// DEPENDACIES
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import ReactTooltip from "react-tooltip";

// COMPONENTS
import Row from "./Row";
import LoadingScreen from "../../layout/LoadingScreen";

class Table extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    header: PropTypes.array.isRequired,
    delete: PropTypes.func,
    update: PropTypes.func,
    editable: PropTypes.bool,
    insert: PropTypes.func,
    fontSize: PropTypes.string,
    summary: PropTypes.bool,
    tooltipMessage: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
    this.startEditing = this.startEditing.bind(this);
    this.stopEditingHook = this.stopEditingHook.bind(this);
    this.handleInsert = this.handleInsert.bind(this);
    this.state = {
      isLoading: true,
      editIdx: -1
    };
  }

  static generateUID = () => {
    return `_${Math.random()
      .toString(36)
      .substr(2, 9)}`;
  };

  id = this.constructor.generateUID();

  componentDidUpdate() {
    ReactTooltip.rebuild();
  }

  handleRemove = id => {
    const response = confirm(
      "Are you sure you want to delete this entry? \n All related data will be lost."
    );
    if (response) {
      this.setState({ editIdx: -1 });
      this.props.delete(id);
    }
  };

  startEditing = i => {
    this.setState({
      editIdx: i
    });
  };

  handleInsert = () => {
    this.props.insert();
  };

  stopEditingHook = (e, id, current) => {
    this.props.update(current, id);
    this.setState({ editIdx: -1 });
  };

  render() {
    const {
      data,
      header,
      editable,
      fontSize,
      summary,
      appendable,
      tooltipMessage,
      rowClick,
      deletable,
      formatRow
    } = this.props;
    if (!data) return <LoadingScreen />;
    return !data.length ? (
      <Fragment>
        <div className="d-flex flex-row justify-content-start mb-5">
          <p>Nothing to show</p>
          {appendable && (
            <i
              className="im im-plus co-primary icon d-flex ml-3 pb-1"
              style={{
                lineHeight: 1.5,
                verticalAlign: "middle",
                fontSize: `${1}rem`
              }}
              onClick={this.handleInsert}
            />
          )}
        </div>
      </Fragment>
    ) : (
      <Fragment>
        <div className="column">
          {summary && (
            <p className="d-inline" style={{ fontSize: "0.9rem" }}>
              Showing <strong>{data.length}</strong> items
            </p>
          )}
          {appendable && (
            <i
              className="im im-plus co-primary icon d-line ml-3 pb-1"
              style={{
                lineHeight: 1.5,
                verticalAlign: "middle",
                fontSize: `${1}rem`
              }}
              onClick={this.handleInsert}
            />
          )}
          <div className="table-responsive mt-3" style={{ fontSize }}>
            <table
              className="table is-striped table-sm"
              style={{ textAlign: "center" }}
            >
              <thead>
                <tr key="thr">
                  {header.map((x, i) => (
                    <th key={`thc-${i}`}>{x.name}</th>
                  ))}
                  {editable && <th>Edit</th>}
                  {editable && <th>Delete</th>}
                </tr>
              </thead>
              <tbody>
                {data.map((x, i) => {
                  const hover = null;
                  return (
                    <Fragment key={data[i].id}>
                      <Row
                        data={x}
                        i={i}
                        id={data[i].id}
                        header={header}
                        startEditing={this.startEditing}
                        editable={this.props.editable}
                        editIdx={this.state.editIdx}
                        stopEditingHook={this.stopEditingHook}
                        handleRemove={this.handleRemove}
                        hover={hover}
                        tableId={this.id}
                        rowClick={rowClick}
                        deletable={deletable}
                        formatRow={formatRow}
                      />
                    </Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        {tooltipMessage && (
          <ReactTooltip
            id={`global-${this.id}`}
            type="info"
            place="left"
            effect="solid"
            getContent={dataTip => {
              if (!dataTip) return;
              if (!data[dataTip]) return;
              if (tooltipMessage) return tooltipMessage(dataTip);
            }}
          />
        )}
      </Fragment>
    );
  }
}

Table.defaultProps = {
  editable: false,
  update: null,
  delete: null,
  fontSize: `${1}rem`,
  summary: true,
  deletable: false
};

export default Table;
