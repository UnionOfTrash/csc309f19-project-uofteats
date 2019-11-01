import React from "react";
import Food from "./Food";
import FoodCategoryTitle from "./FoodCategoryTitle";
/* The Header Component */
class FoodList extends React.Component {
  render() {
    const { foodList, changeFoodNum } = this.props;
    return (
      <ul>
        {foodList.map(eachCategory => {
          return (
            <div key={eachCategory.category}>
              <FoodCategoryTitle categoryName={eachCategory.category} />
              <ul>
                {eachCategory.foods.map(food => {
                  return (
                    <Food
                      key={food.id}
                      foodId={food.id}
                      changeFoodNum={changeFoodNum}
                      foodName={food.name}
                      price={food.price}
                      foodImage={food.img}
                    />
                  );
                })}
              </ul>
            </div>
          );
        })}
      </ul>
    );
  }
}

export default FoodList;
