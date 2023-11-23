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
import './login.css';

const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

class Login extends Component{

    constructor(props) {
        super(props); 
        console.log(props); 
        this.onLogin = this.onLogin.bind(this);
    }
    
    state = {
        loginDetails:{
            userName : "",
            password : "",
        },
        errors: {
            userName: "",
            password: "",
        },
    };
    onLogin = (event) => {
        var loginDetails = this.state.loginDetails;
        axios
        .post(" http://localhost:8082/login", loginDetails
        )
        .then((response,body) => {
            this.setState({
                redirect : true,
            });
            if(response.status===200 && response.data === "Login Successful"){
                localStorage.setItem('userData',this.state.loginDetails.userName);
                this.props.history.push("/");
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
    render(){
        return(
            <Fragment>
                <div className="loginBox" >
                    <Paper elevation={5} color="primary.main">
                    <Container maxWidth="md" className="formContainer">
                            <Grid container  direction="column" justifyContent="center" spacing={5} className="login-form">
                                    <Grid item>
                                    <Typography component="h1" variant="h5">
                                        Sign in
                                    </Typography>
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                                required
                                                label="User name"
                                                variant="outlined"
                                                fullWidth
                                                onChange={(value) => this.changeHandlerUserName(value)}
                                            />
                                    {this.state.errors.userName.length > 0 && (
                                        <span className="error">{this.state.errors.userName}</span>
                                    )}
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                                required
                                                label="Password"
                                                variant="outlined"
                                                type ="password"
                                                fullWidth
                                                onChange={(value) => this.changeHandlerPassword(value)}
                                            />
                                    {this.state.errors.password.length > 0 && (
                                        <span className="error">{this.state.errors.password}</span>
                                    )}
                                    </Grid>
                                    <Grid item>
                                        <Button
                                                variant="contained"
                                                size="large"
                                                color="primary"
                                                fullWidth
                                                onClick={e=>this.onLogin(e)}>
                                                Submit
                                        </Button>
                                    </Grid>
                                
                            </Grid>
                    </Container> 
                    </Paper>
            </div>
            </Fragment>
        );
    }
}

export default Login;