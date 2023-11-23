import React, {Component} from "react";
import {Route, Switch} from "react-router";
import {HashRouter} from "react-router-dom";
import Home from "./home";
import Login from "./login";
import Register from "./register";
import RestaurantList from "./restaurantList";
import Restaurant from "./restaurant";
import AddRestaurant from "./addRestaurant";
import Header from "./header";
import Help from "./help";

class RouteJS extends Component{
    render(){
        return(
            <HashRouter>
                <div>
                <Header/>
                </div>
                <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/help" component={Help} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/listRestaurants" component={RestaurantList} />
                    <Route exact path="/searchRestaurant" component={Restaurant} />
                    <Route exact path="/addRestaurant" component={AddRestaurant} />
                </Switch>
                </div>
            </HashRouter>
        );
    }
}

export default RouteJS;