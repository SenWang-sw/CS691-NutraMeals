import React, { Fragment, Component } from "react";
import * as core from "@material-ui/core";
import axios from "axios";
import './restaurantList.css';

class RestaurantList extends Component{

    state = {
        restaurants : [],
    }
    componentDidMount(){
        axios
        .get(" http://localhost:8080/restaurantList "
        )
        .then((response,body) => {
            this.setState({
                redirect : true,
            });
            if(response.data!=null){
                console.log(response.data);
                this.setState({
                    restaurants : response["data"],
                });
            }
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
    }
    render(){
        return(
            <Fragment>
                <core.Container className="messageContainer" style={{ position: 'absolute',top: '10%',left: '6%'}}>
                <div  className="restaurantsDiv">
                    {this.state.restaurants.map((restaurant, index) => (
                            <core.Paper
                                    elevation={5}
                                    className="mainContainer"
                                    color="primary.main"
                                    key={index}>
                                    <core.Container maxWidth="lg" className="messageContainer">
                                        <div className="flexBoxContainer">
                                            <div className="memberInfoContainer">
                                                <core.List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                                                <core.ListItem alignItems="flex-start">
                                                    <core.ListItemAvatar>
                                                    <core.Avatar alt="Restaurant" src="./restaurant.png"/>
                                                    </core.ListItemAvatar>
                                                    <core.ListItemText
                                                    primary={<core.Typography
                                                        sx={{ display: 'inline'}}
                                                        color="secondary"
                                                    >{restaurant.restaurantName}
                                                    </core.Typography>}
                                                    secondary={
                                                        <Fragment>
                                                        <core.Typography
                                                            sx={{ display: 'inline' }}
                                                            component="span"
                                                            variant="body2"
                                                            color="primary"
                                                        >
                                                        {restaurant.email} 
                                                        </core.Typography>
                                                        <br/>
                                                        <core.Typography
                                                            sx={{ display: 'inline' }}
                                                            component="span"
                                                            variant="body2"
                                                            color="primary"
                                                        >
                                                        {restaurant.phone}
                                                        </core.Typography>
                                                        <br/>
                                                        <core.Typography
                                                            sx={{ display: 'inline' }}
                                                            component="span"
                                                            variant="body2"
                                                            color="primary"
                                                        >
                                                        {restaurant.addressLine1} {restaurant.addressLine2},{restaurant.city},{restaurant.state}-{restaurant.zipCode}
                                                        </core.Typography>
                                                        </Fragment>
                                                    }
                                                    />
                                                </core.ListItem>
                                                </core.List>
                                                </div>
                                            </div>
                                    </core.Container>
                                </core.Paper>
                            
                        ))}
                </div>
                </core.Container>
            </Fragment>
        );
    }
}

export default RestaurantList;