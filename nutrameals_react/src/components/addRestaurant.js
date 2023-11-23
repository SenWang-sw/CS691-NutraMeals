import React, {Component,Fragment,useEffect} from "react";
import {
	Typography,
    Paper,
    Container,
    Grid,
    TextField,
    Button,
} from "@material-ui/core";
import axios from "axios";
import "./addRestaurant";

const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  
const validPhoneRegex = RegExp(/^[0-9\b]+$/);

class AddRestaurant extends Component {

    state = {
        restaurantDetails:{
            restaurantName : "",
            email : "",
            phone : "",
            addressLine1 : "",
            addressLine2 : "",
            zipCode :"",
            state : "",
            city : "",
            latitude : "",
            longitude : "",
        },
        errors: {
            restaurantName: "",
            email: "",
            phone: "",
            addressLine1: "",
            addressLine2: "",
            zipCode: "",
            state: "",
            city: "",
            latitude: "",
            longitude: "",
          },
        redirect: false,
    };
    onAddRestaurant = () => {
        var restaurantDetails = this.state.restaurantDetails;
        axios
        .post(" http://localhost:8080/addRestaurant", restaurantDetails
        )
        .then((response,body) => {
            if(response.status===200 && response.data === "Restaurant added successfully"){
                this.props.history.push("/listRestaurants");
            }
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
		
	};
    changeHandlerRestaurantName = (event) => {
		event.persist();

		this.setState((prevState) => ({
			restaurantDetails: {...prevState.restaurantDetails, restaurantName: event.target.value},
		}));
	};
   changeHandlerEmail = (event) => {
		event.persist();
        let errors = this.state.errors;

        errors.email = validEmailRegex.test(event.target.value) ? "" : "Email is not valid!";
		this.setState((prevState) => ({
			restaurantDetails: {...prevState.restaurantDetails, email: event.target.value},
		}));
	};
    changeHandlerPhone = (event) => {
		event.persist();
        let errors = this.state.errors;
    
        errors.phone = validPhoneRegex.test(event.target.value) ? "" : "Phone is not valid!";
		this.setState((prevState) => ({
			restaurantDetails: {...prevState.restaurantDetails, phone: event.target.value},
		}));
	};
	changeHandlerAddressLine1 = (event) => {
		event.persist();

		this.setState((prevState) => ({
			restaurantDetails: {...prevState.restaurantDetails, addressLine1: event.target.value},
		}));
	};
    changeHandlerAddressLine2 = (event) => {
		event.persist();

		this.setState((prevState) => ({
			restaurantDetails: {...prevState.restaurantDetails, addressLine2: event.target.value},
		}));
	};
	changeHandlerZip = (event) => {
		event.persist();
		var length = event.target.value.length;
		this.setState((prevState) => ({
			restaurantDetails: {...prevState.restaurantDetails, zipCode: event.target.value},
		}));

		if (length === 5) {
			fetch(` http://ZiptasticAPI.com/${event.target.value}`)
				.then((res) => res.json())
				.then(
					(result) => {
						this.setState((prevState) => ({
							restaurantDetails: {
								...prevState.restaurantDetails,
								city: result.city,
								state: result.state,
							},
						}));
					},
					(error) => {
						this.setState((prevState) => ({
							restaurantDetails: {
								...prevState.restaurantDetails,
								zipCode: error,
							},
						}));
						console.log("Error" + error);
					},
				);
		}
	};

    render(){
        return(
            <Fragment>
                <div className="registerBox" >
                    <Paper elevation={5} color="primary.main">
                    <Container maxWidth="md" className="formContainer">
                            <Grid container  direction="column" justifyContent="center" spacing={5} className="login-form">
                                    <Grid item>
                                    <Typography component="h1" variant="h5">
                                        Add Restaurant
                                    </Typography>
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                                required
                                                id="outlined-full-width"
                                                label="Restaurant name"
                                                variant="outlined"
                                                fullWidth
                                                onChange={(value) => this.changeHandlerRestaurantName(value)}
                                            />
                                    </Grid>
                                    <Grid container spacing={3} item>
                                        <Grid item sm>
                                            <TextField
                                                required
                                                id="outlined-full-width"
                                                label="Email"
                                                variant="outlined"
                                                fullWidth
                                                onChange={(value) => this.changeHandlerEmail(value)}
                                            />
                                        {this.state.errors.email.length > 0 && (
                                        <span className="error">{this.state.errors.email}</span>
                                        )}
                                        </Grid>
                                        <Grid item sm>
                                            <TextField
                                                required
                                                id="outlined-full-width"
                                                label="Phone"
                                                variant="outlined"
                                                fullWidth
                                                onChange={(value) => this.changeHandlerPhone(value)}
                                            />
                                        {this.state.errors.phone.length > 0 && (
                                        <span className="error">{this.state.errors.phone}</span>
                                        )}
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={3} item>
                                    <Grid item sm>
                                        <TextField
                                            required
                                            id="outlined-full-width"
                                            label="Address Line 1"
                                            variant="outlined"
                                            fullWidth
                                            onChange={(value) => this.changeHandlerAddressLine1(value)}
                                        />
                                    </Grid>
                                    <Grid item sm>
                                        <TextField
                                            required
                                            id="outlined-full-width"
                                            label="Address Line 2"
                                            variant="outlined"
                                            fullWidth
                                            onChange={(value) => this.changeHandlerAddressLine2(value)}
                                        />
                                    </Grid>
								</Grid>
							<Grid container spacing={3} item>
								<Grid item xs={3}>
									<TextField
										id="outlined-full-width"
										label="City"
										variant="filled"
										disabled
										value={this.state.restaurantDetails.city}
									/>
								</Grid>
								<Grid item xs>
									<TextField
										id="outlined-full-width"
										label="State"
										variant="filled"
										fullWidth
										disabled
										value={this.state.restaurantDetails.state}
									/>
								</Grid>
								<Grid item xs>
									<TextField
										required
										id="outlined-full-width"
										label="Zip Code"
										variant="outlined"
                                        inputProps={{ maxLength: 5 }}
										fullWidth
										onChange={(value) => this.changeHandlerZip(value)}
									/>
                                    {this.state.errors.zipCode.length > 0 && (
                                    <span className="error">{this.state.errors.zipCode}</span>
                                    )}
								</Grid>
                                    <Grid item>
                                        <Button
                                                variant="contained"
                                                size="large"
                                                color="primary"
                                                fullWidth
                                                onClick={this.onAddRestaurant}>
                                                Add
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                    </Container> 
                    </Paper>
            </div>
            </Fragment>
        );
    }

}

export default AddRestaurant;