import PropTypes from 'prop-types';

const SingleTouristFromAll = ({ allspot }) => {
    const { touristSpot, image, location, travelTime, totalVisitors, averageCost, season, details } = allspot;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{touristSpot}</h2>
                    <p>{location}</p>
                    <hr />
                    <ul className='flex flex-row justify-between'>
                        <li>Travel Time:</li>
                        <li>{travelTime}</li>
                    </ul>
                    <hr />
                    <ul className='flex flex-row justify-between'>
                        <li>Average Cost:</li>
                        <li>{averageCost}</li>
                    </ul>
                    <hr />
                    <ul className='flex flex-row justify-between'>
                        <li>Total Visitors:</li>
                        <li>{totalVisitors}</li>
                    </ul>
                    <hr />
                    <ul className='flex flex-row justify-between'>
                        <li>Season:</li>
                        <li>{season}</li>
                    </ul>
                    <hr />
                    <p>Details: {details}</p>
                    
                    <div className="card-actions mt-4">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

SingleTouristFromAll.propTypes = {
    allspot: PropTypes.object
}

export default SingleTouristFromAll;