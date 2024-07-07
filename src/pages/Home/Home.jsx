import Footer from "../Footer/Footer";
import Discover from "./Discover/Discover";
import Experience from "./Experience/Experience";
import Navbar from "./Navbar/Navbar";
import Slider from "./Slider/Slider";
import TouristSpots from "./TouristSpots/TouristSpots";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <Discover></Discover>
            <TouristSpots></TouristSpots>
            <Experience></Experience>
            <Footer></Footer>
        </div>
    );
};

export default Home;