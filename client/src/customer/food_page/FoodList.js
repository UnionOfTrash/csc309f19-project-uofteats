import React from "react";
import Food from "./Food";
import FoodCategoryTitle from "./FoodCategoryTitle";
import { Row } from "antd";
/* The Header Component */
class FoodList extends React.Component {
  render() {
    const { foodList, changeFoodNum } = this.props;
    return (
      <>
        {foodList.map(eachCategory => {
          return (
            <div key={eachCategory.category}>
              <FoodCategoryTitle categoryName={eachCategory.category} />
              <Row>
                {eachCategory.foods.map(food => {
                  return (
                    <Food
                      key={food._id}
                      foodId={food._id}
                      changeFoodNum={changeFoodNum}
                      foodName={food.name}
                      price={food.price}
                      foodImage={"." + food.img}
                    />
                  );
                })}
              </Row>
            </div>
          );
        })}
      </>
    );
  }
}

export default FoodList;
