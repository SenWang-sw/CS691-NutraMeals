import { useState} from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
	Typography,
    Paper,
    Container,
    Grid,
    TextField,
} from "@material-ui/core";
import logo from "../../assets/logo.png";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [enteredUsernameIsValid, setenteredUsernameIsValid] = useState(true);
  const [enteredPasswordIsValid, setEnteredPasswordIsValid] = useState(true);
  const navigate = useNavigate();

  function login(loginDetails) {
    console.log(process.env.REACT_APP_LOGIN);
    axios
      .post(process.env.REACT_APP_LOGIN, loginDetails)
      .then((response, body) => {
        console.log(response.data);
        if (response.status === 200 && response.data !== null) {
          var user = response.data;
          localStorage.setItem("logUserName", user.userName);
          localStorage.setItem("logUser",user.firstName + " "+user.lastName);          
          navigate("/homepage");
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(email, password);
    if (username === "") {
      setenteredUsernameIsValid(false);
      return;
    }
    setenteredUsernameIsValid(true);

    if (password === "") {
      setEnteredPasswordIsValid(false);
      return;
    }
    setEnteredPasswordIsValid(true);
    const loginDetails = {
      userName: username,
      password: password,
    };
    // setUsername("");
    // setPassword("");
    console.log(loginDetails);
    return login(loginDetails);
  };

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="initialheader">
        <div className="logoNutraMeals"> 
          <a href="#home">
            <img src={logo} alt=""></img>
          </a>
        </div>
      </div>
      <div className="loginBox" >
          <Paper elevation={5} color="primary.main">
          <Container maxWidth="md" className="formContainer">
                  <Grid container  direction="column" justifyContent="center" spacing={5} className="login-form">
                          <Grid item>
                          <Typography component="h1" variant="h5" style={{ color: "black" }}>
                              Sign in
                          </Typography>
                          </Grid>
                          <Grid item>
                              <TextField
                                      required
                                      label="User name"
                                      variant="outlined"
                                      fullWidth
                                      onChange={usernameChangeHandler}
                                      value={username}
                                  />
                          {!enteredUsernameIsValid && <p>Username field cannot be empty.</p>}
                          </Grid>
                          <Grid item>
                              <TextField
                                      required
                                      label="Password"
                                      variant="outlined"
                                      type ="password"
                                      fullWidth
                                      onChange={passwordChangeHandler}
                                      value={password}
                                  />
                          {!enteredPasswordIsValid && <p>Password cannot be empty.</p>}
                          </Grid>
                          <Grid item>
                              <button className="btn-login">
                                      Submit
                              </button>
                          </Grid>
                      
                  </Grid>
          </Container> 
          </Paper>
      </div>
      </form>
  );
}
export default Login;
