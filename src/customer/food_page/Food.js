import React from "react";
import { Button } from "antd";

/* The Header Component */
class Food extends React.Component {
  render() {
    const { foodName, price, foodImage } = this.props;
    return (
      <div className="food">
        <div className="food-container">
          <img src={foodImage} alt="food image" />
          <p className="food-name">{foodName}</p>
          <Button className="add-cart-button"> Add to Cart </Button>
          <p className="food-price">{price}</p>
        </div>
      </div>
    );
  }
}

export default Food;
