import React from "react";

/* The Header Component */
class SearchTruck extends React.Component {

    render() {
        const {placeholder} = this.props;
        return (
            <div id="search-truck">
                <form id="searchField">
                    <input id="inputField" type="text" placeholder={placeholder} />
                    <input
                        className="buttons"
                        type="submit"
                        onClick={this.search}
                        onMouseOver={this.pointTo}
                        value="Search"
                    />
                </form>
            </div>
        );
    }

    search() {
        return 0;
    }

    pointTo() {
        return 0;
    }
}


export default SearchTruck;
