import React from "react";

import HeaderBar from "../../commons/HeaderBar";
import TruckHeader from "../food_page/TruckHeader";
import {
  Typography,
  DatePicker,
  TimePicker,
  Form,
  Card,
  Input,
  Button,
  notification,
  Result
} from "antd";
import moment from "moment";

const { Title } = Typography;
class Schedule extends React.Component {
  state = {
    userName: "",
    truck:
      (this.props.history.location.state &&
        this.props.history.location.state.truck) ||
      {},
    drawerVisible: false,
    foodList:
      (this.props.history.location.state &&
        this.props.history.location.state.foodList) ||
      [],
    pickupTime: null,
    pickupDate: null,
    result: false,
    currentTime: null,
    note: ""
  };

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

  getOrderedFood = () => {
    let orderedFood = [];
    this.state.foodList.forEach(category => {
      category.foods.forEach(food => {
        if (food.num) {
          orderedFood.push({ foodId: food._id, quantity: food.num });
        }
      });
    });
    return orderedFood;
  };

  setDate(pickupDate) {
    this.setState({
      pickupDate: pickupDate
    });
  }

  setTime(pickupTime) {
    this.setState({
      pickupTime: pickupTime
    });
  }

  pickup() {
    if (this.state.pickupDate && this.state.pickupTime) {
      this.setState({
        result: true
      });
    } else {
      notification.config({
        placement: "bottomRight"
      });
      notification.open({
        message: "Tips",
        description: "Please choose a pick-up time."
      });
    }
  }

  disabledEndDate = endValue => {
    let me = this;
    const startValue = this.state.currentTime;
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.valueOf() <= startValue.valueOf();
  };

  handleEndOpenChange = open => {
    let me = this;
    if (open) {
      me.currentTime = moment();
    }
    this.setState({ currentTime: moment() });
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({ note: event.target.value });
  };

  componentDidMount() {
    fetch("/api/check-session")
      .then(res => {
        if (res.status === 401) {
          return this.props.history.push("/");
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        {!this.state.result && (
          <>
            <HeaderBar title="UofT Eats" username={this.state.userName} />

            <TruckHeader
              cartFoodNum={this.cartFoodNum}
              truckName={this.state.truck.name}
              location={this.state.truck.location}
              foodType={this.state.truck.cuisine}
              serveTime={this.state.truck.time}
              showCartDrawer={() => this.showCartDrawer()}
            />
            <br></br>
            <Title level={2} style={{ paddingLeft: 20 }}>
              {this.state.userName}
            </Title>

            <Card title={`Items (${this.cartFoodNum})`} style={{ margin: 20 }}>
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
                              <p key={food.id}>
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
              <Title level={4} style={{ paddingLeft: 20 }}>
                Total： ${this.cartFoodPrice.toFixed(2)}
              </Title>
            </Card>
            <Card title={`Schedule Pickup Time`} style={{ margin: 20 }}>
              <Form layout="vertical">
                <Form.Item label="Date">
                  <DatePicker
                    disabledDate={this.disabledEndDate}
                    value={this.state.pickupDate}
                    onChange={value => this.setDate(value)}
                    disabledDate={this.disabledEndDate}
                    format="YYYY-MM-DD"
                    onOpenChange={this.handleEndOpenChange}
                  />
                </Form.Item>
                <Form.Item label="Time">
                  <TimePicker
                    value={this.state.pickupTime}
                    onChange={value => this.setTime(value)}
                    format="HH:mm"
                  />
                </Form.Item>
                <Form.Item>
                  <Input
                    type="text"
                    value={this.state.note}
                    onChange={this.handleChange}
                    placeholder="Leave a note for the food truck"
                  />
                </Form.Item>
                <Button type="primary" onClick={() => this.pickup()}>
                  Schedule Pickup
                </Button>
              </Form>
            </Card>
          </>
        )}
        {this.state.result &&
          fetch("/api/orders/", {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
              truckId: this.state.truck._id,
              food: this.getOrderedFood(),
              price: this.cartFoodPrice.toFixed(2),
              pickDate: moment(this.state.pickupDate).format("YYYY-MM-DD"),
              pickTime: moment(this.state.pickupTime, "HH:mm").format("HH:mm"),
              noteContent: this.state.note,
              status: 0
            })
          })
            .then(res => {
              res.json();
            })
            .catch(function(res) {
              console.log(res);
            }) && (
            <Result
              status="success"
              title="Your pickup was successfully scheduled!"
              subTitle={`Date:${moment(this.state.pickupDate).format(
                "YYYY/MM/DD"
              )} Time:${moment(this.state.pickupTime, "HH:mm").format(
                "HH:mm"
              )}`}
              extra={[
                <Button
                  type="primary"
                  key="console"
                  onClick={() => {
                    this.props.history.push("/CustomerMain");
                  }}
                >
                  Back to Home Page
                </Button>
              ]}
            />
          )}
      </div>
    );
  }
}

export default Schedule;
