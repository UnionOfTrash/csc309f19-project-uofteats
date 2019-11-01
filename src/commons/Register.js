import React from "react";

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
                            <Form className='commonForm'>
                                <Form.Item className='commonItem'>
                                    <Input prefix={ <Icon type='user' /> } type='text' placeholder='Username' autoFocus />
                                </Form.Item>
                                <Form.Item className='commonItem'>
                                    <Input prefix={ <Icon type='mail' /> } type='email' placeholder='Email Address' />
                                </Form.Item>
                                <Form.Item className='commonItem'>
                                    <Input.Password prefix={ <Icon type='lock' /> } type='password' placeholder='Password' />
                                </Form.Item>
                                <Form.Item className='commonItem'>
                                    <Input.Password prefix={ <Icon type='unlock' /> } type='password' placeholder='Confirm Password' />
                                </Form.Item>
                                <Form.Item className='commonItem'>
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
                                <Form.Item className='commonItem'>
                                    <Button type='danger' className='commonButton'> Sign Up </Button>
                                </Form.Item>
                                <Form.Item className='commonItem'>
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


export default Register;