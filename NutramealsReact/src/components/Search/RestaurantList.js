import { restrauntNames } from "./RestaurantDetails";
import "./RestrauntList.css";

function RestaurantList(props) {
  return (
    <div className="container">
      <div className="grid-container">
        {restrauntNames.map((restaurant, index) => (
          <div key={index} className="item-container">
            <img className="image" alt="img" src={restaurant.image}></img>
            <div className="content">
              <div>
                <h5>Rating: {restaurant.rating + "/ 5"}</h5>
              </div>
              <h4>Location :</h4>
              <h5>
                {restaurant.street1}, {restaurant.street2}, {restaurant.state},{" "}
                {restaurant.zipCode}
              </h5>
              <br></br>
              <h4>Contact :</h4>
              <h5>{restaurant.phone}</h5>
              <h5>{restaurant.email}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default RestaurantList;
