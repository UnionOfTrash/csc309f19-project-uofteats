import React from "react";
import { Descriptions } from 'antd';


class UserInfo extends React.Component {

    render() {
        return (
            <div className='info-table'>
                <Descriptions title="User Info">
                    <Descriptions.Item label="utorid">{this.props.utorid}</Descriptions.Item>
                    <Descriptions.Item label="Name">{this.props.name}</Descriptions.Item>
                    <Descriptions.Item label="Phone">{this.props.phone}</Descriptions.Item>
                    <Descriptions.Item label="Email">{this.props.email}</Descriptions.Item>
                    <Descriptions.Item label="Address">{this.props.address}</Descriptions.Item>
                </Descriptions>
            </div>
        )
    }
}

export default UserInfo