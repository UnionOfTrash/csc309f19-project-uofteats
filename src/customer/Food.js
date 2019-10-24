import React from "react";

/* The Header Component */
class Food extends React.Component {
  render() {
    const { foodName, price, foodImage } = this.props;
    return (
      <div class="food">
        <p>{foodName}</p>
        <p>{price}</p>
        <img src={foodImage} alt="food image" />
      </div>
    );
  }
}

export default Food;
