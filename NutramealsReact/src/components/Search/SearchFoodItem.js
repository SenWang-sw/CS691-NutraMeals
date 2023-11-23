import { useState} from "react";
import { useLocation,useNavigate } from "react-router-dom";
import { restrauntNames } from "./RestaurantDetails";
import "./RestrauntList.css";

function SearchFoodItem(props) {
  
    const location = useLocation();
    const navigate = useNavigate();
    const [totalItems,setTotalItems] = useState(0);
    const [totalCost,setTotalCost] = useState(0);
    const restaurant = location.state;
    const orderDetails = {
      restaurant: restaurant,
      totalItems : totalItems,
      totalCost : totalCost
    };
    var image = "";
    var rating = "";
    for (const restrauntName of restrauntNames){ 
        if(restrauntName.name === restaurant.restaurantName){
            image = restrauntName.image;
            rating = restrauntName.rating;
        }
    }

    function onAddCart(){
      setTotalItems(totalItems+1);
      setTotalCost(restaurant.foodItemCost+totalCost);
    }

    function onContinue(){
      navigate("/checkout",{state : orderDetails});
    }
    return (
    <div className="container">
      <div className="fgrid-container">
        <div className="item-container">
            <img className="rimage" alt="img" src={image}></img>
            <h6>Rating: {rating + "/ 5"}</h6>
            <h6>
                {restaurant.addressLine1}, {restaurant.addressLine2}, {restaurant.state},{" "}
                {restaurant.zipCode}
            </h6>
            <h6>{restaurant.phone}</h6>
              <h6>{restaurant.email}</h6>
              <br></br>
            <div className="fitem-container">
              <img className="fimage" alt="img" src="https://eatplant-based.com/wp-content/uploads/2014/12/Veggie-Wraps.jpg"></img>
              <div className="foodItem">
                <h5>{restaurant.foodItemName}</h5>
                <h5>${restaurant.foodItemCost} </h5>
                <h5>{restaurant.foodType}</h5>
                <button className="btn1 btn1-danger animated fadeInUp scrollto" onClick={onAddCart}>Add to cart</button>
              </div>
            </div>
          </div>
      </div>

      {/* {showCart && <div className="offcanvas offcanvas-bottom" tabIndex="-1" id="offcanvasBottom">
            <div className="offcanvas-header">
              <h3 className="offcanvas-title" id="offcanvasBottomLabel">Your Orders</h3>
              <div><button type="button" id="close" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button></div>
            </div><hr/>
            <div className="offcanvas-body small">
              <table className="table"> 
                <tbody>
                <tr>
                    <td className="h5"><span><i className={`bi bi-circle-fill ${restaurant.foodType==="Vegeterian"? "greenColor" : "redColor"}`}></i></span>{restaurant.foodItemName}</td>
                    <td>
                        <div className="btn-group btn-group-sm">
                    <button className="btn btn-danger">-</button>
                    <button className="btn btn-danger">1</button>
                    <button className="btn btn-danger">+</button>
                    </div>
                    </td>
                    <td>&#8377;{1*restaurant.foodItemCost}</td>
                </tr>
                
                </tbody>
                </table>
          </div>     
      </div> } */}

    <div className="cartNav bg-body p-2 text-dark border-top">
              <div className="container-cart p-2 d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-center">
                      <button className="btn1 btn1-outline-danger" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom"><i className="bi bi-chevron-double-up text-dark"></i></button>
                <div className="h4">{`Your Orders (${totalItems})`}</div>
                <div className="h4">Subtotal:{' '}&#36;{totalCost}</div>
                <div className="d-inline-flex">
                <button type="button" id="clrCart" className="btn1 btn1-outline-danger invisible me-2" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasBottom">Clear Cart</button>
                <button type="button" className="btn1 btn1-danger" onClick={onContinue}>Continue</button>       
                </div>
              </div>
              </div>
      </div>
    </div>
  );
}
export default SearchFoodItem;