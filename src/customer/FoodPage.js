import React from "react";
import Header from "./Header";
import TruckHeader from "./TruckHeader";
import FoodCategoryTitle from "./FoodCategoryTitle";
import Food from "./Food";
import "./FoodPage.css";

import beefHotDog from "./images/BeefHotDog.jpeg";
import chickenHotDog from "./images/ChickenHotDog.jpeg";
import italianSpicySausage from "./images/ItalianSpicySausage.jpeg";
import germanSausage from "./images/GermanSausage.jpeg";
import frenchFries from "./images/FrenchFries.jpeg";
import poutine from "./images/Poutine.jpg";
import chickenNuggets from "./images/ChickenNuggets.jpg";
import onionRings from "./images/OnionRings.jpg";
import canadaDry from "./images/CanadaDry.jpg";
import greenTea from "./images/GreenTea.jpg";
import water from "./images/Water.jpeg";

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
            img: { beefHotDog }
          },
          {
            name: "Chicken Hotdog",
            price: "$4.00",
            img: { chickenHotDog }
          },
          {
            name: "Italian Spicy Sausage",
            price: "$5.00",
            img: { italianSpicySausage }
          },
          {
            name: "German Sausage",
            price: "$5.00",
            img: { germanSausage }
          }
        ]
      },
      {
        category: "Sides",
        foods: [
          { name: "French Fries", price: "$2.50", img: { frenchFries } },
          { name: "Poutine", price: "$3.75", img: { poutine } },
          { name: "Chicken Nuggets", price: "$4.50", img: { chickenNuggets } },
          { name: "Onion Rings", price: "$3.50", img: { onionRings } }
        ]
      },
      {
        category: "Beverages",
        foods: [
          { name: "Canada Dry", price: "$1.25", img: { canadaDry } },
          { name: "Green Tea", price: "$1.25", img: { greenTea } },
          { name: "Water", price: "$1.00", img: { water } }
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
        <FoodCategoryTitle categoryName="Combos" />

        <Food foodName="All Beef Hotdog" price="$4.00" foodImage={beefHotDog} />
        <Food
          foodName="Chicken Hotdog"
          price="$4.00"
          foodImage={chickenHotDog}
        />
        <Food
          foodName="Italian Spicy Sausage"
          price="$5.00"
          foodImage={italianSpicySausage}
        />
        <Food
          foodName="German Sausage"
          price="$5.00"
          foodImage={germanSausage}
        />

        <FoodCategoryTitle categoryName="Sides" />

        <Food foodName="French Fries" price="$2.50" foodImage={frenchFries} />
        <Food foodName="Poutine" price="$3.75" foodImage={poutine} />
        <Food
          foodName="Chicken Nuggets"
          price="$4.50"
          foodImage={chickenNuggets}
        />
        <Food foodName="Onion Rings" price="$3.50" foodImage={onionRings} />

        <FoodCategoryTitle categoryName="Beverages" />

        <Food foodName="Canada Dry" price="$1.25" foodImage={canadaDry} />
        <Food foodName="Green Tea" price="$1.25" foodImage={greenTea} />
        <Food foodName="Water" price="$1.00" foodImage={water} />
      </div>
    );
  }
}

export default FoodPage;
