import React from "react";

import "antd/dist/antd.css";
import "../commons/commons.css";
import "./trucks.css";

import { Layout } from "antd";
import { DatePicker, Table, Card, Button, Statistic } from "antd";
import { Typography } from "antd";

import HeaderBar from "../commons/HeaderBar";
import TruckHeader from "./TruckHeader";
import truckData from "../Data/TrackData";
import orderData from "../Data/OrderData";

const { Header, Content } = Layout;
const { Column } = Table;
const { Meta } = Card;
const { Text } = Typography;


class TruckView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Uoft Eats Food Truck',
            username: truckData[0].name,
            rating: truckData[0].rate,
        };
    }

    handleDoneCookingClick = e => {
        e.target.disabled = true;
    }

    orderInfoRender = record => (
        <div>
            <Text strong className='orderInfo1'> { `${ record.pickupTimeStart } - ${ record.pickupTimeEnd }` } </Text>
            <Text className='orderInfo2'> { `Order #: ${ record.key }` } </Text>
            <Text className='orderInfo2'> { `User Name: ${ record.orderFrom }` } </Text>
            <Text type='warning' ellipsis={ true } className='orderInfo1'> { `Notes: ${ record.notes }` } </Text>
        </div>
    )

    orderDetailRender = record => (
        <div>
            {
                record.orderList.map(item => (
                    <Card cover={ <img src='./logo192.png' alt={ item.name }/> } className='orderDetailCard'>
                        <Meta title={ item.name } description={ `Quantity: ${ item.quantity }` } />
                        <Button type='dashed' size='small' className='doneCookingBtn' onClick={ this.handleDoneCookingClick } block> Done Cooking! </Button>
                    </Card>
                ))
            }
        </div>
    )

    chargeRender = record => (
        <Statistic title='Price' prefix='$' value={ record.charge } />
    )

    render() {

        return (
            <Layout className='commonLayout'>
                <Header className='commonHeaderLayout'>
                    <HeaderBar title={ this.state.title } username={ this.state.username } />
                    <TruckHeader truckname={ this.state.username } rating={ this.state.rating } />
                </Header>
                <Content className='commonContentLayout'>
                    <div className='commonContentComponentLayout'>
                        <Text strong> Date: </Text>
                        <DatePicker></DatePicker>
                    </div>
                    <div className='commonContentComponentLayout'>
                        <Table dataSource={ orderData } bordered={ true } pagination={ false } showHeader={ false }>
                            <Column key='orderInfo' render={ this.orderInfoRender } />
                            <Column key='orderDetail' render={ this.orderDetailRender } />
                            <Column key='charge' render={ this.chargeRender } />
                        </Table>
                    </div>
                </Content>
            </Layout>
        )
    }
}


export default TruckView;