import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-cyan-300" id="error-page">
        <h1 className="text-red-500 text-7xl font-bold">Oops!</h1>
        <p className="text-xl mt-6">Sorry, an unexpected error has occurred.</p>
        <p className="text-xl mt-4">Back to <Link to='/'><span className="text-extrabold text-black underline">Home</span></Link>    </p>
            
        </div>
    );
};

export default ErrorPage;