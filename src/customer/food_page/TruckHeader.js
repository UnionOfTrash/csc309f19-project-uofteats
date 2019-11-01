import React from "react";
import star from "../images/star.png";
import { Icon } from "antd";
import Button from "@material-ui/core/Button";

/* The Header Component */
class TruckHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cartFoodList: []
    }
  }

  render() {
    const { truckName, rate, location, foodType, serveTime, cartFoodNum, showCartDrawer, showCart } = this.props;
    return (
      <div className="truck-header">
        <div className="truck-name-cart">
          <h2 className="truck-name"> {truckName} </h2>
          {
            showCart &&
            <Button className="cart-button" onClick={() => showCartDrawer()} style={{margin: 20}}>
              <Icon
                className="cart-icon"
                type="shopping-cart"
                style={{
                  fontSize: "25px",
                  color: cartFoodNum > 0 ? "#1790FF" : "$1F1F1F"
                }}
              />
              <span
                className="cart-num"
                style={{
                  color: cartFoodNum > 0 ? "#1790FF" : "$1F1F1F"
                }}
              >
                {cartFoodNum}
              </span>
            </Button>
          }
        </div>
        <p className="truck-rate"> {rate} </p>
        <img className="rate-star" src={star} alt="" />
        <p className="serve-time"> {serveTime} </p>
        <p className="truck-type"> {foodType} </p>
        <p className="truck-location"> {location} </p>
      </div>
    );
  }
}

export default TruckHeader;
