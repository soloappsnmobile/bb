import "./Jumbotrun.css";
import gnat from "../../../../assets/images/gnat.png";
import waec from "../../../../assets/images/waec.png";
import ges from "../../../../assets/images/ges.png";
const Jumbotron = () => {
  return (
    <div className="container mt-5 mb-5 jumbotron-container">
      <img src={gnat} alt="" className="image" />
      <img src={waec} alt="" className="image" />
      <img src={ges} alt="" className="image" />
    </div>
  );
};

export default Jumbotron;
