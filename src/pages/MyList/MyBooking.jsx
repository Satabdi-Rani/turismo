import { Link } from "react-router-dom";

const MyBooking = ({mybooking, handleUpdate}) => {
    const {country, touristSpot, travelTime, averageCost, _id} = mybooking
    return (
        <tr>
        <th>{country}</th>
        <td>{touristSpot}</td>
        <td>{travelTime}</td>
        <td>{averageCost} </td>
        <td className="flex flex-row">
            {/* <button onClick={()=> handleUpdate(_id)} className="">Update</button> */}
            <Link to={`/updatelist/${_id}`}>Update</Link>
            <button>Delete</button>
        </td>
    </tr>
    );
};

export default MyBooking;