import { useContext, useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Home/Navbar/Navbar";
import { AuthContext } from "../../providers/AuthProvider";
import MyBooking from "./MyBooking";

const MyList = () => {
    const { user } = useContext(AuthContext);
    const [mybookings, setMyBookings] = useState([]);

    const url = `https://turismo-server.vercel.app/addtouristspot?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyBookings(data))
    }, [])

    const handleUpdate = id => {
        console.log("clicked", id)
        fetch(`https://turismo-server.vercel.app/addtouristspot/${id}`, {
           method: 'PATCH',
           headers: {
            'content-type' : 'application/json'
           },
           body: JSON.stringify({status: 'confirm'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){

            }
        })
    }
    return (
        <div className="bg-blue-500">
            <Navbar></Navbar>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                            
                                <th>Country</th>
                                <th>Tourist Spot</th>
                                <th>Travel Time</th>
                                <th>Average Cost</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                           
                            {
                                mybookings.map(mybooking => <MyBooking key={mybooking._id} handleUpdate={handleUpdate}  mybooking={mybooking}></MyBooking> )
                            }
                           
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyList;