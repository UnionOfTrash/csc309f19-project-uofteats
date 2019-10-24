import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

class Home extends React.Component {
  render() {
    return (
      <Link to={"./customer/FoodPage"}>
        {" "}
        {/* This element will link the URL path to /queue */}
        <button>Go to the Food Page</button>
      </Link>
    );
  }
}

export default Home;
