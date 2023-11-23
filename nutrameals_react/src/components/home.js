import React, {Component} from "react";
import {NavLink,Link} from "react-router-dom";
import {IconButton,InputAdornment,TextField} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

class Home extends Component{
    state ={
      restaurantDetails :{
        restaurantName : "",
      },
    }

    changeHandlerRestaurantName = (event) => {
      event.persist();
  
      this.setState((prevState) => ({
        restaurantDetails: {...prevState.restaurantDetails, restaurantName: event.target.value},
      }));
    };

    render(){
        return(
            <section id="hero">
        <div
          style={{
            position: "absolute",
            left: "60%",
            top: "40%",
            transform: "translate(-50%, -50%)",
          }}
          className="container position-relative text-center text-lg-center"
          // data-aos="zoom-out"
          data-aos-delay="100"
        >
          <div className="col-lg-8 font-link">
            <h1
              style={{
                fontFamily: "Rancho",
                fontSize: "6.5em",
                marginBottom: "1rem",
              }}
            >
              NutraMeals
            </h1>

            <h2
              style={{
                fontFamily: "Sedgwick Ave Display",
                fontSize: "2em",
                marginBottom: "1rem",
              }}
            >
              Your Healthy Food Delivery Partner
            </h2>

            <TextField
              style={{
                width: "600px",
                height: "50px",
                borderRadius: "20px",
                textAlign: "center",
                background : "white",
                textDecoration : "none",
              }}
              onChange={(value) => this.changeHandlerRestaurantName(value)}
              id="mySearch"
              placeholder="Search for restaurant"
              title="Type in a category"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton component={Link} to={{
                      pathname: "/searchRestaurant",
                      state: {
                        restaurantDetails:{
                          restaurantName : this.state.restaurantDetails.restaurantName,
                        },
                    },
                    }}>
                      <SearchIcon/>
                    </IconButton>
                  </InputAdornment>
                )
              }}
            ></TextField>
            <div className="btns">
              <NavLink className="btn-book animated fadeInUp scrollto"
                    to={{
                      pathname: "/listRestaurants",
                    }}>
                List All Restaurants
              </NavLink>
            </div>
          </div>
        </div>
      </section>
        );
    }
}

export default Home;

