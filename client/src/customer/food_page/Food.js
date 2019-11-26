import React from "react";
import { Button } from "antd";
import { InputNumber } from "antd";
import { Col } from "antd";
/* The Header Component */
class Food extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foodNumber: 0
    };
  }

  changeFoodNum({ foodId, num }) {
    this.setState({
      foodNumber: num
    });
    this.props.changeFoodNum({ foodId, num });
  }

  render() {
    const { foodId, foodName, price, foodImage } = this.props;
    return (
      <Col span={6}>
        <div className="food">
          <div className="food-container">
            <img src={foodImage} alt="" />
            <p className="food-name">{foodName}</p>
            <div>
              {this.state.foodNumber > 0 && (
                <InputNumber
                  className="add-cart-button"
                  min={0}
                  max={100}
                  value={this.state.foodNumber}
                  onChange={value => this.changeFoodNum({ foodId, num: value })}
                />
              )}
              {this.state.foodNumber === 0 && (
                <Button
                  className="add-cart-button"
                  onClick={() => this.changeFoodNum({ foodId, num: 1 })}
                >
                  {" "}
                  Add to Cart{" "}
                </Button>
              )}
              <p className="food-price">{price}</p>
            </div>
          </div>
        </div>
      </Col>
    );
  }
}

export default Food;
