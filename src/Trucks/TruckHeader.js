import React from "react";

import "antd/dist/antd.css";
import "../commons/commons.css";
import "./trucks.css";

import { PageHeader, Descriptions } from "antd";


class TruckHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            truckname: this.props.truckname,
            rating: this.props.rating,
        };
    }

    render() {

        return (
            <PageHeader ghost={ false } title={ this.state.truckname } className='trucksHeader'>
                <Descriptions size='small' column={ 1 }>
                    <Descriptions.Item label='Rating'> { `${ this.state.rating } ★` } </Descriptions.Item>
                </Descriptions>
            </PageHeader>
        );
    }
}


export default TruckHeader;