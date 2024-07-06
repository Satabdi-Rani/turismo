import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaLinkedin, FaYoutube } from "react-icons/fa6";
import { MdWifiCalling3 } from "react-icons/md";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";



const Footer = () => {
    return (
        <div className="bg-[#0F2454]">
            <div className="mx-auto container pt-20">
                <div className="grid grid-cols-1 sm:grid-cols-3 border border-cyan-800 gap-10 text-white sm:px-12 py-8 ml-16 sm:ml-32 mr-16 sm:mr-40 mb-10">
                    <div className="flex flex-row gap-4 border-b pb-8 pl-10 sm:pl-0 sm:pb-0 sm:border-r border-gray-600 sm:mr-16">
                        <MdWifiCalling3 className="bg-[#1288B8] text-white text-lg p-3 w-16 h-16 mt-1"></MdWifiCalling3>
                        <ul className="flex flex-col ml-3">
                            <li className="font-bold text-xl">Call us</li>
                            <li className="text-md mt-2">+1 123-456-0606</li>
                        </ul>
                    </div>
                    <div className="flex flex-row gap-4 border-b pb-8 pl-10 sm:pl-0 sm:pb-0 sm:border-r border-gray-600 sm:mr-16">
                        <FaEnvelopeOpenText className="bg-[#1288B8] text-white text-lg p-3 w-16 h-16 mt-1"></FaEnvelopeOpenText>
                        <ul className="flex flex-col ml-3">
                            <li className="font-bold text-xl">Write to us</li>
                            <li className="text-md mt-2">info@turismo.com</li>
                        </ul>
                    </div>
                    <div className="flex flex-row gap-4 pl-10 sm:pl-0  ">
                        <FaMapLocationDot className="bg-[#1288B8] text-white text-lg p-3 w-16 h-16 mt-1"></FaMapLocationDot>
                        <ul className="flex flex-col ml-3">
                            <li className="font-bold text-xl">Address</li>
                            <li className="text-md mt-2">24 King St, SC 29401 USA</li>
                        </ul>
                    </div>
                </div>

                <div className="lg:mx-12 grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3  gap-8 text-white pt-16 pb-12">
                    <div className="w-3/4 sm:w-[80%] mx-auto md:w-full md:ml-8 lg:ml-0 col-span-4 sm:col-span-1">
                        <h2 className="text-3xl text-white font-bold">Turismo</h2>
                        <h3 className="text-lg leading-6 pt-3">By aiming to take the quality life to an upper level with the whole amazing places, Turismo continues to serve the people of travel hunger.</h3>
                        <ul className="flex flex-row gap-4 text-lg mt-6 sm:mt-10">
                            <li className="border p-1 w-10 h-10 rounded-full bg-[#1288B8]"><a href="www.facebook.com"><FaFacebookF className="ml-1 mt-1" /></a></li>
                            <li className="border p-1 w-10 h-10 rounded-full bg-[#1288B8]"><a href="www.facebook.com"><FaTwitter className="ml-2 mt-[7px]" /></a></li>
                            <li className="border p-1 w-10 h-10 rounded-full bg-[#1288B8]"><a href="www.facebook.com"><FaLinkedin className="ml-[5px] mt-[6px]" /></a></li>
                            <li className="border p-1 w-10 h-10 rounded-full bg-[#1288B8]"><a href="www.facebook.com"><FaYoutube className="ml-[5px] mt-[6px]" /></a></li>
                        </ul>
                    </div>
                    <ul className="flex flex-col justify-center ml-16  sm:mx-auto gap-2 text-lg col-span-2 sm:col-span-1 mt-6 mb-4 sm:mt-0 sm:mb-0">
                        <h5 className="text-2xl font-bold">Quick Links</h5>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/'>All Tourists Spot</Link></li>
                        <li><Link to='/'>Add Tourists Spot</Link></li>
                        <li><Link to='/'>My List</Link></li>
                    </ul>
                    <div className="text-left ml-16 sm:ml-0  mt-4 sm:mt-6 md:mt-2 sm:text-left  col-span-4 sm:col-span-1">
                        <h5 className="text-2xl font-bold">Subscribe</h5>
                        <h6 className="text-md sm:ml-5 md:ml-0 lg:ml-0 mt-2 w-4/5 ">Sign up for our monthly blogletter to stay informed about travel and tours</h6>
                        <div className="mt-8">
                            <input className="w-1/2 py-2 rounded-lg pl-6 " type="email" placeholder="Email Address" />
                            <input className="right-7 relative outline-none bg-[#1288B8] px-4 py-2 rounded-lg" type="submit" value="Send" />
                        </div>
                    </div>

                </div>

                <hr className="w-4/5 mx-auto" />
                <div>
                    <h6 className="text-center text-white py-8">© 2024 Turismo - All rights reserved</h6>
                </div>
            </div>

        </div>
    );
};

export default Footer;