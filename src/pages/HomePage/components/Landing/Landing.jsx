import Navbar from "../../../../components/Navbar/Navbar";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing-section">
      <Navbar />
      <div className="landing-container text-center">
        <p>Welcome To</p>
        <h1> Press Consultancy </h1>
        <p>
         Get the best work done
        </p>
      </div>
    </div>
  );
};

export default Landing;
