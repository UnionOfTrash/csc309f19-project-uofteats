import React from "react";
import { Input } from 'antd';
const { Search } = Input;

/* The Header Component */
class SearchTruck extends React.Component {

    render() {
        return (
            <Search
                placeholder={this.props.placeholder}
                style={{width: 450, height: 30, textAlign: 'left'}}
                maxLength={20}
                onSearch={this.props.onSearch}
                enterButton
                allowClear
            />
        );
    }

    pointTo() {
        return 0;
    }
}

export default SearchTruck;
