import React from "react";
import "./App.css";

// Import react-router-dom to use the React Router
import { Route, Switch, BrowserRouter } from "react-router-dom";

// Import Routing Paths
import Home from "./Home";
import FoodPage from "./customer/FoodPage";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/customer/FoodPage" component={FoodPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
