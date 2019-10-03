import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteImage } from "../../../core/actions/dashboards";
class ImageList extends Component {
  state = {
    deleteMode: false
  };

  onToggleDeleteMode = () => {
    this.setState({ deleteMode: !this.state.deleteMode });
  };

  onDelete = id => {
    const { deleteImage } = this.props;

    deleteImage(id);
    this.setState({ deleteMode: !this.state.deleteMode });
  };

  render() {
    const { images } = this.props;
    const { deleteMode } = this.state;
    if (!images) return <></>;
    if (!images.length) return <></>;
    return (
      <>
        <label htmlFor="image" style={{ marginBottom: "-20px" }}>
          Infographics
        </label>
        <div className="container">
          <div className="container--fluid">
            {images.map(image => (
              <>
                <div class="image-container">
                  <img className="image" src={image.image}></img>
                  {deleteMode && (
                    <i
                      class="image-delete im im-x-mark"
                      onClick={e => this.onDelete(image.id)}
                    ></i>
                  )}
                </div>
              </>
            ))}
          </div>
        </div>
        {!deleteMode && (
          <button
            onClick={this.onToggleDeleteMode}
            type="button"
            className={`btn ${
              deleteMode ? "btn-success" : "btn-danger"
            } btn-sm mt-3`}
          >
            {deleteMode ? "Done" : "Delete Mode"}
          </button>
        )}
      </>
    );
  }
}

export default connect(
  null,
  { deleteImage }
)(ImageList);
