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
        <div className="bg-gradient-to-r from-[#1288B8] to-[#0F2454]">
            <Navbar></Navbar>
            <div className="mx-auto container lg:mx-12 xl:mx-auto mt-20 mb-20">
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