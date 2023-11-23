import "./OrderHistory.css";
import orderHistory from "../Resources/OrderHistory";

function OrderHistory() {
  return (
    <div className="wrapper">
      {/* <div className="navBar"></div> */}
      <div className="body">
        <h3>ORDERS</h3>

        {orderHistory.map((orders, index) => (
          <div className="card">
            <div className="card-heading">
              <h5>{orders.restaurantName}</h5>
              <h4>&#8250;</h4>
            </div>
            <div className="card-body">
              <div className="order-details">
                <h6>{orders.cost}|</h6>
                <h6>{orders.day}|</h6>
                <h6>{orders.date}|</h6>
                <h6>{orders.quantity}</h6>
              </div>
              <div className="order-summary">
                <h5>{orders.orderName}</h5>
                <button className="receipt">View Receipt</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderHistory;
