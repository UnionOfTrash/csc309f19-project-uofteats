import React from "react";
import { Icon } from "antd";
import { Button } from "antd";

/* The Header Component */
class TruckHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartFoodList: []
    };
  }

  render() {
    const {
      truckName,
      location,
      foodType,
      serveTime,
      cartFoodNum,
      showCartDrawer,
      showCart
    } = this.props;
    return (
      <div className="truck-header">
        <div className="truck-name-cart">
          <h2 className="truck-name"> {truckName} </h2>
          {showCart && (
            <Button
              className="cart-button"
              onClick={() => showCartDrawer()}
              style={{ margin: 20 }}
            >
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
          )}
        </div>
        <p className="serve-time"> {serveTime} </p>
        <p className="truck-type"> {foodType} </p>
        <p className="truck-location"> {location} </p>
      </div>
    );
  }
}

export default TruckHeader;
