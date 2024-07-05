import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Home/Navbar/Navbar";
import { FaGithub, FaGoogle} from "react-icons/fa";

const Login = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen z-10 mt-[-100px] h-[300px] w-full sm:h-[400px] md:h-[400px] lg:h-[1000px] pb-20 lg:w-full bg-cover bg-blend-overlay  bg-[url('https://i.ibb.co/dpt2nbf/famous-view-big-ben-houses-parliament-london-uk.jpg')]">
                <div className=" flex-col w-1/3 ">
                    <div className="card  bg- mt-24  shadow-2xl bg-gradient-to-r from-[#0F2454] to-[#1288B8]">
                        <div className="text-center pt-5">
                            <h1 className="text-5xl font-bold mt-8 text-center text-white">Login</h1>
                            <p className="pt-6 text-center text-white">
                                Join us in your travel history!
                            </p>
                        </div>
                        <form className="card-body pb-10">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-gradient-to-r from-[#1288B8] to-[#0F2454] text-white border-none text-lg">Login</button>
                            </div>
                        </form>
                        <div className="divider bg-[#FFFFFF] h-0  w-4/5 mx-auto text-white ">Or Login with</div>
                        <div className="mx-auto mb-6">
                            <div className="flex flex-row gap-4 text-lg  sm:mt-6 mb-4">
                                <button className="border p-1 w-10 h-10 rounded-full bg-white text-blue-[#0F2454]"><FaGoogle className="ml-[5px] mt-0" /></button>
                                <button className="border p-1 w-10 h-10 rounded-full bg-white text-blue-[#0F2454]"><FaGithub className="ml-[6px] mt-0" /></button>
                            </div>
                        </div>
                        {/* <hr className="w-4/5 mx-auto pb-6 mt-6 inline" /> <p className="text-white">sdbhchsd</p> */}
                        <p className="text-white text-center pb-6">Do not have any account? Please <span className="font-bold text-yellow-400"><Link to='/login'>Register</Link></span></p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;