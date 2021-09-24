import logo from "../../images/logo.png";
import ConnectingButtons from "../../components/ConnectingButtons/ConnectingButtons";

import "./HomePage.styles.css";

function HomePage() {
  return (
    <div className="home_page_container">
      <div className="home_page_panel">
        <img src={logo} alt="" className="home_page_image" />{" "}
        <ConnectingButtons />
      </div>
    </div>
  );
}

export default HomePage;
