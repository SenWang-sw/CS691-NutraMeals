import React from "react";
import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import Orders from "../../assets/img/orders.png";
import Offers from "../../assets/img/offers.png";
import Help from "../../assets/img/help.png";
import Wallet from "../../assets/img/wallet.png";
import "./styles/Sidebar.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SideBar(props) {
  const navigate = useNavigate();

  function accountSummary() {
    var loginDetails = {
      userName: localStorage.getItem("logUserName"),
      password: "",
    };

    axios
      .post(process.env.REACT_APP_ACCOUNT, loginDetails)
      .then((response, body) => {
        if (response.status === 200) {
          console.log(response.data);
          navigate("/accountSummary", { state: response.data });
        }
      })
      .catch(function (error) {
        // handle error
        navigate("/errorPage");
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }
  const signOut = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <Menu {...props}>
      <div>
        <div className="image">
          <img
            className="personImage"
            alt=""
            role="presentation"
            src="https://d1w2poirtb3as9.cloudfront.net/default.jpeg?Expires=1647860504&amp;Signature=cmvfZYok8E3glBGSAvswJ9k6NPE5s9Boaq2RTNXGWApq8HyS7z3NTPj1f8AR4ew5HqaEn6eTuwER9tfMOU-khaHB8nEGRVT47SAduduDRgD1bkMd3cdSgrTrgWsPZxVVQyU6M0kOl7zZQi3pAry6uXCkeVteUzLWYwSa8ChZ7kCgaRRvETtWG5ksWu6wAtgBpDPlPteQ90wfKlTcWUjLOjm2PYIYkLy0hr5cubTYF4yX9siJyECw1bHuHF00CIVVWxedMKCnExM-9oAybM0C00UlGFJ05ddIvxD0KLwJrigsNPc08x3~17kjk3kgqz~wXklemDhUxBEm6q2ef2tTVQ__&amp;Key-Pair-Id=APKAJSDH2OZQQSA64LQQ"
          />
          <div className="spacer"></div>
          <div className="spacer"></div>
          <div>
            <div className="personName">{localStorage.getItem("logUser")}</div>
            <NavLink
              className="nav-link menuList"
              to={{}}
              replace
              onClick={accountSummary}
            >
              View account
            </NavLink>
          </div>
        </div>
      </div>
      <a
        href="#orders"
        className="nav-link"
        onClick={() => navigate("/orderHistory")}
      >
        <hr className="lineBreak"></hr>
        <div className="menuIcons">
          <img src={Orders} alt="menu" className="iconImage"></img>
        </div>
        <div className="menuText">Orders</div>
      </a>
      <a href="#wallet" className="nav-link">
        <div className="menuIcons">
          <img src={Wallet} alt="menu" className="iconImage"></img>
        </div>
        <div className="menuText">Wallet</div>
      </a>
      <a href="#offers" className="nav-link">
        <div className="menuIcons">
          <img src={Offers} alt="menu" className="iconImage"></img>
        </div>
        <div className="menuText">Offers</div>
      </a>
      <NavLink
        className="nav-link"
        to={{
          pathname: "/help",
        }}
      >
        <div className="menuIcons">
          <img src={Help} alt="menu" className="iconImage"></img>
        </div>
        <div className="menuText">Help</div>
      </NavLink>
      <NavLink className="nav-link menuList" to={{}} replace onClick={signOut}>
        Sign Out
      </NavLink>
      <a href="#busaccount" className="nav-link">
        <hr className="lineBreak"></hr>
        <div className="menuList">Create Business Account</div>
      </a>
      <NavLink
        className="nav-link menuList"
        to={{
          pathname: "/addRestaurant",
        }}
      >
        Add Restaurant
      </NavLink>
      <NavLink
        className="nav-link menuList"
        to={{
          pathname: "/addAdvertisement",
        }}
      >
        Post An Ad
      </NavLink>
      <a href="#deliver" className="nav-link">
        <div className="menuList">Sign up to deliver</div>
      </a>
    </Menu>
  );
}
export default SideBar;
