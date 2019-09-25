import React, { Component } from "react";
import propTypes from "prop-types";

import LoadingScreen from "../layout/LoadingScreen";
class Carousel extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { images } = this.props;
    return (
      <div
        id="demo"
        className="carousel slide ml-auto mr-auto"
        data-ride="carousel"
      >
        <ul className="carousel-indicators">
          {images.map((image, i) => {
            return (
              <li
                data-target="#demo"
                className={i === 0 ? "active" : ""}
                data-slide-to={i}
              ></li>
            );
          })}
        </ul>

        <div className="carousel-inner">
          {images.map((image, i) => {
            return (
              <div className={`carousel-item ${i === 0 ? "active" : ""}`}>
                <img
                  style={{ maxHeight: "300px", maxWidth: "1500px" }}
                  src={image.image}
                  alt
                />
              </div>
            );
          })}
        </div>

        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
    );
  }
}

Carousel.propTypes = {
  images: propTypes.array.isRequired
};
export default Carousel;
