import React from "react";
import "./FoodPage.css";

/* The Header Component */
class Food extends React.Component {
  render() {
    const { foodName, price, foodImage } = this.props;
    return (
      <div>
        <p>{foodName}</p>
        <p>{price}</p>
        <img src={foodImage} />
      </div>
    );
  }
}

export default Food;
