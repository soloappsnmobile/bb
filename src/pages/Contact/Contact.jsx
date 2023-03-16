import Footer from "../../components/Footer/Footer";
import { Banner, Contact, FAQ } from "./components";
import Maps from "./components/Map/Maps";


const ContactUs = () => {
  return (
    <div>
      <Banner />
      <Maps />

      <Contact />
      <FAQ/>
      <Footer />
    </div>
  );
};

export default ContactUs;
