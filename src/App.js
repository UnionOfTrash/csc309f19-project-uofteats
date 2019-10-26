import React from "react";
import "./App.css";

// Import react-router-dom to use the React Router
import { Route, Switch, BrowserRouter } from "react-router-dom";

// Import Routing Paths
import Home from "./Home";
import Login from "./commons/Login";
import Register from "./commons/Register";
import Reset from "./commons/Reset";
import FoodPage from "./customer/food_page/FoodPage";
import CustomerMain from "./customer/main_page/CustomerMain";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/reset' component={Reset} />
            <Route exact path="/customer/food_page/FoodPage" component={FoodPage} />
            <Route exact path="/customer/main_page/CustomerMain" component={CustomerMain}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
