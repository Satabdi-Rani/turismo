import Footer from "../Footer/Footer";
import Discover from "./Discover/Discover";
import Navbar from "./Navbar/Navbar";
import Slider from "./Slider/Slider";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <Discover></Discover>
            <Footer></Footer>
        </div>
    );
};

export default Home;