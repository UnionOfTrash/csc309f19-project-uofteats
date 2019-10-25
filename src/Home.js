import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Link to={"./customer/FoodPage"}>
          {" "}
          {/* This element will link the URL path to /queue */}
          <button>Go to Food Page</button>
        </Link>
        <Link to={"./customer/CustomerMain"}>
          <button>Go to Main Page</button>
        </Link>
      </div>
    );
  }
}

export default Home;
