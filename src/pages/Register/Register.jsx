import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Home/Navbar/Navbar";
// import Banner from "../Login/Banner";

const Register = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen z-10 mt-[-100px] h-[300px] w-full sm:h-[400px] md:h-[400px] lg:h-[1000px] pb-20 lg:w-full bg-cover bg-blend-overlay  bg-[url('https://i.ibb.co/dpt2nbf/famous-view-big-ben-houses-parliament-london-uk.jpg')]">
                <div className=" flex-col w-1/3 ">
                    <div className="card  bg- mt-24  shadow-2xl bg-gradient-to-r from-[#0F2454] to-[#1288B8]">
                    <div className="text-center pt-5">
                        <h1 className="text-5xl font-bold mt-8 text-center text-white">Register</h1>
                        <p className="pt-6 text-center text-white">
                            Join us in your travel history!
                        </p>
                    </div>
                        <form className="card-body pb-10">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
                            </div>
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
                                <Link to='/'>
                                <button className="btn w-full bg-gradient-to-r from-[#1288B8] to-[#0F2454] text-white border-none text-lg">Register</button> 
                                </Link>
                            </div>
                        </form>
                        <p className="text-white text-center pb-6">Already have an account? Please <span className="font-bold text-yellow-400"><Link to='/login'>Login</Link></span></p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;