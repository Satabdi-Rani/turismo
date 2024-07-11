import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Home/Navbar/Navbar";
import SingleTouristFromAll from "./SingleTouristFromAll";

const AllTouristSpot = () => {
    const [alltouristSpot, setAllToursitSpot] = useState([]);

    useEffect(() => {
        fetch('https://turismo-server.vercel.app/alltouristspot')
            .then(res => res.json())
            .then(data => setAllToursitSpot(data))
    }, [])
    return (
        <div className="bg-gradient-to-b from-sky-300 to-blue-500">
            <Navbar></Navbar>
            <div className="mx-auto container mt-20 mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {
                        alltouristSpot.map((allspot) => <SingleTouristFromAll key={allspot._id} allspot={allspot}></SingleTouristFromAll>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllTouristSpot;