import React from "react";
import { withRouter } from "react-router-dom";

import "antd/dist/antd.css";
import "../commons/commons.css";
import "./trucks.css";

import { Layout } from "antd";
import { PageHeader, Tabs } from "antd";
import { DatePicker, Table, Card, Button, Statistic, Modal, Form, Input } from "antd";
import { Typography } from "antd";

import HeaderBar from "../commons/HeaderBar";
import orderData from "../data/OrderData";

const { Header, Content } = Layout;
const { TabPane } = Tabs;
const { Column } = Table;
const { Meta } = Card;
const { Text } = Typography;

class TruckView extends React.Component {
  constructor(props) {
    super(props);
    this.title = "Uoft Eats Food Truck";
    this.state = {
      truckInfo: {},
      foods: [],
      incomingOrder: this.getOrderList(),
      order: [],
      addItem: {
        name: "",
        price: "",
        category: "",
      },
      incomingOrderState: false,
      addItemState: false
    };
  }

  componentDidMount() {
    fetch("/api/check-session").then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        this.props.history.push("/login");
      }
    }).then((json) => {
      if (json) {
        this.setState({
          truckInfo: {
            id: json.id,
            name: json.username,
          }
        });
      }
    }).catch((err) => {
      console.log(err);
    });

    this.getFoodList();
  }

  getFoodList = () => {
    if (this.state.truckInfo.id) {
      fetch("/api/foods/" + this.state.truckInfo.id).then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      }).then((json) => {
        if (json) {
          this.setState({
            foods: json,
          });
        }
      }).catch((err) => {
        console.log(err);
      });
    }

    if (this.state.foods.length === 0) {
      setInterval(this.getFoodList, 3000);
    }
  }

  getOrderList = () => {
    // require server call
    return orderData;
  };

  incomingOrderBtn = () => (
    <Button
      icon="shopping-cart"
      onClick={() => {
        this.setState({ incomingOrderState: true });
      }}
    >
      {" "}
      {this.state.incomingOrder.length}{" "}
    </Button>
  );

  incomingOrderAction = record => {
    const handleAccept = () => {
      this.state.order.push(record);
      const incomingOrderLeft = this.state.incomingOrder.filter(
        order => order.key !== record.key
      );
      this.setState({ incomingOrder: incomingOrderLeft });
    };

    const handleCancel = () => {
      const incomingOrderLeft = this.state.incomingOrder.filter(
        order => order.key !== record.key
      );
      this.setState({ incomingOrder: incomingOrderLeft });
    };

    return (
      <Button.Group>
        <Button type="primary" onClick={handleAccept}>
          {" "}
          Accept{" "}
        </Button>
        <Button type="danger" onClick={handleCancel}>
          {" "}
          Drop{" "}
        </Button>
      </Button.Group>
    );
  };

  handleOrderOk = () => {
    this.setState({ incomingOrderState: false });
  };

  handleItemChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    const newItem = this.state.addItem;
    newItem[name] = value;
    this.setState({ addItem: newItem });
  };

  handleItemOk = () => {
    const newFood = {
      truckId: this.state.truckInfo.id,
      name: this.state.addItem.name,
      price: this.state.addItem.price,
      category: this.state.addItem.category,
    };

    const request = new Request("/api/food", {
      method: "POST",
      body: JSON.stringify(newFood),
      headers: {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    });

    fetch(request).then((res) => {
      if (res.status === 200) {
        return res.json();
      }
    }).catch((err) => {
      console.log(err);
    });

    this.setState({ addItem: { name: "", price: "" } });
    this.setState({ addItemState: false });
    this.getFoodList();
  };

  handleItemCancel = () => {
    this.setState({ addItem: { name: "", price: "" } });
    this.setState({ addItemState: false });
  };

  handleItemRemove = record => () => {
    const request = new Request("/api/food/" + record._id, {
      method: "DELETE",
      headers: {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    });

<<<<<<< HEAD
    fetch(request).then((res) => {
      if (res.status === 200) {
        return res.json();
      }
    }).catch((err) => {
      console.log(err);
    });

    this.getFoodList();
  };
=======
>>>>>>> 7246449780e4fe8bf810a8eab74bc6b05efd4583

  selectPane = () => (
    <Tabs defaultActiveKey="orders" className="commonTab">
      <TabPane tab="Orders" key="orders">
        {this.orderTab()}
      </TabPane>
      <TabPane tab="Item List" key="items">
        {this.itemTab()}
      </TabPane>
    </Tabs>
  );

  orderInfoRender = record => (
    <div>
      <Text strong className="orderInfo1">
        {" "}
        {`${record.pickupTimeStart} - ${record.pickupTimeEnd}`}{" "}
      </Text>
      <Text className="orderInfo2"> {`Order #: ${record.key}`} </Text>
      <Text className="orderInfo2"> {`User Name: ${record.orderFrom}`} </Text>
      <Text type="warning" ellipsis={true} className="orderInfo1">
        {" "}
        {`Notes: ${record.notes}`}{" "}
      </Text>
    </div>
  );

  orderDetailRender = record => (
    <div>
      {record.orderList.map(item => (
        <Card
          cover={<img src="./logo192.png" alt={item.name} />}
          className="orderDetailCard"
        >
          <Meta title={item.name} description={`Quantity: ${item.quantity}`} />
          <Button
            type="dashed"
            size="small"
            className="doneCookingBtn"
            onClick={e => {
              e.target.disabled = true;
            }}
            block
          >
            {" "}
            Done Cooking!{" "}
          </Button>
        </Card>
      ))}
    </div>
  );

  chargeRender = record => (
    <Statistic title="Price" prefix="$" value={record.charge} />
  );

  orderTab = () => (
    <div>
      <div className="commonContentComponentLayout">
        <Text strong> Date: </Text>
        <DatePicker></DatePicker>
      </div>
      <div className="commonContentComponentLayout">
        <Table
          dataSource={this.state.order}
          bordered={true}
          pagination={false}
          showHeader={false}
        >
          <Column key="orderInfo" render={this.orderInfoRender} />
          <Column key="orderDetail" render={this.orderDetailRender} />
          <Column key="charge" render={this.chargeRender} />
        </Table>
      </div>
    </div>
  );

  itemTab = () => (
    <div>
      <div className="commonContentComponentLayout">
        <Button
          type="primary"
          onClick={() => {
            this.setState({ addItemState: true });
          }}
        >
          {" "}
          Add new item{" "}
        </Button>
      </div>
      <div className="commonContentComponentLayout">
        <Table dataSource={this.state.foods} pagination={false}>
          <Column title="#" key="#" dataIndex="_id" />
          <Column title="Name" key="name" dataIndex="name" />
          <Column
            title="Price"
            key="price"
            dataIndex="price"
            render={text => `$ ${text}`}
          />
          <Column
            title="Category"
            key="category"
            dataIndex="category"
            render={text => `${text}`}
          />
          <Column
            title="Image"
            key="img"
            dataIndex="img"
            render={text => (
              <img src={text} alt="food img" width="80" height="80" />
            )}
          />
          <Column
            title="Action"
            key="action"
            render={record => (
              <Button type="danger" onClick={this.handleItemRemove(record)}> Remove </Button>
            )}
          />
        </Table>
      </div>
    </div>
  );

  render() {
    return (
      <Layout className="commonLayout">
        <Header className="commonHeaderLayout">
          <HeaderBar title={this.title} />
        </Header>
        <Content className="commonContentLayout">
          <PageHeader
            ghost={false}
            title={this.state.truckInfo.name}
            extra={this.incomingOrderBtn()}
            footer={this.selectPane()}
            className="trucksHeader"
          />
          <Modal
            title="Incoming Order"
            closable={false}
            visible={this.state.incomingOrderState}
            onOk={this.handleOrderOk}
            onCancel={this.handleOrderOk}
          >
            <Table dataSource={this.state.incomingOrder} pagination={false}>
              <Column
                title="Order #"
                key="orderNumber"
                dataIndex="key"
                align="center"
              />
              <Column
                title="Pickup Time"
                key="pickupTime"
                align="center"
                render={record => (
                  <Text strong className="orderInfo1">
                    {" "}
                    {`${record.pickupTimeStart} - ${record.pickupTimeEnd}`}{" "}
                  </Text>
                )}
              />
              <Column
                title="Actions"
                key="action"
                align="center"
                render={this.incomingOrderAction}
              />
            </Table>
          </Modal>
          <Modal
            title="Adding New Item"
            closable={false}
            visible={this.state.addItemState}
            onOk={this.handleItemOk}
            onCancel={this.handleItemCancel}
          >
            <Form className="commonForm" onChange={this.handleItemChange}>
              <Form.Item label="Name" className="commonFormItem">
                <Input
                  name="name"
                  type="text"
                  onChange={this.handleItemChange}
                  value={this.state.addItem.name}
                  autoFocus
                />
              </Form.Item>
              <Form.Item label="Price" className="commonFormItem">
                <Input
                  name="price"
                  type="text"
                  onChange={this.handleItemChange}
                  value={this.state.addItem.price}
                />
              </Form.Item>
              <Form.Item label="Category" className="commonFormItem">
                <Input
                  name="category"
                  type="text"
                  onChange={this.handleItemChange}
                  value={this.state.addItem.category}
                />
              </Form.Item>
            </Form>
          </Modal>
        </Content>
      </Layout>
    );
  }
}

export default withRouter(TruckView);
