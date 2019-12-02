import React from "react";
import { withRouter } from "react-router-dom";

import "antd/dist/antd.css";
import "./commons.css";

import { Layout } from "antd";
import { Row, Col } from "antd";
import { Typography } from "antd";
import { Form, Input, Icon, Checkbox, Button, message } from "antd";

const { Content } = Layout;
const { Title } = Typography;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [
        {
          name: "user",
          password: "user",
          role: "Student"
        },
        {
          name: "user2",
          password: "user2",
          role: "Truck"
        },
        {
          name: "admin",
          password: "admin",
          role: "Admin"
        }
      ],
      loginUser: {
        name: "",
        password: ""
      },
      jumpLink: ""
    };
    this.jumpLinks = {
      Student: "/CustomerMain",
      Truck: "/t",
      Admin: "/admin"
    };
  }

  handleChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    const loginUser = this.state.loginUser;
    loginUser[name] = value;
    this.setState({ loginUser: loginUser });
  };

  handleSubmit = e => {
    e.preventDefault();
    // log on server
    const loginUser = {
      username: this.state.loginUser.name,
      password: this.state.loginUser.password
    };
    const response = fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(loginUser),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const user = this.state.user.filter(
      user => user.name === this.state.loginUser.name
    );
    if (user.length === 0) {
      message.warning("No such user!");
    } else if (user[0].password !== this.state.loginUser.password) {
      message.warning("Wrong Password");
    } else {
      this.props.history.push(this.jumpLinks[user[0].role]);
    }
  };

  render() {
    return (
      <Layout className="commonLayout">
        <Content>
          <Row>
            <Col xs={2} sm={3} md={6} lg={7} xl={8} xxl={8} />
            <Col
              xs={20}
              sm={18}
              md={12}
              lg={10}
              xl={8}
              xxl={8}
              className="commonContainer"
            >
              <Title level={4}> Sign In </Title>
              <Form
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                className="commonForm"
              >
                <Form.Item className="commonFormItem">
                  <Input
                    name="name"
                    prefix={<Icon type="user" />}
                    type="text"
                    placeholder="Username"
                    value={this.state.loginUser.name}
                    autoFocus
                  />
                </Form.Item>
                <Form.Item className="commonFormItem">
                  <Input.Password
                    name="password"
                    prefix={<Icon type="lock" />}
                    type="password"
                    placeholder="Password"
                    value={this.state.loginUser.password}
                  />
                </Form.Item>
                <Form.Item className="commonFormItem">
                  <Checkbox defaultChecked> Remember me? </Checkbox>
                </Form.Item>
                <Form.Item className="commonFormItem">
                  <Button type="primary" htmlType="submit" block>
                    {" "}
                    Log me in{" "}
                  </Button>
                </Form.Item>
                <Form.Item className="commonFormItem">
                  <Row>
                    <Col span={12} className="commonGridComponent">
                      <Button type="link" href="/reset">
                        {" "}
                        Forget Password?{" "}
                      </Button>
                    </Col>
                    <Col span={12} className="commonGridComponent">
                      <Button type="link" href="/register">
                        {" "}
                        Register Here!{" "}
                      </Button>
                    </Col>
                  </Row>
                </Form.Item>
              </Form>
            </Col>
            <Col xs={2} sm={3} md={6} lg={7} xl={8} xxl={8} />
          </Row>
        </Content>
      </Layout>
    );
  }
}

export default withRouter(Login);
