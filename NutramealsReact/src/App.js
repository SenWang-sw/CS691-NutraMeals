import "./App.css";
// import HomePageHeader from "./components/HomePage/HomePageHeader";
import "./assets/vendor/animate.css/animate.min.css";
import "./assets/vendor/aos/aos.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";

import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import HomePage from "./components/HomePage/HomePage";
import LoggedInPage from "./components/HomePage/LoggedInPage";
import Register from "./components/Login/Register";
import AccountSummary from "./components/AccountSummary/AccountSummary";
import Error from "./components/error";
import SearchFoodItem from "./components/Search/SearchFoodItem";
import RestaurantList from "./components/Search/RestaurantList";
import Checkout from "./components/Order/Checkout";
import OrderHistory from "./components/Order/OrderHistory";
import Help from "./components/help";
import Advertisement from "./components/HomePage/Advertisement";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homepage" element={<LoggedInPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signOut" element={<HomePage />} />
        <Route path="/accountSummary" element={<AccountSummary />} />
        <Route path="/errorPage" element={<Error />} />
        <Route path="/searchFoodItem" element={<SearchFoodItem />} />
        <Route path="/restaurantList" element={<RestaurantList />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orderHistory" element={<OrderHistory />} />
        <Route path="/help" element={<Help />} />
        <Route path="/addAdvertisement" element={<Advertisement />} />
      </Routes>
    </div>
  );
}

export default App;
