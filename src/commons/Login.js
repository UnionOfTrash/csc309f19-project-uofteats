import React from "react";

import "antd/dist/antd.css";
import "./commons.css";

import { Layout } from "antd";
import { Row, Col } from "antd";
import { Typography } from "antd";
import { Form, Input, Icon, Radio, Checkbox, Button } from "antd";

const { Content } = Layout;
const { Title, Text } = Typography;


class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            role: 'Student',
        };
        this.jumpLinks = {
            'Student': '/customer/main_page/CustomerMain',
            'Truck': '/t',
        };
    }

    selectRole = (e) => {
        this.setState({
            role: e.target.value,
        });
    }

    render() {

        return (
            <Layout className='commonLayout'>
                <Content>
                    <Row>
                        <Col xs={ 2 } sm={ 3 } md={ 6 } lg={ 7 } xl={ 8 } xxl={ 8 } />
                        <Col xs={ 20 } sm={ 18 } md={ 12 } lg={ 10 } xl={ 8 } xxl={ 8 } className='commonContainer'>
                            <Title level={ 4 }> Sign In </Title>
                            <Form className='commonForm'>
                                <Form.Item className='commonFormItem'>
                                    <Input prefix={ <Icon type='user' /> } type='email' placeholder='Email Address' autoFocus />
                                </Form.Item>
                                <Form.Item className='commonFormItem'>
                                    <Input.Password prefix={ <Icon type='lock' /> } type='password' placeholder='Password' />
                                </Form.Item>
                                <Form.Item className='commonFormItem'>
                                    <Row>
                                        <Col span={ 8 } className='commonGridComponent'>
                                            <Text strong> Role? </Text>
                                        </Col>
                                        <Col span={ 16 } className='commonGridComponent'>
                                            <Radio.Group value={ this.state.role } onChange={ this.selectRole }>
                                                <Radio value='Student'> Student </Radio>
                                                <Radio value='Truck'> Truck Manager </Radio>
                                            </Radio.Group>
                                        </Col>
                                    </Row>
                                </Form.Item>
                                <Form.Item className='commonFormItem'>
                                    <Checkbox defaultChecked> Remember me? </Checkbox>
                                </Form.Item>
                                <Form.Item className='commonFormItem'>
                                    <Button type='primary' href={ this.jumpLinks[this.state.role] } block> Log me in </Button>
                                </Form.Item>
                                <Form.Item className='commonFormItem'>
                                    <Row>
                                        <Col span={ 12 } className='commonGridComponent'>
                                            <Button type='link' href='/reset'> Forget Password? </Button>
                                        </Col>
                                        <Col span={ 12 } className='commonGridComponent'>
                                            <Button type='link' href='/register'> Register Here! </Button>
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


export default Login;