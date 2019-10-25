import React from "react";

/* The Header Component */
class Food extends React.Component {
  render() {
    const { foodName, price, foodImage } = this.props;
    return (
      <div className="food">
        <div className="food-container">
          <img src={foodImage} alt="food image" />
          <p className="food-name">{foodName}</p>
          <p className="food-price">{price}</p>
        </div>
      </div>
    );
  }
}

export default Food;
