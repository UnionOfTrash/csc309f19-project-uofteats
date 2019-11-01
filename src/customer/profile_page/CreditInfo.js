import React from 'react'
import { Descriptions } from 'antd';
import { Tooltip } from 'antd';

class CreditInfo extends React.Component {

    render() {
        return (
            <div className='info-table'>
                <Descriptions title="Credit Info">
                    <Descriptions.Item label="credit">
                        <Tooltip title="Lose credit if you do not pickup your order">
                            {this.props.creditScore}
                        </Tooltip>
                    </Descriptions.Item>
                </Descriptions>
            </div>
        )
    }
}

export default CreditInfo
