import { IconButton, InputAdornment, Link, TextField } from "@material-ui/core";
import "./styles/HomePageBody.css";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import { useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ads from "../Resources/Ads";

function HomePageBody(props) {
  const [foodItem, setFoodItem] = useState("");
  const navigate = useNavigate();

  const foodItemChangeHandler = (event) => {
    setFoodItem(event.target.value);
  };

  const onSearchFoodItem = (event) => {
    const restautantDetails = {
      foodItem: foodItem,
    };
    axios
      .post(process.env.REACT_APP_SEARCH, restautantDetails)
      .then((response, body) => {
        console.log(response.data);
        if (response.status === 200 && response.data !== null) {
          navigate("/searchFoodItem",{state : response.data});
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
  const onListAllRestaurants = (event) => {
    navigate("/restaurantList");
  };
  /*const [restaurantname, setrestaurantName] = useState("");
  //   state = {
  //     restaurantDetails: {
  //       restaurantName: "",
  //     },
  //   };

  const changeHandlerRestaurantName = (event) => {
    event.persist();
    setrestaurantName(event.target.value);
    // this.setState((prevState) => ({
    //   restaurantDetails: {
    //     ...prevState.restaurantDetails,
    //     restaurantName: event.target.value,
    //   },
    // }));
  };*/
  return (
    <div className="HomePageBody">
      {ads.length !== 0 && (
        <div className="ads">
          <h4>{ads[0].restaurantName}</h4>
          <h4>{ads[0].restaurantSlogan}</h4>
          <h4>{ads[0].restaurantDescription}</h4>
        </div>
      )}
      <div>
        <h1>NutraMeals</h1>
      </div>
      <div>
        <h2>Your Healthy Food Delivery Partner</h2>
      </div>
      <div className="textfield-div">
        <TextField
          className="textfield"
          onChange={foodItemChangeHandler}
          id="mySearch"
          variant="outlined"
          size="small"
          placeholder="Search for Food Item"
          title="Type in a category"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  component={Link}
                  onClick={(e) => onSearchFoodItem(e)}
                  >
                  <SearchIcon />
                </IconButton>
               </InputAdornment>
            ),
          }}
        ></TextField>
      </div>
      <div className="button-div">
      <button className="btn-rest animated fadeInUp scrollto" onClick={onListAllRestaurants}>List All Restaurants</button>
      </div>
    </div>
  );
}
export default HomePageBody;
