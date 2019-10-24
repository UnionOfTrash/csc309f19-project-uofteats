import React from "react";
import star from "./images/star.png";

/* The Header Component */
class TruckHeader extends React.Component {
  render() {
    const { truckName, rate, location, foodType, serveTime } = this.props;

    return (
      <div className="truck-header">
        <h2 className="truck-name"> {truckName} </h2>
        <p className="truck-rate"> {rate} </p>
        <img className="rate-star" src={star} />
        <p className="serve-time"> {serveTime} </p>
        <p className="truck-type"> {foodType} </p>
        <p className="truck-location"> {location} </p>
      </div>
    );
  }
}

export default TruckHeader;
