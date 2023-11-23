import { useLocation, useNavigate } from "react-router-dom";
import "./AccountSummary.css";
import logo from "../../assets/logo.png";

function AccountSummary() {
  const location = useLocation();
  const navigate = useNavigate();

  function signOut() {
    navigate("/");
  }

  return (
    <div className="paper">
      <div className="side-panel">
        <div className="left-panel">
          <p className="left-panel-tags">Wallet</p>
          <p className="left-panel-tags">Profile</p>
          <p className="left-panel-tags">Help</p>
        </div>
        <button className="signout" onClick={signOut}>
          Sign Out
        </button>
      </div>

      <div className="content-box">
        <div className="basic-info">
          <div className="image-container">
            <img id="image" src={logo} alt="profile-img" />
          </div>
          <div className="contact-details">
            <p className="username">
              {location.state.firstName} {location.state.lastName}
            </p>
            <p>+1 {location.state.phone}</p>
          </div>
        </div>

        <div>
          <p className="headings">Location</p>
          <div className="data-container">
            {location.state.city}, {location.state.state}
          </div>
        </div>

        <div>
          <p className="headings">Email</p>
          <div className="data-container">{location.state.email}</div>
        </div>
      </div>
    </div>
  );
}

export default AccountSummary;