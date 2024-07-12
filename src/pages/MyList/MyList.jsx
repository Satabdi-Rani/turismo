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
                console.log('update')
            }
        })
    }
    return (
        <div className="bg-gradient-to-t from-[#1288B8] to-[#0F2454] text-white">
            <Navbar></Navbar>
            <div className="mt-16 pb-16">
                <div className="sm:mx-20">
                    <table className="table border ">
                        {/* head */}
                        <thead>
                            <tr className="text-white text-xl text-center">
                            
                                <th>Country</th>
                                <th>Tourist Spot</th>
                                <th>Travel Time</th>
                                <th>Average Cost</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
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