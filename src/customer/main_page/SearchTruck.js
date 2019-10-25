import React from "react";


/* The Header Component */
class SearchTruck extends React.Component {
    render() {
        const {placeholder} = this.props;
        return (
            <div id="search-truck">
                <form id="searchField">
                    <input className="inputField" type="text" placeholder={placeholder} />
                    <input
                        className="buttons"
                        type="submit"
                        onClick="search()"
                        onMouseOver="pointTo()"
                        value="Search"
                    />
                </form>
            </div>
        );
    }
}

function search() {
    return 0
}

function pointTo() {
    return 0
}

export default SearchTruck;