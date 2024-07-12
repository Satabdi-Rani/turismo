import { Link } from "react-router-dom";

const MyBooking = ({mybooking, handleUpdate}) => {
    const {country, touristSpot, travelTime, averageCost, _id} = mybooking;

    
    return (
        <tr>
        <th>{country}</th>
        <td>{touristSpot}</td>
        <td>{travelTime}</td>
        <td>{averageCost} </td>
        <td className="flex flex-row gap-2 items-center justify-center">
            {/* <button onClick={()=> handleUpdate(_id)} className="">Update</button> */}
            <Link to={`/updatelist/${_id}`}>
              <button className="px-4 py-2 bg-white text-black rounded">Update</button>
            </Link>
            <button className="px-4 py-2 bg-white text-black rounded">Delete</button>
        </td>
    </tr>
    );
};

export default MyBooking;