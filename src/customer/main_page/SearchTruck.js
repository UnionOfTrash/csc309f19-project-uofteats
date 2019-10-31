import React from "react";
import { Input } from 'antd';
const { Search } = Input;

/* The Header Component */
class SearchTruck extends React.Component {

    render() {
        return (
            <div id="search-truck">
                <Search
                    placeholder={this.props.placeholder}
                    maxLength={20}
                    onSearch={this.props.onSearch}
                    enterButton
                    allowClear
                />
            </div>
        );
    }

    pointTo() {
        return 0;
    }
}

export default SearchTruck;
