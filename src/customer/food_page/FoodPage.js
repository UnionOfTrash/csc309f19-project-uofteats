import React from "react";
import Header from "../Header/Header";
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
        category: "Combos",
        foods: [
          {
            name: "All Beef Hotdog",
            price: "$4.00",
            img: beefHotDog
          },
          {
            name: "Chicken Hotdog",
            price: "$4.00",
            img: chickenHotDog
          },
          {
            name: "Italian Spicy Sausage",
            price: "$5.00",
            img: italianSpicySausage
          },
          {
            name: "German Sausage",
            price: "$5.00",
            img: germanSausage
          }
        ]
      },
      {
        category: "Sides",
        foods: [
          { name: "French Fries", price: "$2.50", img: frenchFries },
          { name: "Poutine", price: "$3.75", img: poutine },
          { name: "Chicken Nuggets", price: "$4.50", img: chickenNuggets },
          { name: "Onion Rings", price: "$3.50", img: onionRings }
        ]
      },
      {
        category: "Beverages",
        foods: [
          { name: "Canada Dry", price: "$1.25", img: canadaDry },
          { name: "Green Tea", price: "$1.25", img: greenTea },
          { name: "Water", price: "$1.00", img: water }
        ]
      }
    ]
  };

  render() {
    return (
      <div>
        <Header title="UofT Eats" username={this.state.userName} />

        <TruckHeader
          truckName={this.state.truck.name}
          rate={this.state.truck.rate}
          location={this.state.truck.location}
          foodType={this.state.truck.foodType}
          serveTime={this.state.truck.serveTime}
        />

        <FoodList foodList={this.state.foodList} />
      </div>
    );
  }
}

export default FoodPage;
