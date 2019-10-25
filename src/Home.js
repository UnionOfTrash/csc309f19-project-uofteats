import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
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
                <Link to="/login">
                    <Button color='primary'> Please login Here</Button>
                </Link>
            </div>
        );
    }
}

export default Home;
