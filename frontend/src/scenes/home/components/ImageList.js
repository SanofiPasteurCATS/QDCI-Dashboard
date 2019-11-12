// DEPENDANCIES
import React from "react";
import PropTypes from "prop-types";

// REDUX
import { connect } from "react-redux";
import { deleteImage } from "../../../core/actions/dashboards";
import { makeStyles } from "@material-ui/core/styles";

// MATERIAL-UI
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This costs memory but helps keeping high FPS.
    transform: "translateZ(0)"
  },
  title: {
    color: "#3F51B5"
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  },
  uploadFAB: {
    position: "absolute",
    bottom: "-27px",
    right: "100px",
    zIndex: "1000"
  }
}));

const ImageList = props => {
  const classes = useStyles();
  const { images, deleteImage } = props;

  if (!images) return <></>;
  if (!images.length) return <></>;
  return (
    <>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {images.map(tile => (
          <GridListTile key={tile.id} cols={tile.cols || 1}>
            <img src={tile.image} />
            <GridListTileBar
              title="image"
              classes={{
                root: classes.titleBar,
                title: classes.title
              }}
              actionIcon={
                <IconButton
                  aria-label={`star ${tile.id}`}
                  onClick={() => {
                    deleteImage(tile.id);
                  }}
                >
                  <DeleteForeverIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </>
  );
};

ImageList.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      image: PropTypes.string
    })
  ),
  deleteImage: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteImage }
)(ImageList);
