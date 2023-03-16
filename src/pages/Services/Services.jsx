import Footer from "../../components/Footer/Footer"
import Banner from "./Banner/Banner"
import Priceplan from "./Priceplan/Priceplan"
import Servicelist from "./ServiceList/Servicelist"



const Services = () => {
    return (
        <div>
            <Banner/>
            <Servicelist/>
            <Priceplan/>
            <Footer/>
        </div>
    )
}

export default Services
