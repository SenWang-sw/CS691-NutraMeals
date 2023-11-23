import HomePageBody from "./HomePageBody";
import InitialHeader from "./InitialHeader";
import "./styles/HomePageLayout.css";

function HomePage() {
  return (
    <div className="HomePageLayout">
      <InitialHeader />
      <HomePageBody />
    </div>
  );
}

export default HomePage;
