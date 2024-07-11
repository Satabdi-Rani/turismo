import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Home/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
// import Banner from "../Login/Banner";
import Swal from 'sweetalert2'
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";



const Register = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const [success, setSuccess] = useState('');
    const [registerError, setRegisterError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();


    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);

        setSuccess('')
        setRegisterError('')


        if (password.length < 6) {
            setRegisterError(
                Swal.fire({
                    title: "Error!",
                    text: "Password should be atleast 6 characters",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Ok"
                })

            )
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError(
                Swal.fire({
                    title: "Error!",
                    text: "Password must have an Uppercase Letter",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Ok"
                })

            )
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setRegisterError(
                Swal.fire({
                    title: "Error!",
                    text: "Password must have a Lowercase Letter",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Ok"
                })

            )
            return;
        }

        // create user with email and password
        createUser(email, password)
            .then(result => {
                // const user = result.user;
                // console.log(user)
                setSuccess(
                    Swal.fire({
                        title: "Congrats!",
                        text: "Your account has been created.",
                        icon: "success",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Ok"
                    })
                        .then((result) => {
                            // if (result.isConfirmed) {
                            //   Swal.fire({
                            //     title: "Deleted!",
                            //     text: "Your file has been deleted.",
                            //     icon: "success"
                            //   })
                            // }
                            navigate('/login')
                        }
                        )

                )
                updateUser({
                    dispayName: name,
                    photoURL: photo
                })
                const user = { email, name, photo };
                fetch('https://turismo-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })

            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen z-10 mt-[-100px] h-[300px] w-full sm:h-[400px] md:h-[400px] lg:h-[1000px] pb-20 lg:w-full bg-cover bg-blend-overlay  bg-[url('https://i.ibb.co/dpt2nbf/famous-view-big-ben-houses-parliament-london-uk.jpg')]">
                <div className=" flex-col w-4/5 lg:w-1/3 ">
                    <div className="card  mt-40 lg:mt-24  shadow-2xl bg-gradient-to-r from-[#0F2454] to-[#1288B8]">
                        <div className="text-center pt-5">
                            <h1 className="text-3xl lg:text-5xl font-bold mt-8 text-center text-white">Register</h1>
                            <p className="pt-6 text-md lg:text-lg text-center text-white">
                                Join us in your travel history!
                            </p>
                        </div>
                        <form onSubmit={handleRegister} className="card-body pb-10">
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
                                <input type={showPassword ? "text" : "password"} placeholder="password" name="password" className="input input-bordered" required />
                                <button onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <p><FaRegEyeSlash className="relative right-10 sm:left-[400px] sm:bottom-8 text-xl" /></p> :
                                            <p><FaRegEye className="relative sm:left-[400px] sm:bottom-8 text-xl" /></p>
                                    }
                                </button>
                            </div>
                            <div className="form-control mt-6">

                                <button className="btn w-full bg-gradient-to-r from-[#1288B8] to-[#0F2454] text-white border-none text-lg">Register</button>

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