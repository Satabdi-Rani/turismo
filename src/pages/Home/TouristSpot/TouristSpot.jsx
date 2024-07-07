import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const TouristSpot = ({ touristSpot }) => {
    console.log(touristSpot);
    const { country, image, locationName, tourPackage, group, _id } = touristSpot;
    return (
        <div className="">
            <div className="card  w-96 shadow-xl">
                <figure>
                    <img className="h-[300px]"
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <ul className="flex felx-row gap-2">
                        <li className="text-xl mt-2"><FaLocationDot /></li>
                        <li className="text-2xl font-bold">{locationName},</li>
                        <li className="text-2xl font-bold">{country}</li>
                    </ul>
                    <p className="mt-4 font-semibold text-lg">Package: {tourPackage} </p>
                    <hr />
                    <p className="mt-2 font-semibold text-md mb-2">Group: {group} </p>
                    <div className="card-actions ">
                        <Link to={`/touristspots/${_id}`}>
                        <button  className="btn btn-primary w-full  text-lg  bg-[#1288B8] border-none text-white ">View Details</button>
                        
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TouristSpot;