import { Grid, Paper, TextField, Typography } from "@material-ui/core";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../Login/login.css";
import ads from "../Resources/Ads";

function Advertisement() {
  const [name, setName] = useState("");
  const [slogan, setSlogan] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const sloganChangeHandler = (event) => {
    setSlogan(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    ads.push({
      restaurantName: name,
      restaurantSlogan: slogan,
      restaurantDescription: description,
    });

    navigate("/homepage");
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
      <div className="loginBox">
        <Paper elevation={5} color="primary.main">
          <Container maxWidth="md" className="formContainer">
            <Grid
              container
              direction="column"
              justifyContent="center"
              spacing={5}
              className="login-form"
            >
              <Grid item>
                <Typography
                  component="h1"
                  variant="h5"
                  style={{ color: "black" }}
                >
                  Add Advertisement
                </Typography>
              </Grid>
              <Grid item>
                <TextField
                  onChange={nameChangeHandler}
                  value={name}
                  required
                  label="Restaurant Name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item>
                <TextField
                  onChange={sloganChangeHandler}
                  value={slogan}
                  required
                  label="Slogan"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item>
                <TextField
                  onChange={descriptionChangeHandler}
                  value={description}
                  required
                  label="Description/Offers"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item>
                <button className="btn-login">Submit</button>
              </Grid>
            </Grid>
          </Container>
        </Paper>
      </div>
    </form>
  );
}

export default Advertisement;
