import { useLocation } from "react-router-dom";
import "./checkout.css";

function Checkout(props) {
    const location = useLocation();
    const orderDetails = location.state;
    return (
        <div className="deliveryInfo d-flex flex-column">
           <div className="beforeh2"></div> 
        <h4 className="delTitle text-primary fw-400 text-center d-flex justify-content-center">
           Thanks For Your Order. We will reach you soon with your delicious food</h4>
       
        <div className="summaryBill d-flex flex-column">
              <div className="orderDetails p-3">
                 <h3>Order Details</h3>
                 <div className="table-responsive">
                 <table className="table-light m-2">
                 <tbody>
    <tr>
      
      <td colSpan="1">Status:</td>
      <td>Delivery Pending</td>
     
    </tr>
    <tr>
      
      <td colSpan="1">Payment Mode:</td>
      <td>Cash</td>
     
    </tr>
    <tr>
      
      <td colSpan="1">Order Time:</td>
      <td>{new Date().toLocaleString()}</td>
     
    </tr>
    </tbody>
        </table>
                 </div>
              </div>
              <div className="orderSummary p-3">
              <h3>Order Summary</h3>

                            <div className="items">
                            <div className="table-responsive">
                  <table className="table-light m-2">
                      
                      <thead>
    <tr>
      <th scope="col">Item Name</th>
      <th scope="col">Item Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Amount</th>
    </tr>
  </thead>
  <tbody>
      <tr>
      
      <td>{orderDetails.restaurant.foodItemName}</td>
      <td>{orderDetails.restaurant.foodItemCost}</td>
      <td>{orderDetails.totalItems}</td>
      <td>{orderDetails.totalCost}</td>
        </tr>
    </tbody>
                  </table>
                  </div><hr/>
                  <div className="d-flex justify-content-between align-items-center p-2">
                      <div>Subtotal</div>
                      <div>&#36;{orderDetails.totalCost}</div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center p-2">
                      <div>Delivery Charges</div>
                      <div>&#36;1.99</div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center p-2 mb-1 totalamt">
                      <div>Total</div>
                      <div>&#36;{orderDetails.totalCost+1.99}</div>
                  </div>
                  </div>
              
              </div>
             </div>
        </div>
    )
}
export default Checkout;