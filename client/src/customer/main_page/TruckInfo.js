import React from "react";

/* The Header Component */
class TruckInfo extends React.Component {
  render() {
    return (
      <div className="truck-info">
        <div className="truck-img">
          <a href={`../food_page/FoodPage/${this.props.id + ""}`}>
            <img src={this.props.image} alt={this.props.alternative} />
          </a>
        </div>
        <div className="truck-description">
          <p>{this.props.name}</p>
          <p>{this.props.location}</p>
          <p>{this.props.type}</p>
          <p>{this.props.rate}</p>
        </div>
      </div>
    );
  }
}

export default TruckInfo;
