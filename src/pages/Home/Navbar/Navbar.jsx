import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from "react-tooltip";

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    // console.log(user.photoURL)

    const handleLogout = () => {
        logOut()
        .then()
        .catch(error => {
            console.log(error)
        })
    }

    const navlinks = <>
        <li className="hover:text-cyan-900"><Link to='/'>Home</Link></li>
        <li><Link to='/alltouristspot'>All Tourists Spot</Link></li>
        {/* {
            user &&  
        } */}
        
        <li><Link to='/addtouristspot'>Add Tourists Spot</Link></li>
        <li><Link to='/mylist'>My List</Link></li>
    </>

    return (
        <div className="z-50 bg-transparent relative">
            <div className="container mx-auto  pt-6">
                <div className="navbar ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm  dropdown-content text-white bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {navlinks}
                            </ul>
                        </div>
                        <a href="/" className="  text-white text-bold text-3xl lg:pl-20">Turismo</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-white  text-lg">
                            {navlinks}
                        </ul>
                    </div>
                    <div className="navbar-end flex flex-row gap-3 lg:pr-16">
                        {
                            user ? <>
                            <img id="clickable" className="w-10 h-10 border rounded-full" src={user.photoURL} alt="" />
                            <Tooltip anchorSelect="#clickable" place="top">
                                <p className="uppercase">{user.displayName}</p>
                            </Tooltip>

                            <Link to=''>
                            <button onClick={handleLogout} className="btn hover:bg-white text-lg hover:text-[#1288B8] bg-[#1288B8] shadow-xl text-white px-6 border-none rounded-xl py-2 ">LogOut</button>
                        </Link>
                            </> 
                        : 
                        <>
                           <Link to='/login'>
                            <button className="btn hover:bg-white text-lg hover:text-[#1288B8] bg-[#1288B8] shadow-xl text-white px-6 border-none rounded-xl py-2 ">Login</button>
                        </Link>
                        <Link to='/register'>
                            <button className="btn hover:bg-white text-lg hover:text-[#1288B8] bg-[#1288B8] shadow-xl text-white px-6 border-none rounded-xl py-2 ">Register</button>
                        </Link>
                        </>
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;