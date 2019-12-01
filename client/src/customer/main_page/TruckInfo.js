import React from "react";

/* The Header Component */
class TruckInfo extends React.Component {
  render() {
    return (
      <div className="truck-info">
        <a href={`../food_page/FoodPage/${this.props.id + ""}`}>
          <div className="truck-img">
            <img src={this.props.image} alt={this.props.alternative} />
          </div>
          <div className="truck-description">
            <p>{this.props.name}</p>
            <p>{this.props.location}</p>
            <p>{this.props.type}</p>
          </div>
        </a>
      </div>
    );
  }
}

export default TruckInfo;
