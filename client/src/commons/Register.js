import React from "react";
import { withRouter } from "react-router-dom";

import "antd/dist/antd.css";
import "./commons.css";

import { Layout } from "antd";
import { Row, Col } from "antd";
import { Typography } from "antd";
import { Form, Input, Icon, Radio, Button, message } from "antd";

const { Content } = Layout;
const { Title, Text } = Typography;


class Register extends React.Component {

  constructor(props) {
    super(props);
    this.warned = true;
    this.state = {
      registerUser: {
        username: "",
        password: "",
        email: "",
      },
      confirmPassword: "",
    };
  }

  handleChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    if (name === "confirmPassword") {
      this.setState({ confirmPassword: value });
    } else {
      const registerUser = this.state.registerUser;
      registerUser[name] = value;
      this.setState({ registerUser: registerUser });
    }
  }

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.confirmPassword !== this.state.registerUser.password) {
      message.warning("Password not match!", 10);
      return;
    }

    const request = new Request("/api/student", {
      method: "post",
      body: JSON.stringify(this.state.registerUser),
      headers: {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    });

    fetch(request).then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        message.error("Something wrong with the server");
      }
    }).then((json) => {
      if (json) {
        this.props.history.push("/login");
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  truckWarning = () => {
    if (this.warned) {
      this.warned = false;
      message.warning('Well, you are not allowed to sign up as a truck manager. Please contact Mr. Edison Shi at ed.shi@mail.utoronto.ca if you are interested.', 10);
      setTimeout(() => (this.warned = true), 10000);
    }
  }

  render() {

    return (
      <Layout className='commonLayout'>
        <Content>
          <Row>
            <Col xs={ 2 } sm={ 3 } md={ 6 } lg={ 7 } xl={ 8 } xxl={ 8 } />
            <Col xs={ 20 } sm={ 18 } md={ 12 } lg={ 10 } xl={ 8 } xxl={ 8 } className='commonContainer'>
                <Title level={ 4 }> Get U a ticket to UofTEats </Title>
                <Form
                  onChange={ this.handleChange }
                  onSubmit={ this.handleSubmit }
                  className='commonForm'
                >
                  <Form.Item className='commonFormItem'>
                    <Input
                      name="username"
                      prefix={ <Icon type='user' /> }
                      type='text'
                      placeholder='Username'
                      value={ this.state.registerUser.username }
                      autoFocus
                    />
                  </Form.Item>
                  <Form.Item className='commonFormItem'>
                    <Input
                      name="email"
                      prefix={ <Icon type='mail' /> }
                      type='email'
                      placeholder='Email Address' 
                      value={ this.state.registerUser.email }
                    />
                  </Form.Item>
                  <Form.Item className='commonFormItem'>
                    <Input.Password
                      name="password"
                      prefix={ <Icon type='lock' /> }
                      type='password'
                      placeholder='Password'
                      value={ this.state.registerUser.password }
                    />
                  </Form.Item>
                  <Form.Item className='commonFormItem'>
                    <Input.Password
                      name="confirmPassword"
                      prefix={ <Icon type='unlock' /> }
                      type='password'
                      placeholder='Confirm Password'
                      value={ this.state.confirmPassword }
                    />
                  </Form.Item>
                  <Form.Item className='commonFormItem'>
                      <Row>
                          <Col span={ 8 } className='commonGridComponent'>
                              <Text strong> Role? </Text>
                          </Col>
                          <Col span={ 16 } className='commonGridComponent'>
                              <Radio.Group value='Student'>
                                  <Radio value='Student'> Student </Radio>
                                  <Radio value='Truck' onMouseEnter={ this.truckWarning } disabled> Truck Manager </Radio>
                              </Radio.Group>
                          </Col>
                      </Row>
                  </Form.Item>
                  <Form.Item className='commonFormItem'>
                    <Button type='danger' htmlType="submit" block> Sign Up </Button>
                  </Form.Item>
                  <Form.Item className='commonFormItem'>
                      <Row>
                          <Col span={ 24 } className='commonGridComponent'>
                              <Button type='link' href='/login'> Already have an account? Login Here! </Button>
                          </Col>
                      </Row>
                  </Form.Item>
                </Form>
            </Col>
            <Col xs={ 2 } sm={ 3 } md={ 6 } lg={ 7 } xl={ 8 } xxl={ 8 } />
          </Row>
        </Content>
      </Layout>
    );
  }
}


export default withRouter(Register);
