
import React, {Fragment,Component} from "react";
import * as core from "@material-ui/core";
import axios from "axios";

class Restaurant extends Component{
    state ={
        restaurant : {
            restaurantName : "",
            email : "",
            phone : "",
            addressLine1 : "",
            addressLine2 : "",
            city : "",
            state : "",
            zipCode : "",
        },
        restaurantDetails :{
            restaurantName : "",
        },
    }

    componentDidMount(){
        console.log(this.props.location.state);
        if (this.props.location.state) {
            var restaurantDetails = this.props.location.state.restaurantDetails;
            console.log(restaurantDetails);
            axios
            .post(" http://localhost:8080/searchRestaurant", restaurantDetails
            )
            .then((response,body) => {
                if(response.data !== null){
                    this.setState({
                        restaurant : response.data,
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
    }
    render(){
        return(
            <div>
                <Fragment>
                    <core.Container maxWidth="lg" className="messageContainer" style={{ position: 'absolute',top: '25%',left: '6%'}}>
                            <core.Paper
                                    elevation={5}
                                    className="mainContainer"
                                    color="primary.main">
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
                                                    >{this.state.restaurant.restaurantName}
                                                    </core.Typography>}
                                                    secondary={
                                                        <Fragment>
                                                        <core.Typography
                                                            sx={{ display: 'inline' }}
                                                            component="span"
                                                            variant="body2"
                                                            color="primary"
                                                        >
                                                        {this.state.restaurant.email} 
                                                        </core.Typography>
                                                        <br/>
                                                        <core.Typography
                                                            sx={{ display: 'inline' }}
                                                            component="span"
                                                            variant="body2"
                                                            color="primary"
                                                        >
                                                        {this.state.restaurant.phone}
                                                        </core.Typography>
                                                        <br/>
                                                        <core.Typography
                                                            sx={{ display: 'inline' }}
                                                            component="span"
                                                            variant="body2"
                                                            color="primary"
                                                        >
                                                        {this.state.restaurant.addressLine1} {this.state.restaurant.addressLine2},{this.state.restaurant.city},{this.state.restaurant.state}-{this.state.restaurant.zipCode}
                                                        </core.Typography>
                                                        </Fragment>
                                                    }
                                                    />
                                                </core.ListItem>
                                                </core.List>
                                                </div>
                                            </div>
                                    </core.Container>
                                
                                    <core.Container maxWidth="lg" className="messageContainer">
                                        <div className="flexBoxContainer">
                                            <div className="memberInfoContainer">
                                                <core.List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                                                <core.ListItem alignItems="flex-start">
                                                    <core.ListItemAvatar>
                                                    <core.Avatar alt="Restaurant" src="./foodIcon.png"/>
                                                    </core.ListItemAvatar>
                                                    <core.ListItemText
                                                    primary={<core.Typography
                                                        sx={{ display: 'inline'}}
                                                        color="secondary"
                                                    >Veggie Wrap
                                                    </core.Typography>}
                                                    secondary={
                                                        <Fragment>
                                                        <core.Typography
                                                            sx={{ display: 'inline' }}
                                                            component="span"
                                                            variant="body2"
                                                            color="primary"
                                                        >
                                                        $10 Delivery Fee
                                                        </core.Typography>
                                                        </Fragment>
                                                    }
                                                    />
                                                </core.ListItem>
                                                </core.List>
                                                </div>
                                            </div>
                                            <div className="flexBoxContainer">
                                            <div className="memberInfoContainer">
                                                <core.List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                                                <core.ListItem alignItems="flex-start">
                                                    <core.ListItemAvatar>
                                                    <core.Avatar alt="Restaurant" src="./foodIcon.png"/>
                                                    </core.ListItemAvatar>
                                                    <core.ListItemText
                                                    primary={<core.Typography
                                                        sx={{ display: 'inline'}}
                                                        color="secondary"
                                                    >Veggie Fried Rice
                                                    </core.Typography>}
                                                    secondary={
                                                        <Fragment>
                                                        <core.Typography
                                                            sx={{ display: 'inline' }}
                                                            component="span"
                                                            variant="body2"
                                                            color="primary"
                                                        >
                                                        $7 Delivery Fee
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
                            </core.Container>     
						</Fragment>
            </div>
        );
    }

}

export default Restaurant;