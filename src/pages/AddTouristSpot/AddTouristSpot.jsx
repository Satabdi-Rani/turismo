import Footer from "../Footer/Footer";
import Navbar from "../Home/Navbar/Navbar";

const AddTouristSpot = () => {

    const handleAddTouristSpots = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const touristSpot = form.touristSpot.value;
        const country = form.country.value;
        const image = form.image.value;
        const location = form.location.value;
        const travelTime = form.travelTime.value;
        const totalVisitors = form.totalVisitors.value;
        const averageCost = form.averageCost.value;
        const season = form.season.value;
        const details = form.details.value;
        const spot = {name, email, touristSpot, country, image, location, travelTime, totalVisitors, averageCost, season, details}
        console.log(name, email, touristSpot, country, image, location, travelTime, totalVisitors, averageCost, season, details);

        fetch('https://turismo-server.vercel.app/addtouristspot', {
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(spot)
        })
    }
    return (
        <div className="">
            <Navbar></Navbar>
            <div className="mt-[-100px] h-[300px] w-full sm:h-[400px] md:h-[400px] lg:h-[1000px] pb-20 lg:w-full bg-cover bg-blend-overlay  bg-[url('https://i.ibb.co/M9ZGBLN/aerial-shot-beautiful-natural-reserve-bonifacio-france.jpg')]">
                <div>
                    <div className="hero min-h-screen">
                        <div className=" flex-col lg:flex-row-reverse">

                            <div className="card bg-base-100  shrink-0 shadow-2xl mt-32 pt-20 mb-32 ">
                                <div className="text-center lg:text-left">
                                    <h1 className="text-5xl font-bold text-center">Add your favorite spot!</h1>
                                    <p className="py-6 text-center">
                                        We are happy to serve you the best. The best place to serve with any travel place.
                                    </p>
                                </div>
                                <form onSubmit={handleAddTouristSpots} className="card-body">
                                <div className="flex flex-row gap-8">
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" placeholder="Name" name="name" className=" input input-bordered" required />
                                    </div>
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                                    </div>
                                    </div>


                                    <div className="flex flex-row gap-8">
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Tourist Spot Name</span>
                                        </label>
                                        <input type="text" placeholder="Tourist Spot Name" name="touristSpot" className=" input input-bordered" required />
                                    </div>
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Country Name</span>
                                        </label>
                                        <input type="text" placeholder="Country Name" name="country" className="input input-bordered" required />
                                    </div>
                                    </div>


                                    <div className="flex flex-row gap-8">
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Image URL</span>
                                        </label>
                                        <input type="text" placeholder="Image URL" name="image" className=" input input-bordered" required />
                                    </div>
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Location</span>
                                        </label>
                                        <input type="text" placeholder="Location" name="location" className="input input-bordered" required />
                                    </div>
                                    </div>


                                    <div className="flex flex-row gap-8">
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Travel Time</span>
                                        </label>
                                        <input type="text" placeholder="Exp: 7 days" name="travelTime" className=" input input-bordered" required />
                                    </div>
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Total Visitors</span>
                                        </label>
                                        <input type="text" placeholder="Exp: 10000" name="totalVisitors" className="input input-bordered" required />
                                    </div>
                                    </div>


                                    <div className="flex flex-row gap-8">
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Average Cost</span>
                                        </label>
                                        <input type="text" placeholder="cost" name="averageCost" className=" input input-bordered" required />
                                    </div>
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Seasonality</span>
                                        </label>
                                        <input type="text" placeholder="Exp: 10000" name="season" className="input input-bordered" required />
                                    </div>
                                    </div>

                                    <div className="flex flex-row gap-8">
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Details</span>
                                        </label>
                                        <input type="text" placeholder="Details" name="details" className=" input input-bordered" required />
                                    </div>
                                    </div>

                                    
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Add</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddTouristSpot;