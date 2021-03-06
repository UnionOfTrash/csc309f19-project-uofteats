import React from "react";

import "antd/dist/antd.css";
import "./commons.css";

import { Layout } from "antd";
import { Row, Col } from "antd";
import { Typography } from "antd";
import { Form, Input, Icon, Button } from "antd";

const { Content } = Layout;
const { Title } = Typography;


class Reset extends React.Component {

    render() {

        return (
            <Layout className='commonLayout'>
                <Content>
                    <Row>
                        <Col xs={ 2 } sm={ 3 } md={ 6 } lg={ 7 } xl={ 8 } xxl={ 8 } />
                        <Col xs={ 20 } sm={ 18 } md={ 12 } lg={ 10 } xl={ 8 } xxl={ 8 } className='commonContainer'>
                            <Title level={ 4 }> Reset your password </Title>
                            <Form className='commonForm'>
                                <Form.Item className='commonFormItem'>
                                    <Row gutter={ 8 }>
                                        <Col span={ 16 }>
                                            <Input prefix={ <Icon type='user' /> } type='email' placeholder='Email Address' autoFocus />
                                        </Col>
                                        <Col span={ 8 }>
                                            <Button color='primary' block> Send Code </Button>
                                        </Col>
                                    </Row>
                                </Form.Item>
                                <Form.Item className='commonFormItem'>
                                    <Input prefix={ <Icon type='number' /> } type='text' placeholder='Code' />
                                </Form.Item>
                                <Form.Item className='commonFormItem'>
                                    <Input.Password prefix={ <Icon type='lock' /> } type='password' placeholder='New Password' />
                                </Form.Item>
                                <Form.Item className='commonFormItem'>
                                    <Input.Password prefix={ <Icon type='unlock' /> } type='password' placeholder='Confirm New Password' />
                                </Form.Item>
                                <Form.Item className='commonFormItem'>
                                    <Button type='danger' block> Reset </Button>
                                </Form.Item>
                                <Form.Item className='commonFormItem'>
                                    <Row>
                                        <Col span={ 12 } className='commonGridComponent'>
                                            <Button type='link' href='/login'> Login Here! </Button>
                                        </Col>
                                        <Col span={ 12 } className='commonGridComponent'>
                                            <Button type='link' href='/register'> Or Register Here! </Button>
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


export default Reset;