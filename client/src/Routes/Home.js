import Slider from "../components/Slider";
import Catagory from "../components/Catagory";
import Popular from "../components/Popular";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";


const Home=()=>{
    return (
        <div>
            <Slider />
            <Catagory />
            <Popular />
            <Testimonials />
        </div>
    )
}

export default Home;