import "./styles/HomePageHeader.css";
import logo from "../../assets/logo.png";
import SideBar from "./SideBar";

function HomePageHeader(props) {
  return (
    <div >
      <div id="outer-container">
        <SideBar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      </div>
      <div className="header">
        <div className="image-container">
          <img className="menu-icon-logo" alt="logo" src={logo} />
        </div>
      <div className="header-right">
        <a href="#home" className="textColor">Home</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
      </div>
    </div>
  );
}

export default HomePageHeader;
