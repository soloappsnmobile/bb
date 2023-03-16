import "./HomePage.css";
import { Landing , Jumbotron, WhyChooseUs, Team, Ceomessage, Contact} from './components'
import Footer from "../../components/Footer/Footer";


const HomePage = () => {
  return <div className="homepage">
    <Landing />
    <Jumbotron />
    {/* <WhyChooseUs />
    <Team /> */}
    <Ceomessage />
    <Contact />
    <Footer />
  </div>;
};

export default HomePage;
