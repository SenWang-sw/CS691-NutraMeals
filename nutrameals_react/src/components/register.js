import React, {Component, Fragment} from "react";
import {
	Typography,
    Paper,
    Container,
    Grid,
    TextField,
    Button,
} from "@material-ui/core";
import axios from "axios";
import './register.css';

const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  
const validPhoneRegex = RegExp(/^[0-9\b]+$/);

class Register extends Component{
    
    state = {
        loginDetails:{
            userName : "",
            password : "",
            firstName : "",
            lastName : "",
            email : "",
            phone : "",
            addressLine1 : "",
            addressLine2 : "",
            zipCode :"",
            state : "",
            city : "",
        },
        errors: {
            userName: "",
            password: "",
            email: "",
            phone: "",
            addressLine1: "",
            addressLine2: "",
            zipCode: "",
            state: "",
            city: "",
        },
        redirect: false,
    };

    onRegister = () => {
        var loginDetails = this.state.loginDetails;
        axios
        .post(" http://localhost:8080/register", loginDetails
        )
        .then((response,body) => {
            if(response.status===200 && response.data === "User inserted successfully"){
                this.props.history.push("/");
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
    changeHandlerUserName = (event) => {
		event.persist();
        let errors = this.state.errors;

        errors.userName =
        event.target.value.length < 5 ? "User Name must be at least 5 characters long!" : "";

		this.setState((prevState) => ({
			loginDetails: {...prevState.loginDetails, userName: event.target.value},
		}));
	};
    changeHandlerPassword = (event) => {
		event.persist();

        let errors = this.state.errors;

        errors.password =
            event.target.value.length < 8 ? "Password must be at least 8 characters long!" : "";

		this.setState((prevState) => ({
			loginDetails: {...prevState.loginDetails, password: event.target.value},
		}));
	};
    changeHandlerFName = (event) => {
		event.persist();
		this.setState((prevState) => ({
			loginDetails: {...prevState.loginDetails, firstName: event.target.value},
		}));
	};
	changeHandlerLName = (event) => {
		event.persist();
		this.setState((prevState) => ({
			loginDetails: {...prevState.loginDetails, lastName: event.target.value},
		}));
	};
	changeHandlerEmail = (event) => {
		event.persist();
        let errors = this.state.errors;

        errors.email = validEmailRegex.test(event.target.value) ? "" : "Email is not valid!";
		this.setState((prevState) => ({
			loginDetails: {...prevState.loginDetails, email: event.target.value},
		}));
	};
    changeHandlerPhone = (event) => {
		event.persist();
        let errors = this.state.errors;

        errors.phone = validPhoneRegex.test(event.target.value) ? "" : "Phone is not valid!";

		this.setState((prevState) => ({
			loginDetails: {...prevState.loginDetails, phone: event.target.value},
		}));
	};
	changeHandlerAddressLine1 = (event) => {
		event.persist();

		this.setState((prevState) => ({
			loginDetails: {...prevState.loginDetails, addressLine1: event.target.value},
		}));
	};
    changeHandlerAddressLine2 = (event) => {
		event.persist();

		this.setState((prevState) => ({
			loginDetails: {...prevState.loginDetails, addressLine2: event.target.value},
		}));
	};
	changeHandlerZip = (event) => {
		event.persist();
		var length = event.target.value.length;
		this.setState((prevState) => ({
			loginDetails: {...prevState.loginDetails, zipCode: event.target.value},
		}));

		if (length === 5) {
			fetch(` http://ZiptasticAPI.com/${event.target.value}`)
				.then((res) => res.json())
				.then(
					(result) => {
						this.setState((prevState) => ({
							loginDetails: {
								...prevState.loginDetails,
								city: result.city,
								state: result.state,
							},
						}));
					},
					(error) => {
						this.setState((prevState) => ({
							loginDetails: {
								...prevState.loginDetails,
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
                                        Register
                                    </Typography>
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                                required
                                                id="outlined-full-width"
                                                label="User name"
                                                variant="outlined"
                                                fullWidth
                                                onChange={(value) => this.changeHandlerUserName(value)}
                                            />
                                    </Grid>
                                    {this.state.errors.userName.length > 0 && (
                                        <span className="error">{this.state.errors.userName}</span>
                                    )}
                                    <Grid item>
                                        <TextField
                                                required
                                                id="outlined-full-width"
                                                label="Password"
                                                variant="outlined"
                                                fullWidth
                                                onChange={(value) => this.changeHandlerPassword(value)}
                                            />
                                    </Grid>
                                    {this.state.errors.password.length > 0 && (
                                        <span className="error">{this.state.errors.password}</span>
                                    )}
                                    <Grid item xs>
									<TextField
										required
										id="outlined-full-width"
										label="First Name"
										variant="outlined"
										fullWidth
										onChange={(value) => this.changeHandlerFName(value)}
									/>
                                    </Grid>
                                    <Grid item xs>
                                        <TextField
                                            required
                                            id="outlined-full-width"
                                            label="Last Name"
                                            variant="outlined"
                                            fullWidth
                                            onChange={(value) => this.changeHandlerLName(value)}
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
                                                inputProps={{ maxLength: 10 }}
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
										value={this.state.loginDetails.city}
									/>
								</Grid>
								<Grid item xs>
									<TextField
										id="outlined-full-width"
										label="State"
										variant="filled"
										fullWidth
										disabled
										value={this.state.loginDetails.state}
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
                                                onClick={this.onRegister}>
                                                Submit
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

export default Register;