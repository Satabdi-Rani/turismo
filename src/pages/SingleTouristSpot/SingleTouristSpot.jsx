import { useLoaderData } from "react-router-dom";
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Footer/Footer";

const SingleTouristSpot = () => {
    const singleTouristSpot = useLoaderData();
    console.log(singleTouristSpot)
    const { country, image, locationName, information, 
        departure, group, priceIncludes,
        departureTime, returnTime, tourPackage
         } = singleTouristSpot;
    return (
        <div className="bg-cyan-400">
            <Navbar> </Navbar>
            <div className="hero bg-base-200 min-h-screen px-20">
                <div className="flex flex-col lg:flex-row">
                    <img
                        src={image}
                        className="max-w-4xl rounded-lg shadow-2xl" />
                    <div>
                       <div className="ml-16">
                       <h1 className="text-5xl font-bold">{locationName}</h1>
                       <h3 className="text-3xl font-bold my-2">{country}</h3>
                       <h4 className="mt-8"><span className="text-lg font-semibold">Package:</span> {tourPackage}</h4>
                       <h4 className="mt-2"><span className="text-lg font-semibold">Group:</span> {group}</h4>
                        <p className="py-6"> <span className="text-lg font-semibold">Details: </span>
                            <br />
                            {information}
                        </p>
                        <hr />
                        <ul className="flex flex-row justify-between my-2">
                            <li className="text-md font-semibold">Departure</li>
                            <li className="text-md">{departure}</li>
                        </ul>
                        <hr />
                        <ul className="flex flex-row justify-between my-2">
                            <li className="text-md font-semibold">Departure Time</li>
                            <li className="text-md">{departureTime}</li>
                        </ul>
                        <hr />
                        <ul className="flex flex-row justify-between my-2">
                            <li className="text-md font-semibold">Return Time</li>
                            <li className="text-md">{returnTime}</li>
                        </ul>
                        <hr />
                        <ul className="flex flex-row justify-between my-2">
                            <li className="text-md font-semibold">Price Includes:</li>
                            <li className="text-md">
                            {
                                priceIncludes.map((price, idx) => <li key={idx}>{price}</li>)
                            }
                            </li>
                            
                        </ul>
                    </div>
                       </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SingleTouristSpot;