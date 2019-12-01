import React from "react";

import HeaderBar from "../../commons/HeaderBar";
import TruckHeader from "./TruckHeader";
import FoodList from "./FoodList";
import "./FoodPage.css";

import beefHotDog from "../images/BeefHotDog.jpeg";
import chickenHotDog from "../images/ChickenHotDog.jpeg";
import italianSpicySausage from "../images/ItalianSpicySausage.jpeg";
import germanSausage from "../images/GermanSausage.jpeg";
import frenchFries from "../images/FrenchFries.jpeg";
import poutine from "../images/Poutine.jpg";
import chickenNuggets from "../images/ChickenNuggets.jpg";
import onionRings from "../images/OnionRings.jpg";
import canadaDry from "../images/CanadaDry.jpg";
import greenTea from "../images/GreenTea.jpg";
import water from "../images/Water.jpeg";
import { Card } from "antd";
import { Button } from "antd";
import { Drawer } from "antd";

class FoodPage extends React.Component {
  // some initial data

  state = {
    truckId: this.props.match.params.truckId,
    userName: "",
    truck: {
      name: "",
      location: "",
      type: "",
      time: ""
    },
    foodList: [
      // {
      //   category: "HotDogs",
      //   foods: [
      //     {
      //       id: "1",
      //       name: "All Beef Hotdog",
      //       price: "$4.00",
      //       img: beefHotDog
      //     },
      //     {
      //       id: "2",
      //       name: "Chicken Hotdog",
      //       price: "$4.00",
      //       img: chickenHotDog
      //     },
      //     {
      //       id: "3",
      //       name: "Italian Spicy Sausage",
      //       price: "$5.00",
      //       img: italianSpicySausage
      //     },
      //     {
      //       id: "4",
      //       name: "German Sausage",
      //       price: "$5.00",
      //       img: germanSausage
      //     }
      //   ]
      // },
      // {
      //   category: "Sides",
      //   foods: [
      //     { id: "5", name: "French Fries", price: "$2.50", img: frenchFries },
      //     { id: "6", name: "Poutine", price: "$3.75", img: poutine },
      //     {
      //       id: "7",
      //       name: "Chicken Nuggets",
      //       price: "$4.50",
      //       img: chickenNuggets
      //     },
      //     { id: "8", name: "Onion Rings", price: "$3.50", img: onionRings }
      //   ]
      // },
      // {
      //   category: "Beverages",
      //   foods: [
      //     { id: "9", name: "Canada Dry", price: "$1.25", img: canadaDry },
      //     { id: "10", name: "Green Tea", price: "$1.25", img: greenTea },
      //     { id: "11", name: "Water", price: "$1.00", img: water }
      //   ]
      // }
    ],
    drawerVisible: false
  };

  componentDidMount() {
    const truckUrl = `/api/trucks/${this.state.truckId}`;
    const foodUrl = `/api/foods/${this.state.truckId}`;

    Promise.all([fetch(truckUrl), fetch(foodUrl)])
      .then(([truckRes, foodRes]) => {
        return Promise.all([truckRes.json(), foodRes.json()]);
      })
      .then(([truckRes, foodRes]) => {
        // set state in here
        this.setState({ truck: truckRes });

        // restructure the food list
        const foodList = [];
        const resFoodList = foodRes.foods;
        for (let i = 0; i < resFoodList.length; i++) {
          let food = resFoodList[i];
          let added = false;

          for (let j = 0; j < foodList.length; j++) {
            let categoryObj = foodList[j];
            if (categoryObj.category === food.category) {
              categoryObj.foods.push(food);
              added = true;
            }
          }

          if (!added) {
            foodList.push({
              category: food.category,
              foods: [food]
            });
          }
        }
        console.log(foodList);

        this.setState({ foodList: foodList });
      })
      .catch(error => {
        console.log(error);
      });
  }

  changeFoodNum({ foodId, num }) {
    this.state.foodList.forEach(category => {
      category.foods.forEach(food => {
        if (food._id === foodId) {
          food.num = num;
        }
      });
    });
    this.setState({
      foodList: [].concat(this.state.foodList)
    });
  }

  get cartFoodPrice() {
    let foodPrice = 0;
    this.state.foodList.forEach(category => {
      category.foods.forEach(food => {
        if (food.num) {
          foodPrice = foodPrice + food.num * food.price;
        }
      });
    });
    return foodPrice;
  }

  get cartFoodNum() {
    let foodNum = 0;
    this.state.foodList.forEach(category => {
      category.foods.forEach(food => {
        if (food.num) {
          foodNum = foodNum + food.num;
        }
      });
    });
    return foodNum;
  }

  showCartDrawer() {
    this.setState({
      drawerVisible: true
    });
  }

  onCloseDrawer() {
    this.setState({
      drawerVisible: false
    });
  }

  jumpToSchedulePage() {
    this.props.history.push({
      pathname: `/customer/schedule_page/SchedulePage`,
      state: { foodList: this.state.foodList }
    });
  }

  render() {
    return (
      <div>
        <HeaderBar title="UofT Eats" username={this.state.userName} />

        <TruckHeader
          cartFoodNum={this.cartFoodNum}
          truckName={this.state.truck.name}
          location={this.state.truck.location}
          foodType={this.state.truck.type}
          serveTime={this.state.truck.time}
          showCartDrawer={() => this.showCartDrawer()}
          showCart="true"
        />

        <FoodList
          foodList={this.state.foodList}
          changeFoodNum={({ foodId, num }) => {
            this.changeFoodNum({ foodId, num });
          }}
        />

        <Drawer
          title={`Your Order (${this.cartFoodNum})`}
          placement="right"
          width="500"
          closable={true}
          onClose={() => this.onCloseDrawer()}
          visible={this.state.drawerVisible}
        >
          {this.state.foodList.map(category => {
            if (
              category.foods.find(food => {
                return food.num;
              })
            ) {
              return (
                <>
                  <Card
                    title={category.category}
                    key={category.category}
                    hoverable
                  >
                    {category.foods.map(food => {
                      if (food.num) {
                        return (
                          <p key={food._id}>
                            {food.name} * {food.num}
                          </p>
                        );
                      } else {
                        return null;
                      }
                    })}
                  </Card>
                  <br></br>
                </>
              );
            } else {
              return null;
            }
          })}
          <hr></hr>
          {this.cartFoodPrice ? (
            <Button
              type="primary"
              style={{ width: "100%" }}
              onClick={() => this.jumpToSchedulePage()}
            >
              Schedule Pickup (${this.cartFoodPrice.toFixed(2)})
            </Button>
          ) : (
            ""
          )}
        </Drawer>
      </div>
    );
  }
}

export default FoodPage;
