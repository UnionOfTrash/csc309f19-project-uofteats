import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

class Home extends React.Component {
    render() {
        return (
            <div>
                {/*<Link to={"./customer/food_page/FoodPage"}>*/}
                {/*    {" "}*/}
                {/*    /!* This element will link the URL path to /queue *!/*/}
                {/*    <button>Go to the Food Page</button>*/}
                {/*</Link>*/}
                <Link to={"./customer/main_page/CustomerMain"}>
                    <button>Go to Main Page</button>
                </Link>
            </div>
        );
    }
}

export default Home;
