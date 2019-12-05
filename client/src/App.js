import React from "react";
import "./App.css";

// Import react-router-dom to use the React Router
import { Route, Switch, BrowserRouter } from "react-router-dom";

// Import BS4
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";

// Import Routing Paths
import Home from "./Home";
import Login from "./commons/Login";
import Register from "./commons/Register";
import Reset from "./commons/Reset";
import FoodPage from "./customer/food_page/FoodPage";
import SchedulePage from "./customer/schedule_page/SchedulePage";
import CustomerMain from "./customer/main_page/CustomerMain";
import TruckView from "./Trucks/TruckView";
import Admin from "./admin/Admin";
import UserProfileMain from "./customer/profile_page/UserProfileMain";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/reset" component={Reset} />
            <Route exact path="/FoodPage/:truckId" component={FoodPage} />
            <Route exact path="/SchedulePage" component={SchedulePage} />
            <Route exact path="/CustomerMain" component={CustomerMain} />
            <Route exact path="/t" component={TruckView} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/UserProfileMain" component={UserProfileMain} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
