import { useNavigate } from "react-router-dom";
import "./styles/InitialHeader.css";
import logo from "../../assets/logo.png";

function InitialHeader(props) {
  const navigate = useNavigate();

  const loginPage = () => {
    navigate("/login");
  };
  const registerPage = () => {
    navigate("/register");
  };

  return (
    <div className="initialheader">
      <div className="logoNutraMeals"> 
        <a href="#home">
           <img src={logo} alt=""></img>
        </a>
      </div>
      <div>
        <button onClick={loginPage} className="btn-bookH animated fadeInUp scrollto">Login</button>
        <button onClick={registerPage} className="register btn-bookH animated fadeInUp scrollto" href="#register">
          Register
        </button>
      </div>
    </div>
  );
}

export default InitialHeader;
