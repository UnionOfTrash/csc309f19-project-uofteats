import React from "react";

/* The Header Component */
class FoodCategoryTitle extends React.Component {
  render() {
    const { categoryName } = this.props;
    return (
      <div>
        <h3>{categoryName}</h3>
      </div>
    );
  }
}

export default FoodCategoryTitle;
