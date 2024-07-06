import { useEffect, useState } from "react";
import TouristSpot from "../TouristSpot/TouristSpot";

const TouristSpots = () => {
    const [touristSpots, setTouristspots] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/touristspots')
            .then(res => res.json())
            .then(data => setTouristspots(data))
    }, [])

    return (
        <div className="mt-32 pt-32 pb-32 bg-gray-100">
            <div className="mx-auto container">
                <h4 className="text-[#1288B8] text-xl mb-2">TOP DESTINATION</h4>
                <h1 className="text-5xl font-bold ">POPULAR <span className="text-[#1288B8]">TOURIST SPOTS</span></h1>
                <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3 mt-16">
                    {
                        touristSpots.map(touristSpot => <TouristSpot key={touristSpot._id} touristSpot={touristSpot}></TouristSpot>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TouristSpots;