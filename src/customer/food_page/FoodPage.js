import React from "react";
import "antd/dist/antd.css";

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
import { Card } from 'antd'
import { Button } from 'antd';

import { Drawer } from 'antd';

class FoodPage extends React.Component {
  // some initial data
  state = {
    userName: "David Liu",
    truck: {
      name: "Ideal Catering",
      rate: "5.0",
      location: "Bahen Centre for Information Technology",
      foodType: "• American • Fast Food • Hot Dogs",
      serveTime: "9:00 AM - 9:00 PM"
    },
    foodList: [
      {
        category: "HotDogs",
        foods: [
          {
            id: '1',
            name: "All Beef Hotdog",
            price: "$4.00",
            img: beefHotDog
          },
          {
            id: '2',
            name: "Chicken Hotdog",
            price: "$4.00",
            img: chickenHotDog
          },
          {
            id: '3',
            name: "Italian Spicy Sausage",
            price: "$5.00",
            img: italianSpicySausage
          },
          {
            id: '4',
            name: "German Sausage",
            price: "$5.00",
            img: germanSausage
          }
        ]
      },
      {
        category: "Sides",
        foods: [
          { id: '5',name: "French Fries", price: "$2.50", img: frenchFries },
          { id: '6',name: "Poutine", price: "$3.75", img: poutine },
          { id: '7',name: "Chicken Nuggets", price: "$4.50", img: chickenNuggets },
          { id: '8',name: "Onion Rings", price: "$3.50", img: onionRings }
        ]
      },
      {
        category: "Beverages",
        foods: [
          { id: '9',name: "Canada Dry", price: "$1.25", img: canadaDry },
          { id: '10',name: "Green Tea", price: "$1.25", img: greenTea },
          { id: '11',name: "Water", price: "$1.00", img: water }
        ]
      }
    ],
    drawerVisible: false
  };

  changeFoodNum({foodId, num}) {
    this.state.foodList.forEach(category => {
      category.foods.forEach(food => {
        if (food.id === foodId) {
          food.num = num
        }
      })
    })
    this.setState({
      foodList: [].concat(this.state.foodList)
    })
  }

  get cartFoodPrice() {
    let foodPrice = 0
    this.state.foodList.forEach(category => {
      category.foods.forEach(food => {
        if (food.num) {
          foodPrice = foodPrice + food.num * food.price.slice(1)
        }
      })
    })
    return foodPrice
  }

  get cartFoodNum() {
    let foodNum = 0
    this.state.foodList.forEach(category => {
      category.foods.forEach(food => {
        if (food.num) {
          foodNum = foodNum + food.num
        }
      })
    })
    return foodNum
  }

  showCartDrawer() {
    this.setState({
      drawerVisible: true
    })
  }

  onCloseDrawer() {
    this.setState({
      drawerVisible: false
    })
  }

  render() {
    return (
      <div>
        <HeaderBar title="UofT Eats" username={this.state.userName} />

        <TruckHeader
          cartFoodNum={this.cartFoodNum}
          truckName={this.state.truck.name}
          rate={this.state.truck.rate}
          location={this.state.truck.location}
          foodType={this.state.truck.foodType}
          serveTime={this.state.truck.serveTime}
          showCartDrawer={() => this.showCartDrawer()}
        />

        <FoodList foodList={this.state.foodList} changeFoodNum={({foodId, num}) => {
          this.changeFoodNum({foodId, num})
        }} />

        <Drawer
          title={`Your Order (${this.cartFoodNum})`}
          placement='right'
          width='500'
          closable={true}
          onClose={() => this.onCloseDrawer()}
          visible={this.state.drawerVisible}
        >
          {this.state.foodList.map(category => {
            if (category.foods.find(food => {
              return food.num
            })) {
              return (
                <>
                  <Card title={category.category} key={category.category}>
                    {category.foods.map(food => {
                      if (food.num) {
                        return <p key={food.id}>{food.name} * {food.num}</p>
                      } else {
                        return null
                      }
                    })}
                  </Card>
                  <br></br>
                </>
              )
            } else {
              return null
            }
          })}
          <hr></hr>
          <Button type="primary" style={{width: "100%"}}>Schedule Pickup (${this.cartFoodPrice.toFixed(2)})</Button>
        </Drawer>
      </div>
    );
  }
}

export default FoodPage;
